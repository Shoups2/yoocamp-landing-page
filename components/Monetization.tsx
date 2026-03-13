"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn } from "./motion";

/* ── Animated counter ────────────────────── */

function CountUp({ target, delay = 0 }: { target: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  const format = useCallback(
    (n: number) =>
      Math.round(n)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " "),
    [],
  );

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      const duration = 1200;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        setValue(target * ease);
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, target, delay]);

  return <span ref={ref}>{format(value)}&nbsp;€</span>;
}

/* ── Interactive Revenue Curve ───────────── */

// Realistic MRR growth with natural ups & downs
const monthlyData = [
  { month: "Jan", value: 120 },
  { month: "Fév", value: 310 },
  { month: "Mar", value: 480 },
  { month: "Avr", value: 620 },
  { month: "Mai", value: 890 },
  { month: "Jun", value: 1150 },
  { month: "Jul", value: 1040 },
  { month: "Aoû", value: 1380 },
  { month: "Sep", value: 1820 },
  { month: "Oct", value: 2350 },
  { month: "Nov", value: 2780 },
  { month: "Déc", value: 3480 },
];

function InteractiveCurve() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const padding = { top: 14, right: 10, bottom: 22, left: 8 };
  const w = 280;
  const h = 115;
  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;

  const maxVal = Math.max(...monthlyData.map((d) => d.value));

  const points = monthlyData.map((d, i) => ({
    x: padding.left + (i / (monthlyData.length - 1)) * chartW,
    y: padding.top + chartH - (d.value / maxVal) * chartH,
  }));

  // Smooth cubic bezier path
  const linePath = points.reduce((acc, p, i) => {
    if (i === 0) return `M${p.x},${p.y}`;
    const prev = points[i - 1];
    const cpx = (prev.x + p.x) / 2;
    return `${acc} C${cpx},${prev.y} ${cpx},${p.y} ${p.x},${p.y}`;
  }, "");

  const areaPath = `${linePath} L${points[points.length - 1].x},${padding.top + chartH} L${points[0].x},${padding.top + chartH} Z`;

  const activePoint = hoverIndex !== null ? points[hoverIndex] : null;
  const activeData = hoverIndex !== null ? monthlyData[hoverIndex] : null;

  const format = (n: number) =>
    n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const colWidth = chartW / monthlyData.length;

  return (
    <div className="relative">
      <svg
        ref={ref}
        viewBox={`0 0 ${w} ${h}`}
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="rev-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7B61FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7B61FF" />
          </linearGradient>
          <linearGradient id="rev-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7B61FF" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#7B61FF" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((t) => (
          <line
            key={t}
            x1={padding.left}
            x2={padding.left + chartW}
            y1={padding.top + chartH * (1 - t)}
            y2={padding.top + chartH * (1 - t)}
            stroke="#e5e7eb"
            strokeWidth="0.5"
            strokeDasharray="3,3"
          />
        ))}

        {/* Area fill */}
        <motion.path
          d={areaPath}
          fill="url(#rev-area)"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        />

        {/* Curve line */}
        <motion.path
          d={linePath}
          fill="none"
          stroke="url(#rev-line)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Month labels */}
        {monthlyData.map((d, i) => (
          <text
            key={d.month}
            x={points[i].x}
            y={h - 6}
            textAnchor="middle"
            className="text-[9px] fill-gray-300 select-none"
          >
            {d.month}
          </text>
        ))}

        {/* Hover vertical line */}
        {activePoint && (
          <line
            x1={activePoint.x}
            x2={activePoint.x}
            y1={padding.top}
            y2={padding.top + chartH}
            stroke="#7B61FF"
            strokeWidth="1"
            strokeDasharray="4,3"
            opacity="0.4"
          />
        )}

        {/* Active dot */}
        {activePoint && (
          <>
            <circle
              cx={activePoint.x}
              cy={activePoint.y}
              r="6"
              fill="#7B61FF"
              opacity="0.15"
            />
            <circle
              cx={activePoint.x}
              cy={activePoint.y}
              r="3.5"
              fill="#7B61FF"
              stroke="white"
              strokeWidth="1.5"
            />
          </>
        )}

        {/* Invisible hover zones per month */}
        {points.map((p, i) => (
          <rect
            key={i}
            x={p.x - colWidth / 2}
            y={padding.top}
            width={colWidth}
            height={chartH}
            fill="transparent"
            className="cursor-pointer"
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          />
        ))}
      </svg>

      {/* Tooltip */}
      {activePoint && activeData && (
        <div
          className="absolute pointer-events-none bg-gray-900 text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg shadow-lg -translate-x-1/2 whitespace-nowrap"
          style={{
            left: `${(activePoint.x / w) * 100}%`,
            top: `${((activePoint.y - 30) / h) * 100}%`,
          }}
        >
          {activeData.month} · {format(activeData.value)}&nbsp;€
        </div>
      )}
    </div>
  );
}

/* ── Card motion ─────────────────────────── */

const cardMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" } as const,
  whileHover: {
    y: -4,
    boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
    transition: { duration: 0.25 },
  },
};

/* ── Section ─────────────────────────────── */

export default function Monetization() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/40 to-white" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="text-center mb-14">
          <p className="text-[#7B61FF] font-semibold text-sm uppercase tracking-wider mb-3">
            Monétisation
          </p>
          <h2 className="text-3xl md:text-[2.75rem] lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Transforme ta communauté<br className="hidden md:block" />
            en <span className="text-[#7B61FF]">revenus</span>
          </h2>
          <p className="text-base text-gray-400 max-w-lg mx-auto">
            Abonnements, formations, coaching et événements — tout est intégré.
          </p>
        </FadeIn>

        {/* Cards wrapper — constrained width, centered */}
        <div className="sm:w-[75%] sm:mx-auto flex flex-col gap-3.5">

          {/* ── Abonnements ──────────────── */}
          <motion.div
            className="relative rounded-2xl border border-[#7B61FF]/10 overflow-hidden"
            style={{ backgroundColor: "rgba(123,97,255,0.03)" }}
            {...cardMotion}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="p-4 pb-1 flex items-start justify-between">
              <div>
                <span className="text-[36px] md:text-[42px] font-extrabold leading-none tracking-tight bg-gradient-to-r from-[#7B61FF] to-[#3B82F6] bg-clip-text text-transparent">
                  <CountUp target={3480} delay={0.2} />
                </span>
                <span className="text-[18px] font-bold text-[#7B61FF] mt-1 block">Abonnements</span>
              </div>
              <span className="text-[18px] font-bold text-[#7B61FF] mt-1">Décembre</span>
            </div>
            <div className="px-2 pb-2">
              <InteractiveCurve />
            </div>
          </motion.div>

          {/* 3 cards row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">

          {/* ── Formations ──────────────── */}
          <motion.div
            className="relative rounded-2xl border border-[#3B82F6]/10 overflow-hidden"
            style={{ backgroundColor: "rgba(59,130,246,0.03)" }}
            {...cardMotion}
            transition={{ duration: 0.45, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="p-5">
              <div>
                <span className="text-[36px] md:text-[42px] font-extrabold leading-none tracking-tight bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                  <CountUp target={8796} delay={0.3} />
                </span>
              </div>
              <span className="text-[20px] font-bold text-[#3B82F6] mt-2 block">Formations</span>
            </div>
          </motion.div>

          {/* ── Coaching ────────────────── */}
          <motion.div
            className="relative rounded-2xl border border-[#10B981]/10 overflow-hidden"
            style={{ backgroundColor: "rgba(16,185,129,0.03)" }}
            {...cardMotion}
            transition={{ duration: 0.45, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="p-5">
              <div>
                <span className="text-[36px] md:text-[42px] font-extrabold leading-none tracking-tight bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent">
                  <CountUp target={2400} delay={0.4} />
                </span>
              </div>
              <span className="text-[20px] font-bold text-[#10B981] mt-2 block">Coaching</span>
            </div>
          </motion.div>

          {/* ── Événements ──────────────── */}
          <motion.div
            className="relative rounded-2xl border border-[#EC4899]/10 overflow-hidden"
            style={{ backgroundColor: "rgba(236,72,153,0.03)" }}
            {...cardMotion}
            transition={{ duration: 0.45, delay: 0.21, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="p-5">
              <div>
                <span className="text-[36px] md:text-[42px] font-extrabold leading-none tracking-tight bg-gradient-to-r from-[#EC4899] to-[#F472B6] bg-clip-text text-transparent">
                  <CountUp target={4214} delay={0.5} />
                </span>
              </div>
              <span className="text-[20px] font-bold text-[#EC4899] mt-2 block">Événements</span>
            </div>
          </motion.div>

          </div>
        </div>

        {/* CTA */}
        <FadeIn delay={0.25} className="text-center mt-14">
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
