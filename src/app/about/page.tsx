import Image from "next/image";
import ImageWithCaption from "../blog/ImageWithCaption";
import NavBar from "../navbar";
import { timeline } from "./timeline";

export default function About() {
  return (
    <>
      <NavBar />
      <div>
        <div className="max-w-3xl mx-auto mt-10 flex flex-col">
          <h1 className="mb-10 ml-4">About</h1>
          <div className="space-y-12 w-full">
            {timeline.map((post, i) => (
              <section key={i} className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
                <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                  {post.pics.map((pic, j) => (
                    // <div key={j}>
                    //   {/* <img src="/2015a.jpg"></img> */}
                    //   <ImageWithCaption pixelLength={pic.height} pixelWidth={pic.width} imageSrc={pic.name} altText={"pic.alt"}>
                    //     {null}
                    //   </ImageWithCaption>
                    // </div>
                    <div key={j} className="rounded-lg w-full relative" style={{ aspectRatio: `${pic.width} / ${pic.height}` }}>
                      <Image src={pic.name} fill alt={pic.name} className="object-contain w-full absolute" />
                    </div>
                  ))}
                </div>
                <div className="px-4 sm:px-0">
                  <div className="sm:block flex items-center justify-center flex-col">
                    <h1 className="text-xl"> {post.title}</h1>
                    <h3 className=" text-md text-gray-500">{post.year}</h3>
                  </div>
                  <p className="whitespace-pre-line mt-2 sm:text-base text-sm">{post.des}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
