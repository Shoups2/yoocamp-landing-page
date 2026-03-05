"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Communauté", "Fonctionnalités", "Processus", "Créateurs"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-2xl font-extrabold tracking-tight text-gray-900"
          whileHover={{ scale: 1.03 }}
        >
          <span className="text-indigo-600">●</span> placeholder
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              whileHover="hover"
            >
              {link}
              <motion.span
                className="absolute bottom-0 left-1/2 h-0.5 bg-indigo-600 rounded-full"
                variants={{
                  hover: { width: "50%", x: "-50%", opacity: 1 },
                }}
                initial={{ width: 0, x: "-50%", opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
          <motion.a
            href="#"
            className="ml-4 bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold"
            whileHover={{ scale: 1.05, backgroundColor: "#4338ca" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Placeholder CTA
          </motion.a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <motion.span
            className="absolute h-0.5 w-5 bg-gray-900 rounded-full"
            animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="absolute h-0.5 w-5 bg-gray-900 rounded-full"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.1 }}
          />
          <motion.span
            className="absolute h-0.5 w-5 bg-gray-900 rounded-full"
            animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="py-3 text-gray-600 font-medium hover:text-gray-900 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                href="#"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.05 }}
                className="mt-2 bg-gray-900 text-white text-center py-3 rounded-xl font-semibold"
              >
                Placeholder CTA
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
