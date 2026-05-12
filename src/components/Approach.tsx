"use client";

import { motion } from "framer-motion";
import { Boxes, Compass, Layers, Rocket } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: <Compass size={18} />,
    title: "We pick the problem",
    body:
      "Not every industry needs another SaaS. We pick narrow B2B verticals where the current tools are spreadsheets, WhatsApp, or 15-year-old desktop software.",
  },
  {
    n: "02",
    icon: <Layers size={18} />,
    title: "We design the product",
    body:
      "Operators co-design with us from day one — not stakeholders, not buyers. Every screen is built around the person clicking it 100 times a day.",
  },
  {
    n: "03",
    icon: <Boxes size={18} />,
    title: "We build it as a product",
    body:
      "No bespoke forks per customer. One product, configured. Every improvement compounds across every customer instantly.",
  },
  {
    n: "04",
    icon: <Rocket size={18} />,
    title: "We ship & stay",
    body:
      "We don't deliver and disappear. Dranzo owns the roadmap, the uptime and the support — the way real product companies do.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="relative py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(61,255,110,0.06),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--neon)]">
          <span className="inline-block mr-2 align-middle w-6 h-px bg-[var(--neon)]" />
          How we work
        </div>
        <h2 className="mt-4 text-4xl lg:text-6xl font-semibold tracking-tight max-w-3xl">
          Product company,
          <br />
          <span className="text-zinc-500">not an agency.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative rounded-2xl border border-white/8 bg-[var(--panel)] p-6 hover:border-[var(--neon)]/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-500">{s.n}</span>
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-[var(--neon)]">
                  {s.icon}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-medium tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{s.body}</p>
              <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--neon)]/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
