export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_HEADER = {
  badge: "Pertanyaan Umum",
  title: "Sering Ditanyakan",
  subtitle: "Semua hal penting yang perlu kamu ketahui sebelum memulai pendakian.",
};

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apakah pemula yang belum pernah naik gunung bisa ikut?",
    answer: "Sangat bisa! Kami menyediakan pilihan paket khusus pemula (seperti Gunung Prau atau Gede via Cibodas) dengan pendampingan guide profesional dan ritme pendakian yang disesuaikan.",
  },
  {
    id: "faq-2",
    question: "Apa saja perlengkapan yang wajib saya bawa sendiri?",
    answer: "Kamu hanya perlu membawa perlengkapan pribadi seperti pakaian ganti, jaket tebal/windbreaker, sepatu/sandal gunung, obat pribadi, dan daya tahan tubuh. Perlengkapan tim seperti tenda, alat masak, dan logistik sudah kami sediakan.",
  },
  {
    id: "faq-3",
    question: "Bagaimana sistem pembayaran dan pelunasannya?",
    answer: "Pembayaran dilakukan dengan sistem DP (Down Payment) sebesar 50% untuk mengamankan slot trip. Pelunasan dapat dilakukan maksimal H-3 sebelum keberangkatan.",
  },
  {
    id: "faq-4",
    question: "Bagaimana jika cuaca buruk atau trip dibatalkan?",
    answer: "Keselamatan peserta adalah prioritas utama. Jika terjadi penutupan jalur resmi dari pihak TN/Perhutani karena cuaca ekstrem, tanggal trip dapat dijadwalkan ulang (reschedule) atau dana dikembalikan sesuai ketentuan kebijakan pembatalan.",
  },
  {
    id: "faq-5",
    question: "Apakah konsumsi selama di gunung sudah ditanggung?",
    answer: "Ya, seluruh makanan dan minuman hangat selama di camp sudah termasuk dalam paket open trip/private trip kami dan dimasak langsung oleh tim porter/chef gunung kami.",
  },
  {
    id: "faq-6",
    question: "Apakah ada batasan usia untuk ikut trip?",
    answer: "Kami merekomendasikan peserta berusia minimal 12 tahun untuk open trip. Untuk private trip, usia dapat disesuaikan dengan kondisi fisik dan pengalaman pendakian.",
  }
];