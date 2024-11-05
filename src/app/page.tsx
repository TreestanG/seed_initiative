import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center flex-col">
      {/* Hero */}

      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28 h-[80vh] items-center">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">Empowering the Next Generation in STEM</h1>
          <p className="text-lg pt-4 ">Bringing Academic Competitions Within Reach for Under-Resourced Students</p>
          <div className="pt-8">
            <Button className="mr-4" variant="outline">Learn More</Button>
            <Button>Get Involved</Button>
          </div>
        </div>
        <Image src="/science.svg" alt="science" width={600} height={200} className="hidden lg:mt-0 lg:col-span-5 lg:flex" />
      </div>


      {/* About */}
      <h2 className="text-3xl font-bold text-center pb-8">About Us</h2>

      <div className="mx-auto max-w-screen-xl px-4 py-8 space-y-12 lg:space-y-20 lg:py-24 lg:px-4">
        <div className="lg:grid lg:grid-cols-2 xl:gap-16 ">
          <div className="">
            <h3 className="text-4xl font-bold pb-4">Who We Are</h3>
            <p className="text-primary font-bold text-2xl">We empower all students to succeed in STEM competitions</p>
            <p className="pt-4">We believe that every student, regardless of background, should have the opportunity to thrive in academic competitions. Through weekly lessons, hands-on workshops, and fully-funded tournament experiences, we provide the resources, mentorship, and support needed for success.</p>
            <button className="text-blue-600 underline mt-4">Learn More</button>
          </div>
          <Image src="/teaching.svg" alt="team" width={600} height={200} />
        </div>
      </div>
      
    </div>
  );
}
