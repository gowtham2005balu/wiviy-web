import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function TermsPage({ setCurrentPage }) {
  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'eligibility', title: 'Who Can Use Wiviy?' },
    { id: 'account', title: 'Your Account' },
    { id: 'conduct', title: 'Using Wiviy Responsibly' },
    { id: 'content', title: 'Your Content' },
    { id: 'privacy', title: 'Privacy Comes First' },
    { id: 'payments', title: 'Subscriptions & Payments' },
    { id: 'disclaimer', title: 'Limitation of Liability' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative w-full bg-white pt-44 pb-20 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden select-none">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <span className="text-[#a3a3a3] text-[12px] font-bold tracking-[2px] uppercase mb-4">TERMS OF SERVICE</span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-[72px] font-black text-[#111] tracking-tight leading-[1.05] mb-6">
            The Ground Rules{' '}
            <span className="relative inline-block px-3">
              <span className="absolute inset-0 bg-[#D2F026] -rotate-[0.5deg] rounded" />
              <span className="relative z-10">Wiviy.</span>
            </span>
          </h1>
          <p className="text-zinc-500 text-lg sm:text-xl max-w-xl leading-relaxed mb-6">
            These terms outline the rules and guidelines for using the Wiviy application and services.
          </p>
          <div className="flex items-center gap-4 text-zinc-400 text-sm">
            <span>Last updated: August 2026</span>
          </div>
        </div>
      </section>

      {/* ========== MAIN CONTENT BLOCK ========== */}
      <section className="w-full bg-white py-12 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">
          
          {/* Left Sidebar Index */}
          <aside className="sticky top-32 hidden lg:flex flex-col gap-2 border-l border-zinc-100 pl-4 select-none">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">On this page</span>
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="text-left text-zinc-500 hover:text-[#111] text-sm py-1.5 transition-colors cursor-pointer"
              >
                {sec.title}
              </button>
            ))}
          </aside>

          {/* Right Content */}
          <div className="flex flex-col gap-16">
            {/* Acceptance */}
            <div id="acceptance" className="scroll-mt-32">
              <h2 className="font-serif text-3xl font-black text-[#111] mb-4">Acceptance of Terms</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                By downloading, installing, or using the Wiviy app, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, you should not access or use the application.
              </p>
              <div className="bg-[#F0FFB2] rounded-[24px] p-6 border border-[#D2F026]/30">
                <p className="text-zinc-700 text-sm font-medium">
                  By using our app, you agree to these terms and promise to follow the rules outlined here.
                </p>
              </div>
            </div>

            {/* Who can use */}
            <div id="eligibility" className="scroll-mt-32">
              <h2 className="font-serif text-3xl font-black text-[#111] mb-4">Who Can Use Wiviy?</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                You must be at least 18 years old to create an account and use the Wiviy platform. By creating an account, you represent and warrant that you are of legal age and have the capacity to enter into this agreement.
              </p>
              <div className="bg-[#F0FFB2] rounded-[24px] p-6 border border-[#D2F026]/30">
                <p className="text-zinc-700 text-sm font-medium">
                  You must be at least 18 years old to use this platform.
                </p>
              </div>
            </div>

            {/* Your Account */}
            <div id="account" className="scroll-mt-32">
              <h2 className="font-serif text-3xl font-black text-[#111] mb-4">Your Account</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate information and keep it up to date.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-zinc-50 rounded-2xl p-5 border border-zinc-100">
                  <h4 className="font-bold text-[#111] text-sm mb-1">Be accurate</h4>
                  <p className="text-zinc-500 text-xs">Use your real name, age, and profile photos.</p>
                </div>
                <div className="bg-zinc-50 rounded-2xl p-5 border border-zinc-100">
                  <h4 className="font-bold text-[#111] text-sm mb-1">Keep it secure</h4>
                  <p className="text-zinc-500 text-xs">Do not share your login details with anyone else.</p>
                </div>
                <div className="bg-zinc-50 rounded-2xl p-5 border border-zinc-100">
                  <h4 className="font-bold text-[#111] text-sm mb-1">One user only</h4>
                  <p className="text-zinc-500 text-xs">Each account is for a single individual.</p>
                </div>
              </div>
            </div>

            {/* Using Responsibly */}
            <div id="conduct" className="scroll-mt-32">
              <h2 className="font-serif text-3xl font-black text-[#111] mb-4">Using Wiviy Responsibly</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                We strive to maintain a safe, welcoming, and authentic community. You agree not to engage in harassing, abusive, deceptive, or malicious behavior on our platform.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Be honest and authentic in your profile details.',
                  'Treat other members with respect and kindness.',
                  'Do not share explicit content without mutual consent.',
                  'Do not use the platform for commercial solicitation or spam.',
                  'Report any suspicious or harmful behavior immediately.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D2F026] mt-2 shrink-0" />
                    <span className="text-zinc-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Banner Section */}
            <div className="w-full bg-[#D2F026] rounded-[28px] p-8 sm:p-10 text-center select-none my-4">
              <h2 className="font-serif text-3xl font-black text-[#111] mb-4">Be Human. Be Respectful.</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left mt-8">
                <div className="bg-white/80 rounded-xl p-4 border border-white/40">
                  <h4 className="font-bold text-[#111] text-xs uppercase mb-1">Respect for all</h4>
                  <p className="text-zinc-600 text-[11px]">Treat everyone with kindness.</p>
                </div>
                <div className="bg-white/80 rounded-xl p-4 border border-white/40">
                  <h4 className="font-bold text-[#111] text-xs uppercase mb-1">Be authentic</h4>
                  <p className="text-zinc-600 text-[11px]">Honest profiles only.</p>
                </div>
                <div className="bg-white/80 rounded-xl p-4 border border-white/40">
                  <h4 className="font-bold text-[#111] text-xs uppercase mb-1">Report abuse</h4>
                  <p className="text-zinc-600 text-[11px]">Help keep the platform safe.</p>
                </div>
                <div className="bg-white/80 rounded-xl p-4 border border-white/40">
                  <h4 className="font-bold text-[#111] text-xs uppercase mb-1">Safety first</h4>
                  <p className="text-zinc-600 text-[11px]">Never share personal credentials.</p>
                </div>
              </div>
            </div>

            {/* Content Responsibility */}
            <div id="content" className="scroll-mt-32">
              <h2 className="font-serif text-3xl font-black text-[#111] mb-4">Your Content Is Your Responsibility</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                You retain ownership of any text, photos, or media you upload. However, you grant us a worldwide license to host, store, and display this content to other users.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-zinc-50 rounded-2xl p-5 border border-zinc-100">
                  <h4 className="font-bold text-[#111] text-sm mb-1">Content ownership</h4>
                  <p className="text-zinc-500 text-xs">You keep the rights to the photos and text you upload.</p>
                </div>
                <div className="bg-zinc-50 rounded-2xl p-5 border border-zinc-100">
                  <h4 className="font-bold text-[#111] text-sm mb-1">User license</h4>
                  <p className="text-zinc-500 text-xs">You grant us permission to display it on the app.</p>
                </div>
              </div>
            </div>

            {/* Privacy */}
            <div id="privacy" className="scroll-mt-32">
              <h2 className="font-serif text-3xl font-black text-[#111] mb-4">Privacy Comes First</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                Our handling of your personal data is subject to our Privacy Policy. We prioritize security and user discretion at every stage.
              </p>
              <div className="bg-[#F0FFB2] rounded-[24px] p-6 border border-[#D2F026]/30">
                <p className="text-zinc-700 text-sm font-medium">
                  We collect and use your data only as described in our Privacy Policy.
                </p>
              </div>
            </div>

            {/* Subscription */}
            <div id="payments" className="scroll-mt-32">
              <h2 className="font-serif text-3xl font-black text-[#111] mb-4">Subscriptions & Payments</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Some features may require a premium subscription. All payments are processed securely. Subscriptions auto-renew unless cancelled at least 24 hours before the renewal date.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-zinc-50 rounded-2xl p-5 border border-zinc-100">
                  <h4 className="font-bold text-[#111] text-sm mb-1">Auto-renew</h4>
                  <p className="text-zinc-500 text-xs">Subscriptions auto-renew unless cancelled.</p>
                </div>
                <div className="bg-zinc-50 rounded-2xl p-5 border border-zinc-100">
                  <h4 className="font-bold text-[#111] text-sm mb-1">No refunds</h4>
                  <p className="text-zinc-500 text-xs">All purchases are final and non-refundable.</p>
                </div>
                <div className="bg-zinc-50 rounded-2xl p-5 border border-zinc-100">
                  <h4 className="font-bold text-[#111] text-sm mb-1">Easy cancel</h4>
                  <p className="text-zinc-500 text-xs">Cancel anytime through your device settings.</p>
                </div>
              </div>
            </div>

            {/* Disclaimers & Liability */}
            <div id="disclaimer" className="scroll-mt-32">
              <h2 className="font-serif text-3xl font-black text-[#111] mb-4">Limitation of Liability</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Wiviy is provided "as is" without warranties of any kind. We are not liable for any damages resulting from your use of the application, interactions with other members, or download of materials.
              </p>
              <div className="bg-amber-50 rounded-[24px] p-6 border border-amber-200">
                <p className="text-amber-800 text-sm">
                  ⚠️ Always exercise caution when sharing personal details or arranging in-person meetings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== DARK CTA BANNER ========== */}
      <section className="w-full bg-white py-12 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto bg-[#111] rounded-[32px] p-10 sm:p-14 text-center relative overflow-hidden">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.08] mb-4">
            Something Not Clear?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto mb-8">
            Have questions about these terms? We're happy to explain them clearly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setCurrentPage('support')}
              className="bg-[#D2F026] text-[#111] font-bold px-8 py-4 rounded-full text-sm hover:opacity-90 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              Contact Support <ArrowUpRight size={16} />
            </button>
            <button className="bg-white/10 text-white font-bold px-8 py-4 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
              privacy@wiviy.com
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
