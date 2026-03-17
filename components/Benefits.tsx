"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./motion";

/* ── Carousel Items ──────────────────────── */

const carouselItems = [
  {
    icon: (
      <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    label: "Créer du",
    labelHighlight: "Contenu Exclusif",
    desc: "Vidéos & modules",
    color: "#7B61FF",
    bg: "rgba(123, 97, 255, 0.08)",
  },
  {
    icon: (
      <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    label: "Espace communautaire",
    desc: "Échanges & entraide",
    color: "#EC4899",
    bg: "rgba(236, 72, 153, 0.08)",
  },
  {
    icon: (
      <svg className="w-14 h-14" fill="none" strokeWidth={2} viewBox="0 0 24 24">
        <defs>
          <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="50%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
        </defs>
        <path stroke="url(#greenGrad)" strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
      </svg>
    ),
    label: "Paiements",
    labelSub: "Intégrés",
    desc: "Abonnements & ventes",
    color: "#10B981",
    bg: "rgba(16, 185, 129, 0.08)",
    centered: true,
  },
  {
    icon: (
      <svg className="w-14 h-14" fill="none" strokeWidth={1.3} viewBox="0 0 24 24">
        <defs>
          <linearGradient id="violetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="50%" stopColor="#7B61FF" />
            <stop offset="100%" stopColor="#6C4FE0" />
          </linearGradient>
        </defs>
        <path stroke="url(#violetGrad)" strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    label: "Statistiques",
    desc: "Statistiques & revenus",
    color: "#7B61FF",
    bg: "rgba(123, 97, 255, 0.08)",
    centered: true,
  },
  {
    icon: (
      <svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 18.75h6" />
      </svg>
    ),
    label: "App mobile",
    desc: "iOS & Android",
    color: "#3B82F6",
    bg: "rgba(59, 130, 246, 0.08)",
    centered: true,
  },
];

/* ── Card wrapper class ──────────────────── */

const cardClass =
  "h-[400px] rounded-3xl bg-white border border-gray-200/80 p-8 flex flex-col overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06),0_12px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.08),0_20px_48px_rgba(0,0,0,0.06)]";

/* ── Stat mini-card class ────────────────── */

const statCard =
  "bg-[#FAFAFA] rounded-2xl p-4 flex flex-col justify-center border border-gray-100 transition-colors duration-200 hover:bg-[#F5F5F5]";

/* ── Carousel Card ───────────────────────── */

function CarouselCard() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % carouselItems.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const item = carouselItems[current];

  return (
    <div
      className="flex-1 flex flex-col"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="w-[72%] h-[88%] bg-[#FAFAFA] rounded-2xl border border-gray-100 p-6 flex flex-col items-center justify-center gap-4"
            initial={{ opacity: 0, x: 120, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -120, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={`flex items-center transition-colors duration-500 ${item.centered ? "justify-center" : "justify-start self-start"}`} style={{ color: item.color }}>
              {item.icon}
            </div>
            <p className={`text-[1.35rem] font-medium text-gray-900 tracking-[-0.02em] leading-snug text-left ${item.centered ? "self-center" : "self-start"}`}>
              {item.label}{item.labelHighlight && <><br /><span className="text-[#7B61FF] font-bold">{item.labelHighlight}</span></>}{item.labelSub && <><br />{item.labelSub}</>}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        {carouselItems.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="relative py-2 cursor-pointer"
          >
            <span
              className="block rounded-full transition-all duration-500 ease-out"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                backgroundColor: i === current ? carouselItems[current].color : "#D4D4D8",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Main Component ──────────────────────── */

export default function Benefits() {
  return (
    <section className="pt-28 md:pt-36 pb-28 md:pb-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F7F7F9] to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-[-0.03em] leading-[1.1]">
            Ton contenu <span className="bg-gradient-to-r from-[#7B61FF] via-[#8B75FF] to-[#6C4FE0] bg-clip-text text-transparent">attire</span>.<br className="hidden sm:block" /> Ton espace doit enfin <span className="bg-gradient-to-r from-[#7B61FF] via-[#8B75FF] to-[#6C4FE0] bg-clip-text text-transparent">convertir</span>.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {/* Card 1 — Smartphone */}
          <motion.div
            className="h-[400px] rounded-3xl bg-white border border-gray-200/80 pt-8 px-8 flex flex-col overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06),0_12px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.08),0_20px_48px_rgba(0,0,0,0.06)]"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <h3 className="text-[1.35rem] font-medium text-gray-900 mb-3 tracking-[-0.02em] leading-snug">Crée un espace qui t&apos;appartient</h3>

            <div className="flex-1 flex justify-center items-end min-h-0 -mb-1">
              <div className="w-[280px] bg-white rounded-t-[2.4rem] border border-b-0 border-gray-200 shadow-[0_-2px_20px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] flex flex-col overflow-hidden">
                <div className="bg-white h-2 rounded-t-[2.4rem]" />
                <div className="bg-white px-8 pt-2 pb-0.5">
                  <div className="flex items-center gap-3 bg-gradient-to-r from-[#7B61FF] to-[#8B75FF] rounded-full px-4 py-[5px] shadow-[0_2px_8px_rgba(123,97,255,0.25)]">
                    <svg className="w-3.5 h-3.5 text-white/90" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.97.633-3.792 1.708-5.274" />
                    </svg>
                    <span className="text-sm text-white/90 font-medium flex-1 text-center -ml-3">www.yoocamp.com</span>
                  </div>
                </div>

                <div className="flex flex-col items-center px-6 py-6 gap-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#9B8AFF] p-[2px] shadow-[0_4px_12px_rgba(123,97,255,0.2)]">
                    <img
                      src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=150&h=150&fit=crop&crop=face"
                      alt="Créateur"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>

                  <div className="text-center">
                    <p className="text-base font-bold text-gray-900 leading-tight">Lucas Martin</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg className="w-[18px] h-[18px] text-gray-400 transition-colors duration-200 hover:text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <svg className="w-[18px] h-[18px] text-gray-400 transition-colors duration-200 hover:text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    <svg className="w-[18px] h-[18px] text-gray-400 transition-colors duration-200 hover:text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="text-center">
                      <p className="text-sm font-bold text-gray-900">4.8K</p>
                      <p className="text-[9px] text-gray-500">Membres</p>
                    </div>
                    <div className="w-px h-5 bg-gray-200" />
                    <div className="text-center">
                      <p className="text-sm font-bold text-gray-900">12</p>
                      <p className="text-[9px] text-gray-500">Formations</p>
                    </div>
                    <div className="w-px h-5 bg-gray-200" />
                    <div className="text-center">
                      <p className="text-sm font-bold text-gray-900">48</p>
                      <p className="text-[9px] text-gray-500">Coachings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Carousel */}
          <motion.div
            className={cardClass}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <h3 className="text-[1.35rem] font-medium text-gray-900 mb-6 tracking-[-0.02em] leading-snug">Fidélise avec une meilleure expérience</h3>
            <CarouselCard />
          </motion.div>

          {/* Card 3 — Stats */}
          <motion.div
            className={cardClass}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <h3 className="text-[1.35rem] font-medium text-gray-900 mb-6 tracking-[-0.02em] leading-snug">Transforme ton audience en revenus</h3>

            <div className="flex-1 grid grid-cols-2 gap-3 pb-2">
              <div className={`${statCard} items-center justify-center text-center`}>
                <p className="text-3xl font-extrabold text-[#7B61FF] leading-none tracking-tight">3 000€</p>
                <p className="text-xs text-gray-500 font-medium mt-2">Revenus abonnements</p>
              </div>
              <div className={`${statCard} items-center justify-center text-center`}>
                <p className="text-3xl font-extrabold text-gray-900 leading-none tracking-tight">12</p>
                <p className="text-xs text-gray-500 font-medium mt-2">Formations</p>
              </div>
              <div className={`${statCard} items-center justify-center text-center`}>
                <p className="text-3xl font-extrabold text-gray-900 leading-none tracking-tight">20</p>
                <p className="text-xs text-gray-500 font-medium mt-2">Coachings ce mois</p>
              </div>
              <div className={`${statCard} items-center justify-center text-center`}>
                <p className="text-3xl font-extrabold text-[#7B61FF] leading-none tracking-tight">+300</p>
                <p className="text-xs text-gray-500 font-medium mt-2">Nouveaux membres</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
