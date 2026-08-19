import React from 'react';

export default function Page3CTA() {
  return (
    <section className="relative w-full bg-[#111111] py-28 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden select-none font-sans flex items-center justify-center">

      {/* ----------------- FIGMA BACKGROUND GLOWS & ACCENTS ----------------- */}
      {/* Glow 1 (Top Right Overlay+Blur) */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{
          width: '500px',
          height: '500px',
          right: '0px',
          top: '80px',
          background: 'rgba(223, 255, 0, 0.1)',
          filter: 'blur(30px)',
          borderRadius: '300px 100px 325px 175px'
        }}
      />

      {/* Glow 2 (Bottom Left Overlay+Blur) */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{
          width: '400px',
          height: '400px',
          left: '0px',
          bottom: '0px',
          background: 'rgba(255, 234, 239, 0.1)',
          filter: 'blur(40px)',
          borderRadius: '260px 240px 140px 280px'
        }}
      />

      {/* Glow 3 (Figma Radial Gradient Overlay) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(70.71% 70.71% at 50% 50%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      {/* ----------------- MAIN LAYOUT CONTAINER ----------------- */}
      <div className="max-w-[1500px] w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">

        {/* Left Column: Heading, description, badges */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Main title (Figma Playfair Display, text-size: 80px, line-height: 80px) */}
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-[80px] lg:leading-[80px] font-normal text-white tracking-[-2px] mb-8">
            Your Person <br />
            <span className="text-[#DFFF00]">Is Waiting</span>
          </h2>

          {/* Subtitle description (Figma Inter, text-size: 20px, line-height: 32px) */}
          <p className="text-white/70 text-base sm:text-lg lg:text-[20px] lg:leading-[32px] font-normal max-w-md mb-10 font-sans">
            Download wiviy today and start your journey to meaningful connections.
          </p>

          {/* App Store / Google Play buttons (stacked vertically to prevent text wrap) */}
          <div className="flex flex-col gap-4 w-full max-w-[320px]">
            {/* App Store Badge (Figma bg: #DFFF00, height: 62px, border-radius: 16px, shadow glow) */}
            <button
              type="button"
              className="w-full h-[62px] bg-[#DFFF00] hover:bg-[#cbe600] active:scale-95 text-zinc-950 rounded-[16px] px-6 transition-all duration-200 flex items-center justify-center gap-3.5 cursor-pointer select-none text-[16px] font-semibold font-sans shadow-[0px_4px_24px_rgba(223,255,0,0.4)]"
            >
              {/* Apple Logo SVG Outline */}
              <svg viewBox="0 0 170 170" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-zinc-950 shrink-0">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.14-1.92-14.37-6.13-3.08-2.52-6.94-7.15-11.61-13.9-4.85-7.07-8.81-14.96-11.89-23.68-3.08-8.73-4.63-17.52-4.63-26.37 0-14.77 4.17-26.85 12.51-36.21 8.35-9.37 18.66-14.07 30.93-14.12 6.07 0 12.68 1.63 19.8 4.88 7.13 3.25 11.96 4.87 14.51 4.87 2.12 0 6.64-1.52 13.55-4.57 6.9-3.04 13.57-4.51 20.02-4.41 14.38.33 25.59 5.65 33.64 15.96-12.18 7.39-18.17 17.55-17.97 30.48.2 10.22 4.09 18.73 11.67 25.55 7.58 6.82 16.51 10.42 26.82 10.8-1.53 4.89-3.5 10.05-5.91 15.48zM119.5 9c-.06 7.42-2.73 14.22-8.02 19.38-5.28 5.17-11.75 8-19.39 8.5.11-7.25 2.87-13.91 8.27-20 5.4-6.08 12-9.25 19.8-9.52.88 0 1.2.64 1.34 1.64z" />
              </svg>
              <span>Download on the App Store</span>
            </button>

            {/* Google Play Badge (Figma bg: white/10, border border-white/20, height: 58px, border-radius: 16px) */}
            <button
              type="button"
              className="w-full h-[58px] bg-white/10 border border-white/20 hover:bg-white/20 active:scale-95 text-white rounded-[16px] px-6 transition-all duration-200 flex items-center justify-center gap-3.5 cursor-pointer select-none text-[16px] font-semibold font-sans"
            >
              {/* Play Store Logo SVG Outline */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white shrink-0">
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
              <span>Get it on Google Play</span>
            </button>
          </div>

          {/* Small info below (Figma text-size: 14px, line-height: 20px, text-color: white/40) */}
          <span className="text-[14px] leading-[20px] font-normal text-white/40 mt-5 font-sans">
            Free to download. No ads. Real connections.
          </span>
        </div>

        {/* Right Column: Layered 3-iPhone Mockup matching Page 1 Hero layout */}
        <div className="lg:col-span-7 relative h-[500px] sm:h-[650px] lg:h-[836px] w-full flex items-center justify-center lg:justify-end overflow-visible select-none mt-12 lg:mt-0">

          {/* Glow 4 (Behind Phones Overlay+Blur) */}
          <div
            className="absolute pointer-events-none hidden lg:block"
            style={{
              width: '350px',
              height: '350px',
              left: '200px',
              top: '250px',
              background: 'rgba(223, 255, 0, 0.1)',
              filter: 'blur(20px)',
              borderRadius: '210px 70px 227.5px 122.5px'
            }}
          />

          {/* Sparkles Accents (Figma absolute coords & opacity) */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="absolute text-white w-6 h-6 hidden lg:block" style={{ left: '150px', top: '150px', opacity: 0.47 }}>
            <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
          </svg>
          <svg viewBox="0 0 24 24" fill="currentColor" className="absolute text-[#DFFF00] w-5 h-5 hidden lg:block" style={{ right: '50px', bottom: '150px', opacity: 0.31 }}>
            <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
          </svg>
          <svg viewBox="0 0 24 24" fill="currentColor" className="absolute text-white w-4 h-4 hidden lg:block" style={{ right: '20px', top: '300px', opacity: 0.31 }}>
            <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
          </svg>
          <svg viewBox="0 0 24 24" fill="currentColor" className="absolute text-[#FFEAEF] w-3.5 h-3.5 hidden lg:block" style={{ left: '120px', bottom: '250px', opacity: 0.32 }}>
            <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
          </svg>

          <div className="relative w-[967px] h-[836px] shrink-0 scale-[0.5] sm:scale-[0.7] md:scale-[0.8] lg:scale-[0.8] xl:scale-[0.9] origin-center lg:origin-right">
            {/* iPhone Left */}
            <img
              src="/assets/page-1/iPhone 16 - 52-portrait 1.png"
              alt="iPhone Left mockup"
              className="absolute left-[0px] top-[130px] w-[325px] h-[639px] z-10 transition-transform duration-300 hover:scale-[1.01] drop-shadow-[0_15px_35px_rgba(0,0,0,0.45)] rounded-[48px]"
            />

            {/* iPhone Right */}
            <img
              src="/assets/page-1/iPhone 16 - 53 (1)-portrait 1.png"
              alt="iPhone Right mockup"
              className="absolute left-[649px] top-[131px] w-[318px] h-[627px] z-10 transition-transform duration-300 hover:scale-[1.01] drop-shadow-[0_15px_35px_rgba(0,0,0,0.45)] rounded-[48px]"
            />

            {/* iPhone Center */}
            <img
              src="/assets/page-1/iPhone 16 - 57-portrait 1.png"
              alt="iPhone Center mockup"
              className="absolute left-[277px] top-[0px] w-[424px] h-[836px] z-20 transition-transform duration-300 hover:scale-[1.03] drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)] rounded-[60px]"
            />
          </div>
        </div>

      </div>

      {/* Floating Hearts at the Bottom (Figma sizes: 20px, 26px, 32px, 38px, 44px) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6 z-30 pointer-events-none">
        <svg viewBox="0 0 24 24" fill="#DFFF00" stroke="#DFFF00" strokeWidth="0.75" className="rotate-[-10deg] shrink-0" style={{ height: '20px', width: '20px' }}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <svg viewBox="0 0 24 24" fill="#FFEAEF" stroke="#FFEAEF" strokeWidth="0.975" className="rotate-[15deg] shrink-0" style={{ height: '26px', width: '26px' }}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <svg viewBox="0 0 24 24" fill="#DFFF00" stroke="#DFFF00" strokeWidth="1.2" className="rotate-[-5deg] shrink-0" style={{ height: '32px', width: '32px' }}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <svg viewBox="0 0 24 24" fill="#FFEAEF" stroke="#FFEAEF" strokeWidth="1.425" className="rotate-[10deg] shrink-0" style={{ height: '38px', width: '38px' }}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <svg viewBox="0 0 24 24" fill="#DFFF00" stroke="#DFFF00" strokeWidth="1.65" className="rotate-[12deg] shrink-0" style={{ height: '44px', width: '44px' }}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>

    </section>
  );
}
