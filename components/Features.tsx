"use client";

import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem, ScaleIn } from "./motion";

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

export default function Features() {
  return (
    <section id="fonctionnalités" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#fbfaff]" />
      <div className="absolute top-[-20%] left-[-5%] w-[45%] h-[60%] bg-violet-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[55%] h-[65%] bg-blue-200/20 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Simple & rapide
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Comment ça marche
          </h2>
        </FadeIn>

        <Stagger className="space-y-12" staggerDelay={0.15}>
          {steps.map((step, i) => (
            <StaggerItem key={step.num}>
              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 md:p-10">
                <div
                  className={`flex flex-col ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8 md:gap-12`}
                >
                  {/* Image */}
                  <ScaleIn delay={0.15}>
                    <motion.div
                      className="flex-1 w-full"
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl border border-gray-200 overflow-hidden flex items-center justify-center relative">
                        <div className="absolute top-3 left-3 flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
                        </div>
                        <span className="text-gray-300 text-sm font-medium select-none">
                          Capture d&apos;écran — Étape {step.num}
                        </span>
                      </div>
                    </motion.div>
                  </ScaleIn>

                  {/* Texte */}
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-11 h-11 rounded-full bg-indigo-600 text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
                        {step.num}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-lg leading-relaxed md:ml-[3.75rem]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
