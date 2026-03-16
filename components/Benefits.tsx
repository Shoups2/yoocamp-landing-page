"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./motion";

/* ── Carousel Items ──────────────────────── */

const carouselItems = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#7B61FF]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    label: "Formations",
    desc: "Vidéos & modules",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#7B61FF]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    label: "Communauté",
    desc: "Échanges & entraide",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#7B61FF]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
      </svg>
    ),
    label: "Paiements",
    desc: "Abonnements & ventes",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#7B61FF]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    label: "Statistiques",
    desc: "Statistiques & revenus",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#7B61FF]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 18.75h6" />
      </svg>
    ),
    label: "App mobile",
    desc: "iOS & Android",
  },
];

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
      {/* Carousel box */}
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="w-[70%] h-[90%] bg-white rounded-[1.75rem] border border-gray-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-6 flex flex-col items-center justify-center gap-3"
            initial={{ opacity: 0, x: 120, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -120, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#7B61FF]/[0.07] flex items-center justify-center">
              {item.icon}
            </div>
            <p className="text-xl font-bold text-gray-900">{item.label}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        {carouselItems.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="relative h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === current ? 20 : 6,
              backgroundColor: i === current ? "#7B61FF" : "#d1d5db",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Main Component ──────────────────────── */

export default function Benefits() {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="text-center mb-14 md:mb-18">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Ton contenu <span className="bg-gradient-to-r from-[#7B61FF] via-[#8B75FF] to-[#6C4FE0] bg-clip-text text-transparent">attire</span>.<br className="hidden sm:block" /> Ton espace doit enfin <span className="bg-gradient-to-r from-[#7B61FF] via-[#8B75FF] to-[#6C4FE0] bg-clip-text text-transparent">convertir</span>.
          </h2>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="h-[400px] rounded-[1.75rem] border border-gray-200/60 bg-[#F4F4F4] p-7 flex flex-col overflow-hidden">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Transforme ton audience en revenus</h3>

            {/* Stats — asymmetric layout */}
            <div className="flex-1 flex flex-col gap-2.5 px-4 pb-3">
              {/* Row 1 */}
              <div className="flex gap-2.5 flex-1">
                {/* +300 membres */}
                <div className="bg-white rounded-2xl p-4 flex flex-col justify-center border border-gray-100 flex-[1.4] shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <p className="text-2xl font-extrabold text-[#7B61FF] leading-none">+300</p>
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                  <p className="text-[10px] text-gray-400 font-medium">Nouveaux membres</p>
                </div>
                {/* 12 formations */}
                <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center border border-gray-100 flex-[0.8] shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                  <div className="w-9 h-9 rounded-full bg-[#7B61FF]/10 flex items-center justify-center mb-2">
                    <svg className="w-4.5 h-4.5 text-[#7B61FF]" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </div>
                  <p className="text-xl font-extrabold text-gray-900 leading-none">12</p>
                  <p className="text-[9px] text-gray-400 font-medium mt-0.5">Formations</p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex gap-2.5 flex-1">
                {/* 3 000€ */}
                <div className="bg-white rounded-2xl p-4 flex flex-col justify-center border border-gray-100 flex-[0.9] shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                  <p className="text-xl font-extrabold text-gray-900 leading-none">3 000€</p>
                  <p className="text-[9px] text-gray-400 font-medium mt-1">Abonnements</p>
                  <div className="flex gap-0.5 mt-2">
                    {[40, 55, 35, 65, 50, 70, 60].map((h, i) => (
                      <div key={i} className="flex-1 bg-[#7B61FF]/15 rounded-full" style={{ height: h * 0.35 }} />
                    ))}
                  </div>
                </div>
                {/* 20 coachings */}
                <div className="bg-white rounded-2xl p-4 flex flex-col justify-center border border-gray-100 flex-[1.3] shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#7B61FF]/10 flex items-center justify-center shrink-0">
                      <svg className="w-4.5 h-4.5 text-[#7B61FF]" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xl font-extrabold text-gray-900 leading-none">20</p>
                      <p className="text-[9px] text-gray-400 font-medium mt-0.5">Coachings ce mois</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] rounded-[1.75rem] border border-gray-200/60 bg-[#F4F4F4] p-7 flex flex-col overflow-hidden">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Fidélise avec une meilleure expérience</h3>
            <CarouselCard />
          </div>
          <div className="h-[400px] rounded-[1.75rem] border border-gray-200/60 bg-[#F4F4F4] pt-7 px-7 flex flex-col overflow-hidden">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Crée un espace qui t&apos;appartient</h3>

            {/* Smartphone mockup */}
            <div className="flex-1 flex justify-center items-end min-h-0">
              <div className="w-[290px] bg-white rounded-t-[2.4rem] border border-b-0 border-gray-200 shadow-[0_0_30px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden">
                {/* Notch area */}
                <div className="bg-white h-2 rounded-t-[2.4rem]" />
                {/* Status bar + URL bar */}
                <div className="bg-white px-8 pt-2 pb-0.5">
                  <div className="flex items-center gap-3 bg-gradient-to-r from-[#8B75FF] via-[#9B8AFF] to-[#8B75FF] rounded-full px-4 py-[5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.97.633-3.792 1.708-5.274" />
                    </svg>
                    <span className="text-sm text-white/90 font-medium flex-1 text-center -ml-3">www.yoocamp.com</span>
                  </div>
                </div>

                {/* Profile content */}
                <div className="flex flex-col items-center px-6 py-6 gap-3">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7B61FF] to-[#9B8AFF] flex items-center justify-center shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=150&h=150&fit=crop&crop=face"
                      alt="Créateur"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>

                  {/* Name */}
                  <div className="text-center">
                    <p className="text-base font-bold text-gray-900 leading-tight">Lucas Martin</p>
                  </div>

                  {/* Social icons */}
                  <div className="flex items-center gap-3">
                    <svg className="w-[18px] h-[18px] text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <svg className="w-[18px] h-[18px] text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    <svg className="w-[18px] h-[18px] text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-5">
                    <div className="text-center">
                      <p className="text-sm font-bold text-gray-900">4.8K</p>
                      <p className="text-[9px] text-gray-400">Membres</p>
                    </div>
                    <div className="w-px h-6 bg-gray-200" />
                    <div className="text-center">
                      <p className="text-sm font-bold text-gray-900">12</p>
                      <p className="text-[9px] text-gray-400">Formations</p>
                    </div>
                    <div className="w-px h-6 bg-gray-200" />
                    <div className="text-center">
                      <p className="text-sm font-bold text-gray-900">48</p>
                      <p className="text-[9px] text-gray-400">Coachings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
