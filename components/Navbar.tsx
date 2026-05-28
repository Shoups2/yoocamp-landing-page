"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Créer", href: "#communauté" },
  { label: "Comment ça marche", href: "#fonctionnalités" },
  { label: "Comparer", href: "#pourquoi-yoocamp" },
  { label: "Simulateur", href: "#simulateur" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mt-4 max-w-[1104px] mx-4 xl:mx-auto bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-200/40 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <div className="max-w-[1104px] mx-auto px-6 h-14 flex items-center justify-between">

          {/* ── Logo ── */}
          <motion.a
            href="#"
            className="relative z-10 flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src="/yoocamp 4.svg" alt="Yoocamp" className="h-7" />
          </motion.a>

          {/* ── Desktop nav (center) ── */}
          <nav className="hidden md:flex items-center gap-0.5">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="relative px-3.5 py-2 text-sm font-medium text-gray-500 rounded-lg transition-colors hover:text-gray-900"
                whileHover="hover"
              >
                {link.label}
                <motion.span
                  className="absolute inset-0 rounded-lg bg-gray-100/60"
                  variants={{ hover: { opacity: 1 } }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ zIndex: -1 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* ── Desktop actions (right) ── */}
          <div className="hidden md:flex items-center gap-2">
            <motion.a
              href="https://www.yoocamp.com/login"
              className="px-4 py-2 text-sm font-medium text-gray-500 rounded-lg transition-colors hover:text-gray-900"
              whileHover={{ backgroundColor: "rgba(0,0,0,0.03)" }}
            >
              Se connecter
            </motion.a>
            <motion.a
              href="https://www.yoocamp.com/register"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#6952E6] rounded-xl"
              whileHover={{
                scale: 1.03,
                backgroundColor: "#5841C9",
                boxShadow: "0 4px 16px rgba(105,82,230,0.3)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Créer ma communauté
            </motion.a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden relative z-10 w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100/60 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-[18px] h-3 relative">
              <motion.span
                className="absolute left-0 right-0 h-[1.5px] bg-gray-800 rounded-full"
                animate={menuOpen ? { rotate: 45, y: 5.25 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.span
                className="absolute left-0 right-0 top-[5.25px] h-[1.5px] bg-gray-800 rounded-full"
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="absolute left-0 right-0 bottom-0 h-[1.5px] bg-gray-800 rounded-full"
                animate={menuOpen ? { rotate: -45, y: -5.25 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              id="mobile-menu"
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl md:hidden z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col h-full pt-20 px-6 pb-8">
                {/* Links */}
                <nav className="flex flex-col gap-1 flex-1">
                  {links.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      className="py-3 px-3 text-[15px] font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                {/* Actions */}
                <motion.div
                  className="space-y-2.5 pt-6 border-t border-gray-100"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <a
                    href="https://www.yoocamp.com/login"
                    className="block text-center py-3 text-[15px] font-medium text-gray-600 rounded-xl hover:bg-gray-50 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Se connecter
                  </a>
                  <a
                    href="https://www.yoocamp.com/register"
                    className="block text-center py-3 text-[15px] font-semibold text-white bg-[#6952E6] rounded-xl"
                    onClick={() => setMenuOpen(false)}
                  >
                    Créer ma communauté
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
