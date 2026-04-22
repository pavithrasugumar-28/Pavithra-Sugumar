import React from "react";
import { Heart } from "lucide-react";
import { personalInfo } from "../data/mock";

const Footer = () => {
  return (
    <footer className="relative bg-[#1F2937] text-[#F8F6F2]/80 pt-12 pb-8 overflow-hidden">
      {/* torn-paper top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-4 bg-[#F3EFE7]"
        style={{
          clipPath:
            "polygon(0 0, 4% 60%, 8% 20%, 14% 80%, 20% 30%, 26% 70%, 32% 20%, 38% 80%, 44% 30%, 50% 70%, 56% 20%, 62% 80%, 68% 30%, 74% 70%, 80% 20%, 86% 80%, 92% 30%, 96% 70%, 100% 0)"
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6">
          <div>
            <div className="font-caveat text-4xl text-[#F8F6F2] leading-none rotate-[-3deg] inline-block">
              pavithra.
            </div>
            <p className="text-sm text-[#F8F6F2]/60 mt-2 max-w-sm">
              A scrapbook of ideas, experiments, and projects — always a work in progress.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <a href={`mailto:${personalInfo.email}`} className="hover:text-[#E07856] transition-colors">
              email
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-[#E07856] transition-colors">
              github
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#E07856] transition-colors">
              linkedin
            </a>
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#F8F6F2]/40"
          style={{
            borderTop: "1px dashed rgba(248,246,242,0.2)"
          }}
        >
          <p>
            © {new Date().getFullYear()} — {personalInfo.fullName}. stitched together with 
            <Heart size={12} className="inline -mt-0.5 text-[#E07856]" /> and curiosity.
          </p>
          <p className="font-caveat text-lg text-[#F8F6F2]/60">end of notebook.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
