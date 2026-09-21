"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Wrench, Briefcase, FolderGit2, Mail, MessageSquare } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["about", "skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "Tentang", icon: User },
    { id: "skills", label: "Keahlian", icon: Wrench },
    { id: "experience", label: "Pengalaman", icon: Briefcase },
    { id: "projects", label: "Proyek", icon: FolderGit2 },
    { id: "contact", label: "Kontak", icon: Mail },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`pointer-events-auto flex items-center gap-1 sm:gap-1.5 px-3 py-2 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-[#09090b]/95 border-zinc-700/80 backdrop-blur-md shadow-2xl shadow-black/30"
            : "bg-[#09090b]/90 border-zinc-800 backdrop-blur-sm shadow-lg shadow-black/20"
        }`}
      >
        {/* Brand Dot / Name Tag like reference • Raffialdo Bayu • */}
        <button
          onClick={() => scrollTo("about")}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-white hover:text-orange-400 transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
          <span className="font-bold tracking-tight">Dicky Muzakki</span>
        </button>

        <div className="h-3.5 w-[1px] bg-zinc-800 mx-1 hidden sm:block" />

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                isActive
                  ? "text-white font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-[#ff5500] rounded-full shadow-sm shadow-orange-600/40 -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <Icon className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{item.label}</span>
            </button>
          );
        })}

        <div className="h-3.5 w-[1px] bg-zinc-800 mx-1" />

        <a
          href={portfolioData.personal.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition-all shadow-sm"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#ff5500]" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </motion.nav>
    </header>
  );
}
