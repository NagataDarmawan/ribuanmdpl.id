export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  featured?: boolean;
}

export const GALLERY_HEADER = {
  badge: "Dokumentasi Trip",
  title: "Galeri Petualangan",
  subtitle: "Momen seru dan pemandangan indah dari pendakian bersama tim kami.",
};

export const GALLERY_DATA: GalleryItem[] = [
  // 1. Featured Kiri (Gunung Prau - Memakan 2x2 grid di desktop)
  {
    id: "gal-1",
    title: "Matahari Terbit Dieng",
    location: "Gunung Prau",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  // 2-5. Empat Foto Kecil di Kanan Foto Prau
  {
    id: "gal-2",
    title: "Lautan Awan Pagi",
    location: "Gunung Merbabu",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "gal-3",
    title: "Suasana Camping Ceria",
    location: "Gunung Gede",
    imageUrl: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "gal-4",
    title: "Jalur Sabana Hijau",
    location: "Gunung Lawu",
    imageUrl: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "gal-5",
    title: "Garis Jalur Pendakian",
    location: "Gunung Sumbing",
    imageUrl: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=800&auto=format&fit=crop",
  },

  // 6-9. Empat Foto Kecil di Kiri Foto Rinjani
  {
    id: "gal-7",
    title: "Kabut Tipis Hutan Pinus",
    location: "Gunung Ciremai",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "gal-8",
    title: "Lembah Edelweiss",
    location: "Gunung Pangrango",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "gal-9",
    title: "Stargazing Malam Hari",
    location: "Gunung Slamet",
    imageUrl: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "gal-10",
    title: "Danau Segara Anak",
    location: "Gunung Rinjani",
    imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
  },
  // 10. Featured Kanan (Gunung Rinjani - Memakan 2x2 grid di desktop)
  {
    id: "gal-6",
    title: "Momen Puncak Tertinggi",
    location: "Gunung Rinjani",
    imageUrl: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
];