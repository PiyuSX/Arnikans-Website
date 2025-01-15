import React from 'react';
import Footer from '../components/Footer'; // Import Footer component
import playlists from '../data/playlists'; // Import playlists data

const getYouTubeEmbedUrl = (link: string) => {
  const listIdMatch = link.match(/list=([^&]+)/);
  if (listIdMatch) {
    return `https://www.youtube.com/embed/videoseries?list=${listIdMatch[1]}`;
  }
  const videoIdMatch = link.match(/v=([^&]+)/);
  if (videoIdMatch) {
    return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
  }
  return link;
};

export default function Learn() {
  return (
    <div id="learn" className="min-h-screen flex flex-col">
      <div className="flex-grow py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Mine Personal Choices
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {playlists.map((playlist, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <playlist.icon className="w-12 h-12 text-red-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{playlist.title}</h3>
                <a
                  href={playlist.link}
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch
                </a>
                <div className="mt-6">
                  <iframe
                    width="100%"
                    height="315"
                    src={getYouTubeEmbedUrl(playlist.link)}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer /> {/* Include Footer component */}
    </div>
  );
}
