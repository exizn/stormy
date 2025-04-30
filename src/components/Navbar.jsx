import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our services" },
    { href: "#testimonials", label: "Testimonials" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-full opacity-50 hover:opacity-100 transition-opacity"></div>
          <div className="w-8 h-8 -ml-2 bg-red-600 rounded-full opacity-100 hover:opacity-50 transition-opacity"></div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Get in Touch
          </button>
        </div>

        {/* mobile menu button*/}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl"
          >
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                className="text-sm font-medium"
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
