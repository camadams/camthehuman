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
    name: "Repetwa",
    description: "A portfolio website for a local leather and metal crafter",
    link: "https://repetwa.com",
  },
  {
    year: 2024,
    name: "Follow Spotify Artists",
    description: "Follow artists more efficiently",
    link: "https://likeartists.vercel.app",
  },
  {
    year: 2023,
    name: "Sheets Pro",
    description: "Convert a spreadsheet of sales into invoices",
    link: "https://sheetspro.vercel.app",
  },
  {
    year: 2023,
    name: "SQL Patches",
    description: "Generate Liquibase patches from file name",
    link: "https://lekkerpatches.vercel.app",
  },

  {
    year: 2023,
    name: "Emz Bakery",
    description: "A portfolio website for a local baker",
    link: "https://camadams.netlify.app/projects/waves/waves",
  },
  {
    year: 2021,
    name: "Sine Waves",
    description: "A satisfying interactive visualization of layers of Sine Waves",
    link: "https://camadams.netlify.app/projects/pathfinding/pathfinding",
  },
  {
    year: 2020,
    name: "Shortest Path",
    description: "A visualization of Dijkstra's algorithm",
    link: "https://camadams.netlify.app/projects/pathfinding/pathfinding",
  },
];

export default function Home() {
  const Table: React.FC = () => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Started</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Website</th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {websites.map((website, index) => (
              <tr key={index}>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{website.year}</td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-blue-500">
                  <a href={website.link} target="_blank" rel="noopener noreferrer">
                    {website.name}
                  </a>
                </td>
                <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{website.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <>
      <NavBar />
      <Table />
    </>
  );
}
