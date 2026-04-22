import React from "react";
import { motion } from "framer-motion";
import { Star, Leaf, Lightbulb, BookOpen } from "lucide-react";
import { timeline } from "../data/mock";

const markerIcon = {
  star: Star,
  leaf: Leaf,
  bulb: Lightbulb,
  book: BookOpen
};

const Timeline = () => {
  return (
    <section id="journey" className="relative py-28 md:py-36 overflow-hidden bg-[#F3EFE7]">
      <div className="absolute inset-0 paper-texture pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end gap-4 mb-6">
          <span className="font-caveat text-5xl text-[#E07856] rotate-[-4deg] inline-block">page 05</span>
          <div className="h-[2px] flex-1 bg-[#1F2937]/15 mb-3"></div>
          <span className="text-xs tracking-[0.2em] uppercase text-[#1F2937]/50">the journey</span>
        </div>

        <div className="mb-16 max-w-2xl">
          <h2 className="font-caveat text-5xl md:text-6xl text-[#1F2937] leading-tight">
            a <span className="relative inline-block rotate-[-1deg]">
              <span className="relative z-10">rough map</span>
              <span className="absolute left-0 right-0 bottom-2 h-4 bg-[#A8C9C1]/60 -z-0"></span>
            </span> of how i got here
          </h2>
          <p className="mt-3 text-[#1F2937]/70">
            Drawn with a leaky pen. Not to scale.
          </p>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* vertical dashed path */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, #1F2937 0 6px, transparent 6px 14px)"
            }}
          />

          <div className="space-y-16">
            {timeline.map((m, i) => {
              const Icon = markerIcon[m.marker] || Star;
              const isLeft = m.side === "left";

              return (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="relative"
                >
                  {/* marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-3 w-10 h-10 rounded-full bg-[#FFFCF5] border-2 border-[#1F2937] flex items-center justify-center shadow-md z-10">
                    <Icon size={16} className="text-[#1F2937]" />
                  </div>

                  <div
                    className={`md:w-[46%] ${
                      isLeft ? "md:mr-auto md:pr-10 md:text-right" : "md:ml-auto md:pl-10"
                    } pl-12 md:pl-10`}
                  >
                    <motion.div
                      whileHover={{ rotate: 0, y: -2 }}
                      className={`relative bg-[#FFFCF5] p-5 md:p-6 shadow-[5px_6px_20px_-8px_rgba(31,41,55,0.25)] border border-[#1F2937]/10 ${
                        isLeft ? "md:rotate-[-1.5deg]" : "md:rotate-[1.5deg]"
                      }`}
                    >
                      <span className="inline-block font-caveat text-lg text-[#E07856] mb-1">
                        {m.date}
                      </span>
                      <h3 className="font-inter font-semibold text-[#1F2937] text-lg">
                        {m.title}
                      </h3>
                      <p className="text-sm text-[#1F2937]/60 italic mb-2">{m.org}</p>
                      <p className="text-[14px] text-[#1F2937]/80 leading-relaxed">{m.note}</p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* end dot */}
          <div className="relative md:flex md:justify-center mt-6">
            <div className="absolute left-4 md:static md:translate-x-0 md:left-auto md:top-auto -translate-x-1/2 w-5 h-5 rounded-full bg-[#E07856] border-2 border-[#1F2937]"></div>
            <span className="font-caveat text-xl text-[#1F2937]/70 md:ml-3 pl-12 md:pl-0">
              … and more to come
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
