/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Project from "./components/project";
import NavBar from "./navbar";

export default function Home() {
  const Hero = () => {
    return (
      <div>
        <div className="p-10" />
        <div className="relative w-32 h-32 mx-auto">
          <Image className="absolute rounded-full border-blue-200 border-4" src={"/me.jpg"} fill alt="hi" />
        </div>
        <div className="p-4" />
        <h1 className="text-center">Hi, Cam here :)</h1>
        <div className="p-2" />
        <h3 className="text-lg text-center">Building software is a thing I enjoy doing.</h3>
      </div>
    );
  };

  const Projects = () => {
    return (
      <>
        <div className="px-6">
          <div className="p-4" />
          <div>
            <Link href={"/projects"}>
              <h2>
                Projects<span className="text-sm "> &gt; </span>
              </h2>
            </Link>
          </div>

          <p className="my-2">
            <Link href="https://bnbnotifier.com" className="underline">
              🏡 BNBNotifer &#8599;
            </Link>
            : Get Notified of new Airbnb Listings
          </p>
          <h3>
            {" "}
            <p className="my-2">
              <Link href="https://camadams.netlify.app/projects/waves/waves" className="underline">
                🌊 Sine Wave visualization &#8599;
              </Link>
              : A satisfying Sine Wave generator
            </p>
          </h3>
        </div>
      </>
    );
  };

  const Ideas = () => {
    return (
      <>
        <div className="px-6">
          <div className="p-4" />
          <div>
            <Link href="/ideas">
              <h2>
                Ideas<span className="text-sm "> &gt; </span>
              </h2>
            </Link>
          </div>

          <p>Starting July 2024, I will build 12 startups in 12 months.</p>

          {/* <p className="my-2">
            <Link href="https://likeartists.vercel.app" className="underline">
              🎹 Follow Artists &#8599;
            </Link>
            : A tool that integrates the Spotify API to make following artists from your liked songs more efficient
          </p>
          <h3>
            {" "}
            <p className="my-2">
              <Link href="https://camadams.netlify.app/projects/waves/waves" className="underline">
                🌊 Sine Wave visualization &#8599;
              </Link>
              : A satisfying Sine Wave generator
            </p>
          </h3> */}
        </div>
      </>
    );
  };
  return (
    <>
      {/* <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-purple-500">
            Cam The Human
          </p>
        </div>
      </BackgroundGradientAnimation> */}
      {/* <div className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-30% from-white to-slate-400"> */}
      <div className="flex min-h-screen flex-col ">
        <NavBar />
        <section className=" mx-auto">
          <Hero />
          <div className="p-6" />
          <Projects />
        </section>
        {/* <Ideas /> */}
      </div>
      {/* <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-800">
        Ta
      </div> */}
    </>
  );
}
