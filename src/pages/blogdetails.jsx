import { useMemo, useState } from 'react';
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
const CATEGORIES = ['All', 'Dating', 'Relationships', 'Conversation', 'Wiviy', 'IRL', 'Culture'];
const PAGE_SIZE = 6;

const G = {
  green: 'linear-gradient(142.41deg, #EFE9C8 0%, #9DB26E 100%)',
  pink: 'linear-gradient(142.41deg, #E6D3E0 0%, #C48FB8 100%)',
  blue: 'linear-gradient(142.41deg, #CFE0F0 0%, #6F93B8 100%)',
  amber: 'linear-gradient(142.41deg, #F0D9C0 0%, #C48F4F 100%)',
  sage: 'linear-gradient(142.41deg, #D7E6C6 0%, #8FAE6E 100%)',
  rose: 'linear-gradient(142.41deg, #F6E0EA 0%, #D488AC 100%)',
  paleBlue: 'linear-gradient(142.41deg, #CFE0F0 0%, #9DB9D6 100%)',
  paleAmber: 'linear-gradient(142.41deg, #F0D9C0 0%, #D8A878 100%)',
};

const FEATURED = {
  category: 'Dating',
  title: 'How to make the first move without overthinking it',
  desc: 'A practical guide to making the first move without turning connection into a performance.',
  meta: 'By Wiviy · August 31, 2026 · 6 min read',
  gradient: 'linear-gradient(144.18deg, #EFE9C8 0%, #9DB26E 100%)',
  href: '/blog/first-move',
};

const ARTICLES = [
  { id: 1, category: 'Dating', title: 'How to make the first move without overthinking it', meta: 'Wiviy · Aug 31, 2026 · 6 min read', gradient: G.green },
  { id: 2, category: 'Conversation', title: 'Why good conversations start with better questions', meta: 'Wiviy · Aug 24, 2026 · 5 min read', gradient: G.pink },
  { id: 3, category: 'Wiviy', title: "Your profile doesn't have to say everything about you", meta: 'Wiviy · Aug 20, 2026 · 4 min read', gradient: G.blue },
  { id: 4, category: 'IRL', title: 'What makes someone worth meeting IRL?', meta: 'Wiviy · Aug 15, 2026 · 5 min read', gradient: G.amber },
  { id: 5, category: 'Conversation', title: 'The art of sending a first message', meta: 'Wiviy · Aug 10, 2026 · 4 min read', gradient: G.sage },
  { id: 6, category: 'Dating', title: "Dating without following someone else's rules", meta: 'Wiviy · Aug 6, 2026 · 5 min read', gradient: G.rose },
  // Revealed by "See more"
  { id: 7, category: 'Dating', title: 'When should you actually meet someone?', meta: 'Wiviy · Jul 12, 2026 · 4 min read', gradient: G.paleBlue },
  { id: 8, category: 'Culture', title: 'A better way to think about modern dating', meta: 'Wiviy · Jul 5, 2026 · 5 min read', gradient: G.paleAmber },
  { id: 9, category: 'Relationships', title: "Why connection doesn't always look the same", meta: 'Wiviy · Jun 28, 2026 · 4 min read', gradient: G.sage },
];

const MORE_FROM_WIVIY = [
  { category: 'Dating', title: 'When should you actually meet someone?', desc: 'Reading the signs that a conversation is ready to move offline.', date: 'Jul 12, 2026', gradient: G.paleBlue },
  { category: 'Culture', title: 'A better way to think about modern dating', desc: 'Less performance, more curiosity.', date: 'Jul 5, 2026', gradient: G.paleAmber },
  { category: 'Relationships', title: "Why connection doesn't always look the same", desc: 'There is no single right way to meet someone.', date: 'Jun 28, 2026', gradient: G.sage },
];

/* ---------- Helpers ---------- */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function ImageSlot({ src, gradient, className = '', alt = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: gradient }}>
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-contain p-6 sm:p-8" />
    </div>
  );
}

const WRAP = 'w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20';

/* ---------- Page ---------- */
export default function BlogDetails() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Random PNG per slot, stable across re-renders
  const pngFor = useMemo(() => {
    const pool = shuffle(PNGS);
    const map = { featured: pool[0] };
    ARTICLES.forEach((a, i) => (map[a.id] = pool[(i + 1) % pool.length]));
    MORE_FROM_WIVIY.forEach((_, i) => (map[`more-${i}`] = pool[(i + 2) % pool.length]));
    return map;
  }, []);

  const filtered = ARTICLES.filter((a) => {
    const matchCat = category === 'All' || a.category === category;
    const q = query.trim().toLowerCase();
    const matchQ = !q || a.title.toLowerCase().includes(q) || a.category.toLowerCase().includes(q);
    return matchCat && matchQ;
  });
  const shown = filtered.slice(0, visible);

  const onSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white text-[#171512]">
      <Navbar theme="light" />

      {/* HERO */}
      <section className="w-full px-6 sm:px-16 lg:px-[100px] pt-32 sm:pt-40 lg:pt-[190px] pb-12 lg:pb-[60px]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col items-center gap-6 text-center">
          <h1
            className={`${SERIF} font-semibold text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.2] tracking-[-0.96px] max-w-[560px]`}
          >
            Things worth talking about.
          </h1>
          <p className={`${BODY} text-[20px] leading-7 text-[#5E5A57] max-w-[460px] pt-[3px]`}>
            Dating, connection, conversations and everything in between.
          </p>
        </div>
      </section>

      {/* TOOLBAR */}
      <div className="sticky top-0 z-20 w-full bg-white/90 backdrop-blur-[5px]">
        <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-8 py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <label className="flex items-center gap-2.5 w-full lg:max-w-[400px] h-[46px] px-5 rounded-full border border-[#E8E6DD] focus-within:border-[#171512] transition-colors">
            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" stroke="#5E5A57" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <circle cx="6.5" cy="6.5" r="5" />
              <path d="M10.5 10.8 13.8 14.5" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisible(PAGE_SIZE);
              }}
              placeholder="Search the Wiviy Journal"
              aria-label="Search the Wiviy Journal"
              className={`${BODY} flex-1 bg-transparent outline-none text-base text-[#171512] placeholder:text-[#757575]`}
            />
          </label>

          <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CATEGORIES.map((c) => {
              const active = c === category;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => {
                    setCategory(c);
                    setVisible(PAGE_SIZE);
                  }}
                  aria-pressed={active}
                  className={`${BODY} shrink-0 h-[37px] px-4 rounded-full border text-[14px] leading-[17px] cursor-pointer transition-colors ${
                    active
                      ? 'bg-[#171512] border-[#171512] text-[#D2F026] font-bold'
                      : 'bg-white border-[#E8E6DD] text-[#5E5A57] hover:border-[#171512]'
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* FEATURED */}
      {category === 'All' && !query.trim() && (
        <section className={`${WRAP} pt-16 lg:pt-[100px] pb-16 lg:pb-[100px] flex flex-col gap-6`}>
          <h2 className={`${BODY} font-bold text-[13px] leading-4 tracking-[2px] uppercase text-[#5E5A57]`}>
            Featured
          </h2>
          <a href={FEATURED.href} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[58px] items-center">
            <ImageSlot
              src={pngFor.featured}
              gradient={FEATURED.gradient}
              className="w-full h-[280px] sm:h-[400px] lg:h-[489px] rounded-[22px]"
            />
            <div className="flex flex-col gap-[18px] lg:pr-0">
              <div className="flex flex-col gap-3">
                <span className={`${BODY} font-bold text-[12px] leading-[15px] tracking-[0.96px] uppercase text-[#5E5A57]`}>
                  {FEATURED.category}
                </span>
                <div className="flex flex-col gap-[14px]">
                  <div className="flex flex-col gap-3">
                    <h3 className={`${BODY} text-[32px] sm:text-[42px] leading-[1.1] tracking-[-0.4px] max-w-[581px]`}>
                      {FEATURED.title}
                    </h3>
                    <p className={`${BODY} text-base leading-[25px] text-[#5E5A57] max-w-[440px]`}>{FEATURED.desc}</p>
                  </div>
                  <p className={`${BODY} pt-1.5 text-[14px] leading-[17px] uppercase text-[#5E5A57]`}>{FEATURED.meta}</p>
                </div>
              </div>
              <span className={`${BODY} pt-1.5 font-bold text-[15px] leading-[18px] inline-flex items-center gap-1.5`}>
                Read article <span aria-hidden="true">→</span>
              </span>
            </div>
          </a>
        </section>
      )}

      {/* LATEST STORIES */}
      <section className={`${WRAP} ${category === 'All' && !query.trim() ? '' : 'pt-16'} flex flex-col gap-9`}>
        <h2 className={`${BODY} font-bold text-[13px] leading-4 tracking-[1.75px] uppercase text-[#5E5A57]`}>
          {category === 'All' && !query.trim() ? 'Latest stories' : `${filtered.length} ${filtered.length === 1 ? 'story' : 'stories'}`}
        </h2>

        {shown.length === 0 ? (
          <p className={`${BODY} text-[18px] text-[#5E5A57] py-16 text-center`}>
            No stories match that search. Try a different word or pick another category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-[34px]">
            {shown.map((a) => (
              <a key={a.id} href="#" className="group flex flex-col gap-1.5">
                <div className="pb-[9px]">
                  <ImageSlot src={pngFor[a.id]} gradient={a.gradient} className="w-full h-[278px] rounded-2xl" />
                </div>
                <div className="flex flex-col gap-[7px] px-3 border-l border-[#A19F9F]">
                  <span className={`${BODY} font-bold text-[12px] leading-[15px] tracking-[0.92px] uppercase text-[#5E5A57]`}>
                    {a.category}
                  </span>
                  <h3 className={`${BODY} text-[19.5px] leading-[26px] max-w-[386px] group-hover:underline`}>{a.title}</h3>
                  <span className={`${BODY} text-[13px] leading-4 text-[#5E5A57]`}>{a.meta}</span>
                </div>
              </a>
            ))}
          </div>
        )}

        {filtered.length > visible && (
          <div className="flex justify-center pt-6">
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className={`${BODY} h-[50px] px-[30px] rounded-full border border-[#171512] text-base hover:bg-[#171512] hover:text-white active:scale-95 transition-all cursor-pointer`}
            >
              See more
            </button>
          </div>
        )}
      </section>

      {/* MORE FROM WIVIY */}
      <section className={`${WRAP} py-16 lg:py-[100px] flex flex-col gap-8`}>
        <h2 className={`${BODY} font-bold text-[14px] leading-[17px] tracking-[1.75px] uppercase text-[#5E5A57]`}>
          More from Wiviy
        </h2>
        <div className="flex flex-col">
          {MORE_FROM_WIVIY.map((m, i) => (
            <a
              key={m.title}
              href="#"
              className={`group flex items-center gap-5 sm:gap-7 py-7 border-t border-[#E8E6DD] ${
                i === MORE_FROM_WIVIY.length - 1 ? 'border-b' : ''
              }`}
            >
              <ImageSlot
                src={pngFor[`more-${i}`]}
                gradient={m.gradient}
                className="shrink-0 w-[110px] h-[90px] sm:w-[180px] sm:h-[135px] rounded-xl"
              />
              <div className="flex flex-col gap-1.5 min-w-0">
                <span className={`${SANS} font-extrabold text-[11px] leading-[14px] tracking-[0.88px] uppercase text-[#5E5A57]`}>
                  {m.category}
                </span>
                <h3 className={`${BODY} text-[18px] leading-[22px] tracking-[-0.19px] group-hover:underline`}>{m.title}</h3>
                <p className={`${BODY} text-[14px] leading-[17px] text-[#5E5A57] max-w-[520px]`}>{m.desc}</p>
                <span className={`${BODY} text-[12px] leading-[15px] text-[#5E5A57]`}>{m.date}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="w-full bg-[#0F100C] px-6 sm:px-16 lg:px-[100px] py-[90px] lg:py-[130px]">
        <div className="w-full max-w-[1240px] mx-auto px-0 sm:px-8 flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center gap-[14px]">
            <h2
              className={`${SERIF} font-semibold text-[34px] sm:text-[46px] leading-[1.16] tracking-[-0.46px] text-white max-w-[540px]`}
            >
              Good conversations don't have to end here.
            </h2>
            <p className={`${BODY} pt-1 text-[18px] leading-[22px] text-[#E7E7E7] max-w-[420px]`}>
              Get new stories, dating ideas and Wiviy updates in your inbox.
            </p>
          </div>

          {subscribed ? (
            <p role="status" className={`${BODY} pt-[18px] text-[18px] text-[#D2F026]`}>
              You're subscribed. Your first story is on its way.
            </p>
          ) : (
            <form onSubmit={onSubscribe} className="flex flex-wrap justify-center gap-[10px] pt-[18px] w-full max-w-[420px]">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your@email.com"
                aria-label="Email address"
                className={`${BODY} flex-1 min-w-[200px] h-[50px] px-[18px] rounded-full bg-white border border-[#E8E6DD] text-[14.5px] text-[#171512] placeholder:text-[#757575] outline-none focus:ring-2 focus:ring-[#D2F026]`}
              />
              <button
                type="submit"
                className={`${BODY} h-[50px] px-7 rounded-full bg-[#D2F026] text-[#171512] font-bold text-[15px] hover:opacity-90 active:scale-95 transition-all cursor-pointer`}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}