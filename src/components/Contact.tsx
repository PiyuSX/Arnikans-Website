import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, MapPin, Globe, Mail } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    emailjs.init('EzCfsrzsafCMk2IeU'); // Your public key
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setIsSent(false);
    
    emailjs
      .send('service_iqkl7lh', 'template_p5u3pfb', formData, 'EzCfsrzsafCMk2IeU')
      .then(() => {
        console.log('Message sent');
        setFormData({ name: '', email: '', message: '' }); // Reset form data
        setIsLoading(false);
        setIsSent(true);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('There was an error sending your message. Please try again later.');
        setIsLoading(false);
      });
  };

  return (
    <div id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Get in Touch</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
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
              {error && <p className="text-red-500 text-center">{error}</p>}
              <div className="text-center">
                <button
                  type="submit"
                  className={`px-8 py-4 border-2 rounded-lg transition-colors font-semibold inline-flex items-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ${
                    isSent ? 'border-green-500 text-green-500' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white active:bg-gray-800 focus:border-gray-900'
                  }`}
                  disabled={isLoading || isSent}
                >
                  {isLoading ? (
                    <span>Sending...</span>
                  ) : isSent ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Sent
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
          <div className="md:w-1/2 md:pl-12 mt-12 md:mt-0 md:mt-8">
            <div className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-gray-700 mr-3" />
                <span className="text-lg text-gray-700">Arniko College, Babbage Section</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-6 h-6 text-gray-700 mr-3" />
                <span className="text-lg text-gray-700">Website : <a href="https://piyux.xyz" className="text-purple-500 hover:underline">piyux.xyz</a></span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-gray-700 mr-3" />
                <span className="text-lg text-gray-700">Email: <a href="mailto:help@arnikans.tech" className="text-purple-500 hover:underline">help@arnikans.tech</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
