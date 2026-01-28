"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "HOME", href: "/home" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "Services", href: "/service" },
    { name: "Who we are", href: "/about" },
    { name: "Blogs", href: "/blogs" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/ALineLimited/",
      color: "hover:text-blue-500"
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/a_linebrands",
      color: "hover:text-pink-500"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/company/a-linebrands",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center z-50">
              <div className="w-full h-full text-white font-bold text-3xl">
                <Image
                  src="/assets/logo/logo-black.PNG"
                  alt="Logo"
                  width={160}
                  height={160}
                  className="w-full h-full"
                />
              </div>
            </Link>

            {/* Toggle Button - Hamburger/Close */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md bg-black z-50 hover:bg-gray-800 transition-colors relative overflow-hidden group"
              aria-label="Toggle menu"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
              {isOpen ? (
                <svg
                  className="w-8 h-8 text-white transform transition-transform group-hover:rotate-90 duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-white transition-transform group-hover:scale-110 duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-all duration-500 ease-in-out font-barlow-condensed ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-24 relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gray-800/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-800/20 to-transparent rounded-full blur-3xl"></div>

          {/* Navigation Links */}
          <nav className="flex-1 pl-[10%] relative z-10">
            <ul className="space-y-8">
              {navItems.map((item, index) => (
                <li 
                  key={item.name}
                  className="opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className="group text-white text-3xl md:text-4xl lg:text-5xl font-bold transition-all duration-300 block relative inline-block"
                  >
                    <span className="relative inline-block">
                      <span className={`transition-all duration-300 ${hoveredIndex === index ? 'tracking-wider' : ''}`}>
                        {item.name.split('').map((char, i) => (
                          <span 
                            key={i}
                            className="inline-block transition-transform duration-300 hover:scale-110"
                            style={{ 
                              transitionDelay: `${i * 30}ms`,
                              display: char === ' ' ? 'inline' : 'inline-block'
                            }}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                        ))}
                      </span>
                      <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-white to-gray-400 transition-all duration-500 group-hover:w-full"></span>
                      {hoveredIndex === index && (
                        <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-2xl opacity-0 animate-fade-in">→</span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links & Footer Section */}
          <div className="pl-[10%] pb-8 space-y-6 relative z-10">
            {/* Social Media Links */}
            <div 
              className="flex space-x-6 text-2xl opacity-0 animate-fade-in"
              style={{ animationDelay: '600ms' }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 opacity-0 animate-fade-in`}
                  style={{ animationDelay: `${700 + index * 100}ms` }}
                  aria-label={social.name}
                >
                  <span className="relative inline-block">
                    {social.icon}
                    <span className="absolute inset-0 bg-current opacity-0 blur-lg transition-opacity hover:opacity-30"></span>
                  </span>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div 
              className="w-24 h-px bg-gradient-to-r from-gray-600 to-transparent opacity-0 animate-fade-in"
              style={{ animationDelay: '900ms' }}
            ></div>

            {/* Copyright */}
            <p 
              className="text-gray-400 text-sm md:text-base opacity-0 animate-fade-in hover:text-gray-300 transition-colors"
              style={{ animationDelay: '1000ms' }}
            >
              © {new Date().getFullYear()} A-Line. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
        }
      `}</style>
    </>
  );
}