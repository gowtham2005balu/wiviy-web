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
const SANS = "font-['Plus_Jakarta_Sans',sans-serif]";
const BODY = "font-['Calibri','Carlito',sans-serif]";

const PNGS = [feature1, feature2, feature3, feature4];

/* ---------- Data (swap for your API / route params) ---------- */
const DEFAULT_JOB = {
  department: 'Product Design',
  title: 'Senior Product Designer',
  meta: ['Remote', 'Full-time', 'India'],
  about:
    "As a Senior Product Designer at Wiviy, you'll shape how people experience discovery, connection and conversation across the app. You'll work closely with product, engineering and brand to design flows that feel human, spontaneous and distinctly Wiviy — from onboarding through to the moments that make someone stay.",
  lists: [
    {
      heading: 'What you’ll do',
      items: [
        'Design end-to-end product experiences across web and mobile.',
        'Partner closely with engineering and product to ship considered, polished features.',
        'Contribute to and help evolve the Wiviy design system.',
        'Turn ambiguous problems into clear, well-reasoned design directions.',
        'Bring a strong point of view on what makes dating feel more human.',
      ],
    },
    {
      heading: 'What you’ll bring',
      items: [
        '5+ years designing digital products, ideally consumer-facing.',
        'A strong portfolio showing end-to-end product thinking, not just visuals.',
        'Comfort working closely with engineers through to shipped detail.',
        'Clear communication and the ability to explain design decisions simply.',
      ],
    },
    {
      heading: 'Nice to have',
      items: [
        'Experience designing for social or dating products.',
        'Illustration or motion design skills.',
        'Experience contributing to a design system from the ground up.',
      ],
    },
  ],
  paragraphs: [
    {
      heading: 'Who you’ll work with',
      text: "You'll work closely with our product and engineering team, along with brand and marketing, to make sure every part of the experience feels considered — from the first screen someone sees to the smallest interaction detail.",
    },
    {
      heading: 'Why this role matters',
      text: 'Design is core to what makes Wiviy feel different from every other dating app. This role has real influence over how people experience meeting someone new — the small decisions you make will shape that experience for everyone who uses Wiviy.',
    },
  ],
  salaryNote: 'Competitive compensation based on experience and role scope.',
  salaryDisclaimer: 'Compensation may vary based on experience, scope, location and other role-related factors.',
};

const OTHER_ROLES = [
  { department: 'Engineering', title: 'Senior Frontend Engineer', meta: 'Remote · India · Full-time', href: '#' },
  { department: 'Product', title: 'Product Manager', meta: 'Bengaluru / Remote · Full-time', href: '#' },
  { department: 'Marketing', title: 'Growth Marketing Manager', meta: 'Remote · Full-time', href: '#' },
];

/* ---------- Small pieces ---------- */
function Heading({ children }) {
  return <h2 className={`${SERIF} font-medium text-[22px] sm:text-[26px] leading-8 text-[#171512]`}>{children}</h2>;
}

const bodyText = `${SANS} text-[16px] leading-[27px] text-[#171512]`;

function ShareButtons({ title }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const btn =
    'w-9 h-9 rounded-full bg-white border border-[#E8E6DD] flex items-center justify-center ' +
    "font-['Arial',sans-serif] text-[13px] font-bold text-black hover:bg-[#F7F6EF] transition-colors cursor-pointer";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="flex items-center justify-center gap-2.5">
      <button type="button" onClick={copyLink} className={btn} aria-label="Copy link" title={copied ? 'Copied!' : 'Copy link'}>
        {copied ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5" />
            <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5" />
          </svg>
        )}
      </button>
      <a className={btn} aria-label="Share on LinkedIn" target="_blank" rel="noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}>
        in
      </a>
      <a className={btn} aria-label="Share on X" target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}>
        X
      </a>
      <a className={btn} aria-label="Share on Facebook" target="_blank" rel="noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}>
        f
      </a>
    </div>
  );
}

/* ---------- Page ---------- */
export default function CareersDetails({ job = DEFAULT_JOB, applyHref = '/careers/apply', backHref = '/careers' }) {
  const heroImg = useMemo(() => PNGS[Math.floor(Math.random() * PNGS.length)], []);

  return (
    <div className="min-h-screen bg-white text-[#171512]">
      <Navbar theme="light" />

      <main className="w-full pt-[104px]">
        {/* Back link */}
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 xl:px-0 pt-12 pb-4">
          <a
            href={backHref}
            className={`${SANS} inline-flex items-center gap-1.5 font-extrabold text-[12.5px] leading-4 tracking-[1px] uppercase text-[#5E5A57] hover:text-[#171512] transition-colors`}
          >
            <span aria-hidden="true">←</span> Back to careers
          </a>
        </div>

        {/* Job header */}
        <header className="w-full border-b border-[#E8E6DD]">
          <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 xl:px-0 pt-10 lg:pt-20 pb-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div
              className="relative overflow-hidden w-full lg:w-[690px] h-[240px] sm:h-[320px] lg:h-[354px] rounded-[24px] shrink-0"
              style={{ background: 'linear-gradient(150deg, #EFE9C8 0%, #C9D79E 60%, #9DB26E 100%)' }}
            >
              <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-contain p-8" />
            </div>

            <div className="flex flex-col justify-center lg:px-16 gap-3.5">
              <span className={`${BODY} text-base leading-5 text-[#5E5A57]`}>{job.department}</span>
              <h1 className={`${SERIF} font-semibold text-[28px] sm:text-[32px] leading-10 text-[#171514]`}>{job.title}</h1>
              <p className={`${BODY} flex flex-wrap items-center gap-2 text-base leading-5 text-[#5E5A57]`}>
                {job.meta.map((m, i) => (
                  <span key={m} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden="true">·</span>}
                    {m}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </header>

        {/* Content + sidebar */}
        <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 xl:px-0 pt-[70px] pb-16 grid grid-cols-1 lg:grid-cols-[minmax(0,773px)_387px] lg:justify-between gap-14">
          <article className="flex flex-col gap-4 pb-4">
            <Heading>About the role</Heading>
            <p className={bodyText}>{job.about}</p>

            {job.lists.map((l) => (
              <div key={l.heading} className="flex flex-col gap-4 pt-7">
                <Heading>{l.heading}</Heading>
                <ul className={`${SANS} list-disc marker:text-[#171512] pl-[22px] flex flex-col gap-2 text-[15.5px] leading-[26px] text-[#171512]`}>
                  {l.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}

            {job.paragraphs.map((p, i) => (
              <div key={p.heading} className={`flex flex-col gap-4 pt-7 ${i === job.paragraphs.length - 1 ? 'pb-[34px]' : ''}`}>
                <Heading>{p.heading}</Heading>
                <p className={bodyText}>{p.text}</p>
              </div>
            ))}

            {/* Salary */}
            <section className="border-t border-[#E8E6DD] pt-10 flex flex-col gap-4">
              <Heading>Salary Range</Heading>
              <p className={`${SANS} text-[14px] leading-[22px] text-[#5E5A57] max-w-[520px]`}>{job.salaryNote}</p>
              <p className={`${SANS} text-[14px] leading-[22px] text-[#5E5A57] max-w-[520px] pt-2`}>{job.salaryDisclaimer}</p>
            </section>
          </article>

          <aside className="lg:sticky lg:top-6 self-start flex flex-col items-center">
            <div className="w-full max-w-[387px] flex flex-col items-center gap-4 rounded-[20px]">
              <h3 className={`${SERIF} font-semibold text-[24px] leading-[30px] tracking-[-0.19px] text-center`}>Think we'd click?</h3>
              <a
                href={applyHref}
                className={`${SANS} w-full max-w-[361px] h-[55px] flex items-center justify-center rounded-full bg-[#171512] text-white font-bold text-[15px] hover:opacity-90 active:scale-95 transition-all`}
              >
                Apply for this role
              </a>
              <p className={`${SANS} pt-3 font-bold text-[13px] leading-4 text-[#5E5A57]`}>Share this role</p>
              <div className="pb-8">
                <ShareButtons title={`${job.title} at Wiviy`} />
              </div>
              <div className="w-full border-t border-[#E8E6DD] pt-[26px] flex flex-col gap-[9px]">
                <h3 className={`${SERIF} font-medium text-[18px] leading-[22px]`}>Diversity makes us better.</h3>
                <p className={`${SANS} text-[13.5px] leading-[22px] text-[#5E5A57]`}>
                  Wiviy is committed to building an inclusive workplace where people with different experiences,
                  perspectives and backgrounds can do their best work.
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* Other open roles */}
        <section className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 xl:px-0">
          <div className="border-t border-[#E8E6DD] py-16 lg:py-[120px] flex flex-col gap-9">
            <h2 className={`${SANS} font-extrabold text-[12.5px] leading-4 tracking-[1.75px] uppercase text-[#5E5A57]`}>
              Other open roles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {OTHER_ROLES.map((r) => (
                <a
                  key={r.title}
                  href={r.href}
                  className="group flex flex-col gap-1 p-6 rounded-2xl border border-[#E8E6DD] hover:border-[#171512] transition-colors"
                >
                  <span className={`${SANS} font-bold text-[12.5px] leading-4 tracking-[2px] uppercase text-[#5E5A57]`}>
                    {r.department}
                  </span>
                  <span className={`${SANS} font-bold text-[17px] leading-[21px] group-hover:underline`}>{r.title}</span>
                  <span className={`${SANS} pt-1 text-[12.5px] leading-4 text-[#5E5A57]`}>{r.meta}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}