import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import SEO from './components/SEO';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-zinc-950 font-sans overflow-x-hidden selection:bg-[#d2ff00]/40">
        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <SEO title="Find Meaningful Connections" description="Wiviy is more than just a dating app. It's where genuine conversations become meaningful relationships." />
              <Hero />
              <WhyWiviy />
              <SoulsMeet />
              <MoreThanProfile />
              <MatchingEngine />
              <MapConnections />
              <Testimonials />
              <Blog />
              <CTA />
            </>
          } />
          <Route path="/about" element={
            <>
              <SEO title="About Us" description="Learn more about Wiviy's mission to help people find meaningful connections." canonical="/about" />
              <Page2Hero />
              <Page2Ticker />
              <Page2OurStory />
              <Page2Journey />
              <Page2Community />
              <Page2CTA />
            </>
          } />
          <Route path="/features" element={
            <>
              <SEO title="Features" description="Discover Wiviy's powerful matching engine and community features." canonical="/features" />
              <Page3Hero />
              <Page3Ticker />
              <Page3Features />
              <Page3Journey />
              <Page3Community />
              <Page3Testimonials />
              <Page3Ready />
              <Page3CTA />
            </>
          } />
          <Route path="/support" element={
            <>
              <SEO title="Support" description="Get help with Wiviy." canonical="/support" />
              <SupportPage />
            </>
          } />
          <Route path="/privacy-policy" element={
            <>
              <SEO title="Privacy Policy" description="Wiviy's privacy policy." canonical="/privacy-policy" />
              <PrivacyPage />
            </>
          } />
          <Route path="/careers" element={
            <>
              <SEO title="Careers" description="Join the Wiviy team." canonical="/careers" />
              <CareersPage />
            </>
          } />
          <Route path="/terms-of-service" element={
            <>
              <SEO title="Terms of Service" description="Wiviy's terms of service." canonical="/terms-of-service" />
              <TermsPage />
            </>
          } />
          <Route path="/faq" element={
            <>
              <SEO title="FAQ" description="Frequently asked questions about Wiviy." canonical="/faq" />
              <FaqPage />
            </>
          } />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
