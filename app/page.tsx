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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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

      gsap.utils.toArray<HTMLElement>(".portfolio-item").forEach((item, i) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.1,
        });
      });

      gsap.utils.toArray<HTMLElement>(".about-reveal").forEach((elem) => {
        gsap.to(elem, {
          scrollTrigger: {
            trigger: elem,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
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

      gsap.utils.toArray<HTMLElement>(".video-item").forEach((item) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        });
      });

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main>
      {/* SECTION HERO: Split Layout */}
      <section
        id="about"
        className="container mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24"
      >
        <div className="grid grid-cols-[minmax(5.5rem,28%)_minmax(0,1fr)] items-center gap-x-4 gap-y-4 sm:grid-cols-[minmax(8rem,30%)_minmax(0,1fr)] sm:gap-x-8 md:grid-cols-[minmax(12rem,30%)_minmax(0,1fr)] md:gap-x-12">
          <div className="gsap-reveal w-full flex justify-start">
            <div className="w-full max-w-27.5 sm:max-w-42.5 md:max-w-55 aspect-square rounded-full overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 ease-out border border-border">
              <img
                src="/assets/Profile.jpg"
                alt="Farid Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex min-w-0 flex-col">
            <h1 className="gsap-reveal font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.1] text-text-primary">
              Halo, saya <br className="block md:hidden" />
              <span className="font-semibold">Farid.</span>
            </h1>

            <span className="gsap-reveal font-display italic text-xl sm:text-2xl md:text-4xl text-text-secondary mt-1 md:mt-3 block">
              Wong Iseng
            </span>

          </div>

          <p className="gsap-reveal col-span-2 text-text-secondary text-xs sm:text-sm md:text-lg lg:text-xl mt-2 md:mt-4 max-w-3xl leading-relaxed">
            Art enthusiast 21 tahun yang lagi asyik ngumpulin portofolio desain
            grafis & videography. Open kerja di mana aja{" "}
            <span className="font-display italic">(kalo bisa WFH)</span>, selama
            itu halal.
          </p>

          <div className="gsap-reveal col-span-2 flex flex-wrap gap-3 mt-2 md:mt-4">
            <a
              href="#works"
              className="bg-accent text-bg px-5 py-2.5 md:px-8 md:py-3 rounded-md font-medium text-xs md:text-base hover:bg-accent-hover transition-colors duration-300"
            >
              Portfolio
            </a>

            <a
              href="#contact"
              className="border border-border text-text-primary px-5 py-2.5 md:px-8 md:py-3 rounded-md font-medium text-xs md:text-base hover:border-accent hover:text-accent transition-colors duration-300"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </section>

      <Portfolio isHome={true} />
      <MyVideo isHome={true} />
      <ToolsProcess />
      <ContactFooter isHome />
    </main>
  );
}
