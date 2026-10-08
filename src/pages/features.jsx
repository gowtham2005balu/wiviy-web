import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

import heroImage from '../assets/hero.png';
import shakePhoneImage from '../assets/shake-phone.png';
import flowersImage from '../assets/flowers-bg.png';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';
import scrapAlia from '../assets/scrap-alia.png';
import scrapJohn from '../assets/scrap-john.png';
import matchRam from '../assets/match-ram.png';
import matchSwathi from '../assets/match-swathi.png';
import nearbyMap from '../assets/nearby-map.png';
import icebreakerPhone from '../assets/icebreaker-phone.png';
import safetyVerification from '../assets/safety-verification.png';
import safetySupport from '../assets/safety-support.png';
import safetyControl from '../assets/safety-control.png';
import ctaImage from '../assets/final-cta-outdoor.png';

/* ---------- Shared ---------- */

const SECTION_WRAP = 'w-full max-w-[1240px] mx-auto px-6 sm:px-8';

/* ---------- 01 HERO ---------- */
function FeaturesHero() {
  return (
    <section className="relative w-full bg-[#10100A] overflow-hidden flex flex-col items-center pt-20 sm:pt-32 lg:pt-[190px] pb-16 lg:pb-[60px] px-6 sm:px-16 lg:px-[100px] isolate lg:min-h-[911px]">
      {/* Decorative layer: 1440px design canvas, centered, desktop only */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-full z-0 pointer-events-none"
      >
        {/* It's a match cluster (left) */}
        <img
          src={feature1}
          alt=""
          className="absolute object-contain"
          style={{ left: 55, top: 210, width: 236, height: 229 }}
        />
        {/* Heart blob (bottom-left) */}
        <img
          src={feature2}
          alt=""
          className="absolute object-contain"
          style={{ left: 330, top: 630, width: 213, height: 206 }}
        />
        {/* Avatars + chat bubble (top-right) */}
        <img
          src={feature3}
          alt=""
          className="absolute object-contain"
          style={{ left: 1128, top: 190, width: 247, height: 254 }}
        />
        {/* Phone card + "Shake to discover" (bottom-right) */}
        <img
          src={feature4}
          alt=""
          className="absolute object-contain"
          style={{ left: 1036, top: 568, width: 260, height: 268 }}
        />
      </div>

      {/* Content */}
      <div className={`${SECTION_WRAP} relative z-10 flex flex-col items-center gap-5 text-center`}>
        <h1 className="max-w-[760px] font-['DM_Serif_Display'] font-normal text-white text-4xl sm:text-6xl lg:text-[90px] leading-[1.05] lg:leading-[90px] tracking-[-0.9px]">
          Meet your people. <br className="hidden sm:block" />
          Your way.
        </h1>
        <p className="max-w-[520px] text-[#B2B2B0] text-base sm:text-[17.5px] leading-[1.6] font-['Plus_Jakarta_Sans']">
          From your first hello to finding someone nearby, Wiviy gives you more ways to connect — with the freedom
          to make dating feel like your own.
        </p>
        <button
          type="button"
          onClick={() => window.open('#', '_blank')}
          className="mt-1 w-[120px] h-[46px] bg-[#D2F026] text-[#12140F] font-bold text-base rounded-full flex items-center justify-center hover:opacity-90 active:scale-95 transition-all cursor-pointer"
        >
          Get the app
        </button>
      </div>
    </section>
  );
}

/* ---------- 03 PROFILE ---------- */

function ScrapCard({ image, name, tagline, tags, note1, note2, tint }) {
  return (
    <div className="w-full max-w-130 pt-8 sm:pt-13">
      <div
        className="relative box-border p-6 rounded-[20px] border-2 border-[#171512] shadow-[8px_8px_0px_#D2F026] flex flex-col gap-1.5"
        style={{ background: 'rgba(42,29,40,0.6)' }}
      >
        <div
          className="w-full aspect-[468/432] rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${image})`, backgroundColor: tint }}
        />
        <div className="flex flex-col items-center pt-2.5 gap-1">
          <span className="font-sans font-bold text-2xl text-white">{name}</span>
          <p className="text-center font-sans text-[13.5px] text-[#DEDEDE]">{tagline}</p>
        </div>
        <div className="flex flex-row flex-wrap items-start justify-center gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="box-border px-3 py-1.5 bg-white border border-[#E8E6DD] rounded-full font-sans font-bold text-xs text-[#514B47]"
            >
              {tag}
            </span>
          ))}
        </div>

        {note1 && (
          <span className="absolute -right-6 top-5 box-border px-3.5 py-2.5 bg-[#D2F026] border-2 border-[#171512] rounded-[10px] shadow-[4px_4px_0px_rgba(23,21,18,0.12)] rotate-[-6deg] font-sans font-bold text-[14.5px] text-[#171512] whitespace-nowrap">
            {note1}
          </span>
        )}
        {note2 && (
          <span className="absolute -left-8 -bottom-3 box-border px-3.5 py-2.5 bg-white border-2 border-[#171512] rounded-[10px] shadow-[4px_4px_0px_rgba(23,21,18,0.12)] rotate-[5deg] font-sans font-bold text-[14.5px] text-[#171512] whitespace-nowrap">
            {note2}
          </span>
        )}
      </div>
    </div>
  );
}

function Profile() {
  return (
    <section className="w-full bg-white flex flex-col items-center py-16 lg:py-[120px] px-6 sm:px-16 lg:px-[100px]">
      <div className={`${SECTION_WRAP} flex flex-col items-center gap-8 lg:gap-4.5`}>
        <div className="flex flex-col items-center gap-4 max-w-[520px] text-center">
          <h2 className="font-sans font-bold text-[#171512] text-3xl sm:text-4xl lg:text-[52px] leading-[1.08] tracking-[-0.5px]">
            More than a photo.
          </h2>
          <p className="max-w-[440px] text-[#5E5A57] text-base sm:text-lg leading-[1.5] font-sans">
            Show people what makes you, you. Build a profile that gives others something real to connect with.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4.5 pt-6">
          <ScrapCard
            image={scrapAlia}
            name="Alia"
            tagline="Photography · late-night talks · terrible karaoke"
            tags={['Photography', 'Hiking', 'Vinyl records']}
            note1="dog person"
            note2="coffee before conversation"
            tint="#F1E6EF"
          />
          <ScrapCard
            image={scrapJohn}
            name="John"
            tagline="Photography · late-night talks · terrible karaoke"
            tags={['Photography', 'Hiking', 'Vinyl records']}
            note1="dog person"
            note2="coffee before conversation"
            tint="#DFE7F6"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- 04 MATCHING & LIKES ---------- */

function MatchingLikes() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 sm:px-10">
      <div className={`${SECTION_WRAP} bg-[#DFE7F6] rounded-[32px] sm:rounded-[48px] lg:rounded-[64px] py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-[60px] flex flex-col lg:flex-row items-center gap-10 lg:gap-15`}>
        <div className="w-full lg:flex-1 lg:basis-139.5 flex flex-col items-start justify-center gap-6 text-left">
          <h2 className="font-sans font-bold text-[#171512] text-3xl sm:text-4xl lg:text-[58px] leading-[0.97] max-w-115">
            When the like goes both ways.
          </h2>
          <p className="max-w-115 text-[#5E5A57] text-base sm:text-lg leading-[1.5] font-sans">
            Like someone you're into. If they like you back, you've got a match.
          </p>
        </div>

        <div className="w-full lg:flex-1 lg:basis-139.5 flex flex-col items-center gap-4.5">
          <div className="flex flex-row flex-wrap items-start justify-center gap-3.5">
            <span className="box-border flex items-center justify-center px-4.5 py-2.5 bg-white border border-black/15 rounded-full font-sans font-bold text-base text-[#171512]">
              Like
            </span>
            <span className="flex items-center justify-center text-[#171512] font-bold">→</span>
            <span className="box-border flex items-center justify-center px-4.5 py-2.5 bg-[#171512] border border-[#171512] rounded-full font-sans font-bold text-base text-[#D2F026]">
              Match
            </span>
            <span className="flex items-center justify-center text-[#171512] font-bold rotate-180">→</span>
            <span className="box-border flex items-center justify-center px-4.5 py-2.5 bg-white border border-black/15 rounded-full font-sans font-bold text-base text-[#171512]">
              Like
            </span>
          </div>

          <div className="relative w-full max-w-130 flex items-center justify-center py-10">
            <img
              src={matchRam}
              alt="Ram's profile card"
              className="w-32 sm:w-40 lg:w-50 h-auto rounded-2xl border-2 border-[#171512] shadow-[6px_6px_0px_rgba(23,21,18,0.1)] -rotate-6 -mr-6 z-0"
            />
            <span className="z-10 text-3xl">💚</span>
            <img
              src={matchSwathi}
              alt="Swathi's profile card"
              className="w-32 sm:w-40 lg:w-50 h-auto rounded-2xl border-2 border-[#171512] shadow-[6px_6px_0px_rgba(23,21,18,0.1)] rotate-6 -ml-6 z-0"
            />
          </div>

          <p className="font-serif font-semibold text-[#171512] text-2xl">
            It's a{' '}
            <span className="inline-block bg-white rounded-md px-2.5 py-0.5">match!</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- 05 NEARBY ---------- */

function Nearby() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 sm:px-10 pt-8 sm:pt-10">
      <div className={`${SECTION_WRAP} bg-[#F0EAF2] rounded-[32px] sm:rounded-[48px] lg:rounded-[64px] py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-[60px] flex flex-col lg:flex-row items-center gap-10 lg:gap-15`}>
        <div className="w-full lg:flex-1 lg:basis-152 rounded-3xl overflow-hidden bg-[#2A1D28] shadow-[6px_6px_0px_rgba(23,21,18,0.1)] p-2 sm:p-3">
          <img src={nearbyMap} alt="Nearby map preview" className="w-full h-auto rounded-2xl object-cover" />
        </div>

        <div className="w-full lg:flex-1 lg:basis-143 flex flex-col items-start lg:items-end justify-center gap-6 text-left lg:text-right">
          <h2 className="w-full font-sans font-bold text-[#171512] text-3xl sm:text-4xl lg:text-[58px] leading-[0.97]">
            What's happening around you?
          </h2>
          <p className="max-w-102.5 ml-0 lg:ml-auto text-[#5E5A57] text-base sm:text-lg leading-[1.5] font-sans">
            Discover conversations and people around you. Sometimes the best connection is closer than you think.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- 06 ICEBREAKERS ---------- */

function Icebreakers() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 sm:px-10 pt-8 sm:pt-10">
      <div className={`${SECTION_WRAP} bg-[#DFF26F]/30 rounded-[32px] sm:rounded-[48px] lg:rounded-[64px] py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-[60px] flex flex-col lg:flex-row items-center gap-10 lg:gap-15`}>
        <div className="w-full lg:flex-1 lg:basis-147.5 flex flex-col items-start justify-center gap-4.5 text-left">
          <h2 className="font-sans font-bold text-[#171512] text-3xl sm:text-4xl lg:text-[58px] leading-[0.97]">
            Say something worth replying to.
          </h2>
          <p className="max-w-102.5 text-[#5E5A57] text-base sm:text-lg leading-[1.5] font-sans">
            Not sure how to start? Icebreakers give you an easy way into the conversation.
          </p>
        </div>

        <div className="w-full lg:flex-1 lg:basis-147.5">
          <img
            src={icebreakerPhone}
            alt="Icebreaker chat preview"
            className="w-full max-w-147.5 h-auto rounded-tl-[60px] lg:rounded-tl-[138px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- 07 SWIPE CONTROLS & FILTERS ---------- */

const filterChips = ['Age', 'Distance', 'Interests', 'Preferences', 'More +'];

function SwipeControls() {
  return (
    <section className="w-full bg-[#0F100C] flex flex-col items-center justify-center py-16 sm:py-24 lg:py-[130px] px-6 sm:px-16 lg:px-[100px]">
      <div className={`${SECTION_WRAP} flex flex-col items-center gap-4 text-center`}>
        <h2 className="max-w-[520px] font-serif font-medium text-white text-3xl sm:text-4xl lg:text-[52px] leading-[1.08] tracking-[-0.52px]">
          Find what feels right.
        </h2>
        <p className="max-w-120 text-white/62 text-base leading-[1.45] font-sans">
          Shape your discovery experience with swipe controls and filters that help you focus on the people and
          connections you're actually looking for.
        </p>

        <div className="flex flex-row flex-wrap items-start justify-center gap-3 pt-6">
          {filterChips.map((chip) => (
            <span
              key={chip}
              className="box-border px-5 py-2.75 border border-white/25 rounded-full font-sans font-bold text-base text-white"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center gap-4.5 pt-9">
          <span className="font-sans font-bold text-lg tracking-[0.6px] text-white/40">FILTER</span>
          <span className="font-sans font-bold text-white/25">→</span>
          <span className="font-sans font-bold text-lg tracking-[0.6px] text-white/40">DISCOVER</span>
          <span className="font-sans font-bold text-white/25">→</span>
          <span className="font-sans font-bold text-lg tracking-[0.6px] text-[#D2F026]">SWIPE</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- 09 SAFETY ---------- */

const safetyCards = [
  {
    kicker: 'Verification',
    title: 'Real people first.',
    description: 'Verification helps you feel confident there\u2019s a real person behind the profile you\u2019re talking to.',
    image: safetyVerification,
    bg: '#F4F8E8',
  },
  {
    kicker: 'Support',
    title: 'Help, close at hand.',
    description: 'Safety and support resources are built into the app, not buried in a menu.',
    image: safetySupport,
    bg: '#F5EDF8',
  },
  {
    kicker: 'Control',
    title: 'Stay in control.',
    description: 'Block, unmatch, or report anything that crosses the line — whenever you need to.',
    image: safetyControl,
    bg: '#EEF5FA',
  },
];

function Safety() {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center py-16 lg:py-[120px] px-6 sm:px-16 lg:px-20">
      <div className={`${SECTION_WRAP} flex flex-col items-center gap-6`}>
        <div className="flex flex-col items-center gap-4.5 max-w-160 text-center">
          <h2 className="font-serif font-bold text-[#12140F] text-3xl sm:text-4xl lg:text-[52px] leading-[1.3]">
            Connection feels better when you feel safe.
          </h2>
          <p className="text-[#5E5A57] text-base sm:text-lg leading-[1.5] font-sans">
            Your experience matters. Wiviy gives you tools to manage your connections, report problems and get
            support when you need it.
          </p>
        </div>

        {/* Horizontally scrollable row on small screens, matching the
            spec's overflow-x behavior; snaps to a static grid at lg */}
        <div className="w-full flex flex-row lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible pt-6 lg:pt-10 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory">
          {safetyCards.map((card) => (
            <div
              key={card.title}
              className="shrink-0 w-72 sm:w-80 lg:w-auto snap-center flex flex-col items-center gap-6 p-6 rounded-2xl"
              style={{ background: card.bg }}
            >
              <div className="w-full flex flex-col items-start gap-2">
                <span className="font-sans font-bold text-sm tracking-[1.15px] uppercase text-[#514B4A]">
                  {card.kicker}
                </span>
                <h3 className="font-serif font-semibold text-[#1B1817] text-2xl sm:text-[32px] leading-[1.1] tracking-[-0.015em]">
                  {card.title}
                </h3>
                <p className="text-[#5B5F53] text-base sm:text-lg leading-[1.3] font-sans">
                  {card.description}
                </p>
              </div>
              <img src={card.image} alt={card.title} className="w-full max-w-70 h-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 12 FINAL CTA ---------- */

function FeaturesFinalCTA() {
  return (
    <section
      className="relative w-full min-h-[420px] lg:h-[552.62px] flex flex-col items-center justify-center py-16 lg:py-[120px] px-6 sm:px-16 lg:px-[100px] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${ctaImage})`,
      }}
    >
      <div className="relative z-10 w-full max-w-[1240px] flex flex-col items-center gap-5 px-2 sm:px-8 text-center">
        <h2 className="font-['DM_Serif_Display'] font-normal text-white text-4xl sm:text-6xl lg:text-[88px] leading-[1.1] lg:leading-[90px] tracking-[-0.88px] lg:w-[640px] mx-auto">
          Ready to shake things up?
        </h2>
        <p className="font-['Plus_Jakarta_Sans'] font-normal text-white/60 text-[17px] leading-[21px] lg:w-[415px] mx-auto">
          Start discovering people and connections your way.
        </p>
        <button
          type="button"
          onClick={() => window.open('#', '_blank')}
          className="mt-2 box-border w-[210px] h-[51px] px-[28px] py-[15px] bg-[#D2F026] text-[#171512] font-['Plus_Jakarta_Sans'] font-bold text-[15px] leading-[19px] rounded-full flex items-center justify-center hover:opacity-90 active:scale-95 transition-all cursor-pointer"
        >
          Start exploring Wiviy
        </button>
      </div>
    </section>
  );
}

/* ---------- 14 FOOTER (shared with about.jsx) ---------- */

const footerColumns = [
  { title: 'Company', links: ['About Us', 'How It Works', 'Careers', 'Blog', 'Contact Us'] },
  { title: 'Support', links: ['Help Center', 'Safety'] },
  {
    title: 'Features',
    links: [
      'Sign up & verification',
      'Profile',
      'Matching & likes',
      'Nearby',
      'Icebreakers',
      'Swipe controls & filters',
      'Premium plans',
      'Safety & support',
    ],
  },
  { title: 'Legal', links: ['Terms of Service', 'Privacy Policy'] },
];



/* ---------- Page ---------- */

export default function Features() {
  return (
    <>
      <Navbar theme="dark" />
      <main className="w-full overflow-x-hidden">
        <FeaturesHero />
        <Profile />
        <MatchingLikes />
        <Nearby />
        <Icebreakers />
        <SwipeControls />
        <Safety />
        <FeaturesFinalCTA />
        <Footer />
      </main>
    </>
  );
}