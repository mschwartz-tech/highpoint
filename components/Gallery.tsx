"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Category = "All" | "Hardscape" | "Landscape Design" | "Lawn Care" | "Snow Removal" | "Property";

const galleryItems = [
  // Hardscape
  { src: "/images/gallery/hardscape-retaining-wall-with-steps.jpg", caption: "Retaining Wall with Steps", category: "Hardscape" as Category },
  { src: "/images/gallery/hardscape-retaining-wall-and-patio-construction.jpg", caption: "Retaining Wall & Patio", category: "Hardscape" as Category },
  { src: "/images/gallery/hardscape-new-flagstone-patio-installation.jpg", caption: "New Flagstone Patio", category: "Hardscape" as Category },
  { src: "/images/gallery/hardscape-wooden-stairs-and-rocky-shoreline.jpg", caption: "Wooden Stairs & Shoreline", category: "Hardscape" as Category },
  { src: "/images/gallery/hardscape-wooden-retaining-wall-construction.jpg", caption: "Wooden Retaining Wall", category: "Hardscape" as Category },
  { src: "/images/gallery/hardscape-retaining-wall-construction-in-progress.jpg", caption: "Retaining Wall Construction", category: "Hardscape" as Category },
  { src: "/images/gallery/hardscape-retaining-wall-and-gravel-area.jpg", caption: "Retaining Wall & Gravel", category: "Hardscape" as Category },
  { src: "/images/gallery/hardscape-retaining-wall-and-deck-support.jpg", caption: "Retaining Wall & Deck Support", category: "Hardscape" as Category },
  { src: "/images/gallery/hardscape-hot-tub-pad-and-pathway.jpg", caption: "Hot Tub Pad & Pathway", category: "Hardscape" as Category },
  { src: "/images/gallery/hardscape-gravel-walkway-next-to-house.jpg", caption: "Gravel Walkway", category: "Hardscape" as Category },
  { src: "/images/gallery/hardscape-gravel-area-with-wooden-fence.jpg", caption: "Gravel Area & Wood Fence", category: "Hardscape" as Category },
  { src: "/images/gallery/hardscape-segmented-retaining-wall-installation.jpg", caption: "Segmented Retaining Wall", category: "Hardscape" as Category },

  // Landscape Design
  { src: "/images/gallery/landscape-design-new-garden-bed-installation.jpg", caption: "New Garden Bed", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-retaining-wall-with-plants.jpg", caption: "Retaining Wall with Plants", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-stone-path-and-garden-bed.jpg", caption: "Stone Path & Garden Bed", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-mulch-beds-plants-and-lawn.jpg", caption: "Mulch Beds & Lawn", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-deck-and-garden-bed-enhancement.jpg", caption: "Deck & Garden Bed", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-mulch-beds-with-plants-and-trees.jpg", caption: "Mulch Beds with Trees", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-lush-green-lawn-and-trees.jpg", caption: "Lush Lawn & Trees", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-wooden-retaining-wall-construction2.jpg", caption: "Wooden Retaining Wall", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-wooden-retaining-wall-construction3.jpg", caption: "Retaining Wall Project", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-retaining-wall-with-new-plantings.jpg", caption: "Retaining Wall & Plantings", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-rock-garden-with-plants.jpg", caption: "Rock Garden", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-mulch-bed-installation-in-progress.jpg", caption: "Mulch Bed Installation", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-new-gravel-bed-with-plants.jpg", caption: "New Gravel Bed", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-worker-adding-soil-to-planter.jpg", caption: "Garden Planter Build", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-deck-with-mulch-and-plants.jpg", caption: "Deck with Mulch & Plants", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-new-deck-with-white-railing.jpg", caption: "New Deck & Railing", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-newly-mulched-garden-beds-with-plants.jpg", caption: "Fresh Mulch Beds", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-mulched-garden-bed-with-trees.jpg", caption: "Mulched Garden & Trees", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-deck-walkway-and-landscaping-project.jpg", caption: "Deck, Walkway & Landscaping", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-new-sod-and-walkway-installation.jpg", caption: "Sod & Walkway", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-decorative-rock-bed-with-plants.jpg", caption: "Decorative Rock Bed", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-new-gravel-bed-and-sod.jpg", caption: "Gravel Bed & Sod", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-mulch-bed-along-walkway.jpg", caption: "Walkway Mulch Bed", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-new-sod-and-mulched-garden-bed.jpg", caption: "Sod & Mulched Garden", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-shrubbery-with-gravel-bed.jpg", caption: "Shrubbery & Gravel", category: "Landscape Design" as Category },
  { src: "/images/gallery/landscape-design-team-photo-with-flower-garden.jpg", caption: "Team & Flower Garden", category: "Landscape Design" as Category },

  // Lawn Care
  { src: "/images/gallery/lawn-care-newly-laid-sod-in-yard.jpg", caption: "New Sod Installation", category: "Lawn Care" as Category },
  { src: "/images/gallery/lawn-care-newly-sodded-lawn-with-trees.jpg", caption: "Sodded Lawn", category: "Lawn Care" as Category },
  { src: "/images/gallery/lawn-care-newly-laid-sod-patch.jpg", caption: "Sod Patch Repair", category: "Lawn Care" as Category },
  { src: "/images/gallery/equipment-crew-member-on-zero-turn-mower.jpg", caption: "Lawn Mowing Service", category: "Lawn Care" as Category },

  // Snow Removal
  { src: "/images/gallery/snow-removal-plow-truck-in-snow.jpg", caption: "Snow Plow Truck", category: "Snow Removal" as Category },

  // Property
  { src: "/images/gallery/property-newly-graded-dirt-driveway-leading-to-house.jpg", caption: "Graded Driveway", category: "Property" as Category },
  { src: "/images/gallery/property-house-exterior-with-landscaping-features.jpg", caption: "House & Landscaping", category: "Property" as Category },
  { src: "/images/gallery/property-well-maintained-lawn-and-landscaping.jpg", caption: "Well-Maintained Property", category: "Property" as Category },
  { src: "/images/gallery/property-backyard-with-retaining-wall.jpg", caption: "Backyard Transformation", category: "Property" as Category },
  { src: "/images/gallery/property-well-maintained-house-and-lawn.jpg", caption: "Curb Appeal", category: "Property" as Category },
];

const categories: Category[] = ["All", "Hardscape", "Landscape Design", "Lawn Care", "Snow Removal", "Property"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: Math.min(i * 0.04, 0.4) },
  }),
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Our Work
          </span>
          <h2 className="section-heading">
            Recent Projects
          </h2>
          <p className="section-subheading mx-auto text-center mt-4">
            Real results from real properties across the Twin Cities metro.
            Every project built to last through Minnesota seasons.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({galleryItems.filter((i) => i.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.src}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
                onClick={() => setLightboxIndex(i)}
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider opacity-80">
                    {item.category}
                  </span>
                  <span className="text-white text-sm sm:text-base font-bold mt-0.5">
                    {item.caption}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl font-light cursor-pointer z-10"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
            >
              &times;
            </button>
            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl font-light cursor-pointer z-10"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
              }}
              aria-label="Previous"
            >
              &#8249;
            </button>
            {/* Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl font-light cursor-pointer z-10"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % filtered.length);
              }}
              aria-label="Next"
            >
              &#8250;
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl max-h-[85vh] w-full aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].caption}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <span className="text-white/60 text-xs uppercase tracking-wider">
                {filtered[lightboxIndex].category}
              </span>
              <p className="text-white text-lg font-semibold mt-1">
                {filtered[lightboxIndex].caption}
              </p>
              <p className="text-white/40 text-xs mt-1">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
