"use client";

import { useState } from "react";
import BarclaysIcon from "@/components/icons/Barclays";
import InfosysIcon from "@/components/icons/Infosys";
import Reveal from "@/components/Reveal";

const iconMap = {
  barclays: BarclaysIcon,
  infosys: InfosysIcon,
};

export default function ExperienceList({ items }) {
  return (
    <div className="flex flex-col gap-4 pr-4">
      {items.map((exp, idx) => {
        const Icon = iconMap[exp.icon] || (() => null);
        return (
          <Reveal key={idx}>
            <ExperienceCard exp={exp} Icon={Icon} />
          </Reveal>
        );
      })}
    </div>
  );
}

function ExperienceCard({ exp, Icon }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-white/14 ring-1 ring-white/20 backdrop-blur-lg px-4 py-3 text-white/95 flex items-start gap-4 shadow-[0_8px_24px_rgba(0,0,0,0.15)] noise">
      <Icon />
      <div className="flex-1">
        <div className="flex items-center gap-2 text-xl font-semibold">
          {exp.companyUrl ? (
            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="underline/0 hover:underline">
              {exp.company}
            </a>
          ) : (
            <span>{exp.company}</span>
          )}
          <span className="text-white/70 text-base">— {exp.role}</span>
        </div>
        <div className="text-white/80 text-sm mt-0.5">
          {exp.start} – {exp.end} • {exp.location}
        </div>

        {exp.stack?.length ? (
          <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/85">
            {exp.stack.map((s) => (
              <span key={s} className="px-2 py-0.5 rounded-full bg-white/10 ring-1 ring-white/15">{s}</span>
            ))}
          </div>
        ) : null}

        <div className="mt-2">
          <button onClick={() => setOpen((v) => !v)} className="text-sm text-white/85 hover:text-white transition-colors underline/0 hover:underline">
            {open ? "Hide details" : "Show details"}
          </button>
        </div>
        {open && (
          <ul className="mt-2 list-disc pl-5 marker:text-white/60 text-sm leading-6 text-white/90">
            {exp.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
