"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem, Float, ScaleIn } from "./motion";

const possibilities = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
      </svg>
    ),
    title: "Vidéos exclusives",
    desc: "Publie du contenu premium réservé à tes membres. Feed, playlists, accès protégé.",
    mock: <VideoMock />,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Espace de discussion",
    desc: "Crée un lieu d'échange vivant : chat en temps réel, salons thématiques, interactions directes.",
    mock: <DiscussionMock />,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a23.54 23.54 0 0 0-2.688 6.671A12.02 12.02 0 0 1 12 2.25c2.717 0 5.261.9 7.288 2.418a23.54 23.54 0 0 0-2.688 6.67m-15.482 0A23.68 23.68 0 0 1 12 9.764c2.585 0 5.084.418 7.412 1.19" />
      </svg>
    ),
    title: "Formations & parcours",
    desc: "Structure des programmes, suis la progression de tes élèves et propose du coaching personnalisé.",
    mock: <CourseMock />,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
    title: "Événements & lives",
    desc: "Organise des masterclasses, sessions de coaching et lives. Tes membres s'inscrivent en un clic.",
    mock: (
      <motion.div
        className="overflow-hidden rounded-2xl shadow-lg relative"
        whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Image src="/cal 9.png" alt="Événements & lives" width={600} height={400} className="rounded-xl w-full h-auto" />
        {/* Caméra */}
        <motion.div
          className="absolute bottom-3 right-3 w-7 h-7 rounded-lg bg-indigo-500/90 backdrop-blur shadow-sm flex items-center justify-center"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.2 }}
        >
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm12 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            <path d="m15.75 8.25 3.5-2.25v12l-3.5-2.25M4.5 18.75h10.125c1.036 0 1.875-.84 1.875-1.875V7.125c0-1.036-.84-1.875-1.875-1.875H4.5A1.875 1.875 0 0 0 2.625 7.125v9.75c0 1.035.84 1.875 1.875 1.875Z" />
          </svg>
        </motion.div>
        {/* Notification */}
        <motion.div
          className="absolute top-2 left-2 w-7 h-7 rounded-lg bg-orange-300/90 backdrop-blur shadow-sm flex items-center justify-center"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          whileHover={{ scale: 1.2 }}
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </motion.div>
      </motion.div>
    ),
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Génération de revenus",
    desc: "Monétise ta communauté avec des abonnements, ventes de formations et événements payants. Suis tes revenus en temps réel.",
    mock: <RevenueMock />,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    title: "Personnalisation complète",
    desc: "Personnalise ton espace à ton image : couleurs, logo, mise en page. Ta communauté reflète ta marque.",
    mock: <CustomizeMock />,
  },
];

/* ── Zoom Image Component ──────────────────── */

function ZoomImage({ src, alt }: { src: string; alt: string }) {
  const [transformOrigin, setTransformOrigin] = useState("center center");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setTransformOrigin(`${x}% ${y}%`);
  };

  return (
    <div
      className="overflow-hidden rounded-2xl shadow-lg cursor-zoom-in"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className="w-full h-auto"
        style={{
          transform: isHovered ? "scale(2)" : "scale(1)",
          transformOrigin,
          transition: "transform 0.3s ease",
        }}
      />
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

function TypingIndicator({ color }: { color: string }) {
  return (
    <div className="flex gap-1 items-center px-3 py-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${color}`}
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

function DiscussionMock() {
  const totalDuration = chatMessages.length * 2.5;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
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

      {/* Messages */}
      <div className="px-3 py-3 space-y-2.5 h-56 overflow-hidden">
        {chatMessages.map((msg, i) => (
          <motion.div
            key={i}
            className={`flex items-end gap-2 ${msg.side === "right" ? "flex-row-reverse" : ""}`}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: [0, 0, 1], y: [20, 20, 0], scale: [0.95, 0.95, 1] }}
            transition={{
              duration: 0.5,
              delay: i * 2.5,
              repeat: Infinity,
              repeatDelay: totalDuration - 0.5,
              times: [0, 0.01, 1],
            }}
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

      {/* Input bar */}
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

/* ── Mock UI Components ──────────────────── */

function VideoMock() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center relative">
        <div className="w-10 h-10 rounded-full bg-indigo-500/90 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-0.5" />
        </div>
        <div className="absolute bottom-2 left-2 right-2 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-indigo-500 rounded-full" />
        </div>
      </div>
      <div className="p-2.5 space-y-1.5">
        <div className="h-2 w-3/4 bg-gray-200 rounded" />
        <div className="h-1.5 w-1/2 bg-gray-100 rounded" />
      </div>
    </div>
  );
}

function ChatMock() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 space-y-2">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-5 h-5 rounded-full bg-indigo-100" />
        <div className="h-1.5 w-14 bg-gray-200 rounded" />
      </div>
      {[false, true, false].map((isMe, i) => (
        <div key={i} className={`flex ${isMe ? "justify-end" : ""}`}>
          <div className={`px-2.5 py-1.5 rounded-xl max-w-[75%] ${
            isMe ? "bg-indigo-50 rounded-br-sm" : "bg-gray-100 rounded-bl-sm"
          }`}>
            <div className={`h-1.5 rounded ${isMe ? "w-14 bg-indigo-200" : "w-18 bg-gray-200"}`} />
          </div>
        </div>
      ))}
    </div>
  );
}

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

function RevenueMock() {
  const months = [
    { label: "Jan", value: "10 450 €", h: 35 },
    { label: "Fév", value: "14 800 €", h: 50 },
    { label: "Mar", value: "12 200 €", h: 40 },
    { label: "Avr", value: "18 900 €", h: 65 },
    { label: "Mai", value: "16 300 €", h: 55 },
    { label: "Jun", value: "23 500 €", h: 80 },
    { label: "Jul", value: "27 850 €", h: 95 },
  ];
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 space-y-2">
      <div className="flex items-center justify-between mb-1">
        <div className="text-sm font-bold text-gray-900">Total des ventes · 2025</div>
        <div className="text-[9px] font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">+24%</div>
      </div>
      <motion.div
        key={hovered !== null ? months[hovered].value : "total"}
        className="text-lg font-bold text-gray-900"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {hovered !== null ? months[hovered].value : "124 000 €"}
      </motion.div>
      <div className={`text-xs text-gray-400 -mt-1 transition-opacity duration-200 ${hovered !== null ? "opacity-100" : "opacity-0"}`}>
        {hovered !== null ? months[hovered].label : "\u00A0"}
      </div>
      <div className="flex items-end gap-1.5 h-32">
        {months.map((m, i) => (
          <div
            key={i}
            className={`flex-1 rounded-sm cursor-pointer ${hovered === i ? "bg-indigo-600" : "bg-indigo-400/80"}`}
            style={{ height: `${m.h}%`, transition: "background-color 0.2s ease" }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          />
        ))}
      </div>
      <div className="flex items-center justify-between pt-1 border-t border-gray-100">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <div className="h-1.5 w-12 bg-gray-200 rounded" />
        </div>
        <div className="h-1.5 w-8 bg-gray-100 rounded" />
      </div>
    </div>
  );
}

function CustomizeMock() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 space-y-2">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-5 h-5 rounded-full bg-indigo-500" />
        <div className="h-1.5 w-16 bg-gray-200 rounded" />
      </div>
      <div className="flex gap-1.5">
        {["#6366F1", "#EC4899", "#F59E0B", "#10B981", "#1E1E1E"].map((c) => (
          <div key={c} className="w-5 h-5 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: c }} />
        ))}
      </div>
      <div className="rounded-lg border border-gray-100 overflow-hidden">
        <div className="h-6 bg-indigo-500" />
        <div className="p-2 space-y-1.5">
          <div className="h-1.5 w-3/4 bg-gray-200 rounded" />
          <div className="h-1.5 w-1/2 bg-gray-100 rounded" />
        </div>
      </div>
      <div className="flex items-center gap-2 pt-1">
        <div className="h-4 w-8 rounded-full bg-indigo-500" />
        <div className="h-1.5 w-14 bg-gray-200 rounded" />
      </div>
    </div>
  );
}

function CalendarMock() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="h-1.5 w-10 bg-gray-200 rounded" />
        <div className="flex gap-1">
          <div className="w-4 h-4 rounded bg-gray-100" />
          <div className="w-4 h-4 rounded bg-gray-100" />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 14 }, (_, i) => (
          <div key={i} className={`h-5 rounded text-[8px] flex items-center justify-center ${
            i === 4 ? "bg-indigo-500 text-white font-bold" : i === 10 ? "bg-indigo-50 text-indigo-500" : "text-gray-300"
          }`}>
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main Component ──────────────────────── */

export default function Community() {
  return (
    <section id="communauté" className="py-24 md:py-32 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3">
            COMMUNAUTÉ & MONÉTISATION
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            La plateforme pour créer et monétiser ta communauté
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Rassemble ta communauté, partage du contenu exclusif et génère des revenus au même endroit.
          </p>
        </FadeIn>

        <Stagger className="grid md:grid-cols-2 gap-6" staggerDelay={0.12}>
          {possibilities.map((item, i) => (
            <StaggerItem key={item.title}>
              <motion.div
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-full"
                whileHover={{ scale: 1.03, y: -4, boxShadow: "0 16px 40px rgba(99,102,241,0.08)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Mock preview */}
                <div className="p-4 pb-0">
                  <ScaleIn delay={0.1 + i * 0.1}>
                    <Float delay={i * 0.4} duration={5} y={4}>
                      {item.mock}
                    </Float>
                  </ScaleIn>
                </div>

                {/* Text content */}
                <div className="p-5 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
