"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./motion";

type Platform = {
  name: string;
  logo: string;
  lang: string;
  communaute: boolean;
  formations: boolean;
  videosPremium: boolean;
  prix: string;
  highlight?: boolean;
};

const platforms: Platform[] = [
  { name: "Yoocamp",   logo: "/logos/yoocamp.png",   lang: "Français", communaute: true,  formations: true,  videosPremium: true,  prix: "Gratuit",    highlight: true },
  { name: "Skool",     logo: "/logos/skool.png",     lang: "Anglais",  communaute: true,  formations: true,  videosPremium: false, prix: "9 $/mois" },
  { name: "Patreon",   logo: "/logos/patreon.png",   lang: "Anglais",  communaute: false, formations: false, videosPremium: true,  prix: "Gratuit" },
  { name: "Teachable", logo: "/logos/teachable.png", lang: "Anglais",  communaute: false, formations: true,  videosPremium: false, prix: "39 $/mois" },
];

const pillars = [
  "Offre gratuite pour démarrer",
  "Formations",
  "Paiements sécurisés",
  "Vidéos premium",
  "Interface moderne",
  "Événements privés",
];

function StatusIcon({ has, highlight }: { has: boolean; highlight?: boolean }) {
  if (has) {
    return (
      <span
        className={
          "w-4 h-4 rounded-full flex items-center justify-center shrink-0 " +
          (highlight
            ? "bg-[#6952E6] shadow-[0_2px_6px_rgba(105,82,230,0.4)]"
            : "bg-gray-200")
        }
      >
        <svg
          className={"w-2.5 h-2.5 " + (highlight ? "text-white" : "text-gray-500")}
          fill="none"
          stroke="currentColor"
          strokeWidth={3.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </span>
    );
  }
  return (
    <span className="w-4 h-4 flex items-center justify-center shrink-0 text-gray-300 text-sm font-medium">
      —
    </span>
  );
}

export default function Problem() {
  return (
    <section id="pourquoi-yoocamp" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[-10%] w-[40%] h-[60%] bg-blue-100/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-[-10%] w-[40%] h-[60%] bg-red-100/30 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* ── Header ── */}
        <FadeIn>
          <div className="text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#6952E6] mb-5">
              Pourquoi Yoocamp ?
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6 max-w-3xl mx-auto">
              Choisis la plateforme{" "}
              <span className="bg-gradient-to-r from-[#6952E6] via-[#8B75FF] to-[#6C4FE0] bg-clip-text text-transparent">
                la plus adaptée aux créateurs
              </span>
              .
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-14">
              Avec Yoocamp, tu peux démarrer gratuitement, publier des vidéos premium, lancer tes formations et créer un espace que tes membres auront envie de rejoindre.
            </p>
          </div>
        </FadeIn>

        {/* ── Comparaison tableau léger ── */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
            {platforms.map((p, i) => {
              const isYoo = !!p.highlight;
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={isYoo ? { y: -3 } : undefined}
                  className={
                    "relative rounded-2xl p-5 text-center overflow-hidden " +
                    (isYoo
                      ? "bg-white border-2 border-[#6952E6]/40 shadow-[0_10px_35px_-8px_rgba(105,82,230,0.35)]"
                      : "bg-gray-50/70 border border-gray-100")
                  }
                >
                  {isYoo && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#6952E6]/[0.04] via-transparent to-[#8B75FF]/[0.06] pointer-events-none" />
                      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#6952E6] to-transparent" />
                    </>
                  )}

                  <div className="relative">
                    {/* Logo */}
                    {isYoo ? (
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="w-10 h-10 rounded-lg mx-auto mb-3 shadow-[0_4px_12px_rgba(105,82,230,0.3)] ring-2 ring-white"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center bg-white border border-gray-200/60 shadow-sm overflow-hidden">
                        <img src={p.logo} alt={p.name} className="w-7 h-7 object-contain" />
                      </div>
                    )}

                    <p className={"text-sm mb-4 " + (isYoo ? "font-bold text-gray-900" : "font-semibold text-gray-700")}>
                      {p.name}
                    </p>

                    {/* Mini table */}
                    <ul className="space-y-2 text-left">
                      <li className="flex items-center justify-between text-[11px]">
                        <span className="text-gray-500">Communauté</span>
                        <StatusIcon has={p.communaute} highlight={isYoo} />
                      </li>
                      <li className="flex items-center justify-between text-[11px]">
                        <span className="text-gray-500">Formations</span>
                        <StatusIcon has={p.formations} highlight={isYoo} />
                      </li>
                      <li className="flex items-center justify-between text-[11px]">
                        <span className="text-gray-500">Vidéos premium</span>
                        <StatusIcon has={p.videosPremium} highlight={isYoo} />
                      </li>
                      <li className={"flex items-center justify-between text-[11px] pt-2 mt-1 border-t " + (isYoo ? "border-[#6952E6]/15" : "border-gray-200/70")}>
                        <span className="text-gray-500">Prix</span>
                        {isYoo ? (
                          <span className="inline-flex items-center gap-1 bg-[#6952E6] text-white font-bold px-2 py-0.5 rounded-full shadow-[0_2px_8px_rgba(105,82,230,0.4)]">
                            {p.prix}
                          </span>
                        ) : (
                          <span className="font-semibold text-gray-700">{p.prix}</span>
                        )}
                      </li>
                    </ul>
                  </div>

                  <span
                    className={
                      "absolute top-2.5 right-2.5 text-[9px] font-bold uppercase tracking-wider " +
                      (isYoo ? "text-[#6952E6]" : "text-gray-400")
                    }
                  >
                    {p.lang}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </FadeIn>

        {/* ── Carte Yoocamp principale avec piliers ── */}
        <FadeIn delay={0.5}>
          <div className="relative max-w-2xl mx-auto">
            {/* Glow gradient */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#6952E6] via-[#8B75FF] to-[#6C4FE0] rounded-3xl blur-2xl opacity-15" />

            <motion.div
              className="relative bg-white border border-[#6952E6]/15 rounded-3xl p-7 md:p-9 shadow-[0_8px_28px_-10px_rgba(105,82,230,0.2)]"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="flex items-center justify-center mb-5">
                <img src="/yoocamp 4.svg" alt="Yoocamp" className="h-7" />
              </div>

              <p className="text-center text-lg md:text-xl text-gray-900 font-semibold leading-snug mb-7 max-w-lg mx-auto">
                La plateforme pour{" "}
                <span className="bg-gradient-to-r from-[#6952E6] to-[#8B75FF] bg-clip-text text-transparent">
                  créer, animer et développer ta communauté
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
