"use client";

import { motion } from "framer-motion";

const items = [
  "🚀 Lance ta communauté",
  "💰 Monétise ton expertise",
  "🎬 Crée des formations",
  "🎯 Accompagne tes membres",
  "📈 Suis ta croissance",
  "💜 Fédère ton audience",
  "⚡ Tout-en-un",
  "🔥 +500 créateurs",
];

export default function Marquee() {
  return (
    <div className="relative py-5 overflow-hidden bg-[#7B61FF]">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#7B61FF] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#7B61FF] to-transparent z-10" />

      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-white/90 font-semibold text-sm tracking-wide flex items-center gap-2"
          >
            {item}
            <span className="text-white/30">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
