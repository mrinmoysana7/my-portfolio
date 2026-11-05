"use client";
import { motion } from "framer-motion";
import { Briefcase, Code, Persons, Sparkles, CircleCheck } from "@gravity-ui/icons";

const highlights = [
  {
    icon: Briefcase,
    title: "Sr. TA Executive",
    subtitle: "eNexaHire (Tech & Core)",
    color: "text-indigo-400",
  },
  {
    icon: Code,
    title: "Full-Stack Dev",
    subtitle: "React, Next.js & Node.js",
    color: "text-cyan-400",
  },
  {
    icon: Persons,
    title: "4,500+ Followers",
    subtitle: "500+ Connections on LinkedIn",
    color: "text-purple-400",
  },
  {
    icon: Sparkles,
    title: "Employer Branding",
    subtitle: "AI Visuals & Brand Design",
    color: "text-emerald-400",
  },
];

const competencies = [
  {
    title: "End-to-End Talent Acquisition",
    desc: "Sourcing, Candidate Screening, Interview Coordination, and Offer Management.",
  },
  {
    title: "Strategic Sourcing",
    desc: "Advanced Boolean Search, LinkedIn Recruitment, and Data-Driven Hiring Analytics.",
  },
  {
    title: "Employer Branding",
    desc: "Utilizing advanced AI tools to create cinematic visual content, brand-aware animations, and engaging campaigns.",
  },
  {
    title: "Stakeholder Management",
    desc: "Leadership Hiring, Salary Negotiation, and aligning recruitment strategy with business goals.",
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center md:text-left"
        >
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">
            Who I Am
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base"
          >
            <p>
              Hi, I&apos;m <span className="text-white font-semibold">Mrinmoy Sana</span>.
              As a Senior Talent Acquisition Executive at{" "}
              <span className="text-indigo-400 font-medium">eNexaHire</span>, I don&apos;t
              just match resumes to job descriptions—I connect the right talent with
              organizations ready to scale.
            </p>
            <p>
              My expertise spans across identifying and securing top-tier professionals in
              multiple industries, including IT, Manufacturing, Real Estate, Engineering,
              and Corporate Functions. However, my unique edge lies in{" "}
              <span className="text-white font-medium">Technical Recruitment</span>.
            </p>
            <p>
              <span className="text-indigo-400 font-semibold">Why? Because I am also an active Full-Stack Developer.</span>{" "}
              Working hands-on with JavaScript, React, Next.js, and modern databases
              allows me to speak the same language as the developers I hire. I can
              accurately assess technical depth, logical problem-solving skills, and
              system architecture understanding beyond just resume buzzwords.
            </p>

            {/* Core Competencies List */}
            <div className="pt-4 space-y-3">
              <h3 className="text-white font-bold text-lg">My Core Competencies Include:</h3>
              <div className="grid grid-cols-1 gap-3">
                {competencies.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/70"
                  >
                    <CircleCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">
                      <span className="font-semibold text-white">{item.title}:</span>{" "}
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 transition-all group"
                >
                  <div className={`p-3 rounded-xl bg-slate-950 w-fit mb-4 ${item.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-100 text-lg group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">{item.subtitle}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}