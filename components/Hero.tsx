"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Float, FadeIn } from "./motion";

const avatars = ["A", "B", "C", "D", "E", "F", "G", "H"];

const bgElements = [
  { x: 5, y: 8, size: 18, color: "#8B5CF6", shape: "diamond", speed: 0.03 },
  { x: 92, y: 5, size: 14, color: "#10B981", shape: "star", speed: 0.02 },
  { x: 15, y: 72, size: 20, color: "#F59E0B", shape: "heart", speed: 0.04 },
  { x: 78, y: 68, size: 16, color: "#EF4444", shape: "bolt", speed: 0.025 },
  { x: 42, y: 6, size: 12, color: "#3B82F6", shape: "triangle", speed: 0.035 },
  { x: 88, y: 42, size: 18, color: "#EC4899", shape: "spade", speed: 0.02 },
  { x: 3, y: 38, size: 14, color: "#F97316", shape: "club", speed: 0.045 },
  { x: 35, y: 88, size: 20, color: "#14B8A6", shape: "star", speed: 0.03 },
  { x: 68, y: 28, size: 12, color: "#6366F1", shape: "heart", speed: 0.025 },
  { x: 25, y: 18, size: 16, color: "#EF4444", shape: "star", speed: 0.04 },
  { x: 58, y: 55, size: 14, color: "#10B981", shape: "bolt", speed: 0.02 },
  { x: 95, y: 82, size: 16, color: "#8B5CF6", shape: "triangle", speed: 0.035 },
  { x: 12, y: 50, size: 10, color: "#F59E0B", shape: "diamond", speed: 0.05 },
  { x: 50, y: 30, size: 16, color: "#EC4899", shape: "star", speed: 0.015 },
  { x: 72, y: 90, size: 12, color: "#3B82F6", shape: "heart", speed: 0.04 },
  { x: 82, y: 12, size: 20, color: "#14B8A6", shape: "star", speed: 0.03 },
  { x: 30, y: 45, size: 10, color: "#F97316", shape: "spade", speed: 0.025 },
  { x: 60, y: 78, size: 18, color: "#6366F1", shape: "club", speed: 0.035 },
  { x: 20, y: 92, size: 14, color: "#EF4444", shape: "triangle", speed: 0.02 },
  { x: 45, y: 60, size: 12, color: "#10B981", shape: "diamond", speed: 0.045 },
  { x: 8, y: 25, size: 16, color: "#3B82F6", shape: "bolt", speed: 0.03 },
  { x: 75, y: 50, size: 14, color: "#F59E0B", shape: "club", speed: 0.04 },
  { x: 38, y: 15, size: 10, color: "#EC4899", shape: "star", speed: 0.025 },
  { x: 90, y: 65, size: 18, color: "#8B5CF6", shape: "star", speed: 0.02 },
  { x: 55, y: 4, size: 12, color: "#14B8A6", shape: "spade", speed: 0.035 },
  { x: 2, y: 80, size: 16, color: "#F97316", shape: "heart", speed: 0.05 },
  { x: 65, y: 15, size: 14, color: "#6366F1", shape: "triangle", speed: 0.015 },
  { x: 48, y: 45, size: 10, color: "#3B82F6", shape: "diamond", speed: 0.04 },
  { x: 17, y: 35, size: 14, color: "#EC4899", shape: "heart", speed: 0.032 },
  { x: 83, y: 55, size: 12, color: "#14B8A6", shape: "bolt", speed: 0.028 },
  { x: 40, y: 95, size: 16, color: "#8B5CF6", shape: "spade", speed: 0.042 },
  { x: 70, y: 10, size: 10, color: "#F59E0B", shape: "triangle", speed: 0.018 },
  { x: 28, y: 78, size: 18, color: "#3B82F6", shape: "star", speed: 0.038 },
  { x: 85, y: 35, size: 12, color: "#EF4444", shape: "diamond", speed: 0.022 },
  { x: 10, y: 58, size: 14, color: "#6366F1", shape: "club", speed: 0.048 },
  { x: 62, y: 5, size: 16, color: "#F97316", shape: "heart", speed: 0.015 },
  { x: 52, y: 72, size: 10, color: "#10B981", shape: "triangle", speed: 0.035 },
  { x: 95, y: 25, size: 14, color: "#EC4899", shape: "bolt", speed: 0.028 },
  { x: 22, y: 4, size: 12, color: "#14B8A6", shape: "diamond", speed: 0.045 },
];

function ShapeIcon({ shape, size, color }: { shape: string; size: number; color: string }) {
  if (shape === "diamond") return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity={0.15}>
      <path d="M12 2L22 12L12 22L2 12Z" />
    </svg>
  );
  if (shape === "spade") return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity={0.15}>
      <path d="M12 2C12 2 4 10 4 14c0 2.5 2 4 4 4 1.2 0 2.3-.5 3-1.3V20h-1a1 1 0 100 2h4a1 1 0 100-2h-1v-3.3c.7.8 1.8 1.3 3 1.3 2 0 4-1.5 4-4C20 10 12 2 12 2z" />
    </svg>
  );
  if (shape === "club") return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity={0.15}>
      <path d="M12 2a4 4 0 00-1 7.874V12a4 4 0 10-5.657-1.343A4 4 0 1011 17.126V20h-1a1 1 0 100 2h4a1 1 0 100-2h-1v-2.874A4 4 0 1018.657 10.657 4 4 0 0013 9.874V9.874A4 4 0 0012 2z" />
    </svg>
  );
  if (shape === "star") return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity={0.15}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
  if (shape === "heart") return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity={0.15}>
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
    </svg>
  );
  if (shape === "bolt") return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity={0.15}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
  if (shape === "triangle") return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity={0.15}>
      <path d="M12 3L2 21h20L12 3z" />
    </svg>
  );
  return null;
}

function SaasCard({
  className,
  delay,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [-6, 6, -6] }}
      whileHover={{ scale: 1.15 }}
      transition={{
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay || 0 },
        scale: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: (delay || 0) * 0.3 + 0.5 }}
        className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg shadow-gray-900/[0.04] border border-gray-100/80 px-4 py-3"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMouse({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        });
      }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/60" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(90vw,800px)] h-[min(90vw,800px)] bg-indigo-100/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[min(80vw,600px)] h-[min(80vw,600px)] bg-violet-100/20 rounded-full blur-[100px]" />

      {/* Floating background elements - follow mouse */}
      {bgElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: mouse.x * el.speed * 1000,
            y: mouse.y * el.speed * 1000,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20, opacity: { delay: 0.3 + i * 0.03, duration: 0.5 }, scale: { delay: 0.3 + i * 0.03, duration: 0.5 } }}
        >
          <ShapeIcon shape={el.shape} size={el.size} color={el.color} />
        </motion.div>
      ))}

      <div className="relative max-w-[1400px] mx-auto px-6 py-10 lg:py-14 w-full">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-indigo-100">
                <motion.span
                  className="w-2 h-2 bg-indigo-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Plateforme de communauté &amp; formation
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Lance ta communauté
                <br />
                et{" "}
                <span className="text-[#6366F1]">
                  {"commence à vendre".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + i * 0.015 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-5 text-lg md:text-xl text-gray-500 leading-relaxed max-w-md mx-auto lg:mx-0">
                La solution la plus simple pour transformer ton contenu en
                revenus durables.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <motion.a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-lg font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-indigo-500/25"
                  whileHover={{ scale: 1.04, boxShadow: "0 20px 40px -8px rgba(99, 102, 241, 0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  Commencer gratuitement
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
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 text-lg font-semibold px-7 py-3.5 rounded-xl border border-gray-200 shadow-sm"
                  whileHover={{ scale: 1.04, borderColor: "#818cf8" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Voir la démo
                </motion.a>
              </div>
              <p className="mt-3 text-sm text-gray-400 text-center lg:text-left">
                2 mois offerts &middot; sans engagement &middot; sans carte bancaire
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-6 flex items-center gap-3 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {avatars.slice(0, 5).map((a, i) => (
                    <motion.div
                      key={a}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -4, 0],
                      }}
                      transition={{
                        opacity: { delay: 0.6 + i * 0.08, duration: 0.3 },
                        scale: { delay: 0.6 + i * 0.08, duration: 0.3 },
                        y: { delay: 1.5 + i * 0.12, duration: 0.6, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" },
                      }}
                      className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-600 text-xs font-bold flex items-center justify-center shadow-sm"
                    >
                      {a}
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-gray-600">500+</span> créateurs actifs
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right: Mockup */}
          <div className="relative">
            {/* Main dashboard mockup */}
            <FadeIn delay={0.3} direction="left" className="relative z-10">
              <motion.div
                className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)] border border-gray-200/80 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-50/80 border-b border-gray-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
                  <span className="flex-1 mx-4 h-5 bg-gray-100 rounded-md" />
                </div>
                <img
                  src="/test.png"
                  alt="Yoocamp dashboard"
                  className="w-full"
                />
              </motion.div>
            </FadeIn>

            {/* Floating SaaS micro-cards - hidden on mobile */}
            <SaasCard className="absolute -top-3 -right-6 z-20 hidden lg:block" delay={0}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-gray-500">Paiement reçu</p>
                  <p className="text-sm font-bold text-gray-900">+49,00 €</p>
                </div>
              </div>
            </SaasCard>

            <SaasCard className="absolute -bottom-4 -left-8 z-20 hidden lg:block" delay={1}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-gray-500">Nouveau membre</p>
                  <p className="text-sm font-bold text-gray-900">Marie L.</p>
                </div>
              </div>
            </SaasCard>

            <SaasCard className="absolute top-[30%] -right-12 z-20 hidden lg:block" delay={2}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-gray-500">Activité</p>
                  <p className="text-sm font-bold text-gray-900">+32% ce mois</p>
                </div>
              </div>
            </SaasCard>

            <SaasCard className="absolute bottom-[20%] -left-10 z-20 hidden lg:block" delay={3}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-gray-500">Formation terminée</p>
                  <p className="text-sm font-bold text-gray-900">12 modules</p>
                </div>
              </div>
            </SaasCard>
          </div>
        </div>
      </div>
    </section>
  );
}
