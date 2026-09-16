import React from 'react';

export default function Page3Ticker() {
  const items = [
    "CHEMISTRY",
    "REAL PEOPLE",
    "GOOD VIBES",
    "CONNECTIONS",
    "LOVE",
    "VERIFIED MATCHES",
    "MEANINGFUL DATES",
    "GENUINE BONDS"
  ];

  const singlePass = items.flatMap((item, idx) => [
    <span key={`text-${idx}`} className="font-sans font-bold text-[24px] leading-[32px] tracking-[-0.6px] text-[#111111]">
      {item}
    </span>,
    <svg key={`star-${idx}`} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#111111] opacity-60">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  ]);

  return (
    <div className="w-full bg-[#DFFF00] h-[72px] overflow-hidden relative select-none z-10 flex items-center border-y border-zinc-950/5">
      {/* Infinite scrolling wrapper */}
      <div className="flex items-center gap-8 whitespace-nowrap animate-[marquee_45s_linear_infinite]">
        {/* Render 3 cycles to make scrolling perfectly seamless */}
        <div className="flex items-center gap-8 pr-8">
          {singlePass}
        </div>
        <div className="flex items-center gap-8 pr-8">
          {singlePass}
        </div>
        <div className="flex items-center gap-8 pr-8">
          {singlePass}
        </div>
      </div>
      
      {/* Inline style block for marquee animation keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
      `}</style>
    </div>
  );
}
