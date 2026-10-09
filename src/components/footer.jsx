import React from 'react';

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

export default function Footer() {
  return (
    <footer className="w-full bg-[#101109] flex flex-col items-start pt-[90px] px-20">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-start">

        {/* Top: brand + link columns */}
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-8">

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

          {/* Link columns */}
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Support" links={supportLinks} />
          <FooterColumn title="Features" links={featureLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mt-16" />

        {/* Giant wordmark */}
        <div className="w-full flex flex-row justify-between items-center overflow-hidden py-8">
          {['W', 'I', 'V', 'I', 'Y'].map((letter, i) => (
            <span
              key={i}
              className="font-serif text-white/[0.08]"
              style={{
                fontSize: 'clamp(80px, 16vw, 300px)',
                lineHeight: 1,
                WebkitTextStroke: '2px rgba(255,255,255,0.14)',
                color: 'transparent',
              }}
            >
              {letter}
            </span>
          ))}
        </div>

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