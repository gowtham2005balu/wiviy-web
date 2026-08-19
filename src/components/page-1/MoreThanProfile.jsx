import React from 'react';

export default function MoreThanProfile() {
  const categories = [
    {
      title: "What's your vibe?",
      desc: "Introvert or extrovert?",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-zinc-950">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    },
    {
      title: "Coffee dates?",
      desc: "Your picks help us match better.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-zinc-950">
          <path d="M18 8h1a3 3 0 0 1 0 6h-1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="6" y1="2" x2="6" y2="5" strokeLinecap="round" />
          <line x1="10" y1="2" x2="10" y2="5" strokeLinecap="round" />
          <line x1="14" y1="2" x2="14" y2="5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Looking for?",
      desc: "Serious, casual or in between?",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-zinc-950">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Lifestyle & habits",
      desc: "Fitness, diet, sleep & more.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-zinc-950">
          <path d="M6.5 6.5h11M6.5 17.5h11M18 4v16M6 4v16M2 8v8M22 8v8M6 12h12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Places you love",
      desc: "Share your favorite spots.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-zinc-950">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    },
    {
      title: "Your values & goals",
      desc: "What matters most to you?",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-zinc-950">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 13.5l-.8-.8c-1.8-1.7-3-2.9-3-4.4 0-1.2.9-2.2 2.2-2.2.7 0 1.4.3 1.8.9.4-.6 1.1-.9 1.8-.9 1.3 0 2.2 1 2.2 2.2 0 1.5-1.2 2.7-3 4.4l-.8.8z" transform="scale(0.55) translate(10, 8)" fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-[1500px] mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[#a3a3a3] text-[14px] font-bold tracking-[2px] uppercase mb-4">
            HOW WIVIY GETS TO KNOW YOU
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-[68px] font-black text-[#111111] tracking-tight leading-[1.05] mb-6">
            More than just{' '}
            <span className="relative inline-block px-3">
              <span className="absolute inset-0 bg-[#d2ff00] -rotate-[0.5deg] rounded" />
              <span className="relative z-10">a profile</span>
            </span>
          </h2>
          <p className="text-zinc-500 text-lg sm:text-xl max-w-2xl leading-relaxed">
            We ask thoughtful questions to understand your personality, lifestyle and what truly matters to you.
          </p>
        </div>

        {/* Categories Grid (Question Cards Grid) */}
        <div className="grid grid-cols-3 grid-rows-2 gap-6 w-full max-w-[1398px]">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#F5F5F5] rounded-[24px] p-8 flex flex-col items-center text-center shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0px_10px_30px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 h-[298px] justify-between"
            >
              {/* Rounded Square Icon Box */}
              <div className="w-[48px] h-[48px] rounded-[16px] bg-[#F2F7B3] flex items-center justify-center">
                {cat.icon}
              </div>

              {/* Title (Heading 3) */}
              <div className="flex-grow flex items-center justify-center my-3">
                <h3 className="font-serif text-[22px] font-bold text-[#111111] leading-[24px] max-w-[165px]">
                  {cat.title}
                </h3>
              </div>

              {/* Description */}
              <div className="h-[40px] flex items-center justify-center">
                <p className="text-[#A3A3A3] font-sans font-normal text-[16px] leading-[20px] max-w-[134px]">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
