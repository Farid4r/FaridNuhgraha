export default function Portfolio() {
  return (
    <section id="works" className="container mx-auto px-6 py-24">
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

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
        {/* Item 1 */}
        <div className="portfolio-item col-span-1 md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group bg-gray-100 dark:bg-gray-800 cursor-pointer">
          <img src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1000&auto=format&fit=crop" alt="Branding" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
            <span className="text-primary font-medium text-sm mb-2 tracking-wider uppercase">Branding</span>
            <h3 className="text-white text-3xl font-bold">Lumina Visual Identity</h3>
          </div>
        </div>
        {/* Item 2 */}
        <div className="portfolio-item rounded-3xl overflow-hidden relative group bg-gray-100 dark:bg-gray-800 cursor-pointer">
          <img src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=600&auto=format&fit=crop" alt="Logo Design" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-primary font-medium text-xs mb-1 tracking-wider uppercase">Logo</span>
            <h3 className="text-white text-xl font-bold">Aura Studio</h3>
          </div>
        </div>
        {/* Item 3 */}
        <div className="portfolio-item md:row-span-2 rounded-3xl overflow-hidden relative group bg-gray-100 dark:bg-gray-800 cursor-pointer">
          <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop" alt="Poster Design" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-primary font-medium text-xs mb-1 tracking-wider uppercase">Poster</span>
            <h3 className="text-white text-xl font-bold">Art Exhibition</h3>
          </div>
        </div>
        {/* Item 4 */}
        <div className="portfolio-item col-span-1 md:col-span-2 rounded-3xl overflow-hidden relative group bg-gray-100 dark:bg-gray-800 cursor-pointer">
          <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" alt="Social Media" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-primary font-medium text-xs mb-1 tracking-wider uppercase">Social Media</span>
            <h3 className="text-white text-xl font-bold">Tech Innovators Campaign</h3>
          </div>
        </div>
        {/* Item 5 */}
        <div className="portfolio-item rounded-3xl overflow-hidden relative group bg-gray-100 dark:bg-gray-800 cursor-pointer">
          <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=600&auto=format&fit=crop" alt="Pamphlet" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-primary font-medium text-xs mb-1 tracking-wider uppercase">Pamphlet</span>
            <h3 className="text-white text-xl font-bold">Eco Guide</h3>
          </div>
        </div>
      </div>
    </section>
  );
}