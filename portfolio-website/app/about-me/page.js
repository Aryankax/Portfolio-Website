import { profile } from "@/lib/data";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";

export default function Page() {
  return (
    <div className="text-white/90 space-y-6 pr-4">
      <Reveal>
        <Tilt className="rounded-2xl bg-white/16 ring-1 ring-white/20 backdrop-blur-lg p-4 glow-card">
          <p className="leading-7 text-white/95">
            I’m {profile.name}, a {profile.role} passionate about building reliable products across
            web and mobile. I’ve worked on feature flagging in enterprise stacks (Java/.NET/Angular)
            and shipped SwiftUI apps with Firebase real‑time capabilities. I enjoy systems design,
            developer tooling, and creating delightful UX with Next.js and Tailwind.
          </p>
        </Tilt>
      </Reveal>

      <Reveal>
        <Tilt className="rounded-2xl bg-white/16 ring-1 ring-white/20 backdrop-blur-lg p-4 glow-card">
          <h3 className="text-lg font-semibold mb-2">Education</h3>
          <div className="text-white/90">
            <div className="font-medium">{profile.education.school}</div>
            <div className="text-white/80 text-sm">{profile.education.degree}</div>
            <div className="text-white/70 text-sm">CGPA: {profile.education.cgpa} • {profile.education.duration}</div>
          </div>
        </Tilt>
      </Reveal>

      <Reveal>
        <Tilt className="rounded-2xl bg-white/16 ring-1 ring-white/20 backdrop-blur-lg p-4 glow-card">
          <h3 className="text-lg font-semibold mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((s) => (
              <span key={s} className="px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 text-sm transition-all duration-200 ease-out hover:bg-white/15 hover:ring-white/30 hover:scale-[1.04]">
                {s}
              </span>
            ))}
          </div>
        </Tilt>
      </Reveal>
    </div>
  );
}
