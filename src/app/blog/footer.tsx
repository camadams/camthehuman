import Image from "next/image";
import Link from "next/link";

export default function Footer({ date }: { date: string }) {
  return (
    <div className="flex flex-col ">
      <div className="p-4 text-right border-b-2 border-slate-200 text-slate-500">{date}</div>

      <div className="flex items-center justify-center flex-col mt-8 gap-2">
        <div className="relative size-16 mx-auto">
          <Image className="absolute rounded-full border-blue-200 border-2" src={"/me.jpg"} fill alt="hi" />
        </div>
        <div className="text-center">
          <p className="text-xs">WRITTEN BY</p>
          <p className="font-semibold">Cam Adams</p>
        </div>
        <div>
          <Link className="underline" href="/blog">
            View all posts
          </Link>
        </div>
      </div>
    </div>
  );
}
