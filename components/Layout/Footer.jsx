import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-black py-20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="grid grid-cols-1 gap-8">
          {/* Company Info */}
          <div className="">
            <h3 className="text-5xl font-extrabold mb-4 text-white">
              A-Line
            </h3>
            <p className="text-xl mb-4 text-white">
              We align brands
            </p>
            <div className="flex space-x-4 text-xl justify-center">
              <a
                href="https://www.facebook.com/SlingshotmgBD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors text-white"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.tiktok.com/@slingshotmg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors text-white"
              >
                <FaTiktok />
              </a>
              {/* <a
                href="https://instagram.com/slingshotmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                <FaInstagram />
              </a> */}
              <a
                href="https://www.linkedin.com/company/slingshotmg/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors text-white"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 flex flex-col md:flex-row justify-center gap-6">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`${link.toLowerCase()}`}
                      className="text-text-secondary hover:text-primary transition-colors text-white"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <ul className="space-y-2 text-text-secondary">
              <li>Email: info@slingshotmedia.com</li>
              <li>Phone: +880 1234 567890</li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="border-t border-foreground/10 mt-8 pt-8 text-center text-text-secondary text-white">
          <p>
            © {new Date().getFullYear()} A-Line. All rights reserved.
          </p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;