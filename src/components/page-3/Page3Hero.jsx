import React from 'react';

export default function Page3Hero({ setCurrentPage }) {
  const cards = [
    {
      name: "Sarah, 26",
      status: "Online",
      img: "/assets/page-3/sarah_portrait.png",
      posStyle: {
        left: '5%', top: '160px',
        width: '172px', height: '220px',
        transform: 'rotate(-6deg)',
      }
    },
    {
      name: "James, 29",
      status: "Online",
      img: "/assets/page-3/james_portrait.png",
      posStyle: {
        right: '6%', top: '160px',
        width: '156px', height: '200px',
        transform: 'rotate(4deg)',
      }
    },
    {
      name: "Emma, 24",
      status: "Online",
      img: "/assets/page-3/emma_portrait.png",
      posStyle: {
        left: '8%', bottom: '14%',
        width: '148px', height: '192px',
        transform: 'rotate(5deg)',
      }
    },
    {
      name: "Alex, 31",
      status: "Online",
      img: "/assets/page-3/alex_portrait.png",
      posStyle: {
        right: '5%', bottom: '10%',
        width: '156px', height: '200px',
        transform: 'rotate(-3deg)',
      }
    }
  ];

  const dots = [
    { left: '24%', top: '17%', w: '10px', h: '10px', opacity: 0.5 },
    { left: '22%', top: '34%', w: '14px', h: '14px', opacity: 0.4 },
    { left: '6%', top: '51%', w: '18px', h: '14px', opacity: 0.5, radius: '50%' },
    { left: '7%', top: '58%', w: '32px', h: '24px', opacity: 0.4, radius: '50%' },
    { left: '4%', top: '68%', w: '12px', h: '12px', opacity: 0.3 },
    { left: '21%', top: '70%', w: '20px', h: '20px', opacity: 0.45 },
    { left: '48%', top: '50%', w: '12px', h: '12px', opacity: 0.4 },
    { left: '45%', top: '63%', w: '16px', h: '16px', opacity: 0.4 },
    { left: '50%', top: '79%', w: '10px', h: '10px', opacity: 0.5 },
    { left: '53%', top: '73%', w: '12px', h: '12px', opacity: 0.4 },
    { left: '65%', top: '43%', w: '12px', h: '12px', opacity: 0.4 },
    { left: '69%', top: '43%', w: '16px', h: '16px', opacity: 0.35 },
    { left: '80%', top: '41%', w: '12px', h: '12px', opacity: 0.3 },
    { left: '59%', top: '65%', w: '14px', h: '14px', opacity: 0.35 },
    { left: '67%', top: '66%', w: '18px', h: '18px', opacity: 0.4 },
    { left: '65%', top: '58%', w: '14px', h: '14px', opacity: 0.35 }
  ];

  return (
    <section className="relative w-full min-h-[1050px] bg-[#FCF9F2] pt-40 pb-20 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden select-none font-sans flex items-center justify-center">

      {/* Floating Decorative Lime Dots */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute bg-[#DFFF00] pointer-events-none select-none hidden lg:block"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.w,
            height: dot.h,
            opacity: dot.opacity,
            borderRadius: dot.radius || '50%',
            filter: 'blur(0.5px)'
          }}
        />
      ))}

      {/* Background Gradients */}

      <div className="absolute right-[-192px] top-[-240px] w-[600px] h-[600px] bg-radial from-[#DFFF00] to-transparent opacity-10 rounded-full blur-xl pointer-events-none" />
      <div className="absolute left-[-192px] bottom-[-180px] w-[500px] h-[500px] bg-radial from-[#FFEAEF] to-transparent opacity-15 rounded-full blur-xl pointer-events-none" />

      {/* Floating Member Cards */}

      {cards.map((card, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-[22px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] flex flex-col pointer-events-none z-10 overflow-hidden hidden lg:flex"
          style={card.posStyle}
        >
          {/* Portrait fills entire upper card area — no circular crop */}
          <div className="flex-1 overflow-hidden">
            <img
              src={card.img}
              alt={card.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* White info strip at bottom */}
          <div className="px-3 py-2.5 bg-white shrink-0">
            <div className="text-[13px] font-bold text-[#111111] leading-tight mb-[3px]">
              {card.name}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-[7px] h-[7px] rounded-full bg-[#4ADE80] shrink-0" />
              <span className="text-[11px] font-normal text-[#6E6E6E] leading-none">{card.status}</span>
            </div>
          </div>
        </div>
      ))}

      <div className="max-w-[1000px] w-full flex flex-col items-center text-center relative z-20">

        {/* Playfair Display Serif Heading */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-[96px] font-normal text-[#111111] leading-[1.02] tracking-[-2.88px] mb-8 select-none flex flex-col items-center">
          <span>Where Real</span>
          <span className="relative inline-block mt-3">
            Connections
            {/* Chartreuse underline accent */}
            <span
              className="absolute left-0 bottom-[8px] w-full h-[6px] bg-[#DFFF00] -z-10 rounded-full"
            />
          </span>
          <span className="mt-3">Begin</span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-[#6E6E6E] text-base sm:text-xl font-normal leading-relaxed max-w-[887px] mb-12 px-4">
          Wiviy is thoughtfully designed to help you discover genuine people, start authentic conversations, and build meaningful relationships in a safe and welcoming community.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <button
            type="button"
            className="w-full sm:w-auto bg-[#DFFF00] text-zinc-950 font-semibold px-9 py-4.5 rounded-full hover:bg-[#cbe600] active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_4px_14px_rgba(223,255,0,0.25)] text-[18px] font-sans"
          >
            Create Profile
          </button>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto text-center border border-[#DCD7CC] text-[#111111] font-medium px-9 py-4.5 rounded-full hover:bg-[#111111]/5 active:scale-95 transition-all duration-200 cursor-pointer text-[18px] font-sans"
          >
            How It Works
          </a>
        </div>

      </div>
    </section>
  );
}
