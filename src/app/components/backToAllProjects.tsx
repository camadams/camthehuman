import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToAllProjects() {
  return (
    <div className="mb-6">
      <Link href="/projects" className="flex items-center text-blue-500 hover:text-blue-700 transition-colors">
        <ArrowLeft size={18} className="mr-1" />
        <span>All Projects</span>
      </Link>
    </div>
  );
}
