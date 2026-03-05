"use client";

import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "./motion";

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
    <section id="fonctionnalités" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Simple & rapide
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Comment ça marche
          </h2>
        </FadeIn>

        <Stagger className="space-y-20" staggerDelay={0.15}>
          {steps.map((step, i) => (
            <StaggerItem key={step.num}>
              <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-16`}>
                {/* Image placeholder */}
                <motion.div
                  className="flex-1 w-full"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex items-center justify-center relative">
                    {/* Replace with <img src={step.image} /> when ready */}
                    <div className="text-gray-300 text-sm font-medium">Capture d&apos;écran</div>
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-200" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-200" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-200" />
                    </div>
                  </div>
                </motion.div>

                {/* Text */}
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded-full bg-indigo-600 text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
                      {step.num}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-500 text-lg leading-relaxed ml-15">
                    {step.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
