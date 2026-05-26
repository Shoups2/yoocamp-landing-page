"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { FadeIn } from "./motion";

/* ── Step Mockups ─────────────────────────── */

function Step1Mock() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#6952E6] to-[#9B8AFF] flex items-center justify-center">
            <span className="text-[9px] font-bold text-white">Y</span>
          </div>
          <span className="text-xs font-semibold text-gray-700">Yoocamp</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-[#6952E6]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
          <span className="text-[10px] font-medium text-[#6952E6]">Privé</span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Nom de ta communauté</label>
          <div className="px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 flex items-center">
            <span className="text-sm text-gray-800 font-medium">Yoocamp</span>
            <motion.div
              className="w-[2px] h-4 bg-[#6952E6] ml-0.5 rounded-full"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Accès</label>
          <div className="flex gap-2">
            <div className="flex-1 px-3 py-2 rounded-xl bg-[#6952E6]/8 border border-[#6952E6]/20 text-center">
              <span className="text-xs font-semibold text-[#6952E6]">Sur invitation</span>
            </div>
            <div className="flex-1 px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-center">
              <span className="text-xs font-medium text-gray-400">Public</span>
            </div>
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Tarif</label>
          <div className="flex gap-2">
            <div className="flex-1 px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-center">
              <span className="text-xs font-medium text-gray-400">Gratuit</span>
            </div>
            <div className="flex-1 px-3 py-2 rounded-xl bg-[#6952E6]/8 border border-[#6952E6]/20 text-center">
              <span className="text-xs font-semibold text-[#6952E6]">Payant</span>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 px-3 py-2 rounded-xl bg-gray-50 border border-gray-200">
              <span className="text-[10px] text-gray-400">Prix abonnement par mois</span>
              <div className="text-sm text-gray-300">0,00 €</div>
            </div>
            <div className="flex-1 px-3 py-2 rounded-xl bg-gray-50 border border-gray-200">
              <span className="text-[10px] text-gray-400">Accès à vie</span>
              <div className="text-sm text-gray-300">0,00 €</div>
            </div>
          </div>
        </div>
        <motion.div
          className="w-full py-2.5 rounded-xl bg-[#6952E6] text-white text-sm font-semibold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Créer une communauté
        </motion.div>
      </div>
    </div>
  );
}

function Step2Mock() {
  const formations = [
    { title: "Trouver ta niche", videos: 4, color: "from-[#6952E6] to-[#9B8AFF]", free: true },
    { title: "Créer ton offre", videos: 6, color: "from-[#6C4FE0] to-[#6952E6]", free: true },
    { title: "Construire ton audience", videos: 8, color: "from-[#8B75FF] to-[#B4A0FF]", free: false, price: "49€" },
    { title: "Monétiser son expertise", videos: 5, color: "from-[#6952E6] to-[#6C4FE0]", free: false, price: "79€" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="px-5 py-3 border-b border-gray-100">
        <span className="text-sm font-bold text-gray-900">Mes <span className="bg-gradient-to-r from-[#6952E6] to-[#6C4FE0] bg-clip-text text-transparent">formations</span></span>
      </div>

      <div className="p-3 space-y-2">
        {formations.map((f, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3 p-2 rounded-xl border border-gray-100 bg-gray-50/50"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            {/* Miniature */}
            <div className={`w-16 h-10 rounded-lg bg-gradient-to-br ${f.color} flex items-center justify-center shrink-0 relative overflow-hidden`}>
              <div className="absolute top-[-20%] right-[-15%] w-[60%] h-[80%] bg-white/10 rounded-full blur-[8px]" />
              {f.free ? (
                <div className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[4px] border-l-white border-t-[2.5px] border-t-transparent border-b-[2.5px] border-b-transparent ml-0.5" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <span className={`text-xs font-medium block truncate ${f.free ? "text-gray-900" : "text-gray-400"}`}>{f.title}</span>
              <span className="text-[10px] text-gray-400">{f.videos} vidéos</span>
            </div>

            {/* Badge */}
            {f.free ? (
              <span className="text-[8px] font-semibold text-[#6952E6] bg-[#6952E6]/8 px-1.5 py-0.5 rounded border border-[#6952E6]/15 shrink-0">MEMBRES</span>
            ) : (
              <div className="shrink-0 relative group/btn cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#6952E6] to-[#6C4FE0] rounded-xl blur-md opacity-30" />
                <div className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#6952E6] to-[#6C4FE0]">
                  <svg className="w-2.5 h-2.5 text-white/80" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  <span className="text-[9px] font-bold text-white">{f.price}</span>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Step3Mock() {
  const activity = [
    { name: "Léa M.", action: "a acheté Formation complète", amount: "+97 €", avatar: "https://i.pravatar.cc/80?img=5" },
    { name: "Max D.", action: "a acheté Coaching VIP", amount: "+149 €", avatar: "https://i.pravatar.cc/80?img=12" },
    { name: "Sofia R.", action: "a acheté Pack Premium", amount: "+49 €", avatar: "https://i.pravatar.cc/80?img=23" },
    { name: "Hugo T.", action: "a acheté Masterclass", amount: "+79 €", avatar: "https://i.pravatar.cc/80?img=53" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
        <span className="text-sm font-bold text-gray-900">Tableau de bord</span>
        <span />
      </div>
      <div className="p-4 space-y-3">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Membres", value: "486", trend: "+24" },
            { label: "Ventes", value: "38", trend: "+12" },
            { label: "Revenus", value: "4 820 €", trend: "+32%" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 rounded-xl p-2.5 border border-gray-100 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="text-base font-bold text-gray-900 leading-tight">{stat.value}</div>
              <span className="text-[9px] text-gray-400 font-medium">{stat.label}</span>
              <div className="text-[9px] font-semibold text-emerald-500 mt-0.5">{stat.trend}</div>
            </motion.div>
          ))}
        </div>

        {/* Activité récente */}
        <div>
          <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Activité récente</span>
          <div className="mt-2 space-y-1.5">
            {activity.map((a, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl bg-gray-50/80 border border-gray-100"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.12 }}
              >
                <img src={a.avatar} alt={a.name} className="w-6 h-6 rounded-full object-cover shrink-0 border border-white shadow-sm" />
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] text-gray-700"><span className="font-semibold">{a.name}</span> {a.action}</span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-600 shrink-0">{a.amount}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Step Row ─────────────────────────────── */

const mocks = [<Step1Mock key="1" />, <Step2Mock key="2" />, <Step3Mock key="3" />];

function StepRow({ step, index, activeStep }: { step: typeof steps[number]; index: number; activeStep: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isReversed = index % 2 !== 0;
  const isActive = activeStep >= index;
  const isCurrent = activeStep === index;

  return (
    <div className="relative" ref={ref}>
      {/* Timeline node */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 flex-col items-center z-20">
        <motion.div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={isInView ? {
            scale: isCurrent ? 1.1 : 1,
            boxShadow: isCurrent
              ? "0 0 0 5px rgba(123,97,255,0.12), 0 0 24px -4px rgba(123,97,255,0.35)"
              : isActive
                ? "0 0 0 3px rgba(123,97,255,0.08), 0 4px 20px -4px rgba(123,97,255,0.15)"
                : "0 2px 8px rgba(0,0,0,0.06)",
          } : {}}
          transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 260, damping: 20 }}
          style={{
            backgroundColor: isActive ? "white" : "#fafafa",
            border: isActive ? "2px solid rgba(123,97,255,0.3)" : "2px solid rgba(0,0,0,0.06)",
          }}
        >
          <motion.div
            className="w-8 h-8 rounded-full font-bold text-sm flex items-center justify-center"
            animate={{
              backgroundColor: isActive ? "#6952E6" : "#e5e7eb",
              color: isActive ? "#ffffff" : "#9ca3af",
            }}
            transition={{ duration: 0.4 }}
          >
            {step.num}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-16 pt-16 md:pt-0`}
        animate={{ opacity: isActive ? 1 : 0.6 }}
        transition={{ duration: 0.5 }}
      >
        {/* Texte */}
        <div className="flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex md:hidden items-center gap-3 mb-5">
              <motion.div
                className="w-10 h-10 rounded-full font-bold text-base flex items-center justify-center shrink-0"
                animate={{
                  backgroundColor: isActive ? "#6952E6" : "#e5e7eb",
                  color: isActive ? "#ffffff" : "#9ca3af",
                  scale: isCurrent ? 1.1 : 1,
                  boxShadow: isCurrent ? "0 0 0 4px rgba(123,97,255,0.15), 0 4px 16px -4px rgba(123,97,255,0.3)" : "0 0 0 0px transparent",
                }}
                transition={{ duration: 0.4 }}
              >
                {step.num}
              </motion.div>
              <span className="text-sm font-bold text-[#6952E6] uppercase tracking-wider">Étape {step.num}</span>
            </div>
            <span className="hidden md:block text-sm font-bold text-[#6952E6] uppercase tracking-wider mb-4">Étape {step.num}</span>
          </motion.div>

          <motion.h3
            className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight transition-colors duration-500 whitespace-pre-wrap"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ color: isActive ? "#111827" : "#9ca3af" }}
          >
            {step.title}
          </motion.h3>

          <motion.p
            className="text-lg md:text-xl font-medium leading-relaxed max-w-md transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ color: isActive ? "#6b7280" : "#d1d5db" }}
          >
            {step.desc}
          </motion.p>
        </div>

        {/* Mockup */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.3, ease: "easeOut" } }}
        >
          <div className="relative group">
            {/* Halo — intensifies when active */}
            <div
              className="absolute -inset-8 pointer-events-none transition-opacity duration-700 rounded-3xl"
              style={{
                background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(123,97,255,0.18) 0%, transparent 70%)",
                opacity: isCurrent ? 1 : 0.25,
              }}
            />
            <div className="relative z-10 drop-shadow-[0_8px_30px_rgba(123,97,255,0.12)] transition-all duration-300 group-hover:drop-shadow-[0_16px_48px_rgba(123,97,255,0.22)]">
              {mocks[index]}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ── Timeline connector ───────────────────── */

function TimelineLine() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 0.95], [0, 1]);
  const dotTop = useTransform(scrollYProgress, [0, 0.95], ["0%", "100%"]);
  const dotOpacity = useTransform(scrollYProgress, [0, 0.85, 0.95], [1, 1, 0]);

  return (
    <div ref={ref} className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 z-10">
      {/* Background line */}
      <div className="absolute inset-0 w-[3px] bg-[#6952E6]/[0.12] mx-auto rounded-full" />
      {/* Animated fill */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] rounded-full origin-top"
        style={{
          scaleY,
          height: "100%",
          background: "linear-gradient(to bottom, #6952E6, #9B8AFF, #B8A9FF, #6952E6)",
        }}
      />
      {/* Animated dot */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#6952E6] shadow-[0_0_16px_rgba(123,97,255,0.6)]"
        style={{ top: dotTop, opacity: dotOpacity }}
      />
    </div>
  );
}

/* ── Steps Data ───────────────────────────── */

const gradientClass = "bg-gradient-to-r from-[#6952E6] via-[#8B75FF] to-[#6C4FE0] bg-clip-text text-transparent";

const steps = [
  {
    num: "1",
    title: <>Crée ta communauté{"\n"}<span className={gradientClass}>autour de ton contenu</span></>,
    desc: "Rassemble ton audience et structure ton contenu dans un espace dédié.",
    image: "/step1.png",
  },
  {
    num: "2",
    title: <>Publie du{"\n"}<span className={gradientClass}>contenu premium</span></>,
    desc: "Propose des formations, des vidéos exclusives, ou les deux.",
    image: "/step2.png",
  },
  {
    num: "3",
    title: <>Génère tes{"\n"}<span className={gradientClass}>premiers revenus</span></>,
    desc: "Invite de nouveaux membres, vends tes produits et développe tes revenus.",
    image: "/step3.png",
  },
];

/* ── Main Component ───────────────────────── */

export default function Features() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.25) setActiveStep(0);
    else if (v < 0.6) setActiveStep(1);
    else setActiveStep(2);
  });

  return (
    <section ref={sectionRef} id="fonctionnalités" className="py-24 md:py-36 relative overflow-hidden">
      {/* Progressive gradient background — du blanc vers le violet */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAF7FE] to-[#F0EBFE]" />
      {/* Ambient glows */}
      <div className="absolute top-[10%] left-[-5%] w-[45%] h-[50%] bg-violet-300/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-8%] w-[40%] h-[40%] bg-blue-200/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[10%] w-[35%] h-[35%] bg-[#6952E6]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 bg-[#6952E6]/[0.06] text-[#6952E6] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 border border-[#6952E6]/10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#6952E6]" />
            Comment ça marche
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-gray-900">Lance ta communauté </span>
            <span className="bg-gradient-to-r from-[#6952E6] via-[#8B75FF] to-[#6C4FE0] bg-clip-text text-transparent">en 3 étapes</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-500 font-medium max-w-lg mx-auto leading-relaxed">
            Ta communauté est prête <span className="bg-gradient-to-r from-[#6952E6] via-[#8B75FF] to-[#6C4FE0] bg-clip-text text-transparent font-semibold">en quelques minutes</span>.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Vertical timeline */}
          <TimelineLine />

          <div className="space-y-20 md:space-y-32">
            {steps.map((step, i) => (
              <StepRow key={step.num} step={step} index={i} activeStep={activeStep} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
