'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-1 flex items-center justify-center">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} STP - Design. Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
