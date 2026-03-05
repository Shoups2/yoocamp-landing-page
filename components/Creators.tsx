"use client";

import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "./motion";

const personas = [
  {
    emoji: "🎬",
    title: "Créateur de contenu",
    desc: "Tu publies des vidéos, podcasts ou articles et tu veux monétiser ton audience avec un espace exclusif.",
    examples: ["Youtubeurs", "Streamers", "Podcasteurs", "Blogueurs"],
  },
  {
    emoji: "🎯",
    title: "Coach & Formateur",
    desc: "Tu accompagnes des élèves ou des clients et tu veux structurer tes formations en ligne.",
    examples: ["Coachs sportifs", "Formateurs business", "Profs en ligne", "Mentors"],
  },
  {
    emoji: "💡",
    title: "Expert & Indépendant",
    desc: "Tu as une expertise à partager et tu veux créer une communauté engagée autour de ta thématique.",
    examples: ["Consultants", "Freelances", "Auteurs", "Conférenciers"],
  },
];

export default function Creators() {
  return (
    <section id="pour-qui" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3">
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
          {personas.map((p) => (
            <StaggerItem key={p.title}>
              <motion.div
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100 h-full"
                whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(99,102,241,0.08)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="text-4xl mb-4">{p.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.examples.map((ex) => (
                    <span
                      key={ex}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-50 text-indigo-600"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
