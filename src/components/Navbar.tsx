"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MountainSnow, Menu, X, PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Paket & Jadwal", href: "/paket" },
    { label: "Galeri", href: "/#galeri" },
    { label: "Ulasan", href: "/#testimoni" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-[var(--border-color)] bg-[var(--bg-main)]/80 backdrop-blur-md py-3 shadow-2xl"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo Brand Two-Tone dari siteConfig (Murni Logo Tanpa Card) */}
          <Link href="/" className="flex items-center gap-2.5 group">
            {siteConfig.logo.image ? (
              <img
                src={siteConfig.logo.image}
                alt={siteConfig.name}
                className="w-9 h-9 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <MountainSnow className="w-7 h-7 text-[var(--accent-neon)] group-hover:scale-105 transition-transform duration-300" />
            )}

            <span className="text-lg font-bold tracking-tight drop-shadow-sm font-heading">
              <span className="text-white">{siteConfig.logo.prefix}</span>
              <span className="text-[var(--accent-neon)]">
                {siteConfig.logo.highlight}
              </span>
              <span className="text-slate-400 text-sm font-normal">
                {siteConfig.logo.domain}
              </span>
            </span>
          </Link>

          {/* Floating Glassmorphism Nav Bar */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-white/90 hover:text-black hover:bg-[var(--accent-neon)] transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button Desktop (Tanpa Efek Glow / Shadow) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                siteConfig.waTemplates.generalConsultation,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="whatsapp"
                size="sm"
                className="rounded-full bg-[var(--accent-neon)] hover:bg-[var(--accent-neon)]/80 text-black font-bold border-none shadow-none transition-all duration-300"
              >
                <PhoneCall className="w-4 h-4" />
                Konsultasi WA
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-[var(--accent-neon)]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl border-b border-white/10 px-4 pt-2 pb-6 flex flex-col gap-4 mt-3">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-semibold text-slate-100 hover:bg-white/10 hover:text-[var(--accent-neon)] transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2 border-t border-white/10">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                siteConfig.waTemplates.generalConsultation,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                variant="whatsapp"
                size="md"
                className="w-full rounded-full bg-[var(--accent-neon)] hover:bg-[var(--accent-neon)]/80 text-black font-bold justify-center shadow-none"
              >
                <PhoneCall className="w-5 h-5" />
                Konsultasi via WA
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
