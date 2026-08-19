import React, { useState } from 'react';
import Navbar from './components/page-1/Navbar';
import Hero from './components/page-1/Hero';
import WhyWiviy from './components/page-1/WhyWiviy';
import SoulsMeet from './components/page-1/SoulsMeet';
import MoreThanProfile from './components/page-1/MoreThanProfile';
import MatchingEngine from './components/page-1/MatchingEngine';
import MapConnections from './components/page-1/MapConnections';
import Testimonials from './components/page-1/Testimonials';
import Blog from './components/page-1/Blog';
import CTA from './components/page-1/CTA';
import Footer from './components/page-1/Footer';

// Page 2 Component imports
import Page2Hero from './components/page-2/Page2Hero';
import Page2Ticker from './components/page-2/Page2Ticker';
import Page2OurStory from './components/page-2/Page2OurStory';
import Page2Journey from './components/page-2/Page2Journey';
import Page2Community from './components/page-2/Page2Community';
import Page2CTA from './components/page-2/Page2CTA';

// Page 3 Component imports
import Page3Hero from './components/page-3/Page3Hero';
import Page3Ticker from './components/page-3/Page3Ticker';
import Page3Features from './components/page-3/Page3Features';
import Page3Journey from './components/page-3/Page3Journey';
import Page3Community from './components/page-3/Page3Community';
import Page3Testimonials from './components/page-3/Page3Testimonials';
import Page3Ready from './components/page-3/Page3Ready';
import Page3CTA from './components/page-3/Page3CTA';

// Support, Privacy, Careers pages
import SupportPage from './components/support/SupportPage';
import PrivacyPage from './components/privacy/PrivacyPage';
import CareersPage from './components/careers/CareersPage';
import TermsPage from './components/terms/TermsPage';
import FaqPage from './components/faq/FaqPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans overflow-x-hidden selection:bg-[#d2ff00]/40">
      {/* Navigation Header */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === 'home' ? (
        <>

          <Hero />

          <WhyWiviy />

          {/* Souls Meet Section */}
          <SoulsMeet />

          {/* Profiling Categories Section */}
          <MoreThanProfile />

          {/* Smart Matching Engine Section */}
          <MatchingEngine />

          {/* Map Connections Section */}
          <MapConnections />

          {/* Success Stories Testimonials Section */}
          <Testimonials />

          {/* Tips, Guides & Blog Section */}
          <Blog />

          {/* Call To Action Bottom Section */}
          <CTA />
        </>
      ) : currentPage === 'about' ? (
        <>
          {/* Page 2 (About Us / How It Works) */}
          <Page2Hero setCurrentPage={setCurrentPage} />
          <Page2Ticker />
          <Page2OurStory />
          <Page2Journey />
          <Page2Community />
          <Page2CTA />
        </>
      ) : currentPage === 'support' ? (
        <>
          <SupportPage setCurrentPage={setCurrentPage} />
        </>
      ) : currentPage === 'privacy' ? (
        <>
          <PrivacyPage setCurrentPage={setCurrentPage} />
        </>
      ) : currentPage === 'careers' ? (
        <>
          <CareersPage setCurrentPage={setCurrentPage} />
        </>
      ) : currentPage === 'terms' ? (
        <>
          <TermsPage setCurrentPage={setCurrentPage} />
        </>
      ) : currentPage === 'faq' ? (
        <>
          <FaqPage setCurrentPage={setCurrentPage} />
        </>
      ) : (
        <>
          {/* Page 3 (Features page) */}
          <Page3Hero setCurrentPage={setCurrentPage} />
          <Page3Ticker />
          <Page3Features />
          <Page3Journey />
          <Page3Community />
          <Page3Testimonials />
          <Page3Ready />
          <Page3CTA />
        </>
      )}

      {/* Footer Section */}
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
