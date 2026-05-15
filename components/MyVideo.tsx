"use client";
import Link from "next/link"; // Wajib import link

interface MyVideoProps {
  isHome?: boolean;
}

export default function MyVideo({ isHome = false }: MyVideoProps) {
  const videos = [
    {
      id: "1",
      title: "Goes To Tasik",
      vimeoId: "1190497149", 
      description: "Bagian 1 - Pergi ke tasik buat tugas kuliah"
    },
    {
      id: "2",
      title: "At Tasikmalaya",
      vimeoId: "1190521095", 
      description: "Bagian 2 - Persiapan H-1 acara tugas kuliah"
    },
    {
      id: "3",
      title: "Birthday Recap 21th",
      vimeoId: "1177724269", 
      description: "Recap video buat ulang tahun ke-21"
    }
  ];

  // Logika limit: Jika di home, ambil 1 video. Jika tidak, tampilkan semua.
  const displayedVideos = isHome ? videos.slice(0, 1) : videos;

  return (
    <section id="videos" className="py-24 bg-white dark:bg-dark transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="video-reveal text-4xl md:text-5xl font-bold tracking-tight mb-4 dark:text-white">Video</h2>
            <p className="video-reveal text-gray-600 dark:text-gray-400 max-w-lg text-lg">
              Kumpulan hasil iseng tapi pake niat dikit 
            </p>
          </div>
          
          {/* Tombol Lihat Semua hanya muncul di Home */}
          {isHome && (
            <Link href="/video" className="group flex items-center gap-2 text-primary font-bold text-lg hover:underline underline-offset-8 transition-all">
              Lihat Semua Video
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          )}
        </div>

        {/* Grid Video */}
        <div className={`grid grid-cols-1 ${isHome ? 'lg:grid-cols-1' : 'lg:grid-cols-2'} gap-8`}>
          {displayedVideos.map((video) => (
            <div key={video.id} className="video-item group">
              <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 transition-transform duration-500 group-hover:scale-[1.01]">
                <iframe
                  src={`https://player.vimeo.com/video/${video.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&color=2596be&title=0&byline=0&portrait=0`}
                  allow="fullscreen; picture-in-picture; clipboard-write"
                  className="w-full h-full"
                  title={video.title}
                ></iframe>
              </div>
              <div className="mt-6 px-2">
                <h3 className="text-2xl font-bold dark:text-white mb-2">{video.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}