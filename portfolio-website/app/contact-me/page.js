import { contact } from "@/lib/data";
import Tilt from "@/components/Tilt";

export default function Page() {
  return (
    <div className="text-white/90 space-y-4 pr-4">
      <Tilt className="rounded-2xl bg-white/14 ring-1 ring-white/20 backdrop-blur-lg p-4 glow-card">
        <div className="text-sm text-white/80">Email</div>
        <a href={`mailto:${contact.email}`} className="text-white underline/0 hover:underline">
          {contact.email}
        </a>
      </Tilt>
      <Tilt className="rounded-2xl bg-white/14 ring-1 ring-white/20 backdrop-blur-lg p-4 glow-card">
        <div className="text-sm text-white/80 mb-2">Links</div>
        <div className="flex gap-4 flex-wrap">
          {contact.links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </Tilt>
    </div>
  );
}
