import NavBar from "@/app/navbar";
import Footer from "../footer";

export default function Page() {
  return (
    <>
      <NavBar />

      <div className="max-w-xl w-full mx-auto pb-16 px-4">
        <h1 className="pt-20 font-semibold">BnbNotifier: Idea Validation</h1>
        <h3 className="py-8 italic border-b-2 ">
          {" "}
          app 1/12 <br /> part 1
        </h3>
        <p className="py-10">
          When starting a new project, it is important to analyze competitors to identify features or business models that could provide an edge or
          serve as inspiration for your new implementation.
          <br />
          <br />I noted two competitors:{" "}
          <a className="underline text-blue-500" target="_" href="https://alertbnb.com">
            alertbnb.com
          </a>{" "}
          and{" "}
          <a className="underline text-blue-500" target="_" href="https://alertstays.com">
            alertstays.com
          </a>
          .<br />
          <br />
          Alertstays uses an efficient method for setting up notifications. After searching for available listings on Airbnb using parameters such as
          price, check-in/out dates, and amenities, a user can copy the URL and add it to an alert setting. Alertstays recognized that all the
          required parameters are contained in the URL and can be extracted. Therefore, they did not create a separate user interface for searching. I
          plan to use this technique as well.
          <br />
          <br />
          How my implementation will differ is in the billing model. Users can purchase notification credits, which will be deducted each time a new
          listing is found. I believe this will provide a competitive advantage. In areas with fewer listings, such as small towns, receiving few
          notifications makes a monthly subscription seem like a poor investment.
          <br />
          <br />I watched{" "}
          <a className="underline text-blue-500" target="_" href="https://www.youtube.com/watch?v=Ae_RAFzUqJ4">
            this video
          </a>{" "}
          that provided techniques on how to find and validate SaaS ideas. The last point recommended looking at Product Hunt, which is how I found
          alertbnb.com. I discovered Alertstays by simply googling &quot; Airbnb notifications.&quot;
        </p>
        <h2>Marketing</h2>
        <p className="py-6">
          I created a{" "}
          <a className="underline text-blue-500" target="_" href="https://www.instagram.com/p/C9R-T56qNKo/">
            short video
          </a>{" "}
          to promote the idea. Ideally, advertising early could help gauge interest before starting to build it. However for this app, even if no one
          uses it, it will still be great practice for completing an end to end product and I could still use it in my personal life.
        </p>
        <Footer date="11 July 2024" />
      </div>
    </>
  );
}
