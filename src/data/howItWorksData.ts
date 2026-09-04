import { Compass, MessageSquare, CreditCard, Tent } from "lucide-react";

export interface HowItWorksStep {
  number: string;
  icon: typeof Compass;
  title: string;
  description: string;
}

export const HOW_IT_WORKS_HEADER = {
  badge: "Alur Pendaftaran",
  title: "Cara Mudah Booking Trip",
  subtitle: "4 langkah praktis untuk mengamankan slot pendakianmu tanpa ribet.",
};

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: "01",
    icon: Compass,
    title: "Pilih Paket & Jadwal",
    description: "Cari destinasi gunung impian dan tanggal pendakian yang sesuai dengan rencana liburanmu.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Konsultasi via WA",
    description: "Klik tombol booking untuk terhubung langsung ke admin via WhatsApp untuk ketersediaan kuota.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "DP & Konfirmasi",
    description: "Lakukan pembayaran uang muka (DP) aman untuk mengamankan slot dan logistik pendakianmu.",
  },
  {
    number: "04",
    icon: Tent,
    title: "Siap Mendaki!",
    description: "Datang ke meeting point tepat waktu. Seluruh perlengkapan tim dan guide siap menemani petualanganmu.",
  },
];