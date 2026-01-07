
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Food & Menu', path: '/food' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 border-b border-stone-200' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <span className={`text-xl font-bold font-display leading-tight ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-stone-900'}`}>
              Ifeanyi Lovers
            </span>
            <span className={`text-[10px] tracking-widest uppercase ${!isScrolled && location.pathname === '/' ? 'text-stone-300' : 'text-stone-500'}`}>
              Guest House
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                  !isScrolled && location.pathname === '/' ? 'text-white/90' : 'text-stone-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 bg-amber-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-amber-700 transition-all shadow-md active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Call to Book
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
             <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className={`mr-4 p-2 rounded-full ${!isScrolled && location.pathname === '/' ? 'text-white border-white/20' : 'text-amber-600 border-stone-200'} border`}
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-stone-900'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass animate-in slide-in-from-top duration-300 border-b border-stone-200">
          <div className="px-4 pt-4 pb-8 space-y-2 flex flex-col items-center text-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-4 text-lg font-medium text-stone-900 border-b border-stone-100 w-full"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 w-full">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-3 bg-amber-600 text-white w-full py-4 rounded-xl font-bold shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call to Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
