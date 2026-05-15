import Portfolio from "@/components/Portfolio";
import ContactFooter from "@/components/ContactFooter";
import Link from "next/link";
import { Metadata } from "next";

// 1. Menambahkan Metadata untuk SEO agar halaman terindeks dengan baik
export const metadata: Metadata = {
  title: "Koleksi Desain Grafis | Farid Nuhgraha",
  description: "Eksplorasi karya desain grafis Farid Nuhgraha, mulai dari desain spanduk, logo produk, hingga konten media sosial.",
};

export default function DesignPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark transition-colors duration-300">
      {/* Padding top disesuaikan agar tidak tertutup Navbar fixed */}
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-6">
          
          {/* Tombol Kembali dengan interaksi hover yang halus */}
          <Link 
            href="/" 
            className="group inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-12"
          >
            <div className="p-2 rounded-full border border-gray-200 dark:border-gray-800 group-hover:border-primary transition-colors">
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </div>
            <span className="font-medium">Kembali ke Beranda</span>
          </Link>

          {/* Header Judul Halaman */}
          <div className="mb-2">
             <span className="text-primary font-bold tracking-widest uppercase text-sm">Portfolio</span>
             <h1 className="text-5xl md:text-6xl font-bold dark:text-white mt-2">Graphic Design</h1>
          </div>
        </div>

        {/* 2. Memanggil Portfolio dengan isHome={false} 
            Ini akan memicu komponen untuk menampilkan seluruh list project (4 item atau lebih). */}
        <Portfolio isHome={false} />
      </div>

      <ContactFooter />
    </main>
  );
}       