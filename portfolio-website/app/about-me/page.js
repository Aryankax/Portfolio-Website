import { profile } from "@/lib/data";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";

export default function Page() {
  return (
    <div className="text-white/90 space-y-6 pr-4">
      <Reveal>
        <Tilt className="rounded-2xl bg-white/16 ring-1 ring-white/20 backdrop-blur-lg p-4 glow-card">
          <p className="leading-7 text-white/95">
            👋 Hey, I’m Aryan Kacker — a passionate Software Engineer and Full-Stack Developer.
I’m currently pursuing my B.Tech in Computer Science at SRM University (CGPA: 9.02/10) and have worked with Barclays as a Technology Summer Intern, where I developed feature-flag management systems, OpenAPI integrations, and CI/CD pipelines to streamline deployments across large-scale applications.

I enjoy building end-to-end products — from scalable backend systems using Node.js, Express, and MongoDB to full-stack solutions with Next.js and AWS. My work focuses on creating efficient, secure, and maintainable architectures that solve real-world problems and deliver great user experiences.
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
