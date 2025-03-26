import { Page } from "@/payload-types";
import Link from "next/link";
import { Media } from '@/payload-types'
import Image from "next/image";

type SectionsType = NonNullable<Page["sections"]>[number];
type SponsorsSection = Extract<SectionsType, { blockType: "sponsors" }>

export default async function Sponsors({
    res
}: {
    res: SponsorsSection
}) {
    if (!res) return null
    const { heading } = res
    let { subheading, sponsors } = res

    subheading = subheading || "We are extremely thankful to each and every one of our sponsors who have helped us come this far."
    sponsors = sponsors || []

    if (!sponsors.length) {
        return null;
    }

    return (
        <section className="w-full py-8 md:py-12 bg-white">
            <div className="container mx-auto px-6 md:px-8 flex flex-col items-center">
                <div className="text-center max-w-3xl mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{heading}</h2>
                    <p className="text-lg text-slate-600">{subheading}</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center w-full">
                    {sponsors.map((sponsor, index) => {
                        const image = (sponsor.logo as Media)
                        const href = sponsor.link || '#'
                        return (
                            (href && image) && (
                                <Link 
                                    key={index} 
                                    href={href}
                                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center w-full h-full"
                                    target="_blank"
                                >
                                    <Image 
                                        src={image.url!} 
                                        alt={image.alt} 
                                        width={180} 
                                        height={120} 
                                        className="object-contain max-h-24"
                                    />
                                </Link>
                            )
                        )
                    })}
                </div>
                
                <div className="mt-12 text-center">
                    <p className="text-slate-500 italic">Want to support our mission? <Link href="/sponsors" className="text-brand-600 hover:underline">Become a sponsor</Link></p>
                </div>
            </div>
        </section>
    )
}