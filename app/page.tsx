import ContactFooter from "@/components/ContactFooter";
import HomeEffects from "@/components/HomeEffects";
import MyVideo from "@/components/MyVideo";
import Portfolio from "@/components/Portfolio";
import ToolsProcess from "@/components/ToolsProcess";

export default function Home() {
  return (
    <main>
      <HomeEffects />
      {/* SECTION HERO: Split Layout */}
      <section id="about" className="container mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24">

        <div className="flex flex-row items-center justify-between gap-4 md:gap-12">

          {/* SISI KIRI: Teks */}
          <div className="w-[64%] sm:w-3/5 flex flex-col">

            <h1 className="gsap-reveal font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.1] text-text-primary">
              Halo, saya <br className="block md:hidden" />
              <span className="font-semibold">Farid.</span>
            </h1>

            <span className="gsap-reveal font-display italic text-xl sm:text-2xl md:text-4xl text-text-secondary mt-1 md:mt-3 block">
              Wong Iseng
            </span>

            <p className="gsap-reveal text-text-secondary text-xs sm:text-sm md:text-lg lg:text-xl mt-4 md:mt-8 max-w-lg leading-relaxed">
              Art enthusiast 21 tahun yang lagi asyik ngumpulin portofolio desain grafis & videography. Open kerja di mana aja{" "}
              <span className="font-display italic">(kalo bisa WFH)</span>, selama itu halal.
            </p>

            <div className="gsap-reveal flex flex-wrap gap-3 mt-6 md:mt-10">
              
                <a href="#works"
                className="bg-accent text-bg px-5 py-2.5 md:px-8 md:py-3 rounded-md font-medium text-xs md:text-base hover:bg-accent-hover transition-colors duration-300"
              >
                Portfolio
              </a>
              
                <a href="#contact"
                className="border border-border text-text-primary px-5 py-2.5 md:px-8 md:py-3 rounded-md font-medium text-xs md:text-base hover:border-accent hover:text-accent transition-colors duration-300"
              >
                Hubungi Saya
              </a>
            </div>

          </div>

          {/* SISI KANAN: Foto Profil — diperkecil */}
          <div className="gsap-reveal w-[32%] sm:w-[30%] flex justify-end">
            <div className="w-full max-w-[110px] sm:max-w-[170px] md:max-w-[220px] aspect-[3/4] rounded-md md:rounded-lg overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 ease-out border border-border">
              <img src="/assets/Profile.jpg" alt="Farid Profile" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>

      <Portfolio isHome={true} />
      <MyVideo isHome={true} />
      <ToolsProcess />
      <ContactFooter />

    </main>
  );
}
