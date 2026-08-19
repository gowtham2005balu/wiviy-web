import React from 'react';

export default function SoulsMeet() {
  return (
    <section className="relative w-full bg-white py-24 sm:py-32 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden select-none">

      {/* Floating Organic Outline Shape on the Left (Figma Heart/Flower Vector - Highlight 26) */}
      <div className="absolute left-[-161px] top-[0px] w-[290px] h-[282px] opacity-100 pointer-events-none z-10 hidden lg:block -rotate-[56.18deg]">
        <svg viewBox="0 0 312 248" fill="none" className="w-full h-full">
          <path
            d="M126.993 120.622C120.682 130.044 19.2871 38.8499 5.04137 87.5056C-8.50302 133.766 114.724 138.939 108.712 147.913C102.701 156.888 55.6487 216.239 80.2728 238.783C107.773 263.961 145.673 170.309 151.241 170.493C156.809 170.676 180.07 236.543 209.001 224.129C238.972 211.268 203.88 145.704 207.212 140.729C210.544 135.755 317.113 169.893 306.435 132.466C297.758 102.049 226.022 112.648 231.399 104.621C236.776 96.5946 281.423 39.7457 258.356 10.5858C230.165 -25.0511 186.599 95.4858 175.294 96.9303C163.988 98.3748 144.245 3.96493 109.521 22.9807C75.2358 41.7565 133.305 111.2 126.993 120.622Z"
            stroke="#EBF2B7"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-[1565px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-[72px] items-center relative z-10">

        {/* Left Column: Title and Paragraph */}
        <div className="lg:col-span-4 flex flex-col items-start text-left lg:max-w-[390px]">
          <h2 className="font-serif text-5xl sm:text-6xl md:text-[100px] font-black text-[#111111] tracking-tight leading-[1.04] mb-8 max-w-[390px]">
            Where<br />
            Souls<br />
            Meet
          </h2>
          <p className="text-[#525252] font-sans font-normal text-xl sm:text-[24px] leading-[32px] max-w-[411px]">
            A dating app that helps you find real connections, not just matches.
          </p>
        </div>

        {/* Right Column: Two overlapping phone mockups with backing paper shapes */}
        <div className="lg:col-span-8 w-full flex items-center justify-center lg:justify-end">

          {/* Main Visual Container */}
          <div className="relative w-full max-w-[1103px] aspect-[1103/913] flex items-center justify-center">

            {/* Background Paper Blobs SVG */}
            <svg
              viewBox="0 0 1104 913"
              className="absolute inset-0 w-full h-full -z-10 pointer-events-none select-none"
            >
              <defs>
                <pattern id="bg-paper-pattern" patternUnits="userSpaceOnUse" width="1104" height="913">
                  <image href="/assets/page-1/bg.jpg" width="1104" height="913" preserveAspectRatio="xMidYMid slice" />
                </pattern>

                <filter id="crumple-filter-left" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse">
                  <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" seed="132" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="22" xChannelSelector="R" yChannelSelector="G" />
                </filter>

                <filter id="crumple-filter-right" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse">
                  <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" seed="145" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="22" xChannelSelector="R" yChannelSelector="G" />
                </filter>
              </defs>

              {/* Left Blob */}
              <g filter="url(#crumple-filter-left)">
                <path
                  d="M265.765 776.791C201.565 831.306 107.501 826.016 55.6662 764.973C3.83145 703.931 63.8596 645.193 128.059 590.677C192.259 536.161 236.319 506.512 288.154 567.554C339.989 628.596 422.5 831 265.765 776.791Z"
                  fill="url(#bg-paper-pattern)"
                />
              </g>

              {/* Right Blobs (Main and overlays) */}
              <g filter="url(#crumple-filter-right)">
                <path
                  d="M969.765 776.791C905.565 831.306 811.501 826.016 759.666 764.973C707.831 703.931 767.86 645.193 832.059 590.677C896.259 536.161 940.319 506.512 992.154 567.554C1043.99 628.596 1033.96 722.275 969.765 776.791Z"
                  fill="url(#bg-paper-pattern)"
                />
                <path
                  d="M951.89 473.746C887.69 528.262 811.296 543.78 781.258 508.407C751.22 473.034 812.86 416.193 877.059 361.677C941.259 307.161 983.708 275.614 1013.75 310.988C1043.78 346.361 1016.09 419.231 951.89 473.746Z"
                  fill="url(#bg-paper-pattern)"
                />
                <path
                  d="M986.89 600.746C922.69 655.262 846.296 670.78 816.258 635.407C786.22 600.034 847.86 543.193 912.059 488.677C976.259 434.161 1018.71 402.614 1048.75 437.988C1078.78 473.361 1051.09 546.231 986.89 600.746Z"
                  fill="url(#bg-paper-pattern)"
                />
              </g>
            </svg>

            {/* Left Phone: What are you looking for? */}
            <img
              src="/assets/page-1/Frame 1984078915-left 1.png"
              alt="What are you looking for mockup"
              className="absolute w-[45%] h-auto z-20 transition-transform duration-300 hover:scale-[1.02] drop-shadow-[0_15px_35px_rgba(0,0,0,0.12)]"
              style={{
                left: '14%',
                top: '6.3%',
                transform: 'rotate(-10deg)',
              }}
            />

            {/* Right Phone: It's a MATCH! */}
            <img
              src="/assets/page-1/div.phone-portrait 1.png"
              alt="It's a Match mockup"
              className="absolute w-[39%] h-auto z-10 transition-transform duration-300 hover:scale-[1.02] drop-shadow-[0_20px_45px_rgba(0,0,0,0.15)]"
              style={{
                left: '46%',
                top: '0%',
                transform: 'rotate(0deg)',
              }}
            />

          </div>
        </div>

      </div>
    </section>
  );
}
