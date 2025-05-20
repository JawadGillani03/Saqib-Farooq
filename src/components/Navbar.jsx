import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-full transition-all duration-500 ${scrolled ? 'bg-[#222831] shadow-lg py-2' : 'bg-[#393E46]/100 py-3'} z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-[#FFD369] hover:scale-105 transition-transform duration-300 cursor-pointer">
                Saqib Farooq
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <NavLink href="#about" text="About" onClick={closeMobileMenu} />
              <NavLink href="#projects" text="Projects" onClick={closeMobileMenu} />
              <NavLink href="#skills" text="Skills" onClick={closeMobileMenu} />
              <NavLink href="#contact" text="Contact" onClick={closeMobileMenu} />
              <NavLink href="#experience" text="Experience" onClick={closeMobileMenu} />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="text-[#EEEEEE] hover:text-[#FFD369] focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-2 bg-[#222831]">
            <MobileNavLink href="#about" text="About" onClick={closeMobileMenu} />
            <MobileNavLink href="#projects" text="Projects" onClick={closeMobileMenu} />
            <MobileNavLink href="#skills" text="Skills" onClick={closeMobileMenu} />
            <MobileNavLink href="#contact" text="Contact" onClick={closeMobileMenu} />
            <MobileNavLink href="#experience" text="Experience" onClick={closeMobileMenu} />
          </div>
        </div>
      </nav>

      {/* Add padding to prevent content from being hidden behind navbar */}
      <div className="h-16"></div>
    </>
  );
}

function NavLink({ href, text, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative group text-[#EEEEEE] hover:text-[#FFD369] transition-colors duration-300 text-lg font-medium"
    >
      {text}
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#FFD369] transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}

function MobileNavLink({ href, text, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-lg font-medium text-[#EEEEEE] hover:bg-[#393E46] hover:text-[#FFD369] transition-colors duration-300"
    >
      {text}
    </a>
  );
}