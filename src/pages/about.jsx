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
            onClick={() => window.open('#', '_blank')}
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
    <section className="w-full bg-white flex flex-col items-center justify-center py-16 lg:py-[120px] px-6 sm:px-16 lg:px-[80px]">
      <div className={`${SECTION_WRAP} flex flex-col items-start gap-10 lg:gap-16`}>
        <div className="flex flex-col items-start gap-3.5 max-w-[709px]">
          <span className="font-sans font-bold text-[#5E5A57] text-sm tracking-[2px] uppercase">
            Our Approach
          </span>
          <h2 className="font-serif font-medium text-[#171512] text-3xl sm:text-4xl lg:text-[50px] leading-[1.12] tracking-[-0.5px]">
            So we're doing things a little differently.
          </h2>
        </div>

        <div className="w-full flex flex-col md:flex-row items-stretch justify-center">
          {approachSteps.map((step, i) => (
            <div
              key={step.number}
              className={`flex-1 flex flex-col items-center text-center justify-center gap-3 p-8 border border-[#E8E6DD] ${
                i > 0 ? 'md:border-l-0 border-t-0 md:border-t' : ''
              }`}
            >
              <span className="w-full text-left font-serif text-[#5E5A57] text-sm pb-2">
                {step.number}
              </span>
              <h3 className="w-full text-left font-sans font-bold text-[#171512] text-2xl leading-tight">
                {step.title}
              </h3>
              <p className="w-full text-left font-sans text-[#5E5A57] text-base leading-[1.55]">
                {step.description}
              </p>
              <div className="w-full max-w-80 aspect-[320/340] mt-4 flex items-center justify-center overflow-hidden">
                {step.image && (
                  <img src={step.image} alt={step.title} className="w-full h-full object-contain" />
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

const principles = [
  { icon: '📍', title: 'BE YOURSELF.', description: 'Let your personality do more of the talking.' },
  { icon: '〰️', title: 'MEET DIFFERENTLY.', description: 'Leave room for unexpected connections.' },
  { icon: '💬', title: 'KEEP IT HUMAN.', description: 'Make conversations and connections feel natural.' },
];

function Beliefs() {
  return (
    <section className="w-full bg-[#DFE7F6] flex flex-col items-center justify-center py-16 lg:py-[120px] px-6 sm:px-16 lg:px-[80px]">
      <div className={`${SECTION_WRAP} flex flex-col items-center gap-16 lg:gap-[90px]`}>
        <div className="flex flex-col items-center gap-3.5 max-w-[640px] text-center">
          <span className="font-sans font-bold text-[#5E5A57] text-sm tracking-[2px] uppercase">
            What We Believe
          </span>
          <h2 className="font-serif font-medium text-[#181614] text-3xl sm:text-4xl lg:text-[54px] leading-[1.14] tracking-[-0.54px]">
            More personality. Less performance.
          </h2>
          <p className="text-[#5E5A57] text-base sm:text-lg leading-[1.5] font-sans pt-1">
            You shouldn't have to build a perfect version of yourself to meet someone. Wiviy is about making space
            for the real, imperfect, interesting parts of who you are.
          </p>
        </div>

        <div className="w-full flex flex-col sm:flex-row items-start justify-center gap-10 lg:gap-11">
          {principles.map((p) => (
            <div key={p.title} className="flex-1 flex flex-col items-center justify-center gap-2.5 text-center max-w-90 mx-auto">
              <span className="text-4xl leading-none" aria-hidden="true">
                {p.icon}
              </span>
              <h3 className="font-sans font-bold text-[#171512] text-lg tracking-[0.465px] pt-3">
                {p.title}
              </h3>
              <p className="max-w-65 text-[#5E5A57] text-base leading-[1.5] font-sans">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 07 MISSION ---------- */

function Mission() {
  return (
    <section className="w-full bg-[#F6FCD4] flex flex-col items-center justify-center py-16 lg:py-[120px] px-6 sm:px-16 lg:px-[80px]">
      <div className={`${SECTION_WRAP} flex flex-col items-center gap-4 text-center`}>
        <span className="font-sans font-bold text-[#5E5A57] text-sm tracking-[2px] uppercase">
          Our Mission
        </span>
        <h2 className="max-w-[760px] font-['DM_Serif_Display'] font-normal text-[#171512] text-3xl sm:text-5xl lg:text-[68px] leading-[1.08] tracking-[-0.68px]">
          Make meeting people feel more human.
        </h2>
        <p className="max-w-[460px] text-[#5E5A57] text-base sm:text-lg leading-[1.6] font-sans pt-1">
          We're creating a dating experience that leaves more room for curiosity, personality and genuine connection.
        </p>
      </div>
    </section>
  );
}

/* ---------- 08 FUTURE ---------- */

function Future() {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center py-20 lg:py-40 px-6 sm:px-16 lg:px-[80px]">
      <div className={`${SECTION_WRAP} flex flex-col items-center gap-4 text-center`}>
        <span className="font-sans font-bold text-[#5E5A57] text-sm tracking-[2px] uppercase">
          What's Next
        </span>
        <h2 className="max-w-[640px] font-['DM_Serif_Display'] font-normal text-[#5E5A57] text-3xl sm:text-4xl lg:text-[54px] leading-[1.18] tracking-[-0.54px]">
          There's more to shake up.
        </h2>
        <p className="max-w-[520px] text-[#5E5A57] text-base sm:text-[17px] leading-[1.65] font-sans pt-1">
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
          onClick={() => window.open('#', '_blank')}
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