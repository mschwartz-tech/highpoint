"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "High Point Properties completely transformed our backyard. The patio work is gorgeous and their crew was professional from start to finish.",
    name: "Virginia S.",
    location: "New Brighton, MN",
    service: "Hardscaping & Patio",
    stars: 5,
  },
  {
    quote:
      "We have been using HP Properties for lawn care and snow removal for two seasons now. Consistent, reliable, and our yard has never looked better.",
    name: "Jacqueline H.",
    location: "Arden Hills, MN",
    service: "Lawn Care & Snow Removal",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-5 h-5 text-accent" fill="currentColor">
          <path d="M12 2L9.09 8.26L2 9.27L7 14.14L5.82 21.02L12 17.77L18.18 21.02L17 14.14L22 9.27L14.91 8.26L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-background">
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
            Client Reviews
          </span>
          <h2 className="section-heading">
            What Our Clients Are Saying
          </h2>
          <p className="section-subheading mx-auto text-center mt-4">
            Real feedback from real neighbors across the Twin Cities north metro.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-card shadow-card p-8 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-primary/10">
                <svg viewBox="0 0 48 48" className="w-16 h-16" fill="currentColor">
                  <path d="M10 34c-3.31 0-6-2.69-6-6v-6c0-6.63 5.37-12 12-12h2v4h-2c-4.41 0-8 3.59-8 8v2h6v10H10zm22 0c-3.31 0-6-2.69-6-6v-6c0-6.63 5.37-12 12-12h2v4h-2c-4.41 0-8 3.59-8 8v2h6v10H32z" />
                </svg>
              </div>

              <StarRating count={t.stars} />

              <p className="text-text-primary text-base leading-relaxed mt-4 italic relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-text-primary">{t.name}</div>
                  <div className="text-text-secondary text-sm">{t.location}</div>
                </div>
                <div className="bg-primary/8 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                  {t.service}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google rating banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} viewBox="0 0 24 24" className="w-4 h-4 text-accent" fill="currentColor">
                  <path d="M12 2L9.09 8.26L2 9.27L7 14.14L5.82 21.02L12 17.77L18.18 21.02L17 14.14L22 9.27L14.91 8.26L12 2Z" />
                </svg>
              ))}
            </div>
            <span className="text-text-primary font-semibold text-sm">5.0 rating</span>
            <span className="text-text-secondary text-sm">— Trusted by our community</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
