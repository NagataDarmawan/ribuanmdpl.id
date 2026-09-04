"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, CheckCircle2 } from "lucide-react";
import { CTA_DATA } from "@/data/ctaData";
import { fadeInUp } from "@/lib/animation";

export const CTA = () => {
  const whatsappUrl = `https://wa.me/${CTA_DATA.primaryButton.phoneNumber}?text=${encodeURIComponent(
    CTA_DATA.primaryButton.message
  )}`;

  return (
    <section className="py-20 sm:py-28 bg-[var(--bg-main)] border-b border-[var(--border-color)]/60 relative overflow-hidden block w-full">
      {/* Background Glow Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] bg-[var(--accent-neon)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl text-center space-y-6 flex flex-col items-center"
        >
          {/* Title & Subtitle */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-white font-heading tracking-tight leading-[1.1]">
            {CTA_DATA.title}
          </h2>
          
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            {CTA_DATA.subtitle}
          </p>

          {/* Checklist Ringkas */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2">
            {CTA_DATA.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-neon)] flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[var(--accent-neon)] text-black font-bold text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 hover:bg-[var(--accent-neon)]/90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[var(--accent-neon)]/20"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>{CTA_DATA.primaryButton.text}</span>
            </a>

            <a
              href={CTA_DATA.secondaryButton.href}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-white font-bold text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 hover:border-[var(--accent-neon)]/60 hover:text-[var(--accent-neon)]"
            >
              <Calendar className="w-4 h-4" />
              <span>{CTA_DATA.secondaryButton.text}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};