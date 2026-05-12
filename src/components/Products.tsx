"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Network, Workflow, MessagesSquare } from "lucide-react";
import type { ReactNode } from "react";

type Product = {
  id: string;
  name: string;
  tag: string;
  tagline: string;
  description: string;
  icon: ReactNode;
  logo: string;
  href: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  span: string;
};

const products: Product[] = [
  {
    id: "mrfiber",
    name: "Mr.Fiber",
    tag: "OLT Management System",
    tagline: "Operate fiber networks like infrastructure, not spreadsheets.",
    description:
      "A unified control plane for ISPs to manage OLTs, ONUs, subscribers, billing and field ops — multi-vendor, multi-site, in real time.",
    icon: <Network size={18} />,
    logo: "/brand/mrfiber.svg",
    href: "https://dranzo.com",
    metrics: [
      { label: "Vendors", value: "Multi" },
      { label: "Provisioning", value: "Real-time" },
      { label: "Stack", value: "On-prem / Cloud" },
    ],
    highlights: [
      "ONU auto-discovery & provisioning",
      "Subscriber lifecycle + billing",
      "Field ops & ticketing",
      "Telemetry & SLA dashboards",
    ],
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: "deskhub",
    name: "DeskHub",
    tag: "Workflow Automation",
    tagline: "The operating system for service businesses.",
    description:
      "Quotes, jobs, technicians, inventory, invoices — wired together so service teams stop living in WhatsApp and spreadsheets.",
    icon: <Workflow size={18} />,
    logo: "/brand/deskhub.svg",
    href: "https://dranzo.com",
    metrics: [
      { label: "Modules", value: "12+" },
      { label: "Roles", value: "Granular" },
      { label: "Built for", value: "Service sector" },
    ],
    highlights: [
      "End-to-end quote → invoice",
      "Technician dispatch & tracking",
      "Inventory & purchase",
      "Role-based dashboards",
    ],
    span: "lg:col-span-2",
  },
  {
    id: "clariva",
    name: "Clariva",
    tag: "Private Consultation",
    tagline: "Professional consultation, kept private.",
    description:
      "A consultation wallet for professionals — secure 1:1 sessions, payments, scheduling and a clean client record without the noise of generic apps.",
    icon: <MessagesSquare size={18} />,
    logo: "/brand/clariva.svg",
    href: "https://clarivahub.com",
    metrics: [
      { label: "Privacy", value: "End-to-end" },
      { label: "Channels", value: "Audio / Video / Chat" },
      { label: "Payments", value: "Built-in" },
    ],
    highlights: [
      "Verified pro profiles",
      "Encrypted private sessions",
      "Wallet & payouts",
      "Booking + reminders",
    ],
    span: "lg:col-span-2",
  },
];

function ProductCard({ p, index }: { p: Product; index: number }) {
  const isFeature = p.span.includes("row-span-2");

  return (
    <motion.a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
      className={`group relative overflow-hidden rounded-3xl border border-white/8 bg-[var(--panel)] hover:border-[var(--neon)]/40 transition-colors p-7 lg:p-9 ${p.span}`}
    >
      {/* hover wash */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_var(--mx,_50%)_var(--my,_50%),rgba(61,255,110,0.16),transparent_55%)]" />

      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-white/10 text-[var(--neon)]">
            {p.icon}
          </span>
          {p.tag}
        </div>
        <ArrowUpRight
          size={20}
          className="text-zinc-500 group-hover:text-[var(--neon)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition"
        />
      </div>

      <div className={`relative mt-${isFeature ? "8" : "6"} flex items-center gap-4`}>
        <div className="relative w-14 h-14 rounded-2xl bg-black/60 border border-white/8 flex items-center justify-center overflow-hidden">
          <Image src={p.logo} alt={`${p.name} logo`} width={48} height={48} className="object-contain" />
        </div>
        <div>
          <div className="text-2xl lg:text-3xl font-semibold tracking-tight">{p.name}</div>
          <div className="text-xs text-zinc-500 mt-0.5">by Dranzo</div>
        </div>
      </div>

      <h3
        className={`relative mt-6 font-medium tracking-tight text-zinc-100 ${
          isFeature ? "text-3xl lg:text-4xl" : "text-xl lg:text-2xl"
        }`}
      >
        {p.tagline}
      </h3>
      <p className={`relative mt-4 text-sm text-zinc-400 leading-relaxed ${isFeature ? "max-w-md" : "max-w-sm"}`}>
        {p.description}
      </p>

      <ul className="relative mt-6 flex flex-wrap gap-2">
        {p.highlights.map((h) => (
          <li
            key={h}
            className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-zinc-300 bg-white/[0.02]"
          >
            {h}
          </li>
        ))}
      </ul>

      <div className="relative mt-7 grid grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/5">
        {p.metrics.map((m) => (
          <div key={m.label} className="p-3 bg-black/40">
            <div className="text-[10px] uppercase tracking-widest text-zinc-500">{m.label}</div>
            <div className="text-sm mt-1 text-zinc-200">{m.value}</div>
          </div>
        ))}
      </div>

      {isFeature && (
        <div className="absolute right-[-60px] bottom-[-60px] w-72 h-72 rounded-full bg-[var(--neon)]/10 blur-3xl pointer-events-none" />
      )}
    </motion.a>
  );
}

export default function Products() {
  return (
    <section id="products" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--neon)]">
              <span className="inline-block mr-2 align-middle w-6 h-px bg-[var(--neon)]" />
              Our products
            </div>
            <h2 className="mt-4 text-4xl lg:text-6xl font-semibold tracking-tight max-w-3xl">
              Three categories.<br />
              <span className="text-zinc-500">One uncompromising standard.</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 text-sm leading-relaxed">
            Each Dranzo product replaces a stack of duct-taped tools. Designed
            for operators, not buyers — picked up in a day, lived in for years.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-4 gap-5 lg:auto-rows-[1fr]">
          {products.map((p, i) => (
            <ProductCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
