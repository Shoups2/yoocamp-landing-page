"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import CheckList from "./CheckList";

/* ── Count up animé ──────────────────────────────────────────────── */

function CountUp({
  value,
  duration = 700,
  format,
}: {
  value: number;
  duration?: number;
  format?: (n: number) => string;
}) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef(0);
  useEffect(() => {
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * ease(t)));
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [value, duration]);
  return <>{format ? format(display) : display}</>;
}

function formatViews(n: number): string {
  if (n >= 1000) return (n / 1000).toLocaleString("fr-FR", { maximumFractionDigits: 1 }) + "K";
  return String(n);
}

/* ── Tokens ─────────────────────────────────────────────────────────── */

const TONES = {
  brand: { c: "#6952E6", soft: "rgba(105,82,230,0.10)", ring: "rgba(105,82,230,0.20)" },
  rose:  { c: "#FF5C8A", soft: "rgba(255,92,138,0.10)", ring: "rgba(255,92,138,0.20)" },
  sky:   { c: "#3D9DFF", soft: "rgba(61,157,255,0.10)", ring: "rgba(61,157,255,0.20)" },
  mint:  { c: "#2DCFA8", soft: "rgba(45,207,168,0.10)", ring: "rgba(45,207,168,0.20)" },
  sun:   { c: "#FFB627", soft: "rgba(255,182,39,0.10)", ring: "rgba(255,182,39,0.20)" },
} as const;
type Tone = keyof typeof TONES;
export type ToneObj = { c: string; soft: string; ring: string };

const AVATARS = [
  "https://i.pravatar.cc/80?img=1",
  "https://i.pravatar.cc/80?img=5",
  "https://i.pravatar.cc/80?img=12",
  "https://i.pravatar.cc/80?img=20",
  "https://i.pravatar.cc/80?img=32",
  "https://i.pravatar.cc/80?img=47",
];

/* ── Gradient text helper ──────────────────────────────────────────── */

function Grad({ from, to, children }: { from: string; to: string; children: ReactNode }) {
  return (
    <span
      style={{
        backgroundImage: `linear-gradient(135deg, ${from}, ${to})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

/* ── Data ──────────────────────────────────────────────────────────── */

type Feat = {
  id: string;
  label: string;
  tone: Tone;
  icon: string;
  title: ReactNode;
  desc: string;
  bullets: string[];
  mock: "community" | "courses" | "videos" | "events" | "payments" | "mobile";
};

const FEATS: Feat[] = [
  {
    id: "courses",
    label: "Formations",
    tone: "brand",
    icon: "🎓",
    title: <>Crée et vends tes <Grad from="#6952E6" to="#8B75FF">formations</Grad></>,
    desc: "Construis une formation complète avec vidéos, modules et ressources. Gratuit ou payant, à toi de choisir.",
    bullets: ["Tarif libre", "Vidéos, textes, images", "Modules simples à organiser", "Accès instantané après paiement", "Suivi de progression"],
    mock: "courses",
  },
  {
    id: "videos",
    label: "Vidéos",
    tone: "brand",
    icon: "🎥",
    title: <>Publie des vidéos <Grad from="#6952E6" to="#8B75FF">exclusives</Grad></>,
    desc: "Partage des vidéos pédagogiques, des ressources exclusives et du contenu premium réservé à ta communauté.",
    bullets: ["Vidéos pédagogiques et contenus premium", "Bonus, coulisses et ressources exclusives", "Accès libre ou réservé à tes membres"],
    mock: "videos",
  },
  {
    id: "community",
    label: "Communauté",
    tone: "brand",
    icon: "💬",
    title: <>Crée le point de rendez-vous de ta <Grad from="#6952E6" to="#8B75FF">communauté</Grad></>,
    desc: "Rassemble tes membres dans un espace privé, gratuit ou par abonnement. Discussions, annonces, projets — tout se passe au même endroit.",
    bullets: ["Gratuit, mensuel, annuel ou tarif unique", "Discussions, annonces & projets", "Messages privés"],
    mock: "community",
  },
  {
    id: "events",
    label: "Événements",
    tone: "brand",
    icon: "📅",
    title: <>Organise tes événements, ateliers et <Grad from="#6952E6" to="#8B75FF">coachings</Grad></>,
    desc: "Crée un calendrier d'événements pour ta communauté. Ajoute ton lien externe (Zoom, Meet, etc.) et tes membres reçoivent les rappels automatiquement.",
    bullets: ["Calendrier visible par tes membres", "Lien externe (Zoom, Meet, etc.)", "Inscriptions & rappels automatiques"],
    mock: "events",
  },
];

/* ── Main component ────────────────────────────────────────────────── */

export default function FeaturesTabs() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.5 });
  const f = FEATS[active];
  const t = TONES[f.tone];

  useEffect(() => {
    if (paused || !inView) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % FEATS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [active, paused, inView]);

  return (
    <section
      ref={sectionRef}
      id="communauté"
      className="relative pt-20 pb-4 md:pt-24 md:pb-6 overflow-hidden scroll-mt-24"
      style={{ background: "#ffffff" }}
    >
      {/* Background glow that changes with tab */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60%] h-[50%] rounded-full blur-[160px] opacity-50 transition-colors duration-700"
          style={{ background: `radial-gradient(ellipse, ${t.soft}, transparent 70%)` }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#6952E6] mb-5">
            Créer de la valeur
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
            Ce que tu apportes
            <br />
            <span className="whitespace-nowrap bg-gradient-to-r from-[#6952E6] via-[#8B75FF] to-[#6C4FE0] bg-clip-text text-transparent">
              te rapporte aussi
            </span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-gray-500 leading-relaxed">
            Formations, vidéos premium, événements ou coaching : Yoocamp te permet de créer, vendre et faire vivre tes contenus au même endroit.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="mt-12 md:mt-14 flex justify-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-1 p-1 rounded-full bg-white border border-gray-200 shadow-sm">
            {FEATS.map((feat, i) => {
              const isActive = i === active;
              const tt = TONES[feat.tone];
              return (
                <button
                  key={feat.id}
                  onClick={() => setActive(i)}
                  className="relative cursor-pointer px-3 md:px-4 py-2 text-[12.5px] md:text-[13.5px] font-semibold rounded-full transition-all duration-300"
                  style={{
                    color: isActive ? "#fff" : "#5A5A6E",
                    background: isActive ? tt.c : "transparent",
                    boxShadow: isActive ? `0 4px 14px -4px ${tt.c}` : "none",
                  }}
                >
                  <span className="mr-1.5">{feat.icon}</span>
                  {feat.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Showcase */}
        <motion.div
          className="mt-10 md:mt-12 rounded-[2rem] border bg-white shadow-[0_1px_2px_rgba(15,12,40,0.04),0_4px_16px_rgba(15,12,40,0.05),0_12px_32px_-8px_rgba(15,12,40,0.04)] transition-colors duration-500 overflow-hidden"
          style={{ borderColor: t.ring }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid md:grid-cols-[1fr_1.5fr]">
            {/* Left — text */}
            <div className="p-7 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] self-start" style={{ color: t.c }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: t.c }} />
                {f.label}
              </div>
              <h3
                className="mt-4 font-bold text-gray-900 text-[1.75rem] md:text-[2.2rem] leading-[1.05] tracking-[-0.025em]"
                style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
              >
                {f.title}
              </h3>
              <p className="mt-4 text-[15px] text-gray-500 leading-relaxed">{f.desc}</p>

              <div className="mt-6">
                <CheckList items={f.bullets} color={t.c} />
              </div>

              <div className="mt-7 flex items-center gap-3">
                <a
                  href="https://www.yoocamp.com/register"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold text-white transition-transform hover:scale-105"
                  style={{ background: t.c }}
                >
                  Essayer maintenant
                  <span>→</span>
                </a>
                <button
                  type="button"
                  onClick={() => setPaused((p) => !p)}
                  aria-label={paused ? "Reprendre le défilement" : "Mettre en pause"}
                  className="w-7 h-7 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors cursor-pointer shrink-0"
                >
                  {paused ? (
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                    </svg>
                  )}
                </button>
                <div className="text-[11.5px] text-gray-400">
                  {active + 1} / {FEATS.length}
                </div>
              </div>
            </div>

            {/* Right — mockup */}
            <div
              className="relative p-5 md:p-7 lg:p-8 min-h-[380px] md:min-h-[440px] flex items-center justify-center overflow-hidden transition-colors duration-500"
              style={{ background: `linear-gradient(135deg, ${t.soft} 0%, rgba(250,250,253,0.5) 100%)` }}
            >
              <motion.div
                key={f.id}
                className="relative w-full max-w-xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {f.mock === "community" && <DiscussionMock />}
                {f.mock === "courses" && <VideoMock />}
                {f.mock === "videos" && <VideoLibraryMock />}
                {f.mock === "events" && <EventsMock />}
                {f.mock === "payments" && <RevenueMock />}
                {f.mock === "mobile" && <MockMobile tone={t} />}
              </motion.div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-1 bg-gray-100">
            <motion.div
              key={`${active}-${paused ? "p" : "r"}`}
              className="h-full"
              style={{ background: t.c, transformOrigin: "left", width: "100%" }}
              initial={{ scaleX: 0 }}
              animate={paused ? { scaleX: 0 } : { scaleX: 1 }}
              transition={paused ? { duration: 0 } : { duration: 8, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────── */
/*  Mockups réutilisés depuis la section Communauté d'origine          */
/* ──────────────────────────────────────────────────────────────────── */

/* ── Discussion (Communauté) ────────────────────────────────────────── */

const chatMessages = [
  { name: "Léa", avatar: "https://i.pravatar.cc/80?img=5", text: "Salut tout le monde ! Prêts pour le mastermind en live ce soir ? 🎉", side: "left" as const },
  { name: "Maxime", avatar: "https://i.pravatar.cc/80?img=12", text: "Grave ! Le dernier était incroyable 🚀", side: "left" as const },
  { name: "Toi", avatar: "https://i.pravatar.cc/80?img=32", text: "Rdv à 20h, j'ai un sujet en or 🔥", side: "right" as const },
];

function DiscussionMock() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_20px_50px_-15px_rgba(15,12,40,0.15)] overflow-hidden">
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
            transition={{ duration: 0.4, delay: i * 0.3 }}
          >
            <img src={msg.avatar} alt={msg.name} className="w-6 h-6 rounded-full flex-shrink-0 object-cover border border-white shadow-sm" />
            <div className={`max-w-[75%] ${msg.side === "right" ? "items-end" : "items-start"} flex flex-col gap-0.5`}>
              <span className={`text-[8px] font-medium text-gray-400 ${msg.side === "right" ? "text-right" : ""}`}>{msg.name}</span>
              <div className={`px-3 py-1.5 rounded-2xl text-[11px] leading-relaxed ${
                msg.side === "right"
                  ? "bg-[#6952E6] text-white rounded-br-sm"
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
          <div className="w-6 h-6 rounded-lg bg-[#6952E6] flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Formations (single spotlight) ─────────────────────────────────── */

function VideoMock() {
  const modules: { num: number; title: string; duration: string; status: "done" | "current" | "locked" }[] = [
    { num: 1, title: "Trouver ta niche rentable", duration: "32 min", status: "done" },
    { num: 2, title: "Créer ton offre signature", duration: "45 min", status: "done" },
    { num: 3, title: "Construire ton audience", duration: "1h 12min", status: "current" },
    { num: 4, title: "Monétiser ton expertise", duration: "55 min", status: "locked" },
    { num: 5, title: "Scaler ton business", duration: "1h 08min", status: "locked" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_20px_50px_-15px_rgba(15,12,40,0.15)] overflow-hidden">
      {/* Hero thumbnail — inset card-like */}
      <div className="px-3 pt-3">
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-200/60">
          <Image
            src="/formations/clean_business_creator.png"
            alt="Lance ton business"
            fill
            sizes="(max-width: 768px) 100vw, 440px"
            className="object-cover"
            priority={false}
          />

          {/* Play button centré */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
              <div className="relative w-12 h-12 rounded-full bg-white/95 shadow-xl flex items-center justify-center">
                <div className="w-0 h-0 border-l-[12px] border-l-[#6952E6] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body : titre + price */}
      <div className="px-4 pt-3 pb-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h4 className="text-[13px] font-bold text-gray-900 leading-tight">Lance ton business : A à Z</h4>
            <p className="text-[10px] text-gray-500 mt-0.5">
              <CountUp value={12} /> modules · 6h 30min · <CountUp value={1234} /> élèves
            </p>
          </div>
          <span className="shrink-0 text-[11px] font-bold text-[#6952E6] bg-[#6952E6]/[0.08] border border-[#6952E6]/15 px-2.5 py-1 rounded-md">99 €</span>
        </div>

        {/* Progress bar */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#6952E6] to-[#8B75FF] rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "65%" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            />
          </div>
          <span className="text-[10px] font-bold text-gray-700 tabular-nums">65%</span>
        </div>
      </div>

      {/* Modules list */}
      <div className="px-4 pb-3 space-y-0.5">
        {modules.map((m, i) => (
          <motion.div
            key={m.num}
            className="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-gray-50 transition-colors cursor-pointer"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
          >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${
              m.status === "done"
                ? "bg-emerald-500 text-white"
                : m.status === "current"
                  ? "bg-[#6952E6] text-white"
                  : "bg-gray-100 text-gray-400"
            }`}>
              {m.status === "done" ? "✓" : m.status === "locked" ? (
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              ) : m.num}
            </div>
            <div className="flex-1 min-w-0 flex items-center gap-2">
              <p className={`text-[11px] font-medium truncate ${m.status === "locked" ? "text-gray-400" : "text-gray-800"}`}>
                {m.title}
              </p>
              {m.status === "current" && (
                <span className="text-[8px] font-bold text-[#6952E6] bg-[#6952E6]/[0.08] px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0">En cours</span>
              )}
            </div>
            <span className="text-[9px] text-gray-400 tabular-nums shrink-0">{m.duration}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Vidéothèque (Vidéo) — single spotlight ───────────────────────── */

function VideoLibraryMock() {
  const suggested = [
    { title: "La méthode que j'utilise vraiment", duration: "8:12", premium: false, src: "/videos/methode_utilise_vraiment.png" },
    { title: "Le système qui génère des ventes", duration: "18:47", premium: true, src: "/videos/clean_systeme_ventes_tous_les_jours.png" },
    { title: "Stratégie YouTube 2026", duration: "24:03", premium: true, src: "/videos/clean_strategie_youtube_change_tout.png" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_20px_50px_-15px_rgba(15,12,40,0.15)] overflow-hidden">
      {/* Channel header */}
      <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#6952E6] to-[#8B75FF] flex items-center justify-center text-white text-[11px] font-bold">L</div>
          <div>
            <div className="text-[11.5px] font-bold text-gray-900 flex items-center gap-1">
              Lucas Martin
              <svg className="w-3 h-3 text-[#6952E6]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L9.91 8.26L3.27 8.27L8.55 12.14L6.46 18.4L12 14.53L17.54 18.4L15.45 12.14L20.73 8.27L14.09 8.26L12 2Z" />
              </svg>
            </div>
            <div className="text-[9px] text-gray-500">42 vidéos · 1 234 abonnés</div>
          </div>
        </div>
        <button className="text-[10px] font-bold text-white bg-[#6952E6] px-3 py-1.5 rounded-full hover:bg-[#5841C9] transition-colors">
          S&apos;abonner
        </button>
      </div>

      {/* Big video player — inset card-like */}
      <div className="px-3 pt-3">
        <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-200/60">
          <Image
            src="/videos/clean_clients_automatiquement.png"
            alt="Comment trouver des clients automatiquement"
            fill
            sizes="(max-width: 768px) 100vw, 440px"
            className="object-cover"
            priority={false}
          />
          {/* Léger dégradé pour lisibilité du badge */}
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/25 to-transparent" />

          <div className="absolute top-2 left-2 text-[8px] font-black text-white bg-red-500 px-1.5 py-0.5 rounded uppercase tracking-wider z-10 flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
            LIVE
          </div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
              <div className="relative w-12 h-12 rounded-full bg-white/95 shadow-xl flex items-center justify-center">
                <div className="w-0 h-0 border-l-[12px] border-l-[#6952E6] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-1.5 right-1.5 text-[9px] font-bold text-white bg-black/80 px-1.5 py-0.5 rounded z-10">
            8:12
          </div>
        </div>
      </div>

      {/* Video info */}
      <div className="px-4 py-3">
        <h4 className="text-[13.5px] font-bold text-gray-900 leading-tight">
          Comment trouver des clients automatiquement
        </h4>
        <div className="flex items-center gap-1.5 mt-1.5 text-[10px] text-gray-500">
          <CountUp value={1400} format={formatViews} /> vues · il y a 2 jours
        </div>

        {/* Reactions */}
        <div className="mt-2.5 flex items-center gap-1.5 flex-wrap">
          {[
            { emoji: "🔥", count: 124 },
            { emoji: "❤️", count: 89 },
            { emoji: "💯", count: 32 },
          ].map((r, i) => (
            <span key={i} className="text-[10px] font-bold text-gray-700 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
              <span>{r.emoji}</span>
              <span className="tabular-nums"><CountUp value={r.count} /></span>
            </span>
          ))}
          <span className="ml-auto text-[10px] text-gray-400 inline-flex items-center gap-1">
            💬 18
          </span>
        </div>

        {/* Suggested */}
        <div className="mt-3 pt-2.5 border-t border-gray-100">
          <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">À suivre</div>
          <div className="space-y-1">
            {suggested.map((s, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 px-1.5 py-1 rounded hover:bg-gray-50 transition-colors cursor-pointer"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
              >
                <div className="relative w-14 h-8 rounded overflow-hidden shrink-0 bg-gray-100 ring-1 ring-gray-200/60">
                  <Image
                    src={s.src}
                    alt={s.title}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                  <span className="absolute bottom-0 right-0 text-[7px] font-bold text-white bg-black/80 px-0.5 leading-tight z-10">{s.duration}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10.5px] font-semibold text-gray-800 truncate">{s.title}</p>
                </div>
                {s.premium && (
                  <svg className="w-2.5 h-2.5 text-[#6952E6] shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Calendrier (Événements) ───────────────────────────────────────── */

const weekEvents = [
  { day: "Lun", num: 9, events: [
    { title: "Mastermind élèves", time: "14h", color: "bg-[#6952E6]" },
    { title: "Coaching Léo", time: "18h", color: "bg-violet-400" },
  ]},
  { day: "Mar", num: 10, events: [
    { title: "Cours en visio", time: "16h", color: "bg-[#8B75FF]" },
  ]},
  { day: "Mer", num: 11, events: [
    { title: "Coaching Marie", time: "10h", color: "bg-violet-400" },
    { title: "Séminaire St-Tropez", time: "14h", color: "bg-[#6952E6]" },
  ]},
];

function EventsMock() {
  const [selectedDay, setSelectedDay] = useState(0);
  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_20px_50px_-15px_rgba(15,12,40,0.15)] overflow-hidden">
      <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-[#6952E6]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
                className={`w-full rounded-xl py-1.5 border text-center cursor-pointer ${selectedDay === i ? "bg-white border-[#6952E6]/40 shadow-sm" : "bg-gray-50 border-gray-200"}`}
                onClick={() => setSelectedDay(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={selectedDay === i ? { y: -2 } : { y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <span className={`text-[10px] font-semibold block transition-colors duration-200 ${selectedDay === i ? "text-[#6952E6]" : "text-gray-400"}`}>{day.day}</span>
                <span className={`text-sm font-bold block transition-colors duration-200 ${selectedDay === i ? "text-gray-900" : "text-gray-500"}`}>{day.num}</span>
              </motion.div>
              <div className={`w-full h-28 rounded-lg border flex flex-col items-center justify-start gap-1 p-1 overflow-hidden transition-colors duration-200 ${
                selectedDay === i ? "border-[#6952E6]/20 bg-[#6952E6]/[0.04]" : "border-gray-100 bg-gray-50/30"
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

/* ── Revenus (Paiements) ───────────────────────────────────────────── */

export function RevenueMock() {
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
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_20px_50px_-15px_rgba(15,12,40,0.15)] overflow-hidden">
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
            {hovered !== null ? months[hovered].label + " 2025" : " "}
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
                        ? "bg-gradient-to-t from-[#1FB48E] via-[#2DCFA8] to-[#7BE4C8]"
                        : "bg-gradient-to-t from-[#2DCFA8]/70 via-[#7BE4C8]/60 to-[#B8F1DF]/50"
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

/* ── Mobile (depuis le spec, pas de mock existant) ──────────────────── */

export function MockMobile({ tone }: { tone: ToneObj }) {
  return (
    <div className="relative flex justify-center">
      <div className="absolute inset-0 -z-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 rounded-full blur-3xl opacity-50" style={{ background: tone.soft }} />
      </div>

      <div className="relative w-[240px] h-[480px] bg-gray-900 rounded-[2.5rem] p-2 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.4)]">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-b-2xl z-10" />
        <div className="w-full h-full bg-white rounded-[2.1rem] overflow-hidden relative">
          <div className="relative h-full flex flex-col p-4 text-gray-900">
            <div className="flex items-center justify-between mt-2">
              <img src="/yoocamp 4.svg" alt="Yoocamp" className="h-5 w-auto" />
              <div className="w-6 h-6 rounded-full bg-[#6952E6] flex items-center justify-center text-[10px] font-bold text-white">3</div>
            </div>
            <div className="text-[11px] text-gray-500 mt-1">Bonjour Lucas 👋</div>

            <div className="mt-4 space-y-2.5">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-3 text-gray-900 shadow-sm">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#6952E6]/10 flex items-center justify-center text-base shrink-0">💰</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[9.5px] font-bold uppercase text-[#6952E6]">Nouvelle vente</div>
                    <div className="text-[12px] font-bold leading-tight mt-0.5">Léa a acheté Coaching VIP</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">+149 € · il y a 2 min</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-3 text-gray-900 shadow-sm">
                <div className="flex items-start gap-2.5">
                  <img src={AVATARS[4]} className="w-8 h-8 rounded-lg object-cover shrink-0" alt="" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[9.5px] font-bold uppercase text-[#6952E6]">Message</div>
                    <div className="text-[12px] font-bold leading-tight mt-0.5">Maxime t&apos;a mentionné dans #wins</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">&quot;@Lucas check ça 🔥&quot;</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-3 text-gray-900 shadow-sm">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#6952E6]/10 flex items-center justify-center text-base shrink-0">📅</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[9.5px] font-bold uppercase text-[#6952E6]">Rappel</div>
                    <div className="text-[12px] font-bold leading-tight mt-0.5">Mastermind dans 30 min</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">48 personnes inscrites</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto -mx-4 -mb-4 px-5 py-3 bg-white border-t border-gray-100 flex justify-between">
              {["💬", "🎓", "📅", "👤"].map((e, i) => (
                <div key={i} className={`w-8 h-8 rounded-xl flex items-center justify-center ${i === 0 ? "bg-[#6952E6] text-white" : "opacity-50"}`}>
                  <span className="text-base">{e}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
