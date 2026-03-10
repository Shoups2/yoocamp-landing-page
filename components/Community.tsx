"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FadeIn, ScaleIn, Float } from "./motion";

/* ── Events Mock ─────────────────────────── */

const weekEvents = [
  { day: "Lun", num: 9, events: [
    { title: "Mastermind élèves", time: "14h", color: "bg-indigo-500" },
    { title: "Coaching Léo", time: "18h", color: "bg-violet-400" },
  ]},
  { day: "Mar", num: 10, events: [
    { title: "Cours en visio", time: "16h", color: "bg-blue-500" },
  ]},
  { day: "Mer", num: 11, events: [
    { title: "Coaching Marie", time: "10h", color: "bg-indigo-400" },
    { title: "Séminaire St-Tropez", time: "14h", color: "bg-violet-500" },
  ]},
];

function EventsMock() {
  const [selectedDay, setSelectedDay] = useState(0);
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
          <span className="text-xs font-semibold text-gray-700">Semaine du 10 mars</span>
        </div>
        <motion.div
          className="w-2 h-2 rounded-full bg-green-400"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      <div className="px-3 pt-3 pb-2">
        <div className="flex gap-1">
          {weekEvents.map((day, i) => (
            <motion.div
              key={day.day}
              className="flex-1 flex flex-col items-center gap-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
            >
              <motion.div
                className={`w-full rounded-xl py-1.5 border text-center cursor-pointer ${selectedDay === i ? "bg-white border-indigo-200 shadow-sm" : "bg-gray-50 border-gray-200"}`}
                onClick={() => setSelectedDay(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={selectedDay === i ? { y: -2 } : { y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <span className={`text-[10px] font-semibold block transition-colors duration-200 ${selectedDay === i ? "text-indigo-500" : "text-gray-400"}`}>{day.day}</span>
                <span className={`text-sm font-bold block transition-colors duration-200 ${selectedDay === i ? "text-gray-900" : "text-gray-500"}`}>{day.num}</span>
              </motion.div>
              <div className={`w-full h-28 rounded-lg border flex flex-col items-center justify-start gap-1 p-1 overflow-hidden transition-colors duration-200 ${
                selectedDay === i ? "border-indigo-200 bg-indigo-50/50" : "border-gray-100 bg-gray-50/30"
              }`}>
                {day.events.length > 0 ? day.events.map((evt, j) => (
                  <motion.div
                    key={j}
                    className="w-[90%] rounded-md px-1.5 py-1 bg-white border border-gray-200 shadow-sm"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.15 + j * 0.1, type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-1">
                      <div className={`w-1.5 h-1.5 rounded-full ${evt.color} flex-shrink-0`} />
                      <span className="text-[11px] text-gray-800 font-semibold leading-tight block truncate">{evt.title}</span>
                    </div>
                    <span className="text-[10px] text-gray-400 ml-2.5">{evt.time}</span>
                  </motion.div>
                )) : (
                  <div className="w-1 h-1 rounded-full bg-gray-200" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="px-3 pb-3" />
    </div>
  );
}

/* ── Discussion Mock ──────────────────────── */

const chatMessages = [
  { name: "Léa", avatar: "bg-indigo-400", text: "Salut tout le monde ! Prêts pour le mastermind en live ce soir ? 🎉", side: "left" as const },
  { name: "Maxime", avatar: "bg-violet-400", text: "Grave ! Le dernier était incroyable 🚀", side: "left" as const },
  { name: "Toi", avatar: "bg-indigo-600", text: "Rdv à 20h, j'ai un sujet en or 🔥", side: "right" as const },
  { name: "Sofia", avatar: "bg-fuchsia-400", text: "Présente ! J'ai plein de questions 🙋‍♀️", side: "left" as const },
  { name: "Toi", avatar: "bg-indigo-600", text: "Parfait, on va tout décortiquer 💜", side: "right" as const },
];

function DiscussionMock() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs font-semibold text-gray-700">Ma communauté</span>
        </div>
        <div className="flex -space-x-1.5">
          {["bg-indigo-400", "bg-violet-400", "bg-fuchsia-400"].map((c, i) => (
            <motion.div
              key={i}
              className={`w-5 h-5 rounded-full ${c} border-2 border-white`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.2, type: "spring" }}
            />
          ))}
          <motion.div
            className="w-5 h-5 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            <span className="text-[7px] font-bold text-gray-500">+12</span>
          </motion.div>
        </div>
      </div>
      <div className="px-3 py-3 space-y-2.5 h-44 overflow-hidden">
        {chatMessages.map((msg, i) => (
          <motion.div
            key={i}
            className={`flex items-end gap-2 ${msg.side === "right" ? "flex-row-reverse" : ""}`}
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 1 }}
          >
            <div className={`w-6 h-6 rounded-full ${msg.avatar} flex-shrink-0 flex items-center justify-center`}>
              <span className="text-[8px] font-bold text-white">{msg.name[0]}</span>
            </div>
            <div className={`max-w-[75%] ${msg.side === "right" ? "items-end" : "items-start"} flex flex-col gap-0.5`}>
              <span className={`text-[8px] font-medium text-gray-400 ${msg.side === "right" ? "text-right" : ""}`}>{msg.name}</span>
              <div className={`px-3 py-1.5 rounded-2xl text-[11px] leading-relaxed ${
                msg.side === "right"
                  ? "bg-indigo-500 text-white rounded-br-sm"
                  : "bg-gray-100 text-gray-700 rounded-bl-sm"
              }`}>
                {msg.text}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="px-3 pb-3">
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 border border-gray-200">
          <div className="flex-1 flex items-center gap-1">
            <span className="text-[11px] text-gray-500">En train d&apos;écrire</span>
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1 h-1 rounded-full bg-gray-400"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </div>
          <div className="w-6 h-6 rounded-lg bg-indigo-500 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Video Mock ───────────────────────────── */

function VideoMock() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        {/* Thumbnail illustrée */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600" />
        {/* Motif décoratif */}
        <div className="absolute top-[-20%] right-[-15%] w-[60%] h-[80%] bg-white/10 rounded-full blur-[40px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[60%] bg-fuchsia-400/15 rounded-full blur-[30px]" />
        {/* Grille de points */}
        <div className="absolute top-3 right-3 grid grid-cols-3 gap-1 opacity-20">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-white" />
          ))}
        </div>
        {/* Contenu de la miniature */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <div className="flex items-center gap-1.5 mb-2 opacity-80">
            <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
            <span className="text-[9px] font-semibold tracking-wide uppercase">Module 3</span>
          </div>
          <p className="text-[11px] md:text-xs font-bold text-center leading-snug">
            Construire une offre
            <br />
            irrésistible
          </p>
        </div>
        {/* Bouton play */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.35)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-0.5" />
          </motion.div>
        </div>
        {/* Barre de progression */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
          <motion.div
            className="h-full bg-white/80 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "35%" }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
      {/* Info sous la vidéo */}
      <div className="p-3 flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center flex-shrink-0">
          <span className="text-[9px] font-bold text-white">Y</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-gray-900 truncate">Construire une offre irrésistible</p>
          <p className="text-[10px] text-gray-400">Module 3 · 12 min</p>
        </div>
      </div>
    </div>
  );
}

/* ── Course Mock ──────────────────────────── */

function CourseMock() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 space-y-2">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded bg-indigo-50 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-sm bg-indigo-200" />
        </div>
        <div className="h-1.5 w-16 bg-gray-200 rounded" />
      </div>
      {[80, 45, 15].map((p, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className={`w-3.5 h-3.5 rounded-full border-2 ${p === 80 ? "border-indigo-500 bg-indigo-100" : "border-gray-200"}`} />
          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-400 rounded-full" style={{ width: `${p}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Revenue Mock ─────────────────────────── */

function RevenueMock() {
  const months = [
    { label: "Jan", value: "10 450 €", h: 30 },
    { label: "Fév", value: "14 800 €", h: 42 },
    { label: "Mar", value: "12 200 €", h: 36 },
    { label: "Avr", value: "18 900 €", h: 58 },
    { label: "Mai", value: "16 300 €", h: 50 },
    { label: "Jun", value: "23 500 €", h: 74 },
    { label: "Jul", value: "27 850 €", h: 95 },
  ];
  const [hovered, setHovered] = useState<number | null>(null);
  const isLast = (i: number) => i === months.length - 1;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-3.5 pt-3 pb-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Total des ventes · 2025</span>
          <motion.div
            className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 pl-1.5 pr-2 py-0.5 rounded-full border border-emerald-100"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
            </svg>
            +24%
          </motion.div>
        </div>

        {/* Montant principal */}
        <div className="flex items-baseline gap-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={hovered !== null ? months[hovered].value : "total"}
              className="text-xl font-extrabold text-gray-900 tracking-tight"
              initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
              transition={{ duration: 0.25 }}
            >
              {hovered !== null ? months[hovered].value : "124 000 €"}
            </motion.span>
          </AnimatePresence>
          <span className={`text-[10px] font-medium text-gray-300 transition-opacity duration-200 ${hovered !== null ? "opacity-100" : "opacity-0"}`}>
            {hovered !== null ? months[hovered].label + " 2025" : "\u00A0"}
          </span>
        </div>
      </div>

      {/* Graphique */}
      <div className="px-3.5 pt-3 pb-2">
        {/* Lignes de grille discrètes */}
        <div className="relative h-32">
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="border-b border-dashed border-gray-100" />
            ))}
          </div>

          {/* Barres */}
          <div className="relative flex items-end gap-1.5 h-full">
            {months.map((m, i) => (
              <div key={i} className="flex-1 flex flex-col items-center h-full justify-end">
                <motion.div
                  className={`w-full rounded-md cursor-pointer relative overflow-hidden ${
                    hovered === i ? "shadow-md" : ""
                  }`}
                  style={{ height: `${m.h}%` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${m.h}%` }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ scale: 1.06 }}
                >
                  {/* Gradient de la barre */}
                  <div className={`absolute inset-0 rounded-md ${
                    isLast(i)
                      ? "bg-gradient-to-t from-emerald-500 via-emerald-400 to-emerald-300"
                      : hovered === i
                        ? "bg-gradient-to-t from-indigo-600 via-indigo-500 to-indigo-400"
                        : "bg-gradient-to-t from-indigo-400/90 via-indigo-300/80 to-indigo-200/70"
                  }`} />
                  {/* Reflet sur la barre */}
                  <div className="absolute inset-x-0 top-0 h-[40%] bg-white/15 rounded-t-md" />
                  {/* Glow sur la dernière barre */}
                  {isLast(i) && (
                    <motion.div
                      className="absolute -inset-1 bg-emerald-400/20 rounded-lg blur-md pointer-events-none"
                      animate={{ opacity: [0.4, 0.7, 0.4] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Labels mois */}
        <div className="flex gap-1.5 mt-2">
          {months.map((m, i) => (
            <span
              key={i}
              className={`flex-1 text-center text-[9px] font-medium transition-colors duration-200 ${
                hovered === i ? "text-gray-700" : isLast(i) ? "text-emerald-500" : "text-gray-300"
              }`}
            >
              {m.label}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-3.5 pb-2.5">
        <div className="flex items-center justify-between pt-2.5 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[10px] text-gray-400 font-medium">Paiements actifs</span>
          </div>
          <span className="text-[10px] text-gray-300 font-medium">Mis à jour il y a 2h</span>
        </div>
      </div>
    </div>
  );
}

/* ── Tag pill ─────────────────────────────── */

function Tag({ children, color = "gray" }: { children: React.ReactNode; color?: string }) {
  const colors: Record<string, string> = {
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
    violet: "bg-violet-50 text-violet-600 border-violet-100",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
    gray: "bg-gray-50 text-gray-500 border-gray-100",
  };
  return (
    <span className={`inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-full border ${colors[color]}`}>
      {children}
    </span>
  );
}

/* ── Switchable Card Data ─────────────────── */

const cardViews = [
  {
    id: "community",
    label: "Communauté",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    iconBg: "bg-violet-100 text-violet-600",
    title: "Communauté",
    desc: "Fédère et anime ton audience dans un espace pensé pour les échanges et l'engagement.",
    tags: [
      { label: "Chat", color: "violet" },
      { label: "Échanges", color: "violet" },
      { label: "Engagement", color: "violet" },
    ],
  },
  {
    id: "events",
    label: "Événements",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
    iconBg: "bg-amber-100 text-amber-600",
    title: "Événements",
    desc: "Organise des masterclasses, sessions de coaching et lives. Tes membres s'inscrivent en un clic.",
    tags: [
      { label: "Lives", color: "amber" },
      { label: "Coaching", color: "amber" },
      { label: "Masterclass", color: "amber" },
    ],
  },
];

/* ── Main Component ──────────────────────── */

export default function Community() {
  const [activeView, setActiveView] = useState<"community" | "events">("community");
  const activeIdx = activeView === "community" ? 0 : 1;
  const view = cardViews[activeIdx];

  return (
    <section id="communauté" className="pt-16 md:pt-20 pb-16 md:pb-20 bg-white">
      <div className="max-w-[90rem] mx-auto px-6">

        {/* ── Header ── */}
        <FadeIn className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 border border-indigo-100/60">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            Tout-en-un
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-[1.1]" style={{ textShadow: "0 4px 24px rgba(99,102,241,0.12), 0 1px 3px rgba(0,0,0,0.06)" }}>
            Tout ce dont tu as besoin,
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent" style={{ filter: "drop-shadow(0 6px 20px rgba(99,102,241,0.25))" }}>
              au même endroit
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed">
            Fini les 6 outils différents. Une seule plateforme pour créer, animer et monétiser.
          </p>
        </FadeIn>

        {/* ── Cards ── */}
        <div className="grid md:grid-cols-[1fr_1.1fr_1fr] gap-5 md:gap-6 items-start pt-12 md:pt-16">

          {/* ── Card 1 : Communauté / Événements (switchable) ── */}
          <ScaleIn delay={0.1}>
            <motion.div
              className="relative rounded-[2rem] border border-gray-200/60 md:mt-10 overflow-hidden shadow-[0_2px_40px_-12px_rgba(139,92,246,0.08)]"

              whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(139,92,246,0.14), 0 0 0 1px rgba(139,92,246,0.04)" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              {/* Fond animé qui change selon la vue */}
              <motion.div
                className="absolute inset-0 rounded-[2rem]"
                animate={{
                  background: activeView === "community"
                    ? "linear-gradient(to bottom, rgba(237,233,254,0.6), rgba(245,243,255,0.3))"
                    : "linear-gradient(to bottom, rgba(255,251,235,0.6), rgba(254,249,195,0.2))",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />

              {/* Mockup + toggle */}
              <div className="relative px-5 md:px-7 pt-5 mb-4">
                {/* Toggle switch */}
                <div className="relative z-30 flex justify-center mb-3">
                  <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full p-1 border border-gray-200 shadow-sm">
                    {cardViews.map((v) => (
                      <motion.button
                        key={v.id}
                        onClick={() => setActiveView(v.id as "community" | "events")}
                        className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold transition-colors duration-200 ${
                          activeView === v.id ? "text-white" : "text-gray-400 hover:text-gray-600"
                        }`}
                        whileTap={{ scale: 0.95 }}
                      >
                        {activeView === v.id && (
                          <motion.div
                            layoutId="cardToggle"
                            className={`absolute inset-0 rounded-full ${
                              v.id === "community"
                                ? "bg-gradient-to-r from-violet-500 to-indigo-500"
                                : "bg-gradient-to-r from-amber-500 to-orange-500"
                            }`}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10 flex items-center gap-1.5">
                          {v.icon}
                          {v.label}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
                {/* Halo lumineux */}
                <motion.div
                  className="absolute inset-x-4 top-10 bottom-4 rounded-3xl blur-[40px] pointer-events-none"
                  animate={{
                    backgroundColor: activeView === "community" ? "rgba(167,139,250,0.15)" : "rgba(251,191,36,0.12)",
                  }}
                  transition={{ duration: 0.5 }}
                />
                <div className="relative rounded-2xl overflow-hidden" style={{ height: 280 }}>
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={activeView}
                      className="absolute inset-0"
                      initial={{ opacity: 0, x: activeView === "events" ? 30 : -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: activeView === "events" ? -30 : 30 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <Float duration={7} y={3} delay={0.3}>
                        <div className="relative z-10 drop-shadow-lg">
                          {activeView === "community" ? <DiscussionMock /> : <EventsMock />}
                        </div>
                      </Float>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Contenu texte animé */}
              <div className="relative px-7 md:px-9 pb-6 md:pb-7 pt-2 h-[160px]">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={activeView}
                    className="absolute inset-0 px-7 md:px-9 pb-6 md:pb-7 pt-2"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${view.iconBg}`}>
                        {view.id === "community" ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                          </svg>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{view.title}</h3>
                    </div>
                    <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
                      {view.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {view.tags.map((t) => (
                        <Tag key={t.label} color={t.color}>{t.label}</Tag>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </ScaleIn>

          {/* ── Card 2 : Création de contenu (elevated center) ── */}
          <ScaleIn delay={0.2}>
            <motion.div
              className="relative rounded-[2rem] border border-gray-200/60 bg-gradient-to-b from-slate-50/80 to-indigo-50/40 md:-mt-6 overflow-hidden shadow-[0_4px_48px_-12px_rgba(99,102,241,0.14)]"
              whileHover={{ y: -4, boxShadow: "0 24px 48px -12px rgba(99,102,241,0.20), 0 0 0 1px rgba(99,102,241,0.06)" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              {/* Subtle highlight for center card */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent rounded-t-[2rem]" />
              {/* Mockup dans la carte */}
              <div className="relative px-5 md:px-7 pt-6 mb-4">
                {/* Halo lumineux */}
                <div className="absolute inset-x-4 top-8 bottom-4 bg-indigo-300/12 rounded-3xl blur-[40px] pointer-events-none" />
                <Float duration={6} y={3}>
                  <div className="relative z-10 drop-shadow-lg">
                    <VideoMock />
                  </div>
                </Float>
              </div>
              {/* Contenu texte */}
              <div className="p-7 md:p-9 pt-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Création de contenu</h3>
                </div>
                <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
                  Publie du contenu exclusif et crée tes formations, programmes et ressources pour tes membres.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Tag color="indigo">Vidéos</Tag>
                  <Tag color="indigo">Formations</Tag>
                  <Tag color="indigo">Ressources</Tag>
                </div>
              </div>
            </motion.div>
          </ScaleIn>

          {/* ── Card 3 : Revenus ── */}
          <ScaleIn delay={0.3}>
            <motion.div
              className="relative rounded-[2rem] border border-gray-200/60 bg-gradient-to-b from-emerald-50/40 to-indigo-50/20 md:mt-10 overflow-hidden shadow-[0_2px_40px_-12px_rgba(16,185,129,0.08)]"
              whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(16,185,129,0.14), 0 0 0 1px rgba(16,185,129,0.04)" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              {/* Mockup dans la carte */}
              <div className="relative px-5 md:px-7 pt-6 mb-4">
                {/* Halo lumineux */}
                <div className="absolute inset-x-4 top-8 bottom-4 bg-emerald-300/10 rounded-3xl blur-[40px] pointer-events-none" />
                <Float duration={6} y={3} delay={1}>
                  <div className="relative z-10 drop-shadow-lg">
                    <RevenueMock />
                  </div>
                </Float>
              </div>
              {/* Contenu texte */}
              <div className="p-7 md:p-9 pt-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Génère des revenus</h3>
                </div>
                <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
                  Monétise ton expertise et suis facilement les performances de ton activité.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <Tag color="emerald">Ventes</Tag>
                  <Tag color="emerald">Analytics</Tag>
                  <Tag color="emerald">Croissance</Tag>
                </div>
              </div>
            </motion.div>
          </ScaleIn>

        </div>
      </div>
    </section>
  );
}
