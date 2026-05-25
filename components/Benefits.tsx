"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Carousel Items ──────────────────────── */

const carouselItems = [
  {
    icon: (
      <span className="text-5xl" style={{ filter: "drop-shadow(0 0 8px rgba(123, 97, 255, 0.4))" }}>💎</span>
    ),
    label: "Publie du",
    labelHighlight: "Contenu Premium",
    desc: "Vidéos & modules",
    color: "#3B82F6",
    bg: "rgba(59, 130, 246, 0.08)",
  },
  {
    icon: (
      <svg className="w-14 h-14" fill="none" strokeWidth={1.5} viewBox="0 0 24 24">
        <defs>
          <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>
        <path stroke="url(#capGrad)" strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    label: "Lance tes",
    labelHighlight: "Formations",
    desc: "Formations & parcours",
    color: "#F59E0B",
    bg: "rgba(245, 158, 11, 0.08)",
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
            <stop offset="50%" stopColor="#6952E6" />
            <stop offset="100%" stopColor="#6C4FE0" />
          </linearGradient>
        </defs>
        <path stroke="url(#violetGrad)" strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
      </svg>
    ),
    label: "Suis ta croissance",
    labelSub: "et tes revenus",
    desc: "Tableau de bord",
    color: "#6952E6",
    bg: "rgba(123, 97, 255, 0.08)",
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
  "h-[400px] rounded-3xl bg-white border border-gray-200/80 p-8 flex flex-col overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06),0_12px_40px_rgba(0,0,0,0.04)] transition-shadow duration-500";

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
            className="w-[80%] h-[170px] bg-[#FAFAFA] rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.08),0_1px_4px_rgba(0,0,0,0.04)] p-6 flex flex-col items-center justify-center gap-4"
            initial={{ opacity: 0, x: 120, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -120, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={`flex items-center transition-colors duration-500 ${item.centered ? "justify-center" : "justify-start self-start"}`} style={{ color: item.color }}>
              {item.icon}
            </div>
            <p className={`text-[1.35rem] font-medium text-gray-900 tracking-[-0.02em] leading-snug ${item.centered ? "self-center text-center" : "self-start text-left"}`}>
              {item.label}{item.labelHighlight && <><br /><span className="font-bold" style={{ color: item.color }}>{item.labelHighlight}</span></>}{item.labelSub && <><br />{item.labelSub}</>}
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
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-[-0.03em] leading-[1.1]">
            Ton contenu <span className="bg-gradient-to-r from-[#6952E6] via-[#8B75FF] to-[#6C4FE0] bg-clip-text text-transparent">attire</span>.<br className="hidden sm:block" /> Ton espace doit enfin <span className="bg-gradient-to-r from-[#6952E6] via-[#8B75FF] to-[#6C4FE0] bg-clip-text text-transparent">convertir</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {/* Card 1 — Smartphone */}
          <motion.div
            className="h-[400px] rounded-3xl bg-white border border-gray-200/80 pt-8 px-8 flex flex-col overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06),0_12px_40px_rgba(0,0,0,0.04)] transition-shadow duration-500"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, boxShadow: "0 8px 30px rgba(123, 97, 255, 0.12), 0 20px 50px rgba(123, 97, 255, 0.08)" }}
          >
            <h3 className="text-[1.35rem] font-medium text-gray-900 mb-6 tracking-[-0.02em] leading-snug min-h-[3.5rem]">Un espace privé pour toi et ta communauté</h3>

            <div className="flex-1 flex justify-center items-start min-h-0">
              <div className="w-[280px] h-full bg-white rounded-t-[2.4rem] border border-b-0 border-gray-200 shadow-[0_-4px_30px_rgba(0,0,0,0.14),0_0_0_1px_rgba(0,0,0,0.05),0_8px_40px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden">
                <div className="bg-white h-2 rounded-t-[2.4rem]" />
                <div className="bg-white px-8 pt-2 pb-0.5">
                  <div className="flex items-center gap-3 bg-gradient-to-r from-[#6952E6] to-[#8B75FF] rounded-full px-4 py-[5px] shadow-[0_2px_8px_rgba(123,97,255,0.25)]">
                    <svg className="w-3.5 h-3.5 text-white/90" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.97.633-3.792 1.708-5.274" />
                    </svg>
                    <span className="text-sm text-white/90 font-medium flex-1 text-center -ml-3">www.yoocamp.com</span>
                  </div>
                </div>

                <div className="flex flex-col items-center px-6 py-5 gap-3 flex-1 justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6952E6] to-[#9B8AFF] p-[2px] shadow-[0_4px_12px_rgba(123,97,255,0.2)]">
                    <img
                      src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=150&h=150&fit=crop&crop=face"
                      alt="Créateur"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>

                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-900 leading-tight">Lucas Martin</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg className="w-[26px] h-[26px] text-gray-400 transition-colors duration-200 hover:text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <svg className="w-[26px] h-[26px] text-gray-400 transition-colors duration-200 hover:text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    <svg className="w-[26px] h-[26px] text-gray-400 transition-colors duration-200 hover:text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="text-center">
                      <p className="text-base font-bold text-[#6952E6]">4.8K</p>
                      <p className="text-[11px] text-gray-500">Membres</p>
                    </div>
                    <div className="w-px h-4 bg-gray-200" />
                    <div className="text-center">
                      <p className="text-base font-bold text-gray-900">12</p>
                      <p className="text-[11px] text-gray-500">Formations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Carousel */}
          <motion.div
            className={cardClass}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, boxShadow: "0 8px 30px rgba(123, 97, 255, 0.12), 0 20px 50px rgba(123, 97, 255, 0.08)" }}
          >
            <h3 className="text-[1.35rem] font-medium text-gray-900 mb-6 tracking-[-0.02em] leading-snug min-h-[3.5rem]">Tous les outils pour créer, partager et vendre ton travail</h3>
            <CarouselCard />
          </motion.div>

          {/* Card 3 — Stats */}
          <motion.div
            className={cardClass}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, boxShadow: "0 8px 30px rgba(123, 97, 255, 0.12), 0 20px 50px rgba(123, 97, 255, 0.08)" }}
          >
            <h3 className="text-[1.35rem] font-medium text-gray-900 mb-6 tracking-[-0.02em] leading-snug min-h-[3.5rem]">Monétise ton contenu simplement</h3>

            <div className="flex-1 flex flex-col gap-3 pb-2">
              {/* Bloc principal — Revenus */}
              <div className="bg-gradient-to-br from-[#6952E6]/[0.06] to-[#6C4FE0]/[0.03] rounded-2xl p-5 border border-[#6952E6]/10">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wide">Revenus ce mois</p>
                    <p className="text-[2.2rem] font-extrabold text-gray-900 leading-none tracking-tight mt-1.5">3 847€</p>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full mt-1">+18%</span>
                </div>
                {/* Mini sparkline */}
                <div className="flex items-end gap-[3px] mt-3 h-6">
                  {[30, 38, 35, 42, 48, 45, 55, 52, 60, 65, 62, 72].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        background: i >= 10 ? "#6952E6" : `rgba(123, 97, 255, ${0.15 + i * 0.06})`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Blocs secondaires */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="bg-[#FAFAFA] rounded-xl p-3 border border-gray-100 text-center">
                  <p className="text-xl font-bold text-gray-900 leading-none">12</p>
                  <p className="text-[10px] text-gray-500 font-medium mt-1.5">Formations vendues</p>
                </div>
                <div className="bg-[#FAFAFA] rounded-xl p-3 border border-gray-100 text-center">
                  <p className="text-xl font-bold text-gray-900 leading-none">20</p>
                  <p className="text-[10px] text-gray-500 font-medium mt-1.5">Coachings réservés</p>
                </div>
                <div className="bg-[#FAFAFA] rounded-xl p-3 border border-gray-100 text-center">
                  <p className="text-xl font-bold leading-none bg-gradient-to-r from-[#6952E6] via-[#8B75FF] to-[#6C4FE0] bg-clip-text text-transparent">+300</p>
                  <p className="text-[10px] text-gray-500 font-medium mt-1.5">Nouveaux membres</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
