"use client";
import { motion } from "framer-motion";
import { GraduationCap, CircleCheck } from "@gravity-ui/icons";

const educationList = [
  {
    degree: "Bachelor's Degree / Graduation",
    institution: "University / College",
    year: "Graduated",
    details:
      "Focused on business communication, organizational management, and foundational analytical skills.",
  },
  {
    degree: "Continuous Professional Development",
    institution: "Talent Acquisition & Modern Tech Ecosystems",
    year: "Ongoing",
    details:
      "Advanced specialization in strategic HR sourcing, LinkedIn employer branding, PC hardware diagnostics, and AI-assisted workflows.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">
            Academic & Learning
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Education &{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/40 transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                  {edu.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
              <p className="text-indigo-400 text-sm font-medium mb-4">{edu.institution}</p>
              <p className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                <CircleCheck className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                <span>{edu.details}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}