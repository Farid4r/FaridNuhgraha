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

  // Menampilkan semua jika di halaman Design, atau 2 (atau 1) jika di Home
  const displayedProjects = isHome ? allProjects.slice(0, 2) : allProjects;

  return (
    <>
      <section id="works" className="container mx-auto px-6 py-24 relative z-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 dark:text-white">Design</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg text-lg">Kumpulan hasil desain yang saya buat.</p>
          </div>
          
          {isHome && (
            <Link href="/design" className="group flex items-center gap-2 text-primary font-bold text-lg hover:underline underline-offset-8 transition-all">
              Lihat Semua Desain
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          {displayedProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => openModal(project)}
              /* PENJELASAN PERBAIKAN:
                 Jika !isHome (Halaman Design), kita tambahkan class "!opacity-100 !translate-y-0"
                 untuk memaksa item muncul karena di halaman ini tidak ada GSAP yang memicu animasi.
              */
              className={`portfolio-item pointer-events-auto touch-manipulation rounded-3xl overflow-hidden relative group bg-gray-100 dark:bg-gray-800 cursor-pointer transition-all duration-500 ${project.customClass} ${!isHome ? "!opacity-100 !translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-primary font-medium text-sm mb-2 tracking-wider uppercase">{project.category}</span>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal tetap sama */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div onClick={closeModal} className="absolute inset-0 bg-dark/90 backdrop-blur-sm animate-fade-in cursor-pointer"></div>
          <div className="relative bg-white dark:bg-dark w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl animate-slide-up flex flex-col">
            <button onClick={closeModal} className="absolute top-4 right-4 z-10 bg-white/80 dark:bg-dark/80 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full text-dark dark:text-white transition-colors duration-200 shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 h-[40vh] md:h-auto bg-gray-100 dark:bg-gray-800">
                <img src={selectedProject.img} className="w-full h-full object-cover" alt={selectedProject.title} />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2">{selectedProject.category}</span>
                <h3 className="text-3xl font-bold mb-6 dark:text-white">{selectedProject.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line text-lg">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}