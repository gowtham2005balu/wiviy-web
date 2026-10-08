import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

/* ---------- Tokens ---------- */
const DM = "font-['DM_Serif_Display',serif]";
const SANS = "font-['Plus_Jakarta_Sans',sans-serif]";

const LAST_UPDATED = 'September 1, 2026';

/* ---------- Privacy at a glance ---------- */
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

function LockIcon() {
  return (
    <svg {...svgProps}>
      <rect x="7" y="12" width="22" height="18" rx="3" fill="#fff" />
      <path d="M12 12V8a6 6 0 0 1 12 0v4" />
      <circle cx="18" cy="21" r="2" fill="#D2F026" stroke="none" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg {...svgProps}>
      <circle cx="18" cy="18" r="13" />
      <path d="M18 10v8l5 3" />
      <rect x="27" y="7" width="4" height="4" fill="#D2F026" stroke="none" />
    </svg>
  );
}
function TargetIcon() {
  return (
    <svg {...svgProps}>
      <circle cx="18" cy="18" r="13" />
      <path d="M18 5v26M5 18h26" />
      <circle cx="18" cy="18" r="3" fill="#D2F026" stroke="none" />
    </svg>
  );
}

const GLANCE = [
  { Icon: LockIcon, title: 'What we collect', text: 'Information needed to create and operate your Wiviy experience.' },
  { Icon: ClockIcon, title: 'Why we use it', text: 'To provide features, improve the service and help keep Wiviy safe.' },
  { Icon: TargetIcon, title: 'Your choices', text: 'You can manage your information and account settings.' },
];

/* ---------- Content ---------- */
// Block types: { p }, { ul: [] }, { callout: { title, text } }, { deleteBox: { title, text, cta, href } }
const SECTIONS = [
  {
    title: 'What We Collect',
    blocks: [
      {
        p: 'To provide Wiviy, we collect information you give us directly, information generated as you use the app, and limited information from your device. The sections below explain each of these in more detail.',
      },
    ],
  },
  {
    title: 'Information You Provide',
    blocks: [
      { p: 'This includes your phone number, profile details (like photos, interests and bio), and anything else you choose to add to your account.' },
      {
        ul: [
          'Account details, such as your phone number.',
          'Profile content, including photos, interests and prompts.',
          'Any information you send us directly, like support requests.',
        ],
      },
    ],
  },
  {
    title: 'Information Collected Automatically',
    blocks: [
      {
        p: 'As you use Wiviy, we automatically collect certain technical information, such as device type, app usage and general activity patterns, to help the app function properly and to improve the experience over time.',
      },
    ],
  },
  {
    title: 'How We Use Your Information',
    blocks: [
      {
        p: "We use the information we collect to operate Wiviy's core features — like Discover, Shake, Nearby and matching — as well as to keep the platform safe, provide support, and improve the product over time.",
      },
      {
        callout: {
          title: 'Your control',
          text: 'You can review, update or delete certain information associated with your Wiviy account at any time.',
        },
      },
    ],
  },
  {
    title: 'How We Share Information',
    blocks: [
      {
        p: "We don't sell your personal information. We may share limited information with service providers who help us operate Wiviy, or when required by law, or with your consent.",
      },
      {
        ul: [
          'Other Wiviy users see the profile information you choose to share.',
          'Service providers who help us run the app, under confidentiality obligations.',
          'Legal authorities, only when required to comply with the law.',
        ],
      },
    ],
  },
  {
    title: 'Location Information',
    blocks: [
      {
        p: 'Features like Nearby use approximate location to help you discover people and conversations around you. You can control location access through your device settings at any time.',
      },
    ],
  },
  {
    title: 'Photos & Profile Information',
    blocks: [
      {
        p: "Photos and profile details you upload are shown to other Wiviy users as part of your profile. Please only share information you're comfortable being visible to people you match and connect with.",
      },
    ],
  },
  {
    title: 'Messages & Conversations',
    blocks: [
      {
        p: 'Your conversations on Wiviy are stored to provide the messaging feature and to support safety and moderation efforts, such as investigating reports of abuse.',
      },
    ],
  },
  {
    title: 'Cookies & Similar Technologies',
    blocks: [
      {
        p: 'We use cookies and similar technologies on our website to keep you signed in, understand how Wiviy is used, and improve our services over time.',
      },
    ],
  },
  {
    title: 'Data Retention',
    blocks: [
      {
        p: 'We retain your information for as long as your account is active, or as needed to provide the Service. Some information may be retained for a limited period after account deletion where required for legal or safety reasons.',
      },
    ],
  },
  {
    title: 'Your Privacy Choices',
    blocks: [
      {
        p: 'You can update your profile information, manage notification preferences, and control location access directly within the app. You can also contact us with questions about your data at any time.',
      },
    ],
  },
  {
    title: 'Account Deletion',
    blocks: [
      {
        deleteBox: {
          title: 'Delete your account',
          text: 'You can request deletion of your Wiviy account and associated information at any time, subject to applicable legal requirements. Some information may be retained where necessary for safety, security or legal compliance.',
          cta: 'Manage my account',
          href: '/account',
        },
      },
    ],
  },
  {
    title: 'Security',
    blocks: [
      {
        p: 'We use reasonable technical and organizational measures to protect your information. No method of transmission or storage is completely secure, but we work to keep your data protected.',
      },
    ],
  },
  {
    title: "Children's Privacy",
    blocks: [
      {
        p: "Wiviy is intended for adults 18 and older. We do not knowingly collect information from anyone under 18. If we learn that we've collected information from a minor, we'll take steps to delete it.",
      },
    ],
  },
  {
    title: 'International Users',
    blocks: [
      {
        p: 'Wiviy may process and store information in countries other than where you live. Wherever your data is processed, we take steps to protect it consistent with this Privacy Policy.',
      },
    ],
  },
  {
    title: 'Changes to This Policy',
    blocks: [
      {
        p: "We may update this Privacy Policy from time to time. If we make material changes, we'll notify you through the app or by other reasonable means before the changes take effect.",
      },
    ],
  },
  {
    title: 'Contact Us',
    blocks: [{ p: 'If you have questions about this Privacy Policy or how we handle your information, reach out to the Wiviy team any time.' }],
  },
].map((s, i) => {
  const n = String(i + 1).padStart(2, '0');
  return { ...s, n, id: `s${n}` };
});

// The TOC uses shorter labels for a few long titles
const TOC_LABELS = {
  s03: 'Info Collected Automatically',
  s07: 'Photos & Profile Info',
  s09: 'Cookies & Similar Tech',
};

/* ---------- Page ---------- */
export default function Privacy({ contactHref = '/contact' }) {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
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

  const renderBlock = (b, i) => {
    if (b.p)
      return (
        <p key={i} className={`${SANS} pt-2 text-[16px] leading-7 text-[#141310]`}>
          {b.p}
        </p>
      );
    if (b.ul)
      return (
        <ul key={i} className={`${SANS} list-disc marker:text-[#141310] pl-[22px] pt-[7px] flex flex-col gap-[7px] text-[15.5px] leading-[26px] text-[#141310]`}>
          {b.ul.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
      );
    if (b.callout)
      return (
        <div key={i} className="mt-4 flex flex-col gap-[7px] px-6 py-5 rounded-[10px] bg-[#FBF8EE] border-l-[3px] border-[#D2F026]">
          <h4 className={`${SANS} font-extrabold text-[14.5px] leading-[18px] text-[#141310]`}>{b.callout.title}</h4>
          <p className={`${SANS} text-[14.5px] leading-[25px] text-[#5E5A57]`}>{b.callout.text}</p>
        </div>
      );
    if (b.deleteBox)
      return (
        <div key={i} className="mt-2 flex flex-col items-start gap-3 rounded-[18px] border border-[#141310] px-8 pt-14 pb-9">
          <h3 className={`${DM} text-[22px] leading-[30px] tracking-[-0.22px] text-[#141310]`}>{b.deleteBox.title}</h3>
          <p className={`${SANS} pb-2 text-[16px] leading-7 text-[#141310]`}>{b.deleteBox.text}</p>
          <a
            href={b.deleteBox.href}
            className={`${SANS} inline-flex items-center h-[51px] px-7 rounded-full border border-[#141310] text-[#141310] font-bold text-[15px] hover:bg-[#141310] hover:text-white transition-colors`}
          >
            {b.deleteBox.cta}
          </a>
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
          <span className={`${SANS} font-bold text-[12.5px] leading-4 tracking-[2px] uppercase text-[#5E5A57]`}>Legal</span>
          <h1 className={`${DM} text-[42px] sm:text-[58px] leading-[1.05] tracking-[-0.58px]`}>Privacy Policy</h1>
          <p className={`${SANS} text-[16px] leading-[26px] text-[#5E5A57] max-w-[640px]`}>
            Your information is personal. Here's how Wiviy collects, uses and protects it.
          </p>
          <p className={`${SANS} font-bold text-[12.5px] leading-4 tracking-[0.375px] text-[#5E5A57]`}>Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* PRIVACY AT A GLANCE */}
      <section className="w-full border-t border-[#E7E4D8] px-6 sm:px-10 lg:px-20 py-[70px]">
        <div className="w-full max-w-[1240px] mx-auto px-0 sm:px-8 flex flex-col gap-[30px]">
          <h4 className={`${SANS} font-bold text-[12.5px] leading-4 tracking-[2px] uppercase text-[#5E5A57]`}>Privacy at a glance</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-9 max-w-[900px]">
            {GLANCE.map(({ Icon, title, text }) => (
              <div key={title} className="flex flex-col gap-[7px]">
                <Icon />
                <h3 className={`${SANS} pt-[9px] font-extrabold text-[13.5px] leading-[17px] tracking-[0.54px] uppercase text-[#141310]`}>{title}</h3>
                <p className={`${SANS} text-[14.5px] leading-[23px] text-[#5E5A57] max-w-[260px]`}>{text}</p>
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
              <h4 className={`${SANS} font-extrabold text-[12px] leading-[15px] tracking-[0.96px] uppercase text-[#5E5A57]`}>On this page</h4>
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
                          isActive ? 'font-bold text-[#141310] border-[#D2F026]' : 'text-[#5E5A57] border-transparent hover:text-[#141310]'
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
                  <div className={`${SANS} font-extrabold text-[12px] leading-[15px] tracking-[1.2px] uppercase text-[#5E5A57]`}>{s.n}</div>
                  <h2 className={`${DM} text-[26px] leading-8 text-[#141310]`}>{s.title}</h2>
                  {s.blocks.map(renderBlock)}
                </section>
              ))}

              {/* Contact box */}
              <div className="border-t border-[#E7E4D8] pt-[50px] flex flex-col gap-2.5 items-start">
                <h3 className={`${DM} text-[24px] leading-[33px] tracking-[-0.24px]`}>Still have questions?</h3>
                <p className={`${SANS} pb-3.5 text-[16px] leading-7 text-[#5E5A57]`}>We're happy to help.</p>
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