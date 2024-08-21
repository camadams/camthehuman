import NavBar from "@/app/navbar";
import Footer from "../footer";
import Image from "next/image";
import Anch from "../Anc";

export const metadata = {
  title: "BnbNotifier: It is live! 🚀",
  date: "22 Aug 2024",
  href: "/blog/5",
};

export default function Page() {
  return (
    <>
      <NavBar />

      <div className="max-w-2xl w-full mx-auto pb-16 px-4">
        <h1 className="pt-20 font-semibold">{metadata.title}</h1>
        <h3 className="py-8 italic border-b-2 ">
          app 1/12 <br /> part 5
        </h3>
        <div className="flex flex-col gap-8">
          <div />
          <p>hi</p>
          

        </div>

        <Footer date={metadata.date} />
      </div>
    </>
  );
}
