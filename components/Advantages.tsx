"use client";

import { FadeIn } from "./motion";

const advantages = [
  { icon: "◆" },
  { icon: "▲" },
  { icon: "●" },
];

export default function Advantages() {
  return (
    <section className="py-24 md:py-32 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6 space-y-24">
        {advantages.map((a, i) => (
          <div
            key={i}
            className={`flex flex-col gap-10 items-center ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Text */}
            <FadeIn direction={i % 2 === 0 ? "right" : "left"} className="flex-1 space-y-5">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 text-xl">
                {a.icon}
              </div>
              <div className="h-5 w-48 bg-gray-200 rounded" />
              <div className="space-y-2">
                <div className="h-3 w-full bg-gray-100 rounded" />
                <div className="h-3 w-5/6 bg-gray-100 rounded" />
                <div className="h-3 w-4/6 bg-gray-100 rounded" />
              </div>
              <div className="flex gap-6 pt-2">
                <div>
                  <div className="text-2xl font-bold text-gray-900">000+</div>
                  <div className="text-xs text-gray-400">Placeholder</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">00%</div>
                  <div className="text-xs text-gray-400">Placeholder</div>
                </div>
              </div>
            </FadeIn>

            {/* Visual */}
            <FadeIn direction={i % 2 === 0 ? "left" : "right"} delay={0.2} className="flex-1 w-full">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg shadow-gray-100/50 overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-red-200" />
                  <span className="w-2 h-2 rounded-full bg-yellow-200" />
                  <span className="w-2 h-2 rounded-full bg-green-200" />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex gap-3">
                    <div className="w-1/3 h-20 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl" />
                    <div className="w-1/3 h-20 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl" />
                    <div className="w-1/3 h-20 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl" />
                  </div>
                  <div className="h-24 bg-gray-50 rounded-xl" />
                  <div className="flex gap-2">
                    <div className="h-7 w-20 bg-indigo-50 rounded-lg" />
                    <div className="h-7 w-24 bg-gray-50 rounded-lg" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </section>
  );
}
