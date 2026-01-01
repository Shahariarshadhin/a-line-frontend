'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'PAGES', href: '#' },
    { name: 'PORTFOLIO', href: '/portfolio' },
    { name: 'BLOG', href: '#' },
    { name: 'SHOP', href: '#' },
    { name: 'LANDING', href: '#' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center z-50">
              <div className="w-full h-10 text-white font-bold text-3xl">
                A Line
              </div>
            </Link>

            {/* Toggle Button - Hamburger/Close */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-white/10 z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                // Close Icon (X)
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-24">
          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className="text-white text-3xl md:text-4xl lg:text-5xl font-bold hover:text-gray-300 transition-colors block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}