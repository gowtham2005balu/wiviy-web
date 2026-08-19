import React from 'react';

export default function Page2Journey() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      desc: "Show your authentic self. Add photos, share your interests, and let your personality shine.",
      img: "/assets/page-2/Container-2.png",
      align: "right", // Content on right, image on left
      maxW: "max-w-[607px]",
      textMaxW: "max-w-[331px]",
      numberSize: "text-[110.4px] leading-[110px]",
      titleSize: "text-[44.2px] leading-[46px] tracking-[-0.44px]",
      descSize: "text-[18.4px] leading-[29px]"
    },
    {
      number: "02",
      title: "Discover People",
      desc: "Browse meaningful matches curated just for you. Our algorithm understands what makes you, you.",
      img: "/assets/page-2/ChatGPT Image Jul 14, 2026, 03_55_32 PM 1.png",
      align: "left", // Content on left, image on right
      maxW: "max-w-[609px]",
      textMaxW: "max-w-[354px]",
      numberSize: "text-[110.4px] leading-[110px]",
      titleSize: "text-[44.2px] leading-[46px] tracking-[-0.44px]",
      descSize: "text-[18.4px] leading-[29px]"
    },
    {
      number: "03",
      title: "Start a Conversation",
      desc: "Break the ice with smart prompts and shared interests. Real conversations lead to real connections.",
      img: "/assets/page-2/Container-3.png",
      align: "right", // Content on right, image on left
      maxW: "max-w-[587px]",
      textMaxW: "max-w-[357px]",
      numberSize: "text-[110.4px] leading-[110px]",
      titleSize: "text-[44.2px] leading-[46px] tracking-[-0.44px]",
      descSize: "text-[18.4px] leading-[29px]"
    },
    {
      number: "04",
      title: "Meet in Real Life",
      desc: "When the connection feels right, take it offline. MELO helps you plan that perfect first meetup.",
      img: "/assets/page-2/Untitled - July 14, 2026 at 17.20.36 1.png",
      align: "left", // Content on left, image on right
      maxW: "max-w-[791px]",
      textMaxW: "max-w-[386px]",
      numberSize: "text-[120px] leading-[120px]",
      titleSize: "text-[47.8px] leading-[50px] tracking-[-0.48px]",
      descSize: "text-[20px] leading-[32px]"
    }
  ];

  return (
    <section id="how-it-works" className="relative w-full bg-gradient-to-b from-white via-white via-[80%] to-[#EFFF7D] py-28 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden select-none font-sans border-t border-zinc-100 flex flex-col items-center">
      <div className="max-w-[1320px] mx-auto w-full flex flex-col items-center relative">

        {/* Section Header */}
        <div className="text-center mb-28 max-w-2xl flex flex-col items-center">
          {/* Category tag with thick neon color */}
          <span className="text-[#8A9800] text-sm font-bold tracking-[1.56px] uppercase mb-4 block leading-none select-none font-mono">
            HOW IT WORKS
          </span>
          <h2 className="font-sans text-[48px] sm:text-[68px] lg:text-[80px] font-black text-[#111111] leading-tight tracking-[-1.6px] mb-6">
            Your Journey<br />
            Starts Here
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative w-full flex flex-col items-center">

          {/* Vertical central connector line for desktop */}
          {/* Stops at Step 3 */}
          <div className="absolute left-[50%] top-[-45px] bottom-[580px] w-[3px] bg-[#DFFF00] -translate-x-1/2 hidden lg:block z-0" />

          {/* Steps wrapper */}
          <div className="w-full flex flex-col gap-24 lg:gap-[195px] mb-16 relative z-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`flex flex-col lg:flex-row items-center w-full justify-between gap-12 lg:gap-0 relative ${step.align === 'left' ? 'lg:flex-row-reverse' : ''
                  }`}
              >

                {/* Image Side (Half Width) */}
                <div className={`w-full lg:w-1/2 flex items-center ${step.align === 'right' ? 'lg:justify-end lg:pr-[30px]' : 'lg:justify-start lg:pl-[30px]'
                  }`}>
                  <div className={`relative w-full ${step.maxW} transition-transform duration-300 hover:scale-[1.01]`}>
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-auto mix-blend-multiply"
                    />
                  </div>
                </div>

                {/* Text Content Side (Half Width, symmetrically aligned near center line) */}
                <div className={`w-full lg:w-1/2 flex flex-col items-center ${step.align === 'right' ? 'lg:items-start lg:justify-start lg:pl-[30px]' : 'lg:items-end lg:justify-end lg:pr-[30px]'
                  }`}>
                  <div className={`flex flex-col items-center lg:items-start text-center lg:text-left w-full ${step.textMaxW}`}>
                    {/* Faint Space Grotesk number */}
                    <span
                      className="font-space font-bold text-[110.4px] leading-[110px] text-[#111111] opacity-[0.06] select-none flex items-center mb-[-45px] relative z-0"
                    >
                      {step.number}
                    </span>
                    {/* Heading 3 Serif */}
                    <h3 className={`font-serif font-bold ${step.titleSize} text-[#111111] mb-4 relative z-10`}>
                      {step.title}
                    </h3>
                    {/* Description Paragraph */}
                    <p className={`text-[#666666] ${step.descSize} font-normal font-sans`}>
                      {step.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom CTA Card overlapping the bottom of Step 4 */}
          <div className="w-full max-w-[1100px] bg-white rounded-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-zinc-100 p-8 sm:p-10 md:p-12 lg:-mt-[90px] flex flex-col md:flex-row items-center justify-between gap-8 relative z-20">
            {/* Top Pink Line Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-[#FFC0D3] rounded-full" />

            {/* Hand-drawn sketchy leaf outline in bottom-left */}
            <svg
              viewBox="0 0 120 120"
              fill="none"
              stroke="#E2E2E2"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-[-24px] bottom-[-24px] w-[130px] h-[130px] pointer-events-none select-none opacity-80"
            >
              <path d="M 25 95 C 20 70, 35 40, 65 30 C 95 20, 100 45, 95 70 C 90 90, 60 100, 25 95 Z" />
              <path d="M 25 95 C 40 80, 55 65, 65 30" />
              <path d="M 40 80 Q 48 74, 55 75" />
              <path d="M 50 70 Q 60 63, 68 65" />
              <path d="M 60 60 Q 68 53, 75 55" />
            </svg>

            {/* Left Content */}
            <div className="text-center md:text-left flex flex-col gap-2 relative z-10 pl-2">
              <h3 className="font-serif text-[28px] sm:text-[34px] font-black text-[#111111] leading-tight">
                Ready to find your person?
              </h3>
              <p className="text-zinc-550 text-sm sm:text-base font-medium">
                Join Melo and start your journey today.
              </p>
            </div>

            {/* Right Button with Chartreuse Yellow-Green shadow glow */}
            <button
              type="button"
              className="bg-[#DFFF00] text-zinc-950 font-bold px-8 py-4.5 rounded-full hover:bg-[#cbe600] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 text-base shrink-0 font-sans relative z-10"
              style={{ boxShadow: '0 8px 20px rgba(223, 255, 0, 0.4)' }}
            >
              <span>Download Melo</span>
              <span className="text-lg font-bold">➔</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
