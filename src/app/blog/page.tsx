import Link from "next/link";
import NavBar from "../navbar";

export default function Blog() {
  return (
    <>
      <NavBar />
      <div className="mt-10 flex flex-col px-8 max-w-3xl mx-auto">
        <h1 className="mb-10">Blog</h1>
        <div className="space-y-4 flex flex-col">
          <Link href={"/blog/1"} className="text-lg font-medium">
            App 1/12 Part 1/4 - BnbNotifier Idea Validation
          </Link>{" "}
          <Link href={"/blog/2"} className="text-lg font-medium">
            App 1/12 Part 2/4 - BnbNotifier Authentication and Web Scraping
          </Link>{" "}
          <Link href={"/blog/3"} className="text-lg font-medium">
            App 1/12 Part 3+4/4 - BnbNotifier: Testing Production and Cron Job woes
          </Link>{" "}
        </div>
      </div>
    </>
  );
}
