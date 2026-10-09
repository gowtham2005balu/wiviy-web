import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';

/* ---------- Tokens ---------- */
const SERIF = "font-['Libre_Baskerville',serif]";
const SANS = "font-['Plus_Jakarta_Sans',sans-serif]";
const BODY = "font-['Calibri','Carlito',sans-serif]";

const PNGS = [feature1, feature2, feature3, feature4];

const HERO_GRADIENT = 'linear-gradient(130.89deg, #EFE9C8 0%, #9DB26E 100%)';

const ARTICLES = [
  {
    category: 'Dating',
    title: 'How to make the first move without overthinking it',
    meta: 'Wiviy · Aug 31, 2026 · 6 min read',
    gradient: 'linear-gradient(142.41deg, #EFE9C8 0%, #9DB26E 100%)',
  },
  {
    category: 'Conversation',
    title: 'Why good conversations start with better questions',
    meta: 'Wiviy · Aug 24, 2026 · 5 min read',
    gradient: 'linear-gradient(142.41deg, #E6D3E0 0%, #C48FB8 100%)',
  },
  {
    category: 'Wiviy',
    title: "Your profile doesn't have to say everything about you",
    meta: 'Wiviy · Aug 20, 2026 · 4 min read',
    gradient: 'linear-gradient(142.41deg, #CFE0F0 0%, #6F93B8 100%)',
  },
];

/* Shuffle once so hero + related cards get different random PNGs */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---------- Reusable pieces ---------- */
function ImageSlot({ src, gradient, className = '', alt = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: gradient }}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-contain p-6 sm:p-10"
      />
    </div>
  );
}

function ShareButtons() {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const title = 'How to make the first move without overthinking it';

  const btn =
    `${SANS} w-[34px] h-[34px] rounded-full border border-[#E8E6DD] flex items-center justify-center ` +
    'text-[13px] font-extrabold text-[#171512] hover:bg-[#F7F6EF] transition-colors cursor-pointer';

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
    <div className="flex items-center justify-center gap-3">
      <a
        className={btn}
        aria-label="Share on LinkedIn"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noreferrer"
      >
        in
      </a>
      <a
        className={btn}
        aria-label="Share on X"
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noreferrer"
      >
        X
      </a>
      <a
        className={btn}
        aria-label="Share on Facebook"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noreferrer"
      >
        f
      </a>
      <button type="button" className={btn} aria-label="Copy link" onClick={copyLink} title={copied ? 'Copied!' : 'Copy link'}>
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
    </div>
  );
}

/* ---------- Page ---------- */
export default function Blog() {
  const [imgs] = useState(() => shuffle(PNGS)); // imgs[0] hero, imgs[1..3] related cards

  const h2 = `${SERIF} font-medium text-[24px] sm:text-[30px] leading-[1.2] text-[#171512] pt-[36px]`;
  const p = `${BODY} text-[18px] leading-[31px] text-[#171512]`;

  return (
    <div className="min-h-screen bg-white text-[#171512]">
      <Navbar theme="light" />

      {/* Back link */}
      <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-0 mt-[52px]">
        <a
          href="#"
          className={`${BODY} inline-flex items-center gap-1.5 font-bold text-[14px] leading-[17px] tracking-[1px] uppercase text-[#5E5A57] hover:text-[#171512] transition-colors`}
        >

        </a>
      </div>

      {/* Article header */}
      <header className="w-full max-w-[1240px] mx-auto px-6 flex flex-col items-center text-center gap-4 pt-12 sm:pt-[70px] pb-12 sm:pb-[100px] border-b border-[#E8E6DD]/60">
        <span className={`${BODY} font-bold text-[12.5px] leading-[15px] tracking-[2px] uppercase text-[#5E5A57]`}>
          Dating
        </span>
        <h1
          className={`${SERIF} max-w-[820px] font-semibold text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.14] tracking-[-0.52px] text-[#171512]`}
        >
          How to make the first move without overthinking it
        </h1>
        <p className={`${BODY} pt-1 font-bold text-[12.5px] leading-[15px] tracking-[0.5px] uppercase text-[#5E5A57]`}>
          By Wiviy · August 31, 2026 · 6 min read
        </p>
      </header>

      <main>
        <article className="w-full flex flex-col items-center">
          {/* Hero image */}
          <div className="w-full px-6 sm:px-10 flex justify-center">
            <ImageSlot
              src={imgs[0]}
              gradient={HERO_GRADIENT}
              alt=""
              className="w-full max-w-[1100px] h-[220px] sm:h-[400px] lg:h-[550px] rounded-[20px]"
            />
          </div>

          {/* Body */}
          <div className="w-full max-w-[783px] px-6 sm:px-8 pt-[60px] flex flex-col">
            <div className="flex flex-col gap-[19.3px] pb-10">
              <p className={p}>Making the first move can feel like a performance.</p>
              <p className={`${p} pt-1.5`}>
                You want to say the right thing. You want to seem interesting. You don't want to come across too
                strong.
              </p>
              <p className={`${p} pt-1.5`}>
                But connection doesn't usually happen because someone found the perfect sentence. It happens because
                someone decided to start.
              </p>

              <h2 className={h2}>Start with something real</h2>
              <p className={`${p} pb-6`}>
                The pressure to be clever usually gets in the way of being clear. A first message doesn't need to be
                quotable — it needs to be honest. Reference something in their profile, ask a real question, or simply
                say what made you want to say hello. Specific beats impressive, almost every time.
              </p>

              <blockquote
                className={`${SERIF} border-l-[3px] border-[#D2F026] pl-7 pt-1 pb-1.5 text-[22px] sm:text-[28px] leading-[1.36] text-[#171512] sm:-mr-8`}
              >
                "Connection doesn't usually happen because someone found the perfect sentence. It happens because
                someone decided to start."
              </blockquote>

              <h2 className={h2}>Forget the perfect opener</h2>
              <p className={`${p} pb-6`}>
                There's no opener that works on everyone, because the goal was never to write something universally
                charming — it was to start a conversation with one specific person. Read what they've shared. Respond
                to that. If it feels like something you'd actually say out loud, it's probably a good opener.
              </p>

              <div className="bg-[#F7F6EF] rounded-2xl px-[30px] py-7">
                <p className={`${BODY} text-[16.5px] leading-[26px] text-[#171512] max-w-[464px]`}>
                  Three things worth remembering before you hit send: be specific, be yourself, and don't wait for the
                  "right" moment — there rarely is one.
                </p>
              </div>

              <h2 className={h2}>Give the conversation somewhere to go</h2>
              <p className={p}>
                A good first message often does one of two things: it asks something the other person will enjoy
                answering, or it shares something small about you that invites a reply. Avoid questions that can be
                answered with a single word — they tend to end conversations rather than start them.
              </p>

              <ul className={`${BODY} list-disc marker:text-[#171512] pl-6 sm:pl-[72px] pt-1.5 flex flex-col gap-2.5 text-[18px] leading-[29px] text-[#171512]`}>
                <li>Ask about something specific in their profile, not a generic "how's your day."</li>
                <li>Share a short reaction or opinion — it gives them something to respond to.</li>
                <li>Keep it short enough that replying feels easy, not like homework.</li>
              </ul>

              <h2 className={h2}>Know when to take it offline</h2>
              <p className={p}>
                Texting can only carry a connection so far. Once a conversation has a bit of rhythm — you're both
                replying quickly, asking questions, finding things to laugh about — that's usually a good sign it's
                ready to move somewhere else, whether that's a call or meeting in person. Waiting too long to suggest
                it can drain the momentum you've built.
              </p>
              <p className={`${p} pt-1.5`}>
                There's no perfect formula for the first move. But the version that works is almost always the one that
                sounds like you, sent without waiting for a guarantee.
              </p>
            </div>

            {/* Share */}
            <div className="flex flex-col items-center gap-5 py-8">
              <p className={`${BODY} text-base leading-5 text-[#5E5A57]`}>Share this article.</p>
              <ShareButtons />
            </div>
          </div>
        </article>

        {/* Related articles */}
        <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-16 lg:py-[100px] flex flex-col gap-9">
          <h2 className={`${SANS} font-extrabold text-[12.5px] leading-4 tracking-[1.75px] uppercase text-[#5E5A57]`}>
            Related articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLES.map((a, i) => (
              <a key={a.title} href="/blogdetails" className="group flex flex-col gap-1.5">
                <div className="pb-[9px]">
                  <ImageSlot
                    src={imgs[i + 1]}
                    gradient={a.gradient}
                    alt=""
                    className="w-full h-[278px] rounded-2xl"
                  />
                </div>
                <div className="flex flex-col gap-[7px] px-3 border-l border-[#A19F9F]">
                  <span className={`${BODY} font-bold text-[12px] leading-[15px] tracking-[0.92px] uppercase text-[#5E5A57]`}>
                    {a.category}
                  </span>
                  <h3 className={`${BODY} text-[19.5px] leading-[26px] text-[#171512] group-hover:underline`}>
                    {a.title}
                  </h3>
                  <span className={`${BODY} text-[13px] leading-4 text-[#5E5A57]`}>{a.meta}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}