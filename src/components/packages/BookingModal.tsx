"use client";

import React, { useState } from "react";
import { X, Send, User, Users, Calendar, Phone, FileText, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

// Helper function pembersih angka
const hanyaAngka = (teks: string) => teks.replace(/\D/g, "");

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageTitle: string;
  defaultDate: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  packageTitle,
  defaultDate,
}) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // Tipe state mendukung angka atau string kosong agar tidak ada '0' tersisa
  const [participantCount, setParticipantCount] = useState<number | string>(1);
  const [notes, setNotes] = useState("");
  
  // State untuk peringatan input WhatsApp
  const [showPhoneError, setShowPhoneError] = useState(false);

  if (!isOpen) return null;

  // Handler input nomor WhatsApp dengan deteksi non-angka
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    if (/\D/.test(inputValue)) {
      setShowPhoneError(true);
      setTimeout(() => setShowPhoneError(false), 3000);
    } else {
      setShowPhoneError(false);
    }

    setPhoneNumber(hanyaAngka(inputValue));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const notesText = notes.trim() ? notes.trim() : "-";
    // Memastikan jumlah peserta minimal 1
    const validParticipantCount = !participantCount || Number(participantCount) < 1 ? 1 : participantCount;

    // Memanggil fungsi template pesan dinamis dari site.ts
    const encodedMessage = siteConfig.waTemplates.bookingTrip(
      packageTitle,
      fullName,
      phoneNumber,
      validParticipantCount,
      defaultDate,
      notesText
    );

    const targetWaNumber = hanyaAngka(siteConfig.contact.whatsappNumber);
    const waUrl = `https://wa.me/${targetWaNumber}?text=${encodedMessage}`;
    
    window.open(waUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      {/* Container Modal */}
      <div className="relative w-full max-w-md bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8 shadow-2xl text-left space-y-5 max-h-[90vh] overflow-y-auto">
        
        {/* Header Modal */}
        <div className="flex items-center justify-between border-b border-[var(--border-color)]/60 pb-4">
          <div>
            <h3 className="text-lg font-bold font-heading text-white uppercase tracking-wide">
              Form Booking Trip
            </h3>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">
              {packageTitle}
            </p>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 rounded-lg bg-[var(--bg-main)] text-[var(--text-secondary)] hover:text-white hover:bg-[var(--border-color)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Input Nama Lengkap */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-200 uppercase tracking-wider block">
              Nama Lengkap
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="Masukkan nama kamu"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[var(--accent-neon)] transition-colors"
              />
            </div>
          </div>

          {/* Input Nomor WhatsApp (Dengan Peringatan) */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-200 uppercase tracking-wider block">
              No. WhatsApp
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                required
                placeholder="Contoh: 081234567890"
                value={phoneNumber}
                onChange={handlePhoneChange}
                className={`w-full bg-[var(--bg-main)] border rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm text-white focus:outline-none transition-colors ${
                  showPhoneError 
                    ? "border-red-500 focus:border-red-500" 
                    : "border-[var(--border-color)] focus:border-[var(--accent-neon)]"
                }`}
              />
            </div>
            
            {showPhoneError && (
              <p className="flex items-center gap-1 text-[11px] text-red-400 mt-1 animate-pulse">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Nomor WhatsApp hanya boleh berisi angka.</span>
              </p>
            )}
          </div>

          {/* Grid: Jumlah Peserta & Jadwal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            {/* Input Jumlah Peserta */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-200 uppercase tracking-wider block">
                Jumlah Peserta
              </label>
              <div className="relative">
                <Users className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="number"
                  min={1}
                  required
                  value={participantCount}
                  onChange={(e) => {
                    const val = e.target.value;
                    setParticipantCount(val === "" ? "" : Number(val));
                  }}
                  onBlur={() => {
                    if (!participantCount || Number(participantCount) < 1) {
                      setParticipantCount(1);
                    }
                  }}
                  className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[var(--accent-neon)] transition-colors"
                />
              </div>
            </div>

            {/* Display Jadwal (Locked / Read-only) */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-200 uppercase tracking-wider block">
                Jadwal Trip
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-[var(--accent-neon)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  readOnly
                  value={defaultDate}
                  className="w-full bg-[var(--bg-main)]/60 border border-[var(--border-color)] rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm text-[var(--accent-neon)] font-semibold cursor-not-allowed focus:outline-none select-none truncate"
                />
              </div>
            </div>

          </div>

          {/* Input Catatan / Request Khusus */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-200 uppercase tracking-wider block">
              Catatan / Request Khusus <span className="text-[var(--text-muted)] font-normal text-[10px]">(Opsional)</span>
            </label>
            <div className="relative">
              <FileText className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-3" />
              <textarea
                rows={2}
                placeholder="Contoh: Sewa alat tambahan, meeting point khusus, dll."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[var(--bg-main)] border border-[var(--border-color)] rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[var(--accent-neon)] transition-colors resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent-neon)] text-black font-bold text-xs uppercase tracking-wide transition-all duration-300 hover:bg-[var(--accent-neon)]/90 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-[var(--accent-neon)]/20 cursor-pointer"
            >
              <Send className="w-4 h-4 fill-black" />
              <span>Kirim Booking via WhatsApp</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};