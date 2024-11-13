"use client"

import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import Link from "next/link";

export default function About() {

    const isMobile = useIsMobile()

    return (
        <div className="w-full flex flex-col justify-center">
            <section className="relative w-screen h-[70vh] flex justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed ">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-700"></div>
                <div className="z-50 flex justify-center flex-col items-center">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold leading-snug">Our Supporters</h1>
                    <p className="text-yellow-400 font-bold uppercase text-2xl pt-8 text-center">Sponsors, Partners, + Donations</p>
                </div>
            </section>

            <section className="w-full mx-auto py-8 md:py-24">
                <div className="mx-auto max-w-screen-xl px-4 py-6 ">
                    <h2 className="text-4xl font-bold">Program Sponsors:</h2>
                    <div className="grid grid-cols-3 gap-8 items-center py-8">
                        <Image src="/landing/code-ninja.png" alt="codeninja" width={200} height={200} />
                        <Image src="/landing/techno-warriors.png" alt="codeninjas" width={200} height={200} />
                        <Image src="/landing/scarlet-serpents.PNG" alt="ftc" width={200} height={200} />
                    </div>
                </div>
            </section>

            <section className="w-full py-8 md:py-24">
                <div className="mx-auto max-w-screen-xl px-4 lg:grid lg:grid-cols-2">
                    <div className="mb-6">
                        <h2 className="text-2xl uppercase font-bold text-bcyan">Want to join the club?</h2>
                        <p className="leading-7 pt-4">Thanks to our supporters, Seed Initiative can continue to provide for the under-resourced students. In return, we&apos;re proud to offer <span className="text-bblue">recognition across all platforms and other benefits.</span> Please contact us for more information about becoming a supporter!</p>
                    </div>
                    <Link href="mailto:sucseedinitiative@gmail.com" className="justify-self-end self-center">
                        <button className=" px-8 py-4 border-bcyan border-2 hover:bg-cyan-100 hover:border-transparent">Contact Us</button>
                    </Link>
                </div>
            </section>

            <section className="mx-auto max-w-screen-xl px-4 lg:px-6 my-24 py-8 bg-indigo-700 rounded-none md:rounded-xl grid lg:grid-cols-2">
                <div>
                    <h2 className="text-4xl font-bold text-white">Too Much?</h2>
                    <p className="text-lg leading-8 text-white max-w-[40rem] pt-8">We get it—becoming a full sponsor is a big commitment. But every donation, big or small, helps making STEM education more accessible and exciting for students. Whether it&apos;s covering materials for hands-on tournaments or supporting travel to competition, your gift makes an impact. Consider making a one-time or monthly donation to help the next generation of scientists!</p>

                </div>
                {
                    isMobile ? <Link href="https://hcb.hackclub.com/donations/start/seed-science-engagement-and-educational-development-initiative" className=" self-stretch">
                        <button className="px-8 py-4 bg-byellow text-white rounded-xl hover:bg-white hover:text-indigo-700 mt-8">Donate Now</button>
                    </Link> : <iframe src="https://hcb.hackclub.com/donations/start/seed-science-engagement-and-educational-development-initiative" className="border-none rounded-xl justify-self-stretch h-[40rem]" name="donateFrame" scrolling="yes"></iframe>
                }
            </section>

        </div>
    )
}