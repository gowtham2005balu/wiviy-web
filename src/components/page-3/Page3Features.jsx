import React from 'react';

export default function Page3Features() {
  const features = [
    {
      title: "Meaningful Matches",
      desc: "Our algorithm goes beyond surface-level swipes. We match you based on shared values, interests, and conversation compatibility.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#111111]">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      )
    },
    {
      title: "Safe Community",
      desc: "Every member is verified. Our AI moderation and human review team work around the clock to maintain a respectful environment.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#111111]">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: "Real Conversations",
      desc: "Icebreakers and thoughtful prompts help you skip the small talk and dive into what really matters.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#111111]">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )
    },
    {
      title: "Verified Profiles",
      desc: "Photo verification, identity checks, and social media linking ensure you are meeting real people.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#111111]">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full bg-[#FCF9F2] py-28 px-6 sm:px-12 md:px-16 lg:px-24 select-none font-sans flex flex-col items-center">
      <div className="max-w-[1300px] w-full flex flex-col items-center">

        {/* Category Label */}
        <span className="text-[#8A9800] text-[12px] font-extrabold tracking-[2px] uppercase mb-4 leading-none font-mono">
          WHY CHOOSE MELO
        </span>

        {/* Heading */}
        <h2 className="font-sans text-5xl sm:text-7xl font-black text-[#111111] leading-[1.05] tracking-tight mb-20 text-center max-w-[800px]">
          Feature Highlights
        </h2>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white border border-[#ECECEC] rounded-[24px] p-8 shadow-sm flex flex-col items-start transition-all duration-300 hover:shadow-md hover:border-[#DFFF00]/40 group relative overflow-hidden min-h-[250px] lg:h-[300px]"
            >
              {/* Highlight background on hover */}
              <div className="absolute inset-0 bg-[#DFFF00]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Icon Container - Circular */}
              <div className="w-14 h-14 bg-[#DFFF00]/10 rounded-full flex items-center justify-center mb-7 relative z-10 shrink-0">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-sans text-[20px] font-bold text-[#111111] leading-tight tracking-[-0.5px] mb-4 relative z-10">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#6E6E6E] text-[14px] leading-[23px] font-normal relative z-10 font-sans">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

