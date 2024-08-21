import NavBar from "@/app/navbar";
import Footer from "../footer";
import Image from "next/image";

export const metadata = {
  title: "BnbNotifier: Authentication and Web Scraping 🔒",
  date: "19 July 2024",
  href: "/blog/2",
};

export default function Page() {
  return (
    <>
      <NavBar />

      <div className="max-w-2xl w-full mx-auto pb-16 px-4">
        <h1 className="pt-20 font-semibold">{metadata.title}</h1>
        <h3 className="py-8 italic border-b-2 ">
          {" "}
          app 1/12 <br /> part 2
        </h3>
        <p className="py-10">
          This week I made progress on learning about Authentication and Web Scraping.
          <br />
          <br />
          <div className="relative aspect-[13]">
            <Image className="absolute object-fit" src={"/auth-meaning.png"} fill alt="auth-meaning" />
          </div>
          {/* <div className="relative size-16 mx-auto">
          <Image className="absolute rounded-full border-blue-200 border-2" src={"/me.jpg"} fill alt="hi" />
        </div> */}
          <br />
          Authentication is a huge topic in a software project. When you&apos;re paying for a product or service, it&apos;s essential to ensure that
          only you have access to your profile.
          <br />
          <br />
          When starting to implement authentication for the first time, it can be pretty intimidating since it touches so many aspects of software
          engineering, from programming fundamentals you learn in the first couple of weeks of a coding course to server and client-side programming
          like setting cookies on the client &#40;cookies are a weird way of describing data stored on the client&apos;s device &#41;.
          <br />
          You also need to understand connecting to a database and storing encrypted passwords. It&apos;s also helpful to know some user interface
          fundamentals, like coding a form to accept a username and password and validating these inputs, and to have some CSS knowledge to style the
          UI.
          <br />
          Caching is another important aspect, as different components on a page may render conditionally based on whether a user is logged in or not.
          <br />
          <br />
          Overall, authentication spans a wide range of skills making it a challenging but essential part of software development.
          <br />
          <br />
          Elloitt Chong in{" "}
          <a href="https://www.youtube.com/watch?v=t-JJgTRf3Ms&t=490s" target="_" className="text-blue-500 underline">
            this video
          </a>{" "}
          highlights the different ways of implementing authentication in apps really well.
          <div className="relative aspect-[5]">
            <Image className="absolute object-fit" src={"/auth-comparison.png"} fill alt="auth-meaning" />
          </div>
          <br />
          <a href="https://lucia-auth.com/" target="_" className="text-blue-500 underline">
            Lucia
          </a>
          ,{" "}
          <a href="https://next-auth.js.org/" target="_" className="text-blue-500 underline">
            Next-Auth
          </a>
          ,{" "}
          <a href="https://clerk.com/" target="_" className="text-blue-500 underline">
            Clerk
          </a>{" "}
          are people or companies that do some of the heavy lifting for you. I chose to use Lucia for this project since I wanted to try implementing
          Auth at a lower level and try to learn more.
        </p>
        <h2>Web Scraping</h2>
        <p className="py-6">
          The code below can receive an Airbnb URL and scrape all the listings on the page.
          <br />
          <br />
          <div className="relative aspect-[1.01] md:w-3/4 mx-auto ">
            <Image className="absolute object-fit shadow-xl rounded-lg shadow-green-300" src={"/pup.png"} fill alt="pup" />
          </div>
          <br />
          <br />I was somewhat surprised that it did not take too long to google and chat gpt my way to this solution. The challenging part I am
          facing now is being able to run this code in a production environment. When the data is fetched like so <br />
          <br />{" "}
          <code>{`  await page.goto(airbnbUrl, { waitUntil: "networkidle2" });
`}</code>{" "}
          <br />
          <br />
          pupputeer, actually renders the fetched data in a chrome browser and in a production/serverless/hosted environment, it does not like that.
          And I have found it difficult to find a solution for Vercel, the hosting service I am using, so I am trying to understand and make it work
          on AWS.
        </p>
        <Footer date={metadata.date} />
      </div>
    </>
  );
}
