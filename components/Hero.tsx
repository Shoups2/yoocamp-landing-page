"use client";

import { motion } from "framer-motion";
import { Float, FadeIn } from "./motion";

const avatars = ["A", "B", "C", "D", "E", "F", "G", "H"];

function MockupCard({
  className,
  delay,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <Float delay={delay} duration={5} y={8} className={className}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: (delay || 0) + 0.5 }}
        className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-4"
      >
        {children}
      </motion.div>
    </Float>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/60" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-100/40 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-indigo-100">
                <motion.span
                  className="w-2 h-2 bg-indigo-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Plateforme de formation &amp; communauté
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Lance ta formation et{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  commence à vendre
                </span>{" "}
                aujourd&apos;hui
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                La solution la plus simple pour transformer ton contenu en
                revenus durables.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <motion.a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white text-lg font-semibold px-7 py-3.5 rounded-xl"
                  whileHover={{ scale: 1.04, backgroundColor: "#4338ca" }}
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
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 text-lg font-semibold px-7 py-3.5 rounded-xl border border-gray-200"
                  whileHover={{ scale: 1.04, borderColor: "#818cf8" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Voir la démo
                </motion.a>
              </div>
              <p className="mt-4 text-sm text-gray-400 text-center lg:text-left">
                2 mois offerts &middot; sans engagement &middot; sans carte bancaire
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-8 flex items-center gap-3 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {avatars.slice(0, 5).map((a, i) => (
                    <motion.div
                      key={a}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.08 }}
                      className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-600 text-xs font-bold flex items-center justify-center"
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
          <div className="relative lg:h-[500px] hidden lg:block">
            {/* Main dashboard mockup */}
            <FadeIn delay={0.3} direction="left" className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl shadow-gray-200/60 border border-gray-200 overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
                  <span className="flex-1 mx-4 h-5 bg-gray-100 rounded" />
                </div>
                <img
                  src="/test.png"
                  alt="Yoocamp dashboard"
                  className="w-full"
                />
              </div>
            </FadeIn>

            {/* Floating cards */}
            <MockupCard className="absolute -top-4 -right-4 z-20" delay={0}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-green-600 text-sm font-bold">
                  +
                </div>
                <div>
                  <div className="h-3 w-20 bg-gray-100 rounded" />
                  <div className="h-2 w-14 bg-green-50 rounded mt-1.5" />
                </div>
              </div>
            </MockupCard>

            <MockupCard className="absolute -bottom-6 -left-6 z-20" delay={1}>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  {["C", "D", "E"].map((a) => (
                    <div
                      key={a}
                      className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 border-2 border-white text-[10px] font-bold text-indigo-600 flex items-center justify-center"
                    >
                      {a}
                    </div>
                  ))}
                </div>
                <div className="h-3 w-24 bg-gray-100 rounded" />
              </div>
            </MockupCard>

            <MockupCard className="absolute top-1/3 -right-10 z-20" delay={2}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-amber-600 text-xs">
                  ★
                </div>
                <div>
                  <div className="h-2.5 w-16 bg-gray-100 rounded" />
                  <div className="h-2 w-10 bg-amber-50 rounded mt-1" />
                </div>
              </div>
            </MockupCard>
          </div>
        </div>
      </div>
    </section>
  );
}
