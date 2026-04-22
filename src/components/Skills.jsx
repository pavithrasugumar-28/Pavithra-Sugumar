import React from "react";
import { motion } from "framer-motion";
import { skillGroups } from "../data/mock";

const colorMap = {
  teal: { bg: "#A8C9C1", border: "#1F2937" },
  coral: { bg: "#E07856", border: "#1F2937" },
  lavender: { bg: "#C3B1D5", border: "#1F2937" },
  mustard: { bg: "#E6C068", border: "#1F2937" }
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 paper-texture pointer-events-none"></div>

      {/* cork-board dots */}
      <div className="absolute top-40 left-10 w-3 h-3 rounded-full bg-[#E07856]/60"></div>
      <div className="absolute bottom-40 right-20 w-3 h-3 rounded-full bg-[#A8C9C1]/60"></div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end gap-4 mb-6">
          <span className="font-caveat text-5xl text-[#C3B1D5] rotate-[-4deg] inline-block">page 04</span>
          <div className="h-[2px] flex-1 bg-[#1F2937]/15 mb-3"></div>
          <span className="text-xs tracking-[0.2em] uppercase text-[#1F2937]/50">tools & skills</span>
        </div>

        <div className="mb-14 max-w-2xl">
          <h2 className="font-caveat text-5xl md:text-6xl text-[#1F2937] leading-tight">
            the <span className="relative inline-block rotate-[-1deg]">
              <span className="relative z-10">toolbox</span>
              <span className="absolute left-0 right-0 bottom-2 h-4 bg-[#E6C068]/60 -z-0"></span>
            </span> on my desk
          </h2>
          <p className="mt-3 text-[#1F2937]/70">
            Pinned notes from a pinboard. A little messy, mostly useful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {skillGroups.map((group, gi) => {
            const c = colorMap[group.color] || colorMap.teal;
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 30, rotate: gi % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: gi % 2 === 0 ? -1.5 : 1.5 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: gi * 0.05 }}
                whileHover={{ rotate: 0, y: -4 }}
                className="relative bg-[#FFFCF5] p-6 border border-[#1F2937]/10 shadow-[4px_6px_20px_-6px_rgba(31,41,55,0.2)]"
              >
                {/* pin */}
                <div
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full shadow-inner"
                  style={{ background: c.bg, border: `2px solid ${c.border}` }}
                ></div>

                <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-dashed border-[#1F2937]/20">
                  <h3 className="font-caveat text-3xl text-[#1F2937]">{group.label}</h3>
                  <span className="text-[10px] tracking-widest uppercase text-[#1F2937]/40">
                    {group.items.length} items
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 border border-[#1F2937]/25 bg-[#F8F6F2] hover:bg-[#1F2937] hover:text-[#F8F6F2] transition-colors duration-200 cursor-default"
                      style={{ transform: `rotate(${i % 2 === 0 ? "-1" : "1"}deg)` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
