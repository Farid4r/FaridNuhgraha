import MyVideo from "@/components/MyVideo";
import ContactFooter from "@/components/ContactFooter";
import Link from "next/link";
import { Metadata } from "next";

// Metadata untuk SEO tetap dipertahankan
export const metadata: Metadata = {
  title: "Portofolio Video | Farid Nuhgraha",
  description: "Kumpulan karya videografi dan motion graphics oleh Farid Nuhgraha.",
};

export default function VideoPage() {
  return (
    // Menyesuaikan background dengan tema off-white/off-black yang sudah kita set
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#0a0a0a] transition-colors duration-300">
      
      {/* 
        Menyesuaikan padding top agar tidak tertutup Navbar,
        dan menghapus margin bottom pada tombol agar jarak ke komponen MyVideo lebih natural.
      */}
      <div className="pt-28 md:pt-36 pb-4">
        <div className="container mx-auto px-6">
          
          {/* Tombol Back minimalis dan elegan (persis seperti di halaman Design) */}
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

      {/* Komponen MyVideo dipanggil. Garis border-t dan judul "Video." akan langsung menempel rapi di bawah tombol */}
      <MyVideo isHome={false} />

      <ContactFooter />
    </main>
  );
}