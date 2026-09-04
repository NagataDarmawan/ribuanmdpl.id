"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { PackageItem } from "@/data/packagesData";
import { Button } from "@/components/ui/Button";
import { staggerItem } from "@/lib/animation";

interface PackageCardProps {
  item: PackageItem;
}

export const PackageCard: React.FC<PackageCardProps> = ({ item }) => {
  // Format Rupiah
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(item.price);

  return (
    <motion.div
      variants={staggerItem}
      className="group relative rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] overflow-hidden transition-all duration-300 hover:border-[var(--accent-neon)] hover:shadow-[0_0_25px_rgba(251,191,36,0.15)] flex flex-col justify-between"
    >
      <div>
        {/* Gambar Destinasi & Badge Status */}
        <div className="relative h-52 w-full overflow-hidden bg-[var(--bg-main)]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-black/30" />

          {/* Badge Sisa Kuota */}
          <div className="absolute top-3 right-3 z-10 text-xs text-slate-200 bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10 font-medium">
            <span>{item.quotaText}</span>
          </div>

          {/* Lokasi & Ketinggian Overlay */}
          <div className="absolute bottom-3 left-3 z-10 text-xs text-slate-200 bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10">
            <span>{item.mountain} • {item.elevation}</span>
          </div>
        </div>

        {/* Info Konten Card */}
        <div className="p-5 space-y-4">
          <Link href={`/paket/${item.id}`}>
            <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent-neon)] transition-colors font-heading line-clamp-1 cursor-pointer">
              {item.title}
            </h3>
          </Link>

          {/* Metadata Grid */}
          <div className="space-y-2.5 text-xs text-[var(--text-secondary)] pt-1 border-t border-[var(--border-color)]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[var(--accent-neon)] shrink-0" />
              <span>Durasi: {item.duration}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[var(--accent-neon)] shrink-0" />
              <span>Jadwal: {item.startDate}</span>
            </div>

            {/* Harga Tepat Di Bawah Jadwal */}
            <div className="pt-2 border-t border-[var(--border-color)]/50">
              <span className="text-xl font-bold text-[var(--accent-neon)]">
                {formattedPrice}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tombol CTA Mengarah ke Halaman Detail Booking */}
      <div className="p-5 pt-0">
        <Link href={`/paket/${item.id}`} className="w-full block">
          <Button
            variant="primary"
            size="sm"
            className="w-full justify-center text-xs py-2.5"
          >
            Detail & Booking
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};