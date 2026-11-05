"use client";
import { motion } from "framer-motion";
import { CircleCheck, Code, Briefcase, Palette } from "@gravity-ui/icons";

const skillCategories = [
  {
    title: "Full-Stack Web Development",
    icon: Code,
    skills: [
      "Next.js",
      "React.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "Daisy UI",
      "HTML5 & CSS3",
      "REST APIs & DOM",
      "Front-End Development",
      "Full-Stack Development",
    ],
  },
  {
    title: "Talent Acquisition & HR",
    icon: Briefcase,
    skills: [
      "Technical Recruiting",
      "End-to-End Recruitments",
      "Strategic Hiring",
      "Strategic Sourcing",
      "Non-Technical Recruiting",
      "HR Recruitment",
      "Screening Resumes",
      "Interviewing",
      "Sourcing",
      "Interpersonal Communication",
      "Critical Thinking",
    ],
  },
  {
    title: "Graphic & Brand Design",
    icon: Palette,
    skills: [
      "Graphic Design",
      "Brand Identity",
      "Brand Design",
      "Logo Design",
      "Social Media Design",
      "Graphic Solution",
      "Microsoft Office",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30 border-y border-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">
            Technical & Professional Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Skills &{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-7 rounded-3xl bg-slate-950/80 border border-slate-800/80 hover:border-indigo-500/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <CategoryIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs sm:text-sm hover:border-indigo-500/50 hover:text-white transition-all"
                    >
                      <CircleCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}