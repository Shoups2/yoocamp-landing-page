"use client";

import { motion } from "framer-motion";

const ACCENT = {
  brand: "#7B61FF",
  rose: "#FF5C8A",
  sky: "#3D9DFF",
  mint: "#2DCFA8",
  sun: "#FFB627",
} as const;

type Tone = keyof typeof ACCENT;

const events: { ic: string; label: string; txt: string; chan?: string; amt?: string; tone: Tone }[] = [
  { ic: "🎥", label: "Lucas", txt: "a publié une nouvelle vidéo", chan: "Trouver ta niche", tone: "rose" },
  { ic: "🎓", label: "Sarah", txt: "a lancé une formation", chan: "Pricing & positionnement", tone: "brand" },
  { ic: "📅", label: "Marc", txt: "a programmé un mastermind", chan: "Mer · 20h", tone: "sky" },
  { ic: "📣", label: "Inès", txt: "a annoncé un nouveau coaching", tone: "rose" },
  { ic: "💰", label: "Léa", txt: "a acheté Coaching VIP", amt: "+149 €", tone: "mint" },
  { ic: "💰", label: "Tom", txt: "a acheté Masterclass IA", amt: "+79 €", tone: "mint" },
  { ic: "💰", label: "Mira", txt: "a acheté la vidéo Lancer son offre", amt: "+19 €", tone: "mint" },
  { ic: "💳", label: "Paul", txt: "a souscrit Premium", amt: "+39 €/mois", tone: "mint" },
  { ic: "🎟️", label: "Camille", txt: "a réservé le mastermind", tone: "sky" },
  { ic: "🎤", label: "Yanis", txt: "s'est inscrit au coaching 1:1", tone: "sky" },
  { ic: "📆", label: "Élodie", txt: "s'est inscrite au live Q&R", tone: "sky" },
  { ic: "👋", label: "Sofia", txt: "a rejoint la communauté", tone: "brand" },
  { ic: "👥", label: "+12 nouveaux membres", txt: "cette semaine", tone: "brand" },
  { ic: "💜", label: "Hugo", txt: "a liké la vidéo Construire ton offre", tone: "rose" },
  { ic: "❤️", label: "Nadège", txt: "a réagi au post de Lucas", tone: "rose" },
  { ic: "🔥", label: "Karim", txt: "a complété la formation", chan: "Trouver ta niche", tone: "sun" },
  { ic: "⭐", label: "Anaïs", txt: "a noté Masterclass IA 5/5", tone: "sun" },
  { ic: "🎉", label: "Tristan", txt: "a fêté sa 1ère vente", tone: "rose" },
];

const communities: { name: string; members: string; tone: Tone; glyph: string }[] = [
  { name: "La Tribu Tech", members: "2 480", tone: "sky", glyph: "⟨/⟩" },
  { name: "Solopreneurs FR", members: "3 120", tone: "brand", glyph: "◆" },
  { name: "Mindset Club", members: "1 840", tone: "rose", glyph: "✦" },
  { name: "Génération Focus", members: "960", tone: "sun", glyph: "◯" },
  { name: "Studio Créateurs", members: "1 270", tone: "brand", glyph: "◉" },
  { name: "Growth Lab", members: "4 200", tone: "mint", glyph: "↗" },
  { name: "Liberté Financière", members: "5 680", tone: "sun", glyph: "€" },
  { name: "Fit Performance", members: "2 100", tone: "rose", glyph: "▲" },
  { name: "L'École des Indés", members: "3 420", tone: "brand", glyph: "◇" },
  { name: "Code & Café", members: "890", tone: "sky", glyph: "☕" },
  { name: "Marketing Mafia", members: "2 970", tone: "rose", glyph: "◢" },
  { name: "Le Cercle Créatif", members: "1 450", tone: "sun", glyph: "◐" },
  { name: "Atelier Notion", members: "780", tone: "mint", glyph: "⌘" },
  { name: "Bâtisseurs SaaS", members: "1 920", tone: "brand", glyph: "▣" },
];

const pillars: { tone: Tone; title: string }[] = [
  { tone: "rose", title: "Formations & vidéos" },
  { tone: "brand", title: "Communauté privée" },
  { tone: "mint", title: "Gratuit pour démarrer" },
  { tone: "sky", title: "Paiements intégrés" },
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function LiveActivity() {
  return (
    <section className="relative py-14 md:py-20 border-y border-gray-100 overflow-hidden bg-white">
      <style jsx>{`
        @keyframes liveactivity-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .liveactivity-marquee {
          animation: liveactivity-marquee 45s linear infinite;
          width: max-content;
        }
        .liveactivity-marquee-reverse {
          animation-direction: reverse;
          animation-duration: 55s;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-5 md:px-6">
        {/* Top label */}
        <motion.div {...fadeIn(0)} className="flex items-center justify-center gap-2">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
          </span>
          <p className="text-[12.5px] font-semibold uppercase tracking-[0.18em] text-gray-500">
            Ce qui peut se passer dans ta communauté Yoocamp
          </p>
        </motion.div>

        {/* Activity ticker */}
        <motion.div
          {...fadeIn(0.1)}
          className="mt-8 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        >
          <div className="flex liveactivity-marquee">
            {[...events, ...events].map((e, i) => (
              <ActivityTile key={`e-${i}`} e={e} />
            ))}
          </div>
        </motion.div>

        {/* Communities marquee */}
        <motion.div
          {...fadeIn(0.16)}
          className="mt-3 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        >
          <div className="flex liveactivity-marquee liveactivity-marquee-reverse">
            {[...communities, ...communities].map((c, i) => (
              <CommunityTile key={`c-${i}`} c={c} />
            ))}
          </div>
        </motion.div>

        {/* Pillars */}
        <motion.div
          {...fadeIn(0.22)}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-5 max-w-4xl mx-auto"
        >
          {pillars.map((p) => (
            <div key={p.title} className="flex items-center justify-center text-center px-2">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full mr-2.5"
                style={{ background: ACCENT[p.tone] }}
              />
              <span className="font-bold text-[16px] md:text-[17px] text-gray-900 leading-tight tracking-tight" style={{ fontFamily: "var(--font-bricolage), sans-serif" }}>
                {p.title}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ActivityTile({ e }: { e: (typeof events)[number] }) {
  const accent = ACCENT[e.tone];
  return (
    <div
      className="flex items-center gap-2.5 mx-3 shrink-0 px-3.5 py-2 rounded-full bg-white border"
      style={{
        borderColor: `color-mix(in srgb, ${accent} 16%, transparent)`,
        boxShadow: "0 1px 2px rgba(15,12,40,0.04)",
      }}
    >
      <span className="text-base leading-none">{e.ic}</span>
      <span className="text-[13.5px] text-gray-700 whitespace-nowrap">
        <span className="font-semibold text-gray-900">{e.label}</span>{" "}
        <span className="text-gray-500">{e.txt}</span>
        {e.chan && (
          <span className="font-semibold ml-1" style={{ color: accent }}>
            {e.chan}
          </span>
        )}
      </span>
      {e.amt && (
        <span
          className="text-[11.5px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
          style={{
            color: accent,
            background: `color-mix(in srgb, ${accent} 12%, white)`,
          }}
        >
          {e.amt}
        </span>
      )}
    </div>
  );
}

function CommunityTile({ c }: { c: (typeof communities)[number] }) {
  const accent = ACCENT[c.tone];
  return (
    <div
      className="flex items-center gap-2.5 mx-3 shrink-0 px-3 py-2 rounded-full bg-white border hover:-translate-y-0.5 transition-transform"
      style={{
        borderColor: `color-mix(in srgb, ${accent} 16%, transparent)`,
        boxShadow: "0 1px 2px rgba(15,12,40,0.04)",
      }}
    >
      <span
        className="w-7 h-7 rounded-lg flex items-center justify-center text-[14px] font-bold shrink-0"
        style={{
          color: accent,
          background: `color-mix(in srgb, ${accent} 12%, white)`,
          border: `1px solid color-mix(in srgb, ${accent} 20%, transparent)`,
        }}
      >
        {c.glyph}
      </span>
      <span className="font-bold text-[14.5px] text-gray-800 tracking-tight whitespace-nowrap" style={{ fontFamily: "var(--font-bricolage), sans-serif" }}>
        {c.name}
      </span>
      <span className="text-[11px] font-semibold text-gray-500 pl-2.5 ml-0.5 border-l border-gray-200 whitespace-nowrap">
        {c.members} membres
      </span>
    </div>
  );
}
