"use client";

import Link from "next/link";

export default function HomeCta() {
  const facts = [
    { label: "Stack", value: "Fullstack Web Dev • C++" },
    { label: "Location", value: "India / Remote / Open to relocate" },
    { label: "Availability", value: "Open to roles" },
  ];

  return (
    <div className="m-2 flex flex-col gap-8 items-center">
      <div className="flex gap-3">
        <Link href="/resume" className="px-4 py-2 rounded-full bg-white/15 ring-1 ring-white/25 hover:bg-white/20 transition-colors text-white/95 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
          Download Resume
        </Link>
        <Link href="/contact-me" className="px-4 py-2 rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/15 transition-colors text-white/95">
          Contact
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {facts.map((f) => (
          <div key={f.label} className="px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 text-sm text-white/90">
            <span className="text-white/70 mr-1">{f.label}:</span>
            <span>{f.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
