import React from 'react';

// Hand-drawn sketchy heart component using the user's custom SVG path
function SketchyHeart({ className, stroke = "currentColor", strokeWidth = 4 }) {
  return (
    <svg
      viewBox="0 0 44 40"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      className={className}
    >
      <path d="M3.36068 10.1463C11.1662 2.7271 20.6978 17.6673 23.0659 18.66C25.4341 19.6526 25.0056 -0.835053 37.5738 2.33278C50.1421 5.50061 29.9871 37.6583 27.2056 37.9031C23.7287 38.2092 -4.44489 17.5655 3.36068 10.1463Z" />
    </svg>
  );
}

export default function WhyWiviy() {
  const tickerItems = [
    "CHEMISTRY", "CONNECTIONS", "LOVE", "REAL PEOPLE",
    "GOOD VIBES", "VERIFIED MATCHES", "MEANINGFUL CHATS", "AUTHENTIC DATES"
  ];

  const scrollingItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <section id="why-wiviy" className="w-full bg-white py-24 overflow-hidden relative font-sans">
      {/* Ticker Banner */}
      <div className="w-full bg-[#d2ff00] py-4 border-y border-zinc-950 overflow-hidden flex items-center mb-28 select-none">
        <div className="animate-marquee flex items-center whitespace-nowrap gap-16">
          {scrollingItems.map((item, index) => (
            <div key={index} className="flex items-center gap-6">
              <span className="font-sans font-black text-sm sm:text-base text-zinc-950 tracking-[2px] uppercase">
                {item}
              </span>
              <span className="text-zinc-950/40 font-bold text-sm sm:text-base">★</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Section Content Wrapper */}
      <div className="max-w-[1700px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 relative">
        {/* Floating Outline Hearts */}
        <SketchyHeart className="absolute left-[4%] top-[-40px] w-11 h-10 text-zinc-950 opacity-90 select-none pointer-events-none -rotate-[15deg] hidden md:block" />
        <SketchyHeart className="absolute right-[4%] top-[-30px] w-11 h-10 text-zinc-950 opacity-90 select-none pointer-events-none rotate-[20deg] hidden md:block" />

        {/* Intro Header */}
        <div className="flex flex-col items-center text-center mb-24 relative">
          <span className="text-[#a3a3a3] text-sm font-bold tracking-[2px] uppercase mb-4">
            Why Wiviy
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-[85px] font-extrabold text-zinc-950 tracking-tight leading-[0.95] max-w-3xl mb-8">
            Built for<br />
            <span className="relative inline-block px-3">
              <span className="absolute inset-0 bg-[#d2ff00] -rotate-1 rounded" />
              <span className="relative z-10 text-zinc-950">Real Connection</span>
            </span>
          </h2>
          <p className="text-[#6B6B6B] text-lg sm:text-xl font-medium leading-relaxed max-w-xl">
            We have reimagined what a dating app should feel like. No games, just genuine people.
          </p>
        </div>

        {/* Organic Flower Outline overlaying Card 1 left edge */}
        <div className="absolute left-[-140px] top-[380px] w-[312px] h-[248px] opacity-100 select-none pointer-events-none z-0 hidden xl:block">
          <svg viewBox="0 0 312 248" fill="none" className="w-full h-full">
            <path
              d="M126.993 120.622C120.682 130.044 19.2871 38.8499 5.04137 87.5056C-8.50302 133.766 114.724 138.939 108.712 147.913C102.701 156.888 55.6487 216.239 80.2728 238.783C107.773 263.961 145.673 170.309 151.241 170.493C156.809 170.676 180.07 236.543 209.001 224.129C238.972 211.268 203.88 145.704 207.212 140.729C210.544 135.755 317.113 169.893 306.435 132.466C297.758 102.049 226.022 112.648 231.399 104.621C236.776 96.5946 281.423 39.7457 258.356 10.5858C230.165 -25.0511 186.599 95.4858 175.294 96.9303C163.988 98.3748 144.245 3.96493 109.521 22.9807C75.2358 41.7565 133.305 111.2 126.993 120.622Z"
              stroke="#111111"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* 4 Cards Grid - Replicating Figma Layer Sizes & Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch max-w-[1608px] mx-auto">

          {/* Card 1: Meaningful Matches */}
          <div className="relative flex flex-col justify-between p-[24px] md:p-[30px] rounded-[30px] md:rounded-[40px] border-2 border-[#767676] paper-lime-texture text-[#111111] min-h-[400px] lg:h-[530px] overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.08)] z-10">

            {/* Top Icon Circle (Ellipse 4533) */}
            <div className="w-[80px] h-[80px] rounded-full bg-[#F6F9C8] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.2" className="w-[41.74px] h-[41.74px]">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            {/* Typography Content */}
            <div className="mt-[30px] md:mt-[45px] flex-grow flex flex-col gap-6 md:gap-8">
              <h3 className="font-serif text-[32px] md:text-[45px] font-bold tracking-tight leading-[1.1] md:leading-[50px] text-[#111111] flex flex-col items-start">
                <span>Meaningful</span>
                <span className="relative inline-block px-3 py-0.5 bg-[#F6FFC3] rounded-md -rotate-1 mt-1 text-zinc-950 leading-none">
                  Matches
                </span>
              </h3>
              <p className="text-[#6B6B6B] font-sans font-medium text-[18px] md:text-[22px] leading-[1.6] md:leading-[35px] pr-2">
                Our smart algorithm connects you with people who share your values, interests, and vibe.
              </p>
            </div>

            {/* Card 1 Vector Drawings (Highlight SVGs) */}
            {/* Hand-Drawn Arrow */}
            <div className="absolute right-[-6px] top-[123px] w-[106px] h-[100px] opacity-100 pointer-events-none">
              <svg width="106" height="100" viewBox="0 0 106 100" fill="none" className="w-full h-full">
                <g clipPath="url(#clip0_122_686)">
                  <path d="M71.2695 12.8035C67.7913 28.0319 74.3929 53.1798 42.9236 69.6323" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M44.2439 59.8261L40.5369 71.4561L53.5285 70.3521" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_122_686">
                    <rect width="56" height="90" fill="white" transform="translate(71.5664) rotate(52.6714)" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* Hand-Drawn Star */}
            <div className="absolute right-[25px] bottom-[10px] w-[45px] h-[60px] opacity-100 pointer-events-none rotate-[7.19deg]">
              <svg width="45" height="60" viewBox="0 0 45 60" fill="none" className="w-full h-full">
                <path d="M25.7323 2.37723C23.8652 8.86125 16.9808 21.432 4.37922 19.8428" stroke="#131313" strokeWidth="4" strokeLinecap="round" />
                <path d="M18.859 56.947C21.338 45.6101 29.4464 23.3336 42.048 24.9228" stroke="#131313" strokeWidth="4" strokeLinecap="round" />
                <path d="M25.7301 2.37863C25.9153 9.23101 29.4361 23.3331 42.0376 24.9222" stroke="#131313" strokeWidth="4" strokeLinecap="round" />
                <path d="M18.8573 56.9434C19.7734 45.2998 13.0024 20.9278 6.37004 20.0914" stroke="#131313" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Card 2: Real Chats */}
          <div className="relative flex flex-col justify-between p-[24px] md:p-[30px] rounded-[30px] md:rounded-[40px] border-2 border-[#767676] paper-lime-texture text-[#111111] min-h-[400px] lg:h-[530px] overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.05)] z-10">
            <div className="w-[80px] h-[80px] rounded-full bg-[#F6F9C8] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1C274C" strokeWidth="2.2" className="w-[41.74px] h-[41.74px]">
                {/* Speech bubble outline containing a heart */}
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.91 2.54 15.7 3.47 17.22L2 22L6.78 20.53C8.3 21.46 10.09 22 12 22Z" />
                <path d="M12 14.5l-1.09-1c-3.8-3.4-6.4-5.8-6.4-8.8 0-2.5 1.9-4.4 4.4-4.4 1.4 0 2.8.7 3.6 1.8.8-1.1 2.2-1.8 3.6-1.8 2.5 0 4.4 1.9 4.4 4.4 0 3-2.6 5.4-6.4 8.8l-1.09 1z" transform="scale(0.4) translate(18, 14)" fill="#1C274C" />
              </svg>
            </div>

            <div className="mt-[30px] md:mt-[45px] flex-grow flex flex-col gap-6 md:gap-8">
              <h3 className="font-serif text-[32px] md:text-[45px] font-bold tracking-tight leading-[1.1] md:leading-[50px] text-[#111111] flex flex-wrap items-center gap-x-3">
                <span>Real</span>
                <span className="relative inline-block px-3 py-0.5 bg-[#F6FFC3] rounded-md -rotate-1 text-zinc-950 leading-none">
                  Chats
                </span>
              </h3>
              <p className="text-[#6B6B6B] font-sans font-medium text-[18px] md:text-[22px] leading-[1.6] md:leading-[35px] pr-2">
                Start chatting naturally with icebreakers, shared interests, and music-based connections.
              </p>
            </div>

            {/* Card 2 Vector Drawings */}
            {/* Top-Right Asterisk drawing (Highlight 5) */}
            <div className="absolute right-[46px] top-[64px] w-[45px] h-[57px] opacity-100 pointer-events-none">
              <svg width="45" height="57" viewBox="0 0 45 57" fill="none" className="w-full h-full">
                <path d="M21.0263 5.44275C21.0263 5.44275 17.1439 24.2537 21.0263 54.0621" stroke="#383830" strokeWidth="5" strokeLinecap="round" />
                <path d="M4.94531 31.6331C16.5926 29.0286 30.8744 31.6331 30.8744 31.6331" stroke="#383830" strokeWidth="5" strokeLinecap="round" />
                <path d="M8.065 46.3107C7.56185 47.6112 8.17245 49.1019 9.42882 49.6403C10.6852 50.1786 12.1115 49.5608 12.6147 48.2603L10.3398 47.2855L8.065 46.3107ZM43.9893 4.49392C45.0121 3.58462 45.1229 1.97653 44.2367 0.902145C43.3505 -0.172236 41.8029 -0.306058 40.78 0.603244L42.3846 2.54859L43.9893 4.49392ZM10.3398 47.2855L12.6147 48.2603C17.2615 36.2495 25.0767 25.3104 31.807 17.3209C35.1606 13.3397 38.2192 10.121 40.4356 7.90123C41.5432 6.79184 42.4391 5.93335 43.0546 5.35535C43.3623 5.06638 43.5998 4.84764 43.7585 4.70281C43.8378 4.63039 43.8974 4.57647 43.9362 4.5415C43.9557 4.52402 43.9699 4.51127 43.9788 4.50332C43.9832 4.49935 43.9863 4.49657 43.9881 4.49501C43.9889 4.49422 43.9895 4.49374 43.9897 4.49356C43.9898 4.49347 43.9897 4.49356 43.9897 4.49351C43.9895 4.49368 43.9893 4.49392 42.3846 2.54859C40.78 0.603244 40.7796 0.603641 40.779 0.604112C40.7787 0.604372 40.7781 0.604921 40.7775 0.605439C40.7643 0.606474 40.7749 0.607817 40.7749 0.607817L40.773 0.609462C40.7693 0.612755 40.7643 0.617265 40.7579 0.622983C40.7451 0.634418 40.727 0.650692 40.7036 0.671743C40.6568 0.713848 40.5892 0.77508 40.5016 0.854968C40.3266 1.01474 40.0721 1.2492 39.7469 1.55462C39.0965 2.1654 38.1627 3.06047 37.0148 4.21014C34.7201 6.50845 31.5642 9.82993 28.1044 13.937C21.208 22.1238 13.0007 33.5532 8.065 46.3107L10.3398 47.2855Z" fill="#383830" />
                <path d="M4.48658 10.2511C3.73992 9.07684 2.22191 8.75736 1.09602 9.53754C-0.0298676 10.3177 -0.337294 11.9021 0.409368 13.0764L2.44797 11.6638L4.48658 10.2511ZM38.3349 53.4977C39.3656 54.4082 40.9092 54.2738 41.7825 53.1974C42.6559 52.121 42.5284 50.5103 41.4977 49.5998L39.9163 51.5488L38.3349 53.4977ZM2.44797 11.6638L0.409368 13.0764C5.50395 21.0886 15.0629 31.2388 23.1917 39.267C27.2852 43.31 31.0673 46.8642 33.8258 49.4076C35.2054 50.6797 36.3302 51.7 37.1111 52.4032C37.5016 52.7549 37.8063 53.0273 38.0139 53.2125C38.1177 53.305 38.1973 53.3757 38.2513 53.4236C38.2783 53.4476 38.2988 53.4658 38.3128 53.4782C38.3198 53.4844 38.3252 53.4891 38.3289 53.4924C38.3307 53.494 38.3321 53.4953 38.3331 53.4962C38.3336 53.4966 38.3341 53.497 38.3343 53.4972C38.3347 53.4975 38.3349 53.4977 39.9163 51.5488C41.4977 49.5998 41.4977 49.5999 41.4976 49.5998C41.4974 49.5996 41.4972 49.5995 41.4969 49.5992C41.4962 49.5986 41.4952 49.5976 41.4936 49.5963C41.4906 49.5936 41.486 49.5895 41.4796 49.5839C41.467 49.5727 41.4478 49.5557 41.4222 49.533C41.371 49.4876 41.2943 49.4194 41.1934 49.3294C40.9916 49.1495 40.6932 48.8826 40.3091 48.5368C39.5409 47.845 38.4307 46.8379 37.0668 45.5804C34.3382 43.0646 30.5991 39.5506 26.5561 35.5576C18.4119 27.5141 9.23673 17.7217 4.48658 10.2511L2.44797 11.6638Z" fill="#383830" />
              </svg>
            </div>

            {/* Bottom-Left Splash drawing (Group 1000003027) */}
            <div className="absolute left-[29.5px] bottom-[33px] w-[53px] h-[52px] opacity-100 pointer-events-none rotate-[83.4deg]">
              <svg width="53" height="52" viewBox="0 0 53 52" fill="none" className="w-full h-full">
                <path d="M51.5453 31.5355C52.9224 30.6826 53.3592 28.7988 52.5208 27.3278C51.6825 25.8568 49.8865 25.3558 48.5094 26.2087L50.0274 28.8721L51.5453 31.5355ZM26.7792 37.399C25.2019 37.7152 24.1937 39.3259 24.5274 40.9965C24.861 42.6672 26.4102 43.7652 27.9875 43.4491L27.3834 40.4241L27.9875 43.4491C38.9804 41.2455 46.8339 34.4534 51.5453 31.5355L50.0274 28.8721Z" fill="#232326" />
                <path d="M37.497 5.38994C38.1195 3.83592 37.4186 2.01677 35.9315 1.32675C34.4443 0.636737 32.7341 1.33715 32.1115 2.89117L34.8042 4.14056L37.497 5.38994ZM16.1115 28.2604C14.8604 29.3043 14.6704 31.2385 15.6872 32.5807C16.704 33.9229 18.5425 34.1647 19.7937 33.1208L17.9526 30.6906L16.1115 28.2604ZM34.8042 4.14056L32.1115 2.89117C30.9108 5.88832 28.6301 10.831 25.7454 15.7684C22.8291 20.7599 19.451 25.474 16.1115 28.2604L17.9526 30.6906L19.7937 33.1208C23.9229 29.6755 27.718 24.2414 30.734 19.0792C33.7817 13.8629 36.1924 8.6463 37.497 5.38994L34.8042 4.14056Z" fill="#232326" />
                <path d="M4.63805 24.5325C4.43823 26.2148 5.57313 27.7787 7.17291 28.0255C8.77269 28.2723 10.2315 27.1086 10.4314 25.4263L7.53471 24.9794L4.63805 24.5325ZM14.9457 5.70593C15.8336 4.30706 15.4624 2.38949 14.1167 1.42291C12.771 0.456329 10.9604 0.80677 10.0725 2.20564L12.5091 3.95578L14.9457 5.70593ZM7.53471 24.9794L10.4314 25.4263C10.7438 22.7957 11.364 18.5953 12.1996 14.6054C12.6174 12.61 13.0803 10.7101 13.5728 9.10528C14.0822 7.44528 14.5611 6.31191 14.9457 5.70593L12.5091 3.95578L10.0725 2.20564C9.23806 3.52029 8.56589 5.29926 8.01439 7.09641C7.44596 8.94871 6.93802 11.0508 6.49733 13.1552C5.61576 17.365 4.96786 21.7557 4.63805 24.5325L7.53471 24.9794Z" fill="#232326" />
              </svg>
            </div>
          </div>

          {/* Card 3: Verified Profiles */}
          <div className="relative flex flex-col justify-between p-[24px] md:p-[30px] rounded-[30px] md:rounded-[40px] border-2 border-[#A6A6A6] paper-lime-texture text-[#111111] min-h-[400px] lg:h-[530px] overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.05)] z-10">
            <div className="w-[80px] h-[80px] rounded-full bg-[#F6F9C8] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3" className="w-[41.74px] h-[41.74px]">
                {/* Shield badge with checkmark inside */}
                <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" />
                <path d="M9 11l2 2 4-4" stroke="#000000" strokeWidth="3" />
              </svg>
            </div>

            <div className="mt-[30px] md:mt-[45px] flex-grow flex flex-col gap-6 md:gap-8">
              <h3 className="font-serif text-[32px] md:text-[45px] font-bold tracking-tight leading-[1.1] md:leading-[50px] text-[#111111] flex flex-col items-start">
                <span>Verified</span>
                <span className="relative inline-block px-3 py-0.5 bg-[#F6FFC3] rounded-md -rotate-1 mt-1 text-zinc-950 leading-none">
                  Profiles
                </span>
              </h3>
              <p className="text-[#6B6B6B] font-sans font-medium text-[18px] md:text-[22px] leading-[1.6] md:leading-[35px] pr-2">
                Every profile is verified to ensure you are connecting with real, genuine people.
              </p>
            </div>

            {/* Card 3 Vector Drawings */}
            {/* Highlight 10: Tilted Heart Outline */}
            <SketchyHeart className="absolute right-[112px] top-[156px] w-[35.02px] h-[31.84px] opacity-100 pointer-events-none rotate-[18.19deg]" stroke="#242424" strokeWidth={4} />

            {/* Group 1000003298: Bottom-Right Splash */}
            <div className="absolute right-[36px] bottom-[31px] w-[53px] h-[52px] opacity-100 pointer-events-none rotate-[0.46deg]">
              <svg width="53" height="52" viewBox="0 0 53 52" fill="none" className="w-full h-full">
                <path d="M51.5453 31.5355C52.9224 30.6826 53.3592 28.7988 52.5208 27.3278C51.6825 25.8568 49.8865 25.3558 48.5094 26.2087L50.0274 28.8721L51.5453 31.5355ZM26.7792 37.399C25.2019 37.7152 24.1937 39.3259 24.5274 40.9965C24.861 42.6672 26.4102 43.7652 27.9875 43.4491L27.3834 40.4241L27.9875 43.4491C38.9804 41.2455 46.8339 34.4534 51.5453 31.5355L50.0274 28.8721Z" fill="#232326" />
                <path d="M37.497 5.38994C38.1195 3.83592 37.4186 2.01677 35.9315 1.32675C34.4443 0.636737 32.7341 1.33715 32.1115 2.89117L34.8042 4.14056L37.497 5.38994ZM16.1115 28.2604C14.8604 29.3043 14.6704 31.2385 15.6872 32.5807C16.704 33.9229 18.5425 34.1647 19.7937 33.1208L17.9526 30.6906L16.1115 28.2604ZM34.8042 4.14056L32.1115 2.89117C30.9108 5.88832 28.6301 10.831 25.7454 15.7684C22.8291 20.7599 19.451 25.474 16.1115 28.2604L17.9526 30.6906L19.7937 33.1208C23.9229 29.6755 27.718 24.2414 30.734 19.0792C33.7817 13.8629 36.1924 8.6463 37.497 5.38994L34.8042 4.14056Z" fill="#232326" />
                <path d="M4.63805 24.5325C4.43823 26.2148 5.57313 27.7787 7.17291 28.0255C8.77269 28.2723 10.2315 27.1086 10.4314 25.4263L7.53471 24.9794L4.63805 24.5325ZM14.9457 5.70593C15.8336 4.30706 15.4624 2.38949 14.1167 1.42291C12.771 0.456329 10.9604 0.80677 10.0725 2.20564L12.5091 3.95578L14.9457 5.70593ZM7.53471 24.9794L10.4314 25.4263C10.7438 22.7957 11.364 18.5953 12.1996 14.6054C12.6174 12.61 13.0803 10.7101 13.5728 9.10528C14.0822 7.44528 14.5611 6.31191 14.9457 5.70593L12.5091 3.95578L10.0725 2.20564C9.23806 3.52029 8.56589 5.29926 8.01439 7.09641C7.44596 8.94871 6.93802 11.0508 6.49733 13.1552C5.61576 17.365 4.96786 21.7557 4.63805 24.5325L7.53471 24.9794Z" fill="#232326" />
              </svg>
            </div>
          </div>

          {/* Card 4: Safe Dating */}
          <div className="relative flex flex-col justify-between p-[24px] md:p-[30px] rounded-[30px] md:rounded-[40px] border-2 border-[#A6A6A6] paper-lime-texture text-[#111111] min-h-[400px] lg:h-[530px] overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.05)] z-10">
            <div className="w-[80px] h-[80px] rounded-full bg-[#F6F9C8] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3" className="w-[41.74px] h-[41.74px]">
                {/* Shield outline */}
                <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" />
              </svg>
            </div>

            <div className="mt-[30px] md:mt-[45px] flex-grow flex flex-col gap-6 md:gap-8">
              <h3 className="font-serif text-[32px] md:text-[45px] font-bold tracking-tight leading-[1.1] md:leading-[50px] text-[#111111] flex flex-wrap items-center gap-x-3">
                <span>Safe</span>
                <span className="relative inline-block px-3 py-0.5 bg-[#F6FFC3] rounded-md -rotate-1 text-zinc-950 leading-none">
                  Dating
                </span>
              </h3>
              <p className="text-[#6B6B6B] font-sans font-medium text-[18px] md:text-[22px] leading-[1.6] md:leading-[35px] pr-2">
                Built-in safety features and community guidelines create a respectful environment for everyone.
              </p>
            </div>

            {/* Card 4 Vector Drawings */}
            {/* Group 1000003015: Splash mark top-right */}
            <div className="absolute right-[20px] top-[110px] w-[53px] h-[52px] opacity-100 pointer-events-none">
              <svg width="53" height="52" viewBox="0 0 53 52" fill="none" className="w-full h-full">
                <path d="M51.5453 31.5355C52.9224 30.6826 53.3592 28.7988 52.5208 27.3278C51.6825 25.8568 49.8865 25.3558 48.5094 26.2087L50.0274 28.8721L51.5453 31.5355ZM26.7792 37.399C25.2019 37.7152 24.1937 39.3259 24.5274 40.9965C24.861 42.6672 26.4102 43.7652 27.9875 43.4491L27.3834 40.4241L27.9875 43.4491C38.9804 41.2455 46.8339 34.4534 51.5453 31.5355L50.0274 28.8721Z" fill="#232326" />
                <path d="M37.497 5.38994C38.1195 3.83592 37.4186 2.01677 35.9315 1.32675C34.4443 0.636737 32.7341 1.33715 32.1115 2.89117L34.8042 4.14056L37.497 5.38994ZM16.1115 28.2604C14.8604 29.3043 14.6704 31.2385 15.6872 32.5807C16.704 33.9229 18.5425 34.1647 19.7937 33.1208L17.9526 30.6906L16.1115 28.2604ZM34.8042 4.14056L32.1115 2.89117C30.9108 5.88832 28.6301 10.831 25.7454 15.7684C22.8291 20.7599 19.451 25.474 16.1115 28.2604L17.9526 30.6906L19.7937 33.1208C23.9229 29.6755 27.718 24.2414 30.734 19.0792C33.7817 13.8629 36.1924 8.6463 37.497 5.38994L34.8042 4.14056Z" fill="#232326" />
                <path d="M4.63805 24.5325C4.43823 26.2148 5.57313 27.7787 7.17291 28.0255C8.77269 28.2723 10.2315 27.1086 10.4314 25.4263L7.53471 24.9794L4.63805 24.5325ZM14.9457 5.70593C15.8336 4.30706 15.4624 2.38949 14.1167 1.42291C12.771 0.456329 10.9604 0.80677 10.0725 2.20564L12.5091 3.95578L14.9457 5.70593ZM7.53471 24.9794L10.4314 25.4263C10.7438 22.7957 11.364 18.5953 12.1996 14.6054C12.6174 12.61 13.0803 10.7101 13.5728 9.10528C14.0822 7.44528 14.5611 6.31191 14.9457 5.70593L12.5091 3.95578L10.0725 2.20564C9.23806 3.52029 8.56589 5.29926 8.01439 7.09641C7.44596 8.94871 6.93802 11.0508 6.49733 13.1552C5.61576 17.365 4.96786 21.7557 4.63805 24.5325L7.53471 24.9794Z" fill="#232326" />
              </svg>
            </div>

            {/* Bottom-Right Neon-Lime Star */}
            <div className="absolute right-[40px] bottom-[10px] w-[45px] h-[60px] opacity-100 pointer-events-none">
              <svg width="45" height="60" viewBox="0 0 45 60" fill="none" className="w-full h-full">
                <path d="M25.7323 2.37723C23.8652 8.86125 16.9808 21.432 4.37922 19.8428" stroke="#E2F462" strokeWidth="4" strokeLinecap="round" />
                <path d="M18.859 56.947C21.338 45.6101 29.4464 23.3336 42.048 24.9228" stroke="#E2F462" strokeWidth="4" strokeLinecap="round" />
                <path d="M25.7301 2.37863C25.9153 9.23101 29.4361 23.3331 42.0376 24.9222" stroke="#E2F462" strokeWidth="4" strokeLinecap="round" />
                <path d="M18.8573 56.9434C19.7734 45.2998 13.0024 20.9278 6.37004 20.0914" stroke="#E2F462" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
