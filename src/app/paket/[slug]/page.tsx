"use client";

import React, { use, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Check, 
  X, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ShieldCheck,
  ArrowLeft 
} from "lucide-react";
import { PACKAGES_DATA } from "@/data/packagesData";
import { fadeInUp } from "@/lib/animation";
import { BookingModal} from "@/components/packages/BookingModal" // Import modal

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function PackageDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const pkg = PACKAGES_DATA.find((item) => item.id === slug);

  if (!pkg) {
    notFound();
  }

  // State untuk mengontrol pop-up modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(pkg.price);

  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-white pt-24 pb-20 overflow-x-hidden">
      
      {/* Header & Title */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div 
          variants={fadeInUp} 
          initial="hidden" 
          animate="visible" 
          className="space-y-4 text-left"
        >
          <div>
            <Link 
              href="/paket" 
              className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--accent-neon)] transition-colors bg-[var(--bg-card)] border border-[var(--border-color)] px-3.5 py-2 rounded-xl"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Paket & Jadwal</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--accent-neon)] tracking-wider uppercase pt-2">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>{pkg.location} • {pkg.elevation}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight uppercase">
            {pkg.title}
          </h1>
        </motion.div>

        {/* 1 Foto Banner Utama */}
        <div className="w-full h-[280px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden border border-[var(--border-color)] mt-6 bg-[var(--bg-card)]">
          <img 
            src={pkg.image} 
            alt={pkg.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
          />
        </div>
      </section>

      {/* Main Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Container Konten Utama */}
          <div className="lg:col-span-2 bg-[var(--bg-card)] border border-[var(--border-color)]/60 rounded-2xl p-6 sm:p-10 space-y-8 text-left">
            <div className="space-y-3">
              <h2 className="text-lg font-bold font-heading text-white uppercase tracking-wide border-b border-[var(--border-color)]/60 pb-3">
                Deskripsi Pendakian
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed pt-1">
                {pkg.description}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-bold font-heading text-white uppercase tracking-wide border-b border-[var(--border-color)]/60 pb-3">
                Fasilitas Paket
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--accent-neon)]">
                    Sudah Termasuk
                  </h3>
                  <ul className="space-y-2.5">
                    {(pkg.inclusions || []).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <Check className="w-4 h-4 text-[var(--accent-neon)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400">
                    Tidak Termasuk
                  </h3>
                  <ul className="space-y-2.5">
                    {(pkg.exclusions || []).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                        <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h2 className="text-lg font-bold font-heading text-white uppercase tracking-wide border-b border-[var(--border-color)]/60 pb-3">
                Perlengkapan Wajib Pribadi
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {(pkg.gearList || []).map((gear, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-[var(--accent-neon)] shrink-0" />
                    <span>{gear}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar Booking Card */}
          <div className="lg:col-span-1 lg:sticky lg:top-28">
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8 space-y-6 text-left shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--accent-neon)]" />

              <div className="space-y-1">
                <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase">Harga Per Orang</span>
                <div className="text-3xl font-bold font-heading text-[var(--accent-neon)]">
                  {formattedPrice}
                </div>
                <span className="text-[10px] text-[var(--text-muted)] block">*All-in include SIMAKSI & Logistik</span>
              </div>

              <div className="py-4 border-y border-[var(--border-color)]/60">
                <div className="space-y-1">
                  <span className="text-[10px] text-[var(--text-muted)] uppercase block">Durasi Trip</span>
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Clock className="w-4 h-4 text-[var(--accent-neon)]" />
                    <span>{pkg.duration} ({pkg.startDate})</span>
                  </div>
                </div>
              </div>

              {/* Tombol Membuka Modal Form Pop-up */}
              <div className="space-y-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[var(--accent-neon)] text-black font-bold text-xs uppercase tracking-wide transition-all duration-300 hover:bg-[var(--accent-neon)]/90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[var(--accent-neon)]/20 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Booking via WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-[var(--text-muted)] leading-relaxed">
                  Konsultasikan ketersediaan slot & tanggal keberangkatan langsung dengan admin.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Komponen Pop-up Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageTitle={pkg.title}
        defaultDate={pkg.startDate}
      />

    </main>
  );
}