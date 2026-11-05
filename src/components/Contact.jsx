"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Envelope, Handset, LocationArrow, PaperPlane } from "@gravity-ui/icons";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900/30 border-t border-slate-900">
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
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Get In{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              Looking to hire top talent or collaborate on tech projects?
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Whether you have a recruitment inquiry, need strategic hiring support, or
              simply want to talk about technology, feel free to reach out directly.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href="mailto:mrinmoy@enexahire.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/50 transition-all"
              >
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Envelope className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email Address</p>
                  <p className="text-sm sm:text-base font-medium text-slate-100">
                    mrinmoy@enexahire.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+916290983331"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/50 transition-all"
              >
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <Handset className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Phone / WhatsApp</p>
                  <p className="text-sm sm:text-base font-medium text-slate-100">
                    +91 6290983331
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <LocationArrow className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-sm sm:text-base font-medium text-slate-100">
                    India (Available Globally)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-slate-950/80 border border-slate-800/80 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-indigo-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-indigo-500 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                required
                placeholder="Recruitment Inquiry / Collaboration"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-indigo-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                required
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-indigo-500 text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/25 cursor-pointer"
            >
              <PaperPlane className="w-4 h-4" />
              {submitted ? "Message Sent Successfully!" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}