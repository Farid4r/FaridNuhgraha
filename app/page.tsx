"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import ContactFooter from "../components/ContactFooter";
import MyVideo from "../components/MyVideo";
import Portfolio from "../components/Portfolio";
import ToolsProcess from "../components/ToolsProcess";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08 });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {
      gsap.to(".gsap-reveal", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.utils.toArray(".portfolio-item").forEach((item: any, i: number) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.1
        });
      });

      gsap.utils.toArray(".about-reveal").forEach((elem: any) => {
        gsap.to(elem, {
          scrollTrigger: {
            trigger: elem,
            start: "top 90%",
            toggleActions: "play none none none"
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        });
      });

      const contactElements = document.querySelectorAll(".contact-reveal");
      if (contactElements.length > 0) {
        gsap.to(".contact-reveal", {
          scrollTrigger: {
            trigger: "#contact", 
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        });
      }

      gsap.utils.toArray(".video-item").forEach((item: any) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        });
      });
      
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main>
      {/* SECTION HERO: Split Layout Sesuai Sketsa */}
      <section id="about" className="min-h-[85vh] flex flex-col justify-center container mx-auto px-6 pt-32 pb-12">
        
        {/* Kontainer Flex Row: Membagi Kiri (Teks) dan Kanan (Foto) */}
        <div className="flex flex-row items-center md:items-start justify-between gap-4 md:gap-12">
          
          {/* SISI KIRI: Susunan Teks (Heading + Subheading + Paragraf) */}
          <div className="w-[55%] sm:w-3/5 flex flex-col">
            
            <h1 className="gsap-reveal text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.1]">
              Halo, saya <br className="block md:hidden" />
              <span className="font-semibold">Farid.</span>
            </h1>
            
            <span className="gsap-reveal font-serif italic text-lg sm:text-2xl md:text-4xl text-gray-500 dark:text-gray-400 mt-1 md:mt-3 block">
              Wong Iseng
            </span>
            
            {/* Paragraf diletakkan langsung di bawah "Wong Iseng" */}
            <p className="gsap-reveal text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-lg lg:text-xl mt-4 md:mt-8 max-w-lg leading-relaxed font-light">
              Art enthusiast 21 tahun yang lagi asyik ngumpulin portofolio desain grafis & videography. Open kerja di mana aja <span className="italic font-serif">(kalo bisa WFH)</span>, selama itu halal.
            </p>

            {/* Tombol Aksi - Dimasukkan ke sisi kiri agar rapi */}
            <div className="gsap-reveal flex flex-wrap gap-3 mt-6 md:mt-10">
              <a href="#works" className="bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 md:px-8 md:py-3 rounded-md font-medium text-xs md:text-base hover:opacity-80 transition-opacity duration-300">
                Portfolio
              </a>
              <a href="#contact" className="border border-black dark:border-white text-black dark:text-white px-5 py-2.5 md:px-8 md:py-3 rounded-md font-medium text-xs md:text-base hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300">
                Hubungi Saya
              </a>
            </div>
            
          </div>

          {/* SISI KANAN: Foto Profil */}
          <div className="gsap-reveal w-[40%] sm:w-2/5 flex justify-end md:justify-center">
            {/* Aspect ratio 3/4 agar foto meninggi ke bawah mengimbangi teks di sebelah kirinya */}
            <div className="w-full max-w-[150px] sm:max-w-[220px] md:max-w-[320px] aspect-[3/4] rounded-md md:rounded-lg overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 ease-out shadow-sm">
              <img src="assets/Profile.jpg" alt="Farid Profile" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* Komponen selanjutnya */}
      <Portfolio isHome={true} />
      <MyVideo isHome={true} />
      <ToolsProcess />
      <ContactFooter />
      
    </main>
  );
}