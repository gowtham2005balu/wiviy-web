import React, { useState, useRef, useEffect } from 'react';

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'How It Works', href: '/features' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/support' },
];

const supportLinks = [
  { label: 'Help Center', href: '/support' },
  { label: 'Safety', href: '/support' },
];

const featureLinks = [
  { label: 'Sign up & verification', href: '/features' },
  { label: 'Profile', href: '/features' },
  { label: 'Matching & likes', href: '/features' },
  { label: 'Nearby', href: '/features' },
  { label: 'Icebreakers', href: '/features' },
  { label: 'Swipe controls & filters', href: '/features' },
  { label: 'Premium plans', href: '/features' },
  { label: 'Safety & support', href: '/features' },
];

const legalLinks = [
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  {
    label: 'Cookie Preferences',
    href: '#cookie-preferences',
    onClick: (e) => {
      e.preventDefault();
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('open-cookie-settings'));
      }
    },
  },
];

function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col items-start gap-[13px] w-full max-w-[207px]">
      <h4 className="font-sans font-bold text-sm leading-[17px] tracking-[1px] uppercase text-white">
        {title}
      </h4>
      <div className="flex flex-col items-start gap-[7px]">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={link.onClick}
            className="font-sans text-base leading-5 text-white/55 hover:text-white/80 transition-colors cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function AppleLogo({ className = 'w-4 h-4 fill-white shrink-0' }) {
  return (
    <svg className={className} viewBox="0 0 384 512" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function GooglePlayLogo({ className = 'w-4 h-4 shrink-0' }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="none">
      <path
        d="M48.7 13.9C45.3 17.6 43.3 23.4 43.3 31v450c0 7.6 2 13.4 5.4 17.1l1.5 1.5 249.2-249.2v-5.8L50.2 12.4l-1.5 1.5z"
        fill="#00D2FF"
      />
      <path
        d="M381.8 328.6l-82.4-82.4v-5.8l82.4-82.4 1.9 1.1 97.4 55.4c27.8 15.8 27.8 41.7 0 57.5l-97.4 55.4-1.9 1.2z"
        fill="#FFC400"
      />
      <path
        d="M383.7 327.5L299.4 243.2 48.7 493.9c9.3 9.8 24.6 11 41.9 1.2l293.1-167.6z"
        fill="#00F076"
      />
      <path
        d="M383.7 184.5L90.6 17.9C73.3 8 58 9.3 48.7 19.1l250.7 250.7 84.3-85.3z"
        fill="#FF3A44"
      />
    </svg>
  );
}

function AnimatedWordmark() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [inView, setInView] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) {
            ticking = false;
            return;
          }
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;

          const isVisible = rect.top < windowHeight + 100 && rect.bottom > -100;
          setInView(isVisible);

          if (isVisible) {
            // User is actively scrolling while wordmark is in view
            setIsScrolling(true);
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = setTimeout(() => {
              setIsScrolling(false);
            }, 500);

            const totalTravel = windowHeight + rect.height;
            const currentPosition = windowHeight - rect.top;
            const progress = Math.max(0, Math.min(1, currentPosition / totalTravel));
            setScrollProgress(progress);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleLetterMouseMove = (e, i) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    setMousePos({ x, y });
    setHoveredIndex(i);
  };

  const letters = ['W', 'I', 'V', 'I', 'Y'];

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-row justify-between items-center overflow-hidden py-8 select-none relative"
      aria-label="WIVIY Wordmark"
    >
      {letters.map((letter, i) => {
        // Staggered scroll progress for each letter
        const staggerDelay = i * 0.08;
        const letterProgress = Math.max(
          0,
          Math.min(1, (scrollProgress - 0.15 - staggerDelay) / 0.55)
        );

        // Sinusoidal floating wave on scroll
        const scrollWave = inView
          ? Math.sin(scrollProgress * Math.PI * 1.5 + i * 0.6) * -18
          : 0;

        const isHovered = hoveredIndex === i;
        const isActive = isHovered || (isScrolling && inView);
        const fillPercent = isScrolling
          ? Math.max(30, Math.min(100, Math.round(letterProgress * 100)))
          : 0;

        // Dither shift offset based on scroll position for pixel sparkling motion
        const ditherShift = Math.round(scrollProgress * 120) % 8;

        return (
          <div
            key={i}
            onMouseMove={(e) => handleLetterMouseMove(e, i)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative inline-block cursor-pointer select-none will-change-transform"
            style={{
              fontSize: 'clamp(80px, 16vw, 300px)',
              lineHeight: 1,
              transform: `translateY(${
                isHovered ? scrollWave - 14 : inView ? scrollWave : 35
              }px) scale(${isHovered ? 1.05 : inView ? 1 : 0.94})`,
              opacity: inView ? 1 : 0.3,
              transition:
                'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease',
            }}
          >
            {/* 1. Base Outline Letter - Stays clean outline when not scrolling */}
            <span
              className="block font-serif select-none"
              style={{
                WebkitTextStroke: isActive
                  ? '2.5px #D2F026'
                  : '2px rgba(255, 255, 255, 0.14)',
                color: 'transparent',
                filter: isHovered
                  ? 'drop-shadow(0 0 35px rgba(210, 240, 38, 0.7))'
                  : isActive
                  ? 'drop-shadow(0 0 16px rgba(210, 240, 38, 0.35))'
                  : 'none',
                transition: 'WebkitTextStroke 0.35s ease, filter 0.35s ease',
              }}
            >
              {letter}
            </span>

            {/* 2. Dither Animation strictly INSIDE the letter glyphs only when scrolling or hovered */}
            <span
              aria-hidden="true"
              className="absolute inset-0 block font-serif pointer-events-none select-none"
              style={{
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                opacity: isActive ? 1 : 0,
                backgroundImage: isHovered
                  ? `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(210, 240, 38, 0.95) 0%, rgba(210, 240, 38, 0.4) 40%, transparent 75%), repeating-conic-gradient(#D2F026 0% 25%, transparent 0% 50%)`
                  : `linear-gradient(180deg, #D2F026 0%, rgba(210, 240, 38, 0.85) ${fillPercent}%, transparent ${Math.min(
                      100,
                      fillPercent + 15
                    )}%), repeating-conic-gradient(#D2F026 0% 25%, transparent 0% 50%)`,
                backgroundSize: isHovered
                  ? '100% 100%, 6px 6px'
                  : '100% 100%, 6px 6px',
                backgroundPosition: `0 0, ${ditherShift}px ${ditherShift}px`,
                transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {letter}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#101109] flex flex-col items-start pt-16 sm:pt-[90px] px-6 sm:px-12 lg:px-20">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-start">

        {/* Top: brand + link columns */}
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8">

          {/* Brand */}
          <div className="flex flex-col items-start gap-[15px] max-w-[290px]">
            <div className="font-serif font-semibold text-2xl leading-8 tracking-[0.26px] text-white">
              WIVIY
            </div>
            <p className="font-sans text-base leading-[22px] text-white/45 max-w-[260px]">
              A different way to meet people — spontaneous, human, and built around real connection.
            </p>
            <div className="flex flex-row flex-wrap items-start gap-[10px] pt-[8px]">
              <a
                href="#app-store"
                onClick={(e) => e.preventDefault()}
                className="box-border flex flex-row items-center justify-center gap-2 px-4 py-3 h-[42px] bg-white/25 border border-white/50 rounded-xl font-sans font-bold text-[12.5px] leading-4 text-white hover:bg-white/35 active:scale-95 transition-all cursor-pointer select-none"
              >
                <AppleLogo className="w-4 h-4 fill-white shrink-0 -mt-0.5" />
                <span>App Store</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.with.app"
                target="_blank"
                rel="noopener noreferrer"
                className="box-border flex flex-row items-center justify-center gap-2 px-4 py-3 h-[42px] bg-white/25 border border-white/50 rounded-xl font-sans font-bold text-[12.5px] leading-4 text-white hover:bg-white/35 active:scale-95 transition-all cursor-pointer select-none"
              >
                <GooglePlayLogo className="w-4 h-4 shrink-0" />
                <span>Google Play</span>
              </a>
            </div>
          </div>

          {/* Link columns: 2 columns on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 w-full lg:w-auto">
            <FooterColumn title="Company" links={companyLinks} />
            <FooterColumn title="Support" links={supportLinks} />
            <FooterColumn title="Features" links={featureLinks} />
            <FooterColumn title="Legal" links={legalLinks} />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mt-16" />

        {/* Giant wordmark with scroll-driven animation */}
        <AnimatedWordmark />

        {/* Bottom bar */}
        <div className="w-full flex flex-row flex-wrap justify-between items-center gap-4 py-6">
          <span className="font-sans text-[12.5px] leading-4 text-white/35">
            © 2026 Wiviy. All rights reserved.
          </span>
          <span className="font-sans text-[12.5px] leading-4 text-white/35">
            Meet different.
          </span>
        </div>
      </div>
    </footer>
  );
}