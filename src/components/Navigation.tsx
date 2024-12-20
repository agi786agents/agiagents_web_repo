import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-white hover:text-primary-accent transition-colors ${
                  location.pathname === link.path ? 'text-primary-accent' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://calendly.com/agi786agents"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-accent text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-opacity-90 hover:shadow-[0_0_15px_rgba(0,123,255,0.3)]"
            >
              Schedule Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-primary-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-white hover:text-primary-accent transition-colors ${
                    location.pathname === link.path ? 'text-primary-accent' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://calendly.com/agi786agents"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-white hover:text-primary-accent transition-colors"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}