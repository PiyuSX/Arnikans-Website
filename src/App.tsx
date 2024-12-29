import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slider from './components/Slider';
import Sliderrev from './components/SliderRev'
import About from './components/About';
import Training from './components/Training';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Slider />
      <Sliderrev />
      <About />
      <Training />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;