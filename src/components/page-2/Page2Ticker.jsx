import React from 'react';

export default function Page2Ticker() {
  const tickerText = "CHEMISTRY ★ CONNECTIONS ★ LOVE ★ REAL PEOPLE ★ GOOD VIBES ★ VERIFIED MEMBERS ★ ";
  const repeats = Array(6).fill(tickerText).join("");

  return (
    <div className="w-full bg-[#DFFF00] h-[120px] border-y-[1.5px] border-zinc-950/80 overflow-hidden relative select-none z-10 flex items-center">
      {/* Infinite scrolling wrapper */}
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        <span className="font-space text-[56px] font-bold uppercase text-[#111111] tracking-[2.24px] leading-[62px] pr-4">
          {repeats}
        </span>
      </div>
      
      {/* Inline style block for marquee animation keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
