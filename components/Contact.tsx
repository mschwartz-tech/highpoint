"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const serviceOptions = [
  "Lawn Care & Maintenance",
  "Hardscaping & Patios",
  "Landscape Design",
  "Snow Removal",
  "Irrigation Systems",
  "Other",
];

const contactInfo = [
  {
    label: "Phone",
    value: "651-280-5768",
    href: "tel:6512805768",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "hppropertiesmn@gmail.com",
    href: "mailto:hppropertiesmn@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    label: "Service Area",
    value: "New Brighton & North Metro Twin Cities",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </span>
          <h2 className="section-heading">
            Ready to Transform Your Property?
          </h2>
          <p className="section-subheading mx-auto text-center mt-4">
            Fill out the form below and we will get back to you within one
            business day with a free estimate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <div className="bg-background rounded-card p-8">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Contact Information
              </h3>
              <p className="text-text-secondary text-sm mb-8">
                Reach out directly or use the form — we are happy to help.
              </p>

              <div className="flex flex-col gap-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="text-text-primary font-medium mt-0.5 group-hover:text-primary transition-colors duration-200">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 mt-8 pt-6">
                <p className="text-text-secondary text-sm">
                  <span className="font-semibold text-text-primary">Business hours:</span>
                  <br />
                  Mon–Fri: 7am – 6pm
                  <br />
                  Saturday: 8am – 4pm
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16 bg-background rounded-card"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  Message Received!
                </h3>
                <p className="text-text-secondary max-w-xs">
                  Thanks for reaching out. We will be in touch within one
                  business day with your free estimate.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-text-primary mb-1.5"
                  >
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 border border-gray-200 rounded-btn text-text-primary placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm"
                  />
                </div>

                {/* Email */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-text-primary mb-1.5"
                  >
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-btn text-text-primary placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm"
                  />
                </div>

                {/* Phone */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-text-primary mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="651-555-0100"
                    className="w-full px-4 py-3 border border-gray-200 rounded-btn text-text-primary placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm"
                  />
                </div>

                {/* Service dropdown */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-text-primary mb-1.5"
                  >
                    Service Interest <span className="text-accent">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-btn text-text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm bg-white cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-text-primary mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or any questions you have..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-btn text-text-primary placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-accent text-white font-bold py-4 rounded-btn hover:bg-accent-light hover:shadow-cta transition-all duration-200 cursor-pointer text-base"
                  >
                    Request Your Free Estimate
                  </button>
                  <p className="text-center text-text-secondary text-xs mt-3">
                    We respond within 1 business day. No spam, ever.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
