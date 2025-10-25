"use client";

import { useEffect, useRef } from "react";

export default function AmbientBlob() {
  const containerRef = useRef(null);
  const dotRef = useRef(null);
  const rafRef = useRef(0);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const initialized = useRef(false);

  useEffect(() => {
    function onMove(e) {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      target.current.x = e.clientX - rect.left;
      target.current.y = e.clientY - rect.top;
      if (!initialized.current) {
        pos.current.x = target.current.x;
        pos.current.y = target.current.y;
        initialized.current = true;
      }
      if (!rafRef.current) loop();
    }
    function loop() {
      const d = dotRef.current;
      if (!d) return;
      // slightly tighter smoothing so it feels closer to the cursor
      pos.current.x += (target.current.x - pos.current.x) * 0.2;
      pos.current.y += (target.current.y - pos.current.y) * 0.2;
      d.style.left = pos.current.x + "px";
      d.style.top = pos.current.y + "px";
      rafRef.current = requestAnimationFrame(loop);
    }
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    };
  }, []);

  return (
    <div ref={containerRef} className="ambient-blob" aria-hidden>
      <div ref={dotRef} className="ambient-blob__dot" />
    </div>
  );
}
