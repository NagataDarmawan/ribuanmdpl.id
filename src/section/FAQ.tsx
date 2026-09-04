"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_HEADER, FAQ_DATA } from "@/data/faqData";
import { fadeInUp, staggerContainer } from "@/lib/animation";

export const FAQ = () => {
  // State untuk menyimpan ID FAQ yang sedang terbuka (hanya 1 yang bisa terbuka)
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="scroll-mt-20 py-16 sm:py-20 bg-[var(--bg-main)] border-b border-[var(--border-color)]/60 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section (Rata Kiri) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-left max-w-2xl mb-10 sm:mb-14 space-y-2"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-neon)]">
            {FAQ_HEADER.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold uppercase text-white font-heading tracking-tight">
            {FAQ_HEADER.title}
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            {FAQ_HEADER.subtitle}
          </p>
        </motion.div>

        {/* Accordion List - Grid 2 Kolom di Desktop */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start"
        >
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className={`border rounded-xl bg-[var(--bg-card)] overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-[var(--accent-neon)]/60 shadow-lg shadow-[var(--accent-neon)]/5"
                    : "border-[var(--border-color)]/60 hover:border-[var(--border-color)]"
                }`}
              >
                {/* Button Pertanyaan (Rata Kiri) */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-4 sm:p-5 flex items-start justify-between gap-3 text-left transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle
                      className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 transition-colors ${
                        isOpen
                          ? "text-[var(--accent-neon)]"
                          : "text-[var(--text-muted)]"
                      }`}
                    />
                    <span className="text-sm sm:text-base font-bold text-white font-heading leading-snug">
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={`p-1 rounded-full bg-[var(--bg-main)] border border-[var(--border-color)] text-white transition-transform duration-300 flex-shrink-0 mt-0.5 ${
                      isOpen
                        ? "rotate-180 border-[var(--accent-neon)] text-[var(--accent-neon)]"
                        : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Content Jawaban (Rata Kiri & Smooth Collapse) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 pl-11 sm:pl-12 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-color)]/30 mt-1 text-left">
                        <p className="pt-3">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
