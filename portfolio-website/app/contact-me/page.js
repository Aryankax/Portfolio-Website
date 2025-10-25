import { contact } from "@/lib/data";

export default function Page() {
  return (
    <div className="text-white/90 space-y-4 pr-4">
      <div className="rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur-md p-4">
        <div className="text-sm text-white/80">Email</div>
        <a href={`mailto:${contact.email}`} className="text-white underline/0 hover:underline">
          {contact.email}
        </a>
      </div>
      <div className="rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur-md p-4">
        <div className="text-sm text-white/80 mb-2">Links</div>
        <div className="flex gap-4 flex-wrap">
          {contact.links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
