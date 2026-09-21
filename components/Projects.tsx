"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FolderGit2,
  Building2,
  Cpu,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Layers,
} from "lucide-react";
import { portfolioData, ProjectItem } from "@/data/portfolioData";

function ProjectCard({ project }: { project: ProjectItem }) {
  const [showAllTech, setShowAllTech] = useState(false);
  const hasMoreThan5 = project.technologies.length > 5;
  const displayedTechs = hasMoreThan5 && !showAllTech
    ? project.technologies.slice(0, 5)
    : project.technologies;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group w-[310px] sm:w-[380px] md:w-[430px] shrink-0 snap-start flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-white border border-zinc-200 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div>
        {/* Project Image Banner with overlay badges */}
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-zinc-100 mb-4 border border-zinc-200/80 group-hover:border-orange-200 transition-colors">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 text-zinc-400 p-4">
              <Layers className="w-8 h-8 text-zinc-300 mb-2 group-hover:text-[#ff5500] transition-colors" />
              <span className="text-[11px] font-semibold text-zinc-400">Enterprise Solution</span>
            </div>
          )}

          {/* Top Bar Floating Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-900 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-zinc-200 shadow-xs">
              <Building2 className="w-3 h-3 text-[#ff5500]" />
              {project.client}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950 group-hover:text-[#ff5500] transition-colors mb-2 leading-snug">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4 font-normal">
          {project.summary}
        </p>
      </div>

      <div>
        {/* Tech stack tags */}
        <div className="pt-3 border-t border-zinc-100 mb-4">
          <div className="flex items-center gap-1.5 mb-2 text-zinc-400 text-xs">
            <Cpu className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-[11px] font-medium text-zinc-500">Tech Stack:</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {displayedTechs.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-zinc-100 text-zinc-700 border border-zinc-200/80"
              >
                {tech}
              </span>
            ))}

            {/* Toggle button: only visible if more than 5 technologies */}
            {hasMoreThan5 && (
              <button
                type="button"
                onClick={() => setShowAllTech((prev) => !prev)}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold text-[#ff5500] bg-orange-50 hover:bg-orange-100 border border-orange-200 transition-colors cursor-pointer"
              >
                {showAllTech ? (
                  <>
                    <span>Tutup</span>
                    <ChevronUp className="w-3 h-3" />
                  </>
                ) : (
                  <>
                    <span>+{project.technologies.length - 5} lainnya</span>
                    <ChevronDown className="w-3 h-3" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Action Bar: Project Type */}
        <div className="flex items-center gap-2 pt-2">
          <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
          <span className="text-xs font-bold text-zinc-800 tracking-wide uppercase">
            {project.projectType || "Enterprise Project"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.querySelector<HTMLElement>(".group");
      const scrollAmount = firstCard ? firstCard.offsetWidth + 20 : 380;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center py-20 md:py-28 bg-white text-zinc-900 border-b border-zinc-200 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Section Header */}
        <div className="mb-8 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-[#ff5500] border border-orange-200/70 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Karya & Proyek Nyata
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            Featured Projects
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 mt-2 leading-relaxed font-normal">
            Solusi aplikasi enterprise skala nasional di BPJS Kesehatan serta sistem otomasi manufaktur & bimbingan akademik.
          </p>
        </div>

        {/* Carousel Wrapper with Dynamic Frosted Glass Side Controls */}
        <div className="group/carousel relative">
          {/* Dynamic Left Arrow Button: semi-transparent, only appears on hover when scrollable */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Geser proyek ke kiri"
            className={`hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-zinc-200/90 bg-white/85 text-zinc-800 hover:text-white hover:bg-[#ff5500] hover:border-[#ff5500] shadow-xl shadow-zinc-950/10 items-center justify-center transition-all duration-300 active:scale-90 cursor-pointer backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 ${
              !canScrollLeft ? "pointer-events-none !opacity-0" : ""
            }`}
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.2]" />
          </button>

          {/* Dynamic Right Arrow Button: semi-transparent, only appears on hover when scrollable */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Geser proyek ke kanan"
            className={`hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-zinc-200/90 bg-white/85 text-zinc-800 hover:text-white hover:bg-[#ff5500] hover:border-[#ff5500] shadow-xl shadow-zinc-950/10 items-center justify-center transition-all duration-300 active:scale-90 cursor-pointer backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 ${
              !canScrollRight ? "pointer-events-none !opacity-0" : ""
            }`}
          >
            <ChevronRight className="w-6 h-6 stroke-[2.2]" />
          </button>

          {/* Horizontal Scrollable Cards Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-5 overflow-x-auto px-1 sm:px-2 pb-6 pt-2 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "thin" }}
          >
            {portfolioData.projects.map((project: ProjectItem) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

