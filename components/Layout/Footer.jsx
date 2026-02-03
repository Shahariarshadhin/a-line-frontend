import Image from "next/image";
import Link from "next/link";
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
    <footer className="bg-black py-4">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          {/* Company Info */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-full text-white font-bold text-3xl flex justify-center">
              <Image
                src="/assets/logo/footerlogo-white.PNG"
                alt="Logo"
                width={200}
                height={100}
                className="w-full h-full"
              />
            </div>
            <div className="flex space-x-4 text-xl justify-center mt-2">
              
               <a href="https://www.facebook.com/ALineLimited/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <FaFacebookF />
              </a>
              
              <a href="https://www.instagram.com/a_linebrands"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <FaInstagram />
              </a>
              
              <a  href="https://www.linkedin.com/company/a-linebrands"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            {/* <h4 className="text-lg font-semibold mb-2 text-white">
              Quick Links
            </h4> */}
            <ul className="space-y-2 flex flex-col md:flex-row justify-center gap-6">
              {["Home", "About", "Services", "Portfolio"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                      className="text-white hover:text-primary transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-foreground/10 mt-3 pt-3 text-center text-white">
          <p>© {new Date().getFullYear()} A-Line. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;