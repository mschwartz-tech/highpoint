"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 cursor-pointer">
            {/* Leaf icon */}
            <svg
              viewBox="0 0 32 32"
              className="w-8 h-8 flex-shrink-0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 2C9.4 2 4 10 4 20c0 4 1.4 7.6 3.6 10C9 26.4 12.3 24 16 24s7 2.4 8.4 6C26.6 27.6 28 24 28 20 28 10 22.6 2 16 2z"
                fill="#1B5E20"
              />
              <path
                d="M16 24V30"
                stroke="#4E342E"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span
              className={`font-extrabold text-lg leading-tight tracking-tight transition-colors duration-300 ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              HIGH POINT
              <span
                className={`block text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${
                  scrolled ? "text-text-secondary" : "text-white/80"
                }`}
              >
                PROPERTIES
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 hover:text-accent cursor-pointer ${
                  scrolled ? "text-text-primary" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-accent text-white text-sm font-bold px-5 py-2.5 rounded-btn hover:bg-accent-light hover:shadow-cta transition-all duration-200 cursor-pointer"
            >
              Free Estimate
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden cursor-pointer p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  scrolled ? "bg-text-primary" : "bg-white"
                } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  scrolled ? "bg-text-primary" : "bg-white"
                } ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  scrolled ? "bg-text-primary" : "bg-white"
                } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-text-primary font-semibold py-2 border-b border-gray-100 cursor-pointer hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-accent text-white font-bold text-center py-3 rounded-btn hover:bg-accent-light transition-colors cursor-pointer"
              >
                Get Free Estimate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
