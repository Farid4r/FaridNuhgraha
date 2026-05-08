"use client";
import { useState } from "react";

export default function Portfolio() {
  // State untuk Modal
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Fungsi untuk membuka dan menutup Modal
  const openModal = (projectData: any) => setSelectedProject(projectData);
  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <section id="works" className="container mx-auto px-6 py-24">
        {/* Header Portfolio */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 dark:text-white">Selected Works</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg text-lg">A showcase of my recent design projects, blending strategy with minimalism.</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide text-sm font-medium text-gray-500 dark:text-gray-400">
            <button className="text-dark dark:text-white border-b-2 border-primary pb-1 whitespace-nowrap">All Works</button>
            <button className="hover:text-primary dark:hover:text-primary pb-1 whitespace-nowrap transition-colors">Branding</button>
            <button className="hover:text-primary dark:hover:text-primary pb-1 whitespace-nowrap transition-colors">Poster</button>
            <button className="hover:text-primary dark:hover:text-primary pb-1 whitespace-nowrap transition-colors">Social Media</button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          
          {/* Item 1 */}
          <div 
            onClick={() => openModal({ title: "Lumina Visual Identity", category: "Branding", img: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1000&auto=format&fit=crop" })}
            className="portfolio-item col-span-1 md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group bg-gray-100 dark:bg-gray-800 cursor-pointer"
          >
            <img src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1000&auto=format&fit=crop" alt="Branding" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <span className="text-primary font-medium text-sm mb-2 tracking-wider uppercase">Branding</span>
              <h3 className="text-white text-3xl font-bold">Lumina Visual Identity</h3>
            </div>
          </div>

          {/* Item 2 */}
          <div 
            onClick={() => openModal({ title: "Aura Studio", category: "Logo", img: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=600&auto=format&fit=crop" })}
            className="portfolio-item rounded-3xl overflow-hidden relative group bg-gray-100 dark:bg-gray-800 cursor-pointer"
          >
            <img src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=600&auto=format&fit=crop" alt="Logo Design" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary font-medium text-xs mb-1 tracking-wider uppercase">Logo</span>
              <h3 className="text-white text-xl font-bold">Aura Studio</h3>
            </div>
          </div>

          {/* Item 3 */}
          <div 
            onClick={() => openModal({ title: "Art Exhibition", category: "Poster", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop" })}
            className="portfolio-item md:row-span-2 rounded-3xl overflow-hidden relative group bg-gray-100 dark:bg-gray-800 cursor-pointer"
          >
            <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop" alt="Poster Design" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-linear-to-trom-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary font-medium text-xs mb-1 tracking-wider uppercase">Poster</span>
              <h3 className="text-white text-xl font-bold">Art Exhibition</h3>
            </div>
          </div>

          {/* Item 4 */}
          <div 
            onClick={() => openModal({ title: "Tech Innovators Campaign", category: "Social Media", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" })}
            className="portfolio-item col-span-1 md:col-span-2 rounded-3xl overflow-hidden relative group bg-gray-100 dark:bg-gray-800 cursor-pointer"
          >
            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" alt="Social Media" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary font-medium text-xs mb-1 tracking-wider uppercase">Social Media</span>
              <h3 className="text-white text-xl font-bold">Tech Innovators Campaign</h3>
            </div>
          </div>

          {/* Item 5 */}
          <div 
            onClick={() => openModal({ title: "Eco Guide", category: "Pamphlet", img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=600&auto=format&fit=crop" })}
            className="portfolio-item rounded-3xl overflow-hidden relative group bg-gray-100 dark:bg-gray-800 cursor-pointer"
          >
            <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=600&auto=format&fit=crop" alt="Pamphlet" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-primary font-medium text-xs mb-1 tracking-wider uppercase">Pamphlet</span>
              <h3 className="text-white text-xl font-bold">Eco Guide</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Render Modal secara bersyarat (Hanya muncul jika ada project yang dipilih) */}
      {selectedProject && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div onClick={closeModal} className="absolute inset-0 bg-dark/90 backdrop-blur-sm cursor-pointer animate-fade-in"></div>
          
          {/* Modal Content */}
          <div className="relative bg-white dark:bg-dark w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl transition-colors duration-300 animate-slide-up">
            
            {/* Tombol Close */}
            <button onClick={closeModal} className="absolute top-4 right-4 md:top-6 md:right-6 z-10 bg-white/80 dark:bg-dark/80 hover:bg-dark dark:hover:bg-white hover:text-white dark:hover:text-dark text-dark dark:text-white rounded-full p-2 backdrop-blur-md transition-colors shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            {/* Isi Detail */}
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 h-[40vh] md:h-auto bg-gray-100 dark:bg-gray-800">
                <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                <span className="text-primary font-medium text-sm tracking-wider uppercase mb-2">{selectedProject.category}</span>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-dark dark:text-white">{selectedProject.title}</h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                  Ini adalah deskripsi detail untuk project <strong>{selectedProject.title}</strong>. Di sini kamu bisa menjelaskan latar belakang, tantangan desain, proses kreatif, dan solusi visual yang kamu berikan untuk klien.
                </p>
                
                <div className="grid grid-cols-2 gap-6 border-t border-gray-100 dark:border-gray-800 pt-8 mt-auto">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold">Year</p>
                    <p className="font-medium text-dark dark:text-white">2026</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold">Role</p>
                    <p className="font-medium text-dark dark:text-white">Lead Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}