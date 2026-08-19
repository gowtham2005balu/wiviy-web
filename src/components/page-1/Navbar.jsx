import React, { useState } from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {currentPage === 'home' && (
        <div className="absolute top-[28px] left-1/2 -translate-x-1/2 w-[95%] max-w-[1508px] h-0 pointer-events-none z-10">
          <div className="absolute left-[-155px] top-[-31px] w-[195px] h-[142px] select-none hidden md:block">
            <svg viewBox="0 0 195 142" fill="none" className="w-full h-full">
              <path
                d="M79.3398 65.9509C74.9973 71.1944 16.0047 7.26598 4.9873 35.8311C-5.48773 62.99 70.8981 76.1442 66.762 81.1385C62.6259 86.1328 30.7366 118.57 45.0455 134.338C61.0261 151.948 88.7479 97.8166 92.2018 98.3802C95.6556 98.9437 107.194 141.064 125.732 135.828C144.937 130.403 126.03 87.5077 128.323 84.7394C130.615 81.971 195.358 111.467 190.381 87.7394C186.336 68.4559 141.265 69.1121 144.964 64.6451C148.664 60.1781 178.946 29.074 165.899 9.39126C149.954 -14.6634 117.516 55.4311 110.422 55.3965C103.329 55.362 95.2453 -3.90809 72.8118 4.89109C50.6615 13.5792 83.6823 60.7074 79.3398 65.9509Z"
                stroke="#151515"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      )}

      <nav className="fixed top-[16px] md:top-[28px] left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1508px] h-[72px] md:h-[97px] bg-white/80 md:bg-white/40 border border-zinc-950/10 backdrop-blur-md rounded-[20px] md:rounded-[50px] px-6 md:pl-[93px] md:pr-[54px] flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.06)] font-sans transition-all duration-300">
        
        {/* Brand Logo with Neon Dot */}
        <div
          className="flex items-center gap-1.5 cursor-pointer select-none relative z-20"
          onClick={() => handleNavClick('home')}
        >
          <span className="font-sans font-black text-[28px] md:text-[40px] text-zinc-950 tracking-[-0.75px] leading-none md:leading-[36px]">
            Wiviy
          </span>
          <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#DFFF00] self-end mb-0.5 md:mb-1 shadow-[0_0_8px_rgba(210,255,0,0.6)]" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-[40px] relative z-10">
          <button
            onClick={() => handleNavClick('home')}
            className={`text-[14px] font-medium tracking-wide transition-colors duration-200 cursor-pointer ${currentPage === 'home' ? 'text-[#111111] font-bold' : 'text-[#6B6B6B] hover:text-[#111111]'}`}
          >
            Discover
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`text-[14px] font-medium tracking-wide transition-colors duration-200 cursor-pointer ${currentPage === 'about' ? 'text-[#111111] font-bold' : 'text-[#6B6B6B] hover:text-[#111111]'}`}
          >
            Why Wiviy
          </button>
          <button
            onClick={() => handleNavClick('features')}
            className={`text-[14px] font-medium tracking-wide transition-colors duration-200 cursor-pointer ${currentPage === 'features' ? 'text-[#111111] font-bold' : 'text-[#6B6B6B] hover:text-[#111111]'}`}
          >
            Community
          </button>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex relative z-10">
          <button
            type="button"
            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.with.app', '_blank')}
            className="w-[163px] h-[40px] bg-[#DFFF00] text-[#111111] text-[14px] font-semibold rounded-full flex items-center justify-center gap-1.5 hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_8px_24px_rgba(223,255,0,0.3)]"
          >
            <span>Download App</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <path d="M4.5 11.5L11.5 4.5M11.5 4.5H6M11.5 4.5V10" stroke="#111111" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center z-20">
          <button
            onClick={toggleMenu}
            className="text-zinc-950 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-white/95 backdrop-blur-xl border border-zinc-950/10 rounded-2xl shadow-xl flex flex-col p-6 gap-6 md:hidden z-10 animate-fade-in-down">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left text-lg font-medium tracking-wide transition-colors duration-200 ${currentPage === 'home' ? 'text-[#111111] font-bold' : 'text-[#6B6B6B]'}`}
            >
              Discover
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`text-left text-lg font-medium tracking-wide transition-colors duration-200 ${currentPage === 'about' ? 'text-[#111111] font-bold' : 'text-[#6B6B6B]'}`}
            >
              Why Wiviy
            </button>
            <button
              onClick={() => handleNavClick('features')}
              className={`text-left text-lg font-medium tracking-wide transition-colors duration-200 ${currentPage === 'features' ? 'text-[#111111] font-bold' : 'text-[#6B6B6B]'}`}
            >
              Community
            </button>
            
            <div className="w-full h-[1px] bg-zinc-200 my-2"></div>
            
            <button
              type="button"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.with.app', '_blank')}
              className="w-full h-[48px] bg-[#DFFF00] text-[#111111] text-[16px] font-bold rounded-full flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_8px_24px_rgba(223,255,0,0.3)]"
            >
              <span>Download App</span>
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 11.5L11.5 4.5M11.5 4.5H6M11.5 4.5V10" stroke="#111111" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
