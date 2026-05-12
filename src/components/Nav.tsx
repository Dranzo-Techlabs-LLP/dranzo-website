"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const links = [
  { href: "#products", label: "Products" },
  { href: "#approach", label: "Approach" },
  { href: "#manifesto", label: "Manifesto" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-black/60 border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="#top" className="relative flex items-center group" aria-label="Dranzo home">
          <span className="absolute -inset-2 rounded-lg blur-md bg-[var(--neon)]/20 opacity-0 group-hover:opacity-100 transition" />
          <Image
            src="/brand/dranzo-logo-bold.png"
            alt="Dranzo"
            width={1184}
            height={573}
            priority
            className="relative h-11 w-auto"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative hover:text-white transition-colors py-1"
              >
                <span>{l.label}</span>
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[var(--neon)] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-[var(--neon)] text-black hover:bg-white transition-colors"
          >
            Start a project
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-black/70 group-hover:translate-x-0.5 transition" />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-zinc-200 p-2 rounded hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden border-t border-white/5 bg-black/90 backdrop-blur"
        >
          <ul className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-zinc-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block mt-2 px-4 py-2 rounded-full bg-[var(--neon)] text-black font-medium"
              >
                Start a project
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
