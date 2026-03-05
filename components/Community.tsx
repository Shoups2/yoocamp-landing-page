"use client";

import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem, Float } from "./motion";

const possibilities = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
      </svg>
    ),
    title: "Vidéos exclusives",
    desc: "Publie du contenu premium réservé à tes membres. Feed, playlists, accès protégé.",
    mock: <VideoMock />,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Espace de discussion",
    desc: "Crée un lieu d'échange vivant : chat en temps réel, salons thématiques, interactions directes.",
    mock: <ChatMock />,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a23.54 23.54 0 0 0-2.688 6.671A12.02 12.02 0 0 1 12 2.25c2.717 0 5.261.9 7.288 2.418a23.54 23.54 0 0 0-2.688 6.67m-15.482 0A23.68 23.68 0 0 1 12 9.764c2.585 0 5.084.418 7.412 1.19" />
      </svg>
    ),
    title: "Formations & parcours",
    desc: "Structure des programmes, suis la progression de tes élèves et propose du coaching personnalisé.",
    mock: <CourseMock />,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
    title: "Événements & lives",
    desc: "Organise des masterclasses, sessions de coaching et lives. Tes membres s'inscrivent en un clic.",
    mock: <CalendarMock />,
  },
];

/* ── Mock UI Components ──────────────────── */

function VideoMock() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center relative">
        <div className="w-10 h-10 rounded-full bg-indigo-500/90 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-0.5" />
        </div>
        <div className="absolute bottom-2 left-2 right-2 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-indigo-500 rounded-full" />
        </div>
      </div>
      <div className="p-2.5 space-y-1.5">
        <div className="h-2 w-3/4 bg-gray-200 rounded" />
        <div className="h-1.5 w-1/2 bg-gray-100 rounded" />
      </div>
    </div>
  );
}

function ChatMock() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 space-y-2">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-5 h-5 rounded-full bg-indigo-100" />
        <div className="h-1.5 w-14 bg-gray-200 rounded" />
      </div>
      {[false, true, false].map((isMe, i) => (
        <div key={i} className={`flex ${isMe ? "justify-end" : ""}`}>
          <div className={`px-2.5 py-1.5 rounded-xl max-w-[75%] ${
            isMe ? "bg-indigo-50 rounded-br-sm" : "bg-gray-100 rounded-bl-sm"
          }`}>
            <div className={`h-1.5 rounded ${isMe ? "w-14 bg-indigo-200" : "w-18 bg-gray-200"}`} />
          </div>
        </div>
      ))}
    </div>
  );
}

function CourseMock() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 space-y-2">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded bg-indigo-50 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-sm bg-indigo-200" />
        </div>
        <div className="h-1.5 w-16 bg-gray-200 rounded" />
      </div>
      {[80, 45, 15].map((p, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className={`w-3.5 h-3.5 rounded-full border-2 ${p === 80 ? "border-indigo-500 bg-indigo-100" : "border-gray-200"}`} />
          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-400 rounded-full" style={{ width: `${p}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function CalendarMock() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="h-1.5 w-10 bg-gray-200 rounded" />
        <div className="flex gap-1">
          <div className="w-4 h-4 rounded bg-gray-100" />
          <div className="w-4 h-4 rounded bg-gray-100" />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 14 }, (_, i) => (
          <div key={i} className={`h-5 rounded text-[8px] flex items-center justify-center ${
            i === 4 ? "bg-indigo-500 text-white font-bold" : i === 10 ? "bg-indigo-50 text-indigo-500" : "text-gray-300"
          }`}>
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main Component ──────────────────────── */

export default function Community() {
  return (
    <section id="communauté" className="py-24 md:py-32 bg-gray-50/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Tout-en-un
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Ce que tu vas pouvoir créer
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Un seul espace pour engager, former et monétiser ta communauté.
          </p>
        </FadeIn>

        <Stagger className="grid md:grid-cols-2 gap-6" staggerDelay={0.12}>
          {possibilities.map((item, i) => (
            <StaggerItem key={item.title}>
              <motion.div
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-full"
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(99,102,241,0.08)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Mock preview */}
                <div className="p-4 pb-0">
                  <Float delay={i * 0.4} duration={5} y={4}>
                    {item.mock}
                  </Float>
                </div>

                {/* Text content */}
                <div className="p-5 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
