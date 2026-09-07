import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; 
import "./globals.css";
import Navbar from "../components/Navbar"; 

// Konfigurasi font Inter (Sans-serif untuk keterbacaan)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Konfigurasi font Playfair Display (Serif untuk kesan elegan)
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Farid | Graphic Designer",
  description: "Portfolio of Farid, Graphic Designer & Visual Creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      {/* Menerapkan variabel font dan mengubah background menjadi off-black/off-white yang lebih elegan */}
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#FAFAFA] dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 antialiased selection:bg-gray-300 selection:text-black transition-colors duration-300 overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}