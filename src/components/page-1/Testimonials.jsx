import React, { useState, useRef } from 'react';
import { Heart, MessageSquare, ShieldCheck, Users, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const sliderRef = useRef(null);

  const stories = [
    {
      names: "Priya & Arjun",
      text: "I never believed in dating apps until MELO. We matched on a Tuesday and met for coffee that weekend. Two years later, we're planning our wedding.",
      image: "/assets/page-1/Staying Safe While Dating Online.png",
      tag: "Priya & Arjun"
    },
    {
      names: "Jordan & Maya",
      text: "The conversation prompts made it so easy to break the ice. Our first chat lasted 4 hours. I knew he was special from the very first message.",
      image: "/assets/page-1/From First Match to First Date.png",
      tag: "Jordan & Maya"
    },
    {
      names: "Carlos Martinez",
      text: "MELO felt different from day one. Real people, real conversations. No games. I found my person when I stopped looking everywhere else.",
      image: "/assets/page-1/The Art of Meaningful Conversation.png",
      tag: "Carlos Martinez"
    },
    {
      names: "Amara Johnson",
      text: "As someone who values safety, MELO's verification process gave me the confidence to be myself. Best decision I ever made was swiping right.",
      image: "/assets/page-1/Staying Safe While Dating Online (1).png",
      tag: "Amara Johnson"
    },
    {
      names: "Min & Jason",
      text: "We both loved hiking and Thai food. MELO connected us through our shared interests. Our first date was a trail walk followed by pad thai.",
      image: "/assets/page-1/ChatGPT Image May 13, 2026, 10_59_16 AM 1.png",
      tag: "Min & Jason"
    }
  ];

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -412, behavior: 'smooth' }); // card width + gap (380 + 32)
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 412, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-white py-24 sm:py-32 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-zinc-100 font-sans">
      <div className="max-w-[1500px] mx-auto">

        {/* ================= SECTION 1: Meaningful Connections Daily ================= */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-serif text-5xl sm:text-6xl md:text-[68px] font-black text-[#111111] tracking-tight leading-[1.08] mb-6">
            Meaningful{' '}
            <span className="relative inline-block px-3 py-0.5">
              <span className="absolute inset-0 bg-[#d2ff00] -rotate-[0.5deg] rounded" />
              <span className="relative z-10 text-zinc-950">Connections</span>
            </span>
            <br />
            Daily
          </h2>
          <p className="text-[#6B6B6B] text-lg sm:text-xl max-w-2xl leading-relaxed mb-12">
            Built for real people looking for real conversations and lasting relationships.
          </p>

          {/* Yellow-Green Highlights Row */}
          <div className="w-full bg-[#D2F026] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center border border-zinc-950/10 shadow-sm mb-16">
            {/* Item 1 */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-zinc-950/5">
                <Heart size={20} className="text-[#111111] fill-current" />
              </div>
              <div>
                <h4 className="font-bold text-[#111111] text-sm sm:text-base leading-snug">Genuine Matches</h4>
                <p className="text-zinc-800 text-xs sm:text-sm mt-0.5 leading-snug">Discover people who truly match your vibe.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-zinc-950/5">
                <MessageSquare size={20} className="text-[#111111] fill-current" />
              </div>
              <div>
                <h4 className="font-bold text-[#111111] text-sm sm:text-base leading-snug">Real Conversations</h4>
                <p className="text-zinc-800 text-xs sm:text-sm mt-0.5 leading-snug">Start real chats and build meaningful connections.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-zinc-950/5">
                <ShieldCheck size={20} className="text-[#111111] fill-current" />
              </div>
              <div>
                <h4 className="font-bold text-[#111111] text-sm sm:text-base leading-snug">Trusted Profiles</h4>
                <p className="text-zinc-800 text-xs sm:text-sm mt-0.5 leading-snug">Every profile is verified for a safe and authentic experience.</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-zinc-950/5">
                <Users size={20} className="text-[#111111]" />
              </div>
              <div>
                <h4 className="font-bold text-[#111111] text-sm sm:text-base leading-snug">Better Relationships</h4>
                <p className="text-zinc-800 text-xs sm:text-sm mt-0.5 leading-snug">Built for lasting connections and real relationships.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION 2: LOVED BY THOUSANDS ================= */}
        <div className="flex flex-col items-center text-center mb-24 w-full max-w-[1200px] mx-auto">
          {/* Flanked loved by thousands title */}
          <div className="flex items-center gap-4 w-full mb-8">
            <div className="h-px bg-zinc-200 flex-grow" />
            <div className="flex items-center gap-2 text-zinc-900 font-extrabold text-sm sm:text-base tracking-[3px] uppercase">
              <span>♡</span>
              <span>LOVED BY THOUSANDS</span>
              <span>♡</span>
            </div>
            <div className="h-px bg-zinc-200 flex-grow" />
          </div>

          {/* Badge Grid with Colored Custom SVG Icons */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-[#111111] font-bold text-sm sm:text-base">
            {/* Safe & Secure */}
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-zinc-950">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#D2F026" />
                <path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span>Safe & Secure</span>
            </div>

            {/* Privacy Focused */}
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-zinc-950">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#D2F026" />
              </svg>
              <span>Privacy Focused</span>
            </div>

            {/* 100% Verified */}
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-zinc-950">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="#D2F026" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>100% Verified</span>
            </div>

            {/* Real People */}
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-zinc-950">
                <circle cx="12" cy="12" r="10" fill="#D2F026" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
                <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
              </svg>
              <span>Real People</span>
            </div>
          </div>
        </div>

        {/* ================= SECTION 3: Real People, Real Connections ================= */}
        <div className="border-t border-zinc-100 pt-16 mb-16">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 relative px-2 mb-16">
            <div className="w-[100px] hidden md:block" />
            <h3 className="font-serif text-5xl sm:text-6xl md:text-[62px] font-black text-[#111111] tracking-tight leading-[1.08] text-center flex-grow">
              Real People,<br />
              <span className="relative inline-block px-3 py-0.5 mt-2">
                <span className="absolute inset-0 bg-[#d2ff00] -rotate-[0.5deg] rounded" />
                <span className="relative z-10 text-zinc-950">Real Connections</span>
              </span>
            </h3>
            <div className="flex items-center gap-3 w-[100px] justify-center md:justify-end shrink-0">
              <button
                className="w-12 h-12 rounded-full border border-zinc-300 hover:border-zinc-900 flex items-center justify-center active:scale-95 transition-all cursor-pointer bg-white shadow-sm"
              >
                <ChevronLeft size={20} className="text-zinc-900" />
              </button>
              <button
                className="w-12 h-12 rounded-full border border-zinc-300 hover:border-zinc-900 flex items-center justify-center active:scale-95 transition-all cursor-pointer bg-white shadow-sm"
              >
                <ChevronRight size={20} className="text-zinc-900" />
              </button>
            </div>
          </div>

          {/* Grid Layout: Left side has tapes and arrow, Right side has 3 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start w-full px-4">
            {/* Left side: tapes and arrow wrapper */}
            <div className="relative w-full h-[180px] select-none pointer-events-none flex lg:block justify-center items-center">
              {/* loved by tape */}
              <div className="absolute lg:left-0 lg:top-[10px] rotate-[-8deg] left-[15%]">
                <svg viewBox="0 0 160 50" className="w-40 h-12 drop-shadow-md">
                  <rect x="2" y="2" width="156" height="46" rx="6" fill="#c0b3f5" />
                  <text x="50%" y="60%" textAnchor="middle" fill="#111111" fontSize="18" fontWeight="bold" fontFamily="Georgia, serif" fontStyle="italic">loved by</text>
                </svg>
              </div>
              {/* our community tape */}
              <div className="absolute lg:left-[45px] lg:top-[55px] rotate-[4deg] left-[35%]">
                <svg viewBox="0 0 200 50" className="w-52 h-12 drop-shadow-md">
                  <rect x="2" y="2" width="196" height="46" rx="6" fill="#EBFF7C" />
                  <text x="50%" y="60%" textAnchor="middle" fill="#111111" fontSize="18" fontWeight="bold" fontFamily="Georgia, serif" fontStyle="italic">our community</text>
                </svg>
              </div>
              {/* curved sketch arrow */}
              <div className="absolute lg:left-[210px] lg:top-[90px] rotate-[15deg] hidden lg:block">
                <svg viewBox="0 0 80 80" className="w-16 h-16 text-zinc-950">
                  <path
                    d="M 15,15 
                       C 30,10 45,30 30,45 
                       C 20,55 45,65 55,60 
                       M 42,50 L 55,60 L 48,70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Right side: 3 columns of quotes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Card 1 */}
              <div className="flex flex-col items-start text-left">
                <span className="font-serif text-[72px] text-[#D2F026] leading-none mb-2 select-none font-normal">“</span>
                <p className="font-serif text-[22px] font-bold text-[#111111] leading-[32px] tracking-tight mb-4">
                  Finally, a dating app that feels real and safe. I met someone amazing here!
                </p>
                <span className="text-[#6B6B6B] font-serif font-bold text-lg">- Priya, 26</span>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-start text-left">
                <span className="font-serif text-[72px] text-[#D2F026] leading-none mb-2 select-none font-normal">“</span>
                <p className="font-serif text-[22px] font-bold text-[#111111] leading-[32px] tracking-tight mb-4">
                  The prompts and icebreakers make starting conversations so easy
                </p>
                <span className="text-[#6B6B6B] font-serif font-bold text-lg">- Arjun, 26</span>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-start text-left">
                <span className="font-serif text-[72px] text-[#D2F026] leading-none mb-2 select-none font-normal">“</span>
                <p className="font-serif text-[22px] font-bold text-[#111111] leading-[32px] tracking-tight mb-4">
                  Wivy is where genuine, meaningful connections happen every day.
                </p>
                <span className="text-[#6B6B6B] font-serif font-bold text-lg">- Neha, 26</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
