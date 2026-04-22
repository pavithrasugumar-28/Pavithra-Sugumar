import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { personalInfo } from "../data/mock";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen pt-28 pb-16 overflow-hidden">
      {/* paper grain / texture overlay */}
      <div className="absolute inset-0 paper-texture pointer-events-none"></div>

      {/* floating background shapes */}
      <div className="absolute top-24 -left-10 w-56 h-56 rounded-full bg-[#A8C9C1]/30 blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 rounded-full bg-[#E07856]/20 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-[#C3B1D5]/25 blur-2xl" />

      {/* small floating notes */}
      <motion.div
        initial={{ y: 8, rotate: -6 }}
        animate={{ y: [-4, 6, -4], rotate: [-6, -4, -6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute top-36 right-10 bg-[#E6C068]/80 px-4 py-3 shadow-[4px_4px_0px_0px_rgba(31,41,55,0.15)] rotate-[-6deg] z-10"
      >
        <p className="font-caveat text-xl text-[#1F2937]">building…</p>
        <p className="font-caveat text-base text-[#1F2937]/70">always building ✨</p>
      </motion.div>

      <motion.div
        initial={{ y: 8, rotate: 4 }}
        animate={{ y: [6, -4, 6], rotate: [4, 2, 4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute bottom-28 left-16 bg-[#A8C9C1]/80 px-4 py-3 shadow-[4px_4px_0px_0px_rgba(31,41,55,0.15)] rotate-[5deg] z-10"
      >
        <p className="font-caveat text-xl text-[#1F2937]">Chennai → the world</p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-12 md:pt-20">
        {/* top eyebrow with tape */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="relative inline-block mb-8"
        >
          <span className="absolute -top-3 -left-6 w-16 h-6 bg-[#E07856]/70 rotate-[-18deg] shadow-sm"></span>
          <div className="relative bg-[#F8F6F2] border border-[#1F2937]/15 px-4 py-1.5 text-xs tracking-[0.18em] uppercase text-[#1F2937]/70">
            <Sparkles size={12} className="inline mr-2 -mt-0.5" />
            page 01 — hello
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-caveat text-7xl sm:text-8xl md:text-[10rem] leading-[0.9] text-[#1F2937]"
        >
          Hi, I’m 
          <span className="inline-block rotate-[-3deg]">
            <span className="relative">
              <span className="relative z-10">{personalInfo.name}</span>
              <span className="absolute left-0 right-0 bottom-3 h-5 bg-[#E6C068]/70 -z-0"></span>
            </span>
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 md:mt-10 max-w-2xl"
        >
          <p className="font-inter text-lg md:text-xl text-[#1F2937]/80 leading-relaxed">
            {personalInfo.tagline}
          </p>
          <p className="font-inter text-sm md:text-base text-[#1F2937]/60 mt-3 max-w-xl">
            A computer science undergrad from Chennai, building things at the intersection
            of AI, the web, and curiosity. This is my notebook — ideas, experiments, projects, and
            everything in between.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#1F2937] text-[#F8F6F2] text-sm font-medium shadow-[4px_4px_0px_0px_#E07856] hover:shadow-[2px_2px_0px_0px_#E07856] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
          >
            Flip through projects
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 border-2 border-[#1F2937] text-[#1F2937] text-sm font-medium bg-[#F8F6F2] hover:bg-[#1F2937] hover:text-[#F8F6F2] transition-colors duration-200"
          >
            Say hello
          </a>
        </motion.div>

        {/* scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex items-center gap-3 text-[#1F2937]/50"
        >
          <div className="w-14 h-[1px] bg-[#1F2937]/30"></div>
          <span className="font-caveat text-lg">turn the page</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
