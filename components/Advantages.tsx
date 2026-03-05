"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./motion";

const faqs = [
  {
    q: "Je peux essayer Yoocamp gratuitement ?",
    a: "Oui ! Tu peux tester Yoocamp gratuitement et découvrir toutes les fonctionnalités. Aucune carte bancaire n'est requise.",
  },
  {
    q: "Dois-je déjà avoir une communauté pour utiliser Yoocamp ?",
    a: "Pas du tout. Yoocamp t'aide justement à construire ta communauté de zéro. Tu peux commencer avec quelques membres et grandir à ton rythme.",
  },
  {
    q: "C'est fait pour quel type de formateurs ?",
    a: "Yoocamp s'adresse à tous les créateurs de contenu, coachs, formateurs et experts qui veulent monétiser leur savoir et fédérer une communauté engagée.",
  },
  {
    q: "Qu'est-ce qui rend Yoocamp différent ?",
    a: "Yoocamp regroupe tout en un seul endroit : vidéo, communauté, formations, événements et monétisation. Pas besoin de jongler entre 5 outils différents.",
  },
  {
    q: "Que se passe-t-il si je n'obtiens pas de membres ?",
    a: "Yoocamp met à ta disposition des outils pour attirer et engager tes membres. Et si tu as besoin d'aide, notre équipe est là pour t'accompagner.",
  },
  {
    q: "Dois-je savoir programmer ?",
    a: "Absolument pas. Yoocamp est conçu pour être simple et intuitif. Tu configures ton espace en quelques clics, sans aucune compétence technique.",
  },
  {
    q: "Comment fonctionne le paiement de mes formations ?",
    a: "Tu fixes tes prix librement. Les paiements sont gérés de façon sécurisée et tu reçois tes revenus directement sur ton compte.",
  },
  {
    q: "Puis-je annuler ou quitter la plateforme si je change d'avis ?",
    a: "Bien sûr. Tu es libre de quitter à tout moment, sans engagement ni frais cachés. Tes données restent accessibles.",
  },
  {
    q: "Puis-je importer mes élèves depuis une autre plateforme ?",
    a: "Oui, tu peux facilement importer ta liste de membres existante pour démarrer rapidement sur Yoocamp.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-gray-100 last:border-0"
      initial={false}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors pr-4">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-xl text-gray-400 shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Advantages() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-gray-50/50">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Questions fréquentes
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 md:px-8">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
