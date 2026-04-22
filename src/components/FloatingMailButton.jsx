import React from "react";
import { Mail } from "lucide-react";

const FloatingMailButton = () => {

  // Your email
  const email = "pavithrasugumar28@gmail.com";

  // Gmail compose link
  const gmailLink =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <a
      href={gmailLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >

      {/* Glow */}
      <div className="relative">

        <div className="absolute inset-0 rounded-full bg-[#E07856] blur-md opacity-40 group-hover:opacity-70 transition"></div>

        {/* Button */}
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#E07856] text-white shadow-[4px_4px_0px_0px_#1F2937] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200">

          <Mail size={22} />

        </div>

      </div>

    </a>
  );
};

export default FloatingMailButton;