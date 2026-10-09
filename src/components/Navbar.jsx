import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Features', href: '/features' },

  { label: 'Blog', href: '/blog' },
  { label: 'Subscriptions', href: '#subscriptions' },
];

/**
 * theme: 'light' (default, matches the design) | 'dark' (transparent header over a dark hero)
 * activeHref: optional override; defaults to current route pathname from useLocation()
 */
export default function Header({ theme = 'light', activeHref }) {
  const isDark = theme === 'dark';
  const location = useLocation();

  // Determine strictly the SINGLE active page link from current route
  const getActiveHref = () => {
    if (activeHref) return activeHref;
    const path = location.pathname;
    if (path === '/about') return '/about';
    if (path === '/features') return '/features';
    if (path === '/blog' || path.startsWith('/blog') || path === '/blogdetails') return '/blog';
    return null;
  };

  const currentActiveHref = getActiveHref();

  const colors = isDark
    ? { logo: '#FFFFFF', active: '#FFFFFF', muted: 'rgba(255,255,255,0.65)', hover: 'rgba(255,255,255,0.9)' }
    : { logo: '#171512', active: '#171512', muted: '#5C5C5C', hover: '#333333' };

  return (
    <header
      id="siteHeader"
      className={`${isDark ? 'absolute' : 'sticky'} top-0 left-0 right-0 z-50 flex items-center justify-center px-10 h-[82px]`}
      style={{
        background: isDark ? 'transparent' : 'rgba(255,255,255,0.88)',
        backdropFilter: isDark ? 'none' : 'blur(8px)',
        WebkitBackdropFilter: isDark ? 'none' : 'blur(8px)',
      }}
    >
      {/* relative so the nav can be truly centered regardless of logo / button width */}
      <div className="relative flex flex-row items-center justify-between w-full max-w-[1360px] h-[41px]">
        {/* Logo */}
        <Link
          to="/"
          className="font-serif font-bold text-[28px] leading-[30px] tracking-[0.02em]"
          style={{ color: colors.logo }}
        >
          WIVIY
        </Link>

        {/* Nav links: absolutely centered, hidden on small screens */}
        <nav
          aria-label="Main"
          className="hidden md:flex flex-row items-center gap-12 absolute left-1/2 -translate-x-1/2"
        >
          {NAV_LINKS.map(({ label, href }) => {
            // Strictly ONLY the matched page route is active (never multiple links)
            const isActive = href === currentActiveHref;
            const isInternal = !href.startsWith('#');

            const linkProps = {
              key: href,
              'aria-current': isActive ? 'page' : undefined,
              className: `font-sans text-base leading-5 whitespace-nowrap transition-colors ${isActive ? 'font-semibold' : 'font-normal'
                }`,
              style: { color: isActive ? colors.active : colors.muted },
              onMouseEnter: (e) => {
                if (!isActive) e.currentTarget.style.color = colors.hover;
              },
              onMouseLeave: (e) => {
                if (!isActive) e.currentTarget.style.color = colors.muted;
              },
            };

            if (isInternal) {
              return (
                <Link to={href} {...linkProps}>
                  {label}
                </Link>
              );
            }

            return (
              <a href={href} {...linkProps}>
                {label}
              </a>
            );
          })}
        </nav>

        {/* CTA button: auto width so the text never wraps or overflows */}
        <a
          href="https://play.google.com/store/apps/details?id=com.with.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-[41px] px-5 rounded-full bg-[#D2F026] font-sans font-bold text-base leading-none whitespace-nowrap text-[#12140F] hover:opacity-90 active:scale-95 transition-all"
        >
          Get Wiviy
        </a>
      </div>
    </header>
  );
}