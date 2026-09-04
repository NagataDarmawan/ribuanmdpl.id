"use client";

import React from "react";
import { motion } from "framer-motion";
import { FeatureItem } from "@/data/featuresData";
import { staggerItem } from "@/lib/animation";

interface FeatureItemRowProps {
  item: FeatureItem;
  index: number;
}

export const FeatureItemRow: React.FC<FeatureItemRowProps> = ({ item, index }) => {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      variants={staggerItem}
      className="group relative border-b border-[var(--border-color)]/60 py-4 md:pb-10 md:pt-6 transition-all duration-300 hover:border-[var(--accent-neon)]/50"
    >
      {/* Mobile: Flex Row (Disamping Angka) | Desktop: Grid 12 Kolom */}
      <div className="flex flex-row md:grid md:grid-cols-12 gap-3 sm:gap-4 md:gap-8 items-start">
        
        {/* Angka Indikator Besar (01, 02, dst) */}
        <div className="flex-shrink-0 md:col-span-2">
          <span className="text-2xl sm:text-3xl md:text-5xl font-black font-heading text-slate-700 group-hover:text-[var(--accent-neon)] transition-colors duration-500 tracking-tight leading-none block">
            {formattedIndex}
          </span>
        </div>

        {/* Container Konten (Judul & Deskripsi di Samping Angka pada Mobile) */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-10 md:col-span-10 gap-1.5 sm:gap-2 md:gap-8 items-start">
          {/* Judul & Subtitle */}
          <div className="md:col-span-5 space-y-0.5">
            {item.subtitle && (
              <span className="text-[10px] sm:text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider block">
                {item.subtitle}
              </span>
            )}
            <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white group-hover:text-[var(--accent-neon)] transition-colors font-heading leading-snug">
              {item.title}
            </h3>
          </div>

          {/* Deskripsi Penjelasan */}
          <div className="md:col-span-5">
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed pt-0.5 md:pt-0">
              {item.description}
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
};