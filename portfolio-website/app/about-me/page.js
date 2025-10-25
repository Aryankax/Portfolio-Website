import { profile } from "@/lib/data";

export default function Page() {
  return (
    <div className="text-white/90 space-y-6 pr-4">
      <section className="rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur-md p-4">
        <p>
          I’m {profile.name}, a {profile.role} passionate about building reliable products across
          web and mobile. I’ve worked on feature flagging in enterprise stacks (Java/.NET/Angular)
          and shipped SwiftUI apps with Firebase real‑time capabilities. I enjoy systems design,
          developer tooling, and creating delightful UX with Next.js and Tailwind.
        </p>
      </section>

      <section className="rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur-md p-4">
        <h3 className="text-lg font-semibold mb-2">Education</h3>
        <div className="text-white/90">
          <div className="font-medium">{profile.education.school}</div>
          <div className="text-white/80 text-sm">{profile.education.degree}</div>
          <div className="text-white/70 text-sm">CGPA: {profile.education.cgpa} • {profile.education.duration}</div>
        </div>
      </section>

      <section className="rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur-md p-4">
        <h3 className="text-lg font-semibold mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((s) => (
            <span key={s} className="px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 text-sm">
              {s}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
