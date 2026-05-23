import React, { useState, useEffect } from 'react';
import bluepatchLogo from '../assets/bluepatch-logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0f1c]/90 backdrop-blur-md border-b border-slate-800/50 py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={bluepatchLogo}
            alt="BluePatch Ventures Limited"
            className="h-12 w-auto object-contain"
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-sm font-medium hover:text-blue-400 transition-colors cursor-pointer">About Us</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-sm font-medium hover:text-blue-400 transition-colors cursor-pointer">Services</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-sm font-medium hover:text-blue-400 transition-colors cursor-pointer">Get Connected</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
