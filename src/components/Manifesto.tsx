"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const lines = [
  ["We don't take on", "client work."],
  ["We don't sell hours.", "We sell products."],
  ["We don't ship MVPs", "and call them done."],
  ["We build for", "operators."],
];

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section id="manifesto" ref={ref} className="relative py-40 overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute -left-20 top-10 text-[28vw] font-bold tracking-tighter text-white/[0.02] leading-none select-none pointer-events-none"
      >
        manifesto
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--neon)]">
          <span className="inline-block mr-2 align-middle w-6 h-px bg-[var(--neon)]" />
          Manifesto
        </div>

        <div className="mt-12 space-y-8">
          {lines.map(([a, b], i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-5xl lg:text-7xl font-semibold tracking-[-0.025em] leading-[1.05] max-w-5xl"
            >
              <span className="text-zinc-200">{a} </span>
              <span className="neon-text">{b}</span>
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 max-w-2xl text-zinc-400 text-base leading-relaxed"
        >
          Dranzo exists to prove a product company can be born from a service
          mindset's opposite. We pick the verticals, we build the software,
          and we live with it for the long haul.
        </motion.p>
      </div>
    </section>
  );
}
