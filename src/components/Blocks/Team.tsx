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
    const { founders, officers, teachers } = res

    return (
        <section className="w-full py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6 space-y-8">
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">Founders</h2>
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
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">Officers</h2>
                    <div className="responsive-grid">
                        {officers.map((officer) => {
                            const img = getImageUrl(officer.image)
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
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">Teachers</h2>
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
                </div>
            </div>
        </section>
    )
}