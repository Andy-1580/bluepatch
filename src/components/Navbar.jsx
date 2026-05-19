import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0f1c]/90 backdrop-blur-md border-b border-slate-800/50 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 glow-box flex items-center justify-center font-bold text-white">
            B
          </div>
          <span className="font-heading font-bold text-xl tracking-wide">
            BluePatch <span className="text-blue-500">Ventures</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium hover:text-blue-400 transition-colors">About Us</a>
          <a href="#services" className="text-sm font-medium hover:text-blue-400 transition-colors">Services</a>
          <a href="#contact" className="text-sm font-medium hover:text-blue-400 transition-colors">Get Connected</a>
        </div>


      </div>
    </nav>
  );
};

export default Navbar;
