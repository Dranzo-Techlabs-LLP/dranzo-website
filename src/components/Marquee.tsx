const items = [
  "OLT MANAGEMENT",
  "WORKFLOW AUTOMATION",
  "PRIVATE CONSULTATION",
  "CUSTOM B2B PRODUCTS",
  "PREMIUM ENGINEERING",
  "BUILT IN-HOUSE",
];

export default function Marquee() {
  const list = [...items, ...items, ...items];
  return (
    <div className="border-y border-white/5 bg-black/40 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-6">
        {list.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex items-center gap-6 px-6 text-sm tracking-[0.35em] text-zinc-400"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--neon)]" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
