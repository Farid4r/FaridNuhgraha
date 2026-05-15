"use client";

export default function ContactFooter() {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="bg-white dark:bg-dark py-32 md:py-40 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <p className="contact-reveal text-primary font-medium tracking-wider uppercase text-sm mb-4">What's Next?</p>
          <h2 className="contact-reveal text-5xl md:text-7xl font-bold tracking-tight mb-8 dark:text-white">Tertarik dengan proyek saya?<br />
            <span className="text-gray-400 italic font-normal">Mari bekerja sama.</span>
          </h2>
          
          <div className="contact-reveal flex justify-center mb-16">
            <a href="mailto:faridnuhgraha.4@gmail.com" className="text-3xl md:text-5xl font-medium border-b-2 border-dark dark:border-white hover:text-primary dark:hover:text-primary hover:border-primary dark:hover:border-primary transition-colors pb-2 dark:text-white">
              Email Saya
            </a>
          </div>

          <div className="contact-reveal flex flex-wrap justify-center gap-8 md:gap-10 text-gray-500 dark:text-gray-400">
            {/* Instagram */}
            <a href="https://instagram.com/frydnhgrha" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-primary dark:hover:text-primary transform hover:-translate-y-1 transition-all duration-300">
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            {/* TikTok */}
            <a href="https://tiktok.com/@harmiens" target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-primary dark:hover:text-primary transform hover:-translate-y-1 transition-all duration-300">
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.65 3.84-1.85 5.33-1.19 1.49-2.91 2.45-4.8 2.7-1.89.26-3.83-.06-5.46-1.01-1.63-.95-2.87-2.42-3.44-4.17-.57-1.74-.46-3.66.31-5.32.78-1.66 2.12-3.03 3.75-3.83 1.63-.81 3.51-1.02 5.3-.59v4.11c-.77-.11-1.56-.03-2.28.26-.72.29-1.35.79-1.8 1.4-.44.62-.68 1.37-.68 2.15 0 .77.24 1.52.68 2.14.45.62 1.08 1.12 1.8 1.41.72.29 1.51.37 2.28.25.77-.11 1.48-.44 2.06-.94.59-.5.98-1.16 1.13-1.92.15-.76.05-1.55-.26-2.26-.31-.72-.82-1.35-1.43-1.79V.02h.01z"/>
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/6282124167493" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-primary dark:hover:text-primary transform hover:-translate-y-1 transition-all duration-300">
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            {/* Behance */}
            <a href="https://behance.net/farid" target="_blank" rel="noreferrer" aria-label="Behance" className="hover:text-primary dark:hover:text-primary transform hover:-translate-y-1 transition-all duration-300">
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-dark py-8 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; 2026 Farid. All rights reserved.</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2 font-medium"
          >
            Back to top
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </button>
        </div>
      </footer>
    </>
  );
}