"use client";

import { useEffect, useState } from "react";

export default function ResumeViewer({ src = "/resume.pdf" }) {
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    let canceled = false;
    // Lightweight HEAD check; if blocked, we still try to render iframe
    fetch(src, { method: "HEAD" })
      .then((res) => !canceled && setAvailable(res.ok))
      .catch(() => !canceled && setAvailable(false));
    return () => {
      canceled = true;
    };
  }, [src]);

  return (
    <div className="flex flex-col gap-3 pr-2">
      <div className="flex items-center justify-between">
        <div className="text-white/90 text-sm">
          {available ? "Previewing resume" : "Add resume.pdf to /public to enable preview"}
        </div>
        <a
          href={src}
          download
          className="px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition-colors text-white/95 text-sm"
        >
          Download PDF
        </a>
      </div>
      <div className="rounded-2xl overflow-hidden ring-1 ring-white/15 bg-white/5">
        {/* Use iframe for broad browser support */}
        <iframe
          title="Resume PDF"
          src={src}
          className="w-full h-[420px] bg-black/5"
        />
      </div>
    </div>
  );
}
