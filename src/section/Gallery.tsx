"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mountain, MapPin, X } from "lucide-react";
import { GALLERY_HEADER, GALLERY_DATA, GalleryItem } from "@/data/galleryData";
import { fadeInUp, staggerContainer } from "@/lib/animation";

export const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const featuredItem1 = GALLERY_DATA.find((item) => item.id === "gal-1");
  const featuredItem2 = GALLERY_DATA.find((item) => item.id === "gal-6");
  
  const smallItemsGroup1 = GALLERY_DATA.filter((item) =>
    ["gal-2", "gal-3", "gal-4", "gal-5"].includes(item.id)
  );
  const smallItemsGroup2 = GALLERY_DATA.filter((item) =>
    ["gal-7", "gal-8", "gal-9", "gal-10"].includes(item.id)
  );

  return (
    <section id="galeri" className="scroll-mt-20 py-16 sm:py-20 bg-[var(--bg-main)] border-b border-[var(--border-color)]/60 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-left max-w-2xl mb-10 sm:mb-14 space-y-2"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-neon)]">
            {GALLERY_HEADER.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold uppercase text-white font-heading tracking-tight">
            {GALLERY_HEADER.title}
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            {GALLERY_HEADER.subtitle}
          </p>
        </motion.div>

        {/* Bento Grid Simetris 2 Blok */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-3 sm:space-y-4"
        >
          {/* BLOK 1: Featured Kiri (2x2) + 4 Foto Kecil Kanan */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[200px]">
            {featuredItem1 && (
              <motion.div
                variants={fadeInUp}
                onClick={() => setSelectedItem(featuredItem1)}
                className="col-span-2 row-span-2 group relative rounded-xl overflow-hidden cursor-pointer border border-[var(--border-color)]/60 bg-[var(--bg-card)] hover:border-[var(--accent-neon)]/50 transition-all duration-300"
              >
                <img
                  src={featuredItem1.imageUrl}
                  alt={featuredItem1.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end text-left">
                  <div className="flex items-center gap-1 text-xs text-[var(--accent-neon)] font-medium mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{featuredItem1.location}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                    {featuredItem1.title}
                  </h3>
                </div>
              </motion.div>
            )}

            {smallItemsGroup1.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                onClick={() => setSelectedItem(item)}
                className="col-span-1 row-span-1 group relative rounded-xl overflow-hidden cursor-pointer border border-[var(--border-color)]/60 bg-[var(--bg-card)] hover:border-[var(--accent-neon)]/50 transition-all duration-300"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-end text-left">
                  <div className="flex items-center gap-1 text-[10px] text-[var(--accent-neon)] font-medium">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-xs font-bold text-white font-heading truncate">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* BLOK 2: Flexible Ordering (Mobile: 4 Foto Kecil Dulu, Baru Foto Besar di Paling Bawah) */}
          <div className="flex flex-col md:grid md:grid-cols-4 gap-3 sm:gap-4 md:auto-rows-[200px]">
            {/* Grid 4 Foto Kecil (2x2 di Mobile & Kiri Desktop) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 col-span-2 auto-rows-[160px] sm:auto-rows-[200px]">
              {smallItemsGroup2.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  onClick={() => setSelectedItem(item)}
                  className="col-span-1 row-span-1 group relative rounded-xl overflow-hidden cursor-pointer border border-[var(--border-color)]/60 bg-[var(--bg-card)] hover:border-[var(--accent-neon)]/50 transition-all duration-300"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-end text-left">
                    <div className="flex items-center gap-1 text-[10px] text-[var(--accent-neon)] font-medium">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="text-xs font-bold text-white font-heading truncate">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Featured 2 (Di Mobile Tampil di Bawah, Di Desktop Tampil di Kanan Pas) */}
            {featuredItem2 && (
              <motion.div
                variants={fadeInUp}
                onClick={() => setSelectedItem(featuredItem2)}
                className="col-span-2 row-span-2 h-[320px] md:h-auto group relative rounded-xl overflow-hidden cursor-pointer border border-[var(--border-color)]/60 bg-[var(--bg-card)] hover:border-[var(--accent-neon)]/50 transition-all duration-300"
              >
                <img
                  src={featuredItem2.imageUrl}
                  alt={featuredItem2.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end text-left">
                  <div className="flex items-center gap-1 text-xs text-[var(--accent-neon)] font-medium mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{featuredItem2.location}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                    {featuredItem2.title}
                  </h3>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-2xl cursor-default"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:text-[var(--accent-neon)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] w-full bg-black">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 sm:p-6 text-left space-y-1 bg-[var(--bg-card)]">
                <div className="flex items-center gap-1.5 text-xs text-[var(--accent-neon)] font-semibold">
                  <Mountain className="w-4 h-4" />
                  <span>{selectedItem.location}</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white font-heading">
                  {selectedItem.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};