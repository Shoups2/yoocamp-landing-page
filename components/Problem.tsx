"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./motion";

type Competitor = {
  name: string;
  logo: string;
  features: string[];
  price?: string;
  flag: string;
};

const competitors: Competitor[] = [
  { name: "Skool",     logo: "/logos/skool.png",     features: ["Communauté", "Formations"], price: "9 $/mois", flag: "🇺🇸" },
  { name: "Patreon",   logo: "/logos/patreon.png",   features: ["Vidéos premium"],           flag: "🇺🇸" },
  { name: "Teachable", logo: "/logos/teachable.png", features: ["Formations"],               flag: "🇺🇸" },
];

const pillars = [
  "Plateforme française",
  "Vidéos premium intégrées",
  "Interface moderne",
  "Offre gratuite pour démarrer",
];

export default function Problem() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[-10%] w-[40%] h-[60%] bg-blue-100/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-[-10%] w-[40%] h-[60%] bg-red-100/30 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* ── Header ── */}
        <FadeIn>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white text-gray-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 border border-gray-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <span aria-hidden="true">🇫🇷</span>
              <span>Pour les créateurs francophones</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6 max-w-3xl mx-auto">
              Enfin une plateforme communautaire pensée pour les{" "}
              <span className="bg-gradient-to-r from-[#6952E6] via-[#8B75FF] to-[#6C4FE0] bg-clip-text text-transparent">
                créateurs francophones
              </span>
              .
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-14">
              Avec Yoocamp, tu peux démarrer gratuitement. Une plateforme française, des vidéos premium intégrées et une interface moderne pour créer une vraie expérience membre.
            </p>
          </div>
        </FadeIn>

        {/* ── Comparaison 4 piliers ── */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
            {/* Concurrents */}
            {competitors.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-gray-50/70 border border-gray-100 rounded-2xl p-5 text-center"
              >
                <div className="w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center bg-white border border-gray-200/60 shadow-sm overflow-hidden">
                  <img src={c.logo} alt={c.name} className="w-7 h-7 object-contain" />
                </div>
                <p className="text-sm font-semibold text-gray-700 mb-3">{c.name}</p>
                <ul className="space-y-1.5 text-left">
                  {c.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-1.5 text-[11px] text-gray-600 font-medium">
                      <span className="w-3.5 h-3.5 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                        <svg className="w-2 h-2 text-gray-500" fill="none" stroke="currentColor" strokeWidth={3.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                {c.price && (
                  <div className="mt-3 pt-3 border-t border-gray-200/70">
                    <div className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-600 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                      <span>{c.price}</span>
                    </div>
                  </div>
                )}
                <span className="absolute top-2.5 right-2.5 text-[9px] font-bold uppercase tracking-wider text-gray-400">
                  Anglais
                </span>
              </motion.div>
            ))}

            {/* Yoocamp — card mise en avant dans la rangée */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3 + 3 * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="relative bg-white rounded-2xl p-5 text-center overflow-hidden border-2 border-[#6952E6]/40 shadow-[0_10px_35px_-8px_rgba(105,82,230,0.35)]"
            >
              {/* Subtle violet tinted background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6952E6]/[0.04] via-transparent to-[#8B75FF]/[0.06] pointer-events-none" />

              {/* Top accent line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#6952E6] to-transparent" />

              <div className="relative">
                <img src="/logos/yoocamp.png" alt="Yoocamp" className="w-10 h-10 rounded-lg mx-auto mb-3 shadow-[0_4px_12px_rgba(105,82,230,0.3)] ring-2 ring-white" />
                <p className="text-sm font-bold text-gray-900 mb-3">Yoocamp</p>
                <ul className="space-y-1.5 text-left">
                  {["Communauté", "Formations", "Vidéos premium"].map((feat) => (
                    <li key={feat} className="flex items-center gap-1.5 text-[11px] text-gray-700 font-medium">
                      <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#6952E6] to-[#8B75FF] flex items-center justify-center shrink-0 shadow-[0_2px_6px_rgba(105,82,230,0.4)]">
                        <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" strokeWidth={3.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Gratuit — mis en valeur */}
                <div className="mt-3 pt-3 border-t border-[#6952E6]/15">
                  <div className="inline-flex items-center gap-1.5 bg-[#6952E6] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-[0_3px_10px_rgba(105,82,230,0.4)]">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={3.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Gratuit</span>
                  </div>
                </div>
              </div>

              <span className="absolute top-2.5 right-2.5 text-[9px] font-bold uppercase tracking-wider text-[#6952E6]">
                Français
              </span>
            </motion.div>
          </div>
        </FadeIn>

        {/* ── Carte Yoocamp principale avec piliers ── */}
        <FadeIn delay={0.5}>
          <div className="relative max-w-2xl mx-auto">
            {/* Glow gradient */}
            <div className="absolute -inset-3 bg-gradient-to-r from-[#6952E6] via-[#8B75FF] to-[#6C4FE0] rounded-3xl blur-3xl opacity-20" />

            <motion.div
              className="relative bg-white border border-[#6952E6]/15 rounded-3xl p-7 md:p-9 shadow-[0_10px_40px_-10px_rgba(105,82,230,0.25)]"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="flex items-center justify-center gap-2.5 mb-5">
                <img src="/yoocamp 4.svg" alt="Yoocamp" className="h-7" />
                <span className="text-xl" aria-hidden="true">🇫🇷</span>
              </div>

              <p className="text-center text-lg md:text-xl text-gray-900 font-semibold leading-snug mb-7 max-w-lg mx-auto">
                L'alternative française pour{" "}
                <span className="bg-gradient-to-r from-[#6952E6] to-[#8B75FF] bg-clip-text text-transparent">
                  créer, animer et monétiser ta communauté
                </span>
                .
              </p>

              {/* Piliers avec checkmarks */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
                {pillars.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: 0.7 + i * 0.08, duration: 0.35 }}
                    className="flex items-center gap-2.5 text-sm text-gray-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#6952E6] to-[#8B75FF] flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="font-medium">{p}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
