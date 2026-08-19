import React from 'react';

// Hand-Drawn Heart Outline Component
function HandDrawnHeart({ className, stroke = "currentColor", strokeWidth = 4 }) {
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

// Hand-Drawn Organic Heart/Flower Outline (Highlight 26)
function OrganicLeaf({ className }) {
  return (
    <svg 
      viewBox="0 0 243 165" 
      fill="none" 
      stroke="#111111" 
      strokeWidth="8" 
      strokeLinecap="round" 
      className={className}
    >
      <path d="M58.7236 37.9098C52.4121 47.3321 -48.9825 -43.8625 -63.2282 4.79319C-76.7726 51.0536 46.4541 56.2265 40.4426 65.2009C34.4311 74.1753 -12.6209 133.527 12.0032 156.071C39.5039 181.249 77.4035 87.597 82.9717 87.7803C88.5398 87.9637 111.801 153.83 140.731 141.416C170.702 128.556 135.61 62.9917 138.943 58.0171C142.275 53.0426 248.843 87.1809 238.166 49.7539C229.488 19.3369 157.753 29.936 163.13 21.9091C168.507 13.8822 213.153 -42.9666 190.086 -72.1265C161.895 -107.763 118.33 12.7734 107.024 14.2179C95.7186 15.6625 75.9753 -78.7474 41.2516 -59.7316C6.9663 -40.9559 65.0352 28.4876 58.7236 37.9098Z" />
    </svg>
  );
}

// Hand-Drawn Asterisk Star (Highlight 27)
function HandDrawnAsterisk({ className }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="#131313" strokeWidth="8" className={className}>
      <path d="M 50 10 L 50 90" strokeLinecap="round" />
      <path d="M 10 50 L 90 50" strokeLinecap="round" />
      <path d="M 20 20 L 80 80" strokeLinecap="round" />
      <path d="M 80 20 L 20 80" strokeLinecap="round" />
    </svg>
  );
}

export default function MatchingEngine() {
  const pills = [
    {
      label: "Personality",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[17px] h-[17px]">
          <circle cx="12" cy="12" r="10" />
          <circle cx="9" cy="9" r="1" fill="currentColor" />
          <circle cx="15" cy="9" r="1" fill="currentColor" />
          <path d="M 8 15 Q 12 19 16 15" strokeLinecap="round" />
        </svg>
      )
    },
    {
      label: "Interests",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[17px] h-[17px]">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )
    },
    {
      label: "Lifestyle",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[17px] h-[17px]">
          <circle cx="12" cy="12" r="10" />
          <polygon points="12,6 15,12 12,18 9,12" />
        </svg>
      )
    },
    {
      label: "Values",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[17px] h-[17px]">
          <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
        </svg>
      )
    },
    {
      label: "Goals",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[17px] h-[17px]">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-12 px-6 sm:px-12 md:px-[82px] md:pr-[89px] select-none">
      
      {/* Absolute Coordinate container for Desktop (scaled to 1749px wide on 1920px width) */}
      <div className="relative w-full max-w-[1749px] h-[528px] mx-auto bg-[#F1FFAC] rounded-[36px] overflow-hidden hidden xl:block shadow-sm">
        
        {/* Highlight 26: Organic Heart/Flower Outline decoration Top-Left */}
        <OrganicLeaf className="absolute left-0 top-0 w-[243px] h-[165px] opacity-90 pointer-events-none z-10" />

        {/* Highlight 27: Hand-Drawn Asterisk decoration Top-Right */}
        <HandDrawnAsterisk className="absolute left-[calc(50%+796px)] top-[-33.66px] w-[153.49px] h-[154.37px] text-[#131313] rotate-[17.29deg] opacity-95 pointer-events-none z-10" />

        {/* Highlight 28: Heart Outline below Heading title */}
        <HandDrawnHeart className="absolute left-[293px] top-[236px] w-[40px] h-[35.11px] text-[#242424] rotate-[-5.03deg]" />

        {/* Highlight 28 (Heart top-middle-left) */}
        <HandDrawnHeart className="absolute left-[389px] top-[29px] w-[40px] h-[35.11px] text-[#242424] rotate-[-5.03deg]" />

        {/* Highlight 10 (Heart bottom-left) */}
        <HandDrawnHeart className="absolute left-[37px] top-[449px] w-[40px] h-[35.11px] text-[#242424] rotate-[-5.03deg]" />

        {/* Highlight 11 (Heart bottom-middle-left) */}
        <HandDrawnHeart className="absolute left-[calc(50%+62px)] top-[473px] w-[40px] h-[35.11px] text-[#242424] rotate-[20deg]" />

        {/* Highlight 29 (Heart top-middle-right) */}
        <HandDrawnHeart className="absolute left-[calc(50%+264px)] top-[31px] w-[40px] h-[35.11px] text-[#242424] rotate-[20deg]" />

        {/* Highlight 29 (Heart middle-right) */}
        <HandDrawnHeart className="absolute left-[calc(50%+466px)] top-[205px] w-[40px] h-[35.11px] text-[#242424] rotate-[20deg]" />

        {/* Highlight 30 (Heart bottom-right) */}
        <HandDrawnHeart className="absolute left-[calc(50%+843px)] top-[459px] w-[40px] h-[35.11px] text-[#242424] rotate-[20deg]" />

        {/* Left Side Content Block */}
        <div className="absolute left-[56px] top-[155.94px] w-[388px] text-left flex flex-col items-start">
          {/* SMART MATCHING ENGINE Subtitle */}
          <span className="text-[#9CAE1E] font-bold text-[13px] leading-[17px] tracking-[1.82px] uppercase font-sans mb-3">
            Smart Matching Engine
          </span>

          {/* Heading 2 */}
          <h2 className="font-serif text-[38px] leading-[44px] font-bold text-[#111111] tracking-tight mb-6">
            We match what<br />
            matters.
          </h2>

          {/* Description */}
          <p className="text-[#454545] font-sans font-normal text-[15.5px] leading-[26px] max-w-[317px]">
            Our smart algorithm looks beyond photos to find people who truly match your <span className="font-bold">personality, interests</span> and <span className="font-bold">intentions.</span>
          </p>
        </div>

        {/* SVG Connector Lines (Dashed, Right-Aligned dynamically) */}
        <svg className="absolute left-[calc(50%+52px)] top-[64px] w-[560px] h-[400px] pointer-events-none overflow-visible">
          {/* Dashed Line 1 (Personality) */}
          <path d="M 0,26 C 50,26 60,200 101,200" stroke="#111111" strokeWidth="3" strokeDasharray="5,6" fill="none" />
          
          {/* Dashed Line 2 (Interests) */}
          <path d="M 0,113 C 50,113 60,200 101,200" stroke="#111111" strokeWidth="3" strokeDasharray="5,6" fill="none" />
          
          {/* Dashed Line 3 (Lifestyle) */}
          <path d="M 0,200 L 101,200" stroke="#111111" strokeWidth="3" strokeDasharray="5,6" fill="none" />
          
          {/* Dashed Line 4 (Values) */}
          <path d="M 0,287 C 50,287 60,200 101,200" stroke="#111111" strokeWidth="3" strokeDasharray="5,6" fill="none" />
          
          {/* Dashed Line 5 (Goals) */}
          <path d="M 0,374 C 50,374 60,200 101,200" stroke="#111111" strokeWidth="3" strokeDasharray="5,6" fill="none" />

          {/* Dashed Straight Line from Circle center to Card right */}
          <path d="M 269,200 L 370,200" stroke="#111111" strokeWidth="3" strokeDasharray="5,6" fill="none" />
        </svg>

        {/* 5 Left Pills list (Right-Aligned) */}
        {pills.map((pill, i) => (
          <div
            key={i}
            className="absolute w-[220px] h-[52px] bg-white rounded-[30px] shadow-[0_4px_14px_rgba(17,17,17,0.05)] flex items-center px-[22px] gap-3 left-[calc(50%-168px)]"
            style={{ top: `${64.47 + i * 87}px` }}
          >
            <div className="text-[#111111] shrink-0 flex items-center justify-center">
              {pill.icon}
            </div>
            <span className="font-sans font-semibold text-[14.5px] text-[#111111] leading-[19px]">
              {pill.label}
            </span>
          </div>
        ))}

        {/* Center Node: AI Compatibility Engine (Right-Aligned) */}
        <div className="absolute left-[calc(50%+153px)] top-[180.47px] w-[168px] h-[168px] bg-[#F1F8B7] border-[3px] border-[#D3EF08] rounded-full shadow-sm">
          {/* Sparkle 1 (Top-Right, 15px) */}
          <div className="absolute right-[29px] top-[21px] w-[15px] h-[15px] text-[#111111]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
          
          {/* Sparkle 2 (Bottom-Left, 11px) */}
          <div className="absolute left-[25px] bottom-[37px] w-[11px] h-[11px] text-[#111111]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>

          {/* Sparkle 3 (Middle-Left, 9px) */}
          <div className="absolute left-[33px] top-[43px] w-[9px] h-[9px] text-[#111111]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>

          {/* Brain / Two Lobes Icon - Centered via precise absolute metrics */}
          <svg viewBox="0 0 46 40" fill="none" className="absolute left-[calc(50%-23px)] top-[calc(50%-20px-23.22px)] w-[46px] h-[40px] text-[#111111]">
            <path d="M 21,5 C 17,5 13,8 13,12 C 9,12 5,16 5,20 C 5,24 9,28 13,28 C 13,32 17,35 21,35 Z" fill="currentColor" />
            <path d="M 25,5 C 29,5 33,8 33,12 C 37,12 41,16 41,20 C 41,24 37,28 33,28 C 33,32 29,35 25,35 Z" fill="currentColor" />
          </svg>

          {/* Compatibility Engine Text block - Centered via precise absolute metrics */}
          <span className="absolute left-[calc(50%-53.8px)] top-[calc(50%-17.6px+24.39px)] w-[107.6px] h-[35.22px] font-sans font-bold text-[13.5px] leading-[18px] text-[#111111] text-center flex items-center justify-center">
            AI Compatibility Engine
          </span>
        </div>

        {/* Right Output Node Card (Right-Aligned) */}
        <div className="absolute left-[calc(50%+422px)] top-[146.72px] w-[190px] h-[235.5px] bg-white shadow-[0_8px_24px_rgba(17,17,17,0.06)] rounded-[22px] border border-[#F5F5F5]">
          {/* Header icon green circle */}
          <div className="absolute left-[24px] top-[26px] w-[46px] h-[46px] bg-[#EEFCA6] rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.2" className="w-5 h-5">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>

          {/* Heading 3 */}
          <h3 className="absolute left-[24px] top-[89px] h-[47.75px] font-serif font-bold text-[19px] leading-[24px] text-[#111111] flex items-center">
            Meaningful<br />
            Matches
          </h3>

          {/* Paragraph */}
          <p className="absolute left-[24px] top-[148.5px] h-[36.5px] font-sans text-[13px] leading-[20px] text-[#6A6A6A] font-normal flex items-center">
            Real people.<br />
            Real connections.
          </p>

          {/* Solid Lime Highlighter Line at Bottom */}
          <div className="absolute left-[24px] top-[204.28px] w-[142px] h-[3px] bg-[#E8FF2E] rounded-[2px]" />
        </div>

      </div>

      {/* Responsive layout for mobile / tablet screens (<1280px) */}
      <div className="xl:hidden w-full max-w-2xl mx-auto bg-[#F1FFAC] rounded-[36px] p-8 md:p-12 relative overflow-hidden shadow-sm">
        
        {/* Organic Heart/Flower Outline decoration */}
        <OrganicLeaf className="absolute left-0 top-0 w-[160px] h-[109px] opacity-20 pointer-events-none" />

        {/* Text Area */}
        <div className="text-center flex flex-col items-center mb-10">
          <span className="text-[#9CAE1E] font-bold text-[12px] tracking-[1.5px] uppercase font-sans mb-2">
            Smart Matching Engine
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] tracking-tight mb-4">
            We match what matters.
          </h2>
          <p className="text-[#454545] font-sans font-normal text-sm sm:text-base leading-relaxed max-w-md">
            Our smart algorithm looks beyond photos to find people who truly match your <span className="font-bold">personality, interests</span> and <span className="font-bold">intentions.</span>
          </p>
        </div>

        {/* Diagram Flow stacked vertically */}
        <div className="flex flex-col items-center gap-8 relative">
          
          {/* 5 Left Pills list */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-md">
            {pills.map((pill, i) => (
              <div
                key={i}
                className="bg-white rounded-full shadow-[0_2px_8px_rgba(17,17,17,0.05)] flex items-center px-4 py-2 gap-2"
              >
                <div className="text-[#111111] shrink-0">
                  {pill.icon}
                </div>
                <span className="font-sans font-semibold text-xs sm:text-sm text-[#111111]">
                  {pill.label}
                </span>
              </div>
            ))}
          </div>

          {/* Simple Connector Arrow (Vertical) */}
          <div className="w-[2px] h-8 border-l-2 border-dashed border-[#111111]" />

          {/* Center Node: AI Compatibility Engine */}
          <div className="w-[150px] h-[150px] bg-[#F1F8B7] border-[3px] border-[#D3EF08] rounded-full flex flex-col items-center justify-center p-4 relative">
            <svg viewBox="0 0 46 40" fill="none" className="w-[36px] h-[30px] text-[#111111] mb-2">
              <path d="M 21,5 C 17,5 13,8 13,12 C 9,12 5,16 5,20 C 5,24 9,28 13,28 C 13,32 17,35 21,35 Z" fill="currentColor" />
              <path d="M 25,5 C 29,5 33,8 33,12 C 37,12 41,16 41,20 C 41,24 37,28 33,28 C 33,32 29,35 25,35 Z" fill="currentColor" />
            </svg>
            <span className="font-sans font-bold text-xs leading-tight text-[#111111] text-center max-w-[100px]">
              AI Compatibility Engine
            </span>
          </div>

          {/* Simple Connector Arrow (Vertical) */}
          <div className="w-[2px] h-8 border-l-2 border-dashed border-[#111111]" />

          {/* Right Output Node Card */}
          <div className="w-[220px] bg-white shadow-lg rounded-[22px] p-6 text-left flex flex-col items-start">
            <div className="w-10 h-10 bg-[#EEFCA6] rounded-full flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2.2" className="w-5 h-5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-lg text-[#111111] mb-1">
              Meaningful Matches
            </h3>
            <p className="font-sans text-xs text-[#6A6A6A] mb-4">
              Real people. Real connections.
            </p>
            <div className="w-24 h-[3px] bg-[#E8FF2E] rounded-[2px]" />
          </div>

        </div>

      </div>

    </section>
  );
}
