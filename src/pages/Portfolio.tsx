import React from 'react';
import Footer from '../components/Footer'; // Import Footer component

export default function Portfolio() {
  return (
    <div id="portfolio" className="min-h-screen flex flex-col">
      <div className="flex-grow py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Portfolio</h2>
          <p className="text-center text-gray-600">Showcase of our projects and achievements.</p>
          {/* Add your portfolio content here */}
        </div>
      </div>
      <Footer /> {/* Include Footer component */}
    </div>
  );
}