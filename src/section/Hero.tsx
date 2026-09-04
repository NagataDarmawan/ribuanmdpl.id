"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, MessageCircle, ShieldCheck } from "lucide-react";
import { HERO_DATA } from "@/data/heroData";
import { useWhatsAppLink } from "@/hooks/useWhatsappLink";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animation";

export const HeroSection = () => {
  const { getConsultationLink } = useWhatsAppLink();
  
  // Ambil teks typewriter langsung dari HERO_DATA
  const typewriterText = HERO_DATA.typewriterTitle || "JELAJAHI PUNCAK GUNUNG";

  // Efek typewriter berulang (loop) dari data
  const { displayText } = useTypewriter(typewriterText, 70, 40, 3000, 500);

  return (
    <section className="relative overflow-hidden w-full min-h-screen flex items-end pt-28 pb-16 sm:pb-20 bg-[var(--bg-main)]">
      {/* Background Image dengan Dark Gradient Overlay yang Lebih Terang */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{ backgroundImage: `url('${HERO_DATA.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d0c]/70 via-[#0a0d0c]/50 to-black/20" />
      </div>

      {/* Decorative Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent-neon)]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-6 sm:pb-8 flex flex-col justify-end min-h-[calc(100vh-9rem)] sm:min-h-0">
        {/* Container Utama */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-left max-w-3xl space-y-4 sm:space-y-6 mt-auto"
        >
          {/* Heading Utama */}
          <motion.h1
            variants={fadeInUp}
            custom={0.1}
            className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-[1.1] font-heading drop-shadow-md"
          >
            {/* Baris Pertama dengan Typewriter dari HERO_DATA */}
            <span className="flex items-center min-h-[1.2em]">
              <span>{displayText}</span>
              <span className="inline-block w-[3px] h-7 sm:h-10 md:h-12 bg-white ml-2 animate-pulse shrink-0" />
            </span>

            {/* Baris Kedua */}
            <span className="block text-[var(--accent-neon)]">
              {HERO_DATA.highlightTitle || "TANPA RIBET & AMAN"}
            </span>
          </motion.h1>

          {/* Subtitle Deskripsi */}
          <motion.p
            variants={fadeInUp}
            custom={0.2}
            className="text-sm sm:text-lg text-slate-300 max-w-2xl leading-relaxed drop-shadow-sm"
          >
            {HERO_DATA.subtitle}
          </motion.p>

          {/* Tombol CTA Action - Berdampingan di Mobile */}
          <motion.div
            variants={fadeInUp}
            custom={0.3}
            className="flex flex-row items-center gap-2.5 sm:gap-4 pt-1 sm:pt-2 w-full max-w-md sm:max-w-none"
          >
            <Link href="/#paket" className="flex-1 sm:flex-none">
              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto px-3 sm:px-6 py-3 text-[11px] sm:text-sm justify-center whitespace-nowrap"
              >
                <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>Lihat Jadwal & Paket</span>
              </Button>
            </Link>

            <a
              href={getConsultationLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none"
            >
              <Button
                variant="outline"
                size="md"
                className="w-full sm:w-auto px-3 sm:px-6 py-3 text-[11px] sm:text-sm border-[var(--border-color)] bg-[var(--bg-card)]/80 text-slate-200 hover:bg-[var(--bg-card)] hover:text-[var(--accent-neon)] hover:border-[var(--accent-neon)] backdrop-blur-md justify-center whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>Konsultasi WA</span>
              </Button>
            </a>
          </motion.div>

          {/* Trust Guarantees Badges */}
          <motion.div
            variants={fadeInUp}
            custom={0.4}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-6 pt-3 sm:pt-4 text-[11px] sm:text-xs text-slate-300 drop-shadow-sm"
          >
            {HERO_DATA.trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--accent-neon)] shrink-0" />
                <span>{badge}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Fading Transition ke Section Selanjutnya */}
      <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-36 bg-gradient-to-t from-[var(--bg-main)] via-[var(--bg-main)]/30 to-transparent pointer-events-none z-20" />
    </section>
  );
};