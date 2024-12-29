import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a
            href="https://get.arnikans.tech"
            className="hover:text-blue-400 transition-colors"
            target='_blank'
          >
            Get Domain
          </a>
          <p className="flex items-center">
            Built with <Heart className="w-4 h-4 mx-2 text-red-500" /> by{' '}
            <a
              href="https://www.piyux.xyz"
              className="ml-1 text-blue-400 hover:text-blue-300 transition-colors"
            >
              Piyush
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
