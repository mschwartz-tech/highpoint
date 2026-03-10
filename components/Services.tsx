"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Lawn Care & Maintenance",
    description:
      "Keep your lawn looking its best year-round. Regular mowing, fertilization, aeration, and seasonal treatments tailored to Minnesota growing conditions.",
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
    image: null,
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="10" fill="white" fillOpacity="0.3" />
        <path d="M24 8C15.16 8 8 15.16 8 24s7.16 16 16 16 16-7.16 16-16S32.84 8 24 8z" fill="white" fillOpacity="0.15" />
        <path d="M24 14v10l6 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 32c2-4 8-6 8-6s6 2 8 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 26c0 0-4-6-4-12" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 26c0 0 4-6 4-12" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    gradient: "from-primary via-primary-light to-[#388E3C]",
  },
  {
    title: "Snow Removal",
    description:
      "Reliable residential and commercial snow removal when you need it most. Keep your property safe and accessible all winter long.",
    image: "/images/snow.jpg",
    imageAlt: "Snow removal service",
  },
  {
    title: "Irrigation Systems",
    description:
      "Professional irrigation design, installation, and maintenance. Efficient watering systems that keep your landscape thriving while conserving water.",
    image: null,
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6c0 0-12 14-12 22a12 12 0 0 0 24 0C36 20 24 6 24 6z" fill="white" fillOpacity="0.3" />
        <path d="M18 32c0 3.31 2.69 6 6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 22h4M32 22h4M24 12v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 36l-4 4M32 36l4 4" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
    gradient: "from-[#1565C0] via-[#1976D2] to-[#42A5F5]",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </span>
          <h2 className="section-heading">
            Complete Property Services,<br />Done Right the First Time
          </h2>
          <p className="section-subheading mx-auto text-center mt-4">
            From seasonal lawn care to full outdoor transformations — we handle
            every aspect of your property with care and expertise.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="group bg-white rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Card image or gradient */}
              {service.image ? (
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt || service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              ) : (
                <div
                  className={`h-52 bg-gradient-to-br ${service.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  {/* Decorative circles */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-white/10" />
                  <div className="relative z-10">{service.icon}</div>
                </div>
              )}

              {/* Card content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all duration-200">
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
