"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const backers = [
  {
    name: "Kerala Startup Mission",
    src: "/brand/backers/kerala-startup-mission.svg",
    href: "https://startupmission.kerala.gov.in/",
    width: 165,
    height: 92,
  },
  {
    name: "Microsoft for Startups",
    src: "/brand/backers/microsoft-for-startups.png",
    href: "https://www.microsoft.com/en-us/startups",
    width: 426,
    height: 397,
  },
  {
    name: "Startup India · DPIIT",
    src: "/brand/backers/dpiit-startup-india.png",
    href: "https://www.startupindia.gov.in/",
    width: 600,
    height: 200,
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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
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
              className="group relative flex flex-col items-center justify-center gap-5 rounded-2xl border border-white/8 bg-white/95 hover:bg-white p-8 transition-colors"
              aria-label={b.name}
            >
              <div className="relative h-20 w-full flex items-center justify-center">
                <Image
                  src={b.src}
                  alt={b.name}
                  width={b.width}
                  height={b.height}
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 group-hover:text-black/70 transition">
                {b.name}
              </div>
              <span className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--neon)] to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
