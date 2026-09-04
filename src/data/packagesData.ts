export interface PackageItem {
  // ==========================================
  // DATA IDENTITAS & KARTU (CARD & DETAIL)
  // ==========================================
  id: string;             // Digunakan sebagai slug URL dinamis
  title: string;          // Judul utama paket trip
  mountain: string;       // Nama gunung / destinasi singkat
  location: string;       // Lokasi wilayah (dipakai di detail & card)
  elevation: string;      // Ketinggian mdpl (dipakai di detail & card)
  duration: string;       // Durasi trip (contoh: "4D3N")
  startDate: string;      // Jadwal tanggal keberangkatan
  price: number;          // Harga paket (diformat ke Rupiah)
  image: string;          // Foto utama (tampil di Card & Banner Detail)
  quotaText: string;      // Badge sisa kuota (HANYA tampil di Card/Beranda)
  whatsappText: string;   // Pesan teks custom untuk tombol WA di Card

  // ==========================================
  // DATA KHUSUS HALAMAN DETAIL PAKET
  // ==========================================
  description: string;    // Teks paragraf deskripsi lengkap pendakian
  inclusions: string[];   // Daftar fasilitas "Sudah Termasuk"
  exclusions: string[];   // Daftar fasilitas "Tidak Termasuk"
  gearList: string[];     // Daftar perlengkapan wajib pribadi
}

export interface PackagesHeroData {
  badge: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export const PACKAGES_HERO_DATA: PackagesHeroData = {
  badge: "Katalog Pendakian",
  title: "EKSPLORASI SEMUA JADWAL & PAKET TRIP",
  subtitle:
    "Temukan berbagai destinasi atap Nusantara dengan jadwal terupdate. Nikmati pengalaman mendaki kelas premium dengan layanan all-inclusive & terlindungi.",
  backgroundImage:
    "/merbabu.jpg",
};

export const PACKAGES_DATA: PackageItem[] = [
  {
    /* --- DATA GUNUNG RINJANI --- */
    id: "rinjani-3d2n",
    title: "Open Trip Gunung Rinjani",
    mountain: "Gunung Rinjani",
    location: "Lombok, NTB",
    elevation: "3.726 MDPL",
    duration: "4 Hari 3 Malam",
    startDate: "15 - 18 Okt 2026",
    price: 2450000,
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=800",
    
    // Data khusus Card & Jadwal
    quotaText: "Sisa 3 Kursi",
    whatsappText: "Halo Admin, saya ingin tanya slot Open Trip Rinjani tanggal 15 - 18 Okt 2026.",

    // Data khusus Halaman Detail
    description:
      "Jelajahi atap Nusa Tenggara Barat dengan pemandangan spektakuler Segara Anak. Paket eksklusif dengan fasilitas tenda premium, makanan berkualitas, dan pendampingan guide profesional.",
    inclusions: [
      "Simaksi / Tiket Masuk Taman Nasional Rinjani",
      "Tenda Premium Kapasitas 4 (Diisi 2-3 Orang)",
      "Matras Tebal & Sleeping Bag",
      "Makan 3x Sehari Selama di Gunung",
      "Guide Sertifikasi BNSP & Porter Tim",
      "Perlengkapan Masak & P3K",
    ],
    exclusions: [
      "Tiket Transportasi ke Meeting Point",
      "Porter Pribadi",
      "Perlengkapan Pribadi",
    ],
    gearList: ["Jaket Gunung", "Sepatu Trekking", "Carrier 30-45L", "Headlamp & Obat Pribadi"],
  },
  {
    /* --- DATA GUNUNG PRAU --- */
    id: "prau-2d1n",
    title: "Open Trip Gunung Prau",
    mountain: "Gunung Prau",
    location: "Dieng, Jawa Tengah",
    elevation: "2.565 MDPL",
    duration: "2 Hari 1 Malam",
    startDate: "24 - 25 Okt 2026",
    price: 650000,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
    
    // Data khusus Card & Jadwal
    quotaText: "Sisa 5 Kursi",
    whatsappText: "Halo Admin, saya ingin info ketersediaan Open Trip Prau tanggal 24 - 25 Okt 2026.",

    // Data khusus Halaman Detail
    description:
      "Nikmati keindahan Golden Sunrise terbaik di Jawa Tengah. Sangat cocok untuk pendaki pemula dengan jalur yang relatif santai dan pemandangan luar biasa.",
    inclusions: [
      "Tiket Masuk & Simaksi",
      "Tenda & Matras",
      "Makan 2x Selama Camp",
      "Guide & Porter Tim",
    ],
    exclusions: ["Transportasi Pribadi ke Basecamp", "Perlengkapan Pribadi"],
    gearList: ["Jaket Tebal / Windproof", "Sepatu / Sandal Gunung", "Headlamp", "Obat Pribadi"],
  },
  {
    /* --- DATA GUNUNG MERBABU --- */
    id: "merbabu-3d2n",
    title: "Open Trip Gunung Merbabu",
    mountain: "Gunung Merbabu",
    location: "Magelang, Jawa Tengah",
    elevation: "3.145 MDPL",
    duration: "3 Hari 2 Malam",
    startDate: "06 - 08 Nov 2026",
    price: 950000,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    
    // Data khusus Card & Jadwal
    quotaText: "Sisa 4 Kursi",
    whatsappText: "Halo Admin, mau konsultasi Open Trip Merbabu tanggal 06 - 08 Nov 2026.",

    // Data khusus Halaman Detail
    description:
      "Lautan sabana hijau nan mempesona di sepanjang jalur pendakian. Pengalaman mendaki dengan pemandangan gagahnya Gunung Merapi di seberang.",
    inclusions: ["Simaksi Online & Asuransi", "Tenda Camp & Alat Masak", "Makan Selama di Gunung", "Guide Tim"],
    exclusions: ["Transportasi Pribadi", "Perlengkapan Pribadi"],
    gearList: ["Jaket Gunung", "Sepatu Trekking", "Headlamp", "Jas Hujan"],
  },
  {
    /* --- DATA GUNUNG BROMO --- */
    id: "bromo-2d1n",
    title: "Sunrise Trip Gunung Bromo",
    mountain: "Gunung Bromo",
    location: "Probolinggo, Jawa Timur",
    elevation: "2.329 MDPL",
    duration: "2 Hari 1 Malam",
    startDate: "14 - 15 Nov 2026",
    price: 550000,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800",
    
    // Data khusus Card & Jadwal
    quotaText: "Sisa 2 Kursi",
    whatsappText: "Halo Admin, mau booking Sunrise Trip Bromo tanggal 14 - 15 Nov 2026.",

    // Data khusus Halaman Detail
    description:
      "Saksikan keajaiban lautan pasir dan sunrise Bromo dengan transportasi Hardtop Jeep premium. Praktis, nyaman, tanpa perlu jalur trekking berat.",
    inclusions: ["Sewa Jeep Bromo 4WD", "Tiket Masuk Bromo", "Driver & Guide Foto", "Air Mineral"],
    exclusions: ["Sewa Kuda di Bromo", "Pengeluaran Pribadi"],
    gearList: ["Jaket Tebal & Sarung Tangan", "Masker / Slayer", "Kacamata Hitam"],
  },
  {
    /* --- DATA GUNUNG SEMERU --- */
    id: "semeru-4d3n",
    title: "Open Trip Gunung Semeru",
    mountain: "Gunung Semeru",
    location: "Lumajang, Jawa Timur",
    elevation: "3.676 MDPL",
    duration: "4 Hari 3 Malam",
    startDate: "20 - 23 Nov 2026",
    price: 1250000,
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=800",
    
    // Data khusus Card & Jadwal
    quotaText: "Sisa 1 Kursi",
    whatsappText: "Halo Admin, saya ingin tanya slot Open Trip Semeru tanggal 20 - 23 Nov 2026.",

    // Data khusus Halaman Detail
    description:
      "Perjalanan legendaris menuju puncak Mahameru dan cantiknya Ranu Kumbolo. Pengalaman mendaki tak terlupakan di atap Pulau Jawa.",
    inclusions: ["Simaksi & Surat Izin", "Tenda & Perlengkapan Camp", "Makan Selama Pendakian", "Guide & Porter"],
    exclusions: ["Transportasi Pribadi ke Ranu Pani", "Perlengkapan Pribadi"],
    gearList: ["Jaket Windproof", "Sepatu Trekking", "Headlamp", "Obat-obatan"],
  },
  {
    /* --- DATA GUNUNG LAWU --- */
    id: "lawu-2d1n",
    title: "Open Trip Gunung Lawu",
    mountain: "Gunung Lawu",
    location: "Karanganyar, Jawa Tengah",
    elevation: "3.265 MDPL",
    duration: "2 Hari 1 Malam",
    startDate: "28 - 29 Nov 2026",
    price: 750000,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
    
    // Data khusus Card & Jadwal
    quotaText: "Sisa 3 Kursi",
    whatsappText: "Halo Admin, saya ingin booking Open Trip Gunung Lawu tanggal 28 - 29 Nov 2026.",

    // Data khusus Halaman Detail
    description:
      "Jelajahi keindahan Gunung Lawu dengan perjalanan yang menyenangkan dan pemandangan yang memukau. Pengalaman mendaki yang unik dan penuh tantangan.",
    inclusions: ["Simaksi & Surat Izin", "Tenda & Perlengkapan Camp", "Makan Selama Pendakian", "Guide & Porter"],
    exclusions: ["Transportasi Pribadi ke Gunung Lawu", "Perlengkapan Pribadi"],
    gearList: ["Jaket Windproof", "Sepatu Trekking", "Headlamp", "Obat-obatan"],
  }
];