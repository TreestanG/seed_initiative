"use client"

import { Button } from "@/components/ui/button";
import NumberTicker from "@/components/ui/number-ticker";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

export default function Home() {
  const titleRef = useRef(null)
  const sloganRef = useRef(null)
  const btn1Ref = useRef(null)
  const btn2Ref = useRef(null)
  const imgRef = useRef(null)
  const purpleRef = useRef(null)
  const secPurpleRef = useRef(null)

  const onClickEnroll = () => {
    gsap.to(window, { duration: 1, scrollTo: "#enroll" })
  }

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set([titleRef.current, sloganRef.current, btn1Ref.current, btn2Ref.current, imgRef.current, purpleRef.current], { clearProps: "all" })
        }
      })
      tl.from(titleRef.current, { y: -50, opacity: 0, duration: .5, rotateY: -90 })
      tl.from(sloganRef.current, { y: -50, opacity: 0, duration: .35, rotateY: -90 })
      tl.from(btn1Ref.current, { y: -50, opacity: 0, duration: .35, rotateY: -90 }, "-=.15")
      tl.from(btn2Ref.current, { y: -50, opacity: 0, duration: .35, rotateY: -90 }, "-=.05")
      tl.from(imgRef.current, { x: 50, opacity: 0, duration: .35 }, "-=.25")

      tl.from(purpleRef.current, { y: 50, opacity: 0, duration: .35 }, "")
      tl.from(secPurpleRef.current, { y: 50, opacity: 0, duration: .35 }, "")
    }
  )

  return (
    <div className="flex min-h-screen justify-center items-center flex-col">
      {/* Hero */}

      <div className="grid max-w-screen-xl px-4 pt-24 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug" ref={titleRef}>Empowering the Next Generation in STEM</h1>
          <p className="text-lg pt-4" ref={sloganRef}>Bringing Academic Competitions Within Reach for Under-Resourced Students</p>
          <div className="pt-8">
            <Button className="mr-4 mb-4" size="lg" variant="outline" ref={btn1Ref} >Get Involved</Button>
            <Button ref={btn2Ref} size='lg' onClick={onClickEnroll}>Enroll in Programs</Button>
          </div>
        </div>
        <Image src="/science.svg" alt="science" width={600} height={200} className="hidden lg:mt-0 lg:col-span-5 lg:flex" ref={imgRef} />
      </div>

      {/* sponsorships maybe */}
      <section className="w-full" >
        <Image ref={purpleRef} src="transition-about.svg" alt="wave" width={900} height={200} className="w-full contrast-start" />
      </section>

      {/* About */}

      <div className="w-full bg-bpurple " ref={secPurpleRef}>
        <h2 className="text-2xl font-bold text-center pb-8 bg-bpurple w-full text-white underline underline-offset-8">About Us</h2>
        <div className="mx-auto max-w-screen-xl px-4 py-8 space-y-12 lg:space-y-20 lg:px-4">
          <div className="lg:grid lg:grid-cols-2 xl:gap-16 " ref={secPurpleRef}>
            <div className=" text-white">
              <h3 className="text-4xl font-bold pb-4 ">Who We Are</h3>
              <p className="text-byellow font-bold text-2xl">We empower all students to succeed in STEM competitions</p>
              <p className="pt-4 text-white">We believe that every student, regardless of background, should have the opportunity to thrive in academic competitions. Through weekly lessons, hands-on workshops, and fully-funded tournament experiences, we provide the resources, mentorship, and support needed for success.</p>
              <button className=" underline mt-4">Learn More</button>
            </div>
            <Image src="/teaching.svg" alt="team" width={600} height={200} />
          </div>
        </div>
      </div>

      <section className="w-full">
        <Image src="about-impact.svg" alt="wave" width={900} height={200} className="w-full border-none" />
      </section>

      <h2 className="text-2xl font-bold text-center pb-8 bg-bcrimson w-full text-white underline underline-offset-8">Our Impact</h2>

      <div className="w-full bg-bcrimson" >
        <div className="mx-auto max-w-screen-xl px-4 py-8 space-y-12 lg:space-y-20 lg:px-4 ">
          <div className="lg:grid lg:grid-cols-3 xl:gap-16 space-y-4 items-center">
            <div className="lg:flex lg:items-center lg:flex-col ">
              <span className="text-3xl md:text-4xl lg:text-6xl text-white font-bold ">$<NumberTicker value={8000} className="text-white" />+</span>
              <p className="text-white text-lg font-medium md:pt-4">Raised Through Fundraisers</p>
            </div>
            <div className="lg:flex lg:items-center lg:flex-col ">
              <span className="text-3xl md:text-4xl lg:text-6xl text-white font-bold"><NumberTicker value={150} className="text-white" />+</span>
              <p className="text-white text-lg font-medium md:pt-4">Students Taught</p>
            </div>
            <div className="lg:flex lg:items-center lg:flex-col ">
              <span className="text-3xl md:text-4xl lg:text-6xl text-white font-bold"><NumberTicker value={500} className="text-white" />+</span>
              <p className="text-white text-lg font-medium md:pt-4">Volunteer Hours Awarded</p>
            </div>
          </div>
          <div className="w-full flex flex-col md:items-center">
            <p className="text-white max-w-[50rem] md:text-center ">With the generous support of our fiscal sponsor, <Link className="font-bold" href="https://hackclub.com/">Hack Club</Link>, and sponsors like <Link href="https://www.codeninjas.com/" className="font-bold">Code Ninjas</Link> and FTC teams <span className="font-bold">TechnoWarriors and Scarlet Serpents</span>, we&apos;re making an impact in our community.</p>
          </div>
        </div>
      </div>

      <section className="w-full">
        <Image src="about-cta-donations.svg" alt="wave" width={900} height={75} className="w-full border-none contrast-end" />
      </section>

      <h2 className="text-2xl font-bold md:text-center w-full underline underline-offset-8 px-4 pt-20">How We Make <span className="text-bpurple">Differences</span></h2>

      <div className="mx-auto max-w-screen-xl px-4 py-8 space-y-12 lg:space-y-20 lg:py-24 lg:px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-2 md:items-center justify-center lg:w-1/3">
            <GraduationCap size={48} strokeWidth={2} className="text-bpurple" />
            <h3 className="text-xl md:text-2xl font-bold md:text-center">Weekly STEM Lessons</h3>
            <p className="text-neutral-600 leading-6 tracking-wide md:text-center">Our engaging lessons are designed to prepare students for competition while developing skills in science, engineering, and math.</p>
          </div>
          <div className="flex flex-col gap-2 md:items-center justify-center lg:w-1/3">
            <Trophy size={48} strokeWidth={2} className="text-bpurple" />
            <h3 className="text-xl md:text-2xl font-bold md:text-center">Tournament Hosting</h3>
            <p className="text-neutral-600 leading-6 tracking-wide md:text-center">We organize local and regional STEM competitions, giving students the opportunity to showcase their skills and compete with peers.</p>
          </div>
          <div className="flex flex-col gap-2 md:items-center justify-center lg:w-1/3">
            <Briefcase size={48} strokeWidth={2} className="text-bpurple" />
            <h3 className="text-xl md:text-2xl font-bold md:text-center">Expense-Paid Competitions</h3>
            <p className="text-neutral-600 leading-6 tracking-wide md:text-center">Through sponsorships and fundraising, we cover travel costs for students to participate in national and international STEM tournaments.</p>
          </div>
        </div>
      </div>

      <section className="w-full bg-bpurple py-6 grid md:grid-cols-2 gap-8 justify-center mx-auto items-center px-4">
        <Image src="donations.svg" width={160} height={200} alt="donations" className="hidden md:block justify-self-end"/>
        <div>
          <h2 className="text-2xl font-bold text-white">Support Our Mission</h2>
          <p className="text-white text-xl font-medium max-w-[36rem]">Your donation helps us provide resources, mentorship, and support to under-resourced students in STEM competitions.</p>
          <Button className="mt-4 bg-white text-black" size="lg" >Donate Now</Button>
        </div>
      </section>

      <div className="w-full py-24" >
        <div className="mx-auto max-w-screen-xl px-4 py-8 space-y-12 lg:space-y-20 lg:px-4">
          <div className="lg:grid lg:grid-cols-2 xl:gap-16 items-center">
            <Image src="/seed-image1.png" alt="team" width={600} height={200} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            <div className="" id="enroll">
              <h3 className="text-4xl font-bold pb-4 uppercase text-byellow">Join Us Today</h3>
              <p className="pt-4 text-xl">Ready to take your STEM skills to the next level? Join our weekly lessons, participate in tournaments, and gain the experience and resources you need to succeed</p>
              <button className="mt-8 bg-byellow px-8 rounded-full py-2 text-lg text-neutral-800 ">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
