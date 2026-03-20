"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Beautiful residential landscaping with hardscape patio at golden hour"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
{/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-snug sm:leading-tight max-w-4xl mx-auto"
        >
          Premium Landscape &amp; Property Services for the{" "}
          <span className="text-accent">Twin Cities North Metro</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 sm:mt-6 text-base sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
        >
          From pristine lawns to stunning hardscapes, we provide expert lawn care, landscaping, and snow removal services across New Brighton and the surrounding communities.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#contact"
            className="bg-accent text-white font-bold text-base px-8 py-4 rounded-btn hover:bg-accent-light hover:shadow-cta transition-all duration-200 cursor-pointer w-full sm:w-auto text-center"
          >
            Get a Free Estimate
          </a>
          <a
            href="tel:6512805768"
            className="flex items-center gap-2 border-2 border-white/70 text-white font-semibold text-base px-8 py-4 rounded-btn hover:bg-white/10 transition-all duration-200 cursor-pointer w-full sm:w-auto justify-center"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            651-280-5768
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white/70 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
