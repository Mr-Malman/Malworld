import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black/50 backdrop-blur-sm sticky top-0 z-50 border-b border-brand-red/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="text-2xl font-bold text-white hover:text-brand-red transition-colors cursor-pointer">
            &gt; Malworld_
          </a>
          <div className="hidden md:flex space-x-6 text-gray-300">
            <a href="#about" className="hover:text-brand-red transition-colors cursor-pointer">_about</a>
            <a href="#skills" className="hover:text-brand-red transition-colors cursor-pointer">_skills</a>
            <a href="#portfolio" className="hover:text-brand-red transition-colors cursor-pointer">_portfolio</a>
            <a href="#contact" className="hover:text-brand-red transition-colors cursor-pointer">_contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;