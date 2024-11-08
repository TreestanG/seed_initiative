import MeetTeamCard from "@/components/MeetTeamCard";
import Image from "next/image";

const founders = [
    {
        image: "/placeholder-team.png",
        name: "Samyuktha ",
        title: "Co-Founder"
    },
    {
        image: "/placeholder-team.png",
        name: "Roland Pratt",
        title: "Co-Founder"
    },
    {
        image: "/placeholder-team.png",
        name: "Avyukt Bhardwaj",
        title: "Co-Founder"
    }
]

const officers = [
    {
        image: "/placeholder-team.png",
        name: "Arjun M.",
        title: "Chief Operations Officers"
    },
    {
        image: "/placeholder-team.png",
        name: "Ishaan Agrawal",
        title: "Chief Technology Officers"
    },
    {
        image: '/placeholder-team.png',
        name: 'Jerry Sun',
        title: 'Chief Financial Officer'
    },
    {
        image: "/placeholder-team.png",
        name: "Tristan Gee",
        title: "Chief Web Officer"
    }
]


export default function About() {
    return (
        <div className="w-full flex flex-col justify-center">
            <Image src="/about-banner.jpg" alt="science" width={600} height={200} className="w-full" />
            <section className="py-24 flex items-center flex-col">
                <h2 className="text-3xl font-bold text-center">About Seed Initiative</h2>
                <p className="text-center max-w-[40rem] pt-8 leading-8">At <span className="font-semibold text-bblue">Seed Initiative</span>, we empower under-resourced middle and high school students to excel in STEM academic competitions by providing essential resources, workshops, and travel opportunities.</p>
            </section>

            <section className="py-24">
                <div className="mx-auto max-w-screen-xl px-4 space-y-12 lg:space-y-20 lg:px-4">
                    <div className="lg:grid lg:grid-cols-2 xl:gap-16 items-center">
                        <Image src="/our-story.jpg" alt="team" width={600} height={200} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        <div className="" id="enroll">
                            <h3 className="text-4xl font-bold py-4 uppercase text-byellow">Our Story</h3>
                            <p className="pt-4 leading-8">Lorem ipsum odor amet, consectetuer adipiscing elit. Morbi auctor netus faucibus eu feugiat. Aenean semper vulputate nulla pulvinar integer orci aliquam blandit. Conubia cursus ridiculus a mauris cubilia bibendum. Tempus class dignissim tortor accumsan fermentum. Sem justo placerat eleifend torquent semper justo. Nullam posuere vehicula quam turpis bibendum fusce suspendisse. Lacus torquent sociosqu a arcu curae aliquet maecenas molestie. Justo dui vivamus porttitor per integer euismod leo. Iaculis conubia nostra augue nunc risus venenatis primis ad amet. Quam hac nullam tortor ornare nam. Metus nullam vehicula orci ut vel, gravida pulvinar blandit amet. Dui dui vulputate urna etiam venenatis turpis magnis, lobortis porta. Nec et dictumst lacinia senectus nullam dui quam massa. Auctor et turpis sed eu suscipit.</p>
                        </div>
                    </div>
                </div>
            </section>

            <h2 className="text-xl font-semibold md:text-center w-full px-4 pt-20">Meet the Team</h2>

            <section className=" px-4 py-8 space-y-12 lg:space-y-20 lg:py-8 lg:px-24 w-full">
                <h3 className="text-2xl font-bold">Founders</h3>

                <div className="grid lg:grid-cols-3 gap-x-6 w-full">
                    {
                        founders.map((founder) => {
                            return (
                                <MeetTeamCard key={founder.name} image={founder.image} name={founder.name} title={founder.title} />
                            )
                        })  
                    }
                </div>

                <h3 className="text-2xl font-bold">Officers</h3>
                <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-x-6 w-full gap-y-6 ">
                    {
                        officers.map((officer) => {
                            return (
                                <MeetTeamCard key={officer.name} image={officer.image} name={officer.name} title={officer.title} />
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}