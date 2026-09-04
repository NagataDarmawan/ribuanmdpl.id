"use client";

import React from "react";
import { motion } from "framer-motion";
import { FEATURES_DATA } from "@/data/featuresData";
import { FeatureItemRow } from "@/components/features/FeatureItemRow";
import { fadeInUp, staggerContainer } from "@/lib/animation";

export const FeaturesSection = () => {
  return (
    <section id="keunggulan" className="py-12 md:py-20 bg-[var(--bg-main)] relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] bg-[var(--accent-neon)]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-left max-w-2xl space-y-2 sm:space-y-3 mb-8 md:mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-neon)]">
            Mengapa Memilih Kami
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-heading tracking-tight">
            PENDAKIAN MEWAH, TANPA MENDERITA
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
            Kami menghadirkan pengalaman mendaki gunung kelas premium. Fokus nikmati pemandangan dan momen puncaknya, biarkan semua urusan teknis dan kenyamanan kami yang tangani.
          </p>
        </motion.div>

        {/* Daftar Poin Keunggulan (Rapat di Mobile) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-1 sm:space-y-3"
        >
          {FEATURES_DATA.map((item, index) => (
            <FeatureItemRow key={item.id || index} item={item} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};