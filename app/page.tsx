"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import ContactFooter from "../components/ContactFooter";

// Import Komponen yang baru dibuat
import Portfolio from "../components/Portfolio";
import ToolsProcess from "../components/ToolsProcess";

export default function Home() {
  useEffect(() => {
    // 1. Setup Lenis
    const lenis = new Lenis({ lerp: 0.08 });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Register GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Delay sedikit agar DOM React selesai dirender sebelum animasi jalan
    setTimeout(() => {
      // 3. Hero Animasi Fade Up
      gsap.to(".gsap-reveal", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });

      // 4. Portfolio Scroll Animasi
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

      // 5. Tools & Process Scroll Animasi
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
// Cari bagian animasi contact di useEffect app/page.tsx dan ganti menjadi:

// 6. Contact & Footer Scroll Animasi
const contactElements = document.querySelectorAll(".contact-reveal");
if (contactElements.length > 0) {
  gsap.to(".contact-reveal", {
    scrollTrigger: {
      trigger: "#contact", // Pastikan ID ini ada di section contact
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
      
      // Refresh ScrollTrigger agar kalkulasi posisinya akurat
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section id="about" className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between container mx-auto px-6 pt-32 pb-12 gap-12">
        <div className="w-full md:w-3/5 flex flex-col items-start">
            <h1 className="gsap-reveal text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight dark:text-white">
                Halo, saya Farid. <br className="hidden md:block" />
                <span className="text-gray-400 italic font-normal text-4xl md:text-6xl">Wong Iseng.</span>
            </h1>
            <div className="gsap-reveal text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed space-y-4">
                <p>
                    Graphic design enthusiast yang Masih merintis di era AI saat ini.</p>
            </div>
            <div className="gsap-reveal flex flex-wrap gap-4 mb-10">
                <a href="#works" className="bg-dark dark:bg-white text-white dark:text-dark px-8 py-3 rounded-full font-medium hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                    Portfolio
                </a>
                <a href="#contact" className="border border-gray-300 dark:border-gray-700 text-dark dark:text-white px-8 py-3 rounded-full font-medium hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-all duration-300">
                    Hubungi Saya
                </a>
            </div>
        </div>
        <div className="gsap-reveal w-full md:w-2/5 flex justify-center md:justify-end mb-8 md:mb-0">
            <div className="w-full max-w-sm aspect-4/5 rounded-4xl overflow-hidden relative group shadow-2xl shadow-primary/10">
                <img src="assets/profile.jpg" alt="Farid Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
        </div> 
      </section>

      {/* Panggil Komponen Portfolio dan Tools & Process */}
      <Portfolio />
      <ToolsProcess />
      <ContactFooter/>
      
    </main>
  );
}