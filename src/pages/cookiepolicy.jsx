import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

/* ---------- Tokens ---------- */
const DM = "font-['DM_Serif_Display',serif]";
const SANS = "font-['Plus_Jakarta_Sans',sans-serif]";

const LAST_UPDATED = 'October 1, 2026';

/* ---------- Icons ---------- */
const svgProps = {
  width: 36,
  height: 36,
  viewBox: '0 0 36 36',
  fill: 'none',
  stroke: '#141310',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

function CookieIcon() {
  return (
    <svg {...svgProps}>
      <circle cx="18" cy="18" r="13" />
      <circle cx="14" cy="14" r="1.75" fill="#D2F026" stroke="none" />
      <circle cx="21" cy="13" r="1.75" fill="#D2F026" stroke="none" />
      <circle cx="20" cy="21" r="1.75" fill="#D2F026" stroke="none" />
      <circle cx="13" cy="21" r="1.75" fill="#D2F026" stroke="none" />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg {...svgProps}>
      <path d="M8 12h20M8 24h20" />
      <circle cx="14" cy="12" r="3" fill="#fff" />
      <circle cx="14" cy="12" r="1.5" fill="#D2F026" stroke="none" />
      <circle cx="22" cy="24" r="3" fill="#fff" />
      <circle cx="22" cy="24" r="1.5" fill="#D2F026" stroke="none" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg {...svgProps}>
      <path d="M18 6L8 10.5v6.5c0 6.8 4.3 13.2 10 15 5.7-1.8 10-8.2 10-15v-6.5L18 6z" />
      <path d="M13.5 17.5l3 3 6-6" />
      <circle cx="18" cy="27" r="1.5" fill="#D2F026" stroke="none" />
    </svg>
  );
}

const GLANCE = [
  {
    Icon: CookieIcon,
    title: 'What cookies are',
    text: 'Small files stored on your device to keep Wiviy running smoothly and securely.',
  },
  {
    Icon: SlidersIcon,
    title: 'Why we use them',
    text: 'To enable core features, remember preferences, and analyze site performance.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Your choices',
    text: 'You can customize or reject non-essential cookies at any time from your settings.',
  },
];

/* ---------- Content ---------- */
const SECTIONS = [
  {
    title: 'What Are Cookies?',
    blocks: [
      {
        p: 'Cookies are small text files that websites store on your computer, tablet, or mobile device when you visit them. They help the website remember information about your visit, such as your authentication state, interface preferences, and basic settings, so you do not have to keep re-entering them whenever you come back.',
      },
      {
        p: 'In addition to cookies, Wiviy may use similar storage technologies including web beacons, pixels, local storage, and session tokens that perform analogous functions on our web and mobile applications.',
      },
    ],
  },
  {
    title: 'How We Use Cookies',
    blocks: [
      {
        p: 'We use cookies and related technologies to keep Wiviy running reliably, protect your account, understand how visitors interact with our services, and improve our features over time.',
      },
      {
        callout: {
          title: 'Respecting your choices',
          text: 'We never sell your personal information or use cookies to track you across third-party websites without your consent.',
        },
      },
    ],
  },
  {
    title: 'Types of Cookies We Use',
    blocks: [
      {
        p: 'We group the cookies used on Wiviy into four clear categories based on their function and purpose:',
      },
      {
        ul: [
          'Strictly Necessary Cookies — Essential for you to browse the site and use its features, such as accessing secure areas, authentication, and remembering your cookie consent selections. These cannot be disabled.',
          'Analytics & Performance Cookies — Collect aggregated, anonymous data about how visitors interact with our pages, which features are most popular, and whether errors occur. This helps us optimize performance.',
          'Functionality & Preferences Cookies — Allow Wiviy to remember choices you have made (like your preferred language, theme, or region) to provide a more personalized browsing experience.',
          'Marketing & Outreach Cookies — Help us measure the reach and effectiveness of our informational campaigns and deliver relevant updates about Wiviy features.',
        ],
      },
    ],
  },
  {
    title: 'Cookie Inventory & Table',
    blocks: [
      {
        p: 'The table below outlines common cookies deployed across Wiviy, their origin, their primary function, and their retention period.',
      },
      {
        table: {
          headers: ['Cookie', 'Provider', 'Purpose', 'Category', 'Duration'],
          rows: [
            ['wiviy_cookie_consent', 'Wiviy', 'Stores your cookie preference choices', 'Strictly necessary', '12 months'],
            ['wiviy_session', 'Wiviy', 'Maintains secure user session and authentication', 'Strictly necessary', 'Session'],
            ['wiviy_pref_theme', 'Wiviy', 'Remembers your preferred color scheme or theme', 'Preferences', '12 months'],
            ['_ga', 'Google Analytics', 'Distinguishes unique users and tracks page usage statistics', 'Analytics', '2 years'],
            ['_gid', 'Google Analytics', 'Stores session-level activity and interaction data', 'Analytics', '24 hours'],
          ],
        },
      },
    ],
  },
  {
    title: 'Managing Your Cookie Preferences',
    blocks: [
      {
        p: 'You have full control over non-essential cookies. You can open our interactive Cookie Settings panel at any time to review your current choices, enable or disable specific categories, or withdraw consent.',
      },
      {
        manageBox: {
          title: 'Cookie settings panel',
          text: 'Adjust your preferences for analytics, functionality, and marketing cookies. Strictly necessary cookies remain active to ensure the site operates securely.',
          cta: 'Open cookie settings',
        },
      },
    ],
  },
  {
    title: 'Browser Controls & Opt-Out',
    blocks: [
      {
        p: 'Most web browsers accept cookies by default, but allow you to modify your settings to block cookies, clear stored cookies, or notify you when a cookie is placed. You can find instructions in your browser’s help or settings menus:',
      },
      {
        ul: [
          'Google Chrome: Settings > Privacy and Security > Third-party cookies',
          'Apple Safari: Settings > Safari > Advanced > Block All Cookies',
          'Mozilla Firefox: Settings > Privacy & Security > Enhanced Tracking Protection',
          'Microsoft Edge: Settings > Cookies and site permissions > Manage and delete cookies and site data',
        ],
      },
      {
        p: 'Please note that disabling cookies in your browser may impact website functionality and prevent certain features from operating smoothly.',
      },
    ],
  },
  {
    title: 'Third-Party Services',
    blocks: [
      {
        p: 'In some instances, cookies may be placed by trusted third-party service providers who assist us in hosting, analytics, and security monitoring. These partners are bound by strict confidentiality and data protection agreements.',
      },
    ],
  },
  {
    title: 'Changes to This Cookie Policy',
    blocks: [
      {
        p: 'We may update this Cookie Policy from time to time to reflect operational changes, updates to our technologies, or legal requirements. When we make material revisions, we will update the date at the top of this page.',
      },
    ],
  },
  {
    title: 'Contact Us',
    blocks: [
      {
        p: 'If you have questions, feedback, or concerns regarding our Cookie Policy or how we handle cookies and privacy at Wiviy, please reach out to our team.',
      },
    ],
  },
].map((s, i) => {
  const n = String(i + 1).padStart(2, '0');
  return { ...s, n, id: `s${n}` };
});

const TOC_LABELS = {
  s03: 'Types of Cookies',
  s04: 'Cookie Inventory',
  s05: 'Managing Preferences',
  s06: 'Browser Controls',
};

/* ---------- Page ---------- */
export default function CookiePolicy({ contactHref = '/support' }) {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));

    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        setActive(SECTIONS[SECTIONS.length - 1].id);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const goTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
    setActive(id);
  };

  const handleOpenCookieSettings = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-cookie-settings'));
    }
  };

  const renderBlock = (b, i) => {
    if (b.p)
      return (
        <p key={i} className={`${SANS} pt-2 text-[16px] leading-7 text-[#141310]`}>
          {b.p}
        </p>
      );
    if (b.ul)
      return (
        <ul
          key={i}
          className={`${SANS} list-disc marker:text-[#141310] pl-[22px] pt-[7px] flex flex-col gap-[7px] text-[15.5px] leading-[26px] text-[#141310]`}
        >
          {b.ul.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
      );
    if (b.callout)
      return (
        <div
          key={i}
          className="mt-4 flex flex-col gap-[7px] px-6 py-5 rounded-[10px] bg-[#FBF8EE] border-l-[3px] border-[#D2F026]"
        >
          <h4 className={`${SANS} font-extrabold text-[14.5px] leading-[18px] text-[#141310]`}>
            {b.callout.title}
          </h4>
          <p className={`${SANS} text-[14.5px] leading-[25px] text-[#5E5A57]`}>
            {b.callout.text}
          </p>
        </div>
      );
    if (b.manageBox)
      return (
        <div
          key={i}
          className="mt-4 flex flex-col items-start gap-3 rounded-[18px] border border-[#141310] px-8 pt-8 pb-8 bg-white"
        >
          <h3 className={`${DM} text-[22px] leading-[30px] tracking-[-0.22px] text-[#141310]`}>
            {b.manageBox.title}
          </h3>
          <p className={`${SANS} pb-2 text-[16px] leading-7 text-[#5E5A57]`}>
            {b.manageBox.text}
          </p>
          <button
            type="button"
            onClick={handleOpenCookieSettings}
            className={`${SANS} inline-flex items-center h-[51px] px-7 rounded-full bg-[#D2F026] text-[#141310] font-bold text-[15px] hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-sm`}
          >
            {b.manageBox.cta}
          </button>
        </div>
      );
    if (b.table)
      return (
        <div key={i} className="w-full overflow-x-auto mt-4 rounded-xl border border-[#E7E4D8]">
          <table className="w-full text-left font-sans text-[13.5px] sm:text-[14px] border-collapse min-w-[580px]">
            <thead>
              <tr className="border-b border-[#E7E4D8] bg-[#FBF8EE] text-[#5E5A57] font-bold text-[11.5px] tracking-[1.2px] uppercase">
                {b.table.headers.map((h) => (
                  <th key={h} className="py-3.5 px-4 font-bold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E7E4D8] text-[#141310]">
              {b.table.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-[#FBF8EE]/40 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className={`py-3.5 px-4 ${
                        cIdx === 0
                          ? 'font-mono text-[13px] font-semibold text-[#141310]'
                          : cIdx === 3
                          ? 'text-[#141310] font-medium'
                          : 'text-[#5E5A57]'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    return null;
  };

  return (
    <div className="min-h-screen bg-white text-[#141310]">
      <Navbar theme="light" />

      {/* HERO */}
      <section className="w-full bg-[#FBF8EE] px-6 sm:px-16 lg:px-[132px] pt-36 lg:pt-[170px] pb-[60px]">
        <div className="w-full max-w-[1176px] mx-auto flex flex-col gap-[13px]">
          <span className={`${SANS} font-bold text-[12.5px] leading-4 tracking-[2px] uppercase text-[#5E5A57]`}>
            Legal
          </span>
          <h1 className={`${DM} text-[42px] sm:text-[58px] leading-[1.05] tracking-[-0.58px]`}>
            Cookie Policy
          </h1>
          <p className={`${SANS} text-[16px] leading-[26px] text-[#5E5A57] max-w-[640px]`}>
            This page explains how Wiviy uses cookies and similar technologies, and the choices you have.
          </p>
          <p className={`${SANS} font-bold text-[12.5px] leading-4 tracking-[0.375px] text-[#5E5A57]`}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* COOKIES AT A GLANCE */}
      <section className="w-full border-t border-[#E7E4D8] px-6 sm:px-10 lg:px-20 py-[70px]">
        <div className="w-full max-w-[1240px] mx-auto px-0 sm:px-8 flex flex-col gap-[30px]">
          <h4 className={`${SANS} font-bold text-[12.5px] leading-4 tracking-[2px] uppercase text-[#5E5A57]`}>
            Cookies at a glance
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-9 max-w-[900px]">
            {GLANCE.map(({ Icon, title, text }) => (
              <div key={title} className="flex flex-col gap-[7px]">
                <Icon />
                <h3 className={`${SANS} pt-[9px] font-extrabold text-[13.5px] leading-[17px] tracking-[0.54px] uppercase text-[#141310]`}>
                  {title}
                </h3>
                <p className={`${SANS} text-[14.5px] leading-[23px] text-[#5E5A57] max-w-[260px]`}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 xl:px-0">
        <div className="border-t border-[#E7E4D8] pt-5 pb-24 lg:pb-[130px] flex gap-[70px]">
          {/* Table of contents */}
          <nav aria-label="On this page" className="hidden lg:block w-[220px] shrink-0">
            <div className="sticky top-8 flex flex-col gap-[18px] pt-[70px] pb-0.5">
              <h4 className={`${SANS} font-extrabold text-[12px] leading-[15px] tracking-[0.96px] uppercase text-[#5E5A57]`}>
                On this page
              </h4>
              <ul className="flex flex-col gap-0.5 border-l border-[#E7E4D8]">
                {SECTIONS.map((s) => {
                  const isActive = active === s.id;
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        onClick={(e) => goTo(e, s.id)}
                        aria-current={isActive ? 'true' : undefined}
                        className={`${SANS} block -ml-px py-2 pl-4 text-[13.5px] leading-[17px] border-l transition-colors ${
                          isActive
                            ? 'font-bold text-[#141310] border-[#D2F026]'
                            : 'text-[#5E5A57] border-transparent hover:text-[#141310]'
                        }`}
                      >
                        {s.n} {TOC_LABELS[s.id] || s.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* Document */}
          <article className="flex-1 min-w-0 pt-2 lg:pt-[70px]">
            <div className="max-w-[680px] flex flex-col gap-16">
              {SECTIONS.map((s) => (
                <section key={s.id} id={s.id} className="flex flex-col gap-2.5 scroll-mt-8">
                  <div className={`${SANS} font-extrabold text-[12px] leading-[15px] tracking-[1.2px] uppercase text-[#5E5A57]`}>
                    {s.n}
                  </div>
                  <h2 className={`${DM} text-[26px] leading-8 text-[#141310]`}>{s.title}</h2>
                  {s.blocks.map(renderBlock)}
                </section>
              ))}

              {/* Contact box */}
              <div className="border-t border-[#E7E4D8] pt-[50px] flex flex-col gap-2.5 items-start">
                <h3 className={`${DM} text-[24px] leading-[33px] tracking-[-0.24px]`}>
                  Still have questions?
                </h3>
                <p className={`${SANS} pb-3.5 text-[16px] leading-7 text-[#5E5A57]`}>
                  We're happy to help.
                </p>
                <a
                  href={contactHref}
                  className={`${SANS} inline-flex items-center h-[51px] px-7 rounded-full bg-[#D2F026] text-[#141310] font-bold text-[15px] hover:opacity-90 active:scale-95 transition-all`}
                >
                  Contact Wiviy
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </div>
  );
}
