"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-[#050505] py-12 relative text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Brand & Identity */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
            <span className="text-sm font-extrabold text-white tracking-wide">
              {portfolioData.personal.name}
            </span>
          </div>

          {/* Social Icons with brand hover colors */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Dicky Muzakki"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition-all duration-200 active:scale-95 group"
            >
              <FaLinkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
            </a>
            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Dicky Muzakki"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-white/10 transition-all duration-200 active:scale-95 group"
            >
              <FaGithub className="w-4 h-4 transition-transform group-hover:scale-110" />
            </a>
            <a
              href={portfolioData.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Dicky Muzakki"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#25D366] hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all duration-200 active:scale-95 group"
            >
              <FaWhatsapp className="w-4 h-4 transition-transform group-hover:scale-110" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              aria-label="Email Dicky Muzakki"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#EA4335] hover:border-[#EA4335]/50 hover:bg-[#EA4335]/10 transition-all duration-200 active:scale-95 group"
            >
              <SiGmail className="w-4 h-4 transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-500 font-medium">
          <div>
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
