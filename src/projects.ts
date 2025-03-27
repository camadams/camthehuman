export type Project = {
  year: number;
  name: string;
  description: string;
  link: string;
  githubLink: string;
  pic: string;
  projectStatus: string;
};

export const projects: Project[] = [
  {
    year: 2024,
    name: "Mula",
    description: "The most efficient spendings tracker.",
    link: "https://mulav0.vercel.app/",
    githubLink: "https://github.com/camadams/mulav0",
    pic: "/projects/mula.png",
    projectStatus: "in progress",
  },
  {
    year: 2024,
    name: "BNBNotifier",
    description: "Be notified of new Airbnb listings",
    link: "https://www.bnbnotifier.com",
    githubLink: "https://github.com/camadams/bnbnotifier/tree/main",
    pic: "/projects/bnbnotifier.png",
    projectStatus: "paused",
  },
  {
    year: 2024,
    name: "Repetwa",
    description: "A portfolio website for a local leather and metal crafter",
    link: "https://repetwa.vercel.app/",
    githubLink: "https://github.com/camadams/repetwa",
    pic: "/projects/repetwa.png",
    projectStatus: "paused",
  },
  {
    year: 2024,
    name: "Follow Spotify Artists",
    description: "Follow artists more efficiently",
    link: "https://likeartists.vercel.app",
    githubLink: "https://github.com/camadams/likespotifyartists",
    pic: "/projects/followspotifyartists.png",
    projectStatus: "live",
  },
  {
    year: 2023,
    name: "Sheets Pro",
    description: "Convert a spreadsheet of sales into invoices",
    link: "https://sheetspro.vercel.app",
    githubLink: "https://github.com/camadams/exactpayments",
    pic: "/projects/sheetspro.jpg",
    projectStatus: "paused",
  },
  {
    year: 2023,
    name: "Lekker Patches",
    description: "Generate Liquibase patches from file name",
    link: "https://lekkerpatches.vercel.app",
    githubLink: "https://github.com/camadams/lekkerpatches",
    pic: "/projects/lekkerpatches.png",
    projectStatus: "live",
  },

  {
    year: 2023,
    name: "Emz Bakery",
    description: "A portfolio website for a local baker",
    link: "https://emzbakery.com",
    githubLink: "https://github.com/camadams/emzwebsite/tree/main",
    pic: "/projects/emzbakery.webp",
    projectStatus: "live",
  },
  {
    year: 2021,
    name: "Sine Waves",
    description: "A satisfying interactive visualization of layers of Sine Waves",
    link: "https://camadams.netlify.app/projects/waves/waves",
    githubLink: "https://github.com/camadams/output/tree/main/public/projects/waves",
    pic: "/projects/waves.png",
    projectStatus: "live",
  },
  {
    year: 2020,
    name: "Path Finding",
    description: "A visualization of Dijkstra's algorithm",
    link: "https://camadams.netlify.app/projects/pathfinding/pathfinding",
    githubLink: "https://github.com/camadams/pathfinding",
    pic: "/projects/pathfinding.png",
    projectStatus: "live",
  },
];
