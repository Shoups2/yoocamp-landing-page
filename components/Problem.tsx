"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./motion";

/* ── Outils dispersés (logos approximatifs via lettres + couleurs de marque) ── */

const tools = [
  { name: "Discord",      letter: "D", color: "#5865F2", top: "5%",  left: "8%",  rotate: -5 },
  { name: "Notion",       letter: "N", color: "#000000", top: "10%", left: "58%", rotate: 4 },
  { name: "Stripe",       letter: "S", color: "#635BFF", top: "28%", left: "22%", rotate: -3 },
  { name: "Calendly",     letter: "C", color: "#006BFF", top: "32%", left: "65%", rotate: 6 },
  { name: "Mailchimp",    letter: "M", color: "#FFE01B", top: "52%", left: "5%",  rotate: 5 },
  { name: "Google Drive", letter: "G", color: "#34A853", top: "55%", left: "50%", rotate: -4 },
  { name: "WordPress",    letter: "W", color: "#21759B", top: "75%", left: "20%", rotate: 3 },
  { name: "Systeme.io",   letter: "S", color: "#FF6B6B", top: "78%", left: "60%", rotate: -6 },
];

export default function Problem() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Colonne texte ── */}
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 border border-red-200/50">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
              Le problème
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Ton contenu avance, mais ton espace reste dispersé.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Tu publies ici, tu vends ailleurs, tu échanges encore ailleurs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Résultat : tes contenus, tes membres et tes ventes se retrouvent éparpillés entre <span className="font-semibold text-gray-900">des outils qui ne se parlent pas</span>.
            </p>
          </FadeIn>

          {/* ── Colonne visuelle : bulles d'outils dispersées ── */}
          <div className="relative h-[420px] md:h-[460px]">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                className="absolute"
                style={{ top: tool.top, left: tool.left }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                >
                  <div
                    className="bg-white border border-gray-200 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] px-3.5 py-2 flex items-center gap-2 hover:shadow-md hover:border-gray-300 transition-all cursor-default"
                    style={{ transform: `rotate(${tool.rotate}deg)` }}
                  >
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0"
                      style={{
                        backgroundColor: tool.color,
                        color: tool.color === "#FFE01B" ? "#000" : "#fff",
                      }}
                    >
                      {tool.letter}
                    </div>
                    <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                      {tool.name}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ── Transition vers la solution ── */}
        <FadeIn delay={0.3}>
          <div className="mt-20 md:mt-24 text-center">
            <p className="text-xl md:text-2xl font-semibold text-gray-900">
              Avec <span className="bg-gradient-to-r from-[#6952E6] to-[#8B75FF] bg-clip-text text-transparent">Yoocamp</span>, ton contenu, ta communauté et tes offres vivent au même endroit.
            </p>
            <motion.div
              className="mt-6 flex justify-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </motion.div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
