"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 sm:pt-28 sm:pb-20 md:py-0 bg-white text-zinc-900 border-b border-zinc-200/70"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Kolom Kiri: Info Utama & Resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Role Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-[#ff5500] border border-orange-200/70">
                <Sparkles className="w-3.5 h-3.5 text-[#ff5500]" />
                {personal.title}
              </span>
            </div>

            {/* Main Greeting & Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-5xl font-extrabold tracking-tight text-zinc-950 mb-4 leading-[1.15]">
              Halo, Saya <span className="text-[#ff5500]">{personal.name}</span>
            </h1>

            {/* Bio Description */}
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl font-normal">
              {personal.shortBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#ff5500] hover:bg-[#e04b00] rounded-full shadow-md shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Hubungi Saya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={personal.resumeUrl || "#contact"}
                download="CV_Dicky_Muzakki.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-300 hover:border-zinc-400 rounded-full transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-zinc-500" />
                <span>Unduh CV</span>
              </a>
            </div>
          </motion.div>

          {/* Kolom Kanan: Foto Profil Portrait Elegan (Tidak Ngotak, Lebih Besar & Berdimensi) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex items-center justify-center lg:justify-end"
          >
            <div className="group relative w-64 sm:w-72 md:w-80 aspect-[4/5] rounded-[2.5rem] p-2.5 bg-white border border-zinc-200/90 shadow-2xl shadow-zinc-900/10 transition-all duration-300 hover:shadow-orange-500/10 hover:border-orange-200">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-zinc-100">
                <img
                  src="/profile.jpg"
                  alt={personal.name}
                  className="w-full h-full object-cover object-top contrast-[1.05] transition duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-center pointer-events-none">
                  <span className="inline-block px-3.5 py-1 text-[11px] font-bold tracking-wider uppercase text-white bg-black/60 rounded-full backdrop-blur-md border border-white/20">
                    Dicky Muzakki
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
