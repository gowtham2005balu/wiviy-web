import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

import heroImage from '../assets/hero.png';
import shakePhoneImage from '../assets/shake-phone.png';
import ctaImage from '../assets/cta-couple.png';
import flowersImage from '../assets/flowers-bg.png';

/* ---------- Section 1: Hero ---------- */

function Hero() {
  return (
    <section
      className="relative w-full h-225 flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroImage})`,
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-163.5 px-6 text-center">
        <h1 className="font-serif font-semibold text-white text-5xl sm:text-6xl lg:text-[92px] leading-[1.2] tracking-[-0.5px]">
          Shake up the <br className="hidden sm:block" />
          way you <span className="text-[#D2F026]">meet</span>
        </h1>

        <p className="mt-6 max-w-127.25 text-white/80 text-lg sm:text-xl lg:text-2xl leading-[1.2] font-sans">
          A different way to discover people, start conversations, and make connections that feel more natural.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5.5 mt-4.5 w-full">
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

/* ---------- Section 2: How It Works ---------- */

const steps = [
  {
    key: 'create',
    label: 'Create',
    title: 'Create',
    description: 'Build a profile that actually sounds like you — no templates, no filler.',
    image: null,
  },
  {
    key: 'discover',
    label: 'Discover',
    title: 'Discover',
    description: "Move through Wiviy's discovery flowat your own pace, on your own terms.",
    image: null,
  },
  {
    key: 'connect',
    label: 'Connect',
    title: 'Connect',
    description: 'Like, match, and start a conversation with someone who liked you back.',
    image: null,
  },
];

function HowItWorks() {
  const [active, setActive] = useState(0);
  const activeStep = steps[active];

  return (
    <section className="relative w-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 py-16 lg:py-30 gap-12.5">
      <div className="w-full max-w-7xl flex flex-col items-start gap-4.5">
        <div className="w-full flex flex-row flex-wrap justify-between items-start gap-y-2">
          {steps.map((step, i) => (
            <button
              key={step.key}
              type="button"
              onClick={() => setActive(i)}
              className={`font-sans font-bold text-3xl sm:text-4xl lg:text-[54px] leading-tight lg:leading-13.5 transition-colors ${
                i === active ? 'text-[#12140F]' : 'text-[#12140F]/30 hover:text-[#12140F]/60'
              }`}
            >
              {step.label}.
            </button>
          ))}
        </div>

        <div className="relative w-full h-px bg-[#E6E6D9]">
          <div
            className="absolute -top-0.75 h-1.75 bg-[#D2F026] rounded-[10px] transition-all duration-300"
            style={{
              width: '120px',
              left: `calc(${(active / steps.length) * 100}% )`,
            }}
          />
        </div>
      </div>

      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        <div className="w-full lg:flex-1 lg:basis-127 flex flex-col items-start gap-2.25 max-w-127">
          <h3 className="font-sans font-bold text-2xl leading-7.25 text-[#12140F] pt-2.25">
            {activeStep.title}
          </h3>
          <p className="font-sans text-base leading-6.25 text-[#5B5F53] max-w-70">
            {activeStep.description}
          </p>
        </div>

        <div className="w-full lg:flex-1 lg:basis-177 max-w-177 aspect-[708/424] lg:h-106 bg-[#DFE7F6] rounded-sm overflow-hidden">
          {activeStep.image && (
            <img
              src={activeStep.image}
              alt={activeStep.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 3: Shake ---------- */

const shakePills = [
  { label: 'Get the app', tone: 'blue' },
  { label: 'Download now', tone: 'blue' },
  { label: 'Sign up for free', tone: 'blue' },
  { label: 'Explore features', tone: 'blue' },
  { label: 'Start your journey', tone: 'red' },
  { label: 'Join our community', tone: 'blue' },
  { label: 'Upgrade your experience', tone: 'blue' },
  { label: 'Discover new content', tone: 'blue' },
  { label: 'Stay updated', tone: 'red' },
];

const pillTone = {
  blue: 'bg-[#C7AFFF]/10 border border-[#0040FF]/25 text-[#161414]',
  red: 'bg-[#FFAFAF]/10 border border-[#FF0000]/25 text-[#FFDADA]',
};

function PillRow({ reverse = false }) {
  const row = [...shakePills, ...shakePills];
  return (
    <div
      className={`flex flex-row items-center gap-4 w-max animate-[marquee_40s_linear_infinite] ${
        reverse ? '[animation-direction:reverse]' : ''
      }`}
    >
      {row.map((pill, i) => (
        <span
          key={`${pill.label}-${i}`}
          className={`box-border flex flex-row justify-center items-center px-6 py-3.5 h-13 rounded-full font-sans text-lg leading-5.5 whitespace-nowrap ${pillTone[pill.tone]}`}
        >
          {pill.label}
        </span>
      ))}
    </div>
  );
}

function Shake() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 py-16 lg:py-30 overflow-hidden isolate bg-[#DFE7F6]">
      <div className="absolute inset-x-0 top-[45%] flex flex-col gap-4 z-0 pointer-events-none">
        <PillRow />
        <PillRow reverse />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-310 w-full gap-4">
        <div className="flex flex-col items-center gap-4 max-w-84.5">
          <h2 className="font-serif font-bold text-center text-[#206EFF] text-4xl sm:text-5xl lg:text-[54px] leading-[130%] tracking-[-0.5px]">
            Shake things up.
          </h2>
          <p className="pt-4 text-center text-[#111010] text-lg leading-[130%] font-sans">
            Sometimes the best connection is the one you weren't looking for.
          </p>
        </div>

        <div className="flex flex-row justify-center items-start w-full pt-10.5">
          <img
            src={shakePhoneImage}
            alt="Shake your phone feature preview"
            className="w-56 sm:w-72 lg:w-80 h-auto max-h-[631px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Shared: filter pill ---------- */

function FilterPill({ children, tone = 'dark' }) {
  const toneStyles = {
    dark: 'bg-[#F6F6EE]/25 border border-[#E6E6D9]/25 text-white',
    light: 'bg-[#CB95C3]/15 border border-[#EE96E1]/25 text-[#353535]',
  };
  return (
    <span
      className={`box-border flex flex-col items-start justify-center px-4 py-2.5 h-9.75 rounded-full font-['Plus_Jakarta_Sans'] font-bold text-[13.5px] leading-4.25 whitespace-nowrap ${toneStyles[tone]}`}
    >
      {children}
    </span>
  );
}

const filterLabels = ['Matching & likes', 'Nearby', 'Swipe controls', 'Filters'];

/* ---------- Shared: text/phone split used in sections 4 & 5 ---------- */
/* Figma spec: each column is 609px wide inside a 1280px max container
   with a 62px gap. Using explicit basis + shrink keeps the split even
   and .min-w-0 lets long text wrap instead of forcing the row wider
   than its container (the cause of the overflow at md/lg breakpoints). */
const SPLIT_COL = 'w-full lg:basis-152.25 lg:shrink-0 min-w-0';
const SPLIT_ROW = 'w-full max-w-7xl flex flex-col lg:flex-row items-center gap-10 lg:gap-15.5';
const PHONE_IMG =
  'w-56 sm:w-64 lg:w-80 h-auto max-h-[631px] object-contain mx-auto';
const starfieldBg =
  'radial-gradient(circle at 15% 20%, rgba(245,177,235,0.22), transparent 16%), radial-gradient(circle at 70% 28%, rgba(255,255,255,0.15), transparent 12%), radial-gradient(circle at 85% 70%, rgba(255,255,255,0.12), transparent 18%), linear-gradient(135deg, #2A1D28 0%, #1C1729 100%)';
const floralBg =
  'radial-gradient(circle at 10% 30%, rgba(215,121,156,0.23), transparent 16%), radial-gradient(circle at 90% 12%, rgba(242,192,215,0.14), transparent 12%), linear-gradient(180deg, #F1E6EF 0%, #F5EEF5 100%)';

/* ---------- Section 4: More Ways (dark, starfield) ---------- */

function MoreWays() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 py-16 lg:py-30 overflow-hidden isolate bg-[#2A1D28] bg-cover bg-center"
      style={{ backgroundImage: starfieldBg }}
    >
      <div className={`relative z-10 ${SPLIT_ROW}`}>
        <div className={`${SPLIT_COL} flex justify-center items-center order-2 lg:order-1`}>
          <img src={shakePhoneImage} alt="Shake your phone feature preview" className={PHONE_IMG} />
        </div>

        <div className={`${SPLIT_COL} flex flex-col items-start justify-center gap-4 order-1 lg:order-2 text-center lg:text-left`}>
          <h2 className="w-full font-serif font-bold text-[#F5B1EB] text-3xl sm:text-4xl lg:text-[54px] leading-[130%] tracking-[-0.5px]">
            More ways to find someone worth meeting.
          </h2>
          <p className="max-w-110 mx-auto lg:mx-0 text-white text-lg leading-[130%] font-sans">
            Matching & likes, Nearby, and filters that put you in control of who you see and how you see them.
          </p>
          <div className="flex flex-row flex-wrap items-start justify-center lg:justify-start gap-2.5 pt-2 w-full">
            {filterLabels.map((label) => (
              <FilterPill key={label} tone="dark">
                {label}
              </FilterPill>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Section 5: Let Your Profile Say More (light, floral) ---------- */

function ProfileSayMore() {
  return (
    <section className="relative w-full flex flex-col items-center bg-[#F1E6EF] overflow-hidden isolate">
      <div className="w-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 py-16 lg:py-30">
        <div className={SPLIT_ROW}>
          <div className={`${SPLIT_COL} flex flex-col items-start justify-center gap-4 text-center lg:text-left`}>
            <h2 className="w-full font-serif font-bold text-[#FE009B] text-3xl sm:text-4xl lg:text-[54px] leading-[130%] tracking-[-0.5px]">
              Let your profile say more.
            </h2>
            <p className="max-w-84.5 mx-auto lg:mx-0 text-[#090909] text-lg leading-[130%] font-sans">
              Sometimes the best connection is the one you weren't looking for.
            </p>
            <div className="flex flex-row flex-wrap items-start justify-center lg:justify-start gap-2.5 pt-2 w-full">
              {filterLabels.map((label) => (
                <FilterPill key={label} tone="light">
                  {label}
                </FilterPill>
              ))}
            </div>
          </div>

          <div className={`${SPLIT_COL} flex justify-center items-center`}>
            <img src={shakePhoneImage} alt="Shake your phone feature preview" className={PHONE_IMG} />
          </div>
        </div>
      </div>

      {/* Floral strip: fixed 207px tall per spec, full-bleed, image not stretched/cropped oddly */}
      <div
        className="w-full h-32 sm:h-40 lg:h-51.75 bg-cover bg-bottom shrink-0"
        style={{ backgroundImage: `url(${flowersImage})` }}
      />
    </section>
  );
}

/* ---------- Section 6: Final CTA ---------- */
function FinalCTA() {
  return (
    <section
      className="relative w-full min-h-[720px] lg:h-[720px] flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 py-16 lg:py-[120px] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${ctaImage})`,
      }}
    >
      {/* div.wrap: 1240px max, 20px gap per spec */}
      <div className="relative z-10 w-full max-w-[1240px] flex flex-col items-center gap-5 px-2 sm:px-8 text-center">
        {/* h2.serif: the 546px width is what forces the natural two-line
            wrap at 88px in Figma — keep that width on lg so the break
            matches, but let it size fluidly below that so it never
            overflows small screens (fixes the earlier cramped 88px text) */}
        <h2 className="font-['DM_Serif_Display'] font-normal text-white text-4xl sm:text-6xl lg:text-[88px] leading-[1.1] lg:leading-[90px] tracking-[-0.88px] lg:w-[546px] mx-auto">
          Ready to meet differently?
        </h2>
        {/* p.reveal: 318px per spec, centered */}
        <p className="font-['Plus_Jakarta_Sans'] font-normal text-white/60 text-[17px] leading-[21px] lg:w-[318px] mx-auto">
          Shake things up. See where it takes you.
        </p>
        {/* a.btn: exact 129x51 box with 15px/28px padding per spec */}
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

export default function Home() {
  return (
    <>
      <Navbar theme="dark" />
      <main className="w-full">
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
        <Hero />
        <HowItWorks />
        <Shake />
        <MoreWays />
        <ProfileSayMore />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}