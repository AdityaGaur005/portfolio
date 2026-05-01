import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter mb-4 md:mb-0">
          AG<span className="text-accent-500">.</span>
        </div>
        
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} Aditya Gaur. All rights reserved.
        </p>

        <div className="flex items-center gap-6 mt-4 md:mt-0 text-sm font-medium text-gray-500">
          <span>Designed with React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
