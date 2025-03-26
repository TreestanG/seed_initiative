import { Page } from "@/payload-types";
import Link from "next/link";
import { Media } from '@/payload-types'
import Image from "next/image";

type SectionsType = NonNullable<Page["sections"]>[number];
type Bannner = Extract<SectionsType, { blockType: "banner" }>

export default async function Banner({
    res
}: {
    res: Bannner
}) {

    if (!res) return null
    const { heading, description, cta, image } = res

    const img = (image as Media)

    return (
        <section className="w-full bg-amber-700 py-8 md:py-12 px-6 md:px-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="md:w-3/5 space-y-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">{heading}</h2>
                    <p className="text-white text-lg opacity-90 max-w-[36rem] leading-relaxed">{description}</p>

                    {(cta && cta.link) && (
                        <Link href={cta.link!} className="inline-block mt-2">
                            <button className="py-3 px-6 text-amber-800 font-semibold bg-white hover:cursor-pointer shadow-sm transition-all hover:bg-amber-50 hover:shadow-md">
                                {cta.label!}
                            </button>
                        </Link>
                    )}
                </div>
                {img && (
                    <div className="md:w-2/5 flex justify-center md:justify-end">
                        <Image 
                            src={img.url!} 
                            width={300} 
                            height={300} 
                            alt={img.alt} 
                            className="object-contain"
                        />
                    </div>
                )}
            </div>
        </section>
    )
}