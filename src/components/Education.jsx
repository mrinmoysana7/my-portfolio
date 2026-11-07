"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Code,
  Palette,
  CircleCheck,
  Eye,
  Xmark,
  ArrowUpRightFromSquare,
} from "@gravity-ui/icons";

const educationList = [
  {
    degree: "Bachelor of Arts - BA, Philosophy Honours",
    institution: "West Bengal State University",
    year: "Sep 2021 – Aug 2024",
    badge: "Grade: A",
    credentialId: null,
    icon: GraduationCap,
    details:
      "Graduated with Honours (Grade: A), developing strong analytical reasoning, critical thinking, ethics, and professional communication foundations.",
    certificateImg: null,
  },
  {
    degree: "Website Development (Complete Web Development)",
    institution: "Programming Hero",
    year: "Jan 2026 – Aug 2026",
    badge: "Certificate of Excellence · Batch 13",
    credentialId: "ID: WEB13-0897",
    icon: Code,
    details:
      "Demonstrated proficiency in HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, and MongoDB, along with AI-powered development practices and professional web engineering readiness.",
    certificateImg: "/ph-certificate.jpeg",
    certificateTitle: "Certificate of Completion with Excellence — Programming Hero",
  },
  {
    degree: "Graphic Design (Masterclass Course)",
    institution: "eShikhon",
    year: "May 2025 – Sep 2025",
    badge: "Grade: A (70% Marks)",
    credentialId: "Validation: 4310164-3152316-150301",
    icon: Palette,
    details:
      "Successfully completed the 4-month Graphic Design Masterclass covering visual communication, brand identity, logo design, and social media design.",
    certificateImg: "/eshikhon-certificate.jpeg",
    certificateTitle: "Certificate of Achievement in Graphic Design — eShikhon",
  },
];

export default function Education() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="education" className="py-24 px-6 relative">
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
            Academic & Learning
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Education &{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationList.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-7 rounded-3xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Icon & Year */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                      {edu.year}
                    </span>
                  </div>

                  {/* Degree & Institution */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-indigo-400 text-sm font-medium mb-4">
                    {edu.institution}
                  </p>

                  {/* Grade & Credential Badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {edu.badge}
                    </span>
                    {edu.credentialId && (
                      <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800">
                        {edu.credentialId}
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <p className="text-slate-400 text-sm leading-relaxed flex items-start gap-2 mb-6">
                    <CircleCheck className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                    <span>{edu.details}</span>
                  </p>
                </div>

                {/* View Certificate Button (Only for courses with certificates) */}
                {edu.certificateImg ? (
                  <div className="pt-4 border-t border-slate-800/80">
                    <button
                      onClick={() => setSelectedCert(edu)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600/20 to-cyan-500/20 hover:from-indigo-600 hover:to-cyan-600 border border-indigo-500/40 text-indigo-200 hover:text-white text-xs font-semibold transition-all cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      View Certificate
                    </button>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-slate-800/40">
                    <span className="text-xs text-slate-500 italic">
                      University Honours Degree
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Certificate Popup Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    {selectedCert.certificateTitle}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {selectedCert.institution} • {selectedCert.credentialId}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close Modal"
                >
                  <Xmark className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image */}
              <div className="p-4 sm:p-6 bg-slate-950 flex items-center justify-center">
                <img
                  src={selectedCert.certificateImg}
                  alt={selectedCert.certificateTitle}
                  className="max-h-[68vh] w-auto rounded-xl border border-slate-800 object-contain shadow-lg"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {selectedCert.badge}
                </span>
                <a
                  href={selectedCert.certificateImg}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all"
                >
                  Open Full Resolution
                  <ArrowUpRightFromSquare className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}