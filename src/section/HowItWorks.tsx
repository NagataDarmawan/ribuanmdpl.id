"use client";

import React from "react";
import { motion } from "framer-motion";
import { HOW_IT_WORKS_HEADER, HOW_IT_WORKS_STEPS } from "@/data/howItWorksData";
import { fadeInUp, staggerContainer } from "@/lib/animation";

export const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-20 bg-[var(--bg-main)] border-b border-[var(--border-color)]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section (Rata Kiri) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="text-left max-w-2xl mb-10 sm:mb-16 space-y-2"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-neon)]">
            {HOW_IT_WORKS_HEADER.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold uppercase text-white font-heading tracking-tight">
            {HOW_IT_WORKS_HEADER.title}
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            {HOW_IT_WORKS_HEADER.subtitle}
          </p>
        </motion.div>

        {/* Steps List */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6"
        >
          {/* Garis Penghubung Horizontal (Desktop Only) */}
          <div className="hidden md:block absolute top-6 left-[5%] right-[15%] h-[1px] bg-gradient-to-r from-[var(--border-color)] via-[var(--border-color)] to-transparent -z-0" />

          {/* Garis Penghubung Vertikal (Mobile Only) */}
          <div className="md:hidden absolute top-6 bottom-6 left-6 w-[1px] bg-gradient-to-b from-[var(--border-color)] via-[var(--border-color)] to-transparent -z-0" />

          {HOW_IT_WORKS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="relative z-10 flex flex-row md:flex-col items-start gap-4 md:gap-0 text-left group"
              >
                {/* Icon Circle & Step Number */}
                <div className="relative flex-shrink-0 md:mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--bg-main)] border border-[var(--border-color)] group-hover:border-[var(--accent-neon)] flex items-center justify-center text-white group-hover:text-[var(--accent-neon)] transition-all duration-300 shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                  {/* Badge Nomor Kecil */}
                  <span className="absolute -top-1 -right-2 bg-[var(--bg-card)] border border-[var(--border-color)] text-[10px] font-bold text-[var(--accent-neon)] px-1.5 py-0.5 rounded-full">
                    {step.number}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-1 pt-0.5">
                  <h3 className="text-base font-bold text-white group-hover:text-[var(--accent-neon)] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};