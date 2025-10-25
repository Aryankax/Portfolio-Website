"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/about-me", label: "About me" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: "/contact-me", label: "Contact me" },
];

export default function NavMenu() {
  const pathname = usePathname() || "/";

  return (
    <nav className="mt-4 flex flex-col gap-4 text-white/90 select-none">
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={[
              // base layout
              "group block rounded-xl overflow-hidden",
              "px-4 py-3",
              // motion
              "transition-transform duration-200 ease-out will-change-transform origin-left transform-gpu",
              // active vs inactive styles
              active
                ? "bg-white/15 ring-1 ring-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                : "",
              // hover: scale only (no bg), limited to avoid bleeding
              "hover:scale-105",
            ].join(" ")}
          >
            <div className="flex h-10 items-center justify-between">
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
