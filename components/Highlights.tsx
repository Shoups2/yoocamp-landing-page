"use client";

import { motion } from "framer-motion";
import CheckList from "./CheckList";
import { RevenueMock, MockMobile } from "./FeaturesTabs";

/* ── Tokens locaux ──────────────────────────────────────────────── */

const MINT = { c: "#2DCFA8", soft: "rgba(45,207,168,0.10)", ring: "rgba(45,207,168,0.25)" } as const;
const SKY  = { c: "#3D9DFF", soft: "rgba(61,157,255,0.10)", ring: "rgba(61,157,255,0.25)" } as const;

/* ── Section ────────────────────────────────────────────────────── */

export default function Highlights() {
  return (
    <section className="relative pt-6 pb-16 md:pt-8 md:pb-20 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
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
              className="relative px-6 md:px-8 pt-6 pb-4 flex items-center justify-center min-h-[200px]"
              style={{ background: `linear-gradient(135deg, ${MINT.soft} 0%, rgba(250,250,253,0.5) 100%)` }}
            >
              <div className="relative w-full max-w-sm">
                <RevenueMock />
              </div>
            </div>

            {/* Text zone */}
            <div className="p-6 md:p-7 flex-1 flex flex-col">
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
                Gère tes revenus{" "}
                <span
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${MINT.c}, #5DDDBE)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  sans complexité
                </span>
              </h3>
              <p className="mt-3 text-[15px] text-gray-500 leading-relaxed">
                Vends tes formations, vidéos ou abonnements, encaisse les paiements et suis tes ventes en temps réel depuis ton dashboard intégré.
              </p>
              <div className="mt-5">
                <CheckList
                  color={MINT.c}
                  items={["Suivi des ventes en temps réel", "Dashboard intégré", "Paiements sécurisés", "Virements automatiques"]}
                />
              </div>
            </div>
          </motion.article>

          {/* ── Carte 2 : App mobile ── */}
          <motion.article
            className="group relative rounded-[2rem] border overflow-hidden bg-white shadow-[0_1px_2px_rgba(15,12,40,0.04),0_4px_16px_rgba(15,12,40,0.05),0_12px_32px_-8px_rgba(15,12,40,0.04)] flex flex-col"
            style={{ borderColor: SKY.ring }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Mockup zone — top */}
            <div
              className="relative px-6 md:px-8 pt-6 pb-4 flex items-center justify-center min-h-[200px]"
              style={{ background: `linear-gradient(135deg, ${SKY.soft} 0%, rgba(250,250,253,0.5) 100%)` }}
            >
              <div className="relative scale-[0.5] md:scale-[0.55] origin-center -my-[110px]">
                <MockMobile tone={SKY} />
              </div>
            </div>

            {/* Text zone */}
            <div className="p-6 md:p-7 flex-1 flex flex-col">
              <div
                className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] self-start mb-3"
                style={{ color: SKY.c }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: SKY.c }} />
                Mobile
              </div>
              <h3
                className="font-bold text-gray-900 text-[1.7rem] md:text-[1.95rem] leading-[1.05] tracking-[-0.025em]"
                style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
              >
                Ta communauté toujours{" "}
                <span
                  style={{
                    backgroundImage: `linear-gradient(135deg, #1E40AF, #60A5FA)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  à portée de main
                </span>
              </h3>
              <p className="mt-3 text-[15px] text-gray-500 leading-relaxed">
                Tes membres retrouvent tes contenus, formations, discussions et événements depuis leur téléphone, avec une expérience simple à utiliser au quotidien.
              </p>
              <div className="mt-5">
                <CheckList
                  color={SKY.c}
                  items={["Accès depuis le téléphone", "Notifications push", "Formations faciles à suivre", "Discussions à tout moment"]}
                />
              </div>
            </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
}
