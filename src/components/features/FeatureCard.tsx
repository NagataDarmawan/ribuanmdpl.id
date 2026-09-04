"use client";

import React from "react";
import { motion } from "framer-motion";
import { FeatureItem } from "@/data/featuresData";
import { staggerItem } from "@/lib/animation";

interface FeatureCardProps {
  item: FeatureItem;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ item }) => {
  const IconComponent = item.icon;

  return (
    <motion.div
      variants={staggerItem}
      className="group relative rounded-xl bg-[var(--bg-card)]/80 border border-[var(--border-color)] p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:border-[var(--accent-neon)] hover:shadow-[0_0_30px_rgba(251,191,36,0.12)] flex flex-col justify-between overflow-hidden"
    >
      {/* Subtle Corner Ambient Glow on Hover */}
      <div className="absolute -top-12 -right-12 w-28 h-28 bg-[var(--accent-neon)]/10 rounded-full blur-2xl group-hover:bg-[var(--accent-neon)]/20 transition-all duration-500 pointer-events-none" />

      <div className="space-y-4 relative z-10">
        {/* Header Icon & Highlight Badge */}
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-lg bg-[var(--bg-main)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-neon)] group-hover:scale-110 group-hover:border-[var(--accent-neon)] transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[10px] uppercase font-semibold tracking-wider text-[var(--accent-neon)] bg-[var(--accent-neon)]/10 border border-[var(--accent-neon)]/20 px-2.5 py-1 rounded-md">
            {item.highlightText}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div>
          <span className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider block mb-1">
            {item.subtitle}
          </span>
          <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent-neon)] transition-colors font-heading">
            {item.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed pt-1">
          {item.description}
        </p>
      </div>

      {/* Decorative Bottom Border Accent on Hover */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-neon)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-6" />
    </motion.div>
  );
};