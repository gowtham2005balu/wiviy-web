'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

/** Standard 8x8 Bayer ordered dithering threshold matrix normalized to [0, 1) */
const BAYER_8X8 = new Float32Array([
   0, 32,  8, 40,  2, 34, 10, 42,
  48, 16, 56, 24, 50, 18, 58, 26,
  12, 44,  4, 36, 14, 46,  6, 38,
  60, 28, 52, 20, 62, 30, 54, 22,
   3, 35, 11, 43,  1, 33,  9, 41,
  51, 19, 59, 27, 49, 17, 57, 25,
  15, 47,  7, 39, 13, 45,  5, 37,
  63, 31, 55, 23, 61, 29, 53, 21,
].map((v) => v / 64.0));

/** Smoothstep helper identical to GLSL smoothstep(min, max, value) */
function smoothstep(edge0, edge1, x) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/** Helper: Parse Hex / RGB / HSL string to RGB [0..255] */
function parseColorToRgbBytes(colorStr) {
  if (!colorStr) return [210, 240, 38]; // fallback brand lime #D2F026
  const trimmed = colorStr.trim();

  // Hex format
  if (trimmed.startsWith('#')) {
    const cleanHex = trimmed.replace('#', '');
    if (cleanHex.length === 3) {
      return [
        parseInt(cleanHex[0] + cleanHex[0], 16),
        parseInt(cleanHex[1] + cleanHex[1], 16),
        parseInt(cleanHex[2] + cleanHex[2], 16),
      ];
    }
    if (cleanHex.length >= 6) {
      return [
        parseInt(cleanHex.substring(0, 2), 16),
        parseInt(cleanHex.substring(2, 4), 16),
        parseInt(cleanHex.substring(4, 6), 16),
      ];
    }
  }

  // RGB / RGBA format
  const rgbMatch = trimmed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (rgbMatch) {
    return [
      parseInt(rgbMatch[1], 10),
      parseInt(rgbMatch[2], 10),
      parseInt(rgbMatch[3], 10),
    ];
  }

  // HSL / named color fallback via scratch canvas
  if (typeof document !== 'undefined') {
    try {
      const scratch = document.createElement('canvas');
      scratch.width = 1;
      scratch.height = 1;
      const ctx = scratch.getContext('2d');
      if (ctx) {
        ctx.fillStyle = trimmed;
        ctx.fillRect(0, 0, 1, 1);
        const imgData = ctx.getImageData(0, 0, 1, 1).data;
        return [imgData[0], imgData[1], imgData[2]];
      }
    } catch {
      // fallback
    }
  }

  return [210, 240, 38];
}

export function DitherCursor({
  color = '#D2F026',
  ditherSize = 4,
  grainSize,
  radius = 0.12,
  intensity = 0.6,
  decay = 0.012,
  exponent = 2.0,
  falloff,
  smoothness = 0.35,
  opacity = 1.0,
  blendMode = 'normal',
  attachToParent = false,
  targetRef,
  hideNativeCursor = false,
  clearOnLeave = true,
  zIndex,
  textMaskSelector,
  className = '',
  style = {},
  children,
  disabled = false,
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const effectiveDitherSize = grainSize !== undefined ? grainSize : ditherSize;
  const effectiveExponent = falloff !== undefined ? falloff : exponent;

  const propsRef = useRef({
    color,
    ditherSize: effectiveDitherSize,
    radius,
    intensity,
    decay,
    exponent: effectiveExponent,
    smoothness,
    opacity,
    textMaskSelector,
    disabled,
  });

  useEffect(() => {
    propsRef.current = {
      color,
      ditherSize: effectiveDitherSize,
      radius,
      intensity,
      decay,
      exponent: effectiveExponent,
      smoothness,
      opacity,
      textMaskSelector,
      disabled,
    };
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || disabled) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas) return;

    const mainCtx = canvas.getContext('2d');
    if (!mainCtx) return;

    const isBound = attachToParent || Boolean(targetRef);
    const targetElement = targetRef?.current
      ? targetRef.current
      : attachToParent && container?.parentElement
      ? container.parentElement
      : window;

    const getTargetDimensions = () => {
      if (isBound && targetElement && targetElement !== window) {
        const el = targetElement;
        const rect = el.getBoundingClientRect();
        return {
          width: Math.max(Math.floor(rect.width), 1),
          height: Math.max(Math.floor(rect.height), 1),
        };
      }
      return {
        width: Math.max(window.innerWidth, 1),
        height: Math.max(window.innerHeight, 1),
      };
    };

    const offscreen = document.createElement('canvas');
    const offscreenCtx = offscreen.getContext('2d', { willReadFrequently: false });
    if (!offscreenCtx) return;

    let gridW = 0;
    let gridH = 0;
    let trail = new Float32Array(0);
    let imgData = null;
    let pixels32 = null;
    let aspect = 1.0;
    let targetWidth = 0;
    let targetHeight = 0;

    const resize = () => {
      const dim = getTargetDimensions();
      targetWidth = dim.width;
      targetHeight = dim.height;
      aspect = targetWidth / targetHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = targetWidth * dpr;
      canvas.height = targetHeight * dpr;
      canvas.style.width = `${targetWidth}px`;
      canvas.style.height = `${targetHeight}px`;

      const gSize = Math.max(propsRef.current.ditherSize, 1.0);
      const newGridW = Math.max(1, Math.ceil(targetWidth / gSize));
      const newGridH = Math.max(1, Math.ceil(targetHeight / gSize));

      if (newGridW !== gridW || newGridH !== gridH) {
        gridW = newGridW;
        gridH = newGridH;
        offscreen.width = gridW;
        offscreen.height = gridH;

        trail = new Float32Array(gridW * gridH);
        imgData = offscreenCtx.createImageData(gridW, gridH);
        pixels32 = new Uint32Array(imgData.data.buffer);
      }
    };

    resize();

    const targetMouse = { x: -10, y: -10 };
    const currentMouse = { x: -10, y: -10 };

    const handlePointerMove = (e) => {
      if (isBound && targetElement && targetElement !== window) {
        const el = targetElement;
        const rect = el.getBoundingClientRect();
        targetMouse.x = (e.clientX - rect.left) / rect.width;
        targetMouse.y = (e.clientY - rect.top) / rect.height;
      } else {
        const w = window.innerWidth || document.documentElement.clientWidth || 1;
        const h = window.innerHeight || document.documentElement.clientHeight || 1;
        targetMouse.x = e.clientX / w;
        targetMouse.y = e.clientY / h;
      }
    };

    const handlePointerLeave = () => {
      if (clearOnLeave) {
        targetMouse.x = -10;
        targetMouse.y = -10;
      }
    };

    let scrollTimeout = null;
    const handleScroll = () => {
      if (!isBound || !targetElement || targetElement === window) return;
      const el = targetElement;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const travel = windowHeight + rect.height;
        const current = windowHeight - rect.top;
        const progress = Math.max(0, Math.min(1, current / travel));
        targetMouse.x = progress;
        targetMouse.y = 0.5 + Math.sin(progress * Math.PI * 2.5) * 0.2;

        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          targetMouse.x = -10;
          targetMouse.y = -10;
        }, 200);
      }
    };

    if (isBound && targetElement && targetElement !== window) {
      const el = targetElement;
      el.addEventListener('pointermove', handlePointerMove, { passive: true });
      el.addEventListener('mousemove', handlePointerMove, { passive: true });
      el.addEventListener('pointerleave', handlePointerLeave);
      el.addEventListener('mouseleave', handlePointerLeave);
      window.addEventListener('scroll', handleScroll, { passive: true });
    } else {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      document.addEventListener('pointermove', handlePointerMove, { passive: true });
      window.addEventListener('mousemove', handlePointerMove, { passive: true });
      document.body?.addEventListener('mousemove', handlePointerMove, { passive: true });
      window.addEventListener('pointerleave', handlePointerLeave);
    }

    let resizeObserver = null;
    if (isBound && targetElement && targetElement !== window && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(targetElement);
    } else {
      window.addEventListener('resize', resize);
    }

    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const p = propsRef.current;
      if (p.disabled || !imgData || !pixels32) return;

      const [r, g, b] = parseColorToRgbBytes(p.color);
      const colorBase = (b << 16) | (g << 8) | r;

      const gSize = Math.max(p.ditherSize, 1.0);
      const expectedGridW = Math.max(1, Math.ceil(targetWidth / gSize));
      const expectedGridH = Math.max(1, Math.ceil(targetHeight / gSize));
      if (expectedGridW !== gridW || expectedGridH !== gridH) {
        resize();
      }

      const lerpFactor = Math.min(Math.max(p.smoothness, 0.01), 1.0);
      currentMouse.x += (targetMouse.x - currentMouse.x) * lerpFactor;
      currentMouse.y += (targetMouse.y - currentMouse.y) * lerpFactor;

      const mouseX = currentMouse.x;
      const mouseY = currentMouse.y;
      const uRadius = p.radius;
      const uExponent = p.exponent;
      const uIntensity = p.intensity;
      const uDecay = p.decay;
      const uOpacity = p.opacity;

      let hasVisiblePixels = false;

      for (let y = 0; y < gridH; y++) {
        const ny = (y + 0.5) / gridH;
        const dy = ny - mouseY;
        const rowOffset = y * gridW;
        const bayerRowOffset = (y % 8) * 8;

        for (let x = 0; x < gridW; x++) {
          const idx = rowOffset + x;
          const nx = (x + 0.5) / gridW;
          const dx = (nx - mouseX) * aspect;
          const dist = Math.hypot(dx, dy);

          let cursorInfluence = 0.0;
          if (dist < uRadius) {
            cursorInfluence = Math.pow(1.0 - dist / uRadius, uExponent) * uIntensity;
          }

          const prev = trail[idx];
          let t = Math.max(prev - uDecay, 0.0) + cursorInfluence;
          if (t > 1.0) t = 1.0;
          trail[idx] = t;

          if (t > 0.01) {
            const threshold = BAYER_8X8[bayerRowOffset + (x % 8)];
            if (t >= threshold) {
              const alphaNorm = smoothstep(0.01, 0.08, t) * uOpacity;
              const a = Math.round(alphaNorm * 255);
              if (a > 0) {
                pixels32[idx] = (a << 24) | colorBase;
                hasVisiblePixels = true;
                continue;
              }
            }
          }
          pixels32[idx] = 0;
        }
      }

      offscreenCtx.putImageData(imgData, 0, 0);

      mainCtx.clearRect(0, 0, canvas.width, canvas.height);
      if (hasVisiblePixels) {
        mainCtx.imageSmoothingEnabled = false;
        mainCtx.drawImage(offscreen, 0, 0, canvas.width, canvas.height);

        // If textMaskSelector is provided, mask dither trail so it ONLY shows inside text
        if (p.textMaskSelector && container) {
          const parentEl =
            isBound && targetElement && targetElement !== window
              ? targetElement
              : container.parentElement;
          const letterNodes = parentEl
            ? parentEl.querySelectorAll(p.textMaskSelector)
            : null;
          if (letterNodes && letterNodes.length > 0) {
            const canvasRect = canvas.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            mainCtx.save();
            mainCtx.globalCompositeOperation = 'destination-in';
            mainCtx.textAlign = 'center';
            mainCtx.textBaseline = 'middle';
            mainCtx.fillStyle = '#ffffff';

            letterNodes.forEach((node) => {
              const nodeRect = node.getBoundingClientRect();
              const cx =
                (nodeRect.left - canvasRect.left + nodeRect.width / 2) * dpr;
              const cy =
                (nodeRect.top - canvasRect.top + nodeRect.height / 2) * dpr;
              const computed = window.getComputedStyle(node);
              const fontSize = parseFloat(computed.fontSize) * dpr;
              const fontFamily =
                computed.fontFamily || "'DM Serif Display', Georgia, serif";
              const fontWeight = computed.fontWeight || 'normal';

              mainCtx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
              mainCtx.fillText(node.textContent.trim(), cx, cy);
            });

            mainCtx.restore();
          }
        }
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);

      if (isBound && targetElement && targetElement !== window) {
        const el = targetElement;
        el.removeEventListener('pointermove', handlePointerMove);
        el.removeEventListener('mousemove', handlePointerMove);
        el.removeEventListener('pointerleave', handlePointerLeave);
        el.removeEventListener('mouseleave', handlePointerLeave);
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeout) clearTimeout(scrollTimeout);
        if (resizeObserver) resizeObserver.disconnect();
      } else {
        window.removeEventListener('pointermove', handlePointerMove);
        document.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('mousemove', handlePointerMove);
        document.body?.removeEventListener('mousemove', handlePointerMove);
        window.removeEventListener('pointerleave', handlePointerLeave);
        window.removeEventListener('resize', resize);
      }
    };
  }, [mounted, attachToParent, targetRef, clearOnLeave, disabled]);

  if (!mounted) return null;

  const isBound = attachToParent || Boolean(targetRef);
  const resolvedZIndex = zIndex !== undefined ? zIndex : isBound ? 10 : 99999;

  const containerClasses = isBound
    ? 'absolute inset-0 w-full h-full pointer-events-none overflow-hidden'
    : 'fixed top-0 left-0 w-full h-full pointer-events-none';

  const cursorClass = hideNativeCursor ? 'cursor-none' : '';

  const content = (
    <div
      ref={containerRef}
      className={`${containerClasses} ${cursorClass} ${className}`}
      style={{
        zIndex: resolvedZIndex,
        mixBlendMode: blendMode,
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none"
      />
      {children}
    </div>
  );

  if (!isBound && typeof document !== 'undefined') {
    return createPortal(content, document.body);
  }

  return content;
}

export default DitherCursor;
