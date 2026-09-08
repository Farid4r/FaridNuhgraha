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
      <section id="works" className="container mx-auto px-6 py-6 relative z-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-4 text-text-primary">
              Design
            </h2>
            <p className="text-text-secondary max-w-lg text-lg">
              Kumpulan hasil desain yang saya buat.
            </p>
          </div>

          {isHome && (
            <Link
              href="/design"
              className="text-accent font-medium text-lg hover:text-accent-hover underline underline-offset-8 decoration-accent/40 transition-colors"
            >
              Lihat semua desain
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2
         md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className={`portfolio-item pointer-events-auto touch-manipulation rounded-2xl overflow-hidden relative group bg-surface border border-border cursor-pointer transition-colors duration-300 hover:border-accent/40 ${project.customClass} ${!isHome ? "!opacity-100 !translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-text-secondary text-sm mb-1">{project.category}</span>
                <h3 className="font-display text-white text-xl">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            onClick={closeModal}
            className="absolute inset-0 bg-bg/90 backdrop-blur-sm animate-fade-in cursor-pointer"
          ></div>
          <div className="relative bg-surface border border-border w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-slide-up flex flex-col">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-bg/80 hover:bg-surface-hover p-2 rounded-full text-text-primary transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 h-[40vh] md:h-auto bg-bg">
                <img src={selectedProject.img} className="w-full h-full object-cover" alt={selectedProject.title} />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-accent text-sm mb-2">{selectedProject.category}</span>
                <h3 className="font-display text-3xl mb-6 text-text-primary">{selectedProject.title}</h3>
                <p className="text-text-secondary leading-relaxed whitespace-pre-line text-lg">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}