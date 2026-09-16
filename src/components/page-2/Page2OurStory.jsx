import React from 'react';

// Sketchy Heart component to match the hand-drawn hearts in the mockup
function SketchyHeart({ className }) {
  return (
    <svg
      viewBox="0 0 112 111"
      fill="none"
      stroke="#242424"
      strokeWidth="10"
      strokeLinecap="round"
      className={className}
    >
      <path d="M6.60535 51.5511C21.1637 26.2377 57.4557 57.9003 64.3747 58.6773C71.2938 59.4542 54.3755 6.36562 89.4763 5.01241C124.577 3.65921 97.0144 102.917 89.976 105.683C81.1778 109.14 -7.95303 76.8646 6.60535 51.5511Z" />
    </svg>
  );
}

export default function Page2OurStory() {
  const storyCards = [
    {
      id: "01",
      title: "Authentic Connections",
      desc: "Connect with genuine people who are looking for meaningful relationships—not casual interactions. Every profile is designed to encourage honesty, shared values, and real conversations that lead to lasting connections.",
      bg: "/assets/page-2/Mask Group-1.png"
    },
    {
      id: "02",
      title: "Safety First",
      desc: "Your privacy and security come first. With verified profiles, intelligent moderation, secure messaging, and community guidelines, Wiviy creates a trusted environment where you can connect with confidence.",
      bg: "/assets/page-2/Mask Group-2.png"
    },
    {
      id: "03",
      title: "Inclusive Community",
      desc: "Love has no boundaries. Wiviy welcomes people from diverse backgrounds, cultures, and lifestyles, creating a respectful and inclusive space where everyone can feel valued, accepted, and connected.",
      bg: "/assets/page-2/Container.png"
    },
    {
      id: "04",
      title: "Meaningful Conversations",
      desc: "Move beyond endless swiping with thoughtful prompts and shared interests designed to spark genuine conversations. Every interaction is an opportunity to build meaningful, lasting connections.",
      bg: "/assets/page-2/Container-1.png"
    }
  ];

  return (
    <section id="our-story" className="relative w-full bg-[#FCF9F2] py-28 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden select-none font-sans border-t border-zinc-100 flex flex-col items-center">

      {/* Floating Outline Hearts */}
      <SketchyHeart className="absolute left-[4%] top-[10%] w-[70px] h-[70px] -rotate-[15deg] opacity-90 hidden md:block" />
      <SketchyHeart className="absolute right-[4%] top-[14%] w-[75px] h-[75px] rotate-[20deg] opacity-90 hidden md:block" />
      <SketchyHeart className="absolute left-[3%] top-[55%] w-[68px] h-[68px] -rotate-[12deg] opacity-90 hidden md:block" />

      <div className="max-w-[1300px] mx-auto w-full flex flex-col items-center">

        {/* Header content */}
        <div className="text-center mb-24 max-w-4xl flex flex-col items-center">
          <span className="text-[#DFFF00] text-sm font-bold tracking-[2px] uppercase mb-5 block select-none leading-none">
            WHY WIVIY
          </span>
          <h2 className="font-serif text-[48px] sm:text-[68px] lg:text-[80px] font-black text-[#111111] leading-[76px] tracking-[-1.6px] uppercase mb-6">
            OUR STORY
          </h2>
          <p className="text-[#666666] text-[18px] sm:text-[20px] leading-[32px] font-normal text-center max-w-[1008px] px-4 font-sans">
            Wiviy was created with one simple belief—dating should feel real again. We built a safe, welcoming platform where meaningful conversations come first, helping people connect through shared values instead of endless swiping.
          </p>
        </div>

        {/* Staggered Overlapping Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20 lg:gap-y-0 w-full">
          {storyCards.map((card, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={card.id}
                className={`relative flex flex-col lg:block lg:h-[580px] w-full z-10 ${i === 1 ? 'lg:translate-y-24' : ''
                  } ${i === 2 ? 'lg:mt-12' : ''
                  } ${i === 3 ? 'lg:translate-y-36' : ''
                  }`}
              >
                {/* Image Block */}
                <div
                  className={`w-full lg:w-[65%] aspect-[4/3] lg:aspect-[3/4] rounded-[30px] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.06)] relative bg-zinc-150 ${isEven ? 'lg:left-0' : 'lg:ml-[35%]'
                    }`}
                >
                  <img
                    src={card.bg}
                    alt={card.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Overlapping Warm Beige Card */}
                <div
                  className={`w-[92%] -mt-16 mx-auto lg:-mt-0 lg:w-[62%] bg-[#FCF9F2]/90 backdrop-blur-[8px] border border-white/40 p-8 sm:p-10 rounded-[16px] shadow-[0px_20px_60px_rgba(20,18,26,0.08)] relative z-10 lg:absolute lg:top-[22%] ${isEven ? 'lg:left-[38%]' : 'lg:left-0'
                    }`}
                >
                  {/* Large Faint Number Background (Space Grotesk, opacity 0.1) */}
                  <div className="absolute top-2 left-6 font-space text-[72px] font-bold text-[#111111] opacity-10 select-none pointer-events-none z-0 leading-none">
                    {card.id}
                  </div>

                  {/* Title with Small Chartreuse Accent Dot */}
                  <h3 className="font-serif text-[28px] sm:text-[36px] lg:text-[45px] font-bold text-[#111111] leading-[50px] tracking-[-0.48px] mb-4 relative z-10 flex items-center gap-2 pr-2">
                    <span className="w-2 h-2 rounded-full bg-[#DFFF00] shrink-0" />
                    <span>{card.title}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-[#666666] text-[16px] sm:text-[18px] lg:text-[20px] leading-[32px] font-normal relative z-10">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center row of 5 solid colored hearts */}
        <div className="flex items-center justify-center gap-4 mt-48 select-none">
          {/* Heart 1 */}
          <svg viewBox="0 0 24 24" fill="#DFFF00" className="w-5 h-5">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          {/* Heart 2 */}
          <svg viewBox="0 0 24 24" fill="#FFC0D3" className="w-4 h-4">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          {/* Heart 3 */}
          <svg viewBox="0 0 24 24" fill="#DFFF00" className="w-6 h-6">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          {/* Heart 4 */}
          <svg viewBox="0 0 24 24" fill="#FFC0D3" className="w-4 h-4">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          {/* Heart 5 */}
          <svg viewBox="0 0 24 24" fill="#DFFF00" className="w-7 h-7">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

      </div>
    </section>
  );
}
