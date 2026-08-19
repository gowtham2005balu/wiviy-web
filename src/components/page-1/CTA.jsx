import React from 'react';

const AVATARS = [
  '/assets/page-1/Staying Safe While Dating Online.png',
  '/assets/page-1/From First Match to First Date.png',
  '/assets/page-1/The Art of Meaningful Conversation.png',
  '/assets/page-1/Staying Safe While Dating Online (1).png',
];

const openStore = () =>
  window.open('https://play.google.com/store/apps/details?id=com.with.app', '_blank');

export default function CTA() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-[#F3FFB6] overflow-hidden border-t border-zinc-100 font-sans py-16 sm:py-20 lg:py-24 select-none">

      {/* Ambient blur blobs — scale down on small screens */}
      <div className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[rgba(255,234,239,0.2)] blur-[32px] rounded-full top-0 right-0 pointer-events-none" />
      <div className="absolute w-40 h-40 sm:w-52 sm:h-52 lg:w-72 lg:h-72 bg-[rgba(223,255,0,0.1)] blur-[32px] rounded-full bottom-0 left-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[240px_1fr_300px] xl:grid-cols-[280px_1fr_340px] items-center gap-10 lg:gap-8 xl:gap-12">

          {/* Phone mockup */}
          <div className="order-2 md:order-1 relative flex justify-center lg:justify-start">
            <div className="relative w-[220px] sm:w-[260px] lg:w-full">
              <img
                src="/assets/page-1/div.phone-portrait 1.png"
                alt="Dating Match App Phone"
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
              />
              {/* Sparks — decorative, desktop only */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                className="hidden lg:block absolute left-[32%] top-[20%] rotate-[1.75deg] opacity-80 text-[rgba(255,234,239,0.8)]">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor" />
              </svg>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none"
                className="hidden lg:block absolute left-[48%] top-[8%] rotate-[1.75deg] opacity-60 text-[rgba(255,234,239,0.6)]">
                <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8L10 0Z" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Headline + copy + CTAs */}
          <div className="order-1 md:order-2 text-center lg:text-left">
            <h2 className="font-serif font-black text-[#111111] tracking-tight leading-[1.08] text-[clamp(2.25rem,5vw+1rem,3.75rem)]">
              Ready to Find Your{' '}
              <span className="relative inline-block">
                Meaningful Connection?
                <span className="absolute left-0 right-0 -bottom-1 h-2 sm:h-2.5 bg-[rgba(223,255,0,0.4)] -z-10" />
              </span>
            </h2>

            <p className="mt-6 text-[#6B6B6B] text-base sm:text-lg font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
              Join over 500,000 people who have already found something real on MELO. Your next great conversation is just one download away.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={openStore}
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-[#DFFF00] text-[#111111] font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all cursor-pointer shadow-sm border border-transparent"
              >
                <span className="text-[15px] sm:text-[16px] leading-[24px]">Download on App Store</span>
                <span className="text-lg">↗</span>
              </button>
              <button
                onClick={openStore}
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/80 border border-[#ECECEC] backdrop-blur-[2px] text-[#111111] font-bold flex items-center justify-center hover:bg-white transition-all cursor-pointer"
              >
                <span className="text-[15px] sm:text-[16px] leading-[24px]">Get on Google Play</span>
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                {AVATARS.map((src) => (
                  <div
                    key={src}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-cover bg-center"
                    style={{ backgroundImage: `url('${src}')` }}
                  />
                ))}
              </div>
              <div className="flex flex-col text-left leading-none gap-1">
                <div className="text-[#111111] font-bold text-sm">4.9/5 rating</div>
                <div className="text-[#6B6B6B] font-medium text-xs">Based on 12,000+ reviews</div>
              </div>
            </div>
          </div>

          {/* Portrait with organic blob backdrop */}
          <div className="order-3 relative flex justify-center md:justify-end lg:justify-end md:col-span-2 lg:col-span-1">
            <div className="relative w-full max-w-[240px] sm:max-w-[280px] lg:max-w-none lg:w-full aspect-[473/596]">
              <svg
                viewBox="0 0 488 588"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full -z-10 text-[#D2F026] fill-current pointer-events-none"
              >
                <ellipse cx="390" cy="220" rx="110" ry="165" transform="rotate(-12, 390, 220)" />
                <ellipse cx="140" cy="340" rx="115" ry="95" transform="rotate(25, 140, 340)" />
                <ellipse cx="120" cy="480" rx="95" ry="115" transform="rotate(-8, 120, 480)" />
              </svg>
              <img
                src="/assets/page-1/ChatGPT Image May 13, 2026, 10_59_16 AM 1.png"
                alt="Thoughtful Girl"
                className="relative z-10 w-full h-full object-cover object-top rounded-[2px]"
              />
              <svg
                width="44" height="44" viewBox="0 0 53 52" fill="none"
                className="hidden lg:block absolute left-[-6%] bottom-[10%] rotate-[-25.65deg]"
              >
                <path d="M51.5453 31.5355C52.9224 30.6826 53.3592 28.7988 52.5208 27.3278C51.6825 25.8568 49.8865 25.3558 48.5094 26.2087L50.0274 28.8721L51.5453 31.5355ZM26.7792 37.399C25.2019 37.7152 24.1937 39.3259 24.5274 40.9965C24.861 42.6672 26.4102 43.7652 27.9875 43.4491L27.3834 40.4241L27.9875 43.4491C38.9804 41.2455 46.8339 34.4534 51.5453 31.5355L50.0274 28.8721Z" fill="#232326" />
                <path d="M37.497 5.38994C38.1195 3.83592 37.4186 2.01677 35.9315 1.32675C34.4443 0.636737 32.7341 1.33715 32.1115 2.89117L34.8042 4.14056L37.497 5.38994ZM16.1115 28.2604C14.8604 29.3043 14.6704 31.2385 15.6872 32.5807C16.704 33.9229 18.5425 34.1647 19.7937 33.1208L17.9526 30.6906L16.1115 28.2604ZM34.8042 4.14056L32.1115 2.89117C30.9108 5.88832 28.6301 10.831 25.7454 15.7684C22.8291 20.7599 19.451 25.474 16.1115 28.2604L17.9526 30.6906L19.7937 33.1208C23.9229 29.6755 27.718 24.2414 30.734 19.0792C33.7817 13.8629 36.1924 8.6463 37.497 5.38994L34.8042 4.14056Z" fill="#232326" />
                <path d="M4.63805 24.5325C4.43823 26.2148 5.57313 27.7787 7.17291 28.0255C8.77269 28.2723 10.2315 27.1086 10.4314 25.4263L7.53471 24.9794L4.63805 24.5325ZM14.9457 5.70593C15.8336 4.30706 15.4624 2.38949 14.1167 1.42291C12.771 0.456329 10.9604 0.80677 10.0725 2.20564L12.5091 3.95578L14.9457 5.70593ZM7.53471 24.9794L10.4314 25.4263C10.7438 22.7957 11.364 18.5953 12.1996 14.6054C12.6174 12.61 13.0803 10.7101 13.5728 9.10528C14.0822 7.44528 14.5611 6.31191 14.9457 5.70593L12.5091 3.95578L10.0725 2.20564C9.23806 3.52029 8.56589 5.29926 8.01439 7.09641C7.44596 8.94871 6.93802 11.0508 6.49733 13.1552C5.61576 17.365 4.96786 21.7557 4.63805 24.5325L7.53471 24.9794Z" fill="#232326" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}