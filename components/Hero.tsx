"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ── Animation variants ─────────────────── */

const blurFadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ── Avatar list for scrolling banner ──── */

const avatarList = [
  { img: "https://i.pravatar.cc/80?img=1" },
  { img: "https://api.dicebear.com/9.x/bottts/svg?seed=Luna" },
  { img: "https://i.pravatar.cc/80?img=12" },
  { img: "https://api.dicebear.com/9.x/pixel-art/svg?seed=Flame" },
  { img: "https://i.pravatar.cc/80?img=32" },
  { img: "https://api.dicebear.com/9.x/adventurer/svg?seed=Zara" },
  { img: "https://i.pravatar.cc/80?img=47" },
  { img: "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Blaze" },
  { img: "https://i.pravatar.cc/80?img=5" },
  { img: "https://api.dicebear.com/9.x/thumbs/svg?seed=Nova" },
  { img: "https://i.pravatar.cc/80?img=20" },
  { img: "https://api.dicebear.com/9.x/lorelei/svg?seed=Koda" },
];

/* ── Floating decorative elements ───────── */

function FloatingElements() {
  const elements = [
    { x: "8%", y: "18%", size: 8, color: "#818CF8", delay: 0 },
    { x: "88%", y: "22%", size: 6, color: "#C084FC", delay: 0.5 },
    { x: "14%", y: "65%", size: 10, color: "#6366F1", delay: 1 },
    { x: "90%", y: "60%", size: 7, color: "#A78BFA", delay: 1.5 },
    { x: "25%", y: "12%", size: 5, color: "#E0E7FF", delay: 0.8 },
    { x: "78%", y: "75%", size: 9, color: "#DDD6FE", delay: 0.3 },
  ];

  return (
    <>
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none hidden md:block"
          style={{
            left: el.x,
            top: el.y,
            width: el.size,
            height: el.size,
            backgroundColor: el.color,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0.3, 0.6],
            scale: 1,
            y: [-8, 8, -8],
          }}
          transition={{
            opacity: { delay: 1 + el.delay, duration: 1.5, repeat: Infinity, repeatType: "reverse" },
            scale: { delay: 1 + el.delay, duration: 0.6 },
            y: { delay: 1 + el.delay, duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}
    </>
  );
}

/* ── Floating micro-cards ───────────────── */

function FloatingCard({
  className,
  delay,
  children,
}: {
  className?: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={`absolute z-20 hidden lg:block ${className}`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { delay: 1.2 + delay * 0.2, duration: 0.5 },
        scale: { delay: 1.2 + delay * 0.2, duration: 0.5, type: "spring" },
        y: { delay: 1.8 + delay * 0.2, duration: 4 + delay, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <motion.div
        className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg shadow-gray-900/[0.06] border border-gray-100/80 px-4 py-3 cursor-default"
        whileHover={{ scale: 1.08, y: -4, boxShadow: "0 16px 40px rgba(99,102,241,0.12)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ── Main Hero ──────────────────────────── */

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/70 via-white to-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-br from-indigo-100/50 to-violet-100/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[10%] right-0 w-[400px] h-[400px] bg-purple-100/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[10%] left-0 w-[300px] h-[300px] bg-blue-100/20 rounded-full blur-[80px] pointer-events-none" />

      <FloatingElements />

      {/* ── Content ── */}
      <div className="relative max-w-5xl mx-auto px-6 pt-10 md:pt-14 pb-0 text-center">
        {/* Badge */}
        <motion.div {...blurFadeUp(0.1)} className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-indigo-600 text-sm font-semibold px-4 py-2 rounded-full mb-5 border border-indigo-100/60 shadow-sm">
          <motion.span
            className="w-2 h-2 bg-indigo-500 rounded-full"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Plateforme tout-en-un pour créateurs
        </motion.div>

        {/* Title */}
        <motion.h1
          {...blurFadeUp(0.2)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.08] tracking-tight"
        >
          Crée, anime et monétise
          <br />
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
            ta communauté
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...blurFadeUp(0.35)}
          className="mt-6 text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto"
        >
          Une seule plateforme pour tes contenus, formations, événements et discussions. Fini les 6 outils différents.
        </motion.p>

        {/* CTA */}
        <motion.div
          {...blurFadeUp(0.5)}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#"
            className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-lg font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-indigo-500/25"
            whileHover={{ scale: 1.04, boxShadow: "0 20px 50px -10px rgba(99, 102, 241, 0.45)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Créer ma communauté
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
          <motion.a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 text-lg font-semibold px-8 py-4 rounded-2xl border border-gray-200 shadow-sm"
            whileHover={{ scale: 1.04, borderColor: "#818cf8", boxShadow: "0 8px 30px rgba(99,102,241,0.08)" }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
            Voir la démo
          </motion.a>
        </motion.div>

        {/* Social proof — défilement */}
        <motion.div
          {...blurFadeUp(0.65)}
          className="mt-6 flex items-center gap-4 justify-center"
        >
          <div className="relative w-[120px] h-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
            <motion.div
              className="flex -space-x-1.5 absolute top-0 h-full items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            >
              {[...avatarList, ...avatarList].map((av, i) => (
                <img
                  key={i}
                  src={av.img}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm flex-shrink-0 object-cover bg-gray-100"
                />
              ))}
            </motion.div>
          </div>
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-gray-600">500+</span> créateurs actifs
          </p>
        </motion.div>
      </div>

      {/* ── Image produit centrale ── */}
      <div className="relative max-w-6xl mx-auto px-6 mt-12 md:mt-14">
        {/* Glow derrière l'image */}
        <motion.div
          className="absolute inset-x-12 top-8 bottom-0 bg-gradient-to-b from-indigo-200/40 via-violet-200/20 to-transparent rounded-[2rem] blur-[60px] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        />

        {/* Image container */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -8, boxShadow: "0 30px 80px -10px rgba(99,102,241,0.18), 0 12px 40px rgba(0,0,0,0.08)" }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          <div className="bg-white rounded-t-2xl md:rounded-t-3xl shadow-[0_-4px_60px_rgba(99,102,241,0.08),0_8px_30px_rgba(0,0,0,0.06)] border border-gray-200/60 border-b-0 overflow-hidden transition-shadow duration-500">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 py-3 bg-gray-50/80 border-b border-gray-100">
              <span className="w-3 h-3 rounded-full bg-red-300" />
              <span className="w-3 h-3 rounded-full bg-yellow-300" />
              <span className="w-3 h-3 rounded-full bg-green-300" />
              <div className="flex-1 mx-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-[11px] text-gray-400 font-medium">app.yoocamp.com</span>
              </div>
            </div>

            {/* Image produit */}
            <Image
              src="/test.png"
              alt="Yoocamp — tableau de bord"
              width={1200}
              height={750}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Floating cards autour de l'image */}
        <FloatingCard className="-top-4 -right-4 md:right-4 lg:-right-12" delay={0}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-medium text-gray-400">Paiement reçu</p>
              <p className="text-sm font-bold text-gray-900">+49,00 €</p>
            </div>
          </div>
        </FloatingCard>

        <FloatingCard className="top-[35%] -left-4 md:left-2 lg:-left-16" delay={1}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-medium text-gray-400">Nouveau membre</p>
              <p className="text-sm font-bold text-gray-900">Marie L.</p>
            </div>
          </div>
        </FloatingCard>

        <FloatingCard className="bottom-[25%] -right-4 md:right-2 lg:-right-10" delay={2}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-medium text-gray-400">Activité</p>
              <p className="text-sm font-bold text-gray-900">+32% ce mois</p>
            </div>
          </div>
        </FloatingCard>

        {/* Fade to white en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
}
