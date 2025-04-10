import Image from "next/image";
import Link from "next/link";
// import { timelineTsxx } from "./timeline";
// import { timeline } from "./timeline";

export default function About() {
  return (
    <>
      {/* <NavBar /> */}
      <div>
        <div className="max-w-4xl mx-auto mt-10 flex flex-col">
          <div className="space-y-28 w-full">
            {/* TLDR Section */}
            <section className="mb-12 p-6 bg-gray-50 rounded-lg shadow-sm">
              <h1 className="text-xl">TLDR</h1>
              <p className="whitespace-pre-line mt-2 sm:text-base text-sm">
                Born and raised in the Deep South of Cape Town. I developed a keen interest in Maths and Physics at High School and completed a B.Sc
                in Maths and Computers at UCT. I then traveled a year in Asia and Europe before completing an Honors in Computer Science at UCT.
                Worked at SOLIDitech for 3 years as a full stack Java/HTML/CSS/React developer. Currently independently creating apps and freelancing.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <Link
                  href="/cv2.pdf"
                  target="_blank"
                  className="flex items-center px-2 text-xs py-1 bg-blue-400 text-white rounded hover:bg-blue-500 transition-colors"
                >
                  View CV
                </Link>
                <Link
                  href="/university-transcript.pdf"
                  target="_blank"
                  className="flex items-center px-2 text-xs py-1 bg-gray-400 text-white rounded hover:bg-gray-600 transition-colors"
                >
                  University Transcript
                </Link>
              </div>
            </section>
            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                {[{ name: "/pre2010b.jpg", width: 604, height: 453 }].map((pic, j) => (
                  <div key={j} className="rounded-lg w-full relative" style={{ aspectRatio: `${pic.width} / ${pic.height}` }}>
                    <Image src={pic.name} fill alt={pic.name} className="object-contain w-full absolute" />
                  </div>
                ))}
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl">Childhood</h1>
                  <h3 className=" text-md text-gray-500">Pre-2010</h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm">
                  I grew up with my mom, dad, and brother in the same house in a small, quiet suburb in the deep south of Cape Town, South Africa. We
                  were close to many beaches and remembered having great times at the beach with my mom in the summer, swimming and eating ice cream.
                  <br />
                  <br />I remember being fascinated by numbers like counting to 100 for the first and running to tell my mom, or waking up my dad in
                  his sleep to ask what "a billion times a billion" is.
                </p>
              </div>
            </section>

            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                {[
                  {
                    name: "/2015a.jpg",
                    width: 2048,
                    height: 1536,
                  },
                  // {
                  //   name: "/2015b.jpg",
                  //   width: 960,
                  //   height: 640,
                  // },
                ].map((pic, j) => (
                  <div key={j} className="rounded-lg w-full relative" style={{ aspectRatio: `${pic.width} / ${pic.height}` }}>
                    <Image src={pic.name} fill alt={pic.name} className="object-contain w-full absolute" />
                  </div>
                ))}
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl">High School</h1>
                  <h3 className=" text-md text-gray-500">2010–2015</h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm">
                  Around Grade 9, I developed a keen interest in Maths. I loved drawing graphs and understanding fractions. By the end of high school,
                  double Maths days were my favorite - "such a nerd", I know right?
                  <br />
                  <br />I spent mosts afternoons after school skating and socializing with other skaters on the hill, which led to strong friendships
                  that have lasted into my adulthood.
                  {/* It was common to name your skate crew after the suburb where you skated most.
                  Ours was CFR (Capri FreeRiders), and eventually, most of the crew proudly got CFR tattoos */}
                </p>
              </div>
            </section>

            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                {[
                  {
                    name: "/2016a.jpg",
                    width: 2048,
                    height: 1391,
                  },
                ].map((pic, j) => (
                  <div key={j} className="rounded-lg w-full relative" style={{ aspectRatio: `${pic.width} / ${pic.height}` }}>
                    <Image src={pic.name} fill alt={pic.name} className="object-contain w-full absolute" />
                  </div>
                ))}
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl">First Year</h1>
                  <h3 className=" text-md text-gray-500">2016</h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm">
                  I continued feeding my curiosity for Maths and Physics at the University of Cape Town. I needed to fill a fourth course, and I
                  remember my dad saying that "computers are the way forward." I attended a talk promoting the first-year Computer Science course, and
                  it intrigued me, so I signed up! Little did I know that this course would spark an interest of deep and fulfilling.
                  <br />
                  <br /> Solving my first homework assignment - writing a simple algorithm to calculate the perimeter of a house which involved
                  understanding the basics such as variables and user input, was so satisfying and got me hooked. I even showed it to my mom and tried
                  to explain it to her!
                </p>
              </div>
            </section>

            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                {[
                  {
                    name: "/2017a.jpg",
                    width: 1440,
                    height: 1080,
                  },
                ].map((pic, j) => (
                  <div key={j} className="rounded-lg w-full relative" style={{ aspectRatio: `${pic.width} / ${pic.height}` }}>
                    <Image src={pic.name} fill alt={pic.name} className="object-contain w-full absolute" />
                  </div>
                ))}
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl">Second Year and Vietnam</h1>
                  <h3 className=" text-md text-gray-500">2017</h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm">
                  In my second year, Computer Science and Maths were still my passions, and I enjoyed learning every day. I especially remember being
                  excited about learning Java objects and preparing for lectures by doing my own research. <br />
                  <br />
                  This was also the year I traveled outside South Africa for the first time, visiting my brother in Vietnam. This was a really cool
                  experience. Seeing all the scooters and how everything flowed in the traffic was so fascinating to me. trying the local cuisine was
                  a fond memory too.
                </p>
              </div>
            </section>

            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                {[
                  {
                    name: "/2018a.jpg",
                    width: 2140,
                    height: 1604,
                  },
                ].map((pic, j) => (
                  <div key={j} className="rounded-lg w-full relative" style={{ aspectRatio: `${pic.width} / ${pic.height}` }}>
                    <Image src={pic.name} fill alt={pic.name} className="object-contain w-full absolute" />
                  </div>
                ))}
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl">Third Year</h1>
                  <h3 className=" text-md text-gray-500">2018</h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm">
                  After three years and shuffling around my majors, I completed a science degree in Maths and Computer Science. This felt like a huge
                  accomplishment and was proud to have completed it.
                  <br />
                  <br /> To be honest, I was glad Pure Mathematics was over. Writing proofs was challenging and was far away from were I started my
                  fascination for Maths. Computer Science, especially the programming side, maintained that early love for solving problems with Math
                  and Logic. I take my hat off to those students that got A's through out Uni. The ones who did the best were the ones that saw the
                  learning material before it arrived in lectures. Some students had both their parents with PhDs in Computer Science and engineering
                  and were doing projects for post-graduates.
                  <br />
                  <br /> Also, for me, University wasn’t the socially vibrant experience many associate it with, as I lived 30kms from campus so it
                  was difficult to participate in evening activities or societies.
                </p>
              </div>
            </section>

            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                {[
                  {
                    name: "/2019b.jpg",
                    width: 2000,
                    height: 1125,
                  },
                  {
                    name: "/2019a.jpg",
                    width: 2140,
                    height: 1604,
                  },
                ].map((pic, j) => (
                  <div key={j} className="rounded-lg w-full relative" style={{ aspectRatio: `${pic.width} / ${pic.height}` }}>
                    <Image src={pic.name} fill alt={pic.name} className="object-contain w-full absolute" />
                  </div>
                ))}
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl">Band and Traveling</h1>
                  <h3 className=" text-md text-gray-500">2019</h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm">
                  Coming out of university, I wasn’t sure what to do next. I had not taken a gap year so I was keen on a break from studying. So in
                  the first half of the year, I ended up leading a band, playing gigs around the deep south, and recorded a four-track EP at a
                  friend’s studio.
                  <br />
                  <br />
                  In the second half, I traveled. I visited Europe for the first time, staying with my uncle in the south of France, and returned to
                  Vietnam. From there, I set out on a solo backpacking trip to Kerala, India, which was a significant milestone for me. Planning and
                  executing the trip alone gave me a sense of accomplishment.
                </p>
              </div>
            </section>

            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                {[
                  {
                    name: "/2020a.jpg",
                    width: 960,
                    height: 960,
                  },
                ].map((pic, j) => (
                  <div key={j} className="rounded-lg w-full relative" style={{ aspectRatio: `${pic.width} / ${pic.height}` }}>
                    <Image src={pic.name} fill alt={pic.name} className="object-contain w-full absolute" />
                  </div>
                ))}
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl">Honors and First Relationship</h1>
                  <h3 className=" text-md text-gray-500">2020</h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm">
                  My cup was fill after a year of playing music and traveling and was ready to get back to studying again. I lived closed to campus
                  and joined a couple societies - Choir and Japanese Club. This was the university experience I had longed for but had missed in my
                  first three years.
                  <br />
                  <br />
                  In the middle of the year, during peak Covid lockdown, I met my first girlfriend through a dating app. Balancing my studies while
                  dating and having to learn new things about myself through the relationship was a lot, though am grateful of the experience.
                </p>
              </div>
            </section>

            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                {[
                  {
                    name: "/2021a.jpg",
                    width: 1536,
                    height: 1536,
                  },
                ].map((pic, j) => (
                  <div key={j} className="rounded-lg w-full relative" style={{ aspectRatio: `${pic.width} / ${pic.height}` }}>
                    <Image src={pic.name} fill alt={pic.name} className="object-contain w-full absolute" />
                  </div>
                ))}
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl">First Job</h1>
                  <h3 className=" text-md text-gray-500">2021</h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm">
                  This year marked a big milestone: my first full-time job. Earning a monthly salary gave me a sense of accomplishment and felt like a
                  rite of passage into adulthood. It was remote so I could move around a lot. I tried doing long term Airbnbs since they were at a
                  discount from the lack of people booking from the pandemic. I loved being able to explore different parts of Cape Town and meet new
                  people.
                </p>
              </div>
            </section>

            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                {[
                  {
                    name: "/2022a.jpg",
                    width: 768,
                    height: 1024,
                  },
                  // {
                  //   name: "/2022b.jpg",
                  //   width: 683,
                  //   height: 1024,
                  // },
                ].map((pic, j) => (
                  <div key={j} className="rounded-lg w-full relative" style={{ aspectRatio: `${pic.width} / ${pic.height}` }}>
                    <Image src={pic.name} fill alt={pic.name} className="object-contain w-full absolute" />
                  </div>
                ))}
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl">Challenge</h1>
                  <h3 className=" text-md text-gray-500">2022</h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm">
                  This was the most challenging year of my life so far. I experienced burnout early in the year. I find it difficult summarizing the
                  experience, but there were various causes and a significant catalyst that threw me, it threw my ability to rationalize my thoughts
                  and emotions. This forced me to seek support and strengthen my relationships with those closest to me, a transformative experience
                  that continues to shape and humble me.
                  <br />
                  <br /> My biggest take away was: even if someone has a roof over there head, food to eat and \"seems\" to have everything together,
                  they might be fighting battles they do not speak off. While this truth may seem obvious, it wasn't really until being in a short
                  period of suffering in silence due to fear of rejection and stigma, that it really settled in me.
                  <br />
                  <br /> I still maintained my job and had something special to look forward to at the end of the year - a dear friend's wedding.
                  Friends from all over came together, dropping everything to be there. I was a groomsman and was a much needed reunion with my
                  closest friends.
                </p>
              </div>
            </section>

            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                {[
                  {
                    name: "/2023a.jpg",
                    width: 1024,
                    height: 768,
                  },
                  {
                    name: "/2023b.jpg",
                    width: 1206,
                    height: 1604,
                  },
                ].map((pic, j) => (
                  <div key={j} className="rounded-lg w-full relative" style={{ aspectRatio: `${pic.width} / ${pic.height}` }}>
                    <Image src={pic.name} fill alt={pic.name} className="object-contain w-full absolute" />
                  </div>
                ))}
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl">Muizenberg</h1>
                  <h3 className=" text-md text-gray-500">2023</h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm">
                  Continuing my Airbnb adventures, I moved to Muizenberg, a coastal, hippy-ish, surfing town about 10kms from my family home. I asked
                  myself, what would be a fun and meaningful way to spend the free time that comes with having a remote job? Surfing came to mind.
                  Some early morning sessions in the late summer were really amazing and unforgettable.
                  <br />
                  <br /> I lived in a shared Airbnb, that offered a taste of student life as many international students did volunteer work nearby.
                  <br />
                  <br />
                  By the end of the year, I had worked at my first company for nearly three years. Feeling the need to explore new opportunities, I
                  began interviewing for other roles and noted that a lot companies looked for a CV with fully fledged apps. I stumbled upon a product
                  starter kit from YouTuber Theo T3, and I was amazed how efficient he made it to get a product from 0 to production with an amazing
                  developer experience. I also found a community of independent developers and creators on X/Twitter who independently built their own
                  products.
                  <br />
                  <br />I developed some momentum and started building and prototyping apps in Next.js- a very popular full stack framework. It was a
                  fun and rewarding experience to build something that could help people.
                </p>
              </div>
            </section>

            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                {[
                  {
                    name: "/2024a.jpg",
                    width: 1204,
                    height: 1604,
                  },
                ].map((pic, j) => (
                  <div key={j} className="rounded-lg w-full relative" style={{ aspectRatio: `${pic.width} / ${pic.height}` }}>
                    <Image src={pic.name} fill alt={pic.name} className="object-contain w-full absolute" />
                  </div>
                ))}
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl">Break</h1>
                  <h3 className=" text-md text-gray-500">2024</h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm">
                  I started the year living in Kommetjie, another coastal suburb near my family home. It was quieter and slower than Muizenberg.{" "}
                  <br />
                  <br />
                  I resigned from my job after three years and am taking an extended break. Initially I wanted to go straight into traveling, but
                  ended up enjoying taking it slow and continuing to make my own apps. I launched my first consumer-ready software product,
                  bnbnotifier.com, complete with user accounts, a software service, and payment integration. The app notifies you when a new Airbnb
                  listing is available an area searched for.
                  <br />
                  <br /> The app after that - an efficient spending tracker app - I created a pamphlet and survey to gather user feedback, a rewarding
                  exercise that tested my sales and people skills.
                </p>
              </div>
            </section>

            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0 pb-16">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                {[
                  {
                    name: "/2024c.jpg",
                    width: 1204,
                    height: 1604,
                  },
                  // {
                  //   name: "/2024d.jpg",
                  //   width: 2140,
                  //   height: 1604,
                  // },
                  // {
                  //   name: "/2024e.jpg",
                  //   width: 960,
                  //   height: 1280,
                  // },
                ].map((pic, j) => (
                  <div key={j} className="rounded-lg w-full relative" style={{ aspectRatio: `${pic.width} / ${pic.height}` }}>
                    <Image src={pic.name} fill alt={pic.name} className="object-contain w-full absolute" />
                  </div>
                ))}
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl">Turkey</h1>
                  <h3 className=" text-md text-gray-500">Nov 2024</h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm">
                  In November, I joined my now girlfriend and three other new friends to hike the Lycian Way, a 300km trail along Turkey’s southern
                  coast, passing 25 ancient ruins, that takes about 25-30 days. I’ve developed a love for long-distance hiking, which to some people
                  might sound like a drag - lugging a heavy pack, eating simple meals, being sweaty and dirty - but for me, the simple rewards far
                  outweigh the challenges. The sights, the fitness, and the joy of stepping away from overstimulating, anxiety-inducing internet
                  scrolling have made it an unforgettable experience.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /*



              {false &&
              timelineTsxx.map((post, i) => (
                <section key={i} className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
                  <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                    {post.pics.map((pic, j) => (
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
  
  
              <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                <div className="rounded-lg w-full relative" style={{ aspectRatio: `604 / 453` }}>
                  <Image src="/2015a.jpg" fill alt="2015a.jpg" className="object-contain w-full absolute" />
                </div>
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl">Childhood</h1>
                  <h3 className=" text-md text-gray-500">Pre-2010</h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm">
                  I grew up with my mom, dad, and brother in the same house in a small, quiet suburb in the deep south of Cape Town, South Africa. We
                  were close to many beaches and remembered having great times at the beach with my mom in the summer, swimming and eating ice
                  cream.<br/>I remember being fascinated by numbers and gadgets. The excitement of counting to 100 for the first time and running to
                  tell my mom, or asking my dad what "a billion times a billion" is
                </p>
              </div>
            </section>

            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                <div className="rounded-lg w-full relative" style={{ aspectRatio: `604 / 453` }}>
                  <Image src="/2015a.jpg" fill alt="2015a.jpg" className="object-contain w-full absolute" />
                </div>
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl">High School</h1>
                  <h3 className=" text-md text-gray-500">2010–2015</h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm">
                  Around Grade 9, I developed a deep interest in Maths. I loved drawing graphs and understanding fractions. By the end of high school,
                  double Maths days were my favorite. Downhill skating was a big passion. Spending every day after school skating and socializing with
                  other skaters on the hill led to strong friendships that have lasted into adulthood. It was common to name your skate crew after the
                  suburb where you skated most. Ours was CFR (Capri FreeRiders), and eventually, most of the crew proudly got CFR tattoos.
                </p>
              </div>
            </section>

            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                <div className="rounded-lg w-full relative" style={{ aspectRatio: `604 / 453` }}>
                  <Image src="/2015a.jpg" fill alt="2015a.jpg" className="object-contain w-full absolute" />
                </div>
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl"></h1>
                  <h3 className=" text-md text-gray-500"></h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm"></p>
              </div>
            </section>

            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                <div className="rounded-lg w-full relative" style={{ aspectRatio: `604 / 453` }}>
                  <Image src="/2015a.jpg" fill alt="2015a.jpg" className="object-contain w-full absolute" />
                </div>
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl"></h1>
                  <h3 className=" text-md text-gray-500"></h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm"></p>
              </div>
            </section>

            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                <div className="rounded-lg w-full relative" style={{ aspectRatio: `604 / 453` }}>
                  <Image src="/2015a.jpg" fill alt="2015a.jpg" className="object-contain w-full absolute" />
                </div>
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl"></h1>
                  <h3 className=" text-md text-gray-500"></h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm"></p>
              </div>
            </section>

            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                <div className="rounded-lg w-full relative" style={{ aspectRatio: `604 / 453` }}>
                  <Image src="/2015a.jpg" fill alt="2015a.jpg" className="object-contain w-full absolute" />
                </div>
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl"></h1>
                  <h3 className=" text-md text-gray-500"></h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm"></p>
              </div>
            </section>

            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                <div className="rounded-lg w-full relative" style={{ aspectRatio: `604 / 453` }}>
                  <Image src="/2015a.jpg" fill alt="2015a.jpg" className="object-contain w-full absolute" />
                </div>
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl"></h1>
                  <h3 className=" text-md text-gray-500"></h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm"></p>
              </div>
            </section>

            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                <div className="rounded-lg w-full relative" style={{ aspectRatio: `604 / 453` }}>
                  <Image src="/2015a.jpg" fill alt="2015a.jpg" className="object-contain w-full absolute" />
                </div>
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl"></h1>
                  <h3 className=" text-md text-gray-500"></h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm"></p>
              </div>
            </section>

            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                <div className="rounded-lg w-full relative" style={{ aspectRatio: `604 / 453` }}>
                  <Image src="/2015a.jpg" fill alt="2015a.jpg" className="object-contain w-full absolute" />
                </div>
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl"></h1>
                  <h3 className=" text-md text-gray-500"></h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm"></p>
              </div>
            </section>

            <section className="flex sm:flex-row flex-col sm:space-x-4 w-full space-y-4 sm:space-y-0">
              <div className="space-y-4 flex-shrink-0 sm:w-1/2 w-full ">
                <div className="rounded-lg w-full relative" style={{ aspectRatio: `604 / 453` }}>
                  <Image src="/2015a.jpg" fill alt="2015a.jpg" className="object-contain w-full absolute" />
                </div>
              </div>
              <div className="px-4 sm:px-0">
                <div className="sm:block flex items-center justify-center flex-col">
                  <h1 className="text-xl"></h1>
                  <h3 className=" text-md text-gray-500"></h3>
                </div>
                <p className="whitespace-pre-line mt-2 sm:text-base text-sm"></p>
              </div>
            </section>*/
}
