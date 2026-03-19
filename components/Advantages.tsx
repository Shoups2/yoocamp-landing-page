"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./motion";

const faqs = [
  {
    q: "C'est quoi Yoocamp ?",
    a: "Yoocamp est une plateforme pour créer du contenu payant, animer une communauté et vendre des formations en ligne.",
  },
  {
    q: "C'est gratuit ?",
    a: "Oui, tu peux démarrer gratuitement, sans carte bancaire. Yoocamp se rémunère uniquement par une commission sur tes ventes.",
  },
  {
    q: "J'ai besoin de compétences techniques ?",
    a: "Non. Yoocamp est conçu pour être simple et intuitif. Tu peux créer et configurer ton espace en quelques clics, sans aucune compétence technique.",
  },
  {
    q: "Je n'ai pas encore d'audience, c'est un problème ?",
    a: "Non. Tu peux commencer sans audience. Yoocamp te permet de créer ton contenu et de construire ta communauté progressivement.",
  },
  {
    q: "Comment je suis payé ?",
    a: "Tu fixes librement tes prix. Les paiements sont sécurisés et tes revenus te sont versés directement sur ton compte. Yoocamp applique une commission sur chaque vente.",
  },
  {
    q: "Quels types de contenus je peux vendre ?",
    a: "Formations vidéo, modules de cours, coachings, abonnements mensuels ou événements… Tu choisis le format qui te correspond et tu fixes librement tes prix.",
  },
  {
    q: "Quelle est la différence avec Skool, Teachable ou Podia ?",
    a: "Yoocamp combine communauté, formations, contenu premium et monétisation dans un seul espace. Pas besoin de jongler entre plusieurs outils — tout est intégré et pensé pour les créateurs francophones.",
  },
  {
    q: "Je peux quitter à tout moment ?",
    a: "Bien sûr. Aucun engagement, aucun frais caché. Tu es libre de partir quand tu veux et tes données restent accessibles.",
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
    <section id="faq" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#FAFAFA]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute top-[-15%] left-[-5%] w-[50%] h-[65%] bg-blue-200/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[45%] h-[55%] bg-violet-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[40%] right-[15%] w-[30%] h-[30%] bg-pink-200/15 rounded-full blur-[90px] pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
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
