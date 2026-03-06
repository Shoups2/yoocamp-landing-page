"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, ScaleIn } from "./motion";

const tabs = [
  { id: "dashboard", label: "Dashboard" },
  { id: "formation", label: "Formation" },
  { id: "community", label: "Communauté" },
];

function MockupScreen({ id }: { id: string }) {
  const layouts: Record<string, React.ReactNode> = {
    dashboard: (
      <div className="p-4 sm:p-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="h-24 bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-xl p-4">
            <div className="h-3 w-16 bg-indigo-200/60 rounded mb-2" />
            <div className="h-6 w-20 bg-indigo-200/40 rounded" />
          </div>
          <div className="h-24 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-4">
            <div className="h-3 w-16 bg-purple-200/60 rounded mb-2" />
            <div className="h-6 w-20 bg-purple-200/40 rounded" />
          </div>
          <div className="h-24 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl p-4">
            <div className="h-3 w-16 bg-emerald-200/60 rounded mb-2" />
            <div className="h-6 w-20 bg-emerald-200/40 rounded" />
          </div>
        </div>
        <div className="h-40 bg-gray-50 rounded-xl p-4">
          <div className="flex gap-3 mb-3">
            <div className="h-3 w-20 bg-gray-200 rounded" />
            <div className="h-3 w-16 bg-gray-100 rounded" />
          </div>
          <div className="flex items-end gap-2 h-24">
            {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-gradient-to-t from-indigo-400 to-indigo-200 rounded-t"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    formation: (
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-48 space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`p-3 rounded-xl border ${i === 1 ? "bg-indigo-50 border-indigo-200" : "bg-gray-50 border-gray-100"}`}
              >
                <div className="h-2.5 w-24 bg-gray-200 rounded mb-1.5" />
                <div className="h-2 w-16 bg-gray-100 rounded" />
              </div>
            ))}
          </div>
          <div className="flex-1 space-y-3">
            <div className="h-36 bg-gray-100 rounded-xl flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow">
                <div className="w-0 h-0 border-l-[10px] border-l-indigo-500 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
              </div>
            </div>
            <div className="h-3 w-48 bg-gray-200 rounded" />
            <div className="h-2.5 w-full bg-gray-100 rounded" />
            <div className="h-2.5 w-3/4 bg-gray-100 rounded" />
          </div>
        </div>
      </div>
    ),
    community: (
      <div className="p-6 space-y-3">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`flex gap-3 ${i % 2 === 0 ? "" : "flex-row-reverse"}`}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 shrink-0" />
            <div className={`${i % 2 === 0 ? "bg-gray-50" : "bg-indigo-50"} rounded-2xl ${i % 2 === 0 ? "rounded-tl-sm" : "rounded-tr-sm"} px-4 py-3 max-w-[70%]`}>
              <div className="h-2.5 w-32 bg-gray-200/60 rounded mb-1.5" />
              <div className="h-2 w-24 bg-gray-100/60 rounded" />
            </div>
          </motion.div>
        ))}
        <div className="flex gap-2 mt-4 pt-3 border-t border-gray-100">
          <div className="flex-1 h-9 bg-gray-50 rounded-xl" />
          <div className="h-9 w-9 bg-indigo-50 rounded-xl" />
        </div>
      </div>
    ),
  };

  return <>{layouts[id]}</>;
}

export default function ProductDemo() {
  const [active, setActive] = useState("dashboard");

  return (
    <section className="py-24 md:py-32 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Placeholder label
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Placeholder demo title
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  active === tab.id
                    ? "text-indigo-600"
                    : "text-gray-400 hover:text-gray-600"
                }`}
                whileTap={{ scale: 0.97 }}
              >
                {active === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-indigo-50 border border-indigo-100 rounded-xl"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Mockup */}
          <ScaleIn delay={0.2}>
          <div className="bg-white rounded-2xl shadow-2xl shadow-gray-200/60 border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-50 border-b border-gray-100">
              <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
              <span className="flex-1 mx-4 h-5 bg-gray-100 rounded" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="min-h-[250px] md:min-h-[350px]"
              >
                <MockupScreen id={active} />
              </motion.div>
            </AnimatePresence>
          </div>
          </ScaleIn>
        </FadeIn>
      </div>
    </section>
  );
}
