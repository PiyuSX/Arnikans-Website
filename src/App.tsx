import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slider from './components/Slider';
import Sliderrev from './components/SliderRev';
import About from './components/About';
import Training from './components/Training';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Learn from './pages/Learn'; // Import Learn component

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Slider />
              <Sliderrev />
              <About />
              <Training />
              <Features />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/learn" element={<Learn />} /> {/* Add Learn route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;