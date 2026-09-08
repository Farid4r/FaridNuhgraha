import MyVideo from "@/components/MyVideo";
import ContactFooter from "@/components/ContactFooter";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofolio Video | Farid Nuhgraha",
  description: "Kumpulan karya videografi dan motion graphics oleh Farid Nuhgraha.",
};

export default function VideoPage() {
  return (
    <main className="min-h-screen bg-bg transition-colors duration-300">

      <div className="pt-28 md:pt-36 pb-4">
        <div className="container mx-auto px-6">

          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-text-muted hover:text-text-primary transition-colors duration-500"
          >
            <div className="p-2 rounded-full border border-border group-hover:border-accent transition-colors duration-500">
              <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </div>
            <span className="text-sm font-medium">Kembali</span>
          </Link>

        </div>
      </div>

      <MyVideo isHome={false} />

      {/* <ContactFooter /> */}
    </main>
  );
}