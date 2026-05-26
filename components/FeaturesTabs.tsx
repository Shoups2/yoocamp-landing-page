"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    id: "community",
    label: "Communauté",
    tone: "brand",
    icon: "💬",
    title: <>Le lieu où <Grad from="#6952E6" to="#8B75FF">ta communauté se retrouve</Grad></>,
    desc: "Crée un espace où tes membres peuvent échanger, suivre tes annonces, réagir à tes publications et rester connectés à ton contenu.",
    bullets: ["Publications & annonces", "Canal de discussion", "Messages privés", "Notifications membres"],
    mock: "community",
  },
  {
    id: "courses",
    label: "Formations",
    tone: "brand",
    icon: "🎓",
    title: <>Crée et <Grad from="#6952E6" to="#8B75FF">vends tes formations</Grad></>,
    desc: "Construis tes modules avec vidéos, images et textes, puis propose-les gratuitement ou en accès payant à tes membres.",
    bullets: ["Création de modules", "Vidéos, images & textes", "Accès gratuit ou payant", "Suivi de progression"],
    mock: "courses",
  },
  {
    id: "videos",
    label: "Vidéo",
    tone: "brand",
    icon: "🎥",
    title: <>Publie des vidéos <Grad from="#6952E6" to="#8B75FF">exclusives</Grad></>,
    desc: "Mets en ligne tes vidéos, replays ou autres contenus premium, puis choisis de les proposer gratuitement ou en accès payant à tes membres.",
    bullets: ["Vidéos gratuites ou payantes", "Accès réservé aux membres", "Commentaires & réactions"],
    mock: "videos",
  },
  {
    id: "events",
    label: "Événements",
    tone: "sky",
    icon: "📅",
    title: <>Organise des <Grad from="#3D9DFF" to="#5BB1FF">événements</Grad></>,
    desc: "Annonce tes lives, webinaires, sessions privées, mentorats ou coachings, puis garde tes membres informés avec des notifications en temps réel.",
    bullets: ["Lives & webinaires", "Sessions privées", "Mentorat & coaching", "Notifications aux membres"],
    mock: "events",
  },
];

/* ── Main component ────────────────────────────────────────────────── */

export default function FeaturesTabs() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const f = FEATS[active];
  const t = TONES[f.tone];

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % FEATS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [active, paused]);

  return (
    <section
      id="communauté"
      className="relative pt-24 pb-4 md:pt-32 md:pb-6 overflow-hidden scroll-mt-24"
      style={{ background: "linear-gradient(180deg, #FAFAFD 0%, #FEFDFE 100%)" }}
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
          <span
            className="inline-flex items-center gap-2 text-[12px] font-semibold px-3 py-1.5 rounded-full border mb-6"
            style={{ color: "#6952E6", background: "rgba(105,82,230,0.07)", borderColor: "rgba(105,82,230,0.18)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6952E6]" />
            Communautés
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
            Crée, partage.
            <br />
            <span className="whitespace-nowrap bg-gradient-to-r from-[#6952E6] via-[#8B75FF] to-[#6C4FE0] bg-clip-text text-transparent">
              Fais grandir ta communauté.
            </span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-gray-500 leading-relaxed">
            Plus besoin de jongler entre Discord, Notion, Stripe et Calendly. On a tout réuni — en mieux.
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
                  href="#"
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
              className="relative p-6 md:p-8 lg:p-10 min-h-[440px] md:min-h-[520px] flex items-center justify-center overflow-hidden transition-colors duration-500"
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

/* ── Vidéo (Formations) ────────────────────────────────────────────── */

function VideoMock() {
  const formations: { title: string; image: string; free: boolean; price?: string; modules: number; duration: string }[] = [
    { title: "Automatiser son business avec l'IA", image: "/formations/4eb4147d-30ef-49ac-a22b-9ccbf7190a65.png", free: true, modules: 6, duration: "3h 12min" },
    { title: "La stratégie YouTube qui génère des clients", image: "/formations/7e194074-cb06-4f3c-acec-b5b334e9f82f.png", free: true, modules: 4, duration: "2h 45min" },
    { title: "Comment créer un business rentable en 2026", image: "/formations/d626614f-ed9b-4761-a8f7-ee9c42010c8c.png", free: false, price: "99 €", modules: 12, duration: "6h 30min" },
    { title: "De 0 à 10K€/mois avec une seule compétence", image: "/formations/444f0011-557d-4c97-9fe2-bf4255344c3b.png", free: false, price: "149 €", modules: 10, duration: "5h 15min" },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200/80 shadow-[0_20px_50px_-15px_rgba(15,12,40,0.15)] overflow-hidden">
      {/* Header */}
      <div className="px-4 py-2 border-b border-gray-100">
        <div className="text-[12.5px] font-bold text-gray-900">Formations</div>
        <div className="text-[9.5px] text-gray-500 mt-0.5">10 formations disponibles dans cette communauté</div>
      </div>

      {/* Grid 2x2 */}
      <div className="grid grid-cols-2 gap-2 p-2.5">
        {formations.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="group cursor-pointer rounded-lg overflow-hidden border border-gray-100 bg-white flex flex-col transition-shadow hover:shadow-[0_4px_16px_-4px_rgba(105,82,230,0.15)] hover:border-[#6952E6]/20"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 6 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.5 + i * 0.2 }}
            >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-gray-100 overflow-hidden">
              <Image
                src={f.image}
                alt={f.title}
                fill
                sizes="(max-width: 768px) 45vw, 280px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                quality={90}
              />
              {/* Play overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/15 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#6952E6] shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-200">
                  <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-0.5" />
                </div>
              </div>
            </div>

            {/* Title + Meta + Button */}
            <div className="px-2 pt-1.5 pb-2 flex-1 flex flex-col">
              <p className="text-[11px] font-semibold text-gray-900 leading-snug line-clamp-1 transition-colors group-hover:text-[#6952E6]">
                {f.title}
              </p>

              {/* Meta : modules + durée */}
              <div className="mt-0.5 flex items-center gap-1.5 text-[9.5px] text-gray-500">
                <span className="inline-flex items-center gap-0.5 tabular-nums">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  <CountUp value={f.modules} /> modules
                </span>
                <span className="text-gray-300">·</span>
                <span className="inline-flex items-center gap-0.5">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  {f.duration}
                </span>
              </div>

              <div className="mt-1.5 flex items-center justify-between gap-2">
                {f.free ? (
                  <span className="text-[12px] font-bold text-gray-900">Gratuit</span>
                ) : (
                  <span className="text-[12px] font-bold text-gray-900">{f.price}</span>
                )}
                {f.free ? (
                  <button className="text-[10px] font-bold text-gray-700 bg-white border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-50 hover:border-gray-300 transition-colors">
                    Commencer
                  </button>
                ) : (
                  <button className="text-[10px] font-bold text-white bg-[#6952E6] px-3 py-1.5 rounded-md flex items-center gap-1.5 hover:bg-[#5841C9] transition-colors">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    Débloquer
                  </button>
                )}
              </div>
            </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Vidéothèque (Vidéo) — style YouTube ─────────────────────────── */

function VideoLibraryMock() {
  const videos: { title: string; duration: string; views: number; image: string; free: boolean; price?: string }[] = [
    { title: "La méthode que j'utilise vraiment", duration: "8:12", views: 1400, image: "/videos/clean_strategie_youtube_change_tout.png", free: true },
    { title: "Comment je trouve des clients automatiquement", duration: "12:34", views: 856, image: "/videos/clean_clients_automatiquement.png", free: true },
    { title: "Le système qui génère des ventes tous les jours", duration: "18:47", views: 234, image: "/videos/clean_systeme_ventes_tous_les_jours.png", free: false, price: "19 €" },
    { title: "La stratégie YouTube qui change tout", duration: "24:03", views: 412, image: "/videos/methode_utilise_vraiment.png", free: false, price: "29 €" },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200/80 shadow-[0_20px_50px_-15px_rgba(15,12,40,0.15)] overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
        <div>
          <div className="text-[13px] font-bold text-gray-900">Vidéos</div>
          <div className="text-[10px] text-gray-500 mt-0.5">42 vidéos disponibles dans cette communauté</div>
        </div>
        <div className="inline-flex items-center gap-1.5 bg-[#6952E6]/[0.08] px-2 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6952E6]" />
          <span className="text-[9px] font-bold text-[#6952E6] uppercase tracking-wider">Récentes</span>
        </div>
      </div>

      {/* Grid 2x2 */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-4 p-3">
        {videos.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="group cursor-pointer flex flex-col"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 6 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: 0.5 + i * 0.2 }}
            >
            {/* Thumbnail */}
            <div className="relative aspect-video rounded-lg bg-gray-100 overflow-hidden">
              <Image
                src={v.image}
                alt={v.title}
                fill
                sizes="(max-width: 768px) 45vw, 280px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                quality={90}
              />

              {/* Duration badge — YouTube style */}
              <div className="absolute bottom-1 right-1 text-[9px] font-bold text-white bg-black/80 px-1.5 py-0.5 rounded z-10">
                {v.duration}
              </div>

              {/* Premium badge for paid */}
              {!v.free && (
                <div className="absolute top-1 left-1 flex items-center gap-0.5 bg-[#6952E6] text-white text-[8.5px] font-bold px-1.5 py-0.5 rounded z-10">
                  <svg className="w-2 h-2" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  Premium
                </div>
              )}

              {/* Play overlay on hover with pulse rings */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/15 transition-colors z-10">
                {/* Pulse rings (visible only on hover) */}
                <span className="absolute w-10 h-10 rounded-full bg-[#6952E6]/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none" />
                <span
                  className="absolute w-10 h-10 rounded-full bg-[#6952E6]/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none"
                  style={{ animationDelay: "0.5s" }}
                />
                {/* Play button */}
                <div className="relative w-10 h-10 rounded-full bg-[#6952E6] shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all duration-200">
                  <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>

            {/* Meta — YouTube style (avatar + titre + infos) */}
            <div className="mt-2 flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6952E6] to-[#8B75FF] flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                L
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-semibold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#6952E6] transition-colors">
                  {v.title}
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  {v.free ? (
                    <span className="text-[10px] font-bold text-gray-900">Gratuit</span>
                  ) : (
                    <span className="text-[10px] font-bold text-[#6952E6]">{v.price}</span>
                  )}
                  <span className="text-[10px] text-gray-300">·</span>
                  <span className="text-[10px] text-gray-500 tabular-nums">
                    <CountUp value={v.views} format={formatViews} /> vues
                  </span>
                </div>
              </div>
            </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Calendrier (Événements) ───────────────────────────────────────── */

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
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_20px_50px_-15px_rgba(15,12,40,0.15)] overflow-hidden">
      <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-[#3D9DFF]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
                className={`w-full rounded-xl py-1.5 border text-center cursor-pointer ${selectedDay === i ? "bg-white border-[#3D9DFF]/40 shadow-sm" : "bg-gray-50 border-gray-200"}`}
                onClick={() => setSelectedDay(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={selectedDay === i ? { y: -2 } : { y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <span className={`text-[10px] font-semibold block transition-colors duration-200 ${selectedDay === i ? "text-[#3D9DFF]" : "text-gray-400"}`}>{day.day}</span>
                <span className={`text-sm font-bold block transition-colors duration-200 ${selectedDay === i ? "text-gray-900" : "text-gray-500"}`}>{day.num}</span>
              </motion.div>
              <div className={`w-full h-28 rounded-lg border flex flex-col items-center justify-start gap-1 p-1 overflow-hidden transition-colors duration-200 ${
                selectedDay === i ? "border-[#3D9DFF]/20 bg-[#3D9DFF]/[0.04]" : "border-gray-100 bg-gray-50/30"
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
        <div className="w-full h-full bg-gradient-to-br from-amber-400 via-orange-400 to-rose-400 rounded-[2.1rem] overflow-hidden relative">
          <div className="relative h-full flex flex-col p-4 text-white">
            <div className="flex items-center justify-between mt-2">
              <div className="font-bold text-lg" style={{ fontFamily: "var(--font-bricolage), sans-serif" }}>Yoocamp</div>
              <div className="w-6 h-6 rounded-full bg-white/25 backdrop-blur flex items-center justify-center text-[10px] font-bold">3</div>
            </div>
            <div className="text-[11px] opacity-90 mt-1">Bonjour Lucas 👋</div>

            <div className="mt-4 space-y-2.5">
              <div className="bg-white/95 backdrop-blur rounded-2xl p-3 text-gray-900 shadow-lg">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0" style={{ background: tone.soft }}>💰</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[9.5px] font-bold uppercase" style={{ color: tone.c }}>Nouvelle vente</div>
                    <div className="text-[12px] font-bold leading-tight mt-0.5">Léa a acheté Coaching VIP</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">+149 € · il y a 2 min</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur rounded-2xl p-3 text-gray-900 shadow-lg">
                <div className="flex items-start gap-2.5">
                  <img src={AVATARS[4]} className="w-8 h-8 rounded-lg object-cover shrink-0" alt="" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[9.5px] font-bold uppercase text-[#6952E6]">Message</div>
                    <div className="text-[12px] font-bold leading-tight mt-0.5">Maxime t&apos;a mentionné dans #wins</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">&quot;@Lucas check ça 🔥&quot;</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur rounded-2xl p-3 text-gray-900 shadow-lg">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-base shrink-0">📅</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[9.5px] font-bold uppercase text-sky-500">Rappel</div>
                    <div className="text-[12px] font-bold leading-tight mt-0.5">Mastermind dans 30 min</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">48 personnes inscrites</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto -mx-4 -mb-4 px-5 py-3 bg-black/15 backdrop-blur-lg border-t border-white/15 flex justify-between">
              {["💬", "🎓", "📅", "👤"].map((e, i) => (
                <div key={i} className={`w-8 h-8 rounded-xl flex items-center justify-center ${i === 0 ? "bg-white text-black" : "opacity-70"}`}>
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
