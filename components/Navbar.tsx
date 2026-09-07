"use client"; 

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname(); 

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    // Background diubah ke warna off-white/off-black yang kita pakai di layout.tsx
    <nav className="fixed w-full top-0 z-50 bg-[#FAFAFA]/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-gray-200 dark:border-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center relative">
        
        <Link href="/" className="z-50 flex items-center">
          <img src="/assets/logo-light.png" alt="Farid Logo Light" className="h-6 md:h-8 w-auto object-contain transition-transform duration-700 hover:scale-105 block dark:hidden" />
          <img src="/assets/logo-dark.png" alt="Farid Logo Dark" className="h-6 md:h-8 w-auto object-contain transition-transform duration-700 hover:scale-105 hidden dark:block" />
        </Link>

        <div className="flex items-center gap-6 md:gap-10 z-50">
          {/* Desktop Menu - Tipografi huruf kecil, uppercase, dan berjarak lebar */}
          <div className="hidden md:flex gap-10 text-[10px] md:text-xs uppercase tracking-[0.2em]">
            <Link 
              href="/" 
              className={`${pathname === "/" ? "text-black dark:text-white font-semibold" : "text-gray-400 hover:text-black dark:hover:text-white"} transition-colors duration-300`}
            >
              Home
            </Link>
            <Link 
              href="/design" 
              className={`${pathname === "/design" ? "text-black dark:text-white font-semibold" : "text-gray-400 hover:text-black dark:hover:text-white"} transition-colors duration-300`}
            >
              Design
            </Link>
            <Link 
              href="/video" 
              className={`${pathname === "/video" ? "text-black dark:text-white font-semibold" : "text-gray-400 hover:text-black dark:hover:text-white"} transition-colors duration-300`}
            >
              Video
            </Link>
          </div>

          {/* Theme Toggle - Menghapus efek hover warna primer */}
          <button onClick={toggleTheme} className="text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300 focus:outline-none">
            {isDarkMode ? (
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            ) : (
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            )}
          </button>

          {/* Hamburger Menu Mobile */}
          <button onClick={toggleMenu} className="md:hidden text-gray-500 hover:text-black dark:hover:text-white focus:outline-none transition-colors">
            <svg className={`w-5 h-5 transition-transform duration-500 ${isMenuOpen ? "rotate-90 scale-110" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Diubah menjadi full-screen elegan dengan tipografi Serif */}
      <div className={`fixed inset-0 top-[70px] bg-[#FAFAFA] dark:bg-[#0a0a0a] shadow-2xl transform transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] md:hidden flex flex-col justify-center px-10 pb-20 gap-8 text-left ${isMenuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-8 opacity-0 pointer-events-none"}`}>
        
        <p className="text-gray-400 dark:text-gray-600 text-xs uppercase tracking-widest mb-4">Navigation</p>
        
        <Link 
          href="/" 
          onClick={toggleMenu} 
          className={`text-5xl font-serif italic font-medium transition-opacity ${pathname === "/" ? "text-black dark:text-white" : "text-gray-400 dark:text-gray-600 hover:opacity-70"}`}
        >
          Home.
        </Link>
        <Link 
          href="/design" 
          onClick={toggleMenu} 
          className={`text-5xl font-serif italic font-medium transition-opacity ${pathname === "/design" ? "text-black dark:text-white" : "text-gray-400 dark:text-gray-600 hover:opacity-70"}`}
        >
          Design.
        </Link>
        <Link 
          href="/video" 
          onClick={toggleMenu} 
          className={`text-5xl font-serif italic font-medium transition-opacity ${pathname === "/video" ? "text-black dark:text-white" : "text-gray-400 dark:text-gray-600 hover:opacity-70"}`}
        >
          Video.
        </Link>

        {/* Tambahan Info Email di Menu Mobile */}
        <div className="mt-auto border-t border-gray-200 dark:border-gray-900 pt-8">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Say Hello</p>
            <a href="mailto:faridnuhgraha.4@gmail.com" className="text-sm font-light text-black dark:text-white">faridnuhgraha.4@gmail.com</a>
        </div>
      </div>
    </nav>
  );
}