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
  { ic: "💰", label: "Noah", txt: "a acheté Bootcamp Lancement", amt: "+247 €", tone: "mint" },
  { ic: "💰", label: "Manon", txt: "a acheté la formation Marketing", amt: "+97 €", tone: "mint" },
  { ic: "💳", label: "Paul", txt: "a souscrit Premium", amt: "+39 €/mois", tone: "mint" },
  { ic: "🎟️", label: "Camille", txt: "a réservé le mastermind", tone: "sky" },
  { ic: "🎤", label: "Yanis", txt: "s'est inscrit au coaching 1:1", tone: "sky" },
  { ic: "📆", label: "Élodie", txt: "s'est inscrite au live Q&R", tone: "sky" },
  { ic: "👋", label: "Sofia", txt: "a rejoint la communauté", tone: "brand" },
  { ic: "👥", label: "+12 nouveaux membres", txt: "cette semaine", tone: "brand" },
  { ic: "💜", label: "Hugo", txt: "a liké la vidéo Construire ton offre", tone: "rose" },
  { ic: "❤️", label: "Nadège", txt: "a réagi au post de Lucas", tone: "rose" },
  { ic: "🔥", label: "Karim", txt: "a complété la formation", chan: "Trouver ta niche", tone: "sun" },
];

/* ── Lucide-style stroke icons ───────────────────────────────────────── */
const I = {
  laptop: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M2 20h20" />
    </>
  ),
  briefcase: (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>
  ),
  brain: (
    <>
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  palette: (
    <>
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </>
  ),
  trending: (
    <>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </>
  ),
  wallet: (
    <>
      <path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />
      <path d="M3 7h18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3" />
      <circle cx="17" cy="12" r="1" fill="currentColor" />
    </>
  ),
  dumbbell: (
    <>
      <path d="M6.5 6.5 17.5 17.5" />
      <path d="m21 21-1-1" />
      <path d="m3 3 1 1" />
      <path d="m18 22 4-4" />
      <path d="m2 6 4-4" />
      <path d="m3 10 7-7" />
      <path d="m14 21 7-7" />
    </>
  ),
  graduation: (
    <>
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </>
  ),
  coffee: (
    <>
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" x2="6" y1="2" y2="4" />
      <line x1="10" x2="10" y1="2" y2="4" />
      <line x1="14" x2="14" y1="2" y2="4" />
    </>
  ),
  megaphone: (
    <>
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </>
  ),
  sparkles: (
    <>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </>
  ),
  book: (
    <>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </>
  ),
  layers: (
    <>
      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </>
  ),
} as const;

const communities: { name: string; members: string; tone: Tone; icon: keyof typeof I }[] = [
  { name: "La Tribu Tech",       members: "2 480", tone: "sky",   icon: "laptop" },
  { name: "Solopreneurs FR",     members: "3 120", tone: "brand", icon: "briefcase" },
  { name: "Mindset Club",        members: "1 840", tone: "rose",  icon: "brain" },
  { name: "Génération Focus",    members: "960",   tone: "sun",   icon: "target" },
  { name: "Studio Créateurs",    members: "1 270", tone: "brand", icon: "palette" },
  { name: "Growth Lab",          members: "4 200", tone: "mint",  icon: "trending" },
  { name: "Liberté Financière",  members: "5 680", tone: "sun",   icon: "wallet" },
  { name: "Fit Performance",     members: "2 100", tone: "rose",  icon: "dumbbell" },
  { name: "L'École des Indés",   members: "3 420", tone: "brand", icon: "graduation" },
  { name: "Code & Café",         members: "890",   tone: "sky",   icon: "coffee" },
  { name: "Marketing Mafia",     members: "2 970", tone: "rose",  icon: "megaphone" },
  { name: "Le Cercle Créatif",   members: "1 450", tone: "sun",   icon: "sparkles" },
  { name: "Atelier Notion",      members: "780",   tone: "mint",  icon: "book" },
  { name: "Bâtisseurs SaaS",     members: "1 920", tone: "brand", icon: "layers" },
];

const pillars: { tone: Tone; title: string }[] = [
  { tone: "brand", title: "Communauté privée" },
  { tone: "rose", title: "Formations & vidéos" },
  { tone: "sky", title: "Paiements intégrés" },
  { tone: "mint", title: "Gratuit pour démarrer" },
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
        <motion.div {...fadeIn(0)} className="flex items-start justify-center gap-2 text-center">
          <span className="relative flex w-2 h-2 shrink-0 mt-[5px] sm:mt-1.5">
            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
          </span>
          <p className="text-[11px] sm:text-[12.5px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-gray-500 text-center">
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
              <span className="font-bold text-[14px] sm:text-[16px] md:text-[17px] text-gray-900 leading-tight tracking-tight" style={{ fontFamily: "var(--font-bricolage), sans-serif" }}>
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
      className="flex items-center gap-2.5 mx-2 sm:mx-3 shrink-0 px-3 sm:px-3.5 py-2 rounded-full bg-white border"
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
      className="flex items-center gap-2.5 mx-2 sm:mx-3 shrink-0 px-3 py-2 rounded-full bg-white border hover:-translate-y-0.5 transition-transform"
      style={{
        borderColor: `color-mix(in srgb, ${accent} 16%, transparent)`,
        boxShadow: "0 1px 2px rgba(15,12,40,0.04)",
      }}
    >
      <span
        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
        style={{
          color: accent,
          background: `color-mix(in srgb, ${accent} 12%, white)`,
          border: `1px solid color-mix(in srgb, ${accent} 20%, transparent)`,
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {I[c.icon]}
        </svg>
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
