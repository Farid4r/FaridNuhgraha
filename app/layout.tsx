import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // <-- Import komponen di sini

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farid | Graphic Designer",
  description: "Portfolio of Farid, Graphic Designer & Visual Creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-dark text-dark dark:text-white antialiased selection:bg-primary selection:text-white transition-colors duration-300 overflow-x-hidden`}>
        <Navbar /> {/* <-- Panggil komponen di sini */}
        {children}
      </body>
    </html>
  );
}