import ProjectList from "@/components/ProjectList";
import { projects } from "@/lib/data";

export default function Page() {
  return (
    <div className="px-2 py-2">
      <ProjectList items={projects} />
    </div>
  );
}
