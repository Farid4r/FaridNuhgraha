"use client";
import { useState } from "react";
import Link from "next/link";

interface PortfolioProps {
  isHome?: boolean;
}

export default function Portfolio({ isHome = false }: PortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const openModal = (project: any) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const allProjects = [
    {
      id: 1,
      title: "Spanduk",
      category: "Banner",
      img: "/assets/Banner.jpg",
      description: "Desain spanduk informatif dengan tata letak visual yang hierarkis.",
      customClass: "col-span-1 md:col-span-2 md:row-span-2"
    },
    {
      id: 2,
      title: "Logo Produk",
      category: "Logo",
      img: "/assets/Logo.jpg",
      description: "Logo ini dirancang fleksibel agar tetap proporsional dan solid.",
      customClass: ""
    },
    {
      id: 3,
      title: "Instagram Story",
      category: "Social Media",
      img: "/assets/Instastory.jpg",
      description: "Membuat desain Instagram Story menyesuaikan kebutuhan klien.",
      customClass: "md:row-span-2"
    },
    {
      id: 4,
      title: "Feeds Instagram",
      category: "Social Media",
      img: "/assets/Feed.jpg",
      description: "Membuat feeds instagram untuk promosi produk atau konten edukatif.",
      customClass: "col-span-1 md:col-span-2"
    }
  ];

  const displayedProjects = isHome ? allProjects.slice(0, 2) : allProjects;

  return (
    <>
      {/* Tambahkan pt-24 pb-12 untuk memberikan ruang napas yang elegan antar section */}
      <section id="works" className="container mx-auto px-6 pt-24 pb-12 relative z-10 border-t border-gray-200 dark:border-gray-800">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            {/* Menggunakan font-serif untuk konsistensi editorial */}
            <h2 className="text-4xl md:text-5xl font-serif italic font-medium tracking-tight mb-4 dark:text-white">Design.</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-lg text-base md:text-lg font-light">Kumpulan hasil desain visual.</p>
          </div>
          
          {isHome && (
            <Link href="/design" className="group flex items-center gap-2 text-black dark:text-white text-sm font-medium hover:opacity-70 transition-opacity uppercase tracking-widest">
              Lihat Semua
              <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          )}
        </div>

        {/* Mengurangi gap dari gap-4 menjadi gap-2 atau gap-4 untuk kesan grid yang lebih rapat (mansory-like) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {displayedProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => openModal(project)}
              /* MENGUBAH rounded-3xl menjadi rounded-md */
              className={`portfolio-item pointer-events-auto touch-manipulation rounded-md overflow-hidden relative group bg-gray-100 dark:bg-gray-900 cursor-pointer transition-all duration-500 ${project.customClass} ${!isHome ? "!opacity-100 !translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Menambahkan grayscale secara default, berwarna saat dihover agar lebih menyatu dengan tema elegan */}
              <img src={project.img} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                <span className="text-gray-300 font-light text-xs mb-1 tracking-widest uppercase">{project.category}</span>
                <h3 className="text-white text-lg md:text-xl font-medium">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal / Lightbox Minimalis */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Background blur yang lebih intens */}
          <div onClick={closeModal} className="absolute inset-0 bg-black/95 backdrop-blur-md animate-fade-in cursor-pointer"></div>
          {/* Mengubah rounded-3xl menjadi rounded-md pada kotak modal */}
          <div className="relative bg-[#FAFAFA] dark:bg-[#0a0a0a] w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-md shadow-2xl animate-slide-up flex flex-col border border-gray-200 dark:border-gray-800">
            <button onClick={closeModal} className="absolute top-4 right-4 z-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm hover:bg-white dark:hover:bg-black p-2 rounded-full text-black dark:text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] bg-gray-100 dark:bg-[#121212]">
                <img src={selectedProject.img} className="w-full h-full object-contain md:object-cover" alt={selectedProject.title} />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                <span className="text-gray-500 text-xs uppercase tracking-widest mb-4">{selectedProject.category}</span>
                <h3 className="text-3xl md:text-4xl font-serif font-medium mb-6 dark:text-white">{selectedProject.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed whitespace-pre-line text-base md:text-lg">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}