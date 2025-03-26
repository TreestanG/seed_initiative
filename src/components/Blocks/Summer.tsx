import { Media, Page } from "@/payload-types";
import Image from "next/image"
import RichText from "../RichText";

type SectionsType = NonNullable<Page["sections"]>[number];
type SummerSection = Extract<SectionsType, { blockType: "summer" }>

export default function Summer({ res }: { res: SummerSection }) {
    const { heading, achievements } = res

    return (
        <section className="w-full py-8 md:py-12">
            <div className="container mx-auto px-4 space-y-8 md:space-y-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-left">{heading}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {achievements.map((achievement, index) => {
                        const img = (achievement.image as Media)
                        return (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                                {img && 
                                    <div className="w-full h-64 md:h-72 relative">
                                        <Image
                                            src={img.url!}
                                            alt={img.alt}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                    </div>
                                }
                                <div className="p-6 md:p-8">
                                    <h4 className="text-xl md:text-2xl font-bold text-brand-700">
                                        {achievement.title}
                                    </h4>
                                    <p className="text-sm pb-4 text-brand-600 font-medium">
                                        {new Date(achievement.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} 
                                        {achievement.endDate ? 
                                            ` - ${new Date(achievement.endDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}` 
                                            : ''}
                                    </p>
                                    {achievement.description && (
                                        <div className="prose prose-slate max-w-none">
                                            <RichText content={achievement.description} className="text-slate-600" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}