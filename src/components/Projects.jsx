import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { projects } from "../data/mock";

const accentMap = {
  teal: { bg: "#A8C9C1", text: "#1F2937" },
  coral: { bg: "#E07856", text: "#F8F6F2" },
  lavender: { bg: "#C3B1D5", text: "#1F2937" },
  mustard: { bg: "#E6C068", text: "#1F2937" }
};

const tapeMap = {
  teal: "#A8C9C1",
  coral: "#E07856",
  lavender: "#C3B1D5",
  mustard: "#E6C068"
};

const ProjectCard = ({ p, index }) => {
  const accent = accentMap[p.accent];
  const tapeColor = tapeMap[p.tapeColor];
  const isLeft = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50, rotate: p.tilt - 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: p.tilt }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      whileHover={{ rotate: 0, y: -6 }}
      className={`relative bg-[#FFFCF5] p-6 md:p-8 shadow-[8px_10px_30px_-10px_rgba(31,41,55,0.25)] border border-[#1F2937]/10 ${
        isLeft ? "md:col-start-1 md:col-end-7" : "md:col-start-6 md:col-end-12 md:mt-16"
      }`}
      style={{ willChange: "transform" }}
    >
      {/* tape strips */}
      <div
        className="absolute -top-4 left-8 w-24 h-7 rotate-[-8deg] opacity-80 shadow-sm"
        style={{ background: tapeColor }}
      />
      <div
        className="absolute -top-3 right-10 w-16 h-6 rotate-[10deg] opacity-70 shadow-sm"
        style={{ background: tapeColor }}
      />

      {/* corner badge */}
      <div className="absolute top-4 right-4 text-[10px] tracking-widest uppercase text-[#1F2937]/40">
        {p.year}
      </div>

      <div className="mb-4 flex items-center gap-2">
        <span
          className="inline-block w-10 h-10 flex items-center justify-center font-caveat text-xl rounded-full"
          style={{ background: accent.bg, color: accent.text }}
        >
          0{p.id}
        </span>
        <span className="font-caveat text-lg text-[#1F2937]/60 rotate-[-2deg]">
          — {p.annotation}
        </span>
      </div>

      <h3 className="font-caveat text-4xl md:text-5xl text-[#1F2937] leading-none mb-1">
        {p.title}
      </h3>
      <p className="text-sm uppercase tracking-[0.15em] text-[#1F2937]/60 mb-4">
        {p.subtitle}
      </p>

      <p className="font-inter text-[#1F2937]/85 leading-[1.7] text-[15px] mb-5">
        {p.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {p.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 border border-[#1F2937]/25 bg-[#F8F6F2] text-[#1F2937]/80"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={p.link}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#1F2937] border-b-2 border-[#1F2937] pb-0.5 hover:text-[#E07856] hover:border-[#E07856] transition-colors"
      >
        open repo
        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-28 md:py-36 overflow-hidden bg-[#F3EFE7]">
      <div className="absolute inset-0 paper-texture pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end gap-4 mb-6">
          <span className="font-caveat text-5xl text-[#A8C9C1] rotate-[-4deg] inline-block">page 03</span>
          <div className="h-[2px] flex-1 bg-[#1F2937]/15 mb-3"></div>
          <span className="text-xs tracking-[0.2em] uppercase text-[#1F2937]/50">featured projects</span>
        </div>

        <div className="mb-14 max-w-2xl">
          <h2 className="font-caveat text-5xl md:text-6xl text-[#1F2937] leading-tight">
            things i’ve 
            <span className="relative inline-block rotate-[-2deg]">
              <span className="relative z-10">built & broken</span>
              <span className="absolute left-0 right-0 bottom-2 h-4 bg-[#E07856]/40 -z-0"></span>
            </span>
          </h2>
          <p className="mt-3 text-[#1F2937]/70 max-w-xl">
            A handful of projects where I’ve actually shipped something. Each one started as a messy sketch
            in a notebook somewhere.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <ProjectCard p={p} index={i} key={p.id} />
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center gap-3">
          <Star size={14} className="text-[#E07856]" />
          <span className="font-caveat text-2xl text-[#1F2937]/70">more in progress…</span>
          <Star size={14} className="text-[#E07856]" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
