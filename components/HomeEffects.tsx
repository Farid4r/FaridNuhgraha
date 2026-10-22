"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

export default function HomeEffects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ lerp: 0.08 });
    let animationFrameId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    const context = gsap.context(() => {
      gsap.to(".gsap-reveal", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".portfolio-item").forEach((item, index) => {
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
          delay: index * 0.1,
        });
      });

      gsap.utils.toArray<HTMLElement>(".about-reveal").forEach((element) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      const contactElements = gsap.utils.toArray<HTMLElement>(".contact-reveal");
      if (contactElements.length > 0) {
        gsap.to(contactElements, {
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
    }, document.body);

    return () => {
      cancelAnimationFrame(animationFrameId);
      context.revert();
      lenis.destroy();
    };
  }, []);

  return null;
}
