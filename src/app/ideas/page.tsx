"use client";
import NavBar from "../navbar";

interface Website {
  year: number;
  name: string;
  description: string;
  link: string;
}

const websites: Website[] = [
  {
    year: 2024,
    name: "AirBnb new stay alert",
    description: "Receive notifications of new listings",
    link: "https://repetwa.com",
  },
  {
    year: 2024,
    name: "Emoji Spam",
    description: "Follow artists more efficiently",
    link: "https://likeartists.vercel.app",
  },
  {
    year: 2023,
    name: "Gym Buddy App",
    description: "Convert a spreadsheet of sales into invoices",
    link: "https://sheetspro.vercel.app",
  },
  {
    year: 2023,
    name: "Screen Time pop up",
    description: "A portfolio website for a local baker",
    link: "https://camadams.netlify.app/projects/waves/waves",
  },
  {
    year: 2021,
    name: "No Algorithm",
    description:
      "A satisfying interactive visualization of layers of Sine Waves",
    link: "https://camadams.netlify.app/projects/pathfinding/pathfinding",
  },
  {
    year: 2020,
    name: "Skills",
    description: "A visualization of Dijkstra's algorithm",
    link: "https://camadams.netlify.app/projects/pathfinding/pathfinding",
  },
  {
    year: 2020,
    name: "Music loop app with video",
    description: "A visualization of Dijkstra's algorithm",
    link: "https://camadams.netlify.app/projects/pathfinding/pathfinding",
  },
  {
    year: 2020,
    name: "Habit Stacker Timer",
    description: "A visualization of Dijkstra's algorithm",
    link: "https://camadams.netlify.app/projects/pathfinding/pathfinding",
  },
  {
    year: 2020,
    name: "Loyalty Cards",
    description: "A visualization of Dijkstra's algorithm",
    link: "https://camadams.netlify.app/projects/pathfinding/pathfinding",
  },
  {
    year: 2020,
    name: "Classify Payments",
    description: "A visualization of Dijkstra's algorithm",
    link: "https://camadams.netlify.app/projects/pathfinding/pathfinding",
  },
  {
    year: 2020,
    name: "Video to Grocery List",
    description: "A visualization of Dijkstra's algorithm",
    link: "https://camadams.netlify.app/projects/pathfinding/pathfinding",
  },
  {
    year: 2020,
    name: "Social Media Payment penalty",
    description: "A visualization of Dijdkstra's algorithm",
    link: "https://camadams.netlify.app/projects/pathfinding/pathfinding",
  },
  {
    year: 2020,
    name: "Surf Coach App",
    description: "A visualization of Dijkstra's algorithm",
    link: "https://camadams.netlify.app/projects/pathfinding/pathfinding",
  },
  {
    year: 2020,
    name: "Video to Grocery List",
    description: "A visualization of Dijkstra's algorithm",
    link: "https://camadams.netlify.app/projects/pathfinding/pathfinding",
  },
];

export default function Home() {
  return (
    <>
      <NavBar />
      <input
        type="email"
        placeholder="Your email"
        className="px-2 m-2 border-2 rounded-full hover:bg-slate-100"
        onInput={(e) => console.log((e.target as HTMLInputElement).value)}
      />
      <Table />
    </>
  );
}
const Table: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Idea
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Notify me
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {websites.map((website, index) => (
            <tr key={index}>
              {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {website.year}
              </td> */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                <a
                  href={website.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {website.name}
                </a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {website.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
