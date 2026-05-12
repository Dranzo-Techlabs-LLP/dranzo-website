"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-[var(--neon)]/30 bg-[radial-gradient(ellipse_at_top_left,rgba(61,255,110,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(61,255,110,0.10),transparent_50%)] bg-black p-10 lg:p-16"
        >
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-[var(--neon)]/10 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--neon)]">Get in touch</div>
              <h2 className="mt-4 text-4xl lg:text-6xl font-semibold tracking-tight">
                Need a product
                <br />
                <span className="text-zinc-500">we haven't built yet?</span>
              </h2>
              <p className="mt-6 max-w-md text-zinc-400 text-sm leading-relaxed">
                If your industry has a real software gap and you're willing to
                co-design with us, talk to us. We're picky — that's the point.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <a
                href="mailto:info@dranzo.com"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--neon)] px-6 py-4 text-base font-medium text-black hover:bg-white transition-colors"
              >
                <Mail size={18} />
                info@dranzo.com
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
              </a>
              <a
                href="https://wa.me/918903459123"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-[var(--neon)]/40 bg-black/40 px-6 py-3 text-sm text-zinc-100 hover:border-[var(--neon)] hover:text-[var(--neon)] transition"
              >
                <MessageCircle size={16} className="text-[var(--neon)]" />
                WhatsApp +91 89034 59123
                <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
              </a>
              <a
                href="tel:+918903459123"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-[var(--neon)] transition"
              >
                <Phone size={14} />
                +91 89034 59123
              </a>
              <a
                href="https://dranzo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-[var(--neon)] transition"
              >
                dranzo.com
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
