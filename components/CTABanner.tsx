"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./motion";

export default function CTABanner() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Waitlist signup:", { email, role });
    setSubmitted(true);
  }

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-400/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Prêt à lancer ta communauté ?
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-lg text-indigo-200 mb-10 max-w-md mx-auto">
            Rejoins la liste d&apos;attente et fais partie des premiers créateurs à accéder à Yoocamp.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <p className="font-semibold text-white text-lg">Tu es sur la liste !</p>
              <p className="text-sm text-indigo-200 mt-2">On te contactera dès que Yoocamp sera prêt.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Ton adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-indigo-300/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all"
              />

              <select
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all appearance-none"
              >
                <option value="" disabled className="text-gray-900">
                  Je suis…
                </option>
                <option value="creator" className="text-gray-900">Créateur de contenu</option>
                <option value="coach" className="text-gray-900">Coach / Formateur</option>
                <option value="expert" className="text-gray-900">Expert / Indépendant</option>
                <option value="other" className="text-gray-900">Autre</option>
              </select>

              <motion.button
                type="submit"
                className="w-full bg-white text-indigo-700 font-semibold py-3.5 rounded-xl text-[15px] shadow-lg"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                Rejoindre la liste d&apos;attente
              </motion.button>

              <p className="text-xs text-indigo-300/60">
                Accès early — priorité aux premiers inscrits. Pas de spam, promis.
              </p>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
