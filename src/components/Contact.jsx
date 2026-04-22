import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, Check } from "lucide-react";
import { personalInfo } from "../data/mock";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast({
        title: "Almost there…",
        description: "Please fill all the fields."
      });
      return;
    }

    // 🔹 Your WhatsApp number (change if needed)
    const phoneNumber = "917010973849";

    // Create message
    const text = `Hello Pavithra!

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`;

    const encodedText = encodeURIComponent(text);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    setSent(true);

    toast({
      title: "Opening WhatsApp ✨",
      description: "Your message is ready to send."
    });

    // Clear form
    setTimeout(() => {
      setSent(false);
      setForm({
        name: "",
        email: "",
        message: ""
      });
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden bg-[#F3EFE7]">
      <div className="absolute inset-0 paper-texture pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">

        <div className="flex items-end gap-4 mb-6">
          <span className="font-caveat text-5xl text-[#A8C9C1] rotate-[-4deg] inline-block">
            page 07
          </span>
          <div className="h-[2px] flex-1 bg-[#1F2937]/15 mb-3"></div>
          <span className="text-xs tracking-[0.2em] uppercase text-[#1F2937]/50">
            the last page
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 relative"
          >

            <div className="relative bg-[#FFFCF5] p-8 md:p-10 shadow-lg border border-[#1F2937]/10">

              <h2 className="font-caveat text-4xl md:text-5xl text-[#1F2937] mb-2">
                Write me a note
              </h2>

              <p className="text-sm text-[#1F2937]/60 mb-6">
                Collaborations, internships, random ideas — I’m all ears.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#1F2937]/60 mb-1">
                    Your name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-[#1F2937]/30 focus:border-[#E07856] outline-none py-2"
                    placeholder="e.g. Aditi"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#1F2937]/60 mb-1">
                    Your email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-[#1F2937]/30 focus:border-[#E07856] outline-none py-2"
                    placeholder="name@somewhere.com"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#1F2937]/60 mb-1">
                    What’s on your mind?
                  </label>

                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-[#1F2937]/30 focus:border-[#E07856] outline-none py-2 resize-none"
                    placeholder="Tell me about it…"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#1F2937] text-[#F8F6F2] text-sm font-medium shadow-[4px_4px_0px_0px_#E07856] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
                >
                  {sent ? <Check size={16} /> : <Send size={14} />}
                  {sent ? "Opening WhatsApp" : "Send note"}
                </button>

              </form>

            </div>

          </motion.div>

          {/* Contact Info Card */}

          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-5 space-y-6"
          >

            <div className="relative bg-[#E6C068]/90 p-7 border-2 border-[#1F2937]">

              <p className="text-[10px] uppercase tracking-[0.2em] text-[#1F2937]/70 mb-2">
                from the desk of
              </p>

              <h3 className="font-caveat text-4xl text-[#1F2937] mb-4">
                {personalInfo.fullName}
              </h3>

              <ul className="space-y-3 text-sm text-[#1F2937]">

                <li className="flex items-center gap-3">
                  <Mail size={16} />
                  <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=pavithrasugumar28@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-[#E07856]"
                  >
                    pavithrasugumar28@gmail.com
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <MapPin size={16} />
                  {personalInfo.location}
                </li>

                <li className="flex items-center gap-3">
                  <Github size={16} />
                  <a
                  href="https://github.com/pavithrasugumar-28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-[#E07856]"
                  >
                    github.com/pavithrasugumar-28
                    </a>
                </li>

                <li className="flex items-center gap-3">
                  <Linkedin size={16} />
                    <a
                    href="https://www.linkedin.com/in/pavithrasugumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-[#E07856]"
                    >
                      linkedin.com/in/pavithrasugumar
                      </a>
                      </li>

              </ul>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;