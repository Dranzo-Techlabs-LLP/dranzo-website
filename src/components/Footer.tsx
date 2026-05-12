import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/60 mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <Image
              src="/brand/dranzo-logo-bold.png"
              alt="Dranzo"
              width={1184}
              height={573}
              className="h-14 w-auto"
            />
            <p className="mt-4 text-sm text-zinc-500 max-w-sm leading-relaxed">
              We build premium B2B products. No services, no agency hours —
              just software that gets used every day.
            </p>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Products</div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li><a href="https://dranzo.com" className="hover:text-[var(--neon)]">Mr.Fiber</a></li>
              <li><a href="https://dranzo.com" className="hover:text-[var(--neon)]">DeskHub</a></li>
              <li><a href="https://clarivahub.com" className="hover:text-[var(--neon)]">Clariva</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Company</div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li><Link href="#approach" className="hover:text-[var(--neon)]">Approach</Link></li>
              <li><Link href="#manifesto" className="hover:text-[var(--neon)]">Manifesto</Link></li>
              <li><a href="mailto:info@dranzo.com" className="hover:text-[var(--neon)]">Contact</a></li>
              <li><a href="https://wa.me/918903459123" className="hover:text-[var(--neon)]">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} Dranzo. Built in-house.</span>
          <span className="font-mono">
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--neon)] mr-2 align-middle neon-pulse" />
            Systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
