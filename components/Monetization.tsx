"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn } from "./motion";

/* ── Format number ───────────────────────── */

const fmt = (n: number) =>
  Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

/* ── Animated number ─────────────────────── */

function AnimatedNumber({ value, className }: { value: number; className?: string }) {
  const displayRef = useRef(value);
  const [display, setDisplay] = useState(value);
  const raf = useRef(0);

  useEffect(() => {
    cancelAnimationFrame(raf.current);
    const from = displayRef.current;
    const diff = value - from;
    if (diff === 0) return;
    const duration = 400;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const current = from + diff * ease(t);
      displayRef.current = current;
      setDisplay(current);
      if (t < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [value]);

  return <span className={className}>{fmt(display)}&nbsp;€</span>;
}

/* ── Custom slider ───────────────────────── */

function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  suffix,
  color,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  suffix: string;
  color: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-medium text-gray-500">{label}</span>
        <span
          className="text-[13px] font-bold tabular-nums px-2.5 py-0.5 rounded-full"
          style={{ color, backgroundColor: `color-mix(in srgb, ${color} 8%, transparent)` }}
        >
          {fmt(value)}{suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="yoo-slider w-full"
        style={{
          "--slider-color": color,
          "--slider-track": `linear-gradient(to right, ${color} ${pct}%, #e5e7eb ${pct}%)`,
        } as React.CSSProperties}
      />
    </div>
  );
}

/* ── Card animation ──────────────────────── */

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* ── Revenue card ────────────────────────── */

function RevenueCard({
  index,
  inView,
  title,
  revenue,
  color,
  gradientTo,
  children,
}: {
  index: number;
  inView: boolean;
  title: string;
  revenue: number;
  color: string;
  gradientTo: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="rounded-2xl border border-gray-200/80 bg-white overflow-hidden flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      whileHover={{
        y: -4,
        boxShadow: `0 20px 50px -12px color-mix(in srgb, ${color} 15%, transparent)`,
        borderColor: `color-mix(in srgb, ${color} 18%, #e5e7eb)`,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {/* ── Résultat ── */}
      <div className="p-6 pb-4">
        <span
          className="block text-[36px] md:text-[40px] font-extrabold leading-none tracking-tight"
          style={{
            backgroundImage: `linear-gradient(135deg, ${color}, ${gradientTo})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          <AnimatedNumber value={revenue} />
        </span>
        <span className="text-[20px] font-bold block mt-2" style={{ color }}>
          {title}
        </span>
      </div>

      {/* ── Contrôles ── */}
      <div className="mt-auto p-6 pt-4 space-y-4 border-t border-gray-100">
        {children}
      </div>
    </motion.div>
  );
}

/* ── Section ─────────────────────────────── */

export default function Monetization() {
  const [members, setMembers] = useState(200);
  const [subPrice, setSubPrice] = useState(39);
  const [sales, setSales] = useState(30);
  const [coursePrice, setCoursePrice] = useState(240);

  const subRevenue = members * subPrice;
  const courseRevenue = sales * coursePrice;
  const gross = subRevenue + courseRevenue;

  // Frais Stripe : 1,5% + 0,25 € par transaction (1 transaction par abonné/vente)
  const transactionCount = members + sales;
  const stripeFees = gross * 0.015 + transactionCount * 0.25;

  // Commission Yoocamp : 10% (formule standard)
  const yoocampCommission = gross * 0.10;

  const net = gross - stripeFees - yoocampCommission;

  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} id="simulateur" className="py-28 md:py-36 relative overflow-hidden">
      {/* ── Fond ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-[#FAFAFA] to-white" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* ── Header ── */}
        <FadeIn className="text-center mb-5">
          <div className="inline-flex items-center gap-2 bg-[#6952E6]/[0.06] text-[#6952E6] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 border border-[#6952E6]/10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#6952E6]" />
            Simule tes revenus
          </div>
          <h2 className="text-3xl md:text-[2.75rem] lg:text-5xl font-bold text-gray-900 leading-tight">
            Combien peut vraiment te rapporter<br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#6952E6] via-[#8B75FF] to-[#6C4FE0] bg-clip-text text-transparent">ta communauté</span> ?
          </h2>
        </FadeIn>

        <div className="mb-12" />

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

          <RevenueCard
            index={0}
            inView={inView}
            title="Abonnements"
            revenue={subRevenue}
            color="#6952E6"
            gradientTo="#3B82F6"
          >
            <Slider label="Membres" value={members} onChange={setMembers} min={10} max={1000} step={10} suffix="" color="#6952E6" />
            <Slider label="Prix / mois" value={subPrice} onChange={setSubPrice} min={5} max={99} step={1} suffix=" €" color="#6952E6" />
          </RevenueCard>

          <RevenueCard
            index={1}
            inView={inView}
            title="Formations & Coaching"
            revenue={courseRevenue}
            color="#3B82F6"
            gradientTo="#06B6D4"
          >
            <Slider label="Ventes / mois" value={sales} onChange={setSales} min={10} max={1000} step={10} suffix="" color="#3B82F6" />
            <Slider label="Prix par vente" value={coursePrice} onChange={setCoursePrice} min={19} max={497} step={1} suffix=" €" color="#3B82F6" />
          </RevenueCard>

        </div>

        {/* ── Total ── */}
        <motion.div
          className="rounded-2xl bg-white border border-gray-200/80 overflow-hidden relative shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="py-6 md:py-8 px-6 text-center relative">
            {/* Glow subtil */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full bg-[#6952E6]/[0.04] blur-[80px] pointer-events-none" />

            {/* ── Mention plan ── */}
            <p className="relative text-[12px] text-gray-500 mb-3">
              Estimation avec le <span className="font-semibold text-gray-700">plan Standard</span> · frais inclus
            </p>

            {/* ── Net : gros chiffre ── */}
            <motion.div
              className="relative"
              key={net}
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span className="text-[52px] md:text-[72px] lg:text-[88px] font-extrabold leading-none tracking-tight bg-gradient-to-r from-[#6952E6] to-[#3B82F6] bg-clip-text text-transparent">
                <AnimatedNumber value={net} />
              </span>
            </motion.div>

            <p className="relative text-base md:text-lg font-medium text-gray-600 mt-5 mb-10">
              de revenus nets sur ton compte avec <span className="text-[#6952E6] font-semibold">Yoocamp</span>
            </p>

            {/* CTA */}
            <motion.a
              href="https://www.yoocamp.com/register"
              className="relative inline-flex items-center gap-2.5 bg-[#6952E6] text-white font-semibold px-8 py-4 rounded-xl text-[15px] shadow-[0_2px_16px_rgba(123,97,255,0.25)] cursor-pointer"
              whileHover={{ scale: 1.03, boxShadow: "0 4px 24px rgba(123,97,255,0.35)" }}
              whileTap={{ scale: 0.98 }}
            >
              Démarrer gratuitement
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>

            <p className="relative text-[13px] text-gray-600 mt-4">
              Sans carte bancaire · En 2 minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
