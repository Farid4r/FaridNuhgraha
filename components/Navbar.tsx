"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">

        <Link href="/" className="z-10 flex items-center">
          <img
            src="/assets/logo-dark.png"
            alt="Farid Logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-4 md:gap-8 z-10">
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium text-sm text-text-secondary">
            <Link
              href="/"
              className={`${pathname === "/" ? "text-accent" : ""} hover:text-accent transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/design"
              className={`${pathname === "/design" ? "text-accent" : ""} hover:text-accent transition-colors`}
            >
              Design
            </Link>
            <Link
              href="/video"
              className={`${pathname === "/video" ? "text-accent" : ""} hover:text-accent transition-colors`}
            >
              Video
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-text-primary focus:outline-none"
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`absolute top-full left-0 w-full bg-surface border-b border-border shadow-lg transform transition-all duration-300 ease-in-out md:hidden flex flex-col px-6 py-6 gap-6 text-center text-lg font-medium ${
          isMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <Link href="/" onClick={toggleMenu} className="text-text-primary hover:text-accent">
          Home
        </Link>
        <Link href="/design" onClick={toggleMenu} className="text-text-primary hover:text-accent">
          Design
        </Link>
        <Link href="/video" onClick={toggleMenu} className="text-text-primary hover:text-accent">
          Video
        </Link>
      </div>
    </nav>
  );
}