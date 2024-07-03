"use client";
import { db } from "@/db";
import NavBar from "../navbar";
import { SelectPost, postsTable } from "@/db/schema";
import { stff } from "./actions";
import { useEffect, useState } from "react";

interface Website {
  id: number;
  name: string;
  description: string;
}

const websites: Website[] = [
  {
    id: 1,
    name: "AirBnb new stay alert",
    description: "Receive notifications of new listings",
  },
  {
    id: 2,
    name: "Emoji Brush",
    description: "Paint a over an image with an emoji brush",
  },
  {
    id: 3,
    name: "Gym Buddy App",
    description: "Find a gym buddy",
  },
  {
    id: 4,
    name: "Screen Time pop up",
    description: "Have an overlay on of screen timer",
  },
  {
    id: 5,
    name: "No Algorithm",
    description: "Receive only posts from people you follow",
  },
  {
    id: 6,
    name: "Local skills",
    description: "Find people with An AI search engine that classifies peoples skills",
  },
  {
    id: 7,
    name: "Music loop app with video",
    description: "Loop and video record yourself",
  },
  {
    id: 8,
    name: "Habit Stacker Timer",
    description: "Link your habits together with a semi flexible timer",
  },
  {
    id: 9,
    name: "Loyalty Cards",
    description: "Digitalized loyalty cards ",
  },
  {
    id: 10,
    name: "Payments classifier",
    description: "Classify the card payments you make and track your spending",
  },
  {
    id: 11,
    name: "Video to Grocery List",
    description: "Convert an Instagram video to a check list of groceries",
  },
  {
    id: 12,
    name: "Social Media Payment penalty",
    description: "An accountability system to make manage screen time",
  },
  {
    id: 13,
    name: "Surf Coach App",
    description: "Schedule surf lessons",
  },
];

export default function Home() {
  // // const [notifyArr, setNotifyArr] = useState<number[]>([1, 2]);
  // const posts = await db.query.postsTable.findMany();
  // const posts = await fetch("");
  const [posts, setPosts] = useState<SelectPost[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/testt", { cache: "no-store" });
        const data: SelectPost[] = await response.json();
        setPosts(data);
        console.log(data);
      } catch (error) {
        alert("Error fetching data: " + error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      {posts && posts.map((x, i) => <div key={i}>{x.content}</div>)}
      {/* {posts && <p>{posts[0].createdAt}</p>} */}
      {/* {posts.map((post, i) => (
        <div className="h-6 bg-red-500" key={i}>
          {post.createdAt}
        </div>
      ))} */}
      <form action={stff}>
        <button>submit</button>
      </form>
      {/* <Table notifyArr={posts.map((post) => post.id)} /> */}
      <Table notifyArr={[1, 2]} />
    </>
  );
}
const Table = ({ notifyArr }: { notifyArr: number[] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-3 py-1 text-left text-xs font-medium text-gray-500 uppercase ">🔔?</th>
            <th className="px-3 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Idea</th>
            <th className="px-3 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {websites.map((website, index) => (
            <tr key={index}>
              {/* <td classNa
              id:1,me="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {website.year}
              </td> */}
              <td className="py-1 px-3 whitespace-nowrap text-sm text-gray-500">{notifyArr.includes(index) ? "✅" : ""}</td>
              <td className="px-3 py-1 whitespace-nowrap text-sm text-blue-500">
                <a
                  // href={website.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {website.name}
                </a>
              </td>
              <td className="px-3 py-1 whitespace-nowrap text-sm text-gray-500">{website.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
