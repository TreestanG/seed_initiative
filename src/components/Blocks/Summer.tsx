import { Media, Page } from "@/payload-types";
import Image from "next/image"
import RichText from "../RichText";

type SectionsType = NonNullable<Page["sections"]>[number];
type SummerSection = Extract<SectionsType, { blockType: "summer" }>

export default function Summer({ res }: { res: SummerSection }) {
    const { heading, achievements } = res

    return (
        <section className="w-full bg-blue-700 py-8">
            <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-8 space-y-10 lg:px-4">
                <h3 className="text-4xl font-bold text-white">{heading}</h3>
                <div className="lg:grid lg:grid-cols-2 space-y-8 lg:space-y-0 gap-16">
                    {achievements.map((achievement, index) => {
                        const img = (achievement.image as Media)
                        return (
                            <div key={index} className="bg-white p-4 rounded-xl">
                                {img && <Image
                                    src={img.url!}
                                    alt={img.alt}
                                    width={600}
                                    height={200}
                                    className="rounded-xl"
                                />}
                                <h4 className="text-2xl font-bold text-blue-700 pt-8">
                                    {achievement.title}
                                </h4>
                                <p className="text-sm text-gray-500 pb-4">{new Date(achievement.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} {achievement.endDate ? `- ${new Date(achievement.endDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}` : ''}</p>
                                {achievement.description && (
                                    <RichText content={achievement.description} className="max-w-[50rem] text-lg" />
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}