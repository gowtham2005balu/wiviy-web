import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

/* ---------- Tokens ---------- */
const DM = "font-['DM_Serif_Display',serif]";
const SANS = "font-['Plus_Jakarta_Sans',sans-serif]";

const FIELD = `${SANS} w-full bg-white border border-[#E7E4D8] rounded-xl px-4 py-[13px] text-[15px] leading-[19px] text-[#141310] placeholder:text-[#757575] focus:outline-none focus:border-[#141310] transition-colors`;
const LABEL = `${SANS} font-bold text-[13.5px] leading-[17px] text-[#141310]`;

/* ---------- Content ---------- */
const TOPICS = [
  'Sign up & verification',
  'Profile',
  'Matching & likes',
  'Nearby',
  'Icebreakers',
  'Swipe controls & filters',
  'Premium plans',
  'Safety & support',
  'Other',
];

const REACH = [
  { title: 'Support', text: 'General questions and technical issues', href: '/support' },
  { title: 'Safety', text: 'Safety concerns and reports', href: '/safety' },
  { title: 'Privacy', text: 'Questions about your personal information', href: '/privacy' },
];

/* ---------- Page ---------- */
export default function Support({ helpHref = '/help', reportHref = '/safety', onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' });
  const [file, setFile] = useState(null);
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit?.({ ...form, file });
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#141310]">
      <Navbar theme="light" />

      {/* BREADCRUMB */}
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 xl:px-0 pt-28 lg:pt-[132px]">
        <p className={`${SANS} font-semibold text-[12.5px] leading-4 text-[#5E5A57]`}>
          <a href={helpHref} className="hover:text-[#141310]">Help Center</a>
          <span className="mx-1.5">›</span>
          <span className="text-[#141310]">Support</span>
        </p>
      </div>

      {/* HERO */}
      <section className="w-full max-w-[1080px] mx-auto px-6 sm:px-10 xl:px-0 pt-[60px] flex flex-col gap-2.5">
        <span className={`${SANS} font-bold text-[12.5px] leading-4 tracking-[2px] uppercase text-[#5E5A57]`}>Support</span>
        <h1 className={`${DM} text-[38px] sm:text-[46px] leading-[1.09] tracking-[-0.46px]`}>Need a little help?</h1>
        <p className={`${SANS} pt-1 text-[16px] leading-[26px] text-[#5E5A57] max-w-[480px]`}>
          Can't find what you're looking for? We're here to help.
        </p>
      </section>

      {/* BODY */}
      <div className="w-full max-w-[1080px] mx-auto px-6 sm:px-10 xl:px-0 pt-[70px] pb-24 lg:pb-[100px] flex flex-col lg:flex-row gap-14 lg:gap-[70px] items-start">
        {/* Form */}
        <div className="w-full lg:flex-1 flex flex-col gap-9">
          <div className="flex flex-col gap-2">
            <h2 className={`${DM} text-[26px] leading-9 tracking-[-0.26px]`}>Contact Wiviy</h2>
            <p className={`${SANS} text-[15px] leading-[19px] text-[#5E5A57]`}>Tell us what's going on and we'll help you figure it out.</p>
          </div>

          {sent ? (
            <p role="status" className={`${SANS} text-[15px] leading-[22px] text-[#141310]`}>
              Thanks{form.name ? `, ${form.name}` : ''}. We'll reply to {form.email || 'your email'} soon.
            </p>
          ) : (
            <form id="supportForm" onSubmit={handleSubmit} className="flex flex-col">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-2 pb-5">
                  <label htmlFor="fullName" className={LABEL}>Full name</label>
                  <input id="fullName" required value={form.name} onChange={set('name')} placeholder="Your name" className={FIELD} />
                </div>
                <div className="flex-1 flex flex-col gap-2 pb-5">
                  <label htmlFor="supEmail" className={LABEL}>Email address</label>
                  <input id="supEmail" type="email" required value={form.email} onChange={set('email')} placeholder="you@example.com" className={FIELD} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="topic" className={LABEL}>What can we help with?</label>
                <select id="topic" required value={form.topic} onChange={set('topic')} className={`${FIELD} h-[49px] py-3 pl-5 ${form.topic ? '' : 'text-[#000]'}`}>
                  <option value="" disabled>Select a topic</option>
                  {TOPICS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2 pt-5">
                <label htmlFor="message" className={LABEL}>Message</label>
                <textarea id="message" required rows={5} value={form.message} onChange={set('message')} placeholder="Tell us what happened and how we can help…" className={`${FIELD} min-h-[142px] resize-y`} />
              </div>

              <div className="flex flex-col gap-2 pt-5 pb-[34px]">
                <span className={LABEL}>
                  Add an attachment <span className="font-medium text-[12.5px] text-[#5E5A57]">(optional)</span>
                </span>
                <label className={`${SANS} self-start max-w-full inline-flex items-center h-[39px] px-[18px] rounded-full border border-[#E7E4D8] bg-white font-bold text-[13.5px] cursor-pointer hover:border-[#141310] focus-within:border-[#141310] transition-colors`}>
                  <span className="truncate">📎 {file ? file.name : 'Choose file'}</span>
                  <input type="file" className="sr-only" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                </label>
              </div>

              <button
                id="submitBtn"
                type="submit"
                className={`${SANS} self-start inline-flex items-center justify-center h-[51px] px-7 rounded-full bg-[#D2F026] text-[#141310] font-bold text-[15px] hover:opacity-90 active:scale-95 transition-all`}
              >
                Send request
              </button>
              <p className={`${SANS} pt-3.5 text-[12.5px] leading-4 text-[#5E5A57]`}>
                We'll use the email address you provide to respond to your request.
              </p>
            </form>
          )}
        </div>

        {/* Side */}
        <aside className="w-full lg:flex-1 flex flex-col gap-11">
          <div className="flex flex-col items-start gap-3">
            <h3 className={`${SANS} font-extrabold text-[14.5px] leading-[18px]`}>Before contacting us</h3>
            <p className={`${SANS} pb-1.5 text-[14px] leading-[22px] text-[#5E5A57]`}>You may find a faster answer in the Help Center.</p>
            <a
              href={helpHref}
              className={`${SANS} inline-flex items-center h-[51px] px-7 rounded-full border border-[#141310] font-bold text-[15px] hover:bg-[#141310] hover:text-white transition-colors`}
            >
              Browse Help Center
            </a>
          </div>

          <div className="flex flex-col items-start gap-[9.4px] px-6 py-[26px] rounded-2xl bg-[#FBF8EE]">
            <h3 className={`${DM} text-[19px] leading-[26px]`}>Concerned about someone's safety?</h3>
            <p className={`${SANS} pb-[8.6px] text-[14px] leading-[22px] text-[#5E5A57] max-w-[457px]`}>
              If you're experiencing harassment, suspicious behavior or another safety concern, please report it so our team can review it.
            </p>
            <a
              href={reportHref}
              className={`${SANS} inline-flex items-center h-[51px] px-7 rounded-full bg-[#D2F026] font-bold text-[15px] hover:opacity-90 active:scale-95 transition-all`}
            >
              Report a concern
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className={`${SANS} font-extrabold text-[14.5px] leading-[18px]`}>Other ways to reach us</h3>
            <ul className="border-t border-[#E7E4D8]">
              {REACH.map((r) => (
                <li key={r.title}>
                  <a href={r.href} className="group flex items-center justify-between py-4 border-b border-[#E7E4D8]">
                    <div className="flex flex-col gap-[3px]">
                      <span className={`${SANS} font-bold text-[14.5px] leading-[18px] group-hover:underline`}>{r.title}</span>
                      <span className={`${SANS} text-[12.5px] leading-4 text-[#5E5A57]`}>{r.text}</span>
                    </div>
                    <span aria-hidden="true" className={`${SANS} text-[16px] text-[#5E5A57]`}>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}