"use client";

import { motion } from "framer-motion";
import { Stagger, StaggerItem } from "./motion";
import { FadeIn } from "./motion";

const features = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  icon: ["◆", "▲", "●", "■", "★", "◎"][i],
}));

export default function Features() {
  return (
    <section id="fonctionnalités" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Placeholder label
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Placeholder features title
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Placeholder features description text goes here.
          </p>
        </FadeIn>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {features.map((f) => (
            <StaggerItem key={f.id}>
              <motion.div
                className="group relative bg-gray-50 rounded-2xl p-7 border border-gray-100 overflow-hidden cursor-pointer"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-indigo-600 text-xl mb-5 shadow-sm"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {f.icon}
                  </motion.div>

                  {/* Title */}
                  <div className="h-4 w-36 bg-gray-200 rounded mb-3" />

                  {/* Description */}
                  <div className="space-y-2 mb-5">
                    <div className="h-2.5 w-full bg-gray-100 rounded" />
                    <div className="h-2.5 w-4/5 bg-gray-100 rounded" />
                    <div className="h-2.5 w-3/5 bg-gray-100 rounded" />
                  </div>

                  {/* Mini product visual */}
                  <motion.div
                    className="h-28 bg-white rounded-xl border border-gray-200 overflow-hidden opacity-60 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  >
                    <div className="flex items-center gap-1 px-3 py-2 bg-gray-50 border-b border-gray-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-200" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-200" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-200" />
                    </div>
                    <div className="p-3 space-y-2">
                      <div className="h-2 w-3/4 bg-gray-100 rounded" />
                      <div className="h-2 w-1/2 bg-gray-50 rounded" />
                      <div className="flex gap-2 mt-2">
                        <div className="h-6 w-12 bg-indigo-50 rounded" />
                        <div className="h-6 w-16 bg-gray-50 rounded" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
