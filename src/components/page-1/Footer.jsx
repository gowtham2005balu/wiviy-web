import React from 'react';

export default function Footer({ currentPage, setCurrentPage }) {
  return (
    <footer className="bg-[#0b0b0d] text-zinc-400 py-16 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-zinc-900 w-full font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Section with Logo and Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-12 border-b border-zinc-900">
          <div>
            <span 
              className="font-serif text-3xl font-extrabold text-white tracking-tight cursor-pointer select-none"
              onClick={() => {
                setCurrentPage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              wiviy
            </span>
          </div>
          <p className="text-zinc-400 text-sm md:text-base max-w-xs md:text-right font-medium">
            Find meaningful connections. Meet people who share your vibe.
          </p>
        </div>

        {/* Middle Section with Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {/* Product Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider">Product</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('home');
                    setTimeout(() => {
                      const el = document.getElementById('why-wiviy');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('about');
                    setTimeout(() => {
                      const el = document.getElementById('how-it-works');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <a href="#safety" className="hover:text-white transition-colors duration-200">
                  Safety
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors duration-200">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider">Company</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('careers');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('home');
                    setTimeout(() => {
                      const el = document.getElementById('blog');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('support');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider">Support</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('faq');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('terms');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentPage('privacy');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors duration-200 cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Stay Updated Column */}
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider">Stay Updated</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Subscribe to get tips, updates, and special offers.
            </p>
            <form 
              onSubmit={(e) => e.preventDefault()} 
              className="flex flex-col sm:flex-row gap-3 mt-2 w-full max-w-md md:max-w-none"
            >
              <div className="relative flex-grow">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#18181b] border border-zinc-800 text-zinc-200 placeholder-zinc-500 rounded-full px-5 py-3 text-sm outline-none focus:border-zinc-700 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-[#d2ff00] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#bfe600] transition-colors text-sm whitespace-nowrap cursor-pointer shadow-sm hover:shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-900 text-zinc-500 text-xs sm:text-sm">
          <span>© 2025 Wiviy. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/wiviyofficial?igsh=bHlncnBiZDVzdWQx" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://x.com/w_wiviy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="X">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/wiviysolutions/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://pin.it/1jxHcEL1x" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="Pinterest">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.853 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.39-1.72-4.068-4.177-4.068-2.845 0-4.515 2.133-4.515 4.34 0 .859.331 1.781.745 2.281.082.099.093.188.07.288-.074.312-.244.996-.277 1.135-.044.186-.145.225-.335.137-1.246-.574-2.025-2.395-2.025-3.868 0-3.146 2.29-6.042 6.626-6.042 3.473 0 6.177 2.476 6.177 5.776 0 3.454-2.176 6.228-5.195 6.228-1.012 0-1.963-.526-2.289-1.15l-.625 2.378c-.225.87-.838 1.958-1.25 2.622 1.05.32 2.172.49 3.333.49 5.523 0 10-4.477 10-10S17.523 2 12 2z"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com/@wiviy-app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
