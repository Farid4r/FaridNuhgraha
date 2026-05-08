export default function ToolsProcess() {
  return (
    <section className="bg-light dark:bg-gray-900 py-24 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tools */}
          <div className="bg-white dark:bg-dark p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 about-reveal transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-6 dark:text-white">My Toolkit</h3>
            <div className="flex flex-wrap gap-4">
              <span className="group flex items-center gap-2.5 px-5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-all duration-300 cursor-default shadow-sm hover:shadow">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 0v24h24V0H0zm6.96 6.84h3.63c1.78 0 2.97.43 3.69 1.13.68.64 1.05 1.56 1.05 2.65 0 1.18-.39 2.1-1.12 2.76-.75.69-1.92 1.06-3.61 1.06H8.97v4.6H6.96V6.84zm7.25 10.42c-.75-.59-1.18-1.55-1.18-2.65 0-1.07.41-1.99 1.15-2.64.69-.61 1.76-.94 3.12-.94 1.47 0 2.65.37 3.4 1.05.69.61 1.08 1.46 1.08 2.53 0 1.15-.4 2.06-1.13 2.68-.76.64-1.94 1.01-3.41 1.01-1.5 0-2.69-.38-3.03-1.04zm-5.24-5.38h1.49c.8 0 1.4-.2 1.78-.54.34-.33.53-.78.53-1.32 0-.58-.19-1.01-.52-1.33-.36-.34-.95-.53-1.74-.53H8.97v3.72zm5.72 2.77c.36.43.91.68 1.63.68.79 0 1.34-.23 1.68-.64.33-.4.51-.96.51-1.63 0-.66-.17-1.22-.5-1.61-.34-.41-.89-.63-1.67-.63-.76 0-1.33.24-1.67.66-.35.43-.53 1.01-.53 1.68 0 .68.18 1.25.55 1.69z"/>
                </svg>
                Photoshop
              </span>
              <span className="group flex items-center gap-2.5 px-5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-all duration-300 cursor-default shadow-sm hover:shadow">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 12.001A3.999 3.999 0 0 1 12 8.003V4.005C12 1.794 10.206 0 8 0 5.794 0 4 1.794 4 4.005c0 2.21 1.794 4.004 4 4.004Zm8 4.004a3.996 3.996 0 0 1-3.996-3.995v-4.005A3.999 3.999 0 0 1 16 8.003c2.206 0 4-1.794 4-4.005C20 1.794 18.206 0 16 0h-4v8.003h4A3.996 3.996 0 0 1 20 12.001c0 2.21-1.794 4.004-4 4.004Zm-8-4.004a3.999 3.999 0 0 0-4 4.004A3.999 3.999 0 0 0 8 20.006c2.206 0 4-1.794 4-4.004v-4.005C12 9.787 10.206 8 8 8ZM8 20.006A3.999 3.999 0 0 1 4 24.01a3.999 3.999 0 0 1 4-4.004Zm4-4.004a3.999 3.999 0 0 1 4-4.005h-4v4.005Z"/>
                </svg>
                Figma
              </span>
              <span className="group flex items-center gap-2.5 px-5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-all duration-300 cursor-default shadow-sm hover:shadow">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                </svg>
                CorelDraw
              </span>
              <span className="group flex items-center gap-2.5 px-5 py-2.5 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-all duration-300 cursor-default shadow-sm hover:shadow">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.666 0L0 24h6.059l2.67-5.597h6.541L17.941 24h6.059L12.334 0h-.668zm.334 5.378l2.25 4.673h-4.5l2.25-4.673zm-3.056 9.47h6.111l1.528 3.149H7.416l1.528-3.149z"/>
                </svg>
                Affinity
              </span>
            </div>
          </div>

          {/* Process */}
          <div className="bg-white dark:bg-dark p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 about-reveal transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-6 dark:text-white">Creative Process</h3>
            <div className="flex items-center gap-3 text-sm md:text-base font-medium text-gray-500 dark:text-gray-400 overflow-x-auto pb-2 scrollbar-hide">
              <span className="text-dark dark:text-gray-200 whitespace-nowrap">Research</span>
              <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              <span className="text-dark dark:text-gray-200 whitespace-nowrap">Sketch</span>
              <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              <span className="text-dark dark:text-gray-200 whitespace-nowrap">Design</span>
              <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              <span className="text-dark dark:text-gray-200 whitespace-nowrap">Output</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}