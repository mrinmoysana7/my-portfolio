"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "@gravity-ui/icons";

const experiences = [
  {
    role: "Sr. Talent Acquisition Executive",
    company: "eNexaHire · Full-time (Remote)",
    period: "Jun 2026 - Present",
    description: [
      "End-to-End Recruitment & Strategy: Lead the full recruitment lifecycle, from initial talent sourcing and screening to salary negotiation and onboarding.",
      "Formulate and execute targeted hiring strategies to identify top-tier technical, IT, engineering, and corporate professionals.",
      "Core Skills Utilized: End-to-End Recruitments, Technical Recruiting, Strategic Hiring, and Sourcing.",
    ],
  },
  {
    role: "Recruiter Trainee",
    company: "eNexaHire · Full-time (Kolkata, West Bengal, India)",
    period: "Feb 2026 - May 2026 · 4 mos",
    description: [
      "Specialized Core Industry Hiring: Successfully sourced and closed specialized roles for Real Estate and core sectors.",
      "Managed complete recruitment projects for Executive Assistant, Site Supervisor, Store Incharge, and operational roles.",
      "Core Skills Utilized: End-to-End Recruitments, Screening Resumes, Non-Technical Recruiting, and Interviewing.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Work{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline Icon Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-indigo-500/50 bg-slate-950 text-indigo-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-indigo-400 font-medium text-sm mb-4">{exp.company}</p>
                <ul className="space-y-2 text-slate-400 text-sm leading-relaxed list-disc list-inside">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}