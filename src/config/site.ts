// Helper function agar mudah dipahami: Menghapus semua karakter selain angka (0-9)
const hanyaAngka = (teks: string) => teks.replace(/\D/g, "");

export const siteConfig = {
  name: "Ribuan MDPL",
  description: "Penyedia jasa open trip & private trip pendakian gunung berpengalaman, aman, dan terjangkau.",
  logo: {
    prefix: "Ribuan",
    highlight: "MDPL",
    domain: ".id",
    image: "/logokuning.png",
  },
  contact: {
    whatsappNumber: "6281234567890", // Murni hanya angka
    instagram: "@ribuanmdpl.id",
    instagramUrl: "https://instagram.com/ribuanmdpl.id",
    tiktokUrl: "https://tiktok.com/@ribuanmdpl.id",
    facebookUrl: "https://facebook.com/ribuanmdpl.id",
    email: "info@ribuanmdpl.id",
    address: "BC Gumayun, Kec. Dukuhwaru, Kab. Tegal, Jawa Tengah, Indonesia",
  },
  waTemplates: {
    generalConsultation: "Halo Admin Ribuan MDPL, saya mau tanya-tanya informasi seputar trip pendakian gunung.",
    bookingTrip: (
      packageTitle: string,
      fullName: string,
      phoneNumber: string,
      participantCount: number | string,
      defaultDate: string,
      notesText?: string
    ) => {
      const nomorBersih = hanyaAngka(phoneNumber);

      let text = `Halo Admin ${siteConfig.name}, saya mau konsultasi & booking trip:\n\n`;
      text += `*Paket:* ${packageTitle}\n`;
      text += `*Nama Pemesan:* ${fullName}\n`;
      text += `*No. WhatsApp:* ${nomorBersih}\n`;
      text += `*Jumlah Peserta:* ${participantCount} Orang\n`;
      text += `*Jadwal Keberangkatan:* ${defaultDate}\n`;
      text += `*Catatan / Request:* ${notesText || "-"}\n\n`;
      text += `Apakah slot untuk jadwal tersebut masih tersedia?`;

      return encodeURIComponent(text);
    },
  },
};

export type SiteConfig = typeof siteConfig;