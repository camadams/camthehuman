import Footer from "../footer";
import Image from "next/image";
import Anch from "../Anc";

export const metadata = {
  title: "BnbNotifier: Housing in South Africa 🌍",
  date: "15 Aug 2024",
  href: "/blog/4",
};

export default function Page() {
  return (
    <>
      {/* <NavBar /> */}

      <div className="max-w-2xl w-full mx-auto pb-16 px-4">
        <h1 className="pt-20 font-semibold">{metadata.title}</h1>
        <h3 className="py-8 italic border-b-2 ">
          app 1/12 <br /> part 4
        </h3>
        <div className="flex flex-col gap-8">
          <div />
          <p>
            After I posted my promo video for BNBNotifier, two friends informed me about recent developments in the housing space in South Africa.
            Housing in South Africa is a complex topic and serious issue for many people, so it&apos;s important to share opinions and experiences
            with caution and compassion.
          </p>
          <p>
            Just two days before I posted my video, a Capetonian started a
            <Anch
              text="petition"
              link="https://www.change.org/p/urge-city-of-cape-town-to-reassess-the-airbnb-partnership-regarding-the-digital-nomad-visa"
            />
            urging the City of Cape Town &#40;CoCT&#41; to reassess its
            <Anch
              text="partnership"
              link="https://www.capetown.gov.za/Media-and-news/City%20details%20new%20partnership%20with%20Airbnb%20to%20attract%20digital%20nomads,%20and%20reiterates%20call%20for%20Remote%20Worker%20Visa"
            />
            with Airbnb. This
            <Anch
              text="partnership"
              link="https://www.capetown.gov.za/Media-and-news/City%20details%20new%20partnership%20with%20Airbnb%20to%20attract%20digital%20nomads,%20and%20reiterates%20call%20for%20Remote%20Worker%20Visa"
            />
            encourages digital nomads on the Digital Nomad visa to secure long-term accommodation through Airbnb and offers co-working hubs, while
            also collaborating with local businesses to provide tailored experiences for remote workers. The petition also calls on the CoCT to focus
            on more pressing issues, such as homelessness and the lack of affordable housing.
          </p>
          <p>
            I DM&apos;d and chatted with <Anch text="Ndifuna Ukwazi" link="https://nu.org.za/" addSpaceAtEnd={false} />, a social justice
            organization, about affordable housing. I learned that affordable living isn&apos;t just about the rent and utilities you pay, but also
            about your location. Proximity to public transport, shops, and other amenities is a crucial factor in affordability. I asked what is considered
            an afforable percentage of ones monthly income to spend on rent. They said one third is a widely agreed-upon standard. They also provided valuable insights
            into the impact of Airbnb on local housing. For instance, in Berlin, research shows that Airbnb listings reduce the supply of long-term
            rentals and increase rent prices, making it difficult for locals to find accommodation. Additionally, I discovered that some companies in
            Cape Town own as many as 150 buildings, which they can list on Airbnb. Ndifuna Ukwazi suggests that stricter regulations are necessary.
          </p>

          <p>
            One of their researches says: &quot;The issue is not with individual owners who rent out a spare room or established B&Bs who now use
            Airbnb&apos;s platform, but rather with the fact that the majority of Airbnbs are owned by people with several listings on the platform -
            some individuals and companies have more than 150 listings! The individuals and companies are effectively acting as unregulated hotels in
            order to avoid the taxes and systems in place to protect both hotel guests and staff. A related issue is that developers in the central
            city are now largely building tiny apartments targeted at short-term rentals. These apartments are great for Airbnb but have no chance of
            fitting local households at any point. So not only is Airbnb distorting our local housing market and pricing out local families, but it is
            also reshaping our very built environment in a way that will exclude larger and larger numbers of people. The City needs to properly
            balance the genuine benefits provided by tourism with the costs of damaging platforms like Airbnb if it wants to avoid the issues which
            have been so clearly documented and evidenced all around the world.&quot;
          </p>

          <p>
            My friend and I noted something interesting. We think that if Airbnb were to shut down, the businesses that currently purchase as many as
            150 properties to turn into rental accommodation would likely switch to platforms like Booking.com, Google, or other competitors to rent
            their properties. This is very hypothetical though... Towards the end of my discussion with Ndifuna Ukwazi, I mentioned this, and they responded by sharing a link to
            <Anch text="Inside Airbnb" link="https://insideairbnb.com/cape-town/" addSpaceAtEnd={false} />, a website that highlights Airbnb
            properties in Cape Town. It shows whether the listing is a full home or a room and how many properties each host owns. I found this quite
            eye-opening.
          </p>
          <div className="flex flex-col gap-2">
            <div className="relative aspect-[1.75] w-full mx-auto ">
              <Image className="absolute object-fit shadow-md rounded-lg shadow-green-300" src={"/insider.png"} fill alt="insider" />
            </div>
            <p>
              Landing page for <Anch text="Inside Airbnb" link="https://insideairbnb.com/cape-town/" addSpaceAtEnd={false} /> which shows all the
              Airbnb listings in Cape Town.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative aspect-[1.2] w-4/5 mx-auto ">
              <Image className="absolute object-fit shadow-md rounded-lg shadow-green-300" src={"/listingsperhost.png"} fill alt="listingsperhost" />
            </div>
            <p className="w-4/5 mx-auto">~60% of Airbnb hosts have more than 1 listings.</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative aspect-[0.85] w-2/3 mx-auto ">
              <Image className="absolute object-fit shadow-md rounded-lg shadow-green-300" src={"/topp.png"} fill alt="tophost" />
            </div>
            <p className="w-2/3 mx-auto">
              <Anch text="Nox" link="https://www.noxrentals.com" addSpaceAtEnd={false} />,
              <Anch text="Perch" link="https://perchstays.co.za//" /> and
              <Anch text="Soughted" link="https://soughted.guestybookings.com/" />
              are the top 3 businesses with the most listings.
            </p>
          </div>
        </div>

        <Footer date={metadata.date} />
      </div>
    </>
  );
}
