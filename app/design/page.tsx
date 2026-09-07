import Portfolio from "@/components/Portfolio";
import ContactFooter from "@/components/ContactFooter";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koleksi Desain Grafis | Farid Nuhgraha",
  description: "Eksplorasi karya desain grafis Farid Nuhgraha, mulai dari desain spanduk, logo produk, hingga konten media sosial.",
};

export default function DesignPage() {
  return (
    // Background disamakan dengan layout.tsx agar transisi halaman mulus
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#0a0a0a] transition-colors duration-300">
      
      {/* 
        SPACING FIX: 
        Kita kurangi padding top-nya dan buang margin-bottom. 
        Biarkan komponen Portfolio yang mengatur sisa jaraknya ke bawah.
      */}
      <div className="pt-28 md:pt-36 pb-4">
        <div className="container mx-auto px-6">
          
          {/* Tombol Kembali: Dibuat minimalis, font kecil, uppercase, efek hover monokrom */}
          <Link 
            href="/" 
            className="group inline-flex items-center gap-3 text-gray-400 hover:text-black dark:text-gray-500 dark:hover:text-white transition-colors duration-500"
          >
            <div className="p-2 rounded-full border border-gray-200 dark:border-gray-800 group-hover:border-black dark:group-hover:border-white transition-colors duration-500">
              <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </div>
            <span className="text-xs uppercase tracking-widest font-medium">Kembali</span>
          </Link>
          
        </div>
      </div>

      {/* Komponen Portfolio dipanggil. Karena Portfolio.tsx sudah punya garis border-t dan pt-24, jaraknya sekarang akan terlihat pas (tidak bertumpuk) */}
      <Portfolio isHome={false} />

      <ContactFooter />
    </main>
  );
}