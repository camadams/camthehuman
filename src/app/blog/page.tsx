import Link from "next/link";
import NavBar from "../navbar";

export default function Blog() {
  return (
    <>
      <NavBar />
      <div className="mt-10 flex flex-col px-8 max-w-3xl mx-auto">
        <h1 className="mb-10">Blog</h1>
        <div className="space-y-4 flex flex-col">
          <Link href="/blog/1" className="text-lg font-medium">
            BnbNotifier: Idea Validation 💡
          </Link>
          <Link href="/blog/2" className="text-lg font-medium">
            BnbNotifier: Authentication and Web Scraping 🔒
          </Link>
          <Link href="/blog/3" className="text-lg font-medium">
            BnbNotifier: Testing Production and Cron Job woes 📅
          </Link>
          <Link href="/blog/4" className="text-lg font-medium">
            BnbNotifier: Housing in South Africa 🌍
          </Link>
          <Link href="/blog/5" className="text-lg font-medium">
            BnbNotifier: It is live! 🚀
          </Link>
        </div>
      </div>
    </>
  );
}
