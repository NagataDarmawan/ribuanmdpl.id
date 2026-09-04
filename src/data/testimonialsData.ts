export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  mountain: string;
  avatar: string;
  rating: number;
  content: string;
}

export const TESTIMONIALS_HEADER = {
  badge: "Ulasan Pendaki",
  title: "Cerita Dari Mereka",
  subtitle: "Pengalaman berkesan dari para pendaki yang telah menjelajah bersama kami.",
};

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "testi-1",
    name: "Rian Prasetya",
    role: "Pendaki Pemula",
    mountain: "Gunung Prau",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    content: "First trip naik gunung dan dapet tim guide yang super ramah & sabar! Logistik makanan melimpah, tenda bersih. Next pasti bakal ikut trip Rinjani!",
  },
  {
    id: "testi-2",
    name: "Nadia Utami",
    role: "Solo Traveler",
    mountain: "Gunung Merbabu",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    content: "Ikut open trip sendirian tapi berasa jalan sama temen lama. Porter gesit banget, pas nyampe camp tenda udah berdiri rapi. Recommended!",
  },
  {
    id: "testi-3",
    name: "Fajar Nugraha",
    role: "Fotografer Alam",
    mountain: "Gunung Rinjani",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    content: "Pacing jalannya pas banget buat yang suka hunting foto sunrise. Safety brief lengkap dan alat-alat standar internasional.",
  },
  {
    id: "testi-4",
    name: "Siti Rahma",
    role: "Pendaki Santai",
    mountain: "Gunung Gede",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    content: "Menu masakannya ga kaya di gunung, berasa makan di restoran! Kopi hangat selalu ready pas pagi hari. Mantap banget pelayanannya.",
  },
];