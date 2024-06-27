import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between py-3 px-6 text-lg border-b-2">
      <Link href={"/"}>
        Cam
        <span className="bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-transparent">
          TheHuman
        </span>
      </Link>

      <div className="flex  justify-between gap-4">
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/ideas"}>Ideas</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/about"}>About</Link>
      </div>
    </nav>
  );
}
