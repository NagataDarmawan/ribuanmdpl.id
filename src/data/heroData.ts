export interface HeroData {
  typewriterTitle: string; // Teks animasi typewriter
  highlightTitle: string;  // Teks warna aksen emas
  subtitle: string;
  backgroundImage: string; // URL / Path foto background
  trustBadges: string[];
}

export const HERO_DATA: HeroData = {
  typewriterTitle: "JELAJAHI PUNCAK GUNUNG",
  highlightTitle: "TANPA RIBET & AMAN",
  subtitle:
    "Layanan open trip & private trip pendakian gunung lengkap dengan guide lokal berpengalaman, tenda, logistik, dan pendaftaran SIMAKSI resmi.",
  backgroundImage:
    "/merbabu2.jpg",
  trustBadges: ["Izin Resmi & SIMAKSI", "Ramah Pemula", "Guide Berpengalaman"],
};