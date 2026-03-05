"use client";

import { motion } from "framer-motion";
import { FadeIn, Float } from "./motion";

const floatingAvatars = [
  { letter: "A", x: "8%", y: "20%", delay: 0 },
  { letter: "B", x: "88%", y: "25%", delay: 0.5 },
  { letter: "C", x: "12%", y: "70%", delay: 1 },
  { letter: "D", x: "85%", y: "65%", delay: 1.5 },
  { letter: "E", x: "25%", y: "15%", delay: 2 },
  { letter: "F", x: "75%", y: "80%", delay: 2.5 },
];

export default function CTABanner() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Floating avatars */}
      {floatingAvatars.map((a) => (
        <Float key={a.letter} delay={a.delay} duration={5} y={12}>
          <div
            className="absolute w-10 h-10 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white/40 text-xs font-bold hidden md:flex"
            style={{ left: a.x, top: a.y }}
          >
            {a.letter}
          </div>
        </Float>
      ))}

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Placeholder CTA title
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-lg text-indigo-200/80 mb-8 max-w-xl mx-auto">
            Placeholder CTA description text goes here with value proposition.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-lg px-8 py-4 rounded-xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(99, 102, 241, 0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Placeholder CTA
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-4 text-sm text-indigo-300/50">
            Placeholder disclaimer text
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
