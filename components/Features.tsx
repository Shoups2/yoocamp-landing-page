"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { FadeIn } from "./motion";

/* ── Step Mockups ─────────────────────────── */

function Step1Mock() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      {/* Top bar */}
      <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7B61FF] to-[#9B8AFF] flex items-center justify-center">
            <span className="text-[9px] font-bold text-white">Y</span>
          </div>
          <span className="text-xs font-semibold text-gray-700">Créer ma communauté</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#7B61FF]/40" />
          <span className="text-[10px] text-gray-400">Étape 1/3</span>
        </div>
      </div>
      {/* Content */}
      <div className="p-5 space-y-4">
        <div className="space-y-2">
          <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Nom de ta communauté</label>
          <div className="px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 flex items-center">
            <span className="text-sm text-gray-800 font-medium">Yoo Academy</span>
            <motion.div
              className="w-[2px] h-4 bg-[#7B61FF] ml-0.5 rounded-full"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Description</label>
          <div className="px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 h-16">
            <span className="text-sm text-gray-400">Décris ton espace en quelques mots...</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="space-y-2 flex-1">
            <label className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Couleur</label>
            <div className="flex gap-2">
              {["bg-[#7B61FF]", "bg-blue-500", "bg-emerald-500", "bg-amber-500", "bg-rose-500"].map((c, i) => (
                <motion.div
                  key={i}
                  className={`w-7 h-7 rounded-full ${c} ${i === 0 ? "ring-2 ring-offset-2 ring-[#7B61FF]" : ""} cursor-pointer`}
                  whileHover={{ scale: 1.15 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.06, type: "spring", stiffness: 300 }}
                />
              ))}
            </div>
          </div>
        </div>
        <motion.div
          className="w-full py-2.5 rounded-xl bg-[#7B61FF] text-white text-sm font-semibold text-center mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Continuer
        </motion.div>
      </div>
    </div>
  );
}

function Step2Mock() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      {/* Top bar */}
      <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <svg className="w-4 h-4 text-[#7B61FF]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span className="text-xs font-semibold text-gray-700">Nouveau contenu</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-medium text-[#7B61FF] bg-[#7B61FF]/8 px-2 py-0.5 rounded-full">Brouillon</span>
        </div>
      </div>
      {/* Video preview */}
      <div className="mx-5 mt-4 aspect-video rounded-xl bg-gradient-to-br from-[#7B61FF] via-[#9B8AFF] to-[#6C4FE0] relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-15%] w-[60%] h-[80%] bg-white/10 rounded-full blur-[30px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center border border-white/30">
            <div className="w-0 h-0 border-l-[7px] border-l-white border-t-[4.5px] border-t-transparent border-b-[4.5px] border-b-transparent ml-0.5" />
          </div>
        </div>
        <div className="absolute bottom-2 left-3 right-3">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white/70 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "42%" }}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
      {/* Meta */}
      <div className="p-5 space-y-3">
        <div className="space-y-1.5">
          <div className="text-sm font-semibold text-gray-900">Construire une offre irrésistible</div>
          <div className="text-[11px] text-gray-400">Module 3 · Formation Premium</div>
        </div>
        <div className="flex items-center gap-2">
          {["Vidéo", "Formation", "Premium"].map((tag, i) => (
            <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#7B61FF]/8 text-[#7B61FF]">
              {tag}
            </span>
          ))}
        </div>
        <motion.div
          className="w-full py-2.5 rounded-xl bg-[#7B61FF] text-white text-sm font-semibold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Publier
        </motion.div>
      </div>
    </div>
  );
}

function Step3Mock() {
  const members = [
    { name: "Léa", avatar: "bg-indigo-400" },
    { name: "Max", avatar: "bg-violet-400" },
    { name: "Sofia", avatar: "bg-fuchsia-400" },
    { name: "Hugo", avatar: "bg-blue-400" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      {/* Top bar */}
      <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-semibold text-gray-700">Tableau de bord</span>
        </div>
        <div className="flex items-center gap-1.5">
          <motion.div
            className="w-2 h-2 rounded-full bg-green-400"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-[10px] text-gray-400">42 en ligne</span>
        </div>
      </div>
      {/* Stats */}
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Membres", value: "1 247", trend: "+18%" },
            { label: "Revenus", value: "8 420 €", trend: "+24%" },
            { label: "Événements", value: "12", trend: "+3" },
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
        {/* Members */}
        <div>
          <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Membres actifs</span>
          <div className="mt-2 space-y-2">
            {members.map((m, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2.5 py-1.5"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <div className={`w-7 h-7 rounded-full ${m.avatar} flex items-center justify-center`}>
                  <span className="text-[9px] font-bold text-white">{m.name[0]}</span>
                </div>
                <span className="text-sm font-medium text-gray-700">{m.name}</span>
                <div className="ml-auto flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-[10px] text-gray-400">en ligne</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Step Row ─────────────────────────────── */

function StepRow({ step, index }: { step: typeof steps[number]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isReversed = index % 2 !== 0;
  const mocks = [<Step1Mock key="1" />, <Step2Mock key="2" />, <Step3Mock key="3" />];

  return (
    <div className="relative">
      {/* Timeline node */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 flex-col items-center z-20">
        <motion.div
          className="w-12 h-12 rounded-full bg-white border-2 border-[#7B61FF]/20 flex items-center justify-center shadow-[0_4px_20px_-4px_rgba(123,97,255,0.15)]"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 300 }}
        >
          <div className="w-8 h-8 rounded-full bg-[#7B61FF] text-white font-bold text-sm flex items-center justify-center">
            {step.num}
          </div>
        </motion.div>
      </div>

      <div
        ref={ref}
        className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-16 pt-16 md:pt-0`}
      >
        {/* Texte */}
        <div className="flex-1 w-full">
          {/* Label "Étape X" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Mobile step badge */}
            <div className="flex md:hidden items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#7B61FF] text-white font-bold text-base flex items-center justify-center shrink-0 shadow-lg shadow-[#7B61FF]/20">
                {step.num}
              </div>
              <span className="text-xs font-semibold text-[#7B61FF] uppercase tracking-wider">Étape {step.num}</span>
            </div>
            {/* Desktop label */}
            <span className="hidden md:block text-xs font-semibold text-[#7B61FF] uppercase tracking-wider mb-4">Étape {step.num}</span>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {step.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {step.desc}
          </motion.p>
        </div>

        {/* Mockup */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
        >
          <div className="relative">
            {/* Halo */}
            <div
              className="absolute -inset-4 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(123,97,255,0.08) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10 drop-shadow-[0_8px_32px_rgba(123,97,255,0.10)]">
              {mocks[index]}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ── Timeline connector ───────────────────── */


/* ── Timeline connector ───────────────────── */

function TimelineLine() {
  const ref = useRef(null);
  const [completed, setCompleted] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v >= 0.9 && !completed) setCompleted(true);
  });

  const scaleY = useTransform(scrollYProgress, [0, 0.95], [0, 1]);
  const dotTop = useTransform(scrollYProgress, [0, 0.95], ["0%", "100%"]);
  const dotOpacity = useTransform(scrollYProgress, [0, 0.85, 0.95], [1, 1, 0]);

  return (
    <div ref={ref} className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 z-10">
      {/* Background line */}
      <div className="absolute inset-0 w-[2px] bg-[#7B61FF]/[0.08] mx-auto rounded-full" />
      {/* Animated fill — locks at 100% once completed */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] rounded-full origin-top"
        style={{
          scaleY: completed ? 1 : scaleY,
          height: "100%",
          background: "linear-gradient(to bottom, #7B61FF, #9B8AFF, #7B61FF)",
        }}
      />
      {/* Animated dot — hidden once completed */}
      {!completed && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#7B61FF] shadow-[0_0_12px_rgba(123,97,255,0.5)]"
          style={{ top: dotTop, opacity: dotOpacity }}
        />
      )}
    </div>
  );
}

/* ── Steps Data ───────────────────────────── */

const steps = [
  {
    num: "1",
    title: "Crée ton espace",
    desc: "Configure ta plateforme et prépare ta communauté.",
    image: "/step1.png",
  },
  {
    num: "2",
    title: "Publie ton contenu",
    desc: "Partage tes vidéos, formations et contenus exclusifs.",
    image: "/step2.png",
  },
  {
    num: "3",
    title: "Fais grandir ta communauté",
    desc: "Engage tes membres, organise des événements et développe ton audience.",
    image: "/step3.png",
  },
];

/* ── Main Component ───────────────────────── */

export default function Features() {
  return (
    <section id="fonctionnalités" className="py-24 md:py-36 relative overflow-hidden">
      {/* Progressive gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8F6FF] to-[#F0ECFF]" />
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
            Comment ça marche
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-lg mx-auto leading-relaxed">
            Crée ta communauté et lance ton activité en quelques minutes.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Vertical timeline */}
          <TimelineLine />

          <div className="space-y-20 md:space-y-32">
            {steps.map((step, i) => (
              <StepRow key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
