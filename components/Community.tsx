"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn, Float } from "./motion";

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
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-[#EC4899]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
                className={`w-full rounded-xl py-1.5 border text-center cursor-pointer ${selectedDay === i ? "bg-white border-[#EC4899]/30 shadow-sm" : "bg-gray-50 border-gray-200"}`}
                onClick={() => setSelectedDay(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={selectedDay === i ? { y: -2 } : { y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <span className={`text-[10px] font-semibold block transition-colors duration-200 ${selectedDay === i ? "text-[#EC4899]" : "text-gray-400"}`}>{day.day}</span>
                <span className={`text-sm font-bold block transition-colors duration-200 ${selectedDay === i ? "text-gray-900" : "text-gray-500"}`}>{day.num}</span>
              </motion.div>
              <div className={`w-full h-28 rounded-lg border flex flex-col items-center justify-start gap-1 p-1 overflow-hidden transition-colors duration-200 ${
                selectedDay === i ? "border-[#EC4899]/20 bg-[#EC4899]/[0.04]" : "border-gray-100 bg-gray-50/30"
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
  { name: "Léa", avatar: "https://i.pravatar.cc/80?img=5", text: "Salut tout le monde ! Prêts pour le mastermind en live ce soir ? 🎉", side: "left" as const },
  { name: "Maxime", avatar: "https://i.pravatar.cc/80?img=12", text: "Grave ! Le dernier était incroyable 🚀", side: "left" as const },
  { name: "Toi", avatar: "https://i.pravatar.cc/80?img=32", text: "Rdv à 20h, j'ai un sujet en or 🔥", side: "right" as const },
];

function DiscussionMock() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs font-semibold text-gray-700">Ma communauté</span>
        </div>
        <div className="flex -space-x-1.5">
          {["https://i.pravatar.cc/80?img=32", "https://i.pravatar.cc/80?img=5", "https://i.pravatar.cc/80?img=12"].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt=""
              className="w-5 h-5 rounded-full border-2 border-white object-cover"
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
      <div className="px-3 py-3 space-y-2.5 h-52 overflow-hidden">
        {chatMessages.map((msg, i) => (
          <motion.div
            key={i}
            className={`flex items-end gap-2 ${msg.side === "right" ? "flex-row-reverse" : ""}`}
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 1 }}
          >
            <img src={msg.avatar} alt={msg.name} className="w-6 h-6 rounded-full flex-shrink-0 object-cover border border-white shadow-sm" />
            <div className={`max-w-[75%] ${msg.side === "right" ? "items-end" : "items-start"} flex flex-col gap-0.5`}>
              <span className={`text-[8px] font-medium text-gray-400 ${msg.side === "right" ? "text-right" : ""}`}>{msg.name}</span>
              <div className={`px-3 py-1.5 rounded-2xl text-[11px] leading-relaxed ${
                msg.side === "right"
                  ? "bg-[#4F7BFF] text-white rounded-br-sm"
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
          <div className="w-6 h-6 rounded-lg bg-[#4F7BFF] flex items-center justify-center">
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
  const videos = [
    { title: "Lancer son offre", duration: "18 min", progress: 100, color: "from-[#7B61FF] to-[#8B75FF]" },
    { title: "Contenu qui convertit", duration: "12 min", progress: 65, color: "from-[#6C4FE0] to-[#7B61FF]" },
    { title: "Audience fidèle", duration: "24 min", progress: 0, color: "from-[#8B75FF] to-[#B4A0FF]" },
    { title: "Monétiser son savoir", duration: "15 min", progress: 0, color: "from-[#7B61FF] to-[#6C4FE0]" },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="px-3.5 py-2.5 border-b border-gray-100 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-gray-900">Ma formation</span>
        <span className="text-[10px] text-gray-400">4 vidéos</span>
      </div>
      <div className="grid grid-cols-2 gap-2.5 p-3">
        {videos.map((v, i) => (
          <div key={i} className="relative">
            <div className={`aspect-video rounded-lg bg-gradient-to-br ${v.color} flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute top-[-20%] right-[-15%] w-[60%] h-[80%] bg-white/8 rounded-full blur-[20px]" />
              {v.progress === 100 ? (
                <div className="w-6 h-6 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[5px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent ml-0.5" />
                </div>
              )}
              {v.progress > 0 && v.progress < 100 && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black/15">
                  <motion.div
                    className="h-full bg-white/80 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${v.progress}%` }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  />
                </div>
              )}
            </div>
            <p className="text-[10px] font-semibold text-gray-700 mt-1.5 truncate">{v.title}</p>
            <p className="text-[9px] text-gray-400">{v.duration}</p>
          </div>
        ))}
      </div>
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
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
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
      <div className="px-3.5 pt-3 pb-2">
        <div className="relative h-32">
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="border-b border-dashed border-gray-100" />
            ))}
          </div>
          <div className="relative flex items-end gap-1.5 h-full">
            {months.map((m, i) => (
              <div key={i} className="flex-1 flex flex-col items-center h-full justify-end">
                <motion.div
                  className={`w-full rounded-md cursor-pointer relative overflow-hidden ${hovered === i ? "shadow-md" : ""}`}
                  style={{ height: `${m.h}%` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${m.h}%` }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ scale: 1.06 }}
                >
                  <div className={`absolute inset-0 rounded-md ${
                    isLast(i)
                      ? "bg-gradient-to-t from-emerald-500 via-emerald-400 to-emerald-300"
                      : hovered === i
                        ? "bg-gradient-to-t from-[#6C4FE0] via-[#7B61FF] to-[#9B8AFF]"
                        : "bg-gradient-to-t from-[#7B61FF]/70 via-[#9B8AFF]/60 to-[#BDB0FF]/50"
                  }`} />
                  <div className="absolute inset-x-0 top-0 h-[40%] bg-white/15 rounded-t-md" />
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

/* ── Card Item ────────────────────────────── */

interface CardData {
  id: string;
  title: string;
  desc: string;
  titleColor: string;
  cardBg: string;
  haloColor: string;
  haloColor2?: string;
  haloColor3?: string;
  borderColor: string;
  shadowDefault: string;
  shadowHover: string;
  mock: string;
  featured?: boolean;
}

const cards: CardData[] = [
  {
    id: "content",
    title: "Partage\nton expertise",
    desc: "Publie vidéos, formations et contenus exclusifs.",
    titleColor: "text-[#8B5CF6]",
    cardBg: "bg-gradient-to-b from-[#F3EEFF] via-[#F9F7FF] to-white",
    haloColor: "bg-violet-400/20",
    haloColor2: "bg-violet-300/10",
    haloColor3: "bg-violet-200/6",
    borderColor: "border-violet-100/50",
    shadowDefault: "0 8px 30px -6px rgba(139,92,246,0.10), 0 2px 8px rgba(0,0,0,0.04)",
    shadowHover: "0 20px 50px -10px rgba(139,92,246,0.22), 0 8px 20px rgba(0,0,0,0.05), 0 0 0 1px rgba(139,92,246,0.12)",
    mock: "video",
    featured: true,
  },
  {
    id: "community",
    title: "Accompagne\nta communauté",
    desc: "Discussions, événements et interactions avec tes membres.",
    titleColor: "text-[#4F7BFF]",
    cardBg: "bg-gradient-to-b from-[#EEF2FF] via-[#F7F8FF] to-white",
    haloColor: "bg-[#4F7BFF]/16",
    haloColor2: "bg-[#4F7BFF]/10",
    borderColor: "border-indigo-100/50",
    shadowDefault: "0 8px 30px -6px rgba(79,123,255,0.12), 0 2px 8px rgba(0,0,0,0.04)",
    shadowHover: "0 20px 60px -10px rgba(79,123,255,0.20), 0 8px 20px rgba(0,0,0,0.05), 0 0 0 1px rgba(79,123,255,0.12)",
    mock: "discussion",
  },
  {
    id: "events",
    title: "Organise\ndes événements",
    desc: "Organise masterclasses, coaching et sessions en direct.",
    titleColor: "text-[#EC4899]",
    cardBg: "bg-gradient-to-b from-[#FFF0F7] via-[#FFF8FB] to-white",
    haloColor: "bg-pink-300/18",
    haloColor2: "bg-pink-200/10",
    borderColor: "border-pink-100/50",
    shadowDefault: "0 8px 30px -6px rgba(236,72,153,0.10), 0 2px 8px rgba(0,0,0,0.04)",
    shadowHover: "0 20px 50px -10px rgba(236,72,153,0.22), 0 8px 20px rgba(0,0,0,0.05), 0 0 0 1px rgba(236,72,153,0.12)",
    mock: "events",
  },
  {
    id: "revenue",
    title: "Génère\ndes revenus",
    desc: "Monétise ton expertise avec abonnements et ventes.",
    titleColor: "text-[#34D399]",
    cardBg: "bg-gradient-to-b from-[#ECFBF0] via-[#F5FDF7] to-white",
    haloColor: "bg-emerald-400/18",
    haloColor2: "bg-emerald-300/10",
    haloColor3: "bg-emerald-200/8",
    borderColor: "border-emerald-100/50",
    shadowDefault: "0 8px 30px -6px rgba(16,185,129,0.10), 0 2px 8px rgba(0,0,0,0.04)",
    shadowHover: "0 20px 50px -10px rgba(16,185,129,0.22), 0 8px 20px rgba(0,0,0,0.05), 0 0 0 1px rgba(16,185,129,0.12)",
    mock: "revenue",
  },
];

function MockComponent({ type }: { type: string }) {
  switch (type) {
    case "discussion": return <DiscussionMock />;
    case "video": return <VideoMock />;
    case "events": return <EventsMock />;
    case "revenue": return <RevenueMock />;
    default: return null;
  }
}

function CardItem({ card, index, grow }: { card: CardData; index: number; grow?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{ boxShadow: card.shadowDefault }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = card.shadowHover;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = card.shadowDefault;
      }}
      className={`group relative rounded-[1.75rem] border overflow-hidden transition-all duration-300 ease-out ${card.cardBg} ${card.borderColor} ${grow ? "md:flex-1 h-full" : ""}`}
    >
      {/* Accent line */}
      <div
        className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent to-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, transparent, ${
            card.id === "content" ? "rgba(139,92,246,0.7)"
            : card.id === "community" ? "rgba(79,123,255,0.7)"
            : card.id === "events" ? "rgba(236,72,153,0.7)"
            : "rgba(52,211,153,0.7)"
          }, transparent)`,
        }}
      />

      {/* Noise texture subtile */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      {/* Titre + Description */}
      <div className={`relative z-10 px-5 md:px-7 ${card.featured ? "pt-8" : "pt-6"}`}>
        <h3 className={`${card.featured ? "text-3xl md:text-[2.1rem]" : "text-3xl md:text-[2.1rem]"} font-extrabold font-[family-name:var(--font-poppins)] leading-[1.08] tracking-[0.02em] whitespace-pre-line mb-1 ${card.titleColor}`}>
          {card.title}
        </h3>
      </div>

      {/* Mockup */}
      <div className={`relative ${card.featured ? "px-3 md:px-5 pt-4 pb-3" : "px-4 md:px-5 pt-3 pb-3"}`}>
        {/* Halo principal — gradient radial doux */}
        <div
          className="absolute inset-x-0 top-0 bottom-0 pointer-events-none transition-opacity duration-700 group-hover:opacity-130"
          style={{
            background: card.id === "revenue"
              ? "radial-gradient(ellipse 90% 80% at 50% 55%, rgba(16,185,129,0.12) 0%, rgba(16,185,129,0.04) 55%, transparent 100%)"
              : card.id === "events"
                ? "radial-gradient(ellipse 90% 80% at 50% 55%, rgba(236,72,153,0.11) 0%, rgba(236,72,153,0.04) 55%, transparent 100%)"
                : card.id === "community"
                  ? "radial-gradient(ellipse 90% 80% at 50% 55%, rgba(79,123,255,0.11) 0%, rgba(79,123,255,0.04) 55%, transparent 100%)"
                  : "radial-gradient(ellipse 90% 80% at 50% 55%, rgba(139,92,246,0.12) 0%, rgba(139,92,246,0.04) 55%, transparent 100%)",
          }}
        />
        {/* Halo secondaire — spot lumineux plus concentré */}
        <div
          className="absolute pointer-events-none transition-opacity duration-700 group-hover:opacity-140"
          style={{
            inset: "10% 15% 15% 15%",
            background: card.id === "revenue"
              ? "radial-gradient(circle at 50% 50%, rgba(52,211,153,0.09) 0%, transparent 75%)"
              : card.id === "events"
                ? "radial-gradient(circle at 50% 50%, rgba(236,72,153,0.08) 0%, transparent 75%)"
                : card.id === "community"
                  ? "radial-gradient(circle at 50% 50%, rgba(79,123,255,0.08) 0%, transparent 75%)"
                  : "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.09) 0%, transparent 75%)",
            filter: "blur(28px)",
          }}
        />
        <Float duration={6} y={card.featured ? 4 : 3} delay={index * 0.3}>
          <div className={`relative z-10 transition-transform duration-500 ease-out group-hover:scale-[1.015] ${
            card.featured
              ? "drop-shadow-[0_12px_44px_rgba(123,97,255,0.16)]"
              : "drop-shadow-[0_8px_28px_rgba(0,0,0,0.08)]"
          }`}>
            <MockComponent type={card.mock} />
          </div>
        </Float>
      </div>
    </motion.div>
  );
}

/* ── Main Component ──────────────────────── */

export default function Community() {
  return (
    <section id="communauté" className="pt-10 md:pt-14 pb-16 md:pb-20 bg-gradient-to-b from-white via-white to-[#F8F5FF] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-[15%] left-[5%] w-[600px] h-[600px] bg-[#7B61FF]/[0.035] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[0%] w-[500px] h-[500px] bg-[#7B61FF]/[0.025] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#7B61FF]/[0.015] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <FadeIn className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#7B61FF]/[0.06] text-[#7B61FF] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 border border-[#7B61FF]/10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#7B61FF]" />
            Fonctionnalités
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-[1.1]">
            Crée, partage.
            <br />
            <span className="bg-gradient-to-r from-[#7B61FF] via-[#8B75FF] to-[#6C4FE0] bg-clip-text text-transparent">Fais grandir ta communauté.</span>
          </h2>
        </FadeIn>

        {/* Bento grid */}
        <div className="relative grid md:grid-cols-2 gap-4 md:gap-5 max-w-5xl mx-auto">
          {/* Colonne gauche : Communauté + Revenus */}
          <div className="flex flex-col gap-4 md:gap-5">
            <CardItem card={cards[1]} index={0} />
            <div className="md:flex-1 flex flex-col">
              <CardItem card={cards[3]} index={1} grow />
            </div>
          </div>

          {/* Colonne droite : Contenu (featured) + Événements */}
          <div className="flex flex-col gap-4 md:gap-5">
            <CardItem card={cards[0]} index={2} />
            <CardItem card={cards[2]} index={3} />
          </div>
        </div>

        {/* CTA card */}
        <FadeIn delay={0.5}>
          <div className="relative mt-4 md:mt-5 rounded-[1.5rem] border border-[#7B61FF]/15 bg-gradient-to-r from-[#F8F5FF] via-white to-[#F0ECFF] px-8 md:px-12 py-8 md:py-9 flex flex-col md:flex-row items-center justify-between gap-5 shadow-[0_4px_40px_-8px_rgba(123,97,255,0.12)] overflow-hidden max-w-5xl mx-auto">
            {/* Halo violet */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(123,97,255,0.12), transparent 70%)" }} />
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-[250px] h-[180px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(155,138,255,0.10), transparent 70%)" }} />
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-[family-name:var(--font-poppins)]">
                Lance ta communauté maintenant
              </h3>
              <p className="text-sm text-gray-600 mt-1.5 hidden md:block">
                Sans engagement. Prêt en quelques minutes.
              </p>
            </div>
            <motion.a
              href="#"
              className="relative shrink-0 px-10 py-4.5 rounded-full bg-gradient-to-r from-[#7B61FF] to-[#6C4FE0] text-white font-semibold text-sm shadow-[0_6px_28px_-4px_rgba(123,97,255,0.50)]"
              whileHover={{ scale: 1.04, boxShadow: "0 10px 40px -4px rgba(123,97,255,0.60)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Glow behind button */}
              <div className="absolute -inset-2 bg-[#7B61FF]/25 rounded-full blur-xl pointer-events-none" />
              <span className="relative z-10">Créer ma communauté</span>
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
