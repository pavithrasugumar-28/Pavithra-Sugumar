import React from "react";
import { motion } from "framer-motion";
import { Coffee, Lightbulb, Heart } from "lucide-react";
import { aboutNarrative, personalInfo } from "../data/mock";

const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 paper-texture pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        {/* Section number */}
        <div className="flex items-end gap-4 mb-14">
          <span className="font-caveat text-5xl text-[#E07856] rotate-[-4deg] inline-block">page 02</span>
          <div className="h-[2px] flex-1 bg-[#1F2937]/15 mb-3"></div>
          <span className="text-xs tracking-[0.2em] uppercase text-[#1F2937]/50">who i am</span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Sticky note */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 relative"
          >
            {/* tape */}
            <div className="absolute -top-4 left-10 w-24 h-6 bg-[#E6C068]/70 rotate-[-6deg] shadow-sm"></div>
            <div className="absolute -top-4 right-16 w-20 h-6 bg-[#A8C9C1]/70 rotate-[8deg] shadow-sm"></div>

            <div className="bg-[#FFF8D6] p-8 md:p-12 shadow-[6px_6px_0px_0px_rgba(31,41,55,0.15)]">
              <h2 className="font-caveat text-4xl md:text-5xl text-[#1F2937] mb-4">
                {aboutNarrative.greeting}
              </h2>
              <p className="font-inter text-[#1F2937]/85 text-base md:text-lg leading-[1.8]">
                I’m a Computer Science undergraduate who loves turning half-formed ideas into working prototypes.
                My playground sits somewhere between 
                <mark className="bg-[#A8C9C1]/60 px-1">artificial intelligence</mark>, 
                <mark className="bg-[#E07856]/40 px-1">full-stack web</mark> and a notebook full of sketches. I’ve built
                Tamil-language chatbots, emergency medical platforms, and bioinformatics models — each one
                starting as a scribble before becoming a system.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {aboutNarrative.highlights.map((h) => (
                  <span
                    key={h}
                    className="font-caveat text-xl text-[#1F2937] px-2 py-0.5 border border-[#1F2937]/30 rotate-[-1deg] bg-[#F8F6F2]"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column — stats + fun facts */}
          <div className="md:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative bg-[#F8F6F2] border-2 border-[#1F2937]/80 p-6 shadow-[5px_5px_0px_0px_#E07856]"
            >
              <div className="absolute -top-3 -right-3 w-16 h-5 bg-[#C3B1D5]/80 rotate-[15deg]"></div>
              <p className="text-xs uppercase tracking-widest text-[#1F2937]/50 mb-3">at a glance</p>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-dashed border-[#1F2937]/20 pb-2">
                  <dt className="text-[#1F2937]/60">Studying</dt>
                  <dd className="text-[#1F2937] font-medium">{personalInfo.degree}</dd>
                </div>
                <div className="flex justify-between border-b border-dashed border-[#1F2937]/20 pb-2">
                  <dt className="text-[#1F2937]/60">At</dt>
                  <dd className="text-[#1F2937] font-medium">{personalInfo.college}</dd>
                </div>
                <div className="flex justify-between border-b border-dashed border-[#1F2937]/20 pb-2">
                  <dt className="text-[#1F2937]/60">CGPA</dt>
                  <dd className="text-[#1F2937] font-medium">{personalInfo.cgpa}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#1F2937]/60">Based in</dt>
                  <dd className="text-[#1F2937] font-medium">Chennai, IN</dd>
                </div>
              </dl>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[#F8F6F2] p-6 border-l-4 border-[#A8C9C1] shadow-md"
            >
              <p className="text-xs uppercase tracking-widest text-[#1F2937]/50 mb-3">margin notes</p>
              <ul className="space-y-3 text-sm font-inter text-[#1F2937]/80">
                {aboutNarrative.funFacts.map((f, i) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-0.5 text-[#E07856]">
                      {i === 0 ? <Lightbulb size={16} /> : i === 1 ? <Coffee size={16} /> : <Heart size={16} />}
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
