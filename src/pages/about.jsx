import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

import about1 from '../assets/about1.png';
import about2 from '../assets/about2.png';
import about3 from '../assets/about3.png';
import ctaImage from '../assets/cta-about.png';

/* ---------- Shared ---------- */

const SECTION_WRAP = 'w-full max-w-[1240px] mx-auto px-6 sm:px-8';

/* ---------- 01 HERO ---------- */

function AboutHero() {
  return (
    <section className="w-full bg-white flex flex-col items-center pt-24 sm:pt-36 lg:pt-[200px] pb-16 lg:pb-[110px] px-6 sm:px-16 lg:px-[100px]">
      <div className={`${SECTION_WRAP} flex flex-col items-center gap-5 lg:gap-[22px] text-center`}>
        <h1 className="max-w-[900px] font-serif font-bold text-[#171512] text-4xl sm:text-5xl lg:text-[80px] leading-[1.2] tracking-[-0.8px]">
          Dating shouldn't <br className="hidden sm:block" />
          feel like a job.
        </h1>
        <p className="max-w-[480px] text-[#5E5A57] text-base sm:text-lg leading-[1.6] font-sans">
          We believe meeting someone should feel more like discovering a person than evaluating a profile.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5.5 pt-2.5 w-full">
          <button
            type="button"
            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.with.app', '_blank', 'noopener,noreferrer')}
            className="w-30 h-11.5 bg-[#D2F026] text-[#12140F] font-bold text-base rounded-full flex items-center justify-center hover:opacity-90 active:scale-95 transition-all cursor-pointer"
          >
            Get the app
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- 02 PROBLEM ---------- */

function Problem() {
  return (
    <section className="w-full bg-[#2A1D28] flex flex-col items-center justify-center py-16 lg:py-[120px] px-6 sm:px-16 lg:px-[80px]">
      <div className={`${SECTION_WRAP} flex flex-col items-center gap-5 text-center`}>
        <h2 className="max-w-[720px] font-serif font-medium text-white text-3xl sm:text-4xl lg:text-[52px] leading-[1.2] tracking-[-0.52px]">
          Somewhere along the way, dating got complicated.
        </h2>
        <p className="max-w-[440px] text-white/62 text-base leading-[1.7] font-sans pt-1">
          Swipe. Match. Wait. Repeat. Meeting someone can start to feel more like a process than a possibility.
        </p>

        <div className="flex flex-row flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 lg:gap-x-[46px] pt-10 lg:pt-[60px]">
          <span className="font-serif font-semibold text-white/16 text-4xl sm:text-6xl lg:text-[74px] leading-none">
            SWIPE
          </span>
          <span className="font-serif font-semibold text-[#D2F026] text-4xl sm:text-6xl lg:text-[74px] leading-none">
            MATCH
          </span>
          <span className="font-serif font-semibold text-white/16 text-4xl sm:text-6xl lg:text-[74px] leading-none">
            REPEAT
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------- 03 IDEA ---------- */

function Idea() {
  return (
    <section className="w-full bg-[#F1E6EF] flex flex-col items-center justify-center py-16 lg:py-[120px] px-6 sm:px-16 lg:px-[80px]">
      <div className={`${SECTION_WRAP} flex flex-col items-center gap-4 text-center`}>
        <h2 className="max-w-[820px] font-serif font-medium text-[#171512] text-3xl sm:text-4xl lg:text-[58px] leading-[1.2] tracking-[-0.58px]">
          People are more interesting than a profile card.
        </h2>
        <p className="max-w-[460px] text-[#5E5A57] text-base leading-[1.3] font-sans">
          A profile tells you what someone likes. It doesn't tell you who they are.
        </p>

        {/* flowerband: five small decorative marks, alternating accent colors */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-6 lg:gap-[26px] pt-10 lg:pt-[52.8px]">
          {['#D2F026', '#EFC9DF', '#D2F026', '#EFC9DF', '#D2F026'].map((color, i) => (
            <span
              key={i}
              className="inline-block rounded-full border border-[#2A1D28]"
              style={{ width: i % 2 === 0 ? 26 : 20, height: i % 2 === 0 ? 26 : 20, background: color }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 04 APPROACH ---------- */

const approachSteps = [
  {
    number: '01',
    title: 'Shake',
    description: 'Start with a little spontaneity. Shake things up and discover who else is ready to connect.',
    image: about1,
  },
  {
    number: '02',
    title: 'Discover',
    description: 'Look beyond the first impression. Find people through shared interests, energy and personality.',
    image: about2,
  },
  {
    number: '03',
    title: 'Connect',
    description: "Turn a moment into a conversation. Because the best connections shouldn't feel forced.",
    image: about3,
  },
];

function Approach() {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center py-16 lg:py-[120px] px-6 sm:px-12 lg:px-20">
      <div className="w-full max-w-[1240px] mx-auto flex flex-col items-start gap-10 lg:gap-14">
        {/* Header */}
        <div className="flex flex-col items-start gap-3 max-w-[700px]">
          <span className="font-sans font-bold text-xs sm:text-[13px] tracking-[2.5px] uppercase text-[#706E6B]">
            OUR APPROACH
          </span>
          <h2 className="font-serif font-medium text-3xl sm:text-4xl lg:text-[54px] leading-[1.15] tracking-[-0.5px] text-[#111111]">
            So we're doing things a little<br className="hidden sm:block" /> differently.
          </h2>
        </div>

        {/* 3 Columns / Cards container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 border border-[#E5E7EB] divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB] bg-white">
          {approachSteps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-start p-8 sm:p-10 lg:p-10 bg-white"
            >
              {/* Step number */}
              <span className="font-sans text-[15px] font-normal text-[#706E6B] mb-6">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="font-sans font-bold text-2xl lg:text-[28px] leading-[1.2] text-[#111111] mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-[15px] sm:text-[15.5px] leading-[1.55] text-[#555555] min-h-[48px] sm:min-h-[72px]">
                {step.description}
              </p>

              {/* Image box: exactly 320 x 340 per Figma */}
              <div className="w-full flex items-center justify-center mt-8 sm:mt-12 h-[340px]">
                {step.image && (
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-auto h-full max-w-[320px] max-h-[340px] object-contain select-none pointer-events-none"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 05 BELIEFS ---------- */

function BeYourselfIcon({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Lime filled head with dark outline */}
      <circle cx="14" cy="9" r="5.25" fill="#D2F026" stroke="#171512" strokeWidth="2.2" />
      {/* Curved body / shoulders arc */}
      <path
        d="M5 28C5 21.5 9 17.5 14 17.5C19 17.5 23 21.5 23 28"
        stroke="#171512"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MeetDifferentlyIcon({ className = 'w-9 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 38 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* S-curve wave line */}
      <path
        d="M6 18C10.5 18 11.5 6 17 6C22.5 6 23.5 20 31.5 8.5"
        stroke="#171512"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Bottom-left pink circle */}
      <circle cx="6" cy="18" r="3" fill="#F5B1EB" stroke="#171512" strokeWidth="2.2" />
      {/* Top-right lime circle */}
      <circle cx="32" cy="8.5" r="3" fill="#D2F026" stroke="#171512" strokeWidth="2.2" />
    </svg>
  );
}

function KeepItHumanIcon({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Speech bubble */}
      <path
        d="M4 3.5H24C25.1 3.5 26 4.4 26 5.5V16.5C26 17.6 25.1 18.5 24 18.5H8.5L4.5 23V18.5H4C2.9 18.5 2 17.6 2 16.5V5.5C2 4.4 2.9 3.5 4 3.5Z"
        fill="#EFC9DF"
        stroke="#171512"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* 3 dots */}
      <circle cx="9" cy="11" r="1.3" fill="#171512" />
      <circle cx="14" cy="11" r="1.3" fill="#171512" />
      <circle cx="19" cy="11" r="1.3" fill="#171512" />
    </svg>
  );
}

const principles = [
  {
    icon: BeYourselfIcon,
    title: 'BE YOURSELF.',
    description: 'Let your personality do more of the talking.',
  },
  {
    icon: MeetDifferentlyIcon,
    title: 'MEET DIFFERENTLY.',
    description: 'Leave room for unexpected connections.',
  },
  {
    icon: KeepItHumanIcon,
    title: 'KEEP IT HUMAN.',
    description: 'Make conversations and connections feel natural.',
  },
];

function Beliefs() {
  return (
    <section className="w-full bg-[#DFE7F6] flex flex-col items-center justify-center py-20 lg:py-28 px-6 sm:px-12 lg:px-20">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center gap-3.5 max-w-[680px] text-center mb-16 lg:mb-20">
          <span className="font-sans font-bold text-xs sm:text-[13px] tracking-[2.5px] uppercase text-[#706E6B]">
            WHAT WE BELIEVE
          </span>
          <h2 className="font-serif font-medium text-3xl sm:text-5xl lg:text-[58px] leading-[1.12] tracking-[-0.5px] text-[#111111]">
            More personality. Less<br className="hidden sm:block" /> performance.
          </h2>
          <p className="font-sans text-[15px] sm:text-base leading-[1.6] text-[#555555] max-w-[560px] pt-1">
            You shouldn't have to build a perfect version of yourself to meet someone. Wiviy is
            about making space for the real, imperfect, interesting parts of who you are.
          </p>
        </div>

        {/* 3 Principles Columns */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="flex flex-col items-center text-center max-w-[280px] mx-auto"
              >
                <div className="h-10 flex items-center justify-center mb-5">
                  <Icon />
                </div>
                <h3 className="font-sans font-bold text-[#111111] text-[15px] tracking-[1.5px] uppercase mb-2">
                  {p.title}
                </h3>
                <p className="font-sans text-[14.5px] leading-[1.55] text-[#555555]">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- 07 MISSION ---------- */

function Mission() {
  return (
    <section className="w-full bg-[#F6FCD4] flex flex-col items-center justify-center py-20 lg:py-28 px-6 sm:px-12 lg:px-20">
      <div className="w-full max-w-[1240px] mx-auto flex flex-col items-center gap-4 text-center">
        <span className="font-sans font-bold text-xs sm:text-[13px] tracking-[2.5px] uppercase text-[#706E6B]">
          OUR MISSION
        </span>
        <h2 className="w-full max-w-[760px] font-serif font-normal text-[#171512] text-4xl sm:text-6xl lg:text-[68px] leading-[1.08] lg:leading-[73.5px] tracking-[-0.68px] mx-auto">
          Make meeting people feel<br className="hidden sm:block" /> more human.
        </h2>
        <p className="max-w-[580px] text-[#555555] text-base sm:text-[17px] leading-[1.6] font-sans pt-1 mx-auto">
          We're creating a dating experience that leaves more room for curiosity, personality and genuine connection.
        </p>
      </div>
    </section>
  );
}

/* ---------- 08 FUTURE (WHAT'S NEXT) ---------- */

function Future() {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center py-24 lg:py-36 px-6 sm:px-12 lg:px-20">
      <div className="w-full max-w-[1240px] mx-auto flex flex-col items-center gap-4 text-center">
        <span className="font-sans font-bold text-xs sm:text-[13px] tracking-[2.5px] uppercase text-[#706E6B]">
          WHAT'S NEXT
        </span>
        <h2 className="w-full max-w-[640px] font-serif font-normal text-[#171512] text-3xl sm:text-5xl lg:text-[54px] leading-[1.2] lg:leading-[64.72px] tracking-[-0.54px] mx-auto">
          There's more to shake up.
        </h2>
        <p className="max-w-[540px] text-[#555555] text-base sm:text-[17px] leading-[1.65] font-sans pt-1 mx-auto">
          Wiviy is still evolving. We're building toward a world where meeting someone new feels less predictable,
          more expressive and a little more exciting.
        </p>
      </div>
    </section>
  );
}

/* ---------- 09 FINAL CTA ---------- */

function FinalCTA() {
  return (
    <section
      className="relative w-full min-h-[420px] lg:h-[552.62px] flex flex-col items-center justify-center isolate py-16 lg:py-[120px] px-6 sm:px-16 lg:px-[80px] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${ctaImage})`,
      }}
    >
      {/* radial accent glow, top-left, per spec */}
      <div
        className="absolute -left-15 -top-15 w-55 h-55 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(70.71% 70.71% at 50% 50%, rgba(210,240,38,0.16) 0%, rgba(210,240,38,0) 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-[1240px] flex flex-col items-center gap-5 px-2 sm:px-8 text-center">
        <h2 className="font-['DM_Serif_Display'] font-normal text-white text-4xl sm:text-6xl lg:text-[72px] leading-[1.1] lg:leading-[90px] tracking-[-0.88px] lg:w-[445px] mx-auto">
          Ready to meet differently?
        </h2>
        <p className="font-['Plus_Jakarta_Sans'] font-normal text-white/90 text-[17px] leading-[21px] lg:w-[318px] mx-auto">
          Shake things up. See where it takes you.
        </p>
        <button
          type="button"
          onClick={() => window.open('https://play.google.com/store/apps/details?id=com.with.app', '_blank', 'noopener,noreferrer')}
          className="mt-2 box-border w-[129px] h-[51px] px-[28px] py-[15px] bg-[#D2F026] text-[#171512] font-['Plus_Jakarta_Sans'] font-bold text-[15px] leading-[19px] rounded-full flex items-center justify-center hover:opacity-90 active:scale-95 transition-all cursor-pointer"
        >
          Get Wiviy
        </button>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */

export default function About() {
  return (
    <>
      <Navbar theme="light" />
      <main className="w-full overflow-x-hidden">
        <AboutHero />
        <Problem />
        <Idea />
        <Approach />
        <Beliefs />
        <Mission />
        <Future />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}