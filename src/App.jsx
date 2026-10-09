import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Features from './pages/features';
import Blog from './pages/blog';
import BlogDetails from './pages/blogdetails';
import Careers from './pages/careers';
import CareersDetails from './pages/careersdetails';
import CareersApply from './pages/careersapply';
import Support from './pages/support';
import Privacy from './pages/privacy';
import Terms from './pages/terms';
import CookiePolicy from './pages/cookiepolicy';

import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:id" element={<CareersDetails />} />
        <Route path="/careers/:id/apply" element={<CareersApply />} />
        <Route path="/careers/apply" element={<CareersApply />} />
        <Route path="/support" element={<Support />} />
        <Route path="/safety" element={<Support />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;
