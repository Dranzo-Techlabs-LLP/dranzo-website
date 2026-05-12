"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const backers = [
  {
    name: "Kerala Startup Mission",
    src: "/brand/backers/kerala-startup-mission.svg",
    href: "https://startupmission.kerala.gov.in/",
  },
  {
    name: "Microsoft for Startups",
    src: "/brand/backers/microsoft-for-startups.svg",
    href: "https://www.microsoft.com/en-us/startups",
  },
  {
    name: "Startup India · DPIIT",
    src: "/brand/backers/dpiit-startup-india.svg",
    href: "https://www.startupindia.gov.in/",
  },
];

export default function BackedBy() {
  return (
    <section className="relative py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-center gap-3">
          <span className="block w-8 h-px bg-[var(--neon)]/40" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--neon)]">
            Backed by
          </span>
          <span className="block w-8 h-px bg-[var(--neon)]/40" />
        </div>

        <h2 className="mt-5 text-center text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
          Recognised by the people <span className="text-zinc-500">who pick winners.</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/8 rounded-3xl overflow-hidden">
          {backers.map((b, i) => (
            <motion.a
              key={b.name}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative flex flex-col items-center justify-center gap-5 py-12 px-8 bg-black/60 hover:bg-black/30 transition-colors"
              aria-label={b.name}
            >
              <div className="relative h-16 w-full max-w-[260px] flex items-center justify-center opacity-90 group-hover:opacity-100 transition">
                <Image
                  src={b.src}
                  alt={b.name}
                  width={360}
                  height={120}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
              <div className="text-xs uppercase tracking-[0.25em] text-zinc-500 group-hover:text-zinc-300 transition">
                {b.name}
              </div>
              <span className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--neon)]/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
