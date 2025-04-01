import { Media, Page } from "@/payload-types"
import Image from 'next/image'
type SectionsType = NonNullable<Page["sections"]>[number];
type ImageSection = Extract<SectionsType, { blockType: "image" }>

export default function ImageComponent({ res }: { res: ImageSection }) {
    const { heading, image } = res
    const img = (image as Media)
    return (
        <section className="w-full py-8 md:py-12">
            <div className="container mx-auto px-4 py-8 space-y-10">
                <h3 className="text-3xl md:text-4xl font-bold text-brand-700 text-center">{heading}</h3>
                <div className="relative h-[32rem] mt-8">
                    {img && <Image
                        src={img.url!}
                        alt={img.alt}
                        width={600}
                        height={600}
                        className=" w-full h-full object-contain"
                    />}
                </div>
            </div>
        </section>
    )
}
