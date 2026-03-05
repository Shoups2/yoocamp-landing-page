"use client";

import { motion } from "framer-motion";
import { FadeIn, Float, Stagger, StaggerItem } from "./motion";

const profiles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  letter: String.fromCharCode(65 + i),
}));

const bubbles = [
  { text: "Placeholder message 1", x: "10%", y: "20%" },
  { text: "Placeholder message 2", x: "65%", y: "15%" },
  { text: "Placeholder message 3", x: "30%", y: "70%" },
  { text: "Placeholder 4", x: "75%", y: "65%" },
];

export default function Community() {
  return (
    <section id="communauté" className="py-24 md:py-32 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Placeholder label
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Placeholder section title
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Placeholder description for the community section.
          </p>
        </FadeIn>

        {/* Community wall */}
        <div className="relative">
          {/* Avatar grid */}
          <Stagger className="flex flex-wrap justify-center gap-3 mb-12" staggerDelay={0.04}>
            {profiles.map((p, i) => (
              <StaggerItem key={p.id}>
                <Float delay={i * 0.3} duration={4 + (i % 3)} y={6}>
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 border-2 border-white shadow-md flex items-center justify-center text-indigo-600 font-bold text-sm cursor-pointer"
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {p.letter}
                  </motion.div>
                </Float>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Profile cards */}
          <Stagger className="grid md:grid-cols-3 gap-6 mb-12" staggerDelay={0.15}>
            {[0, 1, 2].map((i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 flex items-center justify-center text-indigo-700 font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                    <div className="flex-1">
                      <div className="h-3.5 w-28 bg-gray-100 rounded" />
                      <div className="h-2.5 w-20 bg-gray-50 rounded mt-2" />
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                      <div className="w-3 h-3 bg-indigo-200 rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2.5 w-full bg-gray-50 rounded" />
                    <div className="h-2.5 w-3/4 bg-gray-50 rounded" />
                  </div>
                  <div className="flex gap-4 mt-4 pt-4 border-t border-gray-50">
                    <div className="h-2 w-16 bg-indigo-50 rounded" />
                    <div className="h-2 w-12 bg-gray-50 rounded" />
                    <div className="h-2 w-12 bg-gray-50 rounded" />
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Discussion bubbles (desktop only) */}
          <div className="hidden lg:block relative h-32">
            {bubbles.map((b, i) => (
              <Float key={i} delay={i * 0.8} duration={5} y={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="absolute bg-white rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-md border border-gray-100 text-sm text-gray-500"
                  style={{ left: b.x, top: b.y }}
                >
                  {b.text}
                </motion.div>
              </Float>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
