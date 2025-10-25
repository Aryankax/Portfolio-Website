import ExperienceList from "@/components/ExperienceList";
import { experience } from "@/lib/data";

export default function Page() {
  return (
    <div className="px-2 py-2">
      <ExperienceList items={experience} />
    </div>
  );
}
