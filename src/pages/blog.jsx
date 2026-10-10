import { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';
import { BLOG_ARTICLES, FEATURED_ARTICLE, MORE_FROM_WIVIY } from '../data/blogData';

/* ---------- Tokens ---------- */
const SERIF = "font-['Libre_Baskerville',serif]";
const SANS = "font-['Plus_Jakarta_Sans',sans-serif]";
const BODY = "font-['Calibri','Carlito',sans-serif]";

const PNGS = [feature1, feature2, feature3, feature4];
const CATEGORIES = ['All', 'Dating', 'Relationships', 'Conversation', 'Wiviy', 'IRL', 'Culture'];
const PAGE_SIZE = 6;

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

export default function Blog() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Stable random image mapping per slot
  const pngFor = useMemo(() => {
    const pool = shuffle(PNGS);
    const map = { featured: pool[0] };
    BLOG_ARTICLES.forEach((a, i) => (map[a.id] = pool[(i + 1) % pool.length]));
    MORE_FROM_WIVIY.forEach((_, i) => (map[`more-${i}`] = pool[(i + 2) % pool.length]));
    return map;
  }, []);

  const filtered = BLOG_ARTICLES.filter((a) => {
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
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              stroke="#5E5A57"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
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
          <Link
            to={`/blog/${FEATURED_ARTICLE.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[58px] items-center cursor-pointer"
          >
            <ImageSlot
              src={pngFor.featured}
              gradient={FEATURED_ARTICLE.gradient}
              className="w-full h-[280px] sm:h-[400px] lg:h-[489px] rounded-[22px] group-hover:opacity-95 transition-opacity"
            />
            <div className="flex flex-col gap-[18px] lg:pr-0">
              <div className="flex flex-col gap-3">
                <span className={`${BODY} font-bold text-[12px] leading-[15px] tracking-[0.96px] uppercase text-[#5E5A57]`}>
                  {FEATURED_ARTICLE.category}
                </span>
                <div className="flex flex-col gap-[14px]">
                  <div className="flex flex-col gap-3">
                    <h3 className={`${BODY} text-[32px] sm:text-[42px] leading-[1.1] tracking-[-0.4px] max-w-[581px] group-hover:underline`}>
                      {FEATURED_ARTICLE.title}
                    </h3>
                    <p className={`${BODY} text-base leading-[25px] text-[#5E5A57] max-w-[440px]`}>
                      {FEATURED_ARTICLE.desc}
                    </p>
                  </div>
                  <p className={`${BODY} pt-1.5 text-[14px] leading-[17px] uppercase text-[#5E5A57]`}>
                    {FEATURED_ARTICLE.meta}
                  </p>
                </div>
              </div>
              <span className={`${BODY} pt-1.5 font-bold text-[15px] leading-[18px] inline-flex items-center gap-1.5 text-[#171512]`}>
                Read article <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        </section>
      )}

      {/* LATEST STORIES */}
      <section className={`${WRAP} ${category === 'All' && !query.trim() ? '' : 'pt-16'} flex flex-col gap-9`}>
        <h2 className={`${BODY} font-bold text-[13px] leading-4 tracking-[1.75px] uppercase text-[#5E5A57]`}>
          {category === 'All' && !query.trim()
            ? 'Latest stories'
            : `${filtered.length} ${filtered.length === 1 ? 'story' : 'stories'}`}
        </h2>

        {shown.length === 0 ? (
          <p className={`${BODY} text-[18px] text-[#5E5A57] py-16 text-center`}>
            No stories match that search. Try a different word or pick another category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-[34px]">
            {shown.map((a) => (
              <Link
                key={a.id}
                to={`/blog/${a.slug}`}
                className="group flex flex-col gap-1.5 cursor-pointer"
              >
                <div className="pb-[9px]">
                  <ImageSlot
                    src={pngFor[a.id]}
                    gradient={a.gradient}
                    className="w-full h-[278px] rounded-2xl group-hover:opacity-95 transition-opacity"
                  />
                </div>
                <div className="flex flex-col gap-[7px] px-3 border-l border-[#A19F9F]">
                  <span className={`${BODY} font-bold text-[12px] leading-[15px] tracking-[0.92px] uppercase text-[#5E5A57]`}>
                    {a.category}
                  </span>
                  <h3 className={`${BODY} text-[19.5px] leading-[26px] max-w-[386px] group-hover:underline text-[#171512]`}>
                    {a.title}
                  </h3>
                  <span className={`${BODY} text-[13px] leading-4 text-[#5E5A57]`}>{a.meta}</span>
                </div>
              </Link>
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
            <Link
              key={m.title}
              to={`/blog/${m.slug}`}
              className={`group flex items-center gap-5 sm:gap-7 py-7 border-t border-[#E8E6DD] cursor-pointer ${
                i === MORE_FROM_WIVIY.length - 1 ? 'border-b' : ''
              }`}
            >
              <ImageSlot
                src={pngFor[`more-${i}`]}
                gradient={m.gradient}
                className="shrink-0 w-[110px] h-[90px] sm:w-[180px] sm:h-[135px] rounded-xl group-hover:opacity-95 transition-opacity"
              />
              <div className="flex flex-col gap-1.5 min-w-0">
                <span className={`${SANS} font-extrabold text-[11px] leading-[14px] tracking-[0.88px] uppercase text-[#5E5A57]`}>
                  {m.category}
                </span>
                <h3 className={`${BODY} text-[18px] leading-[22px] tracking-[-0.19px] group-hover:underline text-[#171512]`}>
                  {m.title}
                </h3>
                <p className={`${BODY} text-[14px] leading-[17px] text-[#5E5A57] max-w-[520px]`}>
                  {m.desc}
                </p>
                <span className={`${BODY} text-[12px] leading-[15px] text-[#5E5A57]`}>{m.date}</span>
              </div>
            </Link>
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