import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

/* ---------- Tokens ---------- */
const DM = "font-['DM_Serif_Display',serif]";
const SANS = "font-['Plus_Jakarta_Sans',sans-serif]";

const LAST_UPDATED = 'September 1, 2026';

/* ---------- Content ---------- */
// Each block is { p: '...' } or { ul: ['...', '...'] }
const SECTIONS = [
  {
    title: 'Introduction',
    blocks: [
      {
        p: 'These Terms of Service ("Terms") govern your access to and use of Wiviy, including our website, mobile applications and related services (together, "Wiviy" or the "Service"). By creating an account or otherwise using Wiviy, you agree to these Terms.',
      },
      { p: 'If you do not agree to these Terms, please do not use Wiviy. We may update these Terms from time to time, as described in Section 12.' },
    ],
  },
  {
    title: 'Eligibility',
    blocks: [
      {
        p: 'You must be at least 18 years old to create a Wiviy account. By using Wiviy, you confirm that you meet this requirement and that you have the legal capacity to enter into these Terms in your jurisdiction.',
      },
      {
        p: 'Wiviy is intended for personal, non-commercial use in connecting with other people. You may not create an account on behalf of someone else without their permission.',
      },
    ],
  },
  {
    title: 'Your Wiviy Account',
    blocks: [
      {
        p: "To use most features of Wiviy, you'll need to create an account and verify your phone number. You're responsible for keeping your login details secure and for all activity that happens under your account.",
      },
      {
        ul: [
          'Provide accurate information when creating your profile.',
          'Keep your account credentials confidential.',
          'Let us know promptly if you believe your account has been compromised.',
        ],
      },
    ],
  },
  {
    title: 'Using Wiviy',
    blocks: [
      {
        p: 'Wiviy gives you tools to discover, connect and communicate with other people, including features like Shake, Nearby, Icebreakers and matching. You agree to use these features as intended and in line with these Terms and our Community Guidelines.',
      },
      { p: 'We may update, change or discontinue features of the Service over time as we continue to improve Wiviy.' },
    ],
  },
  {
    title: 'Content & Conduct',
    blocks: [
      { p: "You're responsible for the content you share on Wiviy, including your profile, photos and messages. When using Wiviy, you agree not to:" },
      {
        ul: [
          'Impersonate another person or misrepresent your identity.',
          'Post content that is unlawful, harassing, hateful or sexually explicit involving minors.',
          'Use Wiviy for commercial solicitation, spam or scams.',
          'Attempt to interfere with or disrupt the Service.',
        ],
      },
      { p: 'We may remove content or restrict accounts that violate these Terms or our Community Guidelines.' },
    ],
  },
  {
    title: 'Matches & Conversations',
    blocks: [
      {
        p: "Matching and messaging features are provided to help you connect with other Wiviy members. We don't guarantee that any match will result in a particular outcome, and interactions with other users are ultimately between you and them.",
      },
      { p: 'Please use good judgment when arranging to meet someone in person, and review our safety resources before doing so.' },
    ],
  },
  {
    title: 'Safety & Reporting',
    blocks: [
      {
        p: 'Wiviy provides tools to block, unmatch and report other users. If you experience or witness behavior that violates these Terms, please report it so we can review and take appropriate action.',
      },
      { p: 'While we work to keep Wiviy safe, we cannot guarantee the conduct of other users, and you use the Service at your own discretion.' },
    ],
  },
  {
    title: 'Intellectual Property',
    blocks: [
      {
        p: 'Wiviy and its associated logos, features and content (excluding content you provide) are owned by Wiviy or its licensors and protected by intellectual property laws. You may not copy, modify or distribute any part of the Service without permission.',
      },
      {
        p: 'You retain ownership of the content you post, but grant Wiviy a license to use it as needed to operate and provide the Service to you and other users.',
      },
    ],
  },
  {
    title: 'Disclaimers',
    blocks: [
      {
        p: 'Wiviy is provided "as is" and "as available." We do not guarantee that the Service will be uninterrupted, error-free or that it will meet your specific expectations, including with respect to who you may meet or connect with.',
      },
    ],
  },
  {
    title: 'Limitation of Liability',
    blocks: [
      {
        p: 'To the fullest extent permitted by law, Wiviy will not be liable for indirect, incidental or consequential damages arising from your use of the Service, including interactions with other users, whether online or in person.',
      },
    ],
  },
  {
    title: 'Termination',
    blocks: [
      {
        p: 'You may stop using Wiviy and delete your account at any time. We may suspend or terminate your access to the Service if you violate these Terms or if we reasonably believe your conduct poses a risk to Wiviy or other users.',
      },
    ],
  },
  {
    title: 'Changes to These Terms',
    blocks: [
      {
        p: "We may update these Terms from time to time. If we make material changes, we'll let you know through the app or by other reasonable means before the changes take effect. Continuing to use Wiviy after changes take effect means you accept the updated Terms.",
      },
    ],
  },
  {
    title: 'Contact Us',
    blocks: [{ p: 'If you have questions about these Terms, you can reach the Wiviy team any time — see the contact details below.' }],
  },
].map((s, i) => {
  const n = String(i + 1).padStart(2, '0');
  return { ...s, n, id: `s${n}` };
});

/* ---------- Page ---------- */
export default function Terms({ contactHref = '/contact' }) {
  const [active, setActive] = useState(SECTIONS[0].id);

  // Scroll-spy: highlight the section currently near the top of the viewport
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

    // Reaching the bottom of the page always selects the last section
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

  return (
    <div className="min-h-screen bg-white text-[#141310]">
      <Navbar theme="light" />

      {/* HERO */}
      <section className="w-full bg-[#FBF8EE] px-6 sm:px-16 lg:px-[132px] pt-36 lg:pt-[170px] pb-[60px]">
        <div className="w-full max-w-[1176px] mx-auto flex flex-col gap-[13px]">
          <span className={`${SANS} font-bold text-[12.5px] leading-4 tracking-[2px] uppercase text-[#5E5A57]`}>Legal</span>
          <h1 className={`${DM} text-[42px] sm:text-[58px] leading-[1.05] tracking-[-0.58px] text-[#141310]`}>Terms of Service</h1>
          <p className={`${SANS} pt-px text-[16px] leading-[26px] text-[#5E5A57] max-w-[520px]`}>
            Please read these terms carefully before using Wiviy.
          </p>
          <p className={`${SANS} font-bold text-[12.5px] leading-4 tracking-[0.375px] text-[#5E5A57]`}>Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* BODY */}
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 xl:px-0">
        <div className="border-t border-[#E7E4D8] pt-10 lg:pt-[70px] pb-24 lg:pb-[130px] flex gap-[70px]">
          {/* Table of contents */}
          <nav aria-label="On this page" className="hidden lg:block w-[220px] shrink-0">
            <div className="sticky top-8 flex flex-col gap-[18px] pt-[60px] pb-[60px]">
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
                        {s.n} {s.title}
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
                  {s.blocks.map((b, i) =>
                    b.p ? (
                      <p key={i} className={`${SANS} pt-2 text-[16px] leading-7 text-[#141310]`}>
                        {b.p}
                      </p>
                    ) : (
                      <ul
                        key={i}
                        className={`${SANS} list-disc marker:text-[#141310] pl-[22px] pt-[7px] flex flex-col gap-[7px] text-[15.5px] leading-[26px] text-[#141310]`}
                      >
                        {b.ul.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    )
                  )}
                </section>
              ))}

              {/* Contact box */}
              <div className="border-t border-[#E7E4D8] pt-[50px] flex flex-col gap-2.5 items-start">
                <h3 className={`${DM} text-[24px] leading-[33px] tracking-[-0.24px] text-[#141310]`}>Questions about these terms?</h3>
                <p className={`${SANS} pb-3.5 text-[16px] leading-7 text-[#5E5A57] max-w-[586px]`}>
                  Contact the Wiviy team if you have questions about these Terms of Service.
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