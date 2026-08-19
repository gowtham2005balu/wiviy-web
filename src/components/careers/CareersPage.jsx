import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Clock, ChevronDown, ChevronUp, Heart, Zap, Coffee, Globe, Headphones } from 'lucide-react';

const VALUES = [
  { num: '01', title: 'People first', desc: 'Every decision starts with empathy. We build for real people with real feelings.' },
  { num: '02', title: 'Stay bright', desc: 'Bring energy, curiosity, and optimism to everything you do. Good vibes are contagious.' },
  { num: '03', title: 'Simplicity', desc: 'Great products feel effortless. We cut complexity so users don\'t have to think twice.' },
  { num: '04', title: 'Grow as one', desc: 'We learn together, celebrate together, and pick each other up when things get tough.' },
  { num: '05', title: 'Make it better', desc: 'Good enough isn\'t. We iterate, refine, and push until it\'s something we\'re proud of.' },
];

const JOBS = [
  { category: 'Product', roles: [
    { title: 'Senior Product Manager', location: 'Chennai, India', type: 'Full-time' },
    { title: 'Product Designer', location: 'Remote', type: 'Full-time' },
  ]},
  { category: 'Engineering', roles: [
    { title: 'Senior Frontend Engineer', location: 'Chennai, India', type: 'Full-time' },
    { title: 'Backend Engineer (Node.js)', location: 'Remote', type: 'Full-time' },
    { title: 'Mobile Developer (React Native)', location: 'Chennai, India', type: 'Full-time' },
  ]},
  { category: 'Design', roles: [
    { title: 'Brand Designer', location: 'Remote', type: 'Full-time' },
    { title: 'UX Researcher', location: 'Chennai, India', type: 'Contract' },
  ]},
];

const PERKS = [
  { icon: Heart, title: 'Health & Wellness', desc: 'Full medical, dental, and mental health coverage.' },
  { icon: Zap, title: 'Flexible Hours', desc: 'Work when you\'re most productive. No rigid schedules.' },
  { icon: Coffee, title: 'Team Retreats', desc: 'Quarterly offsites to connect, recharge, and celebrate.' },
  { icon: Globe, title: 'Remote-First', desc: 'Work from anywhere. We trust you to deliver.' },
  { icon: Headphones, title: 'Learning Budget', desc: '₹50K/year for courses, conferences, and books.' },
  { icon: MapPin, title: 'Relocation Support', desc: 'Moving to Chennai? We\'ll help with the transition.' },
];

export default function CareersPage({ setCurrentPage }) {
  const [expandedCategory, setExpandedCategory] = useState(0);

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative w-full bg-[#111] pt-44 pb-24 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden select-none">
        {/* Decorative dots */}
        <div className="absolute top-32 right-[10%] w-3 h-3 rounded-full bg-[#D2F026] opacity-60 hidden md:block" />
        <div className="absolute bottom-20 left-[8%] w-2 h-2 rounded-full bg-[#D2F026] opacity-40 hidden md:block" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <span className="inline-block bg-[#D2F026] text-[#111] text-[11px] font-bold uppercase tracking-[2px] px-4 py-2 rounded-full mb-8">
                We're Hiring
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-[68px] font-black text-white tracking-tight leading-[1.05] mb-6">
                Build something that{' '}
                <span className="relative inline-block px-3">
                  <span className="absolute inset-0 bg-[#D2F026] -rotate-[0.5deg] rounded" />
                  <span className="relative z-10 text-[#111]">helps people</span>
                </span>
                <br />find each other.
              </h1>
              <p className="text-zinc-400 text-lg max-w-md leading-relaxed mb-8">
                We're a small, passionate team building the future of meaningful connections. Come make dating better, together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#open-roles" className="bg-[#D2F026] text-[#111] font-bold px-8 py-4 rounded-full text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all cursor-pointer">
                  View Open Roles <ArrowUpRight size={16} />
                </a>
                <button className="bg-white/10 text-white font-bold px-8 py-4 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                  Our Culture
                </button>
              </div>
            </div>

            {/* Right: Image collage */}
            <div className="relative hidden lg:flex justify-end">
              <div className="relative w-[400px] h-[500px]">
                <div className="absolute top-0 right-0 w-[260px] h-[340px] rounded-[28px] overflow-hidden border-4 border-[#D2F026] shadow-2xl">
                  <img src="/assets/page-1/From First Match to First Date.png" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 left-0 w-[200px] h-[260px] rounded-[28px] overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img src="/assets/page-1/The Art of Meaningful Conversation.png" alt="Team member" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WORK THAT MEANS SOMETHING ========== */}
      <section className="w-full bg-white py-24 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-[#a3a3a3] text-[11px] font-bold tracking-[2px] uppercase mb-4 block">OUR MISSION</span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-[#111] tracking-tight leading-[1.08] mb-14">
            Work that means{' '}
            <span className="relative inline-block px-3">
              <span className="absolute inset-0 bg-[#D2F026] -rotate-[0.5deg] rounded" />
              <span className="relative z-10">something</span>
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Build Meaning', desc: 'Create products that help real people find real love.', color: 'bg-[#D2F026]' },
              { title: 'For others', desc: 'Our users trust us with their most vulnerable moments.', color: 'bg-[#E8C8FF]' },
              { title: 'Safe Spaces', desc: 'Safety and respect are built into everything we do.', color: 'bg-[#D2F026]' },
              { title: 'For ourselves', desc: 'We pour love into our work because we believe it matters.', color: 'bg-[#FFF3C8]' },
            ].map((card, i) => (
              <div key={i} className={`${card.color} rounded-[24px] p-7 text-left border border-zinc-950/5 hover:-translate-y-1 transition-transform duration-300`}>
                <h3 className="font-serif text-xl font-black text-[#111] mb-2">{card.title}</h3>
                <p className="text-zinc-700 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GOOD WORK. GOOD PEOPLE. GOOD ENERGY. ========== */}
      <section className="w-full bg-white pb-24 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#111] tracking-tight leading-[1.08] mb-10">
            Good work.<br />Good people.<br />
            <span className="relative inline-block px-3">
              <span className="absolute inset-0 bg-[#D2F026] -rotate-[0.5deg] rounded" />
              <span className="relative z-10">Good energy.</span>
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="rounded-[20px] overflow-hidden aspect-square">
              <img src="/assets/page-1/Staying Safe While Dating Online.png" alt="Team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-[20px] overflow-hidden aspect-[3/4]">
              <img src="/assets/page-1/From First Match to First Date.png" alt="Team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-[20px] overflow-hidden aspect-square">
              <img src="/assets/page-1/The Art of Meaningful Conversation.png" alt="Team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-[20px] overflow-hidden aspect-[3/4]">
              <img src="/assets/page-1/Staying Safe While Dating Online (1).png" alt="Team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW WE WORK TOGETHER ========== */}
      <section className="w-full bg-zinc-50 py-24 px-6 sm:px-12 md:px-16 lg:px-24 border-y border-zinc-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#a3a3a3] text-[11px] font-bold tracking-[2px] uppercase mb-4 block">OUR VALUES</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#111] tracking-tight leading-[1.08] mb-16">
            How we work together
          </h2>

          <div className="flex flex-col gap-6 text-left max-w-2xl mx-auto">
            {VALUES.map((val, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <span className="text-[#D2F026] font-bold text-lg shrink-0 font-mono">{val.num}</span>
                <div className="border-b border-zinc-200 pb-6 flex-grow group-last:border-0">
                  <h3 className="font-serif text-xl font-black text-[#111] mb-1">{val.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== OPEN ROLES ========== */}
      <section id="open-roles" className="w-full bg-white py-24 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#111] tracking-tight leading-[1.08] mb-3">
            Find your place at Wiviy
          </h2>
          <p className="text-zinc-500 text-sm mb-12">Open positions across our team. We'd love to hear from you.</p>

          <div className="flex flex-col gap-4">
            {JOBS.map((cat, catIdx) => (
              <div key={catIdx} className="border border-zinc-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpandedCategory(expandedCategory === catIdx ? null : catIdx)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-zinc-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#D2F026] text-lg">●</span>
                    <span className="font-bold text-[#111] text-base">{cat.category}</span>
                    <span className="text-zinc-400 text-sm">({cat.roles.length} roles)</span>
                  </div>
                  {expandedCategory === catIdx ? (
                    <ChevronUp size={18} className="text-zinc-400" />
                  ) : (
                    <ChevronDown size={18} className="text-zinc-400" />
                  )}
                </button>

                {expandedCategory === catIdx && (
                  <div className="border-t border-zinc-100">
                    {cat.roles.map((role, roleIdx) => (
                      <div key={roleIdx} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 hover:bg-zinc-50 transition-colors border-b border-zinc-50 last:border-0 gap-3">
                        <div>
                          <h4 className="font-bold text-[#111] text-sm">{role.title}</h4>
                          <div className="flex items-center gap-3 mt-1.5 text-zinc-500 text-xs">
                            <span className="flex items-center gap-1"><MapPin size={12} /> {role.location}</span>
                            <span className="flex items-center gap-1"><Clock size={12} /> {role.type}</span>
                          </div>
                        </div>
                        <button className="bg-[#111] text-white font-bold px-5 py-2.5 rounded-full text-xs hover:opacity-90 transition-all cursor-pointer flex items-center gap-1.5 shrink-0 self-start sm:self-center">
                          Apply <ArrowUpRight size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== DON'T SEE YOUR ROLE? ========== */}
      <section className="w-full bg-white pb-16 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#D2F026] rounded-[28px] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#111] mb-2">Don't see your role?</h3>
              <p className="text-zinc-700 text-sm max-w-md">We're always looking for exceptional people. Send us your resume and we'll keep you in mind.</p>
            </div>
            <button className="bg-[#111] text-white font-bold px-8 py-4 rounded-full text-sm hover:opacity-90 transition-all cursor-pointer flex items-center gap-2 shrink-0 whitespace-nowrap">
              Send Resume <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ========== EMPLOYEE TESTIMONIAL ========== */}
      <section className="w-full bg-white py-16 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-[28px] overflow-hidden aspect-[4/5]">
              <img
                src="/assets/page-1/ChatGPT Image May 13, 2026, 10_59_16 AM 1.png"
                alt="Team member testimonial"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <span className="text-[#D2F026] text-[48px] font-sans leading-none select-none block mb-4">"</span>
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#111] leading-[1.5] mb-6">
                The best part about working at Wiviy is knowing that every feature we build could help someone find a genuine connection. That matters.
              </p>
              <div>
                <span className="font-bold text-[#111] text-sm">— Priya Sharma</span>
                <span className="text-zinc-500 text-sm ml-2">Senior Product Designer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MORE THAN A JOB (PERKS) ========== */}
      <section className="w-full bg-white py-24 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl font-black text-[#111] tracking-tight leading-[1.08] mb-3">
            More than a job.
          </h2>
          <p className="text-zinc-500 text-sm mb-12">Benefits and perks that take care of the whole you.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PERKS.map((perk, i) => (
              <div key={i} className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 hover:border-[#D2F026]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#D2F026] flex items-center justify-center mb-4">
                  <perk.icon size={18} className="text-[#111]" />
                </div>
                <h4 className="font-bold text-[#111] text-sm mb-1">{perk.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== DARK CTA BANNER ========== */}
      <section className="w-full bg-white py-12 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto bg-[#D2F026] rounded-[32px] p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute top-6 left-6 text-[#111]/20 select-none pointer-events-none">✦</div>
          <div className="absolute top-6 right-6 text-[#111]/20 select-none pointer-events-none">✦</div>
          <div className="absolute bottom-6 left-6 text-[#111]/20 select-none pointer-events-none">✦</div>
          <div className="absolute bottom-6 right-6 text-[#111]/20 select-none pointer-events-none">✦</div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#111] tracking-tight leading-[1.08] mb-4">
            Ready to build something{' '}
            <span className="relative inline-block px-2">
              <span className="absolute inset-0 bg-white/50 rounded" />
              <span className="relative z-10">meaningful?</span>
            </span>
          </h2>
          <p className="text-zinc-700 text-sm sm:text-base max-w-md mx-auto mb-8">
            We're a team of dreamers, builders, and believers. Come join us and help people find love.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#open-roles" className="bg-[#111] text-white font-bold px-8 py-4 rounded-full text-sm hover:opacity-90 transition-all cursor-pointer flex items-center justify-center gap-2">
              See Open Roles <ArrowUpRight size={16} />
            </a>
            <button
              onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="bg-white text-[#111] font-bold px-8 py-4 rounded-full text-sm border border-zinc-200 hover:bg-zinc-50 transition-all cursor-pointer"
            >
              Back to Wiviy
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
