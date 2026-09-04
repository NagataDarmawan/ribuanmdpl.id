"use client";

import React from "react";
import Link from "next/link";
import { Mountain, MapPin, Mail, Phone, Code2 } from "lucide-react";
import { siteConfig } from "@/config/site";

// Helper function pembersih angka
const hanyaAngka = (teks: string) => teks.replace(/\D/g, "");

// --- Komponen Custom SVG Icons (Tanpa Library Luar) ---
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.982 9.982 0 004.779 1.221h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.038-5.176-2.925-7.062A9.927 9.927 0 0012.012 2zm0 18.313h-.003a8.31 8.31 0 01-4.237-1.164l-.304-.18-3.149.745.758-3.07-.198-.315a8.293 8.293 0 01-1.272-4.341c.001-4.58 3.73-8.307 8.312-8.307 2.218 0 4.303.865 5.87 2.433a8.272 8.272 0 012.43 5.871c-.001 4.58-3.73 8.308-8.207 8.308zm4.556-6.222c-.25-.125-1.478-.728-1.707-.811-.229-.083-.396-.125-.563.125-.166.249-.646.811-.791.977-.146.166-.292.187-.542.062s-1.057-.389-2.013-1.241c-.744-.663-1.247-1.482-1.393-1.732-.146-.249-.015-.384.11-.508.112-.112.25-.291.375-.437.125-.145.166-.249.25-.415.083-.166.042-.312-.021-.437-.062-.125-.563-1.352-.771-1.851-.203-.487-.41-.421-.563-.429-.145-.008-.312-.008-.479-.008s-.437.062-.666.312c-.229.249-.875.853-.875 2.08 0 1.228.896 2.413 1.021 2.579.125.166 1.763 2.692 4.27 3.774.597.257 1.064.41 1.428.525.6.19 1.146.163 1.577.099.481-.072 1.478-.603 1.687-1.185.208-.582.208-1.081.145-1.185-.062-.104-.229-.166-.479-.291z" />
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TikTokIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.31 1.56-1.3 2.56.01.76.32 1.5.85 2.05.62.65 1.52.98 2.42.92.83-.02 1.63-.42 2.14-1.08.53-.7.76-1.58.75-2.45V.02z" />
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const Footer = () => {
  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Paket & Jadwal", href: "/paket" },
    { label: "Galeri", href: "/#galeri" },
    { label: "Ulasan", href: "/#testimoni" },
    { label: "FAQ", href: "/#faq" },
  ];

  const nomorWaBersih = hanyaAngka(siteConfig.contact.whatsappNumber);

  return (
    <footer className="bg-[var(--bg-main)] border-t border-[var(--border-color)] text-[var(--text-secondary)] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[var(--border-color)]">
          {/* Column 1: Brand Info (Murni Logo Tanpa Card) */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 group">
              {siteConfig.logo.image ? (
                <img
                  src={siteConfig.logo.image}
                  alt={siteConfig.name}
                  className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <Mountain className="w-8 h-8 text-[var(--accent-neon)] group-hover:scale-105 transition-transform duration-300" />
              )}

              <span className="text-xl font-bold tracking-tight drop-shadow-sm font-heading">
                <span className="text-white">{siteConfig.logo.prefix}</span>
                <span className="text-[var(--accent-neon)]">
                  {siteConfig.logo.highlight}
                </span>
                <span className="text-slate-400 text-sm font-normal">
                  {siteConfig.logo.domain}
                </span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              {siteConfig.description}
            </p>
          </div>

          {/* Column 2: Navigasi Cepat */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base font-heading tracking-wider uppercase">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[var(--accent-neon)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Kontak & Alamat */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base font-heading tracking-wider uppercase">
              Kontak Kami
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--accent-neon)] shrink-0 mt-1" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--accent-neon)] shrink-0" />
                <span>{nomorWaBersih}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--accent-neon)] shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media Icons Custom dari siteConfig */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base font-heading tracking-wider uppercase">
              Ikuti Kami
            </h4>
            <p className="text-sm text-[var(--text-muted)]">
              Dapatkan pembaruan dokumentasi pendakian dan jadwal trip terbaru
              di media sosial kami.
            </p>
            <div className="flex items-center gap-3">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${nomorWaBersih}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-slate-300 hover:border-[var(--accent-neon)] hover:text-[var(--accent-neon)] transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-slate-300 hover:border-[var(--accent-neon)] hover:text-[var(--accent-neon)] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              {/* TikTok */}
              <a
                href={siteConfig.contact.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-slate-300 hover:border-[var(--accent-neon)] hover:text-[var(--accent-neon)] transition-all"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>

              {/* Facebook */}
              <a
                href={siteConfig.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-slate-300 hover:border-[var(--accent-neon)] hover:text-[var(--accent-neon)] transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Credit Developer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[var(--text-muted)]">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]">
            <Code2 className="w-3.5 h-3.5 text-[var(--accent-neon)] shrink-0" />
            <span className="text-slate-300">
              Dibuat Oleh{" "}
              <strong className="text-[var(--accent-neon)] font-semibold tracking-wide">
                Nagata Darmawan
              </strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
