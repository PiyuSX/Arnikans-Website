import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const TYPING_SPEED = 150;
const ERASING_SPEED = 100;
const DELAY = 2000;

const useTypewriter = (text: string) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(TYPING_SPEED);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = text.substring(0, displayedText.length + (isDeleting ? -1 : 1));
      setDisplayedText(currentText);

      if (!isDeleting && currentText === text) {
        setTimeout(() => setIsDeleting(true), DELAY);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? ERASING_SPEED : TYPING_SPEED);
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, typingSpeed, text, loopNum]);

  return displayedText;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const typedText = useTypewriter('ARNIKANS');
  const navigate = useNavigate();

  const handleNavigation = (hash: string) => {
    navigate(`/#${hash}`);
  };

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <nav className="fixed top-4 left-4 right-4 bg-white/70 backdrop-blur-md z-50 shadow-lg rounded-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-purple-600">
                {typedText}|
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <button onClick={() => handleNavigation('home')} className="text-gray-900 hover:text-purple-600 transition-colors">
                  Home
                </button>
                <button onClick={() => handleNavigation('about')} className="text-gray-900 hover:text-purple-600 transition-colors">
                  About
                </button>
                <button onClick={() => handleNavigation('offers')} className="text-gray-900 hover:text-purple-600 transition-colors">
                  Offers
                </button>
                <button onClick={() => handleNavigation('contact')} className="text-gray-900 hover:text-purple-600 transition-colors">
                  Contact
                </button>
                <Link to="/learn" className="text-gray-900 hover:text-purple-600 transition-colors">
                  Learn
                </Link>
                <Link to="/portfolio" className="text-gray-900 hover:text-purple-600 transition-colors">
                  Portfolio
                </Link>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/70 backdrop-blur-md rounded-lg">
              <button onClick={() => handleNavigation('home')} className="block px-3 py-2 text-gray-900 hover:text-purple-600">
                Home
              </button>
              <button onClick={() => handleNavigation('about')} className="block px-3 py-2 text-gray-900 hover:text-purple-600">
                About
              </button>
              <Link to="/learn" className="block px-3 py-2 text-gray-900 hover:text-purple-600">
                Learn
              </Link>
              <button onClick={() => handleNavigation('offers')} className="block px-3 py-2 text-gray-900 hover:text-purple-600">
                Offers
              </button>
              <button onClick={() => handleNavigation('contact')} className="block px-3 py-2 text-gray-900 hover:text-purple-600">
                Contact
              </button>
              <Link to="/portfolio" className="block px-3 py-2 text-gray-900 hover:text-purple-600">
                Portfolio
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}