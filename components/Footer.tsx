"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./motion";

const columns = [
  {
    title: "Découvrir",
    links: [
      { label: "Communauté", href: "#communauté" },
      { label: "Comment ça marche", href: "#fonctionnalités" },
      { label: "Simulateur", href: "#simulateur" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Centre d'aide", href: "https://www.yoocamp.com/aide" },
      { label: "Contact", href: "https://www.yoocamp.com/contact" },
      { label: "Le site Yoocamp", href: "https://www.yoocamp.com" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "CGU & CGV", href: "https://www.yoocamp.com/terms" },
      { label: "Confidentialité", href: "https://www.yoocamp.com/privacy" },
      { label: "Mentions légales", href: "https://www.yoocamp.com/legal" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#" className="inline-block mb-3">
                <img src="/yoocamp 4.svg" alt="Yoocamp" className="h-7" />
              </a>
              <p className="text-sm text-gray-400 leading-relaxed max-w-[220px]">
                La plateforme tout-en-un pour créer, animer et monétiser ta communauté.
              </p>
              <div className="flex gap-3 mt-4">
                {[
                  { label: "X", href: "#" },
                  { label: "In", href: "#" },
                  { label: "Yt", href: "#" },
                  { label: "Ig", href: "#" },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-xs font-bold cursor-pointer"
                    whileHover={{ scale: 1.1, backgroundColor: "#EEF2FF", color: "#6952E6" }}
                  >
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {columns.map((col, i) => (
              <div key={i}>
                <div className="text-sm font-semibold text-gray-900 mb-3">
                  {col.title}
                </div>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <motion.a
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-[#6952E6] transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2026 Yoocamp. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="https://www.yoocamp.com/privacy" className="hover:text-gray-600 transition-colors">Confidentialité</a>
            <a href="https://www.yoocamp.com/terms" className="hover:text-gray-600 transition-colors">CGU & CGV</a>
            <a href="https://www.yoocamp.com/legal" className="hover:text-gray-600 transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
