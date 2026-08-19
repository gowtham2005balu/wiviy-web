import React, { useState } from 'react';
import { ChevronRight, ArrowUpRight, Paperclip } from 'lucide-react';

const TOPICS = [
  { title: 'Account & Profile', desc: 'Updates to your profile details, settings or account access.' },
  { title: 'Matches & Messages', desc: 'Issues with loading conversations, matches, or likes.' },
  { title: 'Safety & Reporting', desc: 'Report members, suspicious behavior or security concerns.' },
  { title: 'Payments & Subscription', desc: 'Questions about payments, refunds, or auto-renewals.' },
  { title: 'Technical Issue', desc: 'Something isn\'t loading, app crashes, or server bugs.' },
  { title: 'Something Else', desc: 'If none of the above categories describe your request.' },
];

export default function SupportPage({ setCurrentPage }) {
  const [activeTopic, setActiveTopic] = useState(0);

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative w-full bg-[#FCFAF6] pt-44 pb-20 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden select-none">
        {/* Heart decorations */}
        <div className="absolute top-36 left-[15%] text-[#D2F026] opacity-60 hidden md:block rotate-[-12deg]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <div className="absolute top-44 right-[18%] text-[#D2F026] opacity-60 hidden md:block rotate-[15deg]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <span className="text-[#8A9800] text-[12px] font-extrabold tracking-[2px] uppercase mb-4 leading-none font-mono">
            ✦ CONTACT SUPPORT
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-[68px] font-black text-[#111111] tracking-tight leading-[1.05] mb-6">
            We're here to{' '}
            <span className="relative inline-block px-3">
              <span className="absolute inset-0 bg-[#d2ff00] -rotate-[0.5deg] rounded" />
              <span className="relative z-10">help</span>
            </span>
            <span className="inline-block ml-1">.</span>
          </h1>
          <p className="text-zinc-500 text-lg sm:text-xl max-w-xl leading-relaxed mb-4">
            Something not working? Have a question? Tell us what's going on and we'll help you figure it out.
          </p>
          <span className="text-zinc-400 text-sm font-medium">Usually we get back to you within 24 hours.</span>
        </div>
      </section>

      {/* ========== MAIN FORM SECTION ========== */}
      <section className="w-full bg-[#FCFAF6] pb-24 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-start mt-8">
            
            {/* Left: What can we help with */}
            <div className="text-left">
              <span className="text-zinc-400 text-[11px] font-bold tracking-[2px] uppercase mb-2 block font-mono">
                ✦ LET'S SORT IT OUT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#111111] tracking-tight mb-4">
                What can we help you with?
              </h2>
              <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                Choose a topic below so we can get your request to the right team.
              </p>

              <div className="flex flex-col gap-3.5">
                {TOPICS.map((topic, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTopic(i)}
                    className={`w-full flex items-center justify-between p-5 rounded-[20px] border text-left transition-all duration-200 cursor-pointer ${
                      activeTopic === i
                        ? 'bg-white border-[#D2F026] shadow-[0px_8px_24px_rgba(0,0,0,0.03)]'
                        : 'bg-white/50 border-zinc-150 hover:border-zinc-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Green circle indicator */}
                      <div className="w-4 h-4 rounded-full bg-[#D2F026]/20 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#8A9800]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111111] text-sm sm:text-base leading-none mb-1.5">{topic.title}</h4>
                        <p className="text-zinc-400 text-xs sm:text-sm font-medium leading-tight max-w-[340px]">{topic.desc}</p>
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-zinc-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white rounded-[32px] p-8 sm:p-10 border border-zinc-200/50 shadow-md">
              <h3 className="font-serif text-2xl font-black text-[#111111] mb-2 text-left">Tell Us What's Going On</h3>
              <p className="text-zinc-500 text-sm mb-8 text-left leading-relaxed">
                Fill in the details below and our team will take it from there.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6 text-left">
                <div>
                  <label className="text-[#111111] text-xs font-bold uppercase tracking-wider mb-2 block font-mono">
                    <span className="text-[#8A9800] mr-1">●</span> EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50/50 text-sm outline-none focus:bg-white focus:border-[#D2F026] transition-all"
                  />
                </div>
                
                <div>
                  <label className="text-[#111111] text-xs font-bold uppercase tracking-wider mb-2 block font-mono">
                    <span className="text-[#8A9800] mr-1">●</span> SUBJECT
                  </label>
                  <input
                    type="text"
                    placeholder="What do you need help with?"
                    className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50/50 text-sm outline-none focus:bg-white focus:border-[#D2F026] transition-all"
                  />
                </div>

                <div>
                  <label className="text-[#111111] text-xs font-bold uppercase tracking-wider mb-2 block font-mono">
                    <span className="text-[#8A9800] mr-1">●</span> MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us a little more about what happened..."
                    className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50/50 text-sm outline-none focus:bg-white focus:border-[#D2F026] transition-all resize-none"
                  />
                </div>

                <div>
                  <label className="text-[#111111] text-xs font-bold uppercase tracking-wider mb-2 block font-mono">
                    <span className="text-zinc-400 mr-1">●</span> ATTACHMENT
                  </label>
                  <p className="text-zinc-400 text-xs mb-3">Add a screenshot if it helps explain the issue.</p>
                  <label className="flex items-center justify-center gap-2 px-5 py-4 rounded-xl border-2 border-dashed border-zinc-200 hover:border-zinc-400 bg-zinc-50/50 hover:bg-white text-sm text-zinc-500 cursor-pointer transition-all">
                    <Paperclip size={16} />
                    <span>+ Attach File</span>
                    <input type="file" className="hidden" />
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-4 rounded-full bg-[#D2F026] text-[#111111] font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-md"
                >
                  Send Request →
                </button>
                <p className="text-zinc-400 text-[11px] text-center leading-normal">
                  By submitting request you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ========== NO QUESTION TOO SMALL ========== */}
      <section className="w-full bg-white py-20 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-zinc-100">
        <div className="max-w-3xl mx-auto text-center select-none">
          <span className="text-zinc-400 text-xs font-bold tracking-widest uppercase block mb-3 font-mono">
            we've got you ♡
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#111111] tracking-tight leading-[1.08] mb-4">
            No question is too small.
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto leading-relaxed mb-6">
            Whether something isn't working or you simply need a little guidance, we're happy to help.
          </p>
          <div className="w-8 h-8 rounded-full bg-[#D2F026] flex items-center justify-center mx-auto shadow-sm">
            <span className="text-xs text-zinc-950">♡</span>
          </div>
        </div>
      </section>

      {/* ========== HELP CENTER CARDS ========== */}
      <section className="w-full bg-white pb-20 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          
          {/* FAQ Link Card */}
          <div className="bg-[#FDF9F2] rounded-[32px] p-8 sm:p-12 text-center border border-zinc-200/50">
            <span className="text-[#8A9800] text-[11px] font-bold tracking-[2px] uppercase mb-3 block font-mono">
              ✦ BEFORE YOU SEND
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#111111] mb-3">
              Maybe We've Already Answered It?
            </h3>
            <p className="text-zinc-500 text-sm mb-8 max-w-md mx-auto leading-relaxed">
              You might find a quick answer in our help center.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  setCurrentPage('faq');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#111111] text-white font-bold px-6 py-3 rounded-full text-xs flex items-center justify-center gap-1.5 hover:opacity-90 transition-all cursor-pointer"
              >
                Browse Help Center →
              </button>
              <button
                onClick={() => {
                  setCurrentPage('faq');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white text-[#111111] font-bold px-6 py-3 rounded-full text-xs border border-zinc-200 hover:bg-zinc-50 transition-all cursor-pointer"
              >
                Read FAQs
              </button>
            </div>
          </div>

          {/* Safety Warning Card */}
          <div className="bg-[#F0FFB2] rounded-[28px] p-8 flex items-start gap-4 border border-[#D2F026]/30 text-left">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-zinc-200 mt-1 shadow-sm">
              <span className="text-[#8A9800] text-sm">🛡️</span>
            </div>
            <div>
              <span className="text-[#8A9800] text-xs font-bold uppercase tracking-wider font-mono">✦ SAFETY</span>
              <p className="text-zinc-700 text-sm mt-1.5 leading-relaxed font-medium">
                If you're reporting something that makes you feel unsafe, please choose "Safety & Reporting" above so your request can be reviewed appropriately.
              </p>
              <button
                onClick={() => {
                  setCurrentPage('support');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-[#111111] font-bold text-xs mt-3 flex items-center gap-1 hover:underline cursor-pointer"
              >
                Visit Safety Center →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========== REDESIGNED BOTTOM BANNER ========== */}
      <section className="w-full bg-white py-12 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto bg-[#D2F026] rounded-[32px] p-10 sm:p-14 text-center relative overflow-hidden select-none border border-zinc-950/5">
          {/* Decorative icons */}
          <span className="absolute top-8 left-8 text-xl text-zinc-800">✦</span>
          <span className="absolute top-8 right-8 text-xl text-zinc-800">✦</span>
          <span className="absolute bottom-8 left-8 text-xl text-zinc-800">✦</span>
          <span className="absolute bottom-8 right-8 text-xl text-zinc-800">✦</span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight leading-[1.08] mb-4">
            You don't have to<br />figure this out alone.
          </h2>
          <p className="text-zinc-700 text-sm sm:text-base max-w-md mx-auto mb-8 font-medium leading-relaxed">
            Tell us what happened and we'll help you sort it out — usually within 24 hours.
          </p>
          <button
            onClick={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#111111] text-white font-bold px-8 py-4 rounded-full text-sm hover:opacity-90 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 mx-auto shadow-md"
          >
            Back to Wiviy →
          </button>
        </div>
      </section>
    </>
  );
}
