import Image from "next/image";

export default function About() {
    return (
        <div className="w-full flex flex-col justify-center">

            <section className="relative w-screen h-[70vh] flex justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/about/about-banner.png')]">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 via-transparent to-zinc-800"></div>

            </section>

            <section className="py-24 flex items-center flex-col">
                <h2 className="text-4xl font-bold text-center">About Seed Initiative</h2>
                <p className="text-center max-w-[40rem] pt-8 leading-8">At <span className="font-semibold text-bblue">Seed Initiative</span>, we empower under-resourced middle and high school students to excel in STEM academic competitions by providing essential resources, workshops, and travel opportunities.</p>
            </section>

            <section className="py-24">
                <div className="mx-auto max-w-screen-xl px-4 space-y-12 lg:space-y-20 lg:px-4">
                    <div className="lg:grid lg:grid-cols-2 xl:gap-16 items-center">
                        <Image src="/about/our-story.jpg" alt="team" width={600} height={200} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        <div className="" id="enroll">
                            <h3 className="text-4xl font-bold py-4 uppercase text-byellow">Our Story</h3>
                            <p className="pt-4 leading-8">SEED started as a substitute for a middle school science bowl club. After Horner Middle School students struggled to form a club due to a lack of support from the school, members of the Irvington High School science bowl club stepped in, forming the Bay Area Science Bowl Initiative (BASBI). BASBI recruited volunteers from Irvington High School to teach the five science bowl topics: biology, chemistry, physics, earth and space science, and math. Over the summer of 2024, every weekday for seven weeks, BASBI taught online classes to over 100 Horner students interested in science bowl. At the end of the program, BASBI hosted an in-person tournament simulating the science bowl competition experience. The program was renamed to the SEED (Science Engagement and Educational Development) Initiative, which strives to bring to middle school students what BASBI did: advanced knowledge of important scientific topics and a passion for science bowl competitions.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}