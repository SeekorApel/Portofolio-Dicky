"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiPhp,
  SiJavascript,
  SiDotnet,
  SiSpring,
  SiCodeigniter,
  SiAngular,
  SiMysql,
  SiRedis,
  SiGit,
  SiGitlab,
  SiBitbucket,
} from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { FaJava } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { Layers } from "lucide-react";
import { portfolioData, SkillItem } from "@/data/portfolioData";

export default function Skills() {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "TbBrandCSharp":
        return <TbBrandCSharp className="w-6 h-6 text-[#9B4F96] stroke-[2.2] group-hover:scale-110 transition-transform" />;
      case "FaJava":
        return <FaJava className="w-6 h-6 text-[#E76F00] group-hover:scale-110 transition-transform" />;
      case "SiPhp":
        return <SiPhp className="w-6 h-6 text-[#777BB4] group-hover:scale-110 transition-transform" />;
      case "SiJavascript":
        return <SiJavascript className="w-6 h-6 text-[#E5A910] group-hover:scale-110 transition-transform" />;
      case "SiDotnet":
        return <SiDotnet className="w-6 h-6 text-[#512BD4] group-hover:scale-110 transition-transform" />;
      case "SiSpring":
        return <SiSpring className="w-6 h-6 text-[#6DB33F] group-hover:scale-110 transition-transform" />;
      case "SiCodeigniter":
        return <SiCodeigniter className="w-6 h-6 text-[#EE4623] group-hover:scale-110 transition-transform" />;
      case "SiAngular":
        return <SiAngular className="w-6 h-6 text-[#DD0031] group-hover:scale-110 transition-transform" />;
      case "DiMsqlServer":
        return <DiMsqlServer className="w-7 h-7 text-[#CC292B] group-hover:scale-110 transition-transform" />;
      case "SiMysql":
        return <SiMysql className="w-6 h-6 text-[#4479A1] group-hover:scale-110 transition-transform" />;
      case "GrOracle":
        return <GrOracle className="w-6 h-6 text-[#F80000] group-hover:scale-110 transition-transform" />;
      case "SiRedis":
        return <SiRedis className="w-6 h-6 text-[#DC382D] group-hover:scale-110 transition-transform" />;
      case "SiGit":
        return <SiGit className="w-6 h-6 text-[#F05032] group-hover:scale-110 transition-transform" />;
      case "SiGitlab":
        return <SiGitlab className="w-6 h-6 text-[#FC6D26] group-hover:scale-110 transition-transform" />;
      case "SiBitbucket":
        return <SiBitbucket className="w-6 h-6 text-[#0052CC] group-hover:scale-110 transition-transform" />;
      default:
        return <Layers className="w-6 h-6 text-[#ff5500] group-hover:scale-110 transition-transform" />;
    }
  };

  const getCategoryShort = (cat: string) => {
    if (cat.includes("Programming")) return "Programming";
    if (cat.includes("Database")) return "Database";
    if (cat.includes("Tools")) return "Dev Tools";
    return cat;
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center py-20 md:py-28 bg-[#09090b] bg-grid-dark text-white relative border-b border-zinc-800"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">

        {/* Section Header */}
        <div className="mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900 text-orange-400 border border-zinc-800 mb-3">
            <Layers className="w-3.5 h-3.5" />
            Stack & Tooling
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Keahlian Teknis & Ekosistem
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
            Kombinasi bahasa pemrograman, framework, dan tools yang saya gunakan untuk membangun solusi perangkat lunak yang skalabel dan siap produksi.
          </p>
        </div>

        {/* Skills Grid: Solid Crisp White Cards inspired by Raffialdo Bayu reference */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {portfolioData.skills.map((skill: SkillItem, index: number) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="group relative p-4 rounded-2xl bg-white text-zinc-900 shadow-md hover:shadow-xl hover:-translate-y-1 border border-zinc-100 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-orange-50 transition-colors">
                  {renderIcon(skill.iconName)}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs sm:text-sm font-bold text-zinc-900 truncate group-hover:text-[#ff5500] transition-colors" title={skill.name}>
                    {skill.name}
                  </h3>
                  <span className="text-[10px] text-zinc-500 uppercase font-semibold tracking-wider block mt-0.5 truncate">
                    {getCategoryShort(skill.category)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
