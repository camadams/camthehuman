import Image from "next/image";
import { Github } from "lucide-react";
import { Project as ProjectType } from "../projects/page";

export default function Project({ project }: { project: ProjectType }) {
  return (
    <section className="sm:flex block w-full rounded-lg border-2">
      <div className="sm:w-1/2 sm:flex-shrink-0  flex items-center">
        <div className="rounded-lg w-full relative aspect-[1.5]">
          <Image src={project.pic} fill alt={project.name} className="object-contain w-full absolute" />
        </div>
      </div>
      <div className="flex flex-col justify-between divide-y-2 w-full">
        <div className="p-6 space-y-2 bg-white h-full   ">
          <div className="flex items-center gap-2">
            <a href={project.link} className="font-semibold text-xl hover:underline tracking-wider" target="_blank" rel="noopener noreferrer">
              {project.name}
              <span className="ml-2 text-3xl">&#8599;</span>
            </a>
            <a href={project.githubLink} className="hover:underline" target="_blank" rel="noopener noreferrer">
              <Github size={22} />
            </a>
          </div>
          <div>
            <p>{project.description}</p>
          </div>
        </div>
        <div className="px-6 py-2 flex justify-between items-center  bg-zinc-100 ">
          <div className="text-xs text-slate-900">{project.year}</div>
          <div>{getStatusBadge(project.projectStatus)}</div>
        </div>
      </div>
    </section>
  );
}

function getStatusBadge(status: string) {
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
