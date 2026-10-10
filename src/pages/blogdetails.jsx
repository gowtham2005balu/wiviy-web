import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';
import { BLOG_ARTICLES, FEATURED_ARTICLE } from '../data/blogData';

/* ---------- Tokens ---------- */
const SERIF = "font-['Libre_Baskerville',serif]";
const SANS = "font-['Plus_Jakarta_Sans',sans-serif]";
const BODY = "font-['Calibri','Carlito',sans-serif]";

const PNGS = [feature1, feature2, feature3, feature4];

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
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-contain p-6 sm:p-10"
      />
    </div>
  );
}

function ShareButtons({ title = '' }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';

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
      <button
        type="button"
        className={btn}
        aria-label="Copy link"
        onClick={copyLink}
        title={copied ? 'Copied!' : 'Copy link'}
      >
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

export default function BlogDetails() {
  const { slug } = useParams();

  // Scroll to top on load or route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Find the requested article or default to featured
  const article = useMemo(() => {
    if (!slug) return FEATURED_ARTICLE;
    const found = BLOG_ARTICLES.find(
      (a) => a.slug === slug || String(a.id) === slug
    );
    return found || FEATURED_ARTICLE;
  }, [slug]);

  // Related articles (exclude current)
  const relatedArticles = useMemo(() => {
    return BLOG_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);
  }, [article.slug]);

  // Stable random image mapping per slot
  const imgs = useMemo(() => {
    return shuffle(PNGS);
  }, [article.slug]);

  const h2 = `${SERIF} font-medium text-[24px] sm:text-[30px] leading-[1.2] text-[#171512] pt-[36px]`;
  const p = `${BODY} text-[18px] leading-[31px] text-[#171512]`;

  return (
    <div className="min-h-screen bg-white text-[#171512]">
      <Navbar theme="light" />

      {/* Back link */}
      <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-0 pt-8 sm:pt-12">
        <Link
          to="/blog"
          className={`${BODY} inline-flex items-center gap-2 font-bold text-[14px] leading-[17px] tracking-[1px] uppercase text-[#5E5A57] hover:text-[#171512] transition-colors`}
        >
          <span aria-hidden="true">←</span> Back to Journal
        </Link>
      </div>

      {/* Article header */}
      <header className="w-full max-w-[1240px] mx-auto px-6 flex flex-col items-center text-center gap-4 pt-10 sm:pt-[50px] pb-12 sm:pb-[80px] border-b border-[#E8E6DD]/60">
        <span className={`${BODY} font-bold text-[12.5px] leading-[15px] tracking-[2px] uppercase text-[#5E5A57]`}>
          {article.category}
        </span>
        <h1
          className={`${SERIF} max-w-[820px] font-semibold text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.14] tracking-[-0.52px] text-[#171512]`}
        >
          {article.title}
        </h1>
        <p className={`${BODY} pt-1 font-bold text-[12.5px] leading-[15px] tracking-[0.5px] uppercase text-[#5E5A57]`}>
          {article.meta}
        </p>
      </header>

      <main>
        <article className="w-full flex flex-col items-center">
          {/* Hero image */}
          <div className="w-full px-6 sm:px-10 flex justify-center pt-8">
            <ImageSlot
              src={imgs[0]}
              gradient={article.gradient}
              alt=""
              className="w-full max-w-[1100px] h-[220px] sm:h-[400px] lg:h-[520px] rounded-[20px]"
            />
          </div>

          {/* Body */}
          <div className="w-full max-w-[783px] px-6 sm:px-8 pt-[60px] flex flex-col">
            <div className="flex flex-col gap-[19.3px] pb-10">
              {article.desc && (
                <p className={`${p} text-[20px] font-medium leading-[33px] text-[#2F2C29]`}>
                  {article.desc}
                </p>
              )}

              {article.quote && (
                <blockquote
                  className={`${SERIF} border-l-[3px] border-[#D2F026] pl-7 my-4 py-2 text-[22px] sm:text-[28px] leading-[1.36] text-[#171512] sm:-mr-8`}
                >
                  "{article.quote}"
                </blockquote>
              )}

              {article.sections &&
                article.sections.map((sec, idx) => (
                  <div key={idx} className="flex flex-col gap-[16px]">
                    {sec.heading && <h2 className={h2}>{sec.heading}</h2>}
                    {sec.paragraphs &&
                      sec.paragraphs.map((para, pIdx) => (
                        <p key={pIdx} className={p}>
                          {para}
                        </p>
                      ))}

                    {sec.callout && (
                      <div className="bg-[#F7F6EF] rounded-2xl px-[30px] py-7 my-2">
                        <p className={`${BODY} text-[16.5px] leading-[26px] text-[#171512] max-w-[500px]`}>
                          {sec.callout}
                        </p>
                      </div>
                    )}

                    {sec.bullets && (
                      <ul
                        className={`${BODY} list-disc marker:text-[#171512] pl-6 sm:pl-[72px] pt-1.5 flex flex-col gap-2.5 text-[18px] leading-[29px] text-[#171512]`}
                      >
                        {sec.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>

            {/* Share */}
            <div className="flex flex-col items-center gap-5 py-8 border-t border-[#E8E6DD]/80">
              <p className={`${BODY} text-base leading-5 text-[#5E5A57]`}>Share this article.</p>
              <ShareButtons title={article.title} />
            </div>
          </div>
        </article>

        {/* Related articles */}
        <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-16 lg:py-[100px] flex flex-col gap-9">
          <h2 className={`${SANS} font-extrabold text-[12.5px] leading-4 tracking-[1.75px] uppercase text-[#5E5A57]`}>
            Related articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((a, i) => (
              <Link
                key={a.title}
                to={`/blog/${a.slug}`}
                className="group flex flex-col gap-1.5 cursor-pointer"
              >
                <div className="pb-[9px]">
                  <ImageSlot
                    src={imgs[(i + 1) % imgs.length]}
                    gradient={a.gradient}
                    alt=""
                    className="w-full h-[278px] rounded-2xl group-hover:opacity-95 transition-opacity"
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
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}