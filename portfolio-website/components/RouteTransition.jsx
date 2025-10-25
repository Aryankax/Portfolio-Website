"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function RouteTransition() {
  const pathname = usePathname();
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Trigger animation by toggling the key class
    el.classList.remove("show");
    // Force reflow
    void el.offsetWidth;
    el.classList.add("show");
  }, [pathname]);

  return (
    <div ref={ref} className="route-swipe" aria-hidden />
  );
}
