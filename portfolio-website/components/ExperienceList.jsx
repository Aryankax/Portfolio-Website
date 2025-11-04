"use client";

import { useEffect, useRef, useState } from "react";
import BarclaysIcon from "@/components/icons/Barclays";
import InfosysIcon from "@/components/icons/Infosys";
import Reveal from "@/components/Reveal";

const iconMap = {
  barclays: BarclaysIcon,
  infosys: InfosysIcon,
};

export default function ExperienceList({ items }) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 pr-2 sm:pr-4">
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
  const contentRef = useRef(null);
  const [maxH, setMaxH] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    if (open) {
      // measure content height for smooth expand
      setMaxH(contentRef.current.scrollHeight);
    } else {
      setMaxH(0);
    }
  }, [open]);

  // Recalculate on resize while open to keep height accurate
  useEffect(() => {
    function onResize() {
      if (open && contentRef.current) setMaxH(contentRef.current.scrollHeight);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);
  return (
    <div className="rounded-2xl bg-white/14 ring-1 ring-white/20 backdrop-blur-lg px-3 py-3 sm:px-4 sm:py-3 text-white/95 flex items-start gap-3 sm:gap-4 shadow-[0_8px_24px_rgba(0,0,0,0.15)] noise">
      <div className="shrink-0"><Icon /></div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-lg sm:text-xl font-semibold">
          {exp.companyUrl ? (
            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="underline/0 hover:underline">
              {exp.company}
            </a>
          ) : (
            <span>{exp.company}</span>
          )}
          <span className="text-white/75 text-sm sm:text-base leading-snug sm:leading-normal">— {exp.role}</span>
        </div>
        <div className="text-white/80 text-xs sm:text-sm mt-0.5">
          {exp.start} – {exp.end} • {exp.location}
        </div>

        {exp.stack?.length ? (
          <div className="mt-2 flex flex-wrap gap-2 text-[11px] sm:text-xs text-white/85">
            {exp.stack.map((s) => (
              <span key={s} className="px-2 py-0.5 rounded-full bg-white/10 ring-1 ring-white/15">{s}</span>
            ))}
          </div>
        ) : null}

        <div className="mt-2">
          <button onClick={() => setOpen((v) => !v)} className="text-sm sm:text-base text-white/85 hover:text-white transition-colors underline/0 hover:underline">
            {open ? "Hide details" : "Show details"}
          </button>
        </div>
        <div
          className="mt-2 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ maxHeight: maxH, opacity: open ? 1 : 0.96, transform: open ? "translateY(0)" : "translateY(-4px)" }}
        >
          <ul ref={contentRef} className="list-disc pl-4 sm:pl-5 marker:text-white/60 text-[13px] sm:text-sm leading-6 text-white/90 pb-2">
            {exp.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
