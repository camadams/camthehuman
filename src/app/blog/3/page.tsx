import NavBar from "@/app/navbar";
import Footer from "../footer";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <NavBar />

      <div className="max-w-2xl w-full mx-auto pb-16 px-4">
        <h1 className="pt-20 font-semibold">BnbNotifier: Testing Production and Cron Job woes</h1>
        <h3 className="py-8 italic border-b-2 ">
          {" "}
          app 1/12 <br /> part 3+4/4
        </h3>
        <div className="flex flex-col gap-8">
          <div />
          <p>
            Since my last blog, I&apos;ve spent most of my time working on getting <strong>Puppeteer</strong>, a web scraping library, to function in
            a production environment and setting up a cron job to periodically run the scraper.
          </p>
          <p>
            I initially tried following some tutorials using <strong>AWS SAM &#40;Serverless Application Model&#41;</strong>, which is supposed to
            offer a great developer experience. With AWS SAM, you can create Lambdas, test them, and push them to a production environment directly
            from the command line, without relying on AWS&apos;s user interface. However, I ran into issues with AWS&apos;s access, permission, and
            role management, so I ended up using the user interface, where I successfully got a Puppeteer script to run.
          </p>
          <p>
            When uploading the script via the AWS user interface, the code needed to be under 50MB. Otherwise, I had to upload it through{" "}
            <strong>AWS S3</strong> &#40;which is essentially Google Drive for AWS&#41; and provide the S3 URL for the Lambda. This led me to explore
            how code, especially Node.js/JavaScript code, is prepared and built for production—an entirely different world in itself. It also got me
            investigating how the dependencies of my app can have different versions and how sometimes modules require specific versions to satisfy
            other dependencies. For instance, I used a package called <strong>chromium</strong>, which simulates a Chrome browser that Puppeteer can
            use. The version of the Puppeteer module depends on the version of Chromium it requires.
          </p>
          <p>
            This experience made me realize that this work is highly specialized, and I might not use many of these intricate details in future
            projects. However, it has undoubtedly taught me perseverance.
          </p>
          <p>
            Getting the scraping code to run periodically was another challenge, but I managed to hack my way to a solution. A{" "}
            <strong>cron job</strong> is a scheduler that exists on Linux/Unix servers, allowing you to trigger a piece of code at scheduled
            intervals. <strong>Vercel</strong>, the platform I use to host my app, only allows cron jobs with a minimum interval of one day.
            Fortunately, I discovered that AWS offers a service called <strong>Amazon EventBridge</strong>, which allows you to create cron jobs on
            any schedule!
          </p>
        </div>

        <Footer date="11 Aug 2024" />
      </div>
    </>
  );
}
