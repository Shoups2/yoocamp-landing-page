"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./motion";

const floatingEmojis = ["🚀", "💜", "⚡", "🎯", "🔥", "✨"];

export default function CTABanner() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-white border-t border-gray-100">
      {/* Card wrapper avec gradient violet rounded */}
      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
          {/* Background gradient violet */}
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

          <div className="relative max-w-xl mx-auto px-6 py-20 md:py-28 text-center">
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
              <p className="text-lg text-white/80 mb-10 max-w-md mx-auto">
                Crée ton espace gratuitement et invite tes premiers membres en quelques minutes.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <motion.a
                href="https://www.yoocamp.com/register"
                className="inline-flex items-center gap-2 bg-white text-[#6952E6] font-bold px-8 py-4 rounded-xl text-[15px] shadow-lg cursor-pointer"
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Créer ma communauté
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </motion.a>

              <p className="text-sm text-white/80 mt-4">
                Gratuit. Sans engagement. En 2 minutes.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
