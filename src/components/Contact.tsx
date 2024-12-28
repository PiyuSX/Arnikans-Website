import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div id='contact' className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg p-3 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg p-3 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg p-3 focus:outline-none"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg 
              hover:bg-gray-900 hover:text-white transition-colors font-semibold inline-flex items-center
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 active:bg-gray-800 focus:border-gray-900"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
