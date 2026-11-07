"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CircleCheck,
  Code,
  Briefcase,
  Palette,
  Sparkles,
  Thunderbolt,
  ChevronDown,
} from "@gravity-ui/icons";

const skillCategories = [
  {
    id: "dev",
    title: "Full-Stack Web Development",
    subtitle: "Modern Frontend & Scalable Backend",
    icon: Code,
    accentGradient: "from-cyan-400 via-blue-500 to-indigo-500",
    glowColor: "bg-cyan-500/15",
    borderHover: "hover:border-cyan-500/50",
    iconBox: "bg-cyan-500/10 text-cyan-400 border-cyan-500/25",
    expandBtnHover:
      "hover:border-cyan-500/40 hover:bg-cyan-500/10 text-cyan-300",
    badgeHover:
      "hover:border-cyan-400/60 hover:bg-cyan-500/10 hover:text-cyan-200 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]",
    checkColor: "text-cyan-400",
    topMetrics: [
      { name: "Next.js & React.js", level: 92 },
      { name: "JavaScript & TypeScript", level: 88 },
      { name: "Node.js, Express & MongoDB", level: 85 },
    ],
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
    id: "hr",
    title: "Talent Acquisition & HR",
    subtitle: "End-to-End Tech & Corporate Hiring",
    icon: Briefcase,
    accentGradient: "from-purple-400 via-fuchsia-500 to-indigo-500",
    glowColor: "bg-purple-500/15",
    borderHover: "hover:border-purple-500/50",
    iconBox: "bg-purple-500/10 text-purple-400 border-purple-500/25",
    expandBtnHover:
      "hover:border-purple-500/40 hover:bg-purple-500/10 text-purple-300",
    badgeHover:
      "hover:border-purple-400/60 hover:bg-purple-500/10 hover:text-purple-200 hover:shadow-[0_0_15px_rgba(192,132,252,0.2)]",
    checkColor: "text-purple-400",
    topMetrics: [
      { name: "Technical & IT Recruiting", level: 96 },
      { name: "End-to-End Pipeline Strategy", level: 95 },
      { name: "Sourcing & Stakeholder Mgmt", level: 92 },
    ],
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
    id: "design",
    title: "Graphic & Brand Design",
    subtitle: "Visual Identity & Digital Assets",
    icon: Palette,
    accentGradient: "from-emerald-400 via-teal-500 to-cyan-500",
    glowColor: "bg-emerald-500/15",
    borderHover: "hover:border-emerald-500/50",
    iconBox: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    expandBtnHover:
      "hover:border-emerald-500/40 hover:bg-emerald-500/10 text-emerald-300",
    badgeHover:
      "hover:border-emerald-400/60 hover:bg-emerald-500/10 hover:text-emerald-200 hover:shadow-[0_0_15px_rgba(52,211,153,0.2)]",
    checkColor: "text-emerald-400",
    topMetrics: [
      { name: "Brand Identity & Logo Design", level: 90 },
      { name: "Social Media Visuals", level: 92 },
      { name: "Creative Graphic Solutions", level: 88 },
    ],
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

const filterTabs = [
  { id: "all", label: "All Arsenal" },
  { id: "dev", label: "Full-Stack Dev" },
  { id: "hr", label: "Talent Acquisition" },
  { id: "design", label: "Graphic & Brand" },
];

const marqueeItems = [
  "Next.js",
  "React.js",
  "Technical Recruiting",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Strategic Sourcing",
  "Tailwind CSS",
  "Express.js",
  "Employer Branding",
  "Brand Identity",
  "Firebase",
  "End-to-End Hiring",
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");
  // কোন কোন কার্ডের কিওয়ার্ড এক্সপ্যান্ড করা আছে তা ট্র্যাক করার স্টেট (ডিফল্টভাবে সব বন্ধ থাকবে)
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-900/30 border-y border-slate-900 relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical &amp; Professional Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp;{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            A rare blend of hands-on Full-Stack Engineering, Strategic Talent
            Acquisition, and Creative Brand Design.
          </p>
        </motion.div>

        {/* Interactive Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-14"
        >
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${isActive
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200 bg-slate-900/70 border border-slate-800"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 shadow-[0_0_20px_rgba(99,102,241,0.45)]"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skill Cards Grid */}
        <motion.div
          layout
          className={`grid grid-cols-1 gap-8 items-start ${activeTab === "all"
            ? "lg:grid-cols-3"
            : "max-w-2xl mx-auto lg:grid-cols-1"
            }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, idx) => {
              const CategoryIcon = category.icon;
              const isExpanded = !!expandedCards[category.id];

              return (
                <motion.div
                  layout
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.92, y: 25 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: -20 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`relative p-7 rounded-3xl bg-slate-950/90 backdrop-blur-xl border border-slate-800/90 ${category.borderHover} transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl`}
                >
                  {/* Top Gradient Accent Bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.accentGradient}`}
                  />

                  {/* Corner Ambient Glow on Hover */}
                  <div
                    className={`absolute -top-24 -right-24 w-52 h-52 ${category.glowColor} rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}
                  />

                  <div>
                    {/* Card Header */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`p-3.5 rounded-2xl border ${category.iconBox} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <CategoryIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                            {category.title}
                          </h3>
                          <p className="text-xs text-slate-400 mt-0.5">
                            {category.subtitle}
                          </p>
                        </div>
                      </div>

                      <span className="shrink-0 text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                        {category.skills.length} Skills
                      </span>
                    </div>

                    {/* Animated Core Proficiency Bars */}
                    <div className="mb-5 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/70 space-y-3.5">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-1">
                        <Thunderbolt
                          className={`w-3.5 h-3.5 ${category.checkColor}`}
                        />
                        <span>Core Proficiency</span>
                      </div>
                      {category.topMetrics.map((metric, mIdx) => (
                        <div key={mIdx}>
                          <div className="flex justify-between text-xs mb-1.5">
                            <span className="text-slate-300 font-medium">
                              {metric.name}
                            </span>
                            <span className="text-slate-400 font-mono">
                              {metric.level}%
                            </span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${metric.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                delay: 0.2 + mIdx * 0.15,
                                ease: "easeOut",
                              }}
                              className={`h-full rounded-full bg-gradient-to-r ${category.accentGradient}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Expand / Collapse Trigger Button */}
                    <button
                      onClick={() => toggleExpand(category.id)}
                      aria-expanded={isExpanded}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800/90 text-xs font-semibold transition-all cursor-pointer ${category.expandBtnHover}`}
                    >
                      <span>
                        {isExpanded
                          ? "Hide Skill Keywords"
                          : `Explore All ${category.skills.length} Keywords`}
                      </span>
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="p-1 rounded-lg bg-slate-950/80 border border-slate-800"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    </button>

                    {/* Expandable Skill Keywords Drawer */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-slate-800/70 flex flex-wrap gap-2">
                            {category.skills.map((skill, i) => (
                              <motion.span
                                key={skill}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.2,
                                  delay: i * 0.025,
                                }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium transition-all cursor-default ${category.badgeHover}`}
                              >
                                <CircleCheck
                                  className={`w-3.5 h-3.5 ${category.checkColor} shrink-0`}
                                />
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Infinite Auto-Scrolling Tech & Talent Marquee */}
        <div className="mt-16 pt-10 border-t border-slate-800/60 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#090d1f] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#090d1f] to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 28,
              ease: "linear",
            }}
            className="flex items-center gap-4 w-max"
          >
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-950/80 border border-slate-800/90 text-slate-300 text-xs sm:text-sm font-medium whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}