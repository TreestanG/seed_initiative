"use client"

import { Button } from "@/components/ui/button";
import NumberTicker from "@/components/ui/number-ticker";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const titleRef = useRef(null)
  const sloganRef = useRef(null)
  const btn1Ref = useRef(null)
  const btn2Ref = useRef(null)
  const imgRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline()
      tl.from(titleRef.current, { y: -50, opacity: 0, duration: .25 })
      tl.from(sloganRef.current, { y: -50, opacity: 0, duration: .25 })
      tl.from(btn1Ref.current, { y: -50, opacity: 0, duration: .25 }, "-=.15")
      tl.from(btn2Ref.current, { y: -50, opacity: 0, duration: .25 }, "-=.05")
      tl.from(imgRef.current, { x: 50, opacity: 0, duration: .25 }, "-=.25")
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
            <Button className="mr-4" variant="outline" ref={btn1Ref} >Learn More</Button>
            <Button ref={btn2Ref}>Get Involved</Button>
          </div>
        </div>
        <Image src="/science.svg" alt="science" width={600} height={200} className="hidden lg:mt-0 lg:col-span-5 lg:flex" ref={imgRef}/>
      </div>

      {/* sponsorships maybe */}

      <section className="w-full">
        <Image src="transition-about.svg" alt="wave" width={900} height={200} className="w-full"/>
      </section>


      {/* About */}
      <h2 className="text-2xl font-bold text-center pb-8 bg-bpurple w-full text-white underline underline-offset-8">About Us</h2>

      <div className="w-full bg-bpurple">
        <div className="mx-auto max-w-screen-xl px-4 py-8 space-y-12 lg:space-y-20 lg:py-24 lg:px-4">
          <div className="lg:grid lg:grid-cols-2 xl:gap-16 ">
            <div className=" text-white">
              <h3 className="text-4xl font-bold pb-4 ">Who We Are</h3>
              <p className="text-byellow font-bold text-2xl">We empower all students to succeed in STEM competitions</p>
              <p className="pt-4 ">We believe that every student, regardless of background, should have the opportunity to thrive in academic competitions. Through weekly lessons, hands-on workshops, and fully-funded tournament experiences, we provide the resources, mentorship, and support needed for success.</p>
              <button className=" underline mt-4">Learn More</button>
            </div>
            <Image src="/teaching.svg" alt="team" width={600} height={200} />
          </div>
        </div>
      </div>

      <section className="w-full">
        <Image src="about-impact.svg" alt="wave" width={900} height={200} className="w-full" />
      </section>

      <h2 className="text-2xl font-bold text-center pb-8 bg-bcrimson w-full text-white underline underline-offset-8 ">Our Impact</h2>

      <div className="w-full bg-bcrimson">
        <div className="mx-auto max-w-screen-xl px-4 py-8 space-y-12 lg:space-y-20 lg:pb-24 lg:px-4 ">
          <div className="lg:grid lg:grid-cols-3 xl:gap-16 space-y-4 items-center">
            <div className="lg:flex lg:items-center lg:flex-col">
              <span className="text-3xl md:text-4xl lg:text-6xl text-white font-bold">$<NumberTicker value={5000} className="text-white" />+</span>
              <p className="text-white text-lg font-medium md:pt-4">Raised Through Fundraisers</p>
            </div>
            <div className="lg:flex lg:items-center lg:flex-col">
              <span className="text-3xl md:text-4xl lg:text-6xl text-white font-bold"><NumberTicker value={150} className="text-white" />+</span>
              <p className="text-white text-lg font-medium md:pt-4">Students Taught</p>
            </div>
            <div className="lg:flex lg:items-center lg:flex-col">
              <span className="text-3xl md:text-4xl lg:text-6xl text-white font-bold"><NumberTicker value={500} className="text-white" />+</span>
              <p className="text-white text-lg font-medium md:pt-4">Volunteer Hours Awarded</p>
            </div>
          </div>
          <div className="w-full flex flex-col md:items-center">
            <p className="text-white max-w-[50rem] md:text-center">With the generous support of our fiscal sponsor, <span className="font-bold">Hack Club</span>, and sponsors like <span className="font-bold">Code Ninjas</span> and FTC teams <span className="font-bold">TechnoWarriors and Scarlet Serpents</span>, we&apos;re making an impact in our community.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
