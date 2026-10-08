import React from 'react';

const NAV_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Features', href: '/features' },
  { label: 'Guide', href: '#guide' },
  { label: 'Blog', href: '/blog' },
  { label: 'Subscriptions', href: '#subscriptions' },
];

/**
 * theme: 'light' (default, matches the design) | 'dark' (transparent header over a dark hero)
 * activeHref: href of the current page; that link is shown bold / full color
 */
export default function Header({ theme = 'light', activeHref = '/about' }) {
  const isDark = theme === 'dark';

  const colors = isDark
    ? { logo: '#FFFFFF', active: '#FFFFFF', muted: 'rgba(255,255,255,0.65)', hover: '#FFFFFF' }
    : { logo: '#171512', active: '#171512', muted: '#5C5C5C', hover: '#171512' };

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
        <a
          href="/"
          className="font-serif font-bold text-[28px] leading-[30px] tracking-[0.02em]"
          style={{ color: colors.logo }}
        >
          WIVIY
        </a>

        {/* Nav links: absolutely centered, hidden on small screens */}
        <nav
          aria-label="Main"
          className="hidden md:flex flex-row items-center gap-12 absolute left-1/2 -translate-x-1/2"
        >
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = href === activeHref;
            return (
              <a
                key={href}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`font-sans text-base leading-5 whitespace-nowrap transition-colors ${
                  isActive ? 'font-semibold' : 'font-normal'
                }`}
                style={{ color: isActive ? colors.active : colors.muted }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = colors.hover;
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = colors.muted;
                }}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* CTA button: auto width so the text never wraps or overflows */}
        <a
          href="#"
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