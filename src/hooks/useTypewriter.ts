"use client";

import { useState, useEffect } from "react";

export function useTypewriter(
  text: string,
  speed: number = 70,         // Kecepatan ketik per karakter
  deleteSpeed: number = 35,    // Kecepatan hapus per karakter
  pauseDelay: number = 3000,   // Jeda 3 detik setelah teks penuh
  resumeDelay: number = 500    // Jeda sejenak saat teks kosong sebelum ngetik ulang
) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    // 1. Jika teks sudah terisi penuh dan tidak dalam kondisi menghapus
    if (!isDeleting && displayText === text) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDelay); // Diam selama 3 detik
      return () => clearTimeout(timer);
    }

    // 2. Jika teks sudah terhapus bersih dan sedang dalam kondisi menghapus
    if (isDeleting && displayText === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, resumeDelay); // Jeda singkat lalu balik ketik lagi
      return () => clearTimeout(timer);
    }

    // 3. Eksekusi alur pengetikan/penghapusan karakter demi karakter
    timer = setTimeout(
      () => {
        setDisplayText((prev) =>
          isDeleting
            ? text.slice(0, prev.length - 1)
            : text.slice(0, prev.length + 1)
        );
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, text, speed, deleteSpeed, pauseDelay, resumeDelay]);

  return { displayText, isDeleting };
}