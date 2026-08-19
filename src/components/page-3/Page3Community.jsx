import React from 'react';
import Page3Ticker from './Page3Ticker';

export default function Page3Community() {
  const alerts = [
    {
      name: "James, 29",
      action: "verified their profile",
      time: "12 min ago",
      img: "/assets/page-2/Community member smiling-2.png",
      location: "San Francisco",
      style: "left-[1%] top-[34%] xl:left-[3%] xl:top-[33%] rotate-[-6deg] hidden xl:flex z-30"
    },
    {
      name: "Sarah, 26",
      action: "just matched with James",
      time: "2 min ago",
      img: "/assets/page-2/Community member smiling-1.png",
      location: "New York",
      style: "left-[12%] top-[14%] xl:left-[16%] xl:top-[12%] rotate-[-5deg] hidden lg:flex z-30"
    },
    {
      name: "Emma, 24",
      action: "is nearby in",
      time: "5 min ago",
      img: "/assets/page-2/Community member smiling-3.png",
      location: "Brooklyn",
      style: "left-[44%] top-[32%] lg:left-[48%] lg:top-[32%] rotate-[-4deg] hidden lg:flex z-30"
    },
    {
      name: "James, 29",
      action: "verified their profile",
      time: "12 min ago",
      img: "/assets/page-2/Community member smiling-2.png",
      location: "San Francisco",
      style: "right-[6%] top-[12%] xl:right-[10%] xl:top-[10%] rotate-[5deg] hidden lg:flex z-30"
    },
    {
      name: "Alex, 31",
      action: "started a conversation with Mia",
      time: "8 min ago",
      img: "/assets/page-2/Community member smiling-4.png",
      location: "Los Angeles",
      style: "left-[10%] bottom-[24%] xl:left-[14%] xl:bottom-[28%] rotate-[-4deg] hidden xl:flex z-30"
    },
    {
      name: "Sarah, 26",
      action: "just matched with James",
      time: "2 min ago",
      img: "/assets/page-2/Community member smiling-1.png",
      location: "New York",
      style: "right-[10%] bottom-[16%] xl:right-[14%] xl:bottom-[20%] rotate-[4deg] hidden lg:flex z-30"
    }
  ];

  const hearts = [
    { style: "left-[12%] top-[45%] rotate-[-12deg] w-4 h-4 text-[#5E6900]/15" },
    { style: "left-[24%] top-[65%] rotate-[15deg] w-3 h-3 text-[#5E6900]/15" },
    { style: "left-[46%] top-[53%] rotate-[-5deg] w-3 h-3 text-[#5E6900]/15" },
    { style: "right-[20%] top-[42%] rotate-[20deg] w-4 h-4 text-[#5E6900]/15" },
    { style: "right-[12%] top-[68%] rotate-[-10deg] w-3.5 h-3.5 text-[#5E6900]/15" }
  ];

  return (
    <section className="relative w-full bg-[#F1FF8E] pt-24 overflow-hidden select-none font-sans flex flex-col items-center">
      
      {/* Decorative background hearts */}
      {hearts.map((heart, idx) => (
        <svg
          key={idx}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`absolute pointer-events-none select-none ${heart.style}`}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ))}

      {/* Subtle Glow centered behind the couple */}
      <div 
        className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.55) 0%, rgba(241, 255, 142, 0) 75%)',
          filter: 'blur(40px)'
        }}
      />

      <div className="max-w-[1300px] w-full flex flex-col items-center relative z-10 px-6 sm:px-12 md:px-16 lg:px-24">

        {/* Category Label */}
        <span className="text-[#5E6900] text-[11px] sm:text-[12px] font-extrabold tracking-[2px] uppercase mb-4 leading-none font-mono">
          LIVE FEED
        </span>

        {/* Heading */}
        <h2 className="font-serif text-[42px] sm:text-[60px] md:text-[72px] font-extrabold text-[#111111] leading-[1.05] tracking-[-1.5px] mb-8 text-center max-w-[800px]">
          Community<br />
          in Motion
        </h2>

        {/* Central Couple & Phone Mockup Illustration */}
        <div className="relative w-full max-w-[820px] z-10 mt-6 -mb-8 sm:-mb-12 md:-mb-20">
          <img
            src="/assets/page-3/Untitled - July 14, 2026 at 18.05.52 1.png"
            alt="Community in Motion illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Floating live feed match notification cards surrounding central mockup on desktop */}
        {alerts.map((alert, idx) => (
          <div
            key={idx}
            className={`absolute flex flex-col items-start ${alert.style}`}
          >
            {/* White Card Box */}
            <div className="w-[245px] bg-white border border-[#EBEBEB] p-4 rounded-[20px] shadow-[0_12px_24px_rgba(0,0,0,0.04)] flex gap-3.5 items-center hover:scale-[1.02] transition-transform duration-300 pointer-events-auto">
              {/* User Profile avatar with green online badge */}
              <div className="relative w-11 h-11 shrink-0">
                <img src={alert.img} alt={alert.name} className="w-full h-full object-cover rounded-full" />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#22C55E] border-2 border-white" />
              </div>

              {/* Notification Text content */}
              <div className="flex flex-col flex-grow text-left">
                <div className="text-[13px] font-bold text-[#111111] leading-none mb-1">
                  {alert.name}
                </div>
                <div className="text-[10px] font-medium text-[#6E6E6E] leading-snug mb-2">
                  {alert.action}
                </div>
                <div className="flex items-center justify-between w-full mt-0.5">
                  {/* Location with Pin Icon */}
                  <div className="flex items-center gap-1 text-[9px] font-semibold text-[#8E8E8E]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{alert.location}</span>
                  </div>
                  {/* Like Button */}
                  <div className="flex items-center gap-1 text-[9px] font-semibold text-[#8E8E8E] cursor-pointer hover:text-red-500 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    <span>Like</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Time Ago Text Outside Card */}
            <span className="text-[10px] font-bold text-[#5E6900]/80 mt-2 ml-3.5">
              {alert.time}
            </span>
          </div>
        ))}

        {/* Mobile Fallback: Vertical alert cards list */}
        <div className="flex lg:hidden flex-col gap-4 w-full mt-8 px-4 z-20">
          {alerts.slice(0, 3).map((alert, idx) => (
            <div
              key={idx}
              className="w-full bg-white border border-[#EBEBEB] p-4 rounded-[20px] shadow-[0_8px_20px_rgba(0,0,0,0.03)] flex gap-4 items-center justify-between"
            >
              <div className="flex gap-3.5 items-center">
                {/* Avatar */}
                <div className="relative w-11 h-11 shrink-0">
                  <img src={alert.img} alt={alert.name} className="w-full h-full object-cover rounded-full" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#22C55E] border-2 border-white" />
                </div>
                {/* Content */}
                <div className="flex flex-col text-left">
                  <div className="text-[13px] font-bold text-[#111111] leading-none mb-1">
                    {alert.name}
                  </div>
                  <div className="text-[10px] font-medium text-[#6E6E6E] leading-snug">
                    {alert.action}
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-[9px] font-semibold text-[#8E8E8E]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{alert.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end shrink-0 gap-1.5">
                <span className="text-[9px] font-bold text-[#5E6900]/80">{alert.time}</span>
                <div className="flex items-center gap-1 text-[9px] font-semibold text-[#8E8E8E] bg-[#F9F9F9] px-2.5 py-1 rounded-full border border-[#ECECEC]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5 text-zinc-500">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  <span>Like</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Marquee ticker at the bottom */}
      <div className="w-full mt-12 z-20">
        <Page3Ticker />
      </div>

    </section>
  );
}

