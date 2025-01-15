import React from 'react';
import Footer from '../components/Footer'; // Import Footer component
import portfolioItems from '../data/portfolioItems'; // Import portfolio items data

export default function Portfolio() {
  return (
    <div id="portfolio" className="min-h-screen flex flex-col">
      <div className="flex-grow py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Portfolio
          </h2>
          <p className="text-center text-gray-600 mb-16">
            Showcase of our projects and achievements.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow flex flex-col items-start"
              >
                <a href={item.domain} className="w-full" target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.image}
                    alt={`Portfolio item ${index + 1}`}
                    className="w-full h-64 object-cover rounded-md"
                  />
                </a>
                <p className="text-black mt-4">
                  Domain: <a href={item.domain} target="_blank" rel="noopener noreferrer" className="text-purple-600">{item.domain}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer /> {/* Include Footer component */}
    </div>
  );
}
