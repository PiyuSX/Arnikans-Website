import React from 'react';
import { Users, Code, Share2 } from 'lucide-react';

export default function About() {
  return (
    <div id='about' className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">About Arnikans.tech</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Community First</h3>
            <p className="text-gray-600">
              Started at Arniko to unite tech enthusiasts, providing a platform for learning and growth.
            </p>
          </div>
          <div className="text-center">
            <Code className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Free Domain Support!</h3>
            <p className="text-gray-600">
            Access to all resources and Items that you need to buildup your Portfolio!
            </p>
          </div>
          <div className="text-center">
            <Share2 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
            <p className="text-gray-600">
              Connect with like-minded students and share your knowledge and experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}