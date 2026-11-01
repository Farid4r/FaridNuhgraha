"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import ContactFooter from "../components/ContactFooter";
import MyVideo from "../components/MyVideo";
import Portfolio from "../components/Portfolio";
import ToolsProcess from "../components/ToolsProcess";

function getAgeInJakarta() {
  const dateParts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Jakarta",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
      .formatToParts(new Date())
      .map(({ type, value }) => [type, value]),
  );

  const year = Number(dateParts.year);
  const month = Number(dateParts.month);
  const day = Number(dateParts.day);
  const birthdayPassed = month > 10 || (month === 10 && day >= 3);

  return year - 2004 - (birthdayPassed ? 0 : 1);
}

export default function Home() {
  const [age, setAge] = useState(22);

  useEffect(() => {
    const updateAge = () => setAge(getAgeInJakarta());
    const initialUpdate = window.setTimeout(updateAge, 0);
    const dailyUpdate = window.setInterval(updateAge, 24 * 60 * 60 * 1000);

    return () => {
      window.clearTimeout(initialUpdate);
      window.clearInterval(dailyUpdate);
    };
  }, []);

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
        className="container mx-auto px-6 pt-24 pb-12 sm:pb-16 md:pt-40 md:pb-24"
      >
        <div className="grid grid-cols-[minmax(4.5rem,24%)_minmax(0,1fr)] items-center gap-x-3 gap-y-3 sm:grid-cols-[minmax(8rem,30%)_minmax(0,1fr)] sm:gap-x-8 sm:gap-y-4 md:grid-cols-[minmax(12rem,30%)_minmax(0,1fr)] md:gap-x-12">
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
            <h1 className="gsap-reveal font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.1] text-text-primary">
              Halo, saya <br className="block md:hidden" />
              <span className="font-semibold">Farid Nuhgraha.</span>
            </h1>

            <span className="gsap-reveal font-display italic text-xl sm:text-2xl md:text-4xl text-text-secondary mt-1 md:mt-3 block">
              Pengangguran
            </span>
          </div>

          <p className="gsap-reveal col-span-2 text-text-secondary text-xs sm:text-sm md:text-lg lg:text-xl mt-2 md:mt-4 max-w-3xl leading-relaxed">
            Mahasiswa {age} tahun yang masih ngumpulin portofolio desain grafis
            & videography. Open kerja di mana aja{" "}
            <span className="font-display italic">(kalo bisa WFH)</span>, selama
            itu halal.
          </p>

          <div className="gsap-reveal col-span-2 flex flex-wrap gap-2 sm:gap-3 mt-2 md:mt-4">
            <a
              href="#works"
              className="bg-accent text-bg min-h-9 px-3 sm:px-5 md:px-8 py-1 rounded-md font-medium text-xs md:text-base hover:bg-accent-hover transition-colors duration-300 inline-flex items-center justify-center"
            >
              Portfolio
            </a>

            <a
              href="#contact"
              className="border border-border text-text-primary min-h-9 px-3 sm:px-5 md:px-8 py-1 rounded-md font-medium text-xs md:text-base hover:border-accent hover:text-accent transition-colors duration-300 inline-flex items-center justify-center"
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
