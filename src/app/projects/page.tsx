import { projects } from "@/projects";
import ProjectPage from "../components/project";

export default function Home() {
  const Table: React.FC = () => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Started</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Website</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((website, index) => (
              <tr key={index}>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{website.year}</td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-blue-500">
                  <a href={website.link} target="_blank" rel="noopener noreferrer">
                    {website.name}
                  </a>
                </td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{website.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const ProjectsList: React.FC = () => {
    return (
      <div className="space-y-4 max-w-3xl mx-auto p-4">
        {projects.map((project, i) => (
          <ProjectPage key={i} project={project} />
        ))}
      </div>
    );
  };

  return (
    <>
      {/* <NavBar /> */}
      <ProjectsList />
    </>
  );
}
