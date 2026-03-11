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
    gradient: "from-[#7B61FF]/10 to-violet-100/40",
    borderHover: "rgba(123,97,255,0.2)",
    accentBg: "bg-[#7B61FF]/10 text-[#7B61FF]",
  },
  {
    emoji: "🎯",
    title: "Coach & Formateur",
    desc: "Tu accompagnes des élèves ou des clients et tu veux structurer tes formations en ligne.",
    examples: ["Coachs sportifs", "Formateurs business", "Profs en ligne", "Mentors"],
    gradient: "from-amber-50 to-orange-100/40",
    borderHover: "rgba(245,158,11,0.2)",
    accentBg: "bg-amber-100 text-amber-700",
  },
  {
    emoji: "💡",
    title: "Expert & Indépendant",
    desc: "Tu as une expertise à partager et tu veux créer une communauté engagée autour de ta thématique.",
    examples: ["Consultants", "Freelances", "Auteurs", "Conférenciers"],
    gradient: "from-emerald-50 to-teal-100/40",
    borderHover: "rgba(16,185,129,0.2)",
    accentBg: "bg-emerald-100 text-emerald-700",
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

        <Stagger className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {personas.map((p, i) => (
            <StaggerItem key={p.title}>
              <motion.div
                className={`relative bg-gradient-to-br ${p.gradient} rounded-2xl p-7 border border-gray-100/80 h-full overflow-hidden`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -6, borderColor: p.borderHover }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                style={{ boxShadow: hoveredIndex === i ? `0 20px 50px -12px ${p.borderHover}` : "0 1px 3px rgba(0,0,0,0.04)" }}
              >
                {/* Animated emoji */}
                <motion.div
                  className="text-5xl mb-5 inline-block"
                  animate={hoveredIndex === i ? { scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {p.emoji}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {p.examples.map((ex, j) => (
                    <motion.span
                      key={ex}
                      className={`text-xs font-medium px-3 py-1.5 rounded-full ${p.accentBg}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: j * 0.05 }}
                    >
                      {ex}
                    </motion.span>
                  ))}
                </div>

                {/* Decorative corner glow on hover */}
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[60px] pointer-events-none"
                      style={{ backgroundColor: p.borderHover }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 0.4, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
