import React from 'react';
import { Eye, Trash2, ToggleLeft, PenLine, ArrowUpRight, Shield, Lock, Globe, Bell } from 'lucide-react';

const DATA_COLLECTED = {
  left: [
    'Full name & date of birth',
    'Email address & phone number',
    'Profile photos & bio',
    'Location data (when enabled)',
    'Gender & sexual orientation',
  ],
  right: [
    'Preferences & interests',
    'Device info & IP address',
    'Usage analytics & interactions',
    'Payment details (encrypted)',
    'Messages & media shared',
  ],
};

const USAGE_PURPOSES = [
  'To create and manage your Wiviy account.',
  'To match you with compatible people based on your preferences.',
  'To personalize your experience and improve recommendations.',
  'To process payments and manage subscriptions.',
  'To detect fraud, abuse, and security threats.',
  'To send you updates, notifications, and promotional offers (opt-out available).',
  'To comply with legal obligations.',
];

const RIGHTS = [
  { icon: Eye, title: 'Access', desc: 'View all data we hold about you.' },
  { icon: Trash2, title: 'Delete', desc: 'Request permanent data deletion.' },
  { icon: ToggleLeft, title: 'Opt-out', desc: 'Disable tracking & marketing.' },
  { icon: PenLine, title: 'Correct', desc: 'Update inaccurate information.' },
];

export default function PrivacyPage({ setCurrentPage }) {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative w-full bg-white pt-44 pb-20 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden select-none">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <span className="text-[#a3a3a3] text-[12px] font-bold tracking-[2px] uppercase mb-4">LEGAL</span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-[72px] font-black text-[#111] tracking-tight leading-[1.05] mb-6">
            Your Privacy{' '}
            <span className="relative inline-block px-3">
              <span className="absolute inset-0 bg-[#D2F026] -rotate-[0.5deg] rounded" />
              <span className="relative z-10">Matters</span>
            </span>
            <span className="block mt-1">to Us.</span>
          </h1>
          <p className="text-zinc-500 text-lg sm:text-xl max-w-xl leading-relaxed mb-6">
            At Wiviy, we believe your personal data is exactly that — personal. Here's how we protect it.
          </p>
          <div className="flex items-center gap-4 text-zinc-400 text-sm">
            <span>Last updated: August 2026</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>
      </section>

      {/* ========== OVERVIEW ========== */}
      <section className="w-full bg-white py-12 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#111] tracking-tight mb-6">Overview</h2>
          <div className="bg-[#F0FFB2] rounded-[24px] p-6 sm:p-8 border border-[#D2F026]/30">
            <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
              This Privacy Policy explains how Wiviy ("we", "us", "our") collects, uses, shares, and protects your personal information when you use our dating application and related services. By using Wiviy, you agree to the collection and use of information in accordance with this policy. We are committed to ensuring your data is handled securely and transparently.
            </p>
          </div>
        </div>
      </section>

      {/* ========== INFORMATION WE COLLECT ========== */}
      <section className="w-full bg-white py-12 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#111] tracking-tight mb-3">Information We Collect</h2>
          <p className="text-zinc-500 text-sm mb-8">We collect the following types of information to provide and improve our services:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              {DATA_COLLECTED.left.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D2F026] mt-2 shrink-0" />
                  <span className="text-zinc-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {DATA_COLLECTED.right.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D2F026] mt-2 shrink-0" />
                  <span className="text-zinc-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW WE USE YOUR INFORMATION ========== */}
      <section className="w-full bg-white py-12 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#111] tracking-tight mb-3">How We Use Your Information</h2>
          <p className="text-zinc-500 text-sm mb-8">Your information is used for the following purposes:</p>

          <div className="flex flex-col gap-4">
            {USAGE_PURPOSES.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-[#D2F026] font-bold text-sm shrink-0 w-6">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-zinc-700 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW WE SHARE INFORMATION ========== */}
      <section className="w-full bg-white py-12 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#111] tracking-tight mb-3">How We Share Information</h2>
          <p className="text-zinc-500 text-sm mb-6">We may share your data with trusted partners under strict agreements:</p>

          <div className="flex flex-col gap-3 mb-8">
            {[
              'Service providers who help us operate the platform (hosting, analytics, payments).',
              'Law enforcement when legally required or to protect user safety.',
              'Business partners for co-branded services (only with your explicit consent).',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                <span className="text-zinc-700 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#F0FFB2] rounded-[24px] p-6 border border-[#D2F026]/30">
            <p className="text-zinc-700 text-sm font-medium">
              🔒 We never sell your personal data to third parties. Period.
            </p>
          </div>
        </div>
      </section>

      {/* ========== YOU'RE IN CONTROL ========== */}
      <section className="w-full bg-white py-16 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#111] tracking-tight mb-3">You're In Control</h2>
          <p className="text-zinc-500 text-sm mb-8">You have rights over your personal data. Here's what you can do:</p>

          <h3 className="font-bold text-[#111] text-sm uppercase tracking-wider mb-6">Your Data, Your Choice.</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {RIGHTS.map((right, i) => (
              <div key={i} className="bg-zinc-50 rounded-2xl p-5 text-center border border-zinc-100 hover:border-[#D2F026]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#D2F026] flex items-center justify-center mx-auto mb-3">
                  <right.icon size={18} className="text-[#111]" />
                </div>
                <h4 className="font-bold text-[#111] text-sm mb-1">{right.title}</h4>
                <p className="text-zinc-500 text-xs">{right.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== DATA RETENTION ========== */}
      <section className="w-full bg-white py-12 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#111] tracking-tight mb-3">How Long Do We Keep Information</h2>
          <p className="text-zinc-500 text-sm leading-relaxed mb-4">
            We retain your personal data only for as long as necessary to provide our services and fulfill the purposes described in this policy. When you delete your account, we begin the process of removing your data from our systems within 30 days.
          </p>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Some information may be retained longer if required by law, to resolve disputes, or to enforce our agreements. Anonymized or aggregated data that cannot identify you may be retained indefinitely for analytics purposes.
          </p>
        </div>
      </section>

      {/* ========== KEEPING YOUR INFORMATION SAFE ========== */}
      <section className="w-full bg-white py-12 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#D2F026] rounded-[28px] p-8 sm:p-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#111] tracking-tight mb-4">
              <span className="relative inline-block px-2 mr-1">
                <span className="absolute inset-0 bg-white/50 rounded" />
                <span className="relative z-10">Keeping Your Information</span>
              </span>
              Safe
            </h2>
            <p className="text-zinc-700 text-sm leading-relaxed mb-4">
              We implement industry-standard security measures including encryption in transit and at rest, regular security audits, access controls, and incident response protocols. While no method of transmission over the Internet is 100% secure, we strive to use commercially acceptable means to protect your personal information.
            </p>
            <div className="flex flex-wrap gap-3">
              {['AES-256 Encryption', 'SOC 2 Compliant', '2FA Available', 'Regular Audits'].map((badge, i) => (
                <span key={i} className="bg-white/70 text-[#111] text-xs font-bold px-3 py-1.5 rounded-full">{badge}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CHILDREN'S PRIVACY ========== */}
      <section className="w-full bg-white py-12 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#111] tracking-tight mb-3">Children's Privacy</h2>
          <p className="text-zinc-500 text-sm leading-relaxed mb-3">
            Wiviy is not intended for anyone under the age of 18. We do not knowingly collect personal information from children. If we learn that we have collected personal data from a child under 18, we will take steps to delete that information as quickly as possible.
          </p>
          <p className="text-zinc-500 text-sm leading-relaxed">
            If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at <span className="text-[#111] font-medium">privacy@wiviy.com</span>.
          </p>
        </div>
      </section>

      {/* ========== INTERNATIONAL DATA TRANSFERS ========== */}
      <section className="w-full bg-white py-12 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#111] tracking-tight mb-3">International Data Transfers</h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Your information may be transferred to and maintained on servers located outside your country. We ensure appropriate safeguards are in place, including Standard Contractual Clauses and compliance with applicable data protection regulations (such as GDPR, CCPA). By using Wiviy, you consent to this transfer.
          </p>
        </div>
      </section>

      {/* ========== CHANGES TO THIS POLICY ========== */}
      <section className="w-full bg-white py-12 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#111] tracking-tight mb-3">Changes to This Policy</h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            We may update this Privacy Policy from time to time. When we do, we'll notify you by updating the "Last updated" date at the top and, for significant changes, by sending you a notification within the app. We encourage you to review this page periodically.
          </p>
        </div>
      </section>

      {/* ========== DARK CTA BANNER ========== */}
      <section className="w-full bg-white py-12 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto bg-[#111] rounded-[32px] p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute top-6 left-6 text-[#D2F026]/40 select-none pointer-events-none">✦</div>
          <div className="absolute top-6 right-6 text-[#D2F026]/40 select-none pointer-events-none">✦</div>
          <div className="absolute bottom-6 left-6 text-[#D2F026]/40 select-none pointer-events-none">✦</div>
          <div className="absolute bottom-6 right-6 text-[#D2F026]/40 select-none pointer-events-none">✦</div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.08] mb-4">
            We're Happy{' '}
            <span className="relative inline-block px-2">
              <span className="absolute inset-0 bg-[#D2F026] -rotate-[0.5deg] rounded" />
              <span className="relative z-10 text-[#111]">to Explain.</span>
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto mb-8">
            Have questions about your data or this policy? We're an open book. Reach out anytime.
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
