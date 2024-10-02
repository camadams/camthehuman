import NavBar from "@/app/navbar";
import Footer from "../footer";
import Anch from "../Anc";
import ImageWithCaption from "../ImageWithCaption";

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
          <p>
            BnbNotifiter, an app I created to notify you of new Airbnb listings, is live. <br />
            You can view it <Anch link="https://bnbnotifier.com" text="here" addSpaceAtEnd={false} />.
          </p>
          <p>
            Here is a quick demo:
            <br /> 1. sign up <Anch link="https://bnbnotifier.com" text="here" addSpaceAtEnd={false} />
            <br /> 2. go to official <Anch link="https://airbnb.com" text="Airbnb Website" addSpaceAtEnd={false} /> and search for an area you want to
            stay in with all your specific parameters like price, dates, amenities etc.
            <br /> 3. copy that url
            <br /> 4. in the dashboard of BnbNotifier, add a new url
            <br /> 5. done
          </p>
          <p>
            This is an MVP, the code would need an entire face list/system redesign once there are a few users. The app scraps one Airbnb url hour. So
            at most it can scrap 24 in a day. This is because I lacked knowledge of how periodic web scraping in a production environment really works
            but now I have a better understanding and appreciation which I am proud to have learnt from just creating this app.
            <br /> For a revamp, I would probably have to dive into renting a VPS, Virtual Private Server, which are about $5/mo. This would eliminate
            AWS and Vercel. <br /> I also learnt more about what it means to validate an idea. I wrote a a bit about validating this idea in{" "}
            <Anch link="/blog/1" text="this blog" addSpaceAtEnd={true} /> thought what I never touched on was how feasible the software
            solution/system design was. I feel I could have never really known, maybe in hindsight, I could have researched webscraping in an
            production environment. I am pretty stoked on the system design for the app though, here it is below:{" "}
          </p>
          <ImageWithCaption pixelWidth={1324} pixelLength={264} altText="insider" imageSrc="/bnbnotifier-system-design.png" children={null} />
          <p>
            This is a little complicated to just setup a cron-like job but in Vercel, the place where I host the app, the free tier only allows 1 cron
            job with a period of 24 hours. Meaning I would only be able to scrap an airbnb url ONCE a day, which is clearly not enough. Ideally I
            would like a system where I can scrap at least every hour x X users per day.
          </p>
        </div>

        <Footer date={metadata.date} />
      </div>
    </>
  );
}
