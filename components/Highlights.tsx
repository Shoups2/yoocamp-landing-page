"use client";

import { motion } from "framer-motion";
import CheckList from "./CheckList";
import { RevenueMock, MockMobile } from "./FeaturesTabs";

/* ── Tokens locaux ──────────────────────────────────────────────── */

const MINT = { c: "#2DCFA8", soft: "rgba(45,207,168,0.10)", ring: "rgba(45,207,168,0.25)" } as const;
const SUN  = { c: "#FFB627", soft: "rgba(255,182,39,0.10)", ring: "rgba(255,182,39,0.25)" } as const;

/* ── Section ────────────────────────────────────────────────────── */

export default function Highlights() {
  return (
    <section className="relative pt-2 pb-16 md:pt-4 md:pb-20 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* ── Séparateur "Inclus aussi" ── */}
        <motion.div
          className="relative max-w-md mx-auto mb-10 md:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 flex items-center pointer-events-none" aria-hidden="true">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">
              Inclus aussi
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">

          {/* ── Carte 1 : Monétisation ── */}
          <motion.article
            className="group relative rounded-[2rem] border overflow-hidden bg-white shadow-[0_1px_2px_rgba(15,12,40,0.04),0_4px_16px_rgba(15,12,40,0.05),0_12px_32px_-8px_rgba(15,12,40,0.04)] flex flex-col"
            style={{ borderColor: MINT.ring }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Mockup zone — top */}
            <div
              className="relative px-6 md:px-8 pt-8 pb-6 flex items-center justify-center min-h-[280px]"
              style={{ background: `linear-gradient(135deg, ${MINT.soft} 0%, rgba(250,250,253,0.5) 100%)` }}
            >
              <div className="relative w-full max-w-sm">
                <RevenueMock />
              </div>
            </div>

            {/* Text zone */}
            <div className="p-7 md:p-8 flex-1 flex flex-col">
              <div
                className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] self-start mb-3"
                style={{ color: MINT.c }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: MINT.c }} />
                Monétisation
              </div>
              <h3
                className="font-bold text-gray-900 text-[1.7rem] md:text-[1.95rem] leading-[1.05] tracking-[-0.025em]"
                style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
              >
                Transforme ton contenu{" "}
                <span
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${MINT.c}, #5DDDBE)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  en revenus
                </span>
              </h3>
              <p className="mt-3 text-[15px] text-gray-500 leading-relaxed">
                Vends tes formations, vidéos ou accès privés, fixe tes prix librement et encaisse via Stripe. Yoocamp gère les paiements, les accès et les virements automatiques.
              </p>
              <div className="mt-5">
                <CheckList
                  color={MINT.c}
                  items={["Prix libres", "Abonnement ou paiement unique", "Paiements sécurisés", "Virements automatiques"]}
                />
              </div>
            </div>
          </motion.article>

          {/* ── Carte 2 : App mobile ── */}
          <motion.article
            className="group relative rounded-[2rem] border overflow-hidden bg-white shadow-[0_1px_2px_rgba(15,12,40,0.04),0_4px_16px_rgba(15,12,40,0.05),0_12px_32px_-8px_rgba(15,12,40,0.04)] flex flex-col"
            style={{ borderColor: SUN.ring }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Mockup zone — top */}
            <div
              className="relative px-6 md:px-8 pt-8 pb-6 flex items-center justify-center min-h-[280px]"
              style={{ background: `linear-gradient(135deg, ${SUN.soft} 0%, rgba(250,250,253,0.5) 100%)` }}
            >
              <div className="relative scale-[0.7] md:scale-[0.75] origin-center">
                <MockMobile tone={SUN} />
              </div>
            </div>

            {/* Text zone */}
            <div className="p-7 md:p-8 flex-1 flex flex-col">
              <div
                className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] self-start mb-3"
                style={{ color: SUN.c }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: SUN.c }} />
                App mobile
              </div>
              <h3
                className="font-bold text-gray-900 text-[1.7rem] md:text-[1.95rem] leading-[1.05] tracking-[-0.025em]"
                style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
              >
                Garde le lien{" "}
                <span
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${SUN.c}, #FFD16B)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  avec ta communauté
                </span>
              </h3>
              <p className="mt-3 text-[15px] text-gray-500 leading-relaxed">
                Tes membres accèdent à tes contenus, formations, discussions et événements depuis leur téléphone, où qu&apos;ils soient.
              </p>
              <div className="mt-5">
                <CheckList
                  color={SUN.c}
                  items={["Accès iOS & Android", "Notifications push", "Formations sur mobile", "Discussions à tout moment"]}
                />
              </div>
            </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
}
