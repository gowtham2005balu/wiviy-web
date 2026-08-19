import React from 'react';

// Tiny Filled Yellow Heart decoration
function TinyFilledHeart({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="#DFFF00" className={`w-3.5 h-3.5 ${className}`}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

// Tiny Outline Pink Heart decoration
function TinyOutlineHeart({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#FF5C93" strokeWidth="2.2" className={`w-5 h-5 ${className}`}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export default function Page2CTA() {
  return (
    <section className="relative w-full bg-white py-28 sm:py-36 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden select-none font-sans border-t border-zinc-100 flex items-center justify-center">

      {/* Background Soft Yellow Circular Glow */}
      <div className="absolute right-[8%] top-1/4 w-[450px] h-[450px] bg-[rgba(223,255,0,0.09)] rounded-full blur-[90px] pointer-events-none" />

      {/* Scattered Tiny Filled Yellow Hearts */}
      <TinyFilledHeart className="absolute left-[8%] top-[25%] rotate-[12deg] hidden md:block" />
      <TinyFilledHeart className="absolute left-[5%] top-[55%] rotate-[-15deg] hidden md:block" />
      <TinyFilledHeart className="absolute left-[15%] top-[80%] rotate-[20deg] hidden md:block" />
      <TinyFilledHeart className="absolute right-[15%] top-[75%] rotate-[10deg] hidden md:block" />
      <TinyFilledHeart className="absolute right-[5%] top-[30%] rotate-[-25deg] hidden md:block" />
      <TinyFilledHeart className="absolute left-[50%] top-[18%] rotate-[-10deg] hidden md:block" />
      <TinyFilledHeart className="absolute right-[35%] top-[72%] rotate-[30deg] hidden md:block" />

      {/* Pink Outline Heart */}
      <TinyOutlineHeart className="absolute right-[9%] top-[4%] rotate-[15deg] hidden md:block" />

      {/* Tiny Plus Symbols */}
      <div className="absolute left-[24%] top-[45%] text-[#DFFF00]/60 text-lg font-black hidden md:block pointer-events-none">+</div>
      <div className="absolute left-[40%] top-[85%] text-[#DFFF00]/60 text-lg font-black hidden md:block pointer-events-none">+</div>
      <div className="absolute right-[22%] top-[30%] text-[#DFFF00]/60 text-lg font-black hidden md:block pointer-events-none">+</div>
      <div className="absolute right-[12%] top-[87%] text-[#DFFF00]/60 text-lg font-black hidden md:block pointer-events-none">+</div>

      <div className="max-w-[1000px] w-full flex flex-col items-center text-center relative z-10">

        {/* Title broken into three lines matching mockup exactly, with soft yellow glow */}
        <h2
          className="font-serif text-5xl sm:text-6xl md:text-[80px] font-black text-[#111111] leading-[1.08] tracking-tight mb-8 animate-fade-in"
          style={{ textShadow: '0 0 50px rgba(223,255,0,0.55), 0 0 15px rgba(223,255,0,0.25)' }}
        >
          <span className="text-[#DFFF00]">Love</span> Starts With<br />
          One<br />
          Conversation
        </h2>

        {/* Subtitle description with lowercase wiviy */}
        <p className="text-zinc-500 text-lg sm:text-xl font-medium leading-relaxed max-w-xl mb-12">
          Join millions of people who found something real on wiviy.
        </p>

        {/* Download Button with yellow-green glow shadow */}
        <button
          type="button"
          className="bg-[#DFFF00] text-zinc-950 font-bold px-10 py-4.5 rounded-full hover:bg-[#cbe600] active:scale-95 transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2 mb-4 text-[17px] font-sans"
          style={{ boxShadow: '0 8px 30px rgba(223, 255, 0, 0.45)' }}
        >
          <span>Download WIVIY</span>
          <span className="text-lg font-extrabold select-none">➔</span>
        </button>

        {/* Learn How It Works text link */}
        <button
          type="button"
          className="text-zinc-400 hover:text-zinc-600 text-sm font-semibold mb-10 transition-colors cursor-pointer font-sans"
        >
          Learn How It Works
        </button>

        {/* App Store / Google Play custom styled black badge buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* App Store Badge */}
          <button
            type="button"
            className="w-full sm:w-[170px] bg-[#14121A] border border-zinc-800 text-white rounded-[12px] px-4 py-2.5 hover:bg-zinc-900 active:scale-98 transition-all flex items-center gap-3 cursor-pointer select-none text-left"
          >
            {/* Apple Logo SVG */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white shrink-0">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94.97.08 2.06-.52 2.82-1.33z" />
            </svg>
            <div className="flex flex-col">
              <span className="text-[9px] font-medium text-zinc-400 leading-none uppercase tracking-wide">Download on the</span>
              <span className="text-[14px] font-bold text-white leading-tight mt-0.5">App Store</span>
            </div>
          </button>

          {/* Google Play Badge */}
          <button
            type="button"
            className="w-full sm:w-[170px] bg-[#14121A] border border-zinc-800 text-white rounded-[12px] px-4 py-2.5 hover:bg-zinc-900 active:scale-98 transition-all flex items-center gap-3 cursor-pointer select-none text-left"
          >
            {/* Play Store Logo SVG */}
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6 text-white shrink-0">
              <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
            </svg>
            <div className="flex flex-col">
              <span className="text-[9px] font-medium text-zinc-400 leading-none uppercase tracking-wide">Get it on</span>
              <span className="text-[14px] font-bold text-white leading-tight mt-0.5">Google Play</span>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
