"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mountain, Search, Calendar, CircleDollarSign } from "lucide-react";
import { PACKAGES_DATA, PACKAGES_HERO_DATA } from "@/data/packagesData";
import { PackageCard } from "@/components/packages/PackageCard";
import { Navbar } from "@/components/Navbar";
import { fadeInUp, staggerContainer } from "@/lib/animation";

export default function PaketPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("ALL");
  const [priceSort, setPriceSort] = useState("ALL");

  // Filter pencarian, tanggal, dan pengurutan harga
  const query = searchQuery.trim().toLowerCase();

  const filteredPackages = PACKAGES_DATA.filter((pkg) => {
    const matchesSearch =
      !query ||
      pkg.title.toLowerCase().includes(query) ||
      pkg.mountain.toLowerCase().includes(query);

    const matchesMonth =
      selectedMonth === "ALL" ||
      pkg.startDate.toLowerCase().includes(selectedMonth.toLowerCase());

    return matchesSearch && matchesMonth;
  }).sort((a, b) => {
    if (priceSort === "LOW_TO_HIGH") return a.price - b.price;
    if (priceSort === "HIGH_TO_LOW") return b.price - a.price;
    return 0;
  });

  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-white">
      <Navbar />

      {/* COMPACT HERO SECTION (LEBIH PENDEK & TANPA BADGE) */}
      <section className="relative overflow-hidden pt-24 pb-6 sm:pt-28 sm:pb-8 border-b border-[var(--border-color)]/60">
        {/* Background Image Murni Tanpa Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${PACKAGES_HERO_DATA.backgroundImage}')` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="text-left max-w-3xl space-y-2"
          >
            <h1 className="text-2xl sm:text-4xl font-bold uppercase text-white font-heading tracking-tight leading-tight drop-shadow-md">
              {PACKAGES_HERO_DATA.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-100 leading-relaxed max-w-2xl drop-shadow-sm">
              {PACKAGES_HERO_DATA.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEARCH BAR & KATALOG PAKET */}
      <section className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* INPUT SEARCH & FILTER (RESPONSIVE SEJAJAR DI MOBILE) */}
        <div className="mb-6 flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Cari gunung atau paket..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-neon)] transition-colors"
            />
          </div>

          {/* Container Filter Tanggal & Harga (Sejajar Berdampingan di Mobile) */}
          <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
            {/* Filter Tanggal / Bulan */}
            <div className="relative w-full md:w-44">
              <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] pointer-events-none" />
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg pl-10 pr-7 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[var(--accent-neon)] transition-colors appearance-none cursor-pointer truncate"
              >
                <option value="ALL" className="bg-[var(--bg-card)] text-white">Semua Bulan</option>
                <option value="Okt" className="bg-[var(--bg-card)] text-white">Oktober 2026</option>
                <option value="Nov" className="bg-[var(--bg-card)] text-white">November 2026</option>
              </select>
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[10px] text-[var(--text-muted)]">▼</div>
            </div>

            {/* Filter / Urutan Harga (Ikon 1 Koin: CircleDollarSign) */}
            <div className="relative w-full md:w-44">
              <CircleDollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] pointer-events-none" />
              <select
                value={priceSort}
                onChange={(e) => setPriceSort(e.target.value)}
                className="w-full bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg pl-10 pr-7 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-[var(--accent-neon)] transition-colors appearance-none cursor-pointer truncate"
              >
                <option value="ALL" className="bg-[var(--bg-card)] text-white">Urutkan Harga</option>
                <option value="LOW_TO_HIGH" className="bg-[var(--bg-card)] text-white">Termurah</option>
                <option value="HIGH_TO_LOW" className="bg-[var(--bg-card)] text-white">Termahal</option>
              </select>
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[10px] text-[var(--text-muted)]">▼</div>
            </div>
          </div>
        </div>

        {/* Grid Katalog Paket */}
        {filteredPackages.length > 0 ? (
          <motion.div
            key={`${searchQuery}-${selectedMonth}-${priceSort}`}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} item={pkg} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16 space-y-3 bg-[var(--bg-card)]/40 border border-[var(--border-color)]/40 rounded-xl">
            <Mountain className="w-10 h-10 text-[var(--text-muted)] mx-auto opacity-40" />
            <h3 className="text-lg font-semibold text-white">Paket Tidak Ditemukan</h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-sm mx-auto">
              Coba kata kunci pencarian atau ubah filter tanggal/harga di atas.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}