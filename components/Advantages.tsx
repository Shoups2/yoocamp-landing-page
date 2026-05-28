"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./motion";

const faqs = [
  {
    q: "C'est quoi Yoocamp ?",
    a: "Yoocamp est une plateforme qui permet aux créateurs de contenu de générer des revenus et de se rapprocher de leur audience. Tu y proposes tes formations, vidéos exclusives et tout autre contenu premium à ta communauté.",
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
    a: "Tu peux vendre des formations, des vidéos exclusives ou des abonnements à ta communauté. Tu choisis tes formats, ton mode d'accès et tes prix.",
  },
  {
    q: "Quelle est la différence avec Skool, Patreon, Teachable ou Podia ?",
    a: "Skool, Patreon, Teachable ou Podia répondent chacun à une partie du besoin. Yoocamp rassemble communauté, formations et vidéos premium dans une plateforme française, avec une offre gratuite pour démarrer simplement.",
  },
  {
    q: "Je peux quitter à tout moment ?",
    a: "Bien sûr. Aucun engagement, aucun frais caché. Tu es libre de partir quand tu veux et tes données restent accessibles.",
  },
];

function FAQItem({ q, a, id }: { q: string; a: string; id: string }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <motion.div
      className="border-b border-gray-100 last:border-0"
      initial={false}
    >
      <button
        id={buttonId}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-semibold text-gray-900 group-hover:text-[#6952E6] transition-colors pr-4">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-xl text-gray-400 shrink-0"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Advantages() {
  return (
    <section id="faq" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-white border-t border-gray-100" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute top-[-15%] left-[-5%] w-[50%] h-[65%] bg-blue-200/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[45%] h-[55%] bg-violet-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[40%] right-[15%] w-[30%] h-[30%] bg-pink-200/15 rounded-full blur-[90px] pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <p className="text-[#6952E6] font-semibold text-sm uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Questions fréquentes
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 md:px-8">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} id={String(i)} q={faq.q} a={faq.a} />
            ))}
          </div>
        </FadeIn>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
