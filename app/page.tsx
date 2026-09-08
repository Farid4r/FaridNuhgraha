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