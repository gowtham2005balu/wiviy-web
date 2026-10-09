import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

/* ---------- Tokens ---------- */
const SERIF = "font-['Libre_Baskerville',serif]";
const SANS = "font-['Plus_Jakarta_Sans',sans-serif]";

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenCookieSettings = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-cookie-settings'));
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#171512] flex flex-col justify-between">
      <Navbar theme="light" />

      <main className="w-full max-w-[760px] mx-auto px-6 sm:px-8 pt-32 sm:pt-36 pb-20 flex-1">
        {/* Back Link */}
        <div className="pb-6">
          <Link
            to="/"
            className={`${SANS} inline-flex items-center gap-1.5 font-bold text-[13.5px] leading-5 text-[#171512] hover:opacity-70 transition-opacity`}
          >
            <span aria-hidden="true">←</span> Back to Wiviy
          </Link>
        </div>

        {/* Title & Header */}
        <header className="pt-2 pb-10">
          <h1 className={`${SERIF} font-bold text-[38px] sm:text-[44px] leading-[1.15] text-[#171512] tracking-[-0.5px]`}>
            Cookie Policy
          </h1>
          <p className={`${SANS} text-[13.5px] leading-5 text-[#5E5A57] pt-3 pb-8`}>
            Last updated: October 2026
          </p>
          <p className={`${SANS} text-[15.5px] leading-[26px] text-[#5E5A57]`}>
            This page explains how Wiviy uses cookies and similar technologies, and the choices you have.
          </p>
        </header>

        {/* Section 1: What are cookies? */}
        <section className="py-6 flex flex-col gap-3">
          <h2 className={`${SANS} font-bold text-[21px] sm:text-[22px] leading-7 text-[#171512]`}>
            What are cookies?
          </h2>
          <p className={`${SANS} text-[15.5px] leading-[26px] text-[#5E5A57]`}>
            Cookies are small files stored on your device that help a website remember information about your visit.
          </p>
        </section>

        {/* Section 2: How we use cookies */}
        <section className="py-6 flex flex-col gap-3">
          <h2 className={`${SANS} font-bold text-[21px] sm:text-[22px] leading-7 text-[#171512]`}>
            How we use cookies
          </h2>
          <p className={`${SANS} text-[15.5px] leading-[26px] text-[#5E5A57]`}>
            We use cookies to keep Wiviy running smoothly, understand how people use our site, and improve your experience. You choose which non-essential cookies you allow from the Cookie settings panel at any time.
          </p>
        </section>

        {/* Section 3: Types of cookies */}
        <section className="py-6 flex flex-col gap-3.5">
          <h2 className={`${SANS} font-bold text-[21px] sm:text-[22px] leading-7 text-[#171512]`}>
            Types of cookies
          </h2>
          <div className={`${SANS} flex flex-col gap-3.5 text-[15px] sm:text-[15.5px] leading-[26px] text-[#5E5A57]`}>
            <p>
              <strong className="font-bold text-[#171512]">Strictly necessary</strong> — required for the site to function, including security, basic functionality and remembering your privacy choices.
            </p>
            <p>
              <strong className="font-bold text-[#171512]">Analytics</strong> — help us understand how visitors use Wiviy so we can improve the site.
            </p>
            <p>
              <strong className="font-bold text-[#171512]">Preferences</strong> — remember choices and settings for a more personalized experience.
            </p>
            <p>
              <strong className="font-bold text-[#171512]">Marketing</strong> — used to understand campaigns and deliver more relevant content.
            </p>
          </div>
        </section>

        {/* Section 4: Third-party cookies */}
        <section className="py-6 flex flex-col gap-3.5">
          <h2 className={`${SANS} font-bold text-[21px] sm:text-[22px] leading-7 text-[#171512]`}>
            Third-party cookies
          </h2>
          <div className="bg-[#F8FBDC] border border-dashed border-[#CFE46A] rounded-[14px] p-5">
            <p className={`${SANS} text-[14px] leading-[22px] text-[#5E5A57]`}>
              Placeholder — list specific third-party services (e.g. analytics or ad providers) here once confirmed. Not invented.
            </p>
          </div>
        </section>

        {/* Section 5: Cookie table */}
        <section className="py-6 flex flex-col gap-4">
          <h2 className={`${SANS} font-bold text-[21px] sm:text-[22px] leading-7 text-[#171512]`}>
            Cookie table
          </h2>
          <div className="overflow-x-auto w-full pt-1">
            <table className="w-full text-left font-sans text-[13.5px] sm:text-[14px] border-collapse min-w-[580px]">
              <thead>
                <tr className="border-b border-[#E8E6DD] text-[#5E5A57] font-bold text-[11.5px] tracking-[1.2px] uppercase">
                  <th className="py-3.5 pr-4 font-bold">COOKIE</th>
                  <th className="py-3.5 px-4 font-bold">PROVIDER</th>
                  <th className="py-3.5 px-4 font-bold">PURPOSE</th>
                  <th className="py-3.5 px-4 font-bold">CATEGORY</th>
                  <th className="py-3.5 pl-4 font-bold">DURATION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E6DD] text-[#171512]">
                <tr>
                  <td className="py-4 pr-4 font-mono text-[13px] text-[#171512]">wivy_consent</td>
                  <td className="py-4 px-4 text-[#5E5A57]">Wiviy</td>
                  <td className="py-4 px-4 text-[#5E5A57]">Stores your cookie preferences</td>
                  <td className="py-4 px-4 text-[#5E5A57]">Strictly necessary</td>
                  <td className="py-4 pl-4 text-[#5E5A57]">12 months</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 text-[#5E5A57]">[placeholder]</td>
                  <td className="py-4 px-4 text-[#5E5A57]">[placeholder]</td>
                  <td className="py-4 px-4 text-[#5E5A57]">[placeholder]</td>
                  <td className="py-4 px-4 text-[#5E5A57]">Analytics</td>
                  <td className="py-4 pl-4 text-[#5E5A57]">[placeholder]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: How to manage cookies */}
        <section className="py-6 flex flex-col gap-3 items-start">
          <h2 className={`${SANS} font-bold text-[21px] sm:text-[22px] leading-7 text-[#171512]`}>
            How to manage cookies
          </h2>
          <p className={`${SANS} text-[15.5px] leading-[26px] text-[#5E5A57]`}>
            You can change your cookie preferences at any time using the "Cookie settings" link in the footer, or by adjusting your browser settings.
          </p>
          <button
            type="button"
            onClick={handleOpenCookieSettings}
            className={`${SANS} font-bold text-[14.5px] text-[#171512] underline hover:opacity-75 transition-opacity cursor-pointer pt-1`}
          >
            Open cookie settings
          </button>
        </section>

        {/* Section 7: Your choices */}
        <section className="py-6 flex flex-col gap-3">
          <h2 className={`${SANS} font-bold text-[21px] sm:text-[22px] leading-7 text-[#171512]`}>
            Your choices
          </h2>
          <p className={`${SANS} text-[15.5px] leading-[26px] text-[#5E5A57]`}>
            Rejecting non-essential cookies won't affect your ability to use Wiviy's core features.
          </p>
        </section>

        {/* Section 8: Changes to this Cookie Policy */}
        <section className="py-6 flex flex-col gap-3.5">
          <h2 className={`${SANS} font-bold text-[21px] sm:text-[22px] leading-7 text-[#171512]`}>
            Changes to this Cookie Policy
          </h2>
          <div className="bg-[#F8FBDC] border border-dashed border-[#CFE46A] rounded-[14px] p-5">
            <p className={`${SANS} text-[14px] leading-[22px] text-[#5E5A57]`}>
              Placeholder — confirm the update-notification process before publishing.
            </p>
          </div>
        </section>

        {/* Section 9: Contact us */}
        <section className="pt-6 pb-12 flex flex-col gap-3.5">
          <h2 className={`${SANS} font-bold text-[21px] sm:text-[22px] leading-7 text-[#171512]`}>
            Contact us
          </h2>
          <div className="bg-[#F8FBDC] border border-dashed border-[#CFE46A] rounded-[14px] p-5">
            <p className={`${SANS} text-[14px] leading-[22px] text-[#5E5A57]`}>
              Placeholder — insert the confirmed contact email/address.
            </p>
          </div>
        </section>
      </main>

      {/* Footer matching Screenshot 3 */}
      <footer className="w-full border-t border-[#E8E6DD] py-8 mt-auto bg-white">
        <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`${SANS} text-[13px] text-[#5E5A57]`}>
            © 2026 Wiviy. All rights reserved.
          </p>
          <div className={`${SANS} flex flex-wrap items-center gap-6 text-[13px] text-[#5E5A57]`}>
            <Link to="/cookie-policy" className="hover:text-[#171512] transition-colors">
              Cookies
            </Link>
            <button
              type="button"
              onClick={handleOpenCookieSettings}
              className="hover:text-[#171512] transition-colors cursor-pointer"
            >
              Cookie settings
            </button>
            <Link to="/privacy" className="hover:text-[#171512] transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-[#171512] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
