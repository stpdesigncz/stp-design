'use client';

import React, { useState } from 'react';
import Link from 'next/link'; // Přidán import Link

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white p-4 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="text-white text-lg font-bold">
            <img src="/logo.png" alt="Logo" className="h-8" />
          </div>
        </Link>
        {/* Burger menu button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden lg:flex space-x-4">
          <Link href="/project">
            <button className="text-black block w-full text-center px-4 py-2 rounded hover:bg-gray-100 transition font-poppins">
              Projekty
            </button>
          </Link>
          <Link href="/form">
            <button className="text-black block w-full text-center px-4 py-2 rounded hover:bg-gray-100 transition font-poppins">
              Poptávka
            </button>
          </Link>
          <Link href="/blog">
            <button className="text-black block w-full text-center px-4 py-2 rounded hover:bg-gray-100 transition font-poppins">
              Blog
            </button>
          </Link>
          <Link href="/reference">
            <button className="text-black block w-full text-center px-4 py-2 rounded hover:bg-gray-100 transition font-poppins">
              Reference
            </button>
          </Link>
          <Link href="/gallery">
            <button className="text-black block w-full text-center px-4 py-2 rounded hover:bg-gray-100 transition font-poppins">
              Galerie
            </button>
          </Link>
          <Link href="/contact">
            <button className="text-black block w-full text-center px-4 py-2 rounded hover:bg-gray-100 transition font-poppins">
              Kontakt
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 space-y-4`}>
        <Link href="/project">
          <button className="text-black block w-full text-center px-4 py-2 rounded hover:bg-gray-100 transition font-poppins">
            Projekty
          </button>
        </Link>
        <Link href="/form">
          <button className="text-black block w-full text-center px-4 py-2 rounded hover:bg-gray-100 transition font-poppins">
            Poptávka
          </button>
        </Link>
        <Link href="/blog">
          <button className="text-black block w-full text-center px-4 py-2 rounded hover:bg-gray-100 transition font-poppins">
            Blog
          </button>
        </Link>
        <Link href="/reference">
          <button className="text-black block w-full text-center px-4 py-2 rounded hover:bg-gray-100 transition font-poppins">
            Reference
          </button>
        </Link>
        <Link href="/gallery">
          <button className="text-black block w-full text-center px-4 py-2 rounded hover:bg-gray-100 transition font-poppins">
            Galerie
          </button>
        </Link>
        <Link href="/contact">
          <button className="text-black block w-full text-center px-4 py-2 rounded hover:bg-gray-100 transition font-poppins">
            Kontakt
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
