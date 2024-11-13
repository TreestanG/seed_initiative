"use client"

import NumberTicker from "@/components/ui/number-ticker";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, CoinsIcon, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

export default function Home() {


  const onClickEnroll = () => {
    gsap.to(window, { duration: 1, scrollTo: "#enroll", ease: "power3.out" })
  }


  return (
    <div className="flex min-h-screen justify-center items-center flex-col">
      {/* Hero */}

      <section className="relative w-screen h-[70vh] flex justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/landing/background.png')]">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 via-transparent to-zinc-800"></div>
        <div className="flex flex-wrap md:flex-nowrap gap-4 relative z-10">
          <div className="relative px-4 pb-16 pt-8 md:w-7/12 md:px-6">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
              Empowering the Next Generation of STEM leaders
            </h1>
            <p className="text-white text-lg md:text-xl pt-4">
              SEED (Science Engagement and Educational Development) helps under-resourced students thrive in STEM competitions through classes, workshops, and financial support.
            </p>
            <div className="flex gap-4 mt-6">
              <button className="py-2 px-4 md:px-8 md:text-lg lg:text-xl rounded-full text-white font-semibold uppercase bg-byellow hover:brightness-90">
                Support SEED
              </button>
              <button className="py-2 px-4 md:px-8 md:text-lg lg:text-xl rounded-full text-white font-semibold uppercase bg-bcyan hover:brightness-90" onClick={onClickEnroll}>
                Join Our Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}


      <section className="w-full justify-center flex flex-col items-center py-8 md:pt-24 p-4">
        <h1 className="font-bold text-4xl">Our Sponsors</h1>
        <p className="pt-4 text-lg text-neutral-700">We are extremely thankful to each and every one of our sponsors who have helped us come this far.</p>
        <div className="grid grid-cols-3 gap-8 items-center py-8">
          <Image src="/landing/code-ninja.png" alt="codeninja" width={200} height={200} />
          <Image src="/landing/techno-warriors.png" alt="codeninjas" width={200} height={200} />
          <Image src="/landing/scarlet-serpents.PNG" alt="ftc" width={200} height={200} />
        </div>
      </section>

      {/* About */}

      <section className="w-full py-8 lg:py-24">
        <div className="mx-auto max-w-screen-xl px-4 py-8 space-y-12 lg:space-y-20 lg:px-4">
          <div className="lg:grid lg:grid-cols-2 xl:gap-16 ">
            <Image src="/landing/mission-picture.png" alt="team" width={600} height={200} className="hidden md:block" />
            <div className=" place-content-center">
              <h3 className="text-4xl font-bold pb-4 ">Who We Are</h3>
              <p className="text-byellow font-bold text-2xl">We empower all students to succeed in STEM competitions</p>
              <p className="pt-4 ">We believe that every student, regardless of background, should have the opportunity to thrive in academic competitions. Through weekly lessons, hands-on workshops, and fully-funded tournament experiences, we provide the resources, mentorship, and support needed for success.</p>
              <Link href="/about">
                <button className=" underline mt-4">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Donations */}

      <section className="w-full bg-bpurple py-6 md:py-12 grid md:grid-cols-2 gap-8 justify-center mx-auto items-center px-4">
        <Image src="donations.svg" width={200} height={200} alt="donations" className="hidden md:block justify-self-end" />
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-white">Support Our Mission</h2>
          <p className="text-white text-lg md:text-xl font-medium max-w-[36rem]">Your donation helps us provide resources, mentorship, and support to under-resourced students in STEM competitions.</p>

          <Link href="/sponsors">
            <button className="py-4 px-6 md:px-8 md:text-lg lg:text-xl rounded-full text-white font-semibold uppercase bg-byellow hover:brightness-90 m-4 ml-0">
              Support Seed
            </button>
          </Link>
        </div>
      </section>

      <section className="w-full py-8 md:py-24" >
        <div className="mx-auto max-w-screen-xl px-4 py-6 space-y-6 lg:space-y-12 lg:px-4 ">
          <h2 className="text-4xl font-bold md:text-center w-full text-bcyan">Our Impact So Far.</h2>
          <div className="lg:grid lg:grid-cols-3 xl:gap-16 space-y-4 items-center">
            <div className="lg:flex lg:items-center lg:flex-col ">
              <CoinsIcon size={96} strokeWidth={2} className="text-bpurple hidden md:block" />
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold pt-6">$<NumberTicker value={10000} className="" />+</span>
              <p className=" text-lg font-medium md:pt-4">Raised Through Fundraisers</p>
            </div>
            <div className="lg:flex lg:items-center lg:flex-col ">
              <GraduationCap size={96} strokeWidth={2} className="text-bpurple hidden md:block" />

              <span className="text-3xl md:text-4xl lg:text-5xl font-bold pt-6"><NumberTicker value={150} className="" />+</span>
              <p className=" text-lg font-medium md:pt-4">Students Taught</p>
            </div>
            <div className="lg:flex lg:items-center lg:flex-col ">
              <Clock size={96} strokeWidth={2} className="text-bpurple hidden md:block" />
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold pt-6"><NumberTicker value={500} className="" />+</span>
              <p className=" text-lg font-medium md:pt-4">Volunteer Hours Awarded</p>
            </div>
          </div>
          <div className="w-full flex flex-col md:items-center">
            <p className=" max-w-[50rem] md:text-center ">With the generous support of our fiscal sponsor, <Link className="font-bold" href="https://hackclub.com/">Hack Club</Link>, and sponsors like <Link href="https://www.codeninjas.com/" className="font-bold">Code Ninjas</Link> and FTC teams <span className="font-bold">TechnoWarriors and Scarlet Serpents</span>, we&apos;re making an impact in our community.</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-blue-700 py-8">
        <div className="mx-auto max-w-screen-xl px-4 py-8 space-y-10 lg:px-4">
          <h3 className="text-4xl font-bold text-white">This Summer, We:</h3>
          <div className="lg:grid lg:grid-cols-2 space-y-8 lg:space-y-0 gap-16">
            <div className="bg-white p-4 rounded-xl">
              <Image src="/landing/tournament.JPG" alt="team" width={600} height={200} className="rounded-xl" />
              <h4 className="text-2xl font-bold text-blue-700 pt-8">7-Week Bootcamp</h4>
              <p className="text-lg">Hosted a 7-week STEM bootcamp and organized our own SciBowl tournament, giving over 100 students the chance to learn science in-depth, build teamwork skills, and experience the thrill of academic competition</p>
            </div>
            <div className="bg-white p-4 rounded-xl">
              <Image src="/landing/tournament.JPG" alt="team" width={600} height={200} className="rounded-xl" />
              <h4 className="text-2xl font-bold text-blue-700 pt-8">In-Person Scibowl Tournament</h4>
              <p className="text-lg">Organized our own SciBowl tournament, recreating the excitement of a real science competition. Dozens of students participated in fast-paced, team-based rounds that challenged their knowledge in biology, chemistry, physics, earth science, and math. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-24" >
        <div className="mx-auto max-w-screen-xl px-4 py-8 space-y-12 lg:space-y-20 lg:px-4">
          <div className="lg:grid lg:grid-cols-2 xl:gap-16 items-center">
            <Image src="/landing/seed-image1.png" alt="team" width={600} height={200} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <div className="" id="enroll">
              <h3 className="text-4xl font-bold py-4 uppercase text-byellow">Join Us Today</h3>
              <p className="pt-4 text-xl">Ready to take your STEM skills to the next level? Join our weekly lessons, participate in tournaments, and gain the experience and resources you need to succeed</p>
              <button className="mt-8 bg-byellow px-8 rounded-full py-2 text-lg text-neutral-800 ">Enroll Now</button>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
