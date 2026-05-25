"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./motion";

const floatingEmojis = ["🚀", "💜", "⚡", "🎯", "🔥", "✨"];

export default function CTABanner() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Signup:", { email, role });
    setSubmitted(true);
  }

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6952E6] via-[#6B4FE0] to-[#4A35A0]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,600px)] h-[min(90vw,600px)] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[min(60vw,300px)] h-[min(60vw,300px)] bg-purple-400/10 rounded-full blur-[100px]" />
      </div>

      {/* Floating emojis */}
      {floatingEmojis.map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl md:text-3xl select-none pointer-events-none opacity-20"
          style={{
            left: `${10 + i * 15}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, i % 2 === 0 ? 15 : -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        >
          {emoji}
        </motion.span>
      ))}

      <div className="relative max-w-xl mx-auto px-6 text-center">
        <FadeIn>
          <motion.div
            className="text-5xl mb-5"
            animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            🚀
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Prêt à lancer ta communauté ?
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-lg text-white/70 mb-10 max-w-md mx-auto">
            Crée ton compte gratuitement et lance ta communauté en quelques minutes.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8"
              >
                <motion.div
                  className="text-5xl mb-3"
                  animate={{ scale: [1, 1.3, 1], rotate: [0, 360] }}
                  transition={{ duration: 0.6 }}
                >
                  🎉
                </motion.div>
                <p className="font-semibold text-white text-lg">C&apos;est parti !</p>
                <p className="text-sm text-white/60 mt-2">Vérifie ta boîte mail pour finaliser ton inscription.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="Ton adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all"
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
                  className="w-full bg-white text-[#6952E6] font-bold py-3.5 rounded-xl text-[15px] shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(255,255,255,0.25)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Créer ma communauté
                </motion.button>

                <p className="text-xs text-white/40">
                  Gratuit pour démarrer. Sans engagement. En 2 minutes.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </FadeIn>
      </div>
    </section>
  );
}
