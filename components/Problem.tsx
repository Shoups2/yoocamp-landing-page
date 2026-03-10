"use client";

import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "./motion";

/* ── Logos des outils (simplifiés) ──────── */

const tools = [
  { name: "Discord", color: "#5865F2", letter: "D" },
  { name: "YouTube", color: "#FF0000", letter: "Y" },
  { name: "Teachable", color: "#1D1D1B", letter: "T" },
  { name: "Calendly", color: "#006BFF", letter: "C" },
  { name: "Notion", color: "#000000", letter: "N" },
  { name: "Stripe", color: "#635BFF", letter: "S" },
];

/* ── Cartes problème ────────────────────── */

const problems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0L21.75 16.5 12 21.75 2.25 16.5l4.179-2.25m0 0 5.571 3 5.571-3" />
      </svg>
    ),
    title: "5 outils pour 1 activité",
    desc: "Rien n'est connecté.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: "Trop cher à développer",
    desc: "Des mois de travail et un budget élevé.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "Zéro communauté",
    desc: "Du contenu diffusé, aucun lien créé.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    ),
    title: "Membres perdus",
    desc: "Trop de comptes, trop de liens.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white via-gray-50/60 to-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        {/* ── Header ── */}
        <FadeIn className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">Le problème</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Trop d&apos;outils, zéro résultat
          </h2>
        </FadeIn>

        {/* ── Barre d'outils visuelle ── */}
        <FadeIn delay={0.15} className="mb-16">
          <div className="flex items-center justify-center flex-wrap gap-3">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: tool.color }}
                >
                  {tool.letter}
                </div>
                <span className="text-sm font-medium text-gray-700">{tool.name}</span>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="text-center text-sm text-gray-400 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            …et encore, on ne compte pas les autres.
          </motion.p>
        </FadeIn>

        {/* ── Grille de cartes ── */}
        <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.08}>
          {problems.map((problem) => (
            <StaggerItem key={problem.title}>
              <motion.div
                className="group bg-white rounded-2xl border border-gray-100 p-5 h-full text-center"
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
                  borderColor: "rgba(239,68,68,0.15)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-3 transition-colors group-hover:bg-red-100">
                  {problem.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{problem.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{problem.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* ── Transition ── */}
        <FadeIn delay={0.3} className="mt-20 text-center">
          <motion.p
            className="text-2xl md:text-3xl font-bold text-gray-900"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Et si tout était au même endroit ?
          </motion.p>
          <motion.div
            className="mt-4 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <svg className="w-5 h-5 text-indigo-400 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
