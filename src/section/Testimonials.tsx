"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS_HEADER, TESTIMONIALS_DATA } from "@/data/testimonialsData";
import { fadeInUp } from "@/lib/animation";

export const Testimonials = () => {
  const duplicatedData = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <section id="testimoni" className="scroll-mt-20 py-16 sm:py-20 bg-[var(--bg-main)] border-b border-[var(--border-color)]/60 relative overflow-hidden block w-full">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 sm:mb-14">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="text-left max-w-2xl space-y-2"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-neon)]">
            {TESTIMONIALS_HEADER.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold uppercase text-white font-heading tracking-tight">
            {TESTIMONIALS_HEADER.title}
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            {TESTIMONIALS_HEADER.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Marquee Running Container */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Overlay Kiri & Kanan */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[var(--bg-main)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[var(--bg-main)] to-transparent z-10 pointer-events-none" />

        {/* Running Track */}
        <div className="animate-marquee space-x-4 sm:space-x-6">
          {duplicatedData.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[280px] sm:w-[350px] flex-shrink-0 bg-[var(--bg-card)] border border-[var(--border-color)]/60 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-[var(--accent-neon)]/50 transition-colors group text-left"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[var(--accent-neon)] text-[var(--accent-neon)]"
                      />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[var(--text-muted)] opacity-40 group-hover:text-[var(--accent-neon)] transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed italic">
                  &quot;{item.content}&quot;
                </p>
              </div>

              {/* User Info */}
              <div className="pt-4 border-t border-[var(--border-color)]/40 mt-4 space-y-0.5">
                <h3 className="text-xs sm:text-sm font-bold text-white font-heading truncate">
                  {item.name}
                </h3>
                <p className="text-[10px] text-[var(--accent-neon)] truncate font-medium">
                  {item.mountain}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};