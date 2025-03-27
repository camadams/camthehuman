import Project from "../components/project";
import BackToAllProjects from "../components/backToAllProjects";
import { projects } from "../projects/page";

// Find the Spotify project from the projects array
const spotifyProject = projects.find((project) => project.name === "Follow Spotify Artists");

export default function SpotifyPage() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <BackToAllProjects />
      {spotifyProject && <Project project={spotifyProject} />}
    </div>
  );
}
