import MeetTeamCard from "@/components/MeetTeamCard";

const founders = [
    {
        image: "/placeholder-team.png",
        name: "Samyuktha Gopinath Lakshmi",
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
        name: "Arjun Murugappan",
        title: "Chief Operations Officer"
    },
    {
        image: "/placeholder-team.png",
        name: "Ishaan Agrawal",
        title: "Chief Technology Officer"
    },
    {
        image: '/placeholder-team.png',
        name: 'Jerry Sun',
        title: 'Chief Financial Officer'
    },
    {
        image: "/placeholder-team.png",
        name: "Tristan Gee",
        title: "Chief Web and Design Officer"
    }
]


export default function About() {
    return (
        <div className="w-full flex flex-col justify-center">
            <section className="relative w-screen h-[70vh] flex justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/about/about-banner.png')]">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 via-transparent to-zinc-800"></div>
            </section>
            <h2 className="text-xl font-semibold md:text-center w-full px-4 pt-20">Meet the Team</h2>
            <section className=" px-4 py-8 space-y-12 lg:space-y-20 lg:py-8 lg:px-24 w-full">
                <h3 className="text-2xl font-bold">Founders</h3>
                <div className="responsive-grid">
                    {
                        founders.map((founder) => {
                            return (
                                <MeetTeamCard key={founder.name} image={founder.image} name={founder.name} title={founder.title} />
                            )
                        })
                    }
                </div>
                <h3 className="text-2xl font-bold">Officers</h3>
                <div className="responsive-grid ">
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