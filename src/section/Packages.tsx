"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PACKAGES_DATA } from "@/data/packagesData";
import { PackageCard } from "@/components/packages/PackageCard";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animation";

export const PackagesSection = () => {
  const featuredPackages = PACKAGES_DATA.slice(0, 4);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigasi Tombol Mobile
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredPackages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredPackages.length) % featuredPackages.length);
  };

  return (
    <section id="paket" className="py-20 bg-[var(--bg-main)] relative overflow-hidden">
      {/* Gradient Fading Top Transition dari Hero */}
      <div className="absolute top-0 left-0 right-0 h-20 sm:h-28 bg-gradient-to-b from-[var(--bg-main)] to-transparent pointer-events-none z-10" />

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--accent-neon)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Desktop Flexbox (Teks Kiri & Tombol Kanan) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14"
        >
          <div className="text-left max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-neon)]">
              Jadwal Pendakian Terdekat
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight">
              PILIH DESTINASI PUNCAK IMPIANMU
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Nikmati pengalaman mendaki tanpa ribet. Semua kebutuhan logistik, tenda, simaksi, hingga konsumsi mewah disiapkan oleh tim profesional.
            </p>
          </div>

          {/* Tombol Kanan Atas (Desktop Only) */}
          <div className="hidden md:block flex-shrink-0">
            <Link href="/paket">
              <Button
                variant="outline"
                size="md"
                className="group flex items-center gap-2 border-[var(--border-color)] bg-[var(--bg-card)]/80 text-slate-200 hover:bg-[var(--bg-card)] hover:text-[var(--accent-neon)] hover:border-[var(--accent-neon)] backdrop-blur-md px-6 py-3"
              >
                <span>Lihat Semua Jadwal & Paket</span>
                <ArrowRight className="w-4 h-4 text-[var(--accent-neon)] transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* ---------------- TAMPILAN MOBILE (SLIDER DENGAN UKURAN KARTU FULL) ---------------- */}
        <div className="block md:hidden relative w-full">
          <div className="w-full overflow-hidden py-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <PackageCard item={featuredPackages[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Kontrol Tombol Kiri & Kanan (Mobile) */}
          <div className="flex items-center justify-between pt-6">
            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {featuredPackages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-6 bg-[var(--accent-neon)]"
                      : "w-2 bg-[var(--border-color)]"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Tombol Panah Navigasi */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] flex items-center justify-center text-white hover:border-[var(--accent-neon)] hover:text-[var(--accent-neon)] transition-colors active:scale-95"
                aria-label="Previous package"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] flex items-center justify-center text-white hover:border-[var(--accent-neon)] hover:text-[var(--accent-neon)] transition-colors active:scale-95"
                aria-label="Next package"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ---------------- TAMPILAN DESKTOP (GRID 4 KOLOM REGULER) ---------------- */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredPackages.map((pkg) => (
            <PackageCard key={pkg.id} item={pkg} />
          ))}
        </motion.div>

        {/* Tombol Lihat Semua Paket (Mobile Only) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex md:hidden justify-center pt-8"
        >
          <Link href="/paket" className="w-full">
            <Button
              variant="outline"
              size="md"
              className="w-full group flex items-center justify-center gap-2 border-[var(--border-color)] bg-[var(--bg-card)]/80 text-slate-200 hover:bg-[var(--bg-card)] hover:text-[var(--accent-neon)] hover:border-[var(--accent-neon)] backdrop-blur-md px-6 py-3"
            >
              <span>Lihat Semua Jadwal & Paket</span>
              <ArrowRight className="w-4 h-4 text-[var(--accent-neon)] transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};