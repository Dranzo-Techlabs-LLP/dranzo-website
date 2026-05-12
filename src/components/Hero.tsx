"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const word = {
  hidden: { y: "110%", opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.15 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const line1 = ["We", "build", "B2B"];
  const line2 = ["products", "—", "not", "websites."];

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Background grid + radial glow */}
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(61,255,110,0.20),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(61,255,110,0.10),transparent_50%)]" />

      {/* 3D layer */}
      <div className="absolute inset-0 -z-0">
        <HeroScene />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-32 lg:pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300 backdrop-blur"
        >
          <Sparkles size={12} className="text-[var(--neon)]" />
          <span>Custom B2B product studio · 2026</span>
        </motion.div>

        <h1 className="mt-6 font-semibold tracking-[-0.03em] text-[clamp(2.5rem,8vw,7rem)] leading-[0.95]">
          <span className="block overflow-hidden">
            <span className="flex flex-wrap gap-x-[0.25em]">
              {line1.map((w, i) => (
                <motion.span
                  key={w + i}
                  custom={i}
                  variants={word}
                  initial="hidden"
                  animate="show"
                  className="inline-block"
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="flex flex-wrap gap-x-[0.25em]">
              {line2.map((w, i) => (
                <motion.span
                  key={w + i}
                  custom={i + line1.length}
                  variants={word}
                  initial="hidden"
                  animate="show"
                  className={
                    "inline-block " +
                    (w === "—" ? "text-[var(--neon)]" : "")
                  }
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8 max-w-xl text-base lg:text-lg text-zinc-400 leading-relaxed"
        >
          Dranzo is a product company. We craft premium software for fiber
          networks, service businesses and private consultations — sold as
          finished products, not custom dev hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--neon)] px-5 py-3 text-sm font-medium text-black hover:bg-white transition-colors"
          >
            See our products
            <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
          </a>
          <a
            href="#manifesto"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-zinc-200 hover:border-[var(--neon)] hover:text-[var(--neon)] transition"
          >
            Why we exist
          </a>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden backdrop-blur"
        >
          {[
            { k: "3", v: "shipped products" },
            { k: "0", v: "agency services" },
            { k: "100%", v: "in-house engineering" },
            { k: "B2B", v: "focus, no exceptions" },
          ].map((s) => (
            <div key={s.v} className="p-5 bg-black/40">
              <div className="text-2xl font-semibold neon-text">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-zinc-500">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 text-[10px] uppercase tracking-[0.3em]">
        <span>Scroll</span>
        <span className="block w-px h-10 bg-gradient-to-b from-[var(--neon)] to-transparent neon-pulse" />
      </div>
    </section>
  );
}
