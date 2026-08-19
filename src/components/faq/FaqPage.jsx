import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';

const CATEGORIES = [
  'Getting Started',
  'Your Profile',
  'Matches & Connections',
  'Messages',
  'Safety & Privacy',
  'Payments',
  'Account',
];

const FAQS_BY_CATEGORY = {
  'Getting Started': [
    { q: 'What is Wiviy?', a: 'Wiviy is a premium dating application designed to foster genuine, meaningful relationships through prompt-based questions and authentic profiling.' },
    { q: 'How does Wiviy work?', a: 'We use a smart matchmaking system that pairs individuals based on lifestyle habits, coffee preferences, core values, and communication styles.' },
    { q: 'How do I create a Wiviy profile?', a: 'Simply sign up using your phone number or email, fill out your profile categories (such as vibe, coffee choices, lifestyle), and upload clear, verified photos.' },
    { q: 'Is Wiviy free to use?', a: 'Yes! The core functionality including profile creation, messaging matching members, and standard search filters is completely free.' },
    { q: 'What devices does Wiviy support?', a: 'Wiviy is available on iOS (App Store) and Android (Google Play) devices. We support iOS 15+ and Android 8.0+.' },
  ],
  'Your Profile': [
    { q: 'How do I edit my profile details?', a: 'Go to your Profile tab, click the edit icon, and modify your categories, prompt answers, or about section.' },
    { q: 'How many photos can I upload?', a: 'You can upload up to 6 high-quality photos. We recommend clear, well-lit portraits for best matching outcomes.' },
    { q: 'What are prompt categories?', a: 'Prompt categories include "What\'s your vibe?", "Lifestyle & habits", and "Your values & goals". They help verify and enrich your personality description.' },
  ],
  'Matches & Connections': [
    { q: 'How do I get matches?', a: 'Matches happen when two members like each other. You can browse suggested profiles or view members matching your lifestyle filters.' },
    { q: 'What is match percentage?', a: 'Match percentage indicates your compatibility index calculated from shared habits, core values, and general lifestyle choices.' },
  ],
  'Messages': [
    { q: 'Are messages encrypted?', a: 'Yes, all chat conversations on Wiviy are securely encrypted to maintain your personal safety and conversation discretion.' },
    { q: 'How do I report an abusive message?', a: 'Long-press any message bubbles or click the report icon inside the chat menu to escalate inappropriate behavior directly to our moderators.' },
  ],
  'Safety & Privacy': [
    { q: 'Is my personal data safe?', a: 'Absolutely. We comply with modern privacy policies and encrypt payment credentials. We never sell or share user data.' },
    { q: 'What is verified status?', a: 'Verified status indicates that the member has completed a live selfie verification test to confirm they are the person in their photos.' },
  ],
  'Payments': [
    { q: 'What billing methods are available?', a: 'We support Apple In-App Purchases, Google Play Billing, and standard credit/debit card processors.' },
  ],
  'Account': [
    { q: 'How do I delete my account?', a: 'Navigate to Settings > Account Settings > Delete Account. This will permanently clear your match logs, photos, and messages.' },
  ]
};

export default function FaqPage({ setCurrentPage }) {
  const [activeCategory, setActiveCategory] = useState('Getting Started');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const currentFaqs = FAQS_BY_CATEGORY[activeCategory] || [];

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative w-full bg-white pt-44 pb-20 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden select-none">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <span className="text-[#a3a3a3] text-[12px] font-bold tracking-[2px] uppercase mb-4">FREQUENTLY ASKED QUESTIONS</span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-[72px] font-black text-[#111] tracking-tight leading-[1.05] mb-6">
            Questions? We've Got{' '}
            <span className="relative inline-block px-3">
              <span className="absolute inset-0 bg-[#D2F026] -rotate-[0.5deg] rounded" />
              <span className="relative z-10 text-zinc-950">Answers.</span>
            </span>
          </h1>
          <p className="text-zinc-500 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
            Here's what you need to know about Wiviy, from getting started to finding meaningful connections.
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-lg mb-8">
            <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your questions..."
              className="w-full pl-12 pr-28 py-4 rounded-full border border-zinc-200 bg-zinc-50 text-sm text-zinc-800 placeholder-zinc-400 outline-none focus:border-zinc-400 transition-colors shadow-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#111] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:opacity-90 transition-all cursor-pointer">
              Search
            </button>
          </div>

          {/* Categories Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setExpandedFaq(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#D2F026] border-[#D2F026] text-[#111]'
                    : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ GRID SECTION ========== */}
      <section className="w-full bg-white py-12 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">
          
          {/* Left Navigation Topics */}
          <aside className="sticky top-32 hidden lg:flex flex-col gap-2 border-l border-zinc-100 pl-4 select-none">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Explore Topics</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setExpandedFaq(null);
                }}
                className={`text-left text-sm py-1.5 transition-colors cursor-pointer ${
                  activeCategory === cat ? 'font-bold text-[#111]' : 'text-zinc-500 hover:text-[#111]'
                }`}
              >
                {cat}
              </button>
            ))}
          </aside>

          {/* Right FAQs list */}
          <div>
            <span className="text-[#a3a3a3] text-[11px] font-bold tracking-[2px] uppercase mb-2 block font-mono">
              ✦ {activeCategory.toUpperCase()}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#111] tracking-tight mb-8">
              Everything You Need to Know
            </h2>

            <div className="flex flex-col gap-3">
              {currentFaqs.map((faq, i) => (
                <div key={i} className="border border-zinc-100 rounded-2xl overflow-hidden transition-all">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-zinc-50 transition-colors"
                  >
                    <span className="font-bold text-[#111] text-sm sm:text-base">{faq.q}</span>
                    {expandedFaq === i ? (
                      <ChevronUp size={16} className="text-zinc-400" />
                    ) : (
                      <ChevronDown size={16} className="text-zinc-400" />
                    )}
                  </button>
                  {expandedFaq === i && (
                    <div className="px-5 pb-5 text-zinc-500 text-sm leading-relaxed border-t border-zinc-50/50 pt-3 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== PEOPLE ASK THESE A LOT ========== */}
      <section className="w-full bg-[#FAFAF8] py-20 px-6 sm:px-12 md:px-16 lg:px-24 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-zinc-400 text-xs font-bold tracking-widest uppercase block mb-2">✦ MOST VISIT</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#111] tracking-tight leading-[1.08]">
              People Ask Us These a Lot
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { q: 'How do I edit my profile?', desc: 'Manage your photos, bio and prompts options.', route: 'faq', action: 'Read answer' },
              { q: 'How do I report someone?', desc: 'Learn how to report positive safety.', route: 'support', action: 'Read answer' },
              { q: 'How do I delete my account?', desc: 'Everything you need to know before leaving Wiviy.', route: 'faq', action: 'Read answer' },
              { q: 'How do I contact support?', desc: 'Our customer service options are active 24/7.', route: 'support', action: 'Read answer' },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-zinc-200/60 shadow-sm flex flex-col justify-between h-[180px]">
                <div>
                  <h4 className="font-bold text-[#111] text-sm mb-2">{card.q}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">{card.desc}</p>
                </div>
                <button
                  onClick={() => {
                    setCurrentPage(card.route);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-zinc-800 hover:text-black flex items-center gap-1 cursor-pointer"
                >
                  {card.action} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== COULDN'T FIND ANSWER SECTION ========== */}
      <section className="w-full bg-white py-20 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto bg-[#FDF9F2] rounded-[32px] overflow-hidden border border-zinc-200/50">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-center">
            {/* Left Content */}
            <div className="p-8 sm:p-12 text-left">
              <span className="text-[#a3a3a3] text-[11px] font-bold tracking-[2px] uppercase mb-3 block">✦ STILL CONFUSED?</span>
              <h3 className="font-serif text-3xl sm:text-4xl font-black text-[#111] mb-4 leading-tight">
                Couldn't Find Your Answer?
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-sm">
                No worries. Talk to us directly and our support team will help you figure it out.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setCurrentPage('support');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#D2F026] text-[#111] font-bold px-6 py-3 rounded-full text-xs flex items-center justify-center gap-1.5 hover:opacity-90 transition-all cursor-pointer shadow-sm"
                >
                  Contact support →
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('support');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white text-[#111] font-bold px-6 py-3 rounded-full text-xs border border-zinc-200 hover:bg-zinc-50 transition-all cursor-pointer"
                >
                  Visit Help Center
                </button>
              </div>
            </div>
            {/* Right Image */}
            <div className="h-full min-h-[250px] md:min-h-full">
              <img
                src="/assets/page-1/ChatGPT Image May 13, 2026, 10_59_16 AM 1.png"
                alt="Support couple"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== QUESTIONS ABOUT STAYING SAFE BANNER ========== */}
      <section className="w-full bg-[#D2F026] py-16 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-[#111]/50 text-xs font-bold tracking-widest uppercase block mb-1">✦ YOUR SAFETY MATTERS</span>
            <h3 className="font-serif text-3xl font-black text-[#111] tracking-tight">Questions About Staying Safe?</h3>
          </div>
          <button
            onClick={() => {
              setCurrentPage('support');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#111] text-white font-bold px-8 py-4 rounded-full text-xs hover:opacity-90 transition-all cursor-pointer"
          >
            Find safety resources →
          </button>
        </div>
      </section>

      {/* ========== READY TO FIND CONNECTION BANNER ========== */}
      <section className="w-full bg-white py-16 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto bg-[#FDFDE8] rounded-[32px] p-8 sm:p-12 text-center border border-[#D2F026]/30">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#111] tracking-tight leading-[1.08] mb-4">
            Ready to Find Your Meaningful Connection?
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base max-w-md mx-auto mb-8">
            Now that we've answered your questions, maybe it's time to start your own story.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.with.app', '_blank')}
              className="bg-[#111] text-white font-bold px-8 py-4 rounded-full text-sm hover:opacity-90 transition-all cursor-pointer"
            >
              Join Wiviy
            </button>
            <button
              onClick={() => {
                setCurrentPage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white text-[#111] font-bold px-8 py-4 rounded-full text-sm border border-zinc-200 hover:bg-zinc-50 transition-all cursor-pointer"
            >
              Learn how it works
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
