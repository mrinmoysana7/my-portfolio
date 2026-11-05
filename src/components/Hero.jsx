// "use client";
// import { motion } from "framer-motion";
// import { ArrowRight, Briefcase, Sparkles, Envelope } from "@gravity-ui/icons";

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
//     >
//       {/* Background Glow Effects */}
//       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

//       <div className="max-w-4xl mx-auto text-center z-10">
//         {/* Status Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-indigo-400 text-xs sm:text-sm font-medium mb-6"
//         >
//           <Sparkles className="w-4 h-4" />
//           <span>Sr. Talent Acquisition Executive & Full-Stack Developer</span>
//         </motion.div>

//         {/* Main Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6"
//         >
//           Hi, I&apos;m{" "}
//           <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
//             Mrinmoy Sana
//           </span>
//         </motion.h1>

//         {/* Subtitle / Headline */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
//         >
//           Sr. Talent Acquisition Executive @{" "}
//           <span className="text-slate-200 font-semibold">eNexaHire</span> | Tech & Core
//           Recruitment Specialist | Full-Stack Developer{" "}
//           <span className="text-indigo-400 font-medium">(React / Next.js)</span>. Helping
//           growth-focused organizations scale by speaking the same language as the
//           developers I hire.
//         </motion.p>

//         {/* Action Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="flex flex-wrap items-center justify-center gap-4"
//         >
//           <a
//             href="#projects"
//             className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-lg shadow-indigo-600/25"
//           >
//             <Briefcase className="w-4 h-4" />
//             View Featured Projects
//             <ArrowRight className="w-4 h-4" />
//           </a>

//           <a
//             href="#contact"
//             className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium transition-all"
//           >
//             <Envelope className="w-4 h-4" />
//             Let&apos;s Connect
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Envelope } from "@gravity-ui/icons";

const typewriterPhrases = [
  "Connecting Great Talent.",
  "Scaling Tech Teams.",
  "Crafting Full-Stack Apps.",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Custom Smooth Typewriter Effect
  useEffect(() => {
    const currentPhrase = typewriterPhrases[phraseIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
      } else {
        setText(
          currentPhrase.substring(0, text.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden bg-[#060918]"
    >
      {/* Subtle Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* ================= LEFT COLUMN: TEXT & CTA ================= */}
        <div className="lg:col-span-7 text-left">
          {/* Gradient Border Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-[1px] rounded-full bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 mb-6"
          >
            <div className="px-4 py-1.5 rounded-full bg-[#080c20] text-slate-300 text-xs sm:text-sm font-medium tracking-wide">
              <span>Sr. Talent Acquisition Executive</span>
              <span className="mx-2 text-indigo-400">|</span>
              <span>Full-Stack Developer</span>
            </div>
          </motion.div>

          {/* Greeting Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-medium text-slate-400 mb-3"
          >
            Hi, I&apos;m Mrinmoy Sana.
          </motion.p>

          {/* Main Heading with Typewriter Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 min-h-[120px] sm:min-h-[145px]"
          >
            Building Digital Experiences.{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {text}
            </span>
            <span className="inline-block w-[3px] h-9 sm:h-12 bg-cyan-400 ml-1.5 align-middle animate-pulse" />
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-400 max-w-xl mb-9 leading-relaxed"
          >
            Passionate about technology, people, and building meaningful digital
            experiences.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-500 text-white font-semibold text-sm sm:text-base shadow-[0_0_30px_rgba(99,102,241,0.55)] hover:shadow-[0_0_40px_rgba(6,182,212,0.75)] hover:scale-105 transition-all duration-300"
            >
              Explore My Work
            </a>

            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-slate-950/60 hover:bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 font-medium text-sm sm:text-base transition-all duration-300"
            >
              Let&apos;s Connect
            </a>
          </motion.div>

          {/* Social Links Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-6 text-slate-400"
          >
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-cyan-400 hover:scale-110 transition-all"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/mrinmoysana7"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-cyan-400 hover:scale-110 transition-all"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:mrinmoy@enexahire.com"
              aria-label="Email"
              className="hover:text-cyan-400 hover:scale-110 transition-all"
            >
              <Envelope className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        {/* ================= RIGHT COLUMN: AVATAR & FLOATING CARDS ================= */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Decorative Dot Matrix (Bottom Right) */}
          <div
            className="absolute -bottom-6 -right-4 w-44 h-44 opacity-35 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#94a3b8 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
            }}
          />

          {/* Animated Glowing Purple-Cyan Circle Behind Avatar */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 4, -4, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[300px] h-[300px] sm:w-[370px] sm:h-[370px] rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 opacity-85 blur-[2px] shadow-[0_0_90px_rgba(56,189,248,0.4)]"
          />

          {/* Connector Line Left */}
          <div className="hidden sm:block absolute left-8 bottom-36 w-12 h-12 border-t-2 border-l-2 border-purple-400/50 rounded-tl-xl pointer-events-none z-10" />

          {/* Connector Line Right */}
          <div className="hidden sm:block absolute right-6 top-1/2 w-12 h-12 border-b-2 border-r-2 border-cyan-400/50 rounded-br-xl pointer-events-none z-10" />

          {/* Portrait Image (/my-avatar.png from your public folder) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 w-[300px] sm:w-[380px] flex justify-center"
          >
            <img
              src="/my-avatar.png"
              alt="Mrinmoy Sana"
              className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
            />
          </motion.div>

          {/* Floating Glass Card 1: Top Right ("Tech & Talent") */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-14 -right-2 sm:-right-6 z-20 px-5 py-3.5 rounded-2xl bg-slate-900/65 backdrop-blur-xl border border-slate-700/80 shadow-2xl"
          >
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-slate-400/70" />
              <span className="w-2 h-2 rounded-full bg-slate-400/70" />
              <span className="w-2 h-2 rounded-full bg-slate-400/70" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white tracking-wide">
              Tech &amp; Talent
            </p>
          </motion.div>

          {/* Floating Glass Card 2: Bottom Left (Code Snippet Window) */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-12 -left-2 sm:-left-8 z-20 p-4 rounded-2xl bg-slate-900/75 backdrop-blur-xl border border-slate-700/80 shadow-2xl font-mono text-[10px] sm:text-xs text-slate-300"
          >
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <pre className="leading-relaxed text-slate-300">
              <code>
                <span className="text-purple-400">developer</span>: {"{\n"}
                {"  "}stack: <span className="text-cyan-300">&quot;Next.js&quot;</span>,
                {"\n"}
                {"  "}edge: [<span className="text-emerald-300">&quot;TechHiring&quot;</span>]
                {"\n}"}
              </code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}