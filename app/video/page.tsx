import MyVideo from "@/components/MyVideo";
import ContactFooter from "@/components/ContactFooter";
import Link from "next/link";
import { Metadata } from "next";

// 1. Menambahkan Metadata untuk SEO
export const metadata: Metadata = {
  title: "Portofolio Video | Farid Nuhgraha",
  description: "Kumpulan karya videografi dan motion graphics oleh Farid Nuhgraha.",
};

export default function VideoPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark transition-colors duration-300">
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-6">
          {/* Tombol Back yang estetik */}
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

          {/* Header Halaman */}
          {/* <div className="mb-2">
             <span className="text-primary font-bold tracking-widest uppercase text-sm">Gallery</span>
             <h1 className="text-5xl md:text-6xl font-bold dark:text-white mt-2">Koleksi Video</h1>
          </div> */}
        </div>

        {/* 2. Memanggil MyVideo dengan isHome={false} 
            Ini akan memicu tampilan semua video (3 video) tanpa limit. */}
        <MyVideo isHome={false} />
      </div>

      <ContactFooter />
    </main>
  );
}