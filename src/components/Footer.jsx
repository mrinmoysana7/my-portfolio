"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "@gravity-ui/icons";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 px-6 bg-slate-950 border-t border-slate-900">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <a
            href="#"
            className="text-lg font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Mrinmoy Sana.
          </a>
          <p className="text-xs text-slate-500 mt-1">
            © {year} Mrinmoy Sana. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-400">
          <a
            href="mailto:mrinmoy@enexahire.com"
            className="hover:text-indigo-400 transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:border-indigo-500/50 hover:text-indigo-400 transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}