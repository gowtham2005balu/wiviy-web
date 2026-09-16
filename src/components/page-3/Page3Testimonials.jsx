import React from 'react';

export default function Page3Testimonials() {
  const testimonials = [
    {
      names: "Sarah M., 26",
      role: "New York",
      text: "I was tired of superficial dating apps. Wiviy changed everything. I met my boyfriend here, and our first conversation lasted 6 hours.",
      stars: 5,
      img: "/assets/page-2/Community member smiling-1.png"
    },
    {
      names: "James T., 29",
      role: "San Francisco",
      text: "The verification process made me feel safe. Everyone here is genuine. I have made real friends and found someone special.",
      stars: 5,
      img: "/assets/page-2/Community member smiling-2.png"
    },
    {
      names: "Emma L., 24",
      role: "Chicago",
      text: "The conversation prompts are brilliant. No more awkward silences. I felt like I could be my authentic self from day one.",
      stars: 5,
      img: "/assets/page-2/Community member smiling-3.png"
    },
    {
      names: "Alex K., 31",
      role: "Los Angeles",
      text: "After years of disappointing dates, Wiviy restored my faith. The quality of matches is unmatched. Truly meaningful connections.",
      stars: 5,
      img: "/assets/page-2/Community member smiling-4.png"
    },
    {
      names: "Mia R., 27",
      role: "Austin",
      text: "I love the check-in feature. It makes me feel so safe. I can share my location with a friend, and they will be notified if I don't check in.",
      stars: 5,
      img: "/assets/page-2/Community member smiling-5.png"
    }
  ];

  return (
    <section className="relative w-full bg-[#FCF9F2] py-28 overflow-hidden select-none font-sans flex flex-col items-center">
      <div className="max-w-[1300px] w-full flex flex-col items-start px-6 sm:px-12 md:px-16 lg:px-24">

        {/* Category Label */}
        <span className="text-[#8A9800] text-[12px] font-extrabold tracking-[2px] uppercase mb-4 leading-none font-mono">
          LOVE STORIES
        </span>

        {/* Heading */}
        <h2 className="font-serif text-[42px] sm:text-[60px] md:text-[72px] font-extrabold text-[#111111] leading-[1.05] tracking-[-1.5px] mb-20 text-left">
          Real People,<br />
          Real Love
        </h2>

        {/* Testimonials horizontal scroll grid */}
        <div className="flex gap-6 w-full overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory">
          {testimonials.map((test, i) => (
            <div
              key={i}
              className="bg-white border border-[#EBEBEB] rounded-[24px] p-8 shadow-sm flex flex-col justify-between w-[320px] sm:w-[340px] h-[360px] shrink-0 snap-start transition-all duration-300 hover:shadow-md hover:border-[#DFFF00]/40 group relative overflow-hidden"
            >
              {/* Top Section */}
              <div className="flex flex-col items-start text-left">
                {/* 5 Yellow Stars review */}
                <div className="flex items-center gap-1 mb-5">
                  {Array(test.stars).fill(0).map((_, idx) => (
                    <svg key={idx} viewBox="0 0 24 24" fill="#FACC15" className="w-4 h-4">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Double Quotes Icon */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#DFFF00]/70 mb-3">
                  <path d="M11.192 15.757c0-.754-.025-1.43-.075-2.028a3.713 3.713 0 0 0-.21-1.077 2.039 2.039 0 0 0-.41-.703c-.19-.214-.423-.39-.701-.527a2.646 2.646 0 0 0-.897-.247c-.196-.015-.407-.022-.63-.022-.09 0-.204.007-.344.022a1.99 1.99 0 0 0-.397.068 5.62 5.62 0 0 1 .494-1.57c.294-.573.666-1.12 1.116-1.637l-1.602-1.345a9.01 9.01 0 0 0-2.316 2.923 9.479 9.479 0 0 0-.825 3.79c0 1.258.337 2.274 1.01 3.05.674.775 1.583 1.163 2.727 1.163 1.144 0 2.053-.388 2.727-1.163.673-.776 1.01-1.792 1.01-3.05zm8.56 0c0-.754-.026-1.43-.076-2.028a3.713 3.713 0 0 0-.21-1.077 2.039 2.039 0 0 0-.41-.703 2.502 2.502 0 0 0-.701-.527 2.646 2.646 0 0 0-.897-.247c-.196-.015-.407-.022-.63-.022-.09 0-.204.007-.344.022a2.008 2.008 0 0 0-.397.068 5.62 5.62 0 0 1 .494-1.57c.294-.573.666-1.12 1.116-1.637l-1.602-1.345a9.01 9.01 0 0 0-2.316 2.923 9.479 9.479 0 0 0-.825 3.79c0 1.258.337 2.274 1.01 3.05.674.775 1.583 1.163 2.727 1.163 1.144 0 2.053-.388 2.727-1.163.673-.776 1.01-1.792 1.01-3.05z" />
                </svg>

                {/* Review Text */}
                <p className="text-[#6E6E6E] text-[14px] leading-[23px] font-normal font-sans">
                  "{test.text}"
                </p>
              </div>

              {/* Bottom Member Avatar Profile info */}
              <div className="flex items-center gap-3.5 mt-6 border-t border-zinc-100 pt-5">
                <img
                  src={test.img}
                  alt={test.names}
                  className="w-11 h-11 object-cover rounded-full border border-zinc-200"
                />
                <div className="flex flex-col text-left">
                  <span className="text-[14px] font-bold text-[#111111] leading-none mb-1.5">
                    {test.names}
                  </span>
                  <span className="text-[10px] font-semibold text-[#8E8E8E] leading-none">
                    {test.role}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Hide Scrollbars Custom CSS */}
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </section>
  );
}

