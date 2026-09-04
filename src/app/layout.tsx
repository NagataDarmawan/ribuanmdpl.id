import type { Metadata } from "next";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

// Import Font Judul (Condensed Bold)
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

// Import Font Teks (Modern Clean Sans)
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} - Open Trip Pendakian Gunung`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${oswald.variable} ${jakarta.variable}`}>
      <body className="bg-[#0a0d0c] text-white antialiased min-h-screen flex flex-col overflow-x-hidden font-sans">
        <Navbar />
        <main className="w-full flex-1 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}