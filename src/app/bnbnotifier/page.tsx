import Project from "../components/project";
import BackToAllProjects from "../components/backToAllProjects";
import { projects } from "../projects/page";

// Find the BNBNotifier project from the projects array
const bnbnotifierProject = projects.find((project) => project.name === "BNBNotifier");

export default function BNBNotifierPage() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <BackToAllProjects />
      {bnbnotifierProject && <Project project={bnbnotifierProject} />}
    </div>
  );
}
