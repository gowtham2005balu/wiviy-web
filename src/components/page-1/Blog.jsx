import React from 'react';

export default function Blog() {
  return (
    <section className="w-full bg-white py-24 sm:py-32 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-zinc-100 font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">

        {/* Section Header */}
        <div className="relative w-full flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-zinc-100">
          <div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-[80px] font-black text-[#111111] tracking-tight leading-[76px] text-left">
              Tips, Guides & More
            </h2>
          </div>

          {/* View All Articles Button */}
          <a
            href="#articles"
            className="flex items-center gap-2 text-[#111111] hover:opacity-85 font-medium text-[16px] leading-[24px] tracking-normal transition-opacity shrink-0 mb-2 cursor-pointer"
          >
            <span>View All Articles</span>
            {/* Custom SVG arrow pointing top-right */}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <line x1="3" y1="13" x2="13" y2="3" />
              <polyline points="5 3 13 3 13 11" />
            </svg>
          </a>
        </div>

        {/* Asymmetrical Staggered Columns Container */}
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-[1320px]">

          {/* Left Column - 726px */}
          <div className="flex flex-col gap-12 w-full lg:w-[726px] flex-grow">

            {/* Left Card 1 */}
            <div className="flex flex-col gap-5 w-full">
              {/* Image Frame */}
              <div
                className="relative w-full h-[300px] sm:h-[453.75px] rounded-[25px] overflow-hidden bg-zinc-150"
                style={{
                  backgroundImage: "url('/assets/page-1/Staying Safe While Dating Online.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Yellow-Green Tag Pill */}
                <div className="absolute top-4 left-4 bg-[#D2F026] text-[#111111] text-[12px] font-semibold tracking-normal px-4 py-1.5 rounded-full select-none font-sans shadow-sm">
                  Dating Tips
                </div>
              </div>

              {/* Card Meta & Text */}
              <div className="flex flex-col gap-2.5 text-left">
                <h3 className="font-sans font-bold text-[#111111] text-[21.8px] leading-[28px] tracking-tight">
                  Staying Safe While Dating Online
                </h3>
                <p className="text-[#666666] font-sans font-normal text-[15px] leading-[22px]">
                  Essential tips for protecting your privacy and staying safe.
                </p>
                <span className="text-[#666666] font-sans font-normal text-[13px] leading-[20px] mt-1">
                  4 min read
                </span>
              </div>
            </div>

            {/* Left Card 2 */}
            <div className="flex flex-col gap-5 w-full">
              {/* Image Frame */}
              <div
                className="relative w-full h-[300px] sm:h-[421.5px] rounded-[25px] overflow-hidden bg-zinc-150"
                style={{
                  backgroundImage: "url('/assets/page-1/The Art of Meaningful Conversation.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Yellow-Green Tag Pill */}
                <div className="absolute top-4 left-4 bg-[#D2F026] text-[#111111] text-[12px] font-semibold tracking-normal px-4 py-1.5 rounded-full select-none font-sans shadow-sm">
                  Safety
                </div>
              </div>

              {/* Card Meta & Text */}
              <div className="flex flex-col gap-2.5 text-left">
                <h3 className="font-sans font-bold text-[#111111] text-[27.9px] leading-[29px] tracking-tight">
                  The Art of Meaningful Conversation
                </h3>
                <p className="text-[#666666] font-sans font-normal text-[20px] leading-[32px]">
                  Discover how to move beyond small talk and create genuine connections from the very first message.
                </p>
                <span className="text-[#666666] font-sans font-normal text-[13px] leading-[20px] mt-1">
                  5 min read
                </span>
              </div>
            </div>

          </div>

          {/* Right Column - 562px */}
          <div className="flex flex-col gap-[63px] w-full lg:w-[562px] shrink-0">

            {/* Right Card 3 */}
            <div className="flex flex-col gap-5 w-full">
              {/* Image Frame */}
              <div
                className="relative w-full h-[300px] sm:h-[421.5px] rounded-[25px] overflow-hidden bg-zinc-150"
                style={{
                  backgroundImage: "url('/assets/page-1/Staying Safe While Dating Online (1).png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Yellow-Green Tag Pill */}
                <div className="absolute top-4 left-4 bg-[#D2F026] text-[#111111] text-[12px] font-semibold tracking-normal px-4 py-1.5 rounded-full select-none font-sans shadow-sm">
                  Safety
                </div>
              </div>

              {/* Card Meta & Text */}
              <div className="flex flex-col gap-2.5 text-left">
                <h3 className="font-sans font-bold text-[#111111] text-[21.8px] leading-[28px] tracking-tight">
                  Staying Safe While Dating Online
                </h3>
                <p className="text-[#666666] font-sans font-normal text-[15px] leading-[22px]">
                  Essential tips for protecting your privacy and staying safe.
                </p>
                <span className="text-[#666666] font-sans font-normal text-[13px] leading-[20px] mt-1">
                  4 min read
                </span>
              </div>
            </div>

            {/* Right Card 4 */}
            <div className="flex flex-col gap-5 w-full">
              {/* Image Frame */}
              <div
                className="relative w-full h-[300px] sm:h-[421.5px] rounded-[25px] overflow-hidden bg-zinc-150"
                style={{
                  backgroundImage: "url('/assets/page-1/From First Match to First Date.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Yellow-Green Tag Pill */}
                <div className="absolute top-4 left-4 bg-[#D2F026] text-[#111111] text-[12px] font-semibold tracking-normal px-4 py-1.5 rounded-full select-none font-sans shadow-sm">
                  Success Stories
                </div>
              </div>

              {/* Card Meta & Text */}
              <div className="flex flex-col gap-2.5 text-left">
                <h3 className="font-sans font-bold text-[#111111] text-[21.8px] leading-[28px] tracking-tight">
                  From First Match to First Date
                </h3>
                <p className="text-[#666666] font-sans font-normal text-[15px] leading-[22px]">
                  Real tips from couples who found love on MELO.
                </p>
                <span className="text-[#666666] font-sans font-normal text-[13px] leading-[20px] mt-1">
                  6 min read
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
