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
    <section id="videos" className="py-24 transition-colors duration-300 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="video-reveal font-display text-4xl md:text-5xl italic font-medium tracking-tight mb-4 text-text-primary">
              Video.
            </h2>
            <p className="video-reveal text-text-secondary max-w-lg text-base md:text-lg">
              Kumpulan dokumentasi visual.
            </p>
          </div>

          {isHome && (
            <Link
              href="/video"
              className="text-accent font-medium text-lg hover:text-accent-hover underline underline-offset-8 decoration-accent/40 transition-colors"
            >
              Lihat semua video
            </Link>
          )}
        </div>

        {/* Grid Video */}
        <div className={`grid grid-cols-1 ${isHome ? 'lg:grid-cols-1 max-w-4xl' : 'lg:grid-cols-2'} gap-12`}>
          {displayedVideos.map((video) => (
            <div key={video.id} className="video-item group">
              <div className="aspect-video w-full bg-surface rounded-md overflow-hidden border border-border transition-colors duration-500 group-hover:border-accent/40">
                <iframe
                  src={`https://player.vimeo.com/video/${video.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&color=ffffff&title=0&byline=0&portrait=0`}
                  allow="fullscreen; picture-in-picture; clipboard-write"
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                  title={video.title}
                ></iframe>
              </div>
              <div className="mt-6">
                <h3 className="font-display text-xl md:text-2xl font-medium text-text-primary">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}