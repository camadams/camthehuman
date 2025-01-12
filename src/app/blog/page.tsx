import Link from "next/link";

import { metadata as post1 } from "./1/page";
import { metadata as post2 } from "./2/page";
import { metadata as post3 } from "./3/page";
import { metadata as post4 } from "./4/page";
import { metadata as post5 } from "./5/page";
const posts = [{ ...post1 }, { ...post2 }, { ...post3 }, { ...post4 }, { ...post5 }];

export default function Blog() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="mt-10 flex flex-col px-8 max-w-3xl mx-auto">
        {/* <h1 className="mb-10">Blog</h1> */}
        <div className="space-y-4 flex flex-col">
          {posts.map((post) => (
            <Link key={post.href} href={post.href} className="text-lg font-medium">
              <span className="text-sm text-gray-500 mr-2">{post.date}</span>
              {post.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
