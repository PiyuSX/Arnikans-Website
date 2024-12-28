import React from 'react';
import { Globe, Network, FolderGit2 } from 'lucide-react';

export default function Features() {
  return (
    <div id='offers' className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Globe className="w-12 h-12 text-purple-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">.Arnikans.tech Domain For Free</h3>
            <p className="text-gray-600">
              Get your own .arniko.tech subdomain to showcase your projects and build your online presence.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <FolderGit2 className="w-12 h-12 text-purple-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Custom Domain Support</h3>
            <p className="text-gray-600">
              We also provide:
            </p>
            <ul className="flex flex-wrap gap-4 text-gray-600">
              <li>.me</li>
              <li>.tech</li>
              <li>.rocks</li>
              <li>.ninja</li>
              <li>.games</li>
              <li>.codes</li>
              <li>.systems</li>
              <li>.studio</li>
              <li>.email</li>
              <li>.works</li>
              <li>.software</li>
              <li>.engineer</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Network className="w-12 h-12 text-purple-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Tech Networking</h3>
            <p className="text-gray-600">
              Connect with fellow students who share your passion for technology and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}