"use client"; // Wajib ditambahkan karena komponen ini punya interaksi (klik/state)

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Cek preferensi tema saat pertama kali web dimuat
  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Fungsi Toggle Dark Mode
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      setIsDarkMode(true);
    }
  };

  // Fungsi Toggle Menu Mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        
        {/* Logo Navbar */}
        <Link href="/" className="z-10 flex items-center">
          <img 
            src="/assets/logo-light.png" 
            alt="Farid Logo Light" 
            className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 hover:scale-105 block dark:hidden" 
          />
          <img 
            src="/assets/logo-dark.png" 
            alt="Farid Logo Dark" 
            className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 hover:scale-105 hidden dark:block" 
          />
        </Link>

        <div className="flex items-center gap-4 md:gap-8 z-10">
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium text-sm dark:text-gray-300">
            <Link href="#works" className="hover:text-primary dark:hover:text-primary transition-colors">Works</Link>
            <Link href="#about" className="hover:text-primary dark:hover:text-primary transition-colors">About</Link>
            <Link href="#contact" className="hover:text-primary dark:hover:text-primary transition-colors">Contact</Link>
          </div>

          {/* Dark Mode Toggle Button */}
          <button onClick={toggleTheme} className="text-dark dark:text-white hover:text-primary dark:hover:text-primary transition-colors focus:outline-none">
            {isDarkMode ? (
              // Icon Sun
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            ) : (
              // Icon Moon
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            )}
          </button>

          {/* Hamburger Button */}
          <button onClick={toggleMenu} className="md:hidden text-dark dark:text-white focus:outline-none">
            <svg className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-full left-0 w-full bg-white dark:bg-dark border-b border-gray-100 dark:border-gray-800 shadow-lg transform transition-all duration-300 ease-in-out md:hidden flex flex-col px-6 py-6 gap-6 text-center text-lg font-medium ${isMenuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"}`}>
        <Link href="#works" onClick={toggleMenu} className="text-dark dark:text-white hover:text-primary">Works</Link>
        <Link href="#about" onClick={toggleMenu} className="text-dark dark:text-white hover:text-primary">About</Link>
        <Link href="#contact" onClick={toggleMenu} className="text-dark dark:text-white hover:text-primary">Contact</Link>
      </div>
    </nav>
  );
}