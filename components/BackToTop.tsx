"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Menghitung apakah pengguna telah men-scroll melewati section Tentang/Hero
      // Jika posisi scroll lebih dari 400px (melewati Tentang), tombol muncul
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={scrollToTop}
          aria-label="Kembali ke atas"
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#09090b]/90 text-white border border-zinc-700/90 shadow-2xl hover:bg-[#ff5500] hover:border-[#ff5500] flex items-center justify-center backdrop-blur-md active:scale-95 cursor-pointer group transition-colors duration-200"
        >
          <ArrowUp className="w-5 h-5 text-[#ff5500] group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-200 stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
