"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars, Xmark, ArrowDownToLine } from "@gravity-ui/icons";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

// ব্র্যান্ড লোগোতে যে টেক্সটগুলো পর্যায়ক্রমে টাইপ হবে
const brandPhrases = ["Mrinmoy.", "Mrinmoy Sana.", "<Mrinmoy />"];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Brand Logo Typewriter States
  const [logoText, setLogoText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = brandPhrases[phraseIndex];
    const typingSpeed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting && logoText === currentPhrase) {
        // পুরো নাম টাইপ হওয়ার পর ২ সেকেন্ড অপেক্ষা করবে
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && logoText === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % brandPhrases.length);
      } else {
        setLogoText(
          currentPhrase.substring(0, logoText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [logoText, isDeleting, phraseIndex]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-5 left-0 right-0 z-50 px-6"
    >
      <div className="max-w-6xl mx-auto px-6 py-3.5 rounded-2xl bg-slate-900/65 backdrop-blur-xl border border-slate-800/90 shadow-lg flex items-center justify-between">
        {/* Brand Logo with Typewriter Effect */}
        <a
          href="#"
          className="text-xl font-extrabold tracking-tight text-white inline-flex items-center min-w-[155px]"
        >
          <span className="bg-gradient-to-r from-white via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
            {logoText}
          </span>
          <span className="inline-block w-[2.5px] h-5 bg-cyan-400 ml-1 animate-pulse" />
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Download Resume Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            download="Mrinmoy_Sana_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-slate-950/90 border border-cyan-400/60 shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:border-cyan-400 text-white text-sm font-medium transition-all group"
          >
            <span>Download Resume</span>
            <ArrowDownToLine className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-1.5"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <Xmark className="w-6 h-6" />
          ) : (
            <Bars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden max-w-6xl mx-auto mt-2 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl px-6 py-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400 py-1 font-medium text-sm"
              >
                {link.name}
              </a>
            ))}

            {/* Download Resume Button (Mobile) */}
            <a
              href="/resume.pdf"
              download="Mrinmoy_Sana_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 border border-cyan-400/60 text-white text-sm font-medium"
            >
              <span>Download Resume</span>
              <ArrowDownToLine className="w-4 h-4 text-cyan-400" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}