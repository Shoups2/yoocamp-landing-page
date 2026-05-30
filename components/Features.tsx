"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
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
            <div className="flex-1 px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
              <span className="text-[10px] text-gray-400">Abonnement / mois</span>
              <div className="text-sm text-gray-300 mt-1">0,00 €</div>
            </div>
            <div className="flex-1 px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
              <span className="text-[10px] text-gray-400">Accès à vie</span>
              <div className="text-sm text-gray-300 mt-1">0,00 €</div>
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
    { title: "Trouver ta niche", videos: 4, image: "/formations/4eb4147d-30ef-49ac-a22b-9ccbf7190a65.png", free: true },
    { title: "Créer ton offre", videos: 6, image: "/formations/d626614f-ed9b-4761-a8f7-ee9c42010c8c.png", free: true },
    { title: "Construire ton audience", videos: 8, image: "/formations/7e194074-cb06-4f3c-acec-b5b334e9f82f.png", free: false, price: "49€" },
    { title: "Monétiser son expertise", videos: 5, image: "/formations/444f0011-557d-4c97-9fe2-bf4255344c3b.png", free: false, price: "79€" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="px-5 py-3 border-b border-gray-100">
        <span className="text-sm font-bold text-gray-900">Lance ton business : A à Z formation niveau <span className="bg-gradient-to-r from-[#6952E6] to-[#6C4FE0] bg-clip-text text-transparent">Débutant à Expert</span></span>
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
            <div className="relative w-16 h-10 rounded-lg shrink-0 overflow-hidden bg-gray-100">
              <Image
                src={f.image}
                alt={f.title}
                fill
                sizes="64px"
                className="object-cover"
                quality={85}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/15">
                {f.free ? (
                  <div className="w-5 h-5 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[4px] border-l-white border-t-[2.5px] border-t-transparent border-b-[2.5px] border-b-transparent ml-0.5" />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </div>
                )}
              </div>
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
                <img src={a.avatar} alt={a.name} width={24} height={24} loading="lazy" className="w-6 h-6 rounded-full object-cover shrink-0 border border-white shadow-sm" />
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
      <div className="flex absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 flex-col items-center z-20">
        <motion.div
          className="w-9 h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center"
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
            className="w-6 h-6 md:w-8 md:h-8 rounded-full font-bold text-xs md:text-sm flex items-center justify-center"
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
        className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-start md:items-center gap-6 md:gap-16 pl-12 md:pl-0 pt-0 md:pt-0`}
        animate={{ opacity: isActive ? 1 : 0.6 }}
        transition={{ duration: 0.5 }}
      >
        {/* Texte */}
        <div className="order-2 md:order-none flex-1 w-full">
          <motion.span
            className="text-xs sm:text-sm font-bold text-[#6952E6] uppercase tracking-wider block mb-2 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Étape {step.num}
          </motion.span>

          <motion.h3
            className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4 leading-tight transition-colors duration-500 whitespace-pre-wrap"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ color: isActive ? "#111827" : "#9ca3af" }}
          >
            {step.title}
          </motion.h3>

          <motion.p
            className="text-base md:text-xl font-medium leading-relaxed max-w-md transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ color: isActive ? "#6b7280" : "#d1d5db" }}
          >
            {step.desc}
          </motion.p>
        </div>

        {/* Mockup (mobile: en premier, desktop: alterné) */}
        <motion.div
          className="order-1 md:order-none flex-1 w-full"
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
    <div ref={ref} className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 z-10">
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
    title: <>Configure ton espace{"\n"}<span className={gradientClass}>et ton prix</span></>,
    desc: "Personnalise ton espace et choisis un tarif gratuit, mensuel ou annuel.",
    image: "/step1.png",
  },
  {
    num: "2",
    title: <>Mets en ligne{"\n"}<span className={gradientClass}>ton contenu</span></>,
    desc: "Crée tes formations, publie tes vidéos, organise tes événements.",
    image: "/step2.png",
  },
  {
    num: "3",
    title: <>Invite tes{"\n"}<span className={gradientClass}>premiers membres</span></>,
    desc: "Partage le lien de ta page avec ton audience, accueille tes premiers membres et génère du revenu.",
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
  const finaleRef = useRef(null);
  const finaleInView = useInView(finaleRef, { once: true, margin: "-60px" });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.25) setActiveStep(0);
    else if (v < 0.6) setActiveStep(1);
    else setActiveStep(2);
  });

  return (
    <section ref={sectionRef} id="fonctionnalités" className="py-24 md:py-36 relative overflow-hidden">
      {/* Progressive gradient background — du blanc vers le violet */}
      <div className="absolute inset-0 bg-white border-t border-gray-100" />
      {/* Ambient glows */}
      <div className="absolute top-[10%] left-[-5%] w-[45%] h-[50%] bg-violet-300/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-8%] w-[40%] h-[40%] bg-blue-200/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[10%] w-[35%] h-[35%] bg-[#6952E6]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-20 md:mb-28">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#6952E6] mb-5">
            Comment ça marche
          </p>
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

          {/* Nœud final — clôt la timeline */}
          <div ref={finaleRef} className="relative mt-20 md:mt-24 h-11 md:h-14">
            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 z-20">
              <motion.div
                className="relative w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-[#6952E6] to-[#8B75FF]"
                initial={{ scale: 0 }}
                animate={finaleInView ? { scale: 1 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                style={{ boxShadow: "0 0 0 6px rgba(123,97,255,0.12), 0 8px 30px -4px rgba(123,97,255,0.5)" }}
              >
                <span className="absolute inset-0 rounded-full bg-[#6952E6]/40 animate-ping" />
                <svg className="relative w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Carte de lancement — sous la timeline, centrée */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <motion.div
            className="relative overflow-hidden w-full max-w-md rounded-3xl p-7 md:p-9 text-center bg-gradient-to-br from-[#6952E6] to-[#8B75FF]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ boxShadow: "0 24px 70px -18px rgba(105,82,230,0.55)" }}
          >
            <div className="absolute -top-12 -right-10 w-44 h-44 rounded-full bg-white/10 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-14 -left-10 w-44 h-44 rounded-full bg-[#B8A9FF]/25 blur-2xl pointer-events-none" />

            <p className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">Prêt à te lancer ?</p>
            <h3 className="relative mt-2 text-2xl md:text-3xl font-extrabold text-white leading-tight">
              Lance ta communauté aujourd&apos;hui
            </h3>

            <motion.a
              href="https://www.yoocamp.com/register"
              className="relative mt-6 inline-flex items-center gap-2 bg-white text-[#6952E6] font-bold text-base px-7 py-3 rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              Commencer maintenant
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>

            <p className="relative mt-4 text-[12px] text-white/75">Gratuit · Sans carte bancaire · Ta communauté en ligne en 5 minutes</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
