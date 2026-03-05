"use client";

import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "./motion";

const creators = [
  { id: 0, letter: "A", stats: ["3K", "42", "4.8"] },
  { id: 1, letter: "B", stats: ["7K", "28", "4.5"] },
  { id: 2, letter: "C", stats: ["1K", "55", "4.9"] },
  { id: 3, letter: "D", stats: ["5K", "33", "4.7"] },
  { id: 4, letter: "E", stats: ["2K", "19", "4.6"] },
  { id: 5, letter: "F", stats: ["9K", "47", "4.3"] },
];

export default function Creators() {
  return (
    <section id="créateurs" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Placeholder label
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Placeholder creators title
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Placeholder description for creators section.
          </p>
        </FadeIn>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {creators.map((c) => (
            <StaggerItem key={c.id}>
              <motion.div
                className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/0 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Banner */}
                <div className="h-24 bg-gradient-to-r from-indigo-100/80 to-purple-100/80" />

                {/* Avatar */}
                <div className="px-6 -mt-8">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-200 to-purple-200 border-4 border-white shadow-sm flex items-center justify-center text-indigo-700 font-bold text-xl"
                    whileHover={{ scale: 1.1 }}
                  >
                    {c.letter}
                  </motion.div>
                </div>

                <div className="p-6 pt-3">
                  <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
                  <div className="h-2.5 w-24 bg-gray-100 rounded mb-4" />

                  {/* Stats */}
                  <div className="flex gap-4 py-3 border-t border-gray-50">
                    {["Placeholder", "Placeholder", "Placeholder"].map((label, j) => (
                      <div key={j} className="text-center flex-1">
                        <div className="text-sm font-bold text-gray-900">{c.stats[j]}</div>
                        <div className="text-[10px] text-gray-400 mt-0.5">{label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Activity bar */}
                  <div className="flex gap-1 mt-3">
                    {[0.3, 0.15, 0.45, 0.2, 0.5, 0.35, 0.25].map((opacity, i) => (
                      <div
                        key={i}
                        className="flex-1 h-1.5 rounded-full"
                        style={{
                          backgroundColor: `rgba(99, 102, 241, ${opacity})`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
