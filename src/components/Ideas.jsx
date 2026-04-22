import React from "react";
import { motion } from "framer-motion";
import { PencilLine } from "lucide-react";
import { ideas } from "../data/mock";

const colorMap = {
  teal: "#A8C9C1",
  coral: "#E07856",
  lavender: "#C3B1D5",
  mustard: "#E6C068"
};

const Ideas = () => {
  return (
    <section id="ideas" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 paper-texture pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end gap-4 mb-6">
          <span className="font-caveat text-5xl text-[#E6C068] rotate-[-4deg] inline-block">page 06</span>
          <div className="h-[2px] flex-1 bg-[#1F2937]/15 mb-3"></div>
          <span className="text-xs tracking-[0.2em] uppercase text-[#1F2937]/50">ideas & experiments</span>
        </div>

        <div className="mb-14 max-w-2xl">
          <h2 className="font-caveat text-5xl md:text-6xl text-[#1F2937] leading-tight">
            half-baked <span className="relative inline-block rotate-[2deg]">
              <span className="relative z-10">sketches</span>
              <span className="absolute left-0 right-0 bottom-2 h-4 bg-[#C3B1D5]/60 -z-0"></span>
            </span>
          </h2>
          <p className="mt-3 text-[#1F2937]/70">
            Rough ideas I’m nursing back to life. Some become projects, some stay in the margin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {ideas.map((idea, i) => {
            const c = colorMap[idea.color];
            return (
              <motion.div
                key={idea.id}
                initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                whileHover={{ rotate: 0, y: -4 }}
                className="relative p-7 md:p-8 shadow-[6px_8px_24px_-8px_rgba(31,41,55,0.25)] border border-[#1F2937]/10"
                style={{ background: "#FFFCF5" }}
              >
                {/* corner tab */}
                <div
                  className="absolute top-0 right-0 w-0 h-0"
                  style={{
                    borderStyle: "solid",
                    borderWidth: "0 32px 32px 0",
                    borderColor: `transparent ${c} transparent transparent`
                  }}
                />

                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 flex items-center justify-center rounded-full"
                    style={{ background: c }}
                  >
                    <PencilLine size={14} className="text-[#1F2937]" />
                  </div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#1F2937]/50">
                    status — {idea.status}
                  </span>
                </div>

                <h3 className="font-caveat text-3xl md:text-4xl text-[#1F2937] mb-3 leading-tight">
                  {idea.title}
                </h3>
                <p className="font-inter text-[15px] text-[#1F2937]/80 leading-[1.7]">
                  {idea.description}
                </p>

                {/* doodle underline */}
                <svg className="mt-5 w-32 h-3 opacity-60" viewBox="0 0 120 12" fill="none">
                  <path
                    d="M2 8 Q 20 2, 40 6 T 80 6 T 118 5"
                    stroke={c}
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ideas;
