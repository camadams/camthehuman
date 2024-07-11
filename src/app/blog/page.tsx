import Link from "next/link";
import NavBar from "../navbar";

export default function Blog() {
  return (
    <>
      <NavBar />
      <div className="mt-10 flex flex-col gap-16 px-8 max-w-xl mx-auto">
        <h1>Blog</h1>
        <Link href={"/blog/1"} className="text-xl font-medium">
          BnbNotifier: Idea Validation
        </Link>{" "}
      </div>
    </>
  );
}
