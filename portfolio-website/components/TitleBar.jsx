"use client";

import { usePathname } from "next/navigation";

const titleMap = {
  "/": "Home",
  "/about-me": "About me",
  "/projects": "Projects",
  "/experience": "Experience",
  "/resume": "Resume",
  "/contact-me": "Contact me",
};

export default function TitleBar() {
  const pathname = usePathname() || "/";
  const title = titleMap[pathname] || "";

  if (pathname === "/") {
    return null;
  }

  return (
    <div className="w-full sticky top-0 z-10 flex items-center justify-center py-4 bg-white/5 backdrop-blur-sm ring-1 ring-white/10">
      <h2 className="text-white/95 text-2xl font-semibold tracking-wide">
        {title}
      </h2>
    </div>
  );
}
