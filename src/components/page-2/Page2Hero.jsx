import React from 'react';
import heroPattern from '../../assets/hero.png';

export default function Page2Hero({ setCurrentPage }) {
  return (
    <section className="relative w-full min-h-screen pt-40 pb-20 px-6 sm:px-12 md:px-16 lg:px-24 bg-white overflow-hidden flex items-center select-none font-sans">

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[rgba(210,255,0,0.06)] rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[50px] right-[-100px] w-[500px] h-[500px] bg-[rgba(255,234,239,0.15)] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1700px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">

        {/* Left Column: Heading, Subtitle & Buttons */}
        <div className="lg:col-span-7 flex flex-col items-start text-left lg:pr-8">

          <h1 className="font-serif text-5xl sm:text-6xl xl:text-[68px] font-black text-[#111111] leading-[1.08] tracking-tight mb-8">
            <span className="block xl:whitespace-nowrap">We're here to help people</span>
            <span className="block xl:whitespace-nowrap">
              find meaningful
              <svg
                viewBox="0 0 44 40"
                fill="none"
                stroke="#111111"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="inline-block w-[36px] h-[32px] ml-4 align-middle"
              >
                <path d="M3.36068 10.1463C11.1662 2.7271 20.6978 17.6673 23.0659 18.66C25.4341 19.6526 25.0056 -0.835053 37.5738 2.33278C50.1421 5.50061 29.9871 37.6583 27.2056 37.9031C23.7287 38.2092 -4.44489 17.5655 3.36068 10.1463Z" />
              </svg>
            </span>
            <span className="block">connections.</span>
          </h1>

          <p className="text-[#6B6B6B] text-lg sm:text-xl font-medium leading-relaxed max-w-[520px] mb-12">
            Wiviy is more than just a dating app. It's a place where genuine people discover authentic relationships through meaningful conversations, shared interests, and trusted connections.
          </p>

          <div className="flex flex-wrap items-center gap-5 w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              {/* Download Button */}
              <button
                type="button"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.with.app', '_blank')}
                className="w-full sm:w-auto bg-[#d2ff00] text-zinc-950 font-bold px-8 py-4 rounded-full hover:bg-[#bfe600] active:scale-95 transition-all cursor-pointer shadow-[0_4px_14px_rgba(210,255,0,0.2)] flex items-center justify-center gap-2"
              >
                <span>Download App</span>
                <span className="text-base font-extrabold">→</span>
              </button>

              {/* Learn More Button */}
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('our-story');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto border border-zinc-950 bg-white text-zinc-950 font-bold px-8 py-4 rounded-full hover:bg-zinc-50 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Learn More</span>
              </button>
            </div>

            {/* Wavy line drawing */}
            <svg width="56" height="15" viewBox="0 0 56 15" fill="none" stroke="#D2F026" strokeWidth="4" strokeLinecap="round" className="hidden sm:block">
              <path d="M 4 8 Q 16 0, 28 8 T 52 8" />
            </svg>
          </div>
        </div>

        {/* Right Column: Hero Restaurant Couple Image with corner floating avatars */}
        <div className="lg:col-span-5 w-full flex items-center justify-center lg:justify-end pr-8">
          <div className="relative w-full max-w-[500px] aspect-[500/550]">
            {/* Main Image Card */}
            <div className="w-full h-full rounded-[36px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-zinc-100 bg-zinc-50 relative">
              <img
                src="/assets/page-2/Mask Group.png"
                alt="Couple laughing at restaurant table"
                className="w-full h-full object-cover object-center"
              />
              {/* Decorative bottom lime dot overlay */}
              <div className="absolute bottom-6 left-6 w-6 h-6 rounded-full bg-[#D2F026] border-4 border-white shadow-md" />
            </div>

            {/* Floating Top-Right Woman Avatar with Active indicator dot */}
            <div className="absolute right-[-32px] top-[12%] w-[84px] h-[84px] rounded-full border-[5px] border-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] bg-white z-20">
              <img
                src="/assets/page-2/hero-avatar-woman.png"
                alt="Active member avatar"
                className="w-full h-full rounded-full object-cover"
              />
              {/* Active Indicator dot */}
              <div className="absolute bottom-[2px] right-[2px] w-[18px] h-[18px] bg-[#22C55E] rounded-full border-[3.5px] border-white shadow-sm" />
            </div>

            {/* Floating Bottom-Right Man Avatar */}
            <div className="absolute right-[-24px] bottom-[16%] w-[84px] h-[84px] rounded-full border-[5px] border-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] bg-white z-20">
              <img
                src="/assets/page-2/hero-avatar-man.png"
                alt="Active member avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
