export default function ProjectList({ items }) {
  return (
    <div className="flex flex-col gap-4 pr-4">
      {items.map((p, idx) => (
        <div key={idx} className="rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur-md px-4 py-3 text-white/95 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-lg font-semibold">{p.name}</div>
              <div className="text-white/80 text-sm mt-0.5">{p.stack} • {p.time}</div>
            </div>
            {p.links?.length ? (
              <div className="flex gap-3 text-sm text-white/80">
                {p.links.map((l, i) => (
                  <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline/0 hover:underline">
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
          <p className="mt-2 text-white/90 text-sm leading-6">{p.summary}</p>
        </div>
      ))}
    </div>
  );
}
