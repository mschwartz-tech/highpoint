"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#gallery" },
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
        <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28">
          {/* Logo */}
          <a href="#" className="flex items-center cursor-pointer relative">
            <Image
              src="/images/logo-white.png"
              alt="High Point Properties"
              width={400}
              height={400}
              className={`h-14 sm:h-20 lg:h-24 w-auto object-contain transition-opacity duration-300 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
              priority
            />
            <Image
              src="/images/logo-dark.png"
              alt="High Point Properties"
              width={400}
              height={400}
              className={`h-14 sm:h-20 lg:h-24 w-auto object-contain transition-opacity duration-300 absolute left-0 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
              priority
            />
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
            className="md:hidden cursor-pointer p-3 rounded-lg -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-7 flex flex-col gap-1.5">
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
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-text-primary font-semibold py-3 border-b border-gray-100 cursor-pointer hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-accent text-white font-bold text-center py-3.5 rounded-btn hover:bg-accent-light transition-colors cursor-pointer mt-2"
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
