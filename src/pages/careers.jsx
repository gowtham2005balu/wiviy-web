import { useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
// Adjust these paths to wherever your PNGs live
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';

/* ---------- Tokens ---------- */
const SERIF = "font-['Libre_Baskerville',serif]";
const DM = "font-['DM_Serif_Display',serif]";
const SANS = "font-['Plus_Jakarta_Sans',sans-serif]";
const BODY = "font-['Calibri','Carlito',sans-serif]";

const PNGS = [feature1, feature2, feature3, feature4];
const WRAP = 'w-full max-w-[1280px] mx-auto';
const eyebrow = `${SANS} font-bold text-[12.5px] leading-4 tracking-[2px] uppercase text-[#5E5A57]`;
const fhead = `${SERIF} font-semibold text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.3] text-[#171512]`;

/* ---------- Data ---------- */
const VALUES = [
  { title: 'Put people first', text: 'We build for real people, real conversations and real moments of connection.', icon: 'people' },
  { title: 'Make it matter', text: 'We care about the details because small decisions can change how people experience connection.', icon: 'chat' },
  { title: 'Stay curious', text: 'Dating is constantly evolving. We experiment, listen and keep learning.', icon: 'bulb' },
  { title: 'Be yourself', text: 'Different perspectives make better products, better teams and better ideas.', icon: 'group' },
];

const PERKS = [
  { title: 'Flexible & Remote Work', text: 'Work from where you do your best thinking. We plan around outcomes and shared overlap hours, not desks.' },
  { title: 'Health & Wellness', text: 'Health cover for you and your family, plus an annual wellness allowance to spend your way.' },
  { title: 'Learning & Development', text: 'A yearly learning budget for courses, books and conferences, and time set aside to use it.' },
  { title: 'Time Off', text: 'Generous paid leave, company-wide rest weeks and public holidays that follow where you live.' },
  { title: 'Parental Support', text: 'Paid parental leave and a gradual return to work for every kind of family.' },
  { title: 'Team Experiences', text: 'Regular offsites and small team meetups so remote colleagues actually get to know each other.' },
  { title: 'Equipment & Workspace', text: 'A laptop that suits your work and a stipend to set up a comfortable workspace at home.' },
  { title: 'Compensation', text: 'Fair, transparent pay reviewed every year, with ownership for the people building Wiviy.' },
  { title: 'Community & Events', text: 'Company socials, interest groups and events that bring the Wiviy community together.' },
  { title: 'Mental Wellbeing', text: 'Confidential counselling sessions and mental health days when you need to step back.' },
];

const HOW_WE_WORK = [
  { n: '01', title: 'Collaborate openly', text: 'We share early, ask questions and make room for different perspectives.' },
  { n: '02', title: 'Move with purpose', text: 'We value momentum, but not at the expense of thoughtful decisions.' },
  { n: '03', title: 'Make space for people', text: 'Great products come from people who feel trusted, supported and heard.' },
];

const HIRING = [
  { n: '01', title: 'Application', text: 'Tell us about yourself, your experience and what makes you excited about Wiviy.' },
  { n: '02', title: 'Intro conversation', text: 'A first conversation with our team to learn more about you and answer your questions.' },
  { n: '03', title: 'Team conversation', text: "Meet the people you'd work with and talk through the role in more detail." },
  { n: '04', title: 'Role conversation / challenge', text: 'Depending on the role, we may ask you to walk through your work or solve a small practical problem.' },
  { n: '05', title: 'Offer', text: "If it feels like a great fit on both sides, we'll make it official." },
];

import { Link } from 'react-router-dom';
import { JOBS_LIST } from '../data/jobs';

const JOBS = JOBS_LIST;

const unique = (key) => [...new Set(JOBS.map((j) => j[key]))];

/* ---------- Small pieces ---------- */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function ValueIcon({ name }) {
  const p = { width: 54, height: 54, viewBox: '0 0 54 54', fill: 'none', stroke: '#171512', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  if (name === 'people')
    return (
      <svg {...p}>
        <circle cx="19" cy="24" r="6" />
        <circle cx="35" cy="24" r="6" />
        <path d="M8 44c0-6 5-10 11-10s11 4 11 10M30 44c0-6 5-10 11-10s5 4 5 10" />
        <path d="M27 8v4M21 10l1.5 3M33 10l-1.5 3" stroke="#D2F026" />
      </svg>
    );
  if (name === 'chat')
    return (
      <svg {...p}>
        <path d="M9 14h36a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H26l-8 7v-7H9a3 3 0 0 1-3-3V17a3 3 0 0 1 3-3Z" fill="#171512" />
        <circle cx="19" cy="26" r="1.6" fill="#fff" stroke="none" />
        <circle cx="27" cy="26" r="1.6" fill="#fff" stroke="none" />
        <circle cx="35" cy="26" r="1.6" fill="#fff" stroke="none" />
        <path d="M18 6h18" />
      </svg>
    );
  if (name === 'bulb')
    return (
      <svg {...p}>
        <path d="M27 8a13 13 0 0 0-7 24c1.5 1 2 2.5 2 4h10c0-1.500.5-3 2-4A13 13 0 0 0 27 8Z" fill="#171512" />
        <path d="M22 42h10M24 47h6" />
        <path d="M27 2v2M10 12l1.500 1.500M44 12l-1.500 1.500" stroke="#D2F026" />
      </svg>
    );
  return (
    <svg {...p}>
      <circle cx="27" cy="18" r="5" fill="#171512" />
      <circle cx="14" cy="26" r="4" fill="#171512" />
      <circle cx="40" cy="26" r="4" fill="#171512" />
      <path d="M17 44c0-6 4-10 10-10s10 4 10 10H17ZM5 44c0-4 3-7 7-7M49 44c0-4-3-7-7-7" fill="#171512" />
      <path d="M27 4v3" />
    </svg>
  );
}

function Caret() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#171512" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute right-[14px] top-1/2 -translate-y-1/2" aria-hidden="true">
      <path d="m7 10 5 5 5-5" />
    </svg>
  );
}

function FilterSelect({ label, options, value, onChange }) {
  return (
    <div className="relative">
      <select
        aria-label={`Filter by ${label.toLowerCase()}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${BODY} appearance-none h-11 pl-[18px] pr-10 rounded-full bg-white border border-[#E8E6DD] text-[14px] text-[#171512] cursor-pointer hover:border-[#171512] focus:border-[#171512] outline-none transition-colors`}
      >
        <option value="">{label}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <Caret />
    </div>
  );
}

function AccordionItem({ title, text, open, onToggle, id }) {
  return (
    <div className="border-t border-white/[0.14]">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`perk-${id}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between py-[22px] text-left cursor-pointer"
      >
        <span className={`${SANS} font-bold text-base leading-5 text-white`}>{title}</span>
        <span aria-hidden="true" className={`${SANS} text-[20px] leading-[25px] text-white w-[13px] text-center`}>
          {open ? '−' : '+'}
        </span>
      </button>
      <div
        id={`perk-${id}`}
        className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className={`${SANS} text-[14.5px] leading-[23px] text-[#E5E5E5] pb-[22px] max-w-[520px]`}>{text}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */
export default function Careers() {
  const [openPerk, setOpenPerk] = useState(null);
  const [dept, setDept] = useState('');
  const [loc, setLoc] = useState('');
  const [type, setType] = useState('');
  const [query, setQuery] = useState('');

  const missionImg = useMemo(() => shuffle(PNGS)[0], []);

  const jobs = JOBS.filter((j) => {
    const q = query.trim().toLowerCase();
    return (
      (!dept || j.department === dept) &&
      (!loc || j.location === loc) &&
      (!type || j.type === type) &&
      (!q || `${j.title} ${j.department} ${j.location}`.toLowerCase().includes(q))
    );
  });

  const goToRoles = (e) => {
    e.preventDefault();
    document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
  };

  const btnPrimary = `${SANS} inline-flex items-center justify-center h-[51px] px-7 rounded-full bg-[#D2F026] text-[#171512] font-bold text-[15px] hover:opacity-90 active:scale-95 transition-all`;

  return (
    <div className="min-h-screen bg-white text-[#171512]">
      <Navbar theme="light" />

      {/* HERO */}
      <section className="w-full px-6 sm:px-16 lg:px-[100px] pt-32 sm:pt-40 lg:pt-[190px] pb-16 lg:pb-[70px]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col items-center text-center gap-[19px]">
          <span className={eyebrow}>Careers</span>
          <h1 className={`${SERIF} font-semibold text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.22] tracking-[-0.9px] max-w-[640px]`}>
            Build something people feel.
          </h1>
          <p className={`${SANS} text-[16px] sm:text-[17.5px] leading-[1.6] text-[#5E5A57] max-w-[520px] pt-[7px]`}>
            We're building a different kind of dating experience — one that makes meeting people feel more human, more
            intentional, and a little more exciting.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-[21px]">
            <a href="#open-positions" onClick={goToRoles} className={btnPrimary}>
              See open roles
            </a>
            <a
              href="/about"
              className={`${SANS} inline-flex items-center justify-center h-[51px] px-7 rounded-full border border-[#171512]/20 text-[#171512] font-bold text-[15px] hover:border-[#171512] transition-colors`}
            >
              Meet the team
            </a>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="w-full px-6 sm:px-10 lg:px-20 py-16 lg:py-[120px]">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          <div className="flex flex-col gap-4 w-full lg:w-[580px]">
            <span className={eyebrow}>Why Wiviy</span>
            <h2 className={fhead}>Dating should feel more human.</h2>
            <p className={`${SANS} pt-0.5 text-[16.5px] leading-[27px] text-[#5E5A57] max-w-[440px]`}>
              Wiviy is built around the belief that meaningful connection starts with being yourself.
            </p>
            <p className={`${SANS} text-[16.5px] leading-[27px] text-[#5E5A57] max-w-[440px]`}>
              We're creating experiences that make it easier to discover people, start conversations and find
              connections that actually feel like something.
            </p>
          </div>
          <div
            className="relative overflow-hidden w-full lg:w-[580px] aspect-square rounded-[24px] shrink-0"
            style={{ background: 'linear-gradient(150deg, #EFE9C8 0%, #C9D79E 60%, #9DB26E 100%)' }}
          >
            <img src={missionImg} alt="" className="absolute inset-0 w-full h-full object-contain p-10" />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="w-full px-6 sm:px-10 lg:px-20 pt-6 lg:pt-[98px] pb-16 lg:pb-[120px]">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-[70px]">
          <div className="flex flex-col items-start gap-6 max-w-[640px]">
            <div className="flex flex-col gap-[14px]">
              <span className={`${BODY} font-bold text-[14px] leading-[17px] tracking-[2px] uppercase text-[#5E5A57]`}>
                Our values
              </span>
              <h2 className={fhead}>Build with intention. Stay curious. Keep it human.</h2>
            </div>
            <a
              href="#open-positions"
              onClick={goToRoles}
              className={`${BODY} inline-flex items-center justify-center h-[50px] px-7 rounded-full bg-[#1C1E15] text-white font-bold text-base hover:opacity-90 active:scale-95 transition-all`}
            >
              See open roles
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-[18px]">
            {VALUES.map((v) => (
              <div key={v.title} className="flex flex-col items-center text-center gap-[14px]">
                <ValueIcon name={v.icon} />
                <div className="flex flex-col items-center gap-2.5">
                  <h3 className={`${BODY} font-bold text-[20px] leading-6 tracking-[0.38px] uppercase text-[#262522] pt-1`}>
                    {v.title}
                  </h3>
                  <p className={`${BODY} text-base leading-6 text-[#5E5A57] max-w-[280px]`}>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS ACCORDION */}
      <section className="w-full bg-[#0F100C] px-6 sm:px-16 lg:px-[100px] py-[80px] lg:py-[120px]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col gap-[70px]">
          <div className="flex flex-col gap-4">
            <span className={`${BODY} font-bold text-[14px] leading-[17px] tracking-[2px] uppercase text-[#D7CBC2]`}>
              Perks &amp; benefits
            </span>
            <h2 className={`${SERIF} font-semibold text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.3] text-[#F7F6F5]`}>
              Do your best work. Live your best life.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[60px] items-start border-b border-white/[0.14]">
            {PERKS.map((perk, i) => (
              <AccordionItem
                key={perk.title}
                id={i}
                title={perk.title}
                text={perk.text}
                open={openPerk === i}
                onToggle={() => setOpenPerk(openPerk === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="w-full px-6 sm:px-10 lg:px-20 py-16 lg:py-[120px]">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-[70px]">
          <h2 className={`${fhead} max-w-[520px]`}>Good work needs good conversations.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[50px]">
            {HOW_WE_WORK.map((h) => (
              <div key={h.n} className="flex flex-col gap-2.5">
                <span className={`${DM} text-[15px] leading-[21px] text-[#5E5A57]`}>{h.n}</span>
                <h3 className={`${SANS} font-bold text-[21px] leading-[26px] pt-2`}>{h.title}</h3>
                <p className={`${SANS} text-[15px] leading-6 text-[#5E5A57] max-w-[280px]`}>{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="w-full bg-[#0F100C] px-6 sm:px-10 lg:px-20 py-[80px] lg:py-[120px]">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-[70px]">
          <div className="flex flex-col gap-4 lg:w-[563px] shrink-0">
            <span className={`${BODY} font-bold text-[14px] leading-[17px] tracking-[2px] uppercase text-[#E5E5E5]`}>
              Hiring process
            </span>
            <h2 className={`${SERIF} font-semibold text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.3] text-[#F7F6F5]`}>
              We'd love to meet you. Here's how it works.
            </h2>
          </div>

          <ol className="flex-1 flex flex-col border-y border-[#EEEEEE]/30">
            {HIRING.map((s, i) => (
              <li key={s.n} className={`flex gap-6 py-8 ${i > 0 ? 'border-t border-[#EEEEEE]/30' : ''}`}>
                <span className={`${DM} w-[50px] shrink-0 text-[22px] leading-[30px] text-[#E5E5E5]`}>{s.n}</span>
                <div className="flex flex-col gap-[5px]">
                  <h3 className={`${SANS} font-bold text-[18px] leading-[23px] text-white`}>{s.title}</h3>
                  <p className={`${SANS} text-[14.5px] leading-[23px] text-[#E5E5E5]`}>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="open-positions" className="w-full px-6 sm:px-10 lg:px-20 py-16 lg:py-[100px] scroll-mt-6">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4 max-w-[600px]">
            <span className={eyebrow}>Open positions</span>
            <h2 className={fhead}>Love what we're building?</h2>
            <p className={`${SANS} pt-0.5 text-[16.5px] leading-[27px] text-[#5E5A57] max-w-[440px]`}>
              If you're excited about building a more human way to connect, we'd love to hear from you.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between pt-2.5">
            <div className="flex flex-wrap gap-3">
              <FilterSelect label="Department" options={unique('department')} value={dept} onChange={setDept} />
              <FilterSelect label="Location" options={unique('location')} value={loc} onChange={setLoc} />
              <FilterSelect label="Employment Type" options={unique('type')} value={type} onChange={setType} />
            </div>
            <label className="flex items-center gap-2.5 h-[42px] w-full lg:w-[320px] px-[18px] rounded-full border border-[#E8E6DD] focus-within:border-[#171512] transition-colors">
              <svg width="14" height="15" viewBox="0 0 15 16" fill="none" stroke="#5E5A57" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                <circle cx="6.500" cy="6.500" r="5" />
                <path d="M10.500 10.800 13.800 14.500" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search jobs…"
                aria-label="Search jobs"
                className={`${SANS} flex-1 bg-transparent outline-none text-[14px] text-[#171512] placeholder:text-[#757575]`}
              />
            </label>
          </div>

          <div className="border-t border-[#E8E6DD]">
            {jobs.length === 0 ? (
              <p className={`${SANS} py-16 text-center text-[16px] text-[#5E5A57]`}>
                No roles match those filters. Clear a filter or check back soon.
              </p>
            ) : (
              jobs.map((j) => (
                <Link
                  key={j.id}
                  to={`/careers/${j.id}`}
                  className="group flex items-center justify-between gap-5 py-[26px] border-b border-[#E8E6DD] cursor-pointer"
                >
                  <div className="flex flex-col gap-1">
                    <h3 className={`${SANS} font-bold text-[19px] leading-6 group-hover:underline`}>{j.title}</h3>
                    <p className={`${SANS} text-[13px] leading-4 text-[#5E5A57] pt-0.5`}>
                      {j.location} <span className="mx-1">·</span> {j.department} <span className="mx-1">·</span> {j.type}
                    </p>
                    <p className={`${SANS} text-[12px] leading-[15px] text-[#5E5A57]`}>{j.posted}</p>
                  </div>
                  <span className={`${SANS} shrink-0 font-bold text-[14px] leading-[18px]`}>View role →</span>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden w-full bg-[#0F100C] px-6 sm:px-16 lg:px-[100px] py-[80px] lg:py-[100px]">
        <svg className="absolute left-[8%] top-[14%] w-[22px] h-[22px]" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21s-8-5.200-8-11a4.500 4.500 0 0 1 8-2.800A4.500 4.500 0 0 1 20 10c0 5.800-8 11-8 11Z" fill="#D2F026" stroke="#fff" strokeWidth="1.600" strokeLinejoin="round" />
        </svg>
        <svg className="absolute right-[10%] bottom-[16%] w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 1c.6 6 4.500 10 11 11-6.500 1-10.400 5-11 11-.6-6-4.500-10-11-11C7.500 11 11.400 7 12 1Z" fill="#D2F026" />
        </svg>

        <div className="relative z-10 w-full max-w-[1240px] mx-auto flex flex-col items-center text-center gap-5">
          <h2 className={`${DM} text-[52px] sm:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.88px] text-white max-w-[700px]`}>
            Let's build what's next.
          </h2>
          <p className={`${SANS} text-[17px] leading-[21px] text-white/60 pb-5`}>
            Help us make connection feel a little more human.
          </p>
          <a href="#open-positions" onClick={goToRoles} className={btnPrimary}>
            Explore open roles
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}