"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "./motion";

const personas = [
  {
    emoji: "🎬",
    title: "Créateur de contenu",
    desc: "Tu publies des vidéos, podcasts ou articles et tu veux monétiser ton audience avec un espace exclusif.",
    examples: ["Youtubeurs", "Streamers", "Podcasteurs", "Blogueurs"],
    iconBg: "bg-gradient-to-br from-[#7B61FF]/15 to-violet-300/20",
    iconShadow: "0 4px 14px rgba(123,97,255,0.15)",
    haloColor: "rgba(123,97,255,0.06)",
    borderHover: "rgba(123,97,255,0.25)",
    shadowHover: "0 20px 50px -12px rgba(123,97,255,0.18), 0 8px 24px rgba(0,0,0,0.05)",
    shadowDefault: "0 8px 24px rgba(0,0,0,0.05), 0 2px 6px rgba(0,0,0,0.03)",
    tagBg: "bg-[#7B61FF]/[0.07] text-[#7B61FF] border-[#7B61FF]/10",
    rotation: -1,
  },
  {
    emoji: "🎯",
    title: "Coach & Formateur",
    desc: "Tu accompagnes des élèves ou des clients et tu veux structurer tes formations en ligne.",
    examples: ["Coachs sportifs", "Formateurs business", "Profs en ligne", "Mentors"],
    iconBg: "bg-gradient-to-br from-amber-100/80 to-orange-200/40",
    iconShadow: "0 4px 14px rgba(245,158,11,0.15)",
    haloColor: "rgba(245,158,11,0.05)",
    borderHover: "rgba(245,158,11,0.25)",
    shadowHover: "0 20px 50px -12px rgba(245,158,11,0.15), 0 8px 24px rgba(0,0,0,0.05)",
    shadowDefault: "0 8px 24px rgba(0,0,0,0.05), 0 2px 6px rgba(0,0,0,0.03)",
    tagBg: "bg-amber-50 text-amber-700 border-amber-200/60",
    rotation: 0,
  },
  {
    emoji: "💡",
    title: "Expert & Indépendant",
    desc: "Tu as une expertise à partager et tu veux créer une communauté engagée autour de ta thématique.",
    examples: ["Consultants", "Freelances", "Auteurs", "Conférenciers"],
    iconBg: "bg-gradient-to-br from-emerald-100/80 to-teal-200/40",
    iconShadow: "0 4px 14px rgba(16,185,129,0.15)",
    haloColor: "rgba(16,185,129,0.05)",
    borderHover: "rgba(16,185,129,0.25)",
    shadowHover: "0 20px 50px -12px rgba(16,185,129,0.15), 0 8px 24px rgba(0,0,0,0.05)",
    shadowDefault: "0 8px 24px rgba(0,0,0,0.05), 0 2px 6px rgba(0,0,0,0.03)",
    tagBg: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    rotation: 1,
  },
];

export default function Creators() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="pour-qui" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[700px] h-[400px] bg-[#7B61FF]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-[#7B61FF] font-semibold text-sm uppercase tracking-wider mb-3">
            Pour qui ?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Yoocamp est fait pour toi
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Que tu sois créateur, formateur ou expert, Yoocamp s&apos;adapte à ton activité.
          </p>
        </FadeIn>

        <Stagger className="grid md:grid-cols-3 gap-7" staggerDelay={0.12}>
          {personas.map((p, i) => (
            <StaggerItem key={p.title}>
              <div className="relative">
                {/* Halo behind card */}
                <div
                  className="absolute -inset-4 rounded-3xl pointer-events-none transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${p.haloColor}, transparent 70%)`,
                    opacity: hoveredIndex === i ? 1 : 0.6,
                  }}
                />

                <motion.div
                  className="relative bg-white rounded-2xl p-7 border border-gray-200/60 h-full overflow-hidden"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ y: -6, borderColor: p.borderHover, rotate: 0 }}
                  initial={{ rotate: p.rotation }}
                  animate={{ rotate: p.rotation }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  style={{
                    boxShadow: hoveredIndex === i ? p.shadowHover : p.shadowDefault,
                  }}
                >
                  {/* Icon with circular background */}
                  <motion.div
                    className={`w-14 h-14 rounded-full ${p.iconBg} flex items-center justify-center mb-5`}
                    style={{ boxShadow: p.iconShadow }}
                    animate={hoveredIndex === i ? { scale: [1, 1.1, 1], rotate: [0, -8, 8, 0] } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-2xl">{p.emoji}</span>
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {p.examples.map((ex, j) => (
                      <motion.span
                        key={ex}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full border ${p.tagBg}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: j * 0.05 }}
                      >
                        {ex}
                      </motion.span>
                    ))}
                  </div>

                  {/* Corner glow on hover */}
                  <AnimatePresence>
                    {hoveredIndex === i && (
                      <motion.div
                        className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[60px] pointer-events-none"
                        style={{ backgroundColor: p.borderHover }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 0.3, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
