import Footer from "../footer";
import Anch from "../Anc";
import ImageWithCaption from "../ImageWithCaption";

export const metadata = {
  title: "BnbNotifier: It is live! 🚀",
  date: "30 Sept 2024",
  href: "/blog/5",
};

export default function Page() {
  return (
    <>
      {/* <NavBar /> */}

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
            This is an MVP, and the code will require a full system redesign once there are more users. The app currently scrapes one Airbnb URL per
            hour, allowing a maximum of 24 URLs per day. This limitation came from my initial lack of experience with periodic web scraping in a
            production environment. However, I have gained valuable insights through the development process.
            <br />
            <br /> For a future revamp, I may need to explore renting a Virtual Private Server &#40;VPS&#41;, which costs around $5/mo and would
            eliminate the need for AWS and Vercel. The free tier for Vercel limits me to one cron job execution per day. Ideally, I&apos;d like a
            system that allows scraping at least every hour for multiple users. Despite the limitations, I&apos;m happy with the system design so far.{" "}
          </p>
          <ImageWithCaption pixelWidth={1324} pixelLength={264} altText="insider" imageSrc="/bnbnotifier-system-design.png">
            {null}
          </ImageWithCaption>
          <p>
            I&apos;ve also learned more about what it means to validate an idea. I wrote a bit about validating this concept in my blog, but I
            didn&apos;t fully address the feasibility of the software solution or system design. In hindsight, researching web scraping in a
            production environment would have been beneficial.
          </p>
        </div>

        <Footer date={metadata.date} />
      </div>
    </>
  );
}
