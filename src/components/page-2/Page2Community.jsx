import React from 'react';

// Pink Heart Icon for card nodes
function NodePinkHeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#FF5C93" className="w-5 h-5 shrink-0">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

// Pink Star Icon for Node 2
function NodePinkStarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#FF5C93" className="w-5 h-5 shrink-0">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

// Lime/Green Smiley Icon for Node 3
function NodeLimeSmileyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#8FAE00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}

// Pink Chat Icon for Node 4
function NodePinkChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#FF5C93" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

// Lime Link/Friendship Icon for Node 6
function NodeLimeLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#8FAE00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

// Pink Shield Check Icon for Node 7
function NodePinkShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#FF5C93" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 11 2 2 4-4" />
    </svg>
  );
}

// Lime People Icon for Node 8
function NodeLimePeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#8FAE00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

// Background Decorative SVGs
function LimeHeart({ className }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="#DFFF00" strokeWidth="2.5" className={className}>
      <path d="M50 32 C38 12, 10 20, 15 52 C20 74, 45 88, 50 92 C55 88, 80 74, 85 52 C90 20, 62 12, 50 32 Z" />
    </svg>
  );
}

function PinkHeart({ className }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="#FF5C93" strokeWidth="2.5" className={className}>
      <path d="M50 32 C38 12, 10 20, 15 52 C20 74, 45 88, 50 92 C55 88, 80 74, 85 52 C90 20, 62 12, 50 32 Z" />
    </svg>
  );
}

function Squiggle({ className, stroke }) {
  return (
    <svg viewBox="0 0 40 20" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" className={className}>
      <path d="M 0 10 Q 10 0, 20 10 T 40 10" />
    </svg>
  );
}

export default function Page2Community() {
  const nodes = [
    {
      id: "node-1",
      title: "Genuine People",
      desc: "Real members looking for authentic relationships built on trust and shared values.",
      img: "/assets/page-2/Community member smiling.png",
      isLime: false,
      icon: <NodePinkHeartIcon />,
      iconBg: "bg-[#FFE1EB]",
      // Desktop positions: relative to container top/left
      containerStyle: { left: "0%", top: "10px", width: "396px", height: "126.22px" },
      cardStyle: { width: "296px", height: "126.22px", left: "100px" },
      photoStyle: { width: "118px", height: "118px", left: "-22.71px", top: "calc(50% - 118px/2 - 6.7px)", transform: "rotate(-4.35deg)" },
      photoSide: "left"
    },
    {
      id: "node-2",
      title: "Active Community",
      desc: "Thousands of members connect every day through meaningful conversations and genuine interactions.",
      img: "/assets/page-2/Community member smiling-1.png",
      isLime: false,
      icon: <NodePinkStarIcon />,
      iconBg: "bg-[#FFE1EB]",
      containerStyle: { left: "36%", top: "0px", width: "382px", height: "146.63px" },
      cardStyle: { width: "296px", height: "146.63px", left: "86px" },
      photoStyle: { width: "104px", height: "104px", left: "-3.24px", top: "calc(50% - 104px/2 - 2.85px)", transform: "rotate(-0.77deg)" },
      photoSide: "left"
    },
    {
      id: "node-3",
      title: "Positive Vibes",
      desc: "A welcoming community filled with kindness, respect, and authentic connections.",
      img: "/assets/page-2/Community member smiling-2.png",
      isLime: true,
      icon: <NodeLimeSmileyIcon />,
      iconBg: "bg-[#F3FFCC]",
      containerStyle: { left: "70.5%", top: "80px", width: "380px", height: "126.22px" },
      cardStyle: { width: "296px", height: "126.22px", left: "0px" },
      photoStyle: { width: "104px", height: "104px", left: "276.01px", top: "calc(50% - 104px/2 - 2.7px)", transform: "rotate(-0.83deg)" },
      photoSide: "right"
    },
    {
      id: "node-4",
      title: "Meaningful Chats",
      desc: "Thoughtful conversations that naturally grow into meaningful relationships.",
      img: "/assets/page-2/Community member smiling-3.png",
      isLime: false,
      icon: <NodePinkChatIcon />,
      iconBg: "bg-[#FFE1EB]",
      containerStyle: { left: "1.5%", top: "305px", width: "370px", height: "126.22px" },
      cardStyle: { width: "296px", height: "126.22px", left: "74px" },
      photoStyle: { width: "92px", height: "92px", left: "1.1px", top: "calc(50% - 92px/2 - 0.86px)", transform: "rotate(0.31deg)" },
      photoSide: "left"
    },
    {
      id: "node-5",
      title: "Better Matches",
      desc: "Smart compatibility helps you discover people who truly match your personality.",
      img: "/assets/page-2/Community member smiling-4.png",
      isLime: false,
      icon: <NodePinkHeartIcon />,
      iconBg: "bg-[#FFE1EB]",
      containerStyle: { left: "36.5%", top: "300px", width: "396px", height: "126.22px" },
      cardStyle: { width: "296px", height: "126.22px", left: "100px" },
      photoStyle: { width: "118px", height: "118px", left: "0.18px", top: "calc(50% - 118px/2 - 0.38px)", transform: "rotate(-0.06deg)" },
      photoSide: "left"
    },
    {
      id: "node-6",
      title: "New Friendships",
      desc: "Build friendships and relationships that last beyond the first conversation.",
      img: "/assets/page-2/Community member smiling-5.png",
      isLime: true,
      icon: <NodeLimeLinkIcon />,
      iconBg: "bg-[#F3FFCC]",
      containerStyle: { left: "71%", top: "390px", width: "370px", height: "126.22px" },
      cardStyle: { width: "296px", height: "126.22px", left: "0px" },
      photoStyle: { width: "92px", height: "92px", left: "277.88px", top: "calc(50% - 92px/2 - 0.23px)", transform: "rotate(-0.04deg)" },
      photoSide: "right"
    },
    {
      id: "node-7",
      title: "Safe & Trusted",
      desc: "Verified profiles, privacy protection, and community moderation ensure a secure experience.",
      img: "/assets/page-2/Community member smiling-6.png",
      isLime: false,
      icon: <NodePinkShieldIcon />,
      iconBg: "bg-[#FFE1EB]",
      containerStyle: { left: "14%", top: "640px", width: "382px", height: "146.65px" },
      cardStyle: { width: "296.06px", height: "146.65px", left: "85.97px" },
      photoStyle: { width: "104px", height: "104px", left: "0.22px", top: "calc(50% - 104px/2 - 0.19px)", transform: "rotate(0.1deg)" },
      photoSide: "left"
    },
    {
      id: "node-8",
      title: "Stronger Together",
      // Using hero-avatar-man.png as the 8th community member image
      img: "/assets/page-2/hero-avatar-man.png",
      desc: "A diverse community where everyone belongs and every connection matters.",
      isLime: true,
      icon: <NodeLimePeopleIcon />,
      iconBg: "bg-[#F3FFCC]",
      containerStyle: { left: "58%", top: "645px", width: "396px", height: "126.24px" },
      cardStyle: { width: "296.06px", height: "126.24px", left: "0px" },
      photoStyle: { width: "118px", height: "118px", left: "278px", top: "calc(50% - 118px/2)", transform: "rotate(0deg)" },
      photoSide: "right"
    }
  ];

  return (
    <section
      className="relative w-full py-28 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden select-none font-sans flex flex-col items-center"
      style={{ background: 'linear-gradient(180deg, #EFFF7D 0%, #FFFFFF 84.13%)' }}
    >
      {/* Decorative Outline Hearts and Shapes (Only on Desktop) */}
      <LimeHeart className="absolute left-[5%] top-[8%] w-28 h-28 -rotate-[22deg] hidden lg:block opacity-90" />
      <LimeHeart className="absolute left-[2%] top-[45%] w-32 h-32 -rotate-[15deg] hidden lg:block opacity-90" />
      <LimeHeart className="absolute right-[2%] top-[10%] w-[270px] h-[270px] rotate-[15deg] hidden lg:block opacity-90" />
      <LimeHeart className="absolute right-[8%] top-[56%] w-24 h-24 rotate-[10deg] hidden lg:block opacity-90" />

      <PinkHeart className="absolute right-[10%] bottom-[12%] w-6 h-6 rotate-[-12deg] hidden lg:block opacity-95" />
      <Squiggle className="absolute left-[8%] top-[68%] w-12 h-6 rotate-[15deg] hidden lg:block" stroke="#FF5C93" />
      <Squiggle className="absolute right-[6%] top-[3%] w-12 h-6 rotate-[-25deg] hidden lg:block" stroke="#DFFF00" />

      {/* Plus signs scattered */}
      <div className="absolute left-[24%] top-[11%] text-[#DFFF00] text-3xl font-black rotate-[20deg] hidden lg:block opacity-80">+</div>
      <div className="absolute left-[4%] top-[82%] text-[#FF5C93] text-2xl font-black rotate-[12deg] hidden lg:block opacity-60">+</div>
      <div className="absolute right-[13%] top-[52%] text-[#DFFF00] text-3xl font-black rotate-[30deg] hidden lg:block opacity-75">+</div>

      <div className="max-w-[1500px] mx-auto w-full flex flex-col items-center z-10">

        {/* Section Header */}
        <div className="text-center mb-24 max-w-5xl flex flex-col items-center">

          {/* Category tag with pink horizontal lines */}
          <div className="flex items-center justify-center gap-4 mb-5 select-none">
            <div className="w-[22px] h-[1px] bg-[#FF5C93] opacity-50" />
            <span className="font-sans font-semibold text-[13px] tracking-[8px] uppercase text-[#FF5C93] pl-[8px] leading-none">
              COMMUNITY HIGHLIGHTS
            </span>
            <div className="w-[22px] h-[1px] bg-[#FF5C93] opacity-50" />
          </div>

          <h2 className="font-serif text-[48px] sm:text-[68px] lg:text-[82px] font-black text-[#14121A] tracking-[-1.64px] leading-tight lg:leading-[80px] text-center mb-6">
            Community <span className="text-[#8FAE00]">Highlights</span>
          </h2>

          <p className="text-[#6B6B6B] text-[16px] sm:text-[19px] leading-[26px] sm:leading-[30px] font-normal text-center max-w-[620.82px] px-4 font-sans">
            Every conversation, every connection, every moment brings us closer. Meet real people building genuine relationships through meaningful conversations, every day.
          </p>
        </div>

        {/* Floating Canvas Layout (Desktop Absolute Positions) */}
        <div className="relative w-full max-w-[1150px] h-[880px] hidden lg:block">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute group transition-transform duration-300 hover:scale-[1.02]"
              style={node.containerStyle}
            >

              {/* White Overlay Card */}
              <div
                className="absolute bg-white/86 border border-white/80 rounded-[22px] p-6 shadow-[0px_20px_60px_rgba(20,18,26,0.08)] backdrop-blur-[9px] flex flex-col text-left justify-start z-10"
                style={node.cardStyle}
              >
                {/* Colored Icon Container */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center absolute left-[25px] top-[21px] ${node.iconBg} shadow-sm shrink-0`}>
                  {node.icon}
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-[15.5px] text-[#14121A] tracking-[-0.155px] leading-none absolute left-[79px] top-[21px]">
                  {node.title}
                </h3>

                {/* Description */}
                <p className="font-sans font-normal text-[13.8px] text-[#6B6B6B] leading-[20px] absolute left-[79px] top-[45px] pr-2">
                  {node.desc}
                </p>
              </div>

              {/* Overlapping Community Member Photo */}
              <div
                className="absolute overflow-hidden rounded-full border-[5px] border-white shadow-[0px_12px_30px_rgba(20,18,26,0.1)] bg-zinc-50 z-20"
                style={node.photoStyle}
              >
                <img
                  src={node.img}
                  alt={node.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

            </div>
          ))}
        </div>

        {/* Responsive Grid Layout (Mobile / Tablet Flow) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden w-full max-w-[750px] md:max-w-none px-2">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="flex items-center gap-4 bg-white/86 backdrop-blur-[9px] border border-white/80 p-5 rounded-[22px] shadow-[0px_12px_30px_rgba(20,18,26,0.05)] w-full text-left"
            >
              {/* Photo (Shown first on mobile for consistent flow) */}
              <div className="w-[90px] h-[90px] rounded-full overflow-hidden border-[4px] border-white shadow-sm shrink-0 bg-zinc-50">
                <img
                  src={node.img}
                  alt={node.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Text info and icon */}
              <div className="flex flex-col gap-1.5 min-w-0">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${node.iconBg}`}>
                    {React.cloneElement(node.icon, { className: "w-3.5 h-3.5" })}
                  </div>
                  <h3 className="font-sans font-bold text-[15.5px] text-[#14121A] truncate">
                    {node.title}
                  </h3>
                </div>
                <p className="font-sans font-normal text-[13.5px] text-[#6B6B6B] leading-relaxed">
                  {node.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
