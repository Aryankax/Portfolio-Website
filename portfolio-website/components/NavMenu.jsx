"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

const items = [
  { href: "/about-me", label: "About me" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: "/contact-me", label: "Contact me" },
];

export default function NavMenu() {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const linkRefs = useRef([]);
  const containerRef = useRef(null);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const [indicatorHeight, setIndicatorHeight] = useState(0);

  const activeIndex = useMemo(
    () => Math.max(0, items.findIndex((i) => i.href === pathname)),
    [pathname]
  );

  useEffect(() => {
    const el = linkRefs.current[activeIndex];
    const container = containerRef.current;
    if (!el || !container) return;
    const elRect = el.getBoundingClientRect();
    const cRect = container.getBoundingClientRect();
    setIndicatorTop(elRect.top - cRect.top);
    setIndicatorHeight(elRect.height);
  }, [activeIndex, pathname]);

  function onKeyDown(e) {
    const key = e.key;
    if (key !== "ArrowDown" && key !== "ArrowUp" && key !== "Enter") return;
    e.preventDefault();
    let idx = activeIndex;
    if (key === "ArrowDown") idx = Math.min(items.length - 1, activeIndex + 1);
    if (key === "ArrowUp") idx = Math.max(0, activeIndex - 1);
    if (key === "Enter") {
      router.push(items[activeIndex].href);
      return;
    }
    linkRefs.current[idx]?.focus?.();
    router.push(items[idx].href);
  }

  function spawnRipple(e) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    el.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }

  return (
    <nav
      ref={containerRef}
      className="relative mt-4 flex flex-col gap-4 text-white/90 select-none"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {/* Sliding liquid glass highlight */}
      <div
        className="pointer-events-none absolute left-0 w-full will-change-transform transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ top: indicatorTop, height: indicatorHeight }}
      >
        <div className="mx-0 rounded-xl bg-white/14 backdrop-blur-xl ring-1 ring-white/20 shadow-[0_10px_28px_rgba(0,0,0,0.18)]" style={{ height: "100%" }} />
      </div>

      {items.map((item, idx) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            ref={(el) => (linkRefs.current[idx] = el)}
            className={[
              "group block rounded-xl overflow-visible ripple-container",
              "px-4 py-3 mb-1 last:mb-0",
              // motion
              active ? "" : "transition-transform duration-200 ease-out transform-gpu hover:scale-105",
            ].join(" ")}
            onMouseDown={spawnRipple}
          >
            <div className="relative z-[1] flex h-10 items-center justify-between">
              <span className="text-white font-medium tracking-wide">
                {item.label}
              </span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
