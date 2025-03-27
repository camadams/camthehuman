import Image from "next/image";
import NavBar from "../navbar";
import { Github, MoveUpRight } from "lucide-react";
import Project from "../components/project";

export interface Project {
  year: number;
  name: string;
  description: string;
  link: string;
  githubLink: string;
  pic: string;
  projectStatus: string;
}

export const projects: Project[] = [
  {
    year: 2024,
    name: "Mula",
    description: "The most efficient spendings tracker.",
    link: "https://mulav0.vercel.app/",
    githubLink: "https://github.com/camadams/mulav0",
    pic: "/projects/mula.png",
    projectStatus: "in progress",
  },
  {
    year: 2024,
    name: "BNBNotifier",
    description: "Be notified of new Airbnb listings",
    link: "https://www.bnbnotifier.com",
    githubLink: "https://github.com/camadams/bnbnotifier/tree/main",
    pic: "/projects/bnbnotifier.png",
    projectStatus: "paused",
  },
  {
    year: 2024,
    name: "Repetwa",
    description: "A portfolio website for a local leather and metal crafter",
    link: "https://repetwa.vercel.app/",
    githubLink: "https://github.com/camadams/repetwa",
    pic: "/projects/repetwa.png",
    projectStatus: "paused",
  },
  {
    year: 2024,
    name: "Follow Spotify Artists",
    description: "Follow artists more efficiently",
    link: "https://likeartists.vercel.app",
    githubLink: "https://github.com/camadams/likespotifyartists",
    pic: "/projects/followspotifyartists.png",
    projectStatus: "live",
  },
  {
    year: 2023,
    name: "Sheets Pro",
    description: "Convert a spreadsheet of sales into invoices",
    link: "https://sheetspro.vercel.app",
    githubLink: "https://github.com/camadams/exactpayments",
    pic: "/projects/sheetspro.jpg",
    projectStatus: "paused",
  },
  {
    year: 2023,
    name: "Lekker Patches",
    description: "Generate Liquibase patches from file name",
    link: "https://lekkerpatches.vercel.app",
    githubLink: "https://github.com/camadams/lekkerpatches",
    pic: "/projects/lekkerpatches.png",
    projectStatus: "live",
  },

  {
    year: 2023,
    name: "Emz Bakery",
    description: "A portfolio website for a local baker",
    link: "https://emzbakery.com",
    githubLink: "https://github.com/camadams/emzwebsite/tree/main",
    pic: "/projects/emzbakery.webp",
    projectStatus: "live",
  },
  {
    year: 2021,
    name: "Sine Waves",
    description: "A satisfying interactive visualization of layers of Sine Waves",
    link: "https://camadams.netlify.app/projects/waves/waves",
    githubLink: "https://github.com/camadams/output/tree/main/public/projects/waves",
    pic: "/projects/waves.png",
    projectStatus: "live",
  },
  {
    year: 2020,
    name: "Path Finding",
    description: "A visualization of Dijkstra's algorithm",
    link: "https://camadams.netlify.app/projects/pathfinding/pathfinding",
    githubLink: "https://github.com/camadams/pathfinding",
    pic: "/projects/pathfinding.png",
    projectStatus: "live",
  },
];

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
          <Project key={i} project={project} />
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

export function getStatusBadge(status: string) {
  var style = "";
  switch (status) {
    case "live":
      style = "bg-blue-200 border-blue-300 text-blue-500";
      break;
    case "paused":
      style = "bg-yellow-200 border-yellow-300 text-yellow-500";
      break;
    case "in progress":
      style = "bg-green-200 border-green-300 text-green-500";
      break;
    default:
      style = "bg-red-500";
  }
  return <div className={`rounded-xl border-2 px-2 py-1 text-xs w-fit ${style}`}>{status}</div>;
}
