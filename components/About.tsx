"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "8+", label: "Years of Experience" },
  { value: "250+", label: "Projects Completed" },
  { value: "100%", label: "Satisfaction Guaranteed" },
];

const values = [
  {
    title: "Honest Work",
    description: "Straightforward pricing with no hidden fees.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
  {
    title: "Attention to Detail",
    description: "Every project treated with precision and care.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
      </svg>
    ),
  },
  {
    title: "Locally Owned",
    description: "Your neighbors, invested in our community.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-card overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="/images/team.jpg"
                alt="High Point Properties landscape crew working together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Green accent border */}
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/10 rounded-card" />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -bottom-6 right-0 sm:-right-4 lg:-right-8 bg-primary text-white rounded-card p-4 sm:p-5 shadow-xl max-w-[calc(100%-2rem)] sm:max-w-none"
            >
              <div className="flex gap-4 sm:gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-xl sm:text-2xl font-extrabold text-accent leading-none">
                      {stat.value}
                    </div>
                    <div className="text-white/75 text-[10px] sm:text-xs mt-1 leading-tight max-w-[70px]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Decorative leaf shape */}
            <div className="absolute -top-8 -left-8 w-28 h-28 rounded-full bg-primary/8 -z-10 hidden sm:block" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:pl-4 mt-10 lg:mt-0"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Our Story
            </span>
            <h2 className="section-heading">
              Built on Quality<br />Craftsmanship
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mt-5 sm:mt-6">
              High Point Properties is a locally owned and operated landscaping
              company serving New Brighton and the north metro Twin Cities area.
              Our dedicated crew brings passion and precision to every project,
              whether it is a simple lawn maintenance plan or a complete outdoor
              transformation.
            </p>
            <p className="text-text-secondary text-base leading-relaxed mt-4">
              We take pride in honest work, attention to detail, and building
              lasting relationships with our neighbors and clients. When you
              choose High Point, you are choosing a team that genuinely cares
              about your property — and your community.
            </p>

            {/* Value pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex flex-col gap-2 p-4 bg-background rounded-card"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    {v.icon}
                  </div>
                  <div>
                    <div className="font-bold text-text-primary text-sm">
                      {v.title}
                    </div>
                    <div className="text-text-secondary text-xs mt-0.5 leading-snug">
                      {v.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="bg-accent text-white font-bold px-7 py-3.5 rounded-btn hover:bg-accent-light hover:shadow-cta transition-all duration-200 cursor-pointer inline-block"
              >
                Work With Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
