"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "./motion";

const steps = [
  { icon: "①", color: "from-indigo-100 to-indigo-200" },
  { icon: "②", color: "from-purple-100 to-purple-200" },
  { icon: "③", color: "from-pink-100 to-pink-200" },
  { icon: "④", color: "from-emerald-100 to-emerald-200" },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="processus" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn className="text-center mb-20">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Placeholder label
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Placeholder process title
          </h2>
        </FadeIn>

        <div ref={ref} className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-indigo-200 via-purple-200 to-emerald-200 rounded-full"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative md:flex items-center gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } ${i > 0 ? "md:mt-16" : ""}`}
              >
                {/* Card */}
                <div className="flex-1">
                  <motion.div
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                    whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.06)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-xl font-bold shrink-0`}>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="h-4 w-36 bg-gray-200 rounded mb-2" />
                        <div className="space-y-1.5">
                          <div className="h-2.5 w-full bg-gray-100 rounded" />
                          <div className="h-2.5 w-4/5 bg-gray-100 rounded" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Center dot */}
                <motion.div
                  className="hidden md:flex w-10 h-10 rounded-full bg-white border-2 border-indigo-200 items-center justify-center z-10 shrink-0"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.25 + 0.2, type: "spring", stiffness: 300 }}
                >
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.color}`} />
                </motion.div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
