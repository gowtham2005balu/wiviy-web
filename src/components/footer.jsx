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
            className="font-sans text-base leading-5 text-white/55 hover:text-white/80 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
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
              <span className="box-border flex flex-row justify-center items-center px-4 py-3 h-[42px] bg-white/25 border border-white/50 rounded-xl font-sans font-bold text-[12.5px] leading-4 text-white/80 cursor-pointer">
                App Store
              </span>
              <span className="box-border flex flex-row justify-center items-center px-4 py-3 h-[42px] bg-white/25 border border-white/50 rounded-xl font-sans font-bold text-[12.5px] leading-4 text-white/80 cursor-pointer">
                Google Play
              </span>
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