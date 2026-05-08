"use client";

export default function MyVideo() {
  // Data Video - Kamu tinggal ganti ID Vimeo-nya di sini
  const videos = [
    {
      id: "1",
      title: "Goes To Tasik",
      vimeoId: "1190497149", // Ganti dengan ID video Vimeo kamu
      description: "Bagian 1 - Pergi ke tasik buat tugas kuliah"
    },
    {
      id: "2",
      title: "At Tasikmalaya",
      vimeoId: "1190521095", // Ganti dengan ID video Vimeo kamu
      description: "Bagian 2 - Persiapan H-1 acara tugas kuliah"
    },
    {
      id: "3",
      title: "Birthday Recap 21th",
      vimeoId: "1177724269", // Ganti dengan ID video Vimeo kamu
      description: "Recap video buat ulang tahun ke-21"
    }
  ];

  return (
    <section id="videos" className="py-24 bg-white dark:bg-dark transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="video-reveal text-4xl md:text-5xl font-bold tracking-tight mb-4 dark:text-white">Video</h2>
          <p className="video-reveal text-gray-600 dark:text-gray-400 max-w-lg text-lg">
            Kumpulan hasil iseng tapi pake niat dikit 
          </p>
        </div>

        {/* Grid Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="video-item group">
              <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 transition-transform duration-500 group-hover:scale-[1.01]">
                <iframe
                  src={`https://player.vimeo.com/video/${video.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&color=2596be&title=0&byline=0&portrait=0`}
                  allow=" fullscreen; picture-in-picture; clipboard-write"
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