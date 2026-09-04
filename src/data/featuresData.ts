import { Luggage, UtensilsCrossed, TentTree, Camera } from "lucide-react";

export interface FeatureItem {
  id: string;
  icon: typeof Luggage;
  title: string;
  subtitle: string;
  description: string;
  highlightText: string;
}

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: "all-inclusive",
    icon: Luggage,
    title: "All-Inclusive & Tinggal Bawa Badan",
    subtitle: "Bebas Repot",
    description:
      "Tidak perlu pusing sewa alat, angkut beban berat, atau bongkar pasang tenda. Semua kebutuhan simaksi, logistik, hingga peralatan camp sudah disiapkan penuh oleh tim.",
    highlightText: "Zero Hassle",
  },
  {
    id: "chef-gunung",
    icon: UtensilsCrossed,
    title: "Kuliner Chef Gunung (Non-Mi Instan)",
    subtitle: "Nutrisi Terjaga",
    description:
      "Nikmati hidangan hangat, bergizi, dan lezat yang dimasak segar (fresh food) di tempat oleh tim cook terlatih. Bukan sekadar mi instan atau makanan kaleng.",
    highlightText: "Fresh & Hot Meals",
  },
  {
    id: "comfort-camp",
    icon: TentTree,
    title: "Peralatan Camp Standar Mewah",
    subtitle: "Istirahat Nyaman",
    description:
      "Tenda lega (kapasitas 4 diisi 2-3 orang) agar tidak sesak, matras tebal, dan sleeping bag yang selalu disterilkan serta dicuci bersih setiap selesai trip.",
    highlightText: "Sterile & Spacious",
  },
  {
    id: "dokumentasi-hd",
    icon: Camera,
    title: "Bonus Dokumentasi HD & Cinematic",
    subtitle: "Momen Abadi",
    description:
      "Abadikan perjalanan puncakkanu dengan foto dan video kualitas tinggi dari tim dokumentasi khusus. Siap pakai untuk kenang-kenangan dan konten media sosial.",
    highlightText: "Free Photo & Video",
  },
];