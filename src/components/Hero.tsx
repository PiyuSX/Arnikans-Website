import React from 'react';
import TechSolarSystem from './TechSolarSystem/TechSolarSystem';

export default function Hero() {
  return (
    <div id='home' className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-blue-600 font-medium mb-4">
              GROUP OF COMPUTER STUDENTS 🔥
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Ultimate Group Of Computer Students
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We are a team of class 11 computer students offering <a href="https://get.arnikans.tech" target='_blank' className="text-purple-600 underline">arnikans.tech</a> Domains for free.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://get.arnikans.tech"
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg 
                hover:bg-gray-900 hover:text-white transition-colors font-semibold"
                target='_blank'
              >
                Get A Free Domain Here
              </a>
            </div>
          </div>
          <div className="relative hidden md:block" style={{ marginLeft: '-100px' }}>
            <TechSolarSystem />
          </div>
        </div>
      </div>
    </div>
  );
}
