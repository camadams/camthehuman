import ProjectPage from "../components/project";
import BackToAllProjects from "../components/backToAllProjects";
import { projects } from "@/projects";

// Find the Sine Waves project from the projects array
const wavesProject = projects.find((project) => project.name === "Sine Waves");

export default function SineWavesPage() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <BackToAllProjects />
      {wavesProject && <ProjectPage project={wavesProject} />}
    </div>
  );
}
