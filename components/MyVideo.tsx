"use client";
import Link from "next/link";

interface MyVideoProps {
  isHome?: boolean;
}

export default function MyVideo({ isHome = false }: MyVideoProps) {
  const videos = [
    {
      id: "1",
      title: "Goes To Tasik",
      vimeoId: "1190497149", 
    },
    {
      id: "2",
      title: "At Tasikmalaya",
      vimeoId: "1190521095", 
    },
    {
      id: "3",
      title: "Family Gathering Recap",
      vimeoId: "1190688538", 
    },
    {
      id: "4",
      title: "Birthday Recap 21th",
      vimeoId: "1177724269", 
    }
  ];

  const displayedVideos = isHome ? videos.slice(0, 1) : videos;

  return (
    // Background dibiarkan menyatu dengan body (transparan)
    <section id="videos" className="py-24 transition-colors duration-300 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            {/* Menggunakan font-serif untuk konsistensi */}
            <h2 className="video-reveal text-4xl md:text-5xl font-serif italic font-medium tracking-tight mb-4 dark:text-white">Video.</h2>
            <p className="video-reveal text-gray-500 dark:text-gray-400 max-w-lg text-base md:text-lg font-light">
              Kumpulan dokumentasi visual. 
            </p>
          </div>
          
          {isHome && (
            <Link href="/video" className="group flex items-center gap-2 text-black dark:text-white text-sm font-medium hover:opacity-70 transition-opacity uppercase tracking-widest">
              Lihat Semua
              <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          )}
        </div>

        {/* Grid Video */}
        <div className={`grid grid-cols-1 ${isHome ? 'lg:grid-cols-1 max-w-4xl' : 'lg:grid-cols-2'} gap-12`}>
          {displayedVideos.map((video) => (
            <div key={video.id} className="video-item group">
              {/* MENGUBAH rounded-3xl menjadi rounded-md dan menghapus background abu-abu mencolok */}
              <div className="aspect-video w-full bg-[#1a1a1a] rounded-md overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-700 ease-out shadow-sm group-hover:shadow-lg">
                <iframe
                  src={`https://player.vimeo.com/video/${video.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&color=ffffff&title=0&byline=0&portrait=0`}
                  allow="fullscreen; picture-in-picture; clipboard-write"
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                  title={video.title}
                ></iframe>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <span className="text-gray-400 text-sm font-light">0{video.id} —</span>
                <h3 className="text-xl md:text-2xl font-medium dark:text-white">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}