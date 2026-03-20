"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Lawn Care & Maintenance",
    description:
      "Keep your lawn looking its best year-round. Regular mowing, aeration, and seasonal treatments tailored to Minnesota growing conditions.",
    image: "/images/lawncare.jpg",
    imageAlt: "Professional lawn maintenance crew",
  },
  {
    title: "Hardscaping & Patios",
    description:
      "Create the outdoor living space you have been dreaming about. Custom stone patios, retaining walls, walkways, and fire pit areas built to last through Minnesota weather.",
    image: "/images/hardscape.jpg",
    imageAlt: "Stone paver patio with fire pit",
  },
  {
    title: "Landscape Design",
    description:
      "Complete landscape planning and installation. From concept to completion, we design outdoor environments that complement your home and lifestyle.",
    image: "/images/landscape-design.jpg",
    imageAlt: "Beautiful residential landscape design",
  },
  {
    title: "Snow Removal",
    description:
      "Reliable residential and commercial snow removal when you need it most. Keep your property safe and accessible all winter long.",
    image: "/images/snow.jpg",
    imageAlt: "Snow removal service",
  },
  {
    title: "Spring & Fall Cleanup",
    description:
      "Thorough seasonal cleanups to prepare your property for the season ahead. Leaf removal, debris clearing, bed cleanup, and yard prep for spring or winterization in fall.",
    image: "/images/spring-fall-cleanup.jpg",
    imageAlt: "Spring and fall lawn cleanup service",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function Services() {
  function handleLearnMore(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const target = document.getElementById("contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </span>
          <h2 className="section-heading">
            Complete Property Services,<br className="hidden sm:block" />Done Right the First Time
          </h2>
          <p className="section-subheading mx-auto text-center mt-4">
            From seasonal lawn care to full outdoor transformations — we handle
            every aspect of your property with care and expertise.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={fadeUp}
              className="group bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Card image */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt || service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Card content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  onClick={handleLearnMore}
                  className="mt-4 flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all duration-200"
                >
                  <span>Learn more</span>
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
