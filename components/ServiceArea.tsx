"use client";

import { motion } from "framer-motion";

const communities = [
  "New Brighton",
  "Arden Hills",
  "Roseville",
  "Shoreview",
  "Mounds View",
  "Columbia Heights",
  "Fridley",
  "Blaine",
  "Lino Lakes",
  "St. Anthony",
  "And Surrounding Areas",
];

export default function ServiceArea() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />
        {/* Leaf pattern overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 400 300"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 150 C50 80 120 30 150 150 C180 270 100 280 50 150Z"
            fill="white"
          />
          <path
            d="M200 100 C200 30 270 -20 300 100 C330 220 250 230 200 100Z"
            fill="white"
          />
          <path
            d="M320 200 C320 130 390 80 420 200 C450 320 370 330 320 200Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Map pin icon */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
            </div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Where We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Proudly Serving the North Metro
            </h2>
            <p className="text-white/75 text-base sm:text-lg mt-4 max-w-xl mx-auto leading-relaxed">
              Our crew is ready to serve homeowners and businesses throughout
              the Twin Cities north metro area.
            </p>
          </motion.div>
        </div>

        {/* Community tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2.5 sm:gap-3"
        >
          {communities.map((city, i) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.3, delay: 0.03 * i }}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                city === "And Surrounding Areas"
                  ? "bg-accent text-white"
                  : "bg-white/15 text-white hover:bg-white/25 cursor-pointer"
              }`}
            >
              {city !== "And Surrounding Areas" && (
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-accent" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              )}
              {city}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-8 sm:mt-10"
        >
          <p className="text-white/70 text-sm mb-4">
            Not sure if we serve your area? Give us a call!
          </p>
          <a
            href="tel:6512805768"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-7 py-3.5 rounded-btn hover:bg-gray-50 transition-all duration-200 cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            651-280-5768
          </a>
        </motion.div>
      </div>
    </section>
  );
}
