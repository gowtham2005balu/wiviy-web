import { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

/* ---------- Tokens ---------- */
const SERIF = "font-['Libre_Baskerville',serif]";
const SANS = "font-['Plus_Jakarta_Sans',sans-serif]";

const MAX_FILE_BYTES = 10 * 1024 * 1024;
const ALLOWED_EXT = ['pdf', 'doc', 'docx'];

const inputBase =
  `${SANS} w-full bg-white border rounded-[12px] px-4 text-[15px] leading-[19px] text-[#171512] ` +
  'placeholder:text-[#757575] outline-none transition-colors focus:border-[#171512]';

const INITIAL = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  location: '',
  currentRole: '',
  yearsExp: '',
  portfolio: '',
  linkedin: '',
  whyWiviy: '',
  aboutYou: '',
  whyRole: '',
  additional: '',
};

/* ---------- Small pieces ---------- */
function SectionHeading({ children }) {
  return (
    <h2
      className={`${SANS} font-extrabold text-[12.5px] leading-4 tracking-[1.5px] uppercase text-[#5E5A57] pb-[14px] border-b border-[#E8E6DD]`}
    >
      {children}
    </h2>
  );
}

function Field({ id, label, required, error, children }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id} className={`${SANS} text-[13.5px] leading-[17px] text-[#171512]`}>
        <span className="font-bold">
          {label}
          {required ? ' *' : ' '}
        </span>
        {!required && <span className="font-medium text-[12.5px] text-[#5E5A57]">(optional)</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className={`${SANS} text-[12.5px] leading-4 text-[#B3261E]`}>
          {error}
        </p>
      )}
    </div>
  );
}

function DocIcon() {
  return (
    <svg width="22" height="26" viewBox="0 0 22 26" fill="none" stroke="#171512" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9l-7-7Z" />
      <path d="M13 2v7h7M6 15h10M6 19h7" />
    </svg>
  );
}

/* ---------- Page ---------- */
export default function CareersApply({
  role = 'Senior Product Designer',
  meta = 'Remote · India · Full-time',
  backHref = '/careers',
  onSubmit, // optional: async (FormData) => void — send it to your API
}) {
  const [values, setValues] = useState(INITIAL);
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [dragging, setDragging] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef(null);

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const cls = (key, extra = '') =>
    `${inputBase} ${errors[key] ? 'border-[#B3261E]' : 'border-[#E8E6DD]'} ${extra}`;

  const pickFile = (f) => {
    if (!f) return;
    const ext = f.name.split('.').pop().toLowerCase();
    let msg;
    if (!ALLOWED_EXT.includes(ext)) msg = 'Please upload a PDF or Word document.';
    else if (f.size > MAX_FILE_BYTES) msg = 'That file is over 10MB. Try a smaller version.';
    if (msg) {
      setFile(null);
      setErrors((er) => ({ ...er, resume: msg }));
      return;
    }
    setFile(f);
    setErrors((er) => ({ ...er, resume: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!values.firstName.trim()) er.firstName = 'Enter your first name.';
    if (!values.lastName.trim()) er.lastName = 'Enter your last name.';
    if (!values.email.trim()) er.email = 'Enter your email address.';
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) er.email = 'Enter a valid email address.';
    if (!values.whyWiviy.trim()) er.whyWiviy = 'Tell us why you want to work at Wiviy.';
    if (!file) er.resume = 'Upload your resume as a PDF or Word document.';
    return er;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) {
      const first = Object.keys(er)[0];
      document.getElementById(first === 'resume' ? 'uploadBox' : first)?.focus();
      return;
    }
    setSubmitting(true);
    try {
      const data = new FormData();
      Object.entries(values).forEach(([k, v]) => data.append(k, v));
      data.append('role', role);
      data.append('resume', file);
      if (onSubmit) await onSubmit(data); // otherwise wire up your endpoint here
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setErrors({ form: "We couldn't send your application. Check your connection and try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#171512]">
      <Navbar theme="light" />

      <main className="w-full max-w-[1240px] mx-auto px-6 pt-[110px] pb-20">
        {/* Back link */}
        <div className="pt-12 pb-4">
          <a
            href={backHref}
            className={`${SANS} inline-flex items-center gap-1.5 font-extrabold text-[12.5px] leading-4 tracking-[1px] uppercase text-[#5E5A57] hover:text-[#171512] transition-colors`}
          >
            <span aria-hidden="true">←</span> Back to role
          </a>
        </div>

        <div className="w-full max-w-[680px] mx-auto">
          {/* Header */}
          <header className="flex flex-col items-center text-center gap-2.5 pt-[30px] pb-[60px]">
            <span className={`${SANS} font-bold text-[12.5px] leading-4 tracking-[2px] uppercase text-[#5E5A57]`}>
              Application
            </span>
            <h1 className={`${SERIF} font-semibold text-[26px] sm:text-[32px] leading-[1.25] tracking-[-0.38px] pt-1`}>
              Applying for: {role}
            </h1>
            <p className={`${SANS} text-[14px] leading-[18px] text-[#5E5A57]`}>{meta}</p>
          </header>

          {submitted ? (
            <div role="status" className="flex flex-col items-center text-center gap-4 py-16 px-8">
              <h2 className={`${SERIF} font-semibold text-[28px] leading-[1.3]`}>Application received.</h2>
              <p className={`${SANS} text-[16px] leading-[26px] text-[#5E5A57] max-w-[440px]`}>
                Thanks, {values.firstName}. We'll read your application and email you at {values.email} about next
                steps.
              </p>
              <a
                href="/careers"
                className={`${SANS} inline-flex items-center justify-center h-[51px] px-7 rounded-full bg-[#D2F026] text-[#171512] font-bold text-[15px] hover:opacity-90 transition-opacity mt-2`}
              >
                See other roles
              </a>
            </div>
          ) : (
            <form id="appForm" onSubmit={handleSubmit} noValidate className="flex flex-col gap-[54px] px-0 sm:px-8">
              {/* ABOUT YOU */}
              <section className="flex flex-col gap-5">
                <SectionHeading>About you</SectionHeading>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5 pt-1.5">
                  <Field id="firstName" label="First name" required error={errors.firstName}>
                    <input id="firstName" type="text" autoComplete="given-name" value={values.firstName} onChange={set('firstName')} className={cls('firstName', 'h-[47px]')} />
                  </Field>
                  <Field id="lastName" label="Last name" required error={errors.lastName}>
                    <input id="lastName" type="text" autoComplete="family-name" value={values.lastName} onChange={set('lastName')} className={cls('lastName', 'h-[47px]')} />
                  </Field>
                  <Field id="email" label="Email" required error={errors.email}>
                    <input id="email" type="email" autoComplete="email" value={values.email} onChange={set('email')} className={cls('email', 'h-[47px]')} />
                  </Field>
                  <Field id="phone" label="Phone number">
                    <input id="phone" type="tel" autoComplete="tel" value={values.phone} onChange={set('phone')} className={cls('phone', 'h-[47px]')} />
                  </Field>
                </div>
                <Field id="location" label="Location">
                  <input id="location" type="text" placeholder="City, Country" autoComplete="address-level2" value={values.location} onChange={set('location')} className={cls('location', 'h-[47px]')} />
                </Field>
              </section>

              {/* YOUR EXPERIENCE */}
              <section className="flex flex-col gap-5">
                <SectionHeading>Your experience</SectionHeading>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5 pt-1.5">
                  <Field id="currentRole" label="Current role">
                    <input id="currentRole" type="text" value={values.currentRole} onChange={set('currentRole')} className={cls('currentRole', 'h-[47px]')} />
                  </Field>
                  <Field id="yearsExp" label="Years of experience">
                    <input id="yearsExp" type="text" inputMode="numeric" value={values.yearsExp} onChange={set('yearsExp')} className={cls('yearsExp', 'h-[47px]')} />
                  </Field>
                  <Field id="portfolio" label="Portfolio URL">
                    <input id="portfolio" type="url" placeholder="https://" value={values.portfolio} onChange={set('portfolio')} className={cls('portfolio', 'h-[47px]')} />
                  </Field>
                  <Field id="linkedin" label="LinkedIn URL">
                    <input id="linkedin" type="url" placeholder="https://" value={values.linkedin} onChange={set('linkedin')} className={cls('linkedin', 'h-[47px]')} />
                  </Field>
                </div>
              </section>

              {/* YOUR APPLICATION */}
              <section className="flex flex-col gap-5">
                <SectionHeading>Your application</SectionHeading>
                <div className="flex flex-col gap-5 pt-1.5">
                  <Field id="whyWiviy" label="Why do you want to work at Wiviy?" required error={errors.whyWiviy}>
                    <textarea id="whyWiviy" value={values.whyWiviy} onChange={set('whyWiviy')} className={cls('whyWiviy', 'h-[104px] py-3 resize-y')} />
                  </Field>
                  <Field id="aboutYou" label="Tell us about yourself">
                    <textarea id="aboutYou" value={values.aboutYou} onChange={set('aboutYou')} className={cls('aboutYou', 'h-[104px] py-3 resize-y')} />
                  </Field>
                  <Field id="whyRole" label="What makes this role interesting to you?">
                    <textarea id="whyRole" value={values.whyRole} onChange={set('whyRole')} className={cls('whyRole', 'h-[104px] py-3 resize-y')} />
                  </Field>
                </div>
              </section>

              {/* RESUME */}
              <section className="flex flex-col gap-[26px]">
                <SectionHeading>Resume</SectionHeading>
                <div className="flex flex-col gap-2">
                  <span className={`${SANS} font-bold text-[13.5px] leading-[17px]`}>Upload Resume *</span>
                  <label
                    id="uploadBox"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), fileRef.current?.click())}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragging(true);
                    }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setDragging(false);
                      pickFile(e.dataTransfer.files?.[0]);
                    }}
                    className={`flex flex-col items-center gap-1 p-7 rounded-[14px] border border-dashed cursor-pointer text-center transition-colors outline-none focus:border-[#171512] ${
                      dragging ? 'border-[#171512] bg-[#F7F6EF]' : errors.resume ? 'border-[#B3261E]' : 'border-[#E8E6DD] hover:border-[#171512]'
                    }`}
                  >
                    <input
                      ref={fileRef}
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      className="sr-only"
                      onChange={(e) => pickFile(e.target.files?.[0])}
                    />
                    <div className="pb-px">
                      <DocIcon />
                    </div>
                    {file ? (
                      <>
                        <span className={`${SANS} pt-1 font-bold text-[14px] leading-[18px] break-all`}>{file.name}</span>
                        <span className={`${SANS} font-bold text-[12.5px] leading-4 text-[#5E5A57]`}>
                          {(file.size / 1024 / 1024).toFixed(2)} MB · Click to replace
                        </span>
                      </>
                    ) : (
                      <>
                        <span className={`${SANS} pt-1 font-bold text-[14px] leading-[18px]`}>Click to upload, or drag a file here</span>
                        <span className={`${SANS} font-bold text-[12.5px] leading-4 text-[#5E5A57]`}>PDF or Word document, up to 10MB</span>
                      </>
                    )}
                  </label>
                  {errors.resume && (
                    <p role="alert" className={`${SANS} text-[12.5px] leading-4 text-[#B3261E]`}>
                      {errors.resume}
                    </p>
                  )}
                </div>
              </section>

              {/* ADDITIONAL INFORMATION */}
              <section className="flex flex-col gap-[26px]">
                <SectionHeading>Additional information</SectionHeading>
                <Field id="additional" label="Optional message or links">
                  <textarea id="additional" value={values.additional} onChange={set('additional')} className={cls('additional', 'h-[85px] py-3 resize-y')} />
                </Field>
              </section>

              {/* SUBMIT */}
              <div className="flex flex-col items-center gap-3 pt-1.5">
                {errors.form && (
                  <p role="alert" className={`${SANS} text-[13.5px] text-[#B3261E] text-center`}>
                    {errors.form}
                  </p>
                )}
                <button
                  id="submitBtn"
                  type="submit"
                  disabled={submitting}
                  className={`${SANS} min-w-[220px] h-[51px] px-10 rounded-full bg-[#D2F026] text-[#171512] font-bold text-[15px] hover:opacity-90 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition-all cursor-pointer`}
                >
                  {submitting ? 'Sending…' : 'Submit application'}
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}