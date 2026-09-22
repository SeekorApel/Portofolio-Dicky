"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { SiMikrotik } from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";
import {
  portfolioData,
  ExperienceItem,
  EducationItem,
  CertificationItem,
} from "@/data/portfolioData";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
  const { experiences, education, certifications } = portfolioData;

  const currentCount = activeTab === "experience"
    ? experiences.length
    : education.length + certifications.length;
  const isScrollable = currentCount > 3;

  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center py-20 md:py-28 bg-[#fafafa] border-b border-zinc-200/80 text-zinc-900 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">

        {/* Section Header with Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-[#ff5500] border border-orange-200/70 mb-3">
              {activeTab === "experience" ? (
                <Briefcase className="w-3.5 h-3.5" />
              ) : (
                <GraduationCap className="w-3.5 h-3.5" />
              )}
              Riwayat & Kualifikasi
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
              {activeTab === "experience" ? "Pengalaman Kerja" : "Pendidikan & Sertifikasi"}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-2 max-w-xl leading-relaxed font-normal">
              {activeTab === "experience"
                ? "Rekam jejak kontribusi dalam membangun, memelihara, dan mengoptimalkan sistem perangkat lunak berskala enterprise."
                : "Fondasi akademis di bidang informatika yang diperkuat dengan sertifikasi teknis berstandar global."}
            </p>
          </div>

          {/* Filter Tabs: Pengalaman Kerja & Pendidikan (Centered on mobile, right-aligned on desktop) */}
          <div className="flex items-center justify-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-zinc-200/60 rounded-full border border-zinc-300/80 self-center md:self-end mx-auto md:mx-0 w-fit">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold transition-all ${activeTab === "experience"
                ? "bg-[#ff5500] text-white shadow-md shadow-orange-500/25"
                : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60"
                }`}
            >
              <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Pengalaman Kerja</span>
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold transition-all ${activeTab === "education"
                ? "bg-[#ff5500] text-white shadow-md shadow-orange-500/25"
                : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60"
                }`}
            >
              <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Pendidikan</span>
            </button>
          </div>
        </div>

        {/* Dynamic Container: Lepas alami jika <= 3, scroll effect hanya jika lebih dari 3 */}
        <div
          className={`py-2 pr-2 sm:pr-4 ${isScrollable
            ? "max-h-[600px] overflow-y-auto scroll-smooth"
            : "overflow-visible"
            }`}
          style={isScrollable ? { scrollbarWidth: "thin" } : undefined}
        >
          <AnimatePresence mode="wait">
            {activeTab === "experience" ? (
              <motion.div
                key="experience-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="relative border-l-2 border-zinc-200 ml-3 md:ml-6 space-y-8"
              >
                {experiences.map((exp: ExperienceItem, index: number) => (
                  <div key={exp.company} className="relative pl-6 md:pl-8 group">
                    {/* Timeline Pin/Dot */}
                    <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-2 border-[#ff5500] group-hover:bg-[#ff5500] transition-colors shadow-xs" />

                    {/* Experience Card */}
                    <div className="p-6 md:p-7 rounded-2xl bg-white border border-zinc-200/90 hover:border-orange-300 hover:shadow-md transition-all duration-200 shadow-xs">
                      {/* Header row: Company, Role & Time */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                        <div>
                          <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950 group-hover:text-[#ff5500] transition-colors">
                            {exp.company}
                          </h3>
                          <div className="text-xs sm:text-sm font-semibold text-[#ff5500] mt-1">
                            {exp.role}
                          </div>
                        </div>

                        <div className="flex items-center text-xs text-zinc-500 font-medium shrink-0">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200/80 font-semibold">
                            <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Brief Overview */}
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4 font-normal">
                        {exp.description}
                      </p>

                      {/* Bullet Points of Technical Achievements */}
                      <div className="space-y-2 mb-5">
                        {exp.achievements.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                            <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies used */}
                      <div className="pt-3.5 border-t border-zinc-100 flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-bold text-zinc-500 mr-1 flex items-center gap-1">
                          <ChevronRight className="w-3.5 h-3.5 text-[#ff5500]" />
                          Tech Stack:
                        </span>
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* Pendidikan Section */}
                <div className="relative border-l-2 border-zinc-200 ml-3 md:ml-6 space-y-6">
                  {education.map((edu: EducationItem, idx: number) => (
                    <div key={idx} className="relative pl-6 md:pl-8 group">
                      {/* Timeline Pin/Dot */}
                      <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-2 border-[#ff5500] group-hover:bg-[#ff5500] transition-colors shadow-xs" />

                      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/90 hover:border-orange-300 hover:shadow-md transition-all duration-200 shadow-xs">
                        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 mb-3">
                          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                            <div className="w-10 h-10 rounded-full bg-orange-50 text-[#ff5500] flex items-center justify-center shrink-0 border border-orange-200/60 mx-auto sm:mx-0">
                              <GraduationCap className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                                {edu.degree}
                              </h3>
                              <div className="text-xs sm:text-sm font-medium text-zinc-600">
                                {edu.field}
                              </div>
                            </div>
                          </div>

                          <span className="flex items-center justify-center sm:justify-start gap-1 text-xs text-zinc-500 font-medium">
                            <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                            {edu.period}
                          </span>
                        </div>

                        <div className="mt-3 pt-3 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 text-xs text-zinc-500 text-center sm:text-left">
                          <span className="font-semibold text-zinc-700">{edu.institution}</span>
                          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200">
                            Formal Degree
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sertifikasi Section */}
                <div className="pt-2">
                  <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#ff5500]" />
                    Sertifikasi & Pelatihan
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {certifications.map((cert: CertificationItem, idx: number) => {
                      const isMikrotik = cert.iconType === "mikrotik" || cert.issuer.toLowerCase().includes("mikrotik");
                      const isAzure = cert.iconType === "azure" || cert.issuer.toLowerCase().includes("microsoft");

                      return (
                        <div
                          key={idx}
                          className="p-5 rounded-2xl bg-white border border-zinc-200/90 hover:border-orange-300 hover:shadow-md transition-all duration-200 shadow-xs flex items-start gap-4"
                        >
                          <div
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${isMikrotik
                              ? "bg-zinc-950 text-white border-zinc-800"
                              : isAzure
                                ? "bg-[#0078D4]/10 text-[#0078D4] border-[#0078D4]/20"
                                : "bg-amber-50 text-amber-700 border-amber-200/60"
                              }`}
                          >
                            {isMikrotik ? (
                              <SiMikrotik className="w-6 h-6" />
                            ) : isAzure ? (
                              <TbBrandAzure className="w-7 h-7 stroke-[2]" />
                            ) : (
                              <Award className="w-6 h-6" />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-xs sm:text-sm font-bold text-zinc-950 leading-snug">
                              {cert.name}
                            </h4>
                            <div className="text-xs text-zinc-600 mt-1 font-medium flex items-center gap-2">
                              <span>{cert.issuer}</span>
                              <span className="text-zinc-300">•</span>
                              <span className="text-zinc-500">Tahun {cert.year}</span>
                            </div>
                            {cert.credential && (
                              <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 border border-zinc-200 text-[11px] font-mono font-medium">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span>Credential: {cert.credential}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
