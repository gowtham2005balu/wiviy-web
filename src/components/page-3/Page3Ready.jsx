import React from 'react';

export default function Page3Ready() {
  return (
    <section className="relative w-full bg-[#FCFAF6] py-28 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden select-none font-sans flex items-center justify-center border-t border-zinc-100">

      {/* Background radial lime glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(223,255,0,0.15)_0%,transparent_65%)] pointer-events-none" />

      {/* Decorative Hearts and Sparkles */}
      {/* Left Top Lime Outline Heart */}
      <svg viewBox="0 0 24 24" fill="none" stroke="#DFFF00" strokeWidth="2.5" className="absolute left-[10%] top-[18%] w-8 h-8 -rotate-12 opacity-80">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      {/* Left Middle Small Beige Heart */}
      <svg viewBox="0 0 24 24" fill="#EFFF7D" className="absolute left-[5%] top-[45%] w-4 h-4 opacity-50">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      {/* Bottom Left Small Pinkish Heart */}
      <svg viewBox="0 0 24 24" fill="#FFEAEF" className="absolute left-[20%] bottom-[15%] w-5 h-5 rotate-12 opacity-75">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>

      {/* Right Top Lime Double Sparkle */}
      <svg viewBox="0 0 24 24" fill="currentColor" className="absolute right-[15%] top-[28%] w-9 h-9 text-[#DFFF00]/90 rotate-6">
        <path d="M9 2L11 7L16 9L11 11L9 16L7 11L2 9L7 7L9 2Z M18 10L19.2 13L22 14.2L19.2 15.4L18 18.2L16.8 15.4L14 14.2L16.8 13L18 10Z" />
      </svg>
      {/* Right Bottom Lime Single Sparkle */}
      <svg viewBox="0 0 24 24" fill="currentColor" className="absolute right-[11%] bottom-[25%] w-6 h-6 text-[#DFFF00]/70 rotate-[-15deg]">
        <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
      </svg>

      <div className="max-w-[900px] w-full flex flex-col items-center text-center relative z-10">

        {/* Title */}
        <h2 className="font-sans text-5xl sm:text-7xl lg:text-[84px] font-black text-[#111111] leading-[0.98] tracking-[-2.58px] mb-8 select-none">
          Ready to Meet<br />
          <span className="text-[#DFFF00]">Someone Real?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-zinc-500 text-sm sm:text-[18px] font-normal leading-relaxed max-w-xl mb-10 font-sans">
          Your person is out there. Join thousands of others who have found meaningful connections through MELO.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            className="w-full sm:w-auto bg-[#DFFF00] hover:bg-[#cbe600] active:scale-95 text-zinc-950 font-bold px-10 py-4.5 rounded-full transition-all duration-200 cursor-pointer text-base shadow-[0_4px_14px_rgba(223,255,0,0.15)] font-sans"
          >
            Create Free Profile
          </button>
          <button
            type="button"
            className="w-full sm:w-auto bg-transparent border border-zinc-950 text-zinc-950 font-semibold px-10 py-4.5 rounded-full hover:bg-zinc-950/5 active:scale-95 transition-all duration-200 cursor-pointer text-base font-sans"
          >
            Learn More
          </button>
        </div>

        {/* Small Bottom Info */}
        <span className="text-[12px] font-medium text-[#9E9E9E] mt-5 font-sans">
          Free to join. No credit card required.
        </span>

      </div>
    </section>
  );
}
