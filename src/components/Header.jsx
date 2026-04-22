import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "../data/mock";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#F8F6F2]/90 backdrop-blur-md border-b border-[#1F2937]/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#top" className="group flex items-center gap-2">
          <span className="font-caveat text-3xl text-[#1F2937] leading-none rotate-[-4deg] inline-block group-hover:rotate-[2deg] transition-transform duration-300">
            {personalInfo.name.toLowerCase()}.
          </span>
          <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-[#E07856]"></span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[13px] tracking-wide uppercase text-[#1F2937]/70 hover:text-[#1F2937] transition-colors"
              style={{ transform: `rotate(${i % 2 === 0 ? "-1" : "1"}deg)` }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-[6px] w-full bg-[#E6C068]/50 -z-10 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 border-2 border-[#1F2937] rounded-md text-sm font-medium bg-[#F8F6F2] hover:bg-[#1F2937] hover:text-[#F8F6F2] transition-colors duration-200 shadow-[3px_3px_0px_0px_#1F2937] hover:shadow-[1px_1px_0px_0px_#1F2937] hover:translate-x-[2px] hover:translate-y-[2px]"
        >
          Say hi
        </a>

        <button
          className="md:hidden p-2 text-[#1F2937]"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#F8F6F2] border-t border-[#1F2937]/10 px-6 py-4 flex flex-col gap-3"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#1F2937]/80 hover:text-[#1F2937] py-1 text-sm uppercase tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
