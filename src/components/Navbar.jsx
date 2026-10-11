import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
    <>
      <header
        id="siteHeader"
        className={`${isDark ? 'absolute' : 'sticky'} top-0 left-0 right-0 z-50 flex items-center justify-center px-4 sm:px-8 lg:px-10 h-[72px] sm:h-[82px] transition-colors`}
        style={{
          background: isDark
            ? mobileMenuOpen ? '#141210' : 'transparent'
            : 'rgba(255,255,255,0.92)',
          backdropFilter: isDark && !mobileMenuOpen ? 'none' : 'blur(10px)',
          WebkitBackdropFilter: isDark && !mobileMenuOpen ? 'none' : 'blur(10px)',
        }}
      >
        {/* relative so the nav can be truly centered regardless of logo / button width */}
        <div className="relative flex flex-row items-center justify-between w-full max-w-[1360px] h-[41px]">
          {/* Logo */}
          <Link
            to="/"
            className="font-serif font-bold text-[24px] sm:text-[28px] leading-[30px] tracking-[0.02em] select-none"
            style={{ color: isDark ? '#FFFFFF' : '#171512' }}
          >
            WIVIY
          </Link>

          {/* Desktop Nav links: absolutely centered, hidden on small screens */}
          <nav
            aria-label="Main"
            className="hidden md:flex flex-row items-center gap-10 lg:gap-12 absolute left-1/2 -translate-x-1/2"
          >
            {NAV_LINKS.map(({ label, href }) => {
              // Strictly ONLY the matched page route is active (never multiple links)
              const isActive = href === currentActiveHref;
              const isInternal = !href.startsWith('#');

              const linkProps = {
                key: href,
                'aria-current': isActive ? 'page' : undefined,
                className: `font-sans text-base leading-5 whitespace-nowrap transition-colors ${
                  isActive ? 'font-semibold' : 'font-normal'
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

          {/* Right actions: CTA button + Mobile hamburger toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.with.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[38px] sm:h-[41px] px-3.5 sm:px-5 rounded-full bg-[#D2F026] font-sans font-bold text-sm sm:text-base leading-none whitespace-nowrap text-[#12140F] hover:opacity-90 active:scale-95 transition-all shadow-sm"
            >
              Get Wiviy
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-colors cursor-pointer"
              style={{
                color: isDark ? '#FFFFFF' : '#171512',
                backgroundColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.06)',
              }}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[2.2]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[2.2]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className={`fixed top-[72px] sm:top-[82px] left-0 right-0 max-h-[calc(100vh-72px)] overflow-y-auto px-5 py-6 border-b shadow-2xl flex flex-col gap-5 ${
              isDark
                ? 'bg-[#141210] border-white/10 text-white'
                : 'bg-white border-black/10 text-[#171512]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = href === currentActiveHref;
                const isInternal = !href.startsWith('#');

                const itemClass = `flex items-center justify-between py-3.5 px-4 rounded-xl font-sans text-lg font-medium transition-colors ${
                  isActive
                    ? isDark
                      ? 'bg-white/10 text-[#D2F026] font-semibold'
                      : 'bg-black/5 text-[#171512] font-semibold'
                    : isDark
                    ? 'text-white/80 hover:bg-white/5 hover:text-white'
                    : 'text-[#5C5C5C] hover:bg-black/5 hover:text-[#171512]'
                }`;

                if (isInternal) {
                  return (
                    <Link
                      key={href}
                      to={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={itemClass}
                    >
                      <span>{label}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#D2F026]" />
                      )}
                    </Link>
                  );
                }

                return (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={itemClass}
                  >
                    <span>{label}</span>
                  </a>
                );
              })}
            </nav>

            <div className={`h-px w-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />

            <div className="flex flex-col gap-3 pt-1">
              <a
                href="https://play.google.com/store/apps/details?id=com.with.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center h-12 rounded-full bg-[#D2F026] font-sans font-bold text-base text-[#12140F] hover:opacity-90 active:scale-95 transition-all shadow-md"
              >
                Download Wiviy
              </a>

              <p className={`text-center font-sans text-xs ${isDark ? 'text-white/50' : 'text-[#888888]'}`}>
                Spontaneous, human, and built for real connections.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}