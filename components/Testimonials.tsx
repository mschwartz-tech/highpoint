"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    quote:
      "High Point Properties completely transformed our backyard. The patio work is gorgeous and their crew was professional from start to finish. Gunnar really takes pride in his work.",
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
  {
    quote:
      "Gunnar and his crew did our spring cleanup and the yard looked incredible. They were thorough, on time, and the price was very fair. Will definitely be calling them again this fall.",
    name: "Mark T.",
    location: "New Brighton, MN",
    service: "Spring Cleanup",
    stars: 5,
  },
  {
    quote:
      "Had them design and install a retaining wall and new garden beds. The workmanship is top notch. Neighbors keep asking who did the work.",
    name: "Sandra R.",
    location: "Shoreview, MN",
    service: "Landscape Design",
    stars: 5,
  },
  {
    quote:
      "Hired High Point for snow removal this past winter and they were always there before I had to leave for work. Never once had to worry about my driveway. Huge peace of mind.",
    name: "Dave K.",
    location: "Mounds View, MN",
    service: "Snow Removal",
    stars: 5,
  },
  {
    quote:
      "The lawn maintenance program they set us up with is fantastic. Our grass went from patchy and thin to thick and green in one season. These guys know Minnesota lawns.",
    name: "Lisa M.",
    location: "Roseville, MN",
    service: "Lawn Care",
    stars: 5,
  },
  {
    quote:
      "Gunnar came out personally to walk through the project with me. That personal attention made all the difference. The finished patio exceeded every expectation.",
    name: "Tom W.",
    location: "New Brighton, MN",
    service: "Hardscaping",
    stars: 5,
  },
  {
    quote:
      "Professional, punctual, and very reasonably priced. Did our fall cleanup, aeration, and overseeding all in one visit. The yard looked better going into winter than it ever has.",
    name: "Amy B.",
    location: "Arden Hills, MN",
    service: "Fall Cleanup & Aeration",
    stars: 5,
  },
  {
    quote:
      "I have tried several lawn companies over the years. High Point is by far the best. They actually care about the results, not just showing up and collecting a check.",
    name: "Greg L.",
    location: "Blaine, MN",
    service: "Lawn Care & Maintenance",
    stars: 5,
  },
  {
    quote:
      "Hired them for a full landscape redesign of our front yard. From the initial consult to the final walk-through, the experience was seamless. Absolutely love the new look.",
    name: "Christine O.",
    location: "Columbia Heights, MN",
    service: "Landscape Design",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 text-amber-400" fill="currentColor">
          <path d="M12 2L9.09 8.26L2 9.27L7 14.14L5.82 21.02L12 17.77L18.18 21.02L17 14.14L22 9.27L14.91 8.26L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="flex-shrink-0 w-[320px] sm:w-[360px] bg-white/5 border border-white/10 rounded-2xl p-6 mx-3 backdrop-blur-sm">
      <StarRating count={review.stars} />
      <p className="text-white/80 text-sm leading-relaxed mt-3 italic">
        &ldquo;{review.quote}&rdquo;
      </p>
      <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
        <div>
          <div className="font-bold text-white text-sm">{review.name}</div>
          <div className="text-white/50 text-xs mt-0.5">{review.location}</div>
        </div>
        <div className="bg-accent/20 text-accent text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
          {review.service}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const posRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.4; // px per frame — slow continuous crawl

    function animate() {
      if (!track) return;
      posRef.current += speed;
      // Each card is ~346px (320 + 2*13 margin) on mobile, ~386px on sm
      const cardWidth = 346;
      const half = reviews.length * cardWidth;
      if (posRef.current >= half) {
        posRef.current -= half;
      }
      track.style.transform = `translateX(-${posRef.current}px)`;
      animFrameRef.current = requestAnimationFrame(animate);
    }

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  // Duplicate reviews for seamless loop
  const doubled = [...reviews, ...reviews];

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-28 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Client Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            What Our Clients Are Saying
          </h2>
          <p className="text-white/60 text-base sm:text-lg mx-auto text-center mt-4 max-w-xl">
            Real feedback from real neighbors across the Twin Cities north metro.
          </p>
        </motion.div>
      </div>

      {/* Carousel — full-width, outside max-w container */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ transform: "translateX(0px)" }}
        >
          {doubled.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* Google rating banner */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 sm:px-6 py-3 flex-wrap justify-center">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} viewBox="0 0 24 24" className="w-4 h-4 text-amber-400" fill="currentColor">
                  <path d="M12 2L9.09 8.26L2 9.27L7 14.14L5.82 21.02L12 17.77L18.18 21.02L17 14.14L22 9.27L14.91 8.26L12 2Z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-semibold text-sm">5.0 Google Rating</span>
            <span className="text-white/50 text-sm">— Trusted by our community</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
