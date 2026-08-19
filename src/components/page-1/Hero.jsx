import React from 'react';
import heroPattern from '../../assets/hero.png';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[850px] lg:h-[940px] pt-[128px] pb-12 px-6 sm:px-12 md:px-16 lg:px-24 bg-white overflow-hidden flex items-center">

      {/* Bottom-Right Hand-Drawn Asterisk (SVG provided by user) */}
      <div className="absolute bottom-10 right-6 sm:right-16 w-[111px] h-[173px] opacity-90 select-none pointer-events-none z-10">
        <svg width="111" height="173" viewBox="0 0 111 173" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M92.2945 28.7224C92.2945 28.7224 66.635 74.1857 53.1011 154.67" stroke="#131313" strokeWidth="8" strokeLinecap="round" />
          <path d="M27.7041 83.0336C61.29 86.0846 97.7987 104.846 97.7987 104.846" stroke="#131313" strokeWidth="8" strokeLinecap="round" />
          <path d="M26.5801 125.595C25.1817 127.305 25.4345 129.825 27.1447 131.223C28.8549 132.622 31.3749 132.369 32.7733 130.659L29.6767 128.127L26.5801 125.595ZM153.94 42.8716C155.971 42.0034 156.914 39.6528 156.046 37.6214C155.178 35.59 152.827 34.647 150.796 35.5152L152.368 39.1934L153.94 42.8716ZM29.6767 128.127L32.7733 130.659C55.3028 103.105 85.5479 81.148 110.308 66.0365C122.663 58.4959 133.597 52.6929 141.435 48.7786C145.353 46.8221 148.494 45.3389 150.649 44.3478C151.726 43.8524 152.556 43.48 153.114 43.2332C153.392 43.1098 153.603 43.0177 153.741 42.9574C153.811 42.9272 153.862 42.9049 153.895 42.8906C153.912 42.8835 153.924 42.8783 153.931 42.8751C153.935 42.8736 153.938 42.8725 153.939 42.8719C153.94 42.8716 153.94 42.8715 153.94 42.8714C153.94 42.8714 153.94 42.8716 152.368 39.1934C150.796 35.5152 150.795 35.5157 150.793 35.5162C150.793 35.5166 150.791 35.5173 150.789 35.518C150.786 35.5194 150.782 35.5213 150.776 35.5237C150.765 35.5286 150.749 35.5354 150.728 35.5442C150.687 35.5619 150.628 35.5876 150.55 35.6213C150.396 35.6886 150.169 35.7877 149.874 35.9185C149.284 36.18 148.419 36.5678 147.306 37.0797C145.08 38.1033 141.862 39.6234 137.861 41.6214C129.861 45.6164 118.724 51.5278 106.14 59.2078C81.0223 74.5377 49.9218 97.0474 26.5801 125.595L29.6767 128.127Z" fill="#131313" />
          <path d="M40.8953 28.0948C40.276 25.9743 38.0549 24.7573 35.9344 25.3767C33.8138 25.996 32.5968 28.2171 33.2162 30.3377L37.0557 29.2163L40.8953 28.0948ZM102.817 166.205C104.003 168.069 106.476 168.618 108.339 167.433C110.203 166.247 110.753 163.774 109.567 161.91L106.192 164.058L102.817 166.205ZM37.0557 29.2163L33.2162 30.3377C40.4253 55.0221 57.926 89.0938 73.4351 116.74C81.2227 130.621 88.5631 142.98 93.9575 151.869C96.6552 156.314 98.8672 159.894 100.406 162.364C101.176 163.599 101.777 164.557 102.187 165.207C102.391 165.532 102.548 165.781 102.654 165.948C102.708 166.032 102.748 166.096 102.775 166.139C102.789 166.16 102.799 166.176 102.806 166.187C102.81 166.193 102.812 166.197 102.814 166.2C102.815 166.202 102.816 166.203 102.816 166.204C102.817 166.204 102.817 166.205 106.192 164.058C109.567 161.91 109.567 161.91 109.567 161.91C109.566 161.909 109.566 161.909 109.565 161.907C109.564 161.905 109.561 161.901 109.558 161.897C109.552 161.887 109.542 161.872 109.529 161.851C109.504 161.811 109.465 161.75 109.414 161.668C109.311 161.506 109.157 161.263 108.955 160.943C108.553 160.303 107.958 159.357 107.196 158.133C105.672 155.687 103.476 152.134 100.797 147.718C95.436 138.885 88.1431 126.607 80.4121 112.826C64.8861 85.1493 47.8185 51.8002 40.8953 28.0948L37.0557 29.2163Z" fill="#131313" />
        </svg>
      </div>

      <div className="max-w-[1700px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center z-10">
        {/* Left Column: Wording and CTAs */}
        <div className="lg:col-span-5 flex flex-col items-start text-left lg:pr-6">
          <span className="font-sans text-[#494949] text-xs sm:text-sm font-bold tracking-[2.1px] uppercase mb-5">
            DISCOVER REAL CONNECTIONS
          </span>

          <h1 className="font-serif text-5xl sm:text-6xl xl:text-[72px] font-black text-[#111111] leading-[1.25] tracking-tight mb-8">
            Find Meaningful<br />
            <span className="relative inline-block bg-[#D2F026] px-3 py-0.5 rounded -rotate-[1deg] origin-left">
              Connections
            </span>{" "}Start<br />
            Here
          </h1>

          <p className="text-[#6B6B6B] text-lg sm:text-[20px] font-medium leading-[28px] max-w-[480px] mb-12">
            Wiviy is more than just a dating app. It's where genuine conversations become meaningful relationships.
          </p>

          <div className="flex flex-wrap items-center gap-5 w-full sm:w-auto">
            {/* Download App Button */}
            <button
              type="button"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.with.app', '_blank')}
              className="w-full sm:w-[227px] h-[82px] bg-[#DFFF00] text-[#111111] font-bold text-[16px] rounded-full hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-[0_8px_24px_rgba(223,255,0,0.3)] flex items-center justify-center gap-[13px]"
            >
              <span>Download App</span>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M8.4375 21.5625L21.5625 8.4375M21.5625 8.4375H11.25M21.5625 8.4375V18.75" stroke="#111111" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Watch Demo Button */}
            <button
              type="button"
              className="w-full sm:w-[227px] h-[82px] bg-[rgba(255,255,255,0.8)] border-2 border-[#909090] text-[#111111] font-bold text-[16px] rounded-full hover:bg-white active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2.5 backdrop-blur-[2px]"
            >
              <span>Watch Demo</span>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M10 7.5L20 15L10 22.5V7.5Z" fill="#111111" stroke="#111111" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column: Layered 3-iPhone Mockup, fluidly scaled and bounded to its column so it never bleeds into the headline */}
        <div className="lg:col-span-7 relative w-full flex items-center justify-center lg:justify-end overflow-hidden">
          {/* Group wrapper: aspect-locked, percentage-positioned children so it scales with the column instead of jumping between fixed breakpoints */}
          <div className="relative w-full max-w-[967px] aspect-[967/836] shrink-0 select-none">
            {/* iPhone 16 - 52-portrait 1 (Left Phone) */}
            <img
              src="/assets/page-1/iPhone 16 - 52-portrait 1.png"
              alt="iPhone Left mockup"
              className="absolute left-[0%] top-[15.55%] w-[33.61%] h-[76.44%] z-10 transition-transform duration-300 hover:scale-[1.01] drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
            />

            {/* iPhone 16 - 53 (1)-portrait 1 (Right Phone) */}
            <img
              src="/assets/page-1/iPhone 16 - 53 (1)-portrait 1.png"
              alt="iPhone Right mockup"
              className="absolute left-[67.11%] top-[15.67%] w-[32.89%] h-[75%] z-10 transition-transform duration-300 hover:scale-[1.01] drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
            />

            {/* iPhone 16 - 57-portrait 1 (Center Phone) */}
            <img
              src="/assets/page-1/iPhone 16 - 57-portrait 1.png"
              alt="iPhone Center mockup"
              className="absolute left-[28.64%] top-0 w-[43.85%] h-full z-20 transition-transform duration-300 hover:scale-[1.01] drop-shadow-[0_25px_50px_rgba(0,0,0,0.18)]"
            />

            {/* Behind Phones Yellow Highlight Shape */}
            <div className="absolute inset-0 bg-radial from-[#d2ff00]/10 to-transparent rounded-full filter blur-3xl -z-10 scale-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
