import ProjectPage from "../components/project";
import BackToAllProjects from "../components/backToAllProjects";
import { projects } from "@/projects";

// Find the Pathfinding project from the projects array
const pathfindingProject = projects.find((project) => project.name === "Path Finding");

export default function PathfindingPage() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <BackToAllProjects />
      {pathfindingProject && <ProjectPage project={pathfindingProject} />}
    </div>
  );
}
