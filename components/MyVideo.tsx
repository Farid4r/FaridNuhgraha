"use client";
import Link from "next/link";

interface MyVideoProps {
  isHome?: boolean;
}

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

function getVideoUrl(publicId: string) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_auto,q_auto/${publicId}.mp4`;
}

function getPosterUrl(publicId: string) {
  // so_2 = ambil frame di detik ke-2 sebagai poster
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/so_2,f_auto,q_auto/${publicId}.jpg`;
}

export default function MyVideo({ isHome = false }: MyVideoProps) { 
  const videos = [
    {
      id: "7",
      title: "Before Sidang",
      publicId: "prepare_before__sidang_1080p",
    },
    {  id: "6",
      title: "Hike",
      publicId: "curug_1080p",
    },
    {
      id: "5",
      title: "zoo vlog",
      publicId: "zoo_1080p",
    },
    {
      id: "4",
      title: "Fam Edition",
      publicId: "fam_edition",
    },
    {
      id: "3",
      title: "Bxchange",
      publicId: "bxchange_v1_1080p",
    },
    {
      id: "2",
      title: "At tasik",
      publicId: "attasik_v1",
    },
    {
      id: "1",
      title: "Goes To Tasik",
      publicId: "goestotasik",
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

        <div className={`grid grid-cols-1 ${isHome ? 'lg:grid-cols-1 max-w-4xl' : 'lg:grid-cols-2'} gap-12`}>
          {displayedVideos.map((video) => (
            <div key={video.id} className="video-item group">
              <div className="aspect-video w-full bg-surface rounded-md overflow-hidden border border-border transition-colors duration-500 group-hover:border-accent/40">
                <video
                  src={getVideoUrl(video.publicId)}
                  poster={getPosterUrl(video.publicId)}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  title={video.title}
                >
                  Browser kamu tidak mendukung pemutaran video.
                </video>
              </div>
              <div className="mt-6">
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