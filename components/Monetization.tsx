"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn } from "./motion";

/* ── Format number ───────────────────────── */

const fmt = (n: number) =>
  Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

/* ── Animated number (reacts to value changes) */

function AnimatedNumber({ value, className }: { value: number; className?: string }) {
  const displayRef = useRef(value);
  const [display, setDisplay] = useState(value);
  const raf = useRef(0);

  useEffect(() => {
    cancelAnimationFrame(raf.current);
    const from = displayRef.current;
    const diff = value - from;
    if (diff === 0) return;
    const duration = 250;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const current = from + diff * t;
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

/* ── Mini sparkline (Abonnements) ────────── */

function MiniSparkline({ value, color }: { value: number; color: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const coords = useMemo(() => {
    const ratios = [0.03, 0.09, 0.14, 0.18, 0.26, 0.33, 0.30, 0.40, 0.52, 0.68, 0.80, 1.0];
    const pts = ratios.map((r) => r * value);
    const w = 200;
    const h = 50;
    const maxVal = Math.max(...pts, 1);
    return pts.map((v, i) => ({
      x: (i / (pts.length - 1)) * w,
      y: h - (v / maxVal) * h * 0.85 - 2,
    }));
  }, [value]);

  const w = 200;
  const h = 50;

  const linePath = coords.reduce((acc, p, i) => {
    if (i === 0) return `M${p.x},${p.y}`;
    const prev = coords[i - 1];
    const cpx = (prev.x + p.x) / 2;
    return `${acc} C${cpx},${prev.y} ${cpx},${p.y} ${p.x},${p.y}`;
  }, "");

  const areaPath = `${linePath} L${w},${h} L0,${h} Z`;

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${w} ${h}`}
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="spark-area-v2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.1" />
          <stop offset="100%" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <motion.path
        d={areaPath}
        fill="url(#spark-area-v2)"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      />
      <motion.path
        d={linePath}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.35"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

/* ── Card animation ──────────────────────── */

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
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
  sparkline,
}: {
  index: number;
  inView: boolean;
  title: string;
  revenue: number;
  color: string;
  gradientTo: string;
  children: React.ReactNode;
  sparkline?: React.ReactNode;
}) {
  return (
    <motion.div
      className="rounded-2xl border overflow-hidden flex flex-col relative"
      style={{
        borderColor: `color-mix(in srgb, ${color} 10%, transparent)`,
        backgroundColor: `color-mix(in srgb, ${color} 2%, white)`,
      }}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      whileHover={{
        y: -3,
        boxShadow: `0 8px 30px color-mix(in srgb, ${color} 10%, transparent)`,
        transition: { duration: 0.2 },
      }}
    >
      {/* ── Zone résultat ── */}
      <div className="p-5 pb-4">
        <span
          className="block text-[34px] md:text-[38px] font-extrabold leading-none tracking-tight"
          style={{
            backgroundImage: `linear-gradient(to right, ${color}, ${gradientTo})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          <AnimatedNumber value={revenue} />
        </span>
        <span className="text-[20px] font-bold block mt-2" style={{ color }}>{title}</span>
      </div>

      {/* ── Zone visuelle (sparkline) ── */}
      {sparkline && (
        <div className="h-12 px-5">
          {sparkline}
        </div>
      )}

      {/* ── Zone contrôles ── */}
      <div
        className="mt-auto p-5 pt-4 space-y-3 border-t"
        style={{ borderColor: `color-mix(in srgb, ${color} 6%, transparent)` }}
      >
        {children}
      </div>
    </motion.div>
  );
}

/* ── Section ─────────────────────────────── */

export default function Monetization() {
  const [members, setMembers] = useState(120);
  const [subPrice, setSubPrice] = useState(29);
  const [sales, setSales] = useState(248);
  const [coursePrice, setCoursePrice] = useState(97);
  const [sessions, setSessions] = useState(20);
  const [sessionPrice, setSessionPrice] = useState(120);
  const [participants, setParticipants] = useState(86);
  const [ticketPrice, setTicketPrice] = useState(49);

  const subRevenue = members * subPrice;
  const courseRevenue = sales * coursePrice;
  const coachRevenue = sessions * sessionPrice;
  const eventRevenue = participants * ticketPrice;
  const total = subRevenue + courseRevenue + coachRevenue + eventRevenue;

  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/40 to-white" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="text-center mb-6">
          <p className="text-[#7B61FF] font-semibold text-sm uppercase tracking-wider mb-3">
            Simulateur de revenus
          </p>
          <h2 className="text-3xl md:text-[2.75rem] lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Génère des revenus<br className="hidden md:block" />
            avec <span className="text-[#7B61FF]">ta communauté</span>
          </h2>
          <p className="text-base text-gray-400 max-w-lg mx-auto">
            Abonnements, formations, coaching et événements — tout est intégré dans Yoocamp.
          </p>
        </FadeIn>

        {/* Micro-copy interactive hint */}
        <FadeIn delay={0.15} className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-[13px] font-medium text-gray-400 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full">
            <svg className="w-4 h-4 text-[#7B61FF]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
            Ajuste les curseurs pour simuler tes revenus
          </span>
        </FadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* ── Abonnements ──────────────── */}
          <RevenueCard
            index={0}
            inView={inView}
            title="Abonnements"
            revenue={subRevenue}
            color="#7B61FF"
            gradientTo="#3B82F6"
            sparkline={<MiniSparkline value={subRevenue} color="#7B61FF" />}
          >
            <Slider label="Membres" value={members} onChange={setMembers} min={10} max={1000} step={10} suffix="" color="#7B61FF" />
            <Slider label="Prix abonnement" value={subPrice} onChange={setSubPrice} min={5} max={99} step={1} suffix=" €" color="#7B61FF" />
          </RevenueCard>

          {/* ── Formations ──────────────── */}
          <RevenueCard
            index={1}
            inView={inView}
            title="Formations"
            revenue={courseRevenue}
            color="#3B82F6"
            gradientTo="#06B6D4"
          >
            <Slider label="Ventes" value={sales} onChange={setSales} min={10} max={1000} step={10} suffix="" color="#3B82F6" />
            <Slider label="Prix formation" value={coursePrice} onChange={setCoursePrice} min={19} max={497} step={1} suffix=" €" color="#3B82F6" />
          </RevenueCard>

          {/* ── Coaching ────────────────── */}
          <RevenueCard
            index={2}
            inView={inView}
            title="Coaching"
            revenue={coachRevenue}
            color="#10B981"
            gradientTo="#34D399"
          >
            <Slider label="Sessions / mois" value={sessions} onChange={setSessions} min={1} max={100} step={1} suffix="" color="#10B981" />
            <Slider label="Prix par session" value={sessionPrice} onChange={setSessionPrice} min={20} max={500} step={10} suffix=" €" color="#10B981" />
          </RevenueCard>

          {/* ── Événements ──────────────── */}
          <RevenueCard
            index={3}
            inView={inView}
            title="Événements"
            revenue={eventRevenue}
            color="#EC4899"
            gradientTo="#F472B6"
          >
            <Slider label="Participants" value={participants} onChange={setParticipants} min={10} max={500} step={5} suffix="" color="#EC4899" />
            <Slider label="Prix du ticket" value={ticketPrice} onChange={setTicketPrice} min={5} max={199} step={1} suffix=" €" color="#EC4899" />
          </RevenueCard>

        </div>

        {/* ── Total global ──────────────── */}
        <motion.div
          className="mt-8 rounded-2xl border border-[#7B61FF]/10 bg-gradient-to-r from-[#7B61FF]/[0.03] via-white to-[#10B981]/[0.03] p-8 md:p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-medium text-gray-400 mb-3">
            Revenus potentiels avec Yoocamp
          </p>
          <span className="text-[48px] md:text-[64px] font-extrabold leading-none tracking-tight bg-gradient-to-r from-[#7B61FF] via-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
            {fmt(total)}&nbsp;€
          </span>
          <div className="flex items-center justify-center gap-3 sm:gap-5 mt-5 flex-wrap">
            {[
              { label: "Abonnements", value: subRevenue, color: "#7B61FF" },
              { label: "Formations", value: courseRevenue, color: "#3B82F6" },
              { label: "Coaching", value: coachRevenue, color: "#10B981" },
              { label: "Événements", value: eventRevenue, color: "#EC4899" },
            ].map((item) => (
              <span
                key={item.label}
                className="flex items-center gap-1.5 text-[13px] text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full"
              >
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                {fmt(item.value)}&nbsp;€
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <FadeIn delay={0.3} className="text-center mt-12">
          <motion.a
            href="#"
            className="inline-flex items-center gap-2.5 bg-[#7B61FF] text-white font-semibold px-8 py-4 rounded-xl text-[15px] shadow-lg shadow-[#7B61FF]/20 cursor-pointer"
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(123,97,255,0.3)" }}
            whileTap={{ scale: 0.97 }}
          >
            Créer ma communauté — c&apos;est gratuit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </motion.a>
          <p className="text-sm text-gray-400 mt-3">
            Rejoins +200 créateurs · Sans carte bancaire · En 2 minutes
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
