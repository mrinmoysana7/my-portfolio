"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import {
  ArrowUpRightFromSquare,
  Code,
  Sparkles,
  Globe,
  Server,
} from "@gravity-ui/icons";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
  {
    title: "PromptVerse — AI Prompt Sharing & Marketplace",
    period: "Jun 2026 – Jul 2026",
    category: "Full-Stack Platform",
    image: "/promptverse-banner.png",
    icon: Sparkles,
    description:
      "PromptVerse is a full-stack AI Prompt Sharing & Marketplace Platform designed to help users discover, create, organize, share, and monetize high-quality AI prompts. Boosts productivity, automates workflows, and sparks creativity.",
    tags: ["Next.js", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://prompt-verse-client-umber.vercel.app",
    clientRepo: "https://github.com/mrinmoysana7/PH-Assignment-10",
    serverRepo: "https://github.com/mrinmoysana7/prompt-verse-server",
  },
  {
    title: "DriveFleet — Full-Stack Car Rental Platform",
    period: "May 2026 – Jun 2026",
    category: "Full-Stack Web App",
    image: "/drivefleet-banner.png",
    icon: Code,
    description:
      "DriveFleet is a modern full-stack car rental platform designed to provide a seamless vehicle rental experience. Users can explore available luxury vehicles, add cars, manage bookings, and view detailed profiles.",
    tags: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://ph-assignment-9-ten.vercel.app",
    clientRepo: "https://github.com/mrinmoysana7/PH-Assignment-9",
    serverRepo: "https://github.com/mrinmoysana7/DriveFleet-Server",
  },
  {
    title: "English Janala Learning Web App",
    period: "Jan 2026",
    category: "Interactive EdTech App",
    image: "/english-janala.png",
    icon: Globe,
    description:
      "An interactive language learning web application built to make learning English vocabulary engaging and accessible through dynamic API integration and clean UI components.",
    tags: ["JavaScript", "Tailwind CSS", "Daisy UI", "REST API", "DOM"],
    liveLink: "https://mrinmoysana7.github.io/english-janala-webapp",
    clientRepo: "https://github.com/mrinmoysana7/english-janala-webapp",
    serverRepo: null,
  },
  {
    title: "Mrinmoy Sana | Frontend Developer Showcase",
    period: "2026",
    category: "Portfolio Showcase",
    image: "portfolio-showcase.png",
    icon: Code,
    description:
      "A curated showcase of my frontend development work, featuring React, TypeScript, responsive UI, modern web technologies, and selected interactive web experiences.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Responsive UI"],
    liveLink: "https://mrinmoy-portfolio.ai.studio",
    clientRepo: "https://github.com/mrinmoysana7",
    serverRepo: null,
  },
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-900/30 border-y border-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">
            Full-Stack & Frontend Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {mounted && (
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={28}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 2 },
              }}
              className="pb-14"
            >
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <SwiperSlide key={index} className="h-auto">
                    <div className="h-full flex flex-col justify-between rounded-3xl bg-slate-950/90 border border-slate-800/80 hover:border-indigo-500/50 transition-all overflow-hidden group">
                      <div>
                        {/* Project Image Banner */}
                        {project.image ? (
                          <div className="relative h-56 w-full overflow-hidden bg-slate-900 border-b border-slate-800/80">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3">
                              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-indigo-400 border border-indigo-500/30">
                                {project.category}
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="h-56 w-full bg-gradient-to-br from-indigo-950/50 via-slate-900 to-slate-950 border-b border-slate-800/80 flex flex-col items-center justify-center p-6 relative">
                            <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
                              <IconComponent className="w-8 h-8" />
                            </div>
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                              {project.category}
                            </span>
                          </div>
                        )}

                        {/* Card Content */}
                        <div className="p-7 pb-4">
                          <p className="text-xs text-slate-500 mb-2">
                            {project.period}
                          </p>
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-slate-400 text-sm leading-relaxed mb-5">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Tags & Action Links */}
                      <div className="px-7 pb-7">
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Links Row */}
                        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all"
                            >
                              Live Site
                              <ArrowUpRightFromSquare className="w-3.5 h-3.5" />
                            </a>
                          )}

                          {project.clientRepo && (
                            <a
                              href={project.clientRepo}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium transition-all"
                            >
                              <Code className="w-3.5 h-3.5 text-indigo-400" />
                              Client Code
                            </a>
                          )}

                          {project.serverRepo && (
                            <a
                              href={project.serverRepo}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium transition-all"
                            >
                              <Server className="w-3.5 h-3.5 text-cyan-400" />
                              Server Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </motion.div>
      </div>
    </section>
  );
}