"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home" },
  { href: "/about-me", label: "About me" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: "/contact-me", label: "Contact me" },
];

export default function MobileTopBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  function toggle() {
    setOpen((v) => !v);
  }
  function close() {
    setOpen(false);
  }

  // Lock background scroll when menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <div className="lg:hidden sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-white/10 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl mb-3 ios-glass">
      {/* Left: avatar + name */}
      <Link href="/" className="flex items-center gap-3">
        <div className="ig-ring w-12 h-12">
          <div className="inner me w-full h-full rounded-full bg-center bg-cover ring-2 ring-white/70 shadow-sm" />
        </div>
        <div>
          <div className="text-white/95 text-lg font-semibold leading-tight">Aryan Kacker</div>
          <div className="text-white/75 text-xs">Software Engineer</div>
        </div>
      </Link>

      {/* Right: dropdown trigger */}
      <button
        type="button"
        aria-expanded={open}
        aria-label="Open navigation menu"
        onClick={toggle}
        className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-white/90 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition"
      >
        {/* Hamburger icon */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      {/* Fullscreen menu overlay via portal to escape clipping */}
      {open && typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
            {/* Backdrop */}
            <button
              aria-label="Close navigation"
              onClick={close}
              className="absolute inset-0 bg-black/40 backdrop-blur-md z-0"
            />
            {/* Menu content */}
            <div className="absolute inset-0 p-4 z-10">
              {/* Close (X) button (above panel) */}
              <button
                type="button"
                aria-label="Close menu"
                onClick={close}
                className="absolute right-6 top-6 z-20 inline-flex items-center justify-center w-10 h-10 rounded-xl text-white/90 ring-1 ring-white/15 bg-white/10 hover:bg-white/15 backdrop-blur-sm"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6l-12 12" />
                </svg>
              </button>
              <div className="menu-pop relative z-10 h-full w-full rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl ring-1 ring-white/15 shadow-[0_10px_28px_rgba(0,0,0,0.25)] overflow-auto no-scrollbar ios-glass">
                <nav className="py-2">
                  {items.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={close}
                        className={[
                          "block px-5 py-4 text-base",
                          active ? "text-white" : "text-white/85 hover:text-white",
                          "hover:bg-white/10",
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
