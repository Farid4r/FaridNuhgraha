"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { projects, type PortfolioProject } from "@/data/portfolio";

interface PortfolioProps {
  isHome?: boolean;
}

export default function Portfolio({ isHome = false }: PortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const openModal = (project: PortfolioProject) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  useEffect(() => {
    if (!selectedProject) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setSelectedProject(null);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [selectedProject]);

  const displayedProjects = isHome ? projects.slice(0, 2) : projects;

  return (
    <>
      <section id="works" className="container mx-auto px-6 py-6 relative z-10">
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-5xl italic font-medium tracking-tight mb-4 text-text-primary">
              Design.
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

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px] sm:auto-rows-[260px] md:auto-rows-[300px]">
          {displayedProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => openModal(project)}
              aria-label={`Lihat detail ${project.title}`}
              aria-haspopup="dialog"
              className={`portfolio-item pointer-events-auto touch-manipulation w-full h-full text-left p-0 rounded-2xl overflow-hidden relative group bg-surface border border-border cursor-pointer transition-colors duration-300 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${project.customClass} ${!isHome ? "!opacity-100 !translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <img
                src={project.img}
                alt=""
                className="w-full h-full object-cover"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-8">
                <span className="text-text-secondary text-sm mb-1">{project.category}</span>
                <span className="font-display text-white text-xl">{project.title}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div aria-hidden="true" className="absolute inset-0 bg-bg/90 backdrop-blur-sm animate-fade-in"></div>
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            tabIndex={-1}
            className="relative bg-surface border border-border w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-slide-up flex flex-col"
          >
            <button
              ref={closeButtonRef}
              onClick={closeModal}
              type="button"
              aria-label="Tutup detail proyek"
              className="absolute top-4 right-4 z-10 bg-bg/80 hover:bg-surface-hover p-2 rounded-full text-text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
                <h3 id="project-dialog-title" className="font-display text-3xl mb-6 text-text-primary">{selectedProject.title}</h3>
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
