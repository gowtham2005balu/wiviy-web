import React from 'react';

export default function Page3Journey() {
  const steps = [
    {
      stepLabel: "Step 01",
      title: "Create Your Profile",
      desc: "Share your authentic self. Add photos, write about your passions, and set your intentions for what you are looking for.",
      img: "/assets/page-3/Mask Group-2.png",
      align: "left", // Content on left, image on right
      number: "01",
      rotate: "rotate-[-3deg]",
      accentBg: "bg-[#DFFF00]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-zinc-950">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <line x1="20" y1="8" x2="20" y2="14" />
          <line x1="17" y1="11" x2="23" y2="11" />
        </svg>
      )
    },
    {
      stepLabel: "Step 02",
      title: "Discover Like-minded People",
      desc: "Our algorithm curates meaningful matches based on shared values, interests, and lifestyle compatibility.",
      img: "/assets/page-3/Mask Group-1.png",
      align: "right", // Content on right, image on left
      number: "02",
      rotate: "rotate-[-3deg]",
      accentBg: "bg-[#FFEAEF]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-zinc-950">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      )
    },
    {
      stepLabel: "Step 03",
      title: "Start Meaningful Conversations",
      desc: "Break the ice with thoughtful prompts and shared experiences. No more awkward 'hey' messages.",
      img: "/assets/page-3/Container.png",
      align: "left", // Content on left, image on right
      number: "03",
      rotate: "rotate-[-3deg]",
      accentBg: "bg-[#DFFF00]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-zinc-950">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )
    },
    {
      stepLabel: "Step 04",
      title: "Meet Naturally",
      desc: "When the connection feels right, take it offline. Discover local events and date ideas curated just for you.",
      img: "/assets/page-2/couple_cafe_meetup.png",
      align: "right", // Content on right, image on left
      number: "04",
      rotate: "rotate-[-3deg]",
      accentBg: "bg-[#FFEAEF]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-zinc-950">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="relative w-full bg-gradient-to-b from-white via-white via-[70%] to-[#F1FF8E] py-28 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden select-none font-sans flex flex-col items-center">
      <div className="max-w-[1300px] w-full flex flex-col items-center relative">

        {/* Category Label */}
        <span className="text-[#8A9800] text-[12px] font-extrabold tracking-[2px] uppercase mb-4 leading-none font-mono">
          THE PROCESS
        </span>

        {/* Heading with Elegant Serif Italic "Works" */}
        <h2 className="font-sans text-5xl sm:text-7xl font-black text-[#111111] leading-[1.05] tracking-[-1.8px] mb-28 text-center max-w-[800px] flex flex-col items-center">
          <span>How It</span>
          <span className="font-serif italic font-normal text-[#111111] mt-2 normal-case">Works</span>
        </h2>

        {/* Timeline wrapper */}
        <div className="relative w-full flex flex-col items-center">

          {/* Vertical central connector line for desktop */}
          <div className="absolute left-[50%] top-[40px] bottom-[140px] w-[3px] bg-[#DFFF00] -translate-x-1/2 hidden lg:block z-0" />

          {/* Steps list */}
          <div className="w-full flex flex-col gap-28 lg:gap-[200px] relative z-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`flex flex-col lg:flex-row items-center w-full justify-between gap-12 lg:gap-0 relative ${step.align === 'left' ? 'lg:flex-row-reverse' : ''
                  }`}
              >

                {/* Image Side (Half Width) */}
                <div className={`w-full lg:w-1/2 flex items-center ${step.align === 'left' ? 'lg:justify-start lg:pl-16' : 'lg:justify-end lg:pr-16'
                  }`}>
                  {/* Rotating Card Container */}
                  <div className={`relative w-[320px] h-[320px] sm:w-[350px] sm:h-[350px] rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.07)] transition-transform duration-300 hover:scale-[1.02] ${step.rotate}`}>
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Bottom Inline Number Badge */}
                    <div className={`absolute bottom-4 left-6 h-8 px-4 rounded-full flex items-center justify-center font-bold text-[13px] text-[#111111] ${step.accentBg}`}>
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Center marker dot on desktop line */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#DFFF00] border-[4px] border-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] flex items-center justify-center hidden lg:flex z-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5E6900]" />
                </div>

                {/* Text Content Side (Half Width, symmetrically aligned near center line) */}
                <div className={`w-full lg:w-1/2 flex flex-col items-center ${step.align === 'left' ? 'lg:items-start lg:justify-start lg:pl-16' : 'lg:items-end lg:justify-end lg:pr-16'
                  }`}>
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-[440px]">
                    {/* Step Icon Box */}
                    <div className={`w-12 h-12 rounded-[12px] flex items-center justify-center mb-4 ${step.accentBg} shadow-sm`}>
                      {step.icon}
                    </div>

                    {/* Step Label Mono */}
                    <span className="font-mono font-bold text-[13px] text-[#8E8E8E] mb-2.5 block leading-none select-none tracking-wide uppercase">
                      {step.stepLabel}
                    </span>

                    {/* Heading 3 */}
                    <h3 className="font-sans font-extrabold text-[32px] sm:text-[36px] text-[#111111] leading-tight tracking-[-1px] mb-4">
                      {step.title}
                    </h3>

                    {/* Description Paragraph */}
                    <p className="text-[#6E6E6E] text-[15px] sm:text-[16px] leading-[26px] font-normal font-sans">
                      {step.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
