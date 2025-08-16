// src/App.jsx
import React, { useEffect, useState, Suspense, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollTop';
import Footer from './components/Footer';
import AnimatedLoading from './stocks/AnimatedLoading';
import FloatingSocialButtons from './stocks/FloatingSocialButtons';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Customers from './pages/Customers';
import Team from './pages/Team';
import Brand from './pages/Brand';
import SoftwareDev from './pages/SoftwareDev';
import DigitalMarketing from './pages/DigitalMarketing';
// import AboutSection from './pages/AboutSection';
import ContactSection from './pages/ContactSection';
import PackageComparison from './components/PackageComparison';
import PackageDetail from './components/PackageDetail'
import NeonCursorTrail from './stocks/NeonCursorTrail';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [startReveal, setStartReveal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleButtons = () => setIsOpen(!isOpen);
  const ref = useRef(null); // Cursor trail container

  // Initial viewport check
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Handle screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle intro loading effect
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setStartReveal(true);
      document.body.style.overflow = 'auto';
    }, 3500);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div ref={ref} className="relative w-full h-full">
      <Router>
        <ScrollToTop />
        <Navbar />
        <NeonCursorTrail containerRef={ref} />

        <Suspense fallback={<AnimatedLoading />}>
          <Routes>
            <Route path="/" element={<Home isMobile={isMobile} />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/ProjectDetail/:id" element={<ProjectDetail />} />
            <Route path="/clients" element={<Customers />} />
            <Route path="/team" element={<Team />} />
            <Route path="/branding" element={<Brand />} />
            <Route path="/software-development" element={<SoftwareDev />} />
            <Route path="/performance-marketing" element={<DigitalMarketing />} />
            {/* <Route path="/about" element={<AboutSection />} /> */}
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/package" element={<PackageComparison />} />
            <Route path="/package-details" element={<PackageDetail />} />
          </Routes>
        </Suspense>

        {/* Floating Buttons */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          <FloatingSocialButtons isOpen={isOpen} toggle={toggleButtons} />

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="rounded-full bg-white p-3 text-black transition duration-300 hover:cursor-pointer hover:bg-white/50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>

        <Footer />
      </Router>
    </div>
  );
};
export default App;
