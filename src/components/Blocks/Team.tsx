// src/components/Blocks/Team.tsx
import { Media, Page } from '@/payload-types';
import MeetTeamCard from '../MeetTeamCard'

type SectionsType = NonNullable<Page["sections"]>[number];
type TeamSection = Extract<SectionsType, { blockType: "team" }>

const getImageUrl = (image?: Media | number | null) => {
    if (!image) return '/placeholder-team.png'
    if (typeof image === 'number') return '/placeholder-team.png'
    return (image as Media).url ?? '/placeholder-team.png'
}

export default function Team({ res }: { res: TeamSection }) {
    const { heading, founders, officers, teachers } = res

    return (
        <div className="w-full flex flex-col justify-center">
            <section className="relative w-screen h-[70vh] flex justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-700"></div>
                <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold leading-snug z-50">
                    {heading}
                </h1>
            </section>

            <section className="px-4 py-8 space-y-12 lg:space-y-20 lg:py-8 lg:px-24 w-full">
                <h3 className="text-2xl font-bold">Founders</h3>
                <div className="responsive-grid">
                    {founders.map((founder) => {
                        const img = getImageUrl(founder.image)
                        return (
                            <MeetTeamCard
                                key={founder.name}
                                image={img}
                                name={founder.name}
                                title={founder.title}
                            />
                        )
                    })}
                </div>

                <h3 className="text-2xl font-bold">Officers</h3>
                <div className="responsive-grid">
                    {officers.map((officer) => {
                        const img = getImageUrl(officer.image)
                        console.log(officer.image)
                        return (
                            <MeetTeamCard
                                key={officer.name}
                                image={img}
                                name={officer.name}
                                title={officer.title}
                            />
                        )
                    })}
                </div>

                <h3 className="text-2xl font-bold">Teachers</h3>
                <div className="responsive-grid">
                    {teachers.map((teacher) => {
                        const img = getImageUrl(teacher.image)
                        return (
                            <MeetTeamCard
                                key={teacher.name}
                                image={img}
                                name={teacher.name}
                                title={teacher.title}
                            />
                        )
                    })}
                </div>
            </section>
        </div>
    )
}