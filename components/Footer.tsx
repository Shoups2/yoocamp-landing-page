"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./motion";

const columns = [
  { title: "Placeholder", links: ["Link 1", "Link 2", "Link 3", "Link 4"] },
  { title: "Placeholder", links: ["Link 1", "Link 2", "Link 3"] },
  { title: "Placeholder", links: ["Link 1", "Link 2", "Link 3"] },
  { title: "Placeholder", links: ["Link 1", "Link 2"] },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="text-xl font-extrabold text-gray-900 mb-3">
                <span className="text-indigo-600">●</span> placeholder
              </div>
              <div className="space-y-1.5">
                <div className="h-2.5 w-40 bg-gray-200 rounded" />
                <div className="h-2.5 w-32 bg-gray-100 rounded" />
              </div>
              <div className="flex gap-3 mt-4">
                {["X", "In", "Yt", "Ig"].map((s) => (
                  <motion.div
                    key={s}
                    className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-xs font-bold cursor-pointer"
                    whileHover={{ scale: 1.1, backgroundColor: "#EEF2FF", color: "#4F46E5" }}
                  >
                    {s}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {columns.map((col, i) => (
              <div key={i}>
                <div className="text-sm font-semibold text-gray-900 mb-3">
                  {col.title}
                </div>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <motion.a
                        href="#"
                        className="text-sm text-gray-400 hover:text-indigo-600 transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2026 Placeholder. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Placeholder</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Placeholder</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Placeholder</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
