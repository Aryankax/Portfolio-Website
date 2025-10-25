import BarclaysIcon from "@/components/icons/Barclays";
import InfosysIcon from "@/components/icons/Infosys";

const iconMap = {
  barclays: BarclaysIcon,
  infosys: InfosysIcon,
};

export default function ExperienceList({ items }) {
  return (
    <div className="flex flex-col gap-4 pr-4">
      {items.map((exp, idx) => {
        const Icon = iconMap[exp.icon] || (() => null);
        return (
          <div key={idx} className="rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur-md px-4 py-3 text-white/95 flex items-start gap-4 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
            <Icon />
            <div className="flex-1">
              <div className="text-xl font-semibold">
                {exp.company} — {exp.role}
              </div>
              <div className="text-white/80 text-sm mt-0.5">
                {exp.start} – {exp.end} • {exp.location}
              </div>
              <ul className="mt-3 list-disc pl-5 marker:text-white/60 text-sm leading-6 text-white/90">
                {exp.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="text-white/70 text-sm whitespace-nowrap self-start">more</div>
          </div>
        );
      })}
    </div>
  );
}
