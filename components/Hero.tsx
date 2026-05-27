"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ── Animation variants ─────────────────── */

const blurFadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
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

/* ── Floating decorative particles ──────── */

function FloatingParticles() {
  const particles = [
    { x: "8%", y: "18%", size: 4, color: "#818CF8", opacity: 0.5, delay: 0, drift: 6 },
    { x: "88%", y: "22%", size: 3, color: "#C084FC", opacity: 0.35, delay: 0.5, drift: 5 },
    { x: "14%", y: "65%", size: 6, color: "#6366F1", opacity: 0.45, delay: 1, drift: 8 },
    { x: "90%", y: "60%", size: 3, color: "#A78BFA", opacity: 0.3, delay: 1.5, drift: 4 },
    { x: "25%", y: "12%", size: 2, color: "#E0E7FF", opacity: 0.6, delay: 0.8, drift: 5 },
    { x: "78%", y: "75%", size: 5, color: "#DDD6FE", opacity: 0.35, delay: 0.3, drift: 7 },
    { x: "50%", y: "10%", size: 2, color: "#818CF8", opacity: 0.25, delay: 1.2, drift: 3 },
    { x: "35%", y: "80%", size: 3, color: "#C4B5FD", opacity: 0.3, delay: 0.7, drift: 6 },
    { x: "65%", y: "45%", size: 2, color: "#A5B4FC", opacity: 0.2, delay: 1.8, drift: 4 },
  ];

  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none hidden md:block"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, p.opacity, p.opacity * 0.5, p.opacity],
            scale: 1,
            x: [-p.drift, p.drift, -p.drift],
            y: [-p.drift, p.drift, -p.drift],
          }}
          transition={{
            opacity: { delay: 1 + p.delay, duration: 2.5, repeat: Infinity, repeatType: "reverse" },
            scale: { delay: 1 + p.delay, duration: 0.6 },
            x: { delay: 1 + p.delay, duration: 6 + i * 0.8, repeat: Infinity, ease: "easeInOut" },
            y: { delay: 1 + p.delay, duration: 5 + i * 0.6, repeat: Infinity, ease: "easeInOut" },
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
    <section
      className="relative pb-12 md:pb-20"
      style={{
        background: "#ffffff",
      }}
    >
      {/* ── Grain subtil pour la matière ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.025,
        }}
      />

      {/* ── Halos violet (marque uniquement) ── */}
      <div className="absolute inset-x-1.5 md:inset-x-2.5 top-0.5 md:top-1 bottom-0 rounded-t-[1.5rem] md:rounded-t-[2rem] rounded-b-[2rem] md:rounded-b-[3rem] overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[30%] left-[-10%] w-[50%] h-[55%] rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, rgba(105,82,230,0.06), rgba(139,117,255,0.025) 55%, transparent 80%)" }}
          animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[5%] right-[-8%] w-[50%] h-[55%] rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, rgba(139,117,255,0.045), rgba(184,169,255,0.02) 55%, transparent 80%)" }}
          animate={{ x: [0, -12, 0], y: [0, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <FloatingParticles />

      {/* ── Content ── */}
      <div className="relative max-w-5xl mx-auto px-6 pt-24 md:pt-36 lg:pt-44 text-center">
        {/* Title */}
        <motion.h1
          {...blurFadeUp(0.2)}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.08] tracking-tight scale-[1.03] origin-center"
        >
          Crée ta communauté privée
          <br />
          <span className="bg-gradient-to-r from-[#6952E6] via-[#8B75FF] to-[#6C4FE0] bg-clip-text text-transparent">
            et vends ton contenu
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...blurFadeUp(0.35)}
          className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
        >
          Offre à ton audience un espace privé pour découvrir tes formations, accéder à tes vidéos exclusives et participer à tes événements privés.
        </motion.p>

        {/* CTA */}
        <motion.div
          {...blurFadeUp(0.5)}
          className="mt-10 flex flex-col items-center"
        >
          <motion.a
            href="https://www.yoocamp.com/register"
            className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#6952E6] to-[#8B75FF] text-white text-lg font-semibold px-6 py-3.5 rounded-2xl shadow-lg shadow-[#6952E6]/25"
            whileHover={{ scale: 1.04, boxShadow: "0 20px 50px -10px rgba(105, 82, 230, 0.45)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Lancer ma communauté gratuitement
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
          <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 text-green-500" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
              </span>
              Sans carte bancaire
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 text-green-500" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
              </span>
              Prêt en quelques minutes
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 text-green-500" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
              </span>
              Monétise quand tu es prêt
            </span>
          </div>
        </motion.div>

        {/* Social proof */}
        <motion.div
          {...blurFadeUp(0.6)}
          className="mt-5 flex items-center justify-center gap-2.5"
        >
          <div className="relative w-[120px] h-7 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
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
                  className="w-7 h-7 rounded-full border-2 border-white shadow-sm flex-shrink-0 object-cover bg-gray-100"
                />
              ))}
            </motion.div>
          </div>
          <span className="text-sm text-gray-500"><span className="font-semibold text-gray-700">+1 000 créateurs</span> nous font déjà confiance</span>
        </motion.div>
      </div>

      {/* ── Image produit centrale ── */}
      <div className="relative max-w-[1104px] mx-4 xl:mx-auto mt-14 md:mt-18 lg:mt-22">
        {/* Glow radial derrière le mockup */}
        <motion.div
          className="absolute inset-x-0 top-4 bottom-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(120, 90, 255, 0.18), rgba(99, 102, 241, 0.08) 40%, transparent 70%)",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.4, ease: "easeOut" }}
        />

        {/* Image container */}
        <motion.div
          className="relative z-10 rounded-2xl md:rounded-3xl"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -6, boxShadow: "0 18px 40px -12px rgba(105,82,230,0.10), 0 8px 24px rgba(0,0,0,0.05)" }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-[0_-4px_60px_rgba(99,102,241,0.08),0_8px_30px_rgba(0,0,0,0.06)] border border-gray-200/60 overflow-hidden transition-shadow duration-500">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 py-3 bg-gray-50/80 border-b border-gray-100">
              <span className="w-3 h-3 rounded-full bg-red-300" />
              <span className="w-3 h-3 rounded-full bg-yellow-300" />
              <span className="w-3 h-3 rounded-full bg-green-300" />
              <div className="flex-1 mx-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-[11px] text-gray-400 font-medium">app.yoocamp.com</span>
              </div>
            </div>

            {/* Image produit (crop aspect-video centré) */}
            <div className="relative w-full aspect-video bg-gray-50">
              <Image
                src="/hero-mockup.png"
                alt="Yoocamp — tableau de bord"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover object-top"
                priority
              />
            </div>
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6952E6]/10 to-purple-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#6952E6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      </div>
    </section>
  );
}
