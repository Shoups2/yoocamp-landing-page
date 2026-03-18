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
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7B61FF] to-[#9B8AFF] flex items-center justify-center">
            <span className="text-[9px] font-bold text-white">Y</span>
          </div>
          <span className="text-xs font-semibold text-gray-700">Yoocamp</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-[#7B61FF]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
          <span className="text-[10px] font-medium text-[#7B61FF]">Privé</span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Nom de ta communauté</label>
          <div className="px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 flex items-center">
            <span className="text-sm text-gray-800 font-medium">Yoocamp</span>
            <motion.div
              className="w-[2px] h-4 bg-[#7B61FF] ml-0.5 rounded-full"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Accès</label>
          <div className="flex gap-2">
            <div className="flex-1 px-3 py-2 rounded-xl bg-[#7B61FF]/8 border border-[#7B61FF]/20 text-center">
              <span className="text-xs font-semibold text-[#7B61FF]">Sur invitation</span>
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
            <div className="flex-1 px-3 py-2 rounded-xl bg-[#7B61FF]/8 border border-[#7B61FF]/20 text-center">
              <span className="text-xs font-semibold text-[#7B61FF]">Payant</span>
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
          className="w-full py-2.5 rounded-xl bg-[#7B61FF] text-white text-sm font-semibold text-center"
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
  const modules = [
    { num: 1, title: "Trouver ta niche", duration: "12 min", done: true },
    { num: 2, title: "Créer ton offre", duration: "18 min", done: true },
    { num: 3, title: "Construire ton audience", duration: "24 min", done: false },
    { num: 4, title: "Lancer ta communauté", duration: "15 min", done: false },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <svg className="w-4 h-4 text-[#7B61FF]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>
          <span className="text-xs font-semibold text-gray-700">Formation Premium</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-medium text-[#7B61FF] bg-[#7B61FF]/8 px-2 py-0.5 rounded-full">4 modules</span>
        </div>
      </div>
      {/* Video player */}
      <div className="mx-4 mt-3 aspect-video rounded-xl bg-gray-900 relative overflow-hidden">
        <div className="w-full h-full bg-gradient-to-tr from-[#1e1b4b] via-[#312e81] to-[#7B61FF]/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg backdrop-blur-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
          >
            <svg className="w-4 h-4 text-[#7B61FF] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/60 to-transparent flex items-center gap-2">
          <motion.div
            className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-[#7B61FF] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "35%" }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            />
          </motion.div>
          <span className="text-[9px] text-white/70 font-medium">4:12 / 12:00</span>
        </div>
      </div>

      <div className="p-4 pt-3 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-gray-900">Devenir créateur premium</div>
            <div className="text-[11px] text-gray-400 mt-0.5">Parcours complet · 4 vidéos · 1h09</div>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-medium text-gray-400">2/4</span>
          </div>
        </div>
        <div className="space-y-1.5">
          {modules.map((m, i) => (
            <motion.div
              key={i}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl border ${m.done ? "bg-[#7B61FF]/[0.04] border-[#7B61FF]/15" : "bg-gray-50 border-gray-100"}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${m.done ? "bg-[#7B61FF]" : "bg-gray-200"}`}>
                {m.done ? (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                ) : (
                  <span className="text-[9px] font-bold text-gray-400">{m.num}</span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <span className={`text-xs font-medium ${m.done ? "text-gray-900" : "text-gray-500"}`}>{m.title}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className={`w-3 h-3 ${m.done ? "text-[#7B61FF]" : "text-gray-300"}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
                <span className="text-[10px] text-gray-400">{m.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Step3Mock() {
  const transactions = [
    { name: "Léa M.", type: "Abonnement Pro", amount: "+29 €", avatar: "bg-indigo-400" },
    { name: "Max D.", type: "Formation complète", amount: "+97 €", avatar: "bg-violet-400" },
    { name: "Sofia R.", type: "Événement VIP", amount: "+49 €", avatar: "bg-fuchsia-400" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <svg className="w-4 h-4 text-[#7B61FF]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
          </svg>
          <span className="text-xs font-semibold text-gray-700">Monétisation</span>
        </div>
        <div className="flex items-center gap-1.5">
          <motion.div
            className="w-2 h-2 rounded-full bg-emerald-400"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-[10px] text-emerald-600 font-medium">En direct</span>
        </div>
      </div>
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Revenus du mois", value: "4 820 €", trend: "+32%" },
            { label: "Abonnés actifs", value: "186", trend: "+12%" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 rounded-xl p-3 border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <span className="text-[10px] text-gray-400 font-medium">{stat.label}</span>
              <div className="text-lg font-bold text-gray-900 leading-tight mt-0.5">{stat.value}</div>
              <span className="text-[10px] font-semibold text-emerald-500">{stat.trend}</span>
            </motion.div>
          ))}
        </div>
        <div>
          <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Dernières ventes</span>
          <div className="mt-2 space-y-2">
            {transactions.map((t, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2.5 py-1.5"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <div className={`w-7 h-7 rounded-full ${t.avatar} flex items-center justify-center`}>
                  <span className="text-[9px] font-bold text-white">{t.name[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium text-gray-700 block">{t.name}</span>
                  <span className="text-[10px] text-gray-400">{t.type}</span>
                </div>
                <span className="text-sm font-semibold text-emerald-600">{t.amount}</span>
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
              backgroundColor: isActive ? "#7B61FF" : "#e5e7eb",
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
                  backgroundColor: isActive ? "#7B61FF" : "#e5e7eb",
                  color: isActive ? "#ffffff" : "#9ca3af",
                  scale: isCurrent ? 1.1 : 1,
                  boxShadow: isCurrent ? "0 0 0 4px rgba(123,97,255,0.15), 0 4px 16px -4px rgba(123,97,255,0.3)" : "0 0 0 0px transparent",
                }}
                transition={{ duration: 0.4 }}
              >
                {step.num}
              </motion.div>
              <span className="text-sm font-bold text-[#7B61FF] uppercase tracking-wider">Étape {step.num}</span>
            </div>
            <span className="hidden md:block text-sm font-bold text-[#7B61FF] uppercase tracking-wider mb-4">Étape {step.num}</span>
          </motion.div>

          <motion.h3
            className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight transition-colors duration-500 whitespace-pre-line"
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
      <div className="absolute inset-0 w-[3px] bg-[#7B61FF]/[0.12] mx-auto rounded-full" />
      {/* Animated fill */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] rounded-full origin-top"
        style={{
          scaleY,
          height: "100%",
          background: "linear-gradient(to bottom, #7B61FF, #9B8AFF, #B8A9FF, #7B61FF)",
        }}
      />
      {/* Animated dot */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#7B61FF] shadow-[0_0_16px_rgba(123,97,255,0.6)]"
        style={{ top: dotTop, opacity: dotOpacity }}
      />
    </div>
  );
}

/* ── Steps Data ───────────────────────────── */

const steps = [
  {
    num: "1",
    title: "Crée ta communauté\nautour de ton contenu",
    desc: "Rassemble ton audience et structure ton contenu dans un espace dédié.",
    image: "/step1.png",
  },
  {
    num: "2",
    title: "Publie ta formation\nou du contenu exclusif",
    desc: "Propose des parcours, des vidéos, ou les deux.",
    image: "/step2.png",
  },
  {
    num: "3",
    title: "Développe ta communauté\net tes revenus",
    desc: "Invite ton audience, échange avec tes membres et crée une vraie dynamique.",
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
      {/* Progressive gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F5FF] via-[#F6F2FF] to-[#FAFAFA]" />
      {/* Ambient glows */}
      <div className="absolute top-[10%] left-[-5%] w-[45%] h-[50%] bg-violet-300/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-8%] w-[40%] h-[40%] bg-blue-200/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[10%] w-[35%] h-[35%] bg-[#7B61FF]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 bg-[#7B61FF]/[0.06] text-[#7B61FF] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 border border-[#7B61FF]/10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#7B61FF]" />
            Simple &amp; rapide
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Lance ta communauté en 3 étapes
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-500 font-medium max-w-lg mx-auto leading-relaxed">
            Ton espace privé est prêt en quelques minutes.
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
