import { Media, Page } from "@/payload-types"
import Image from 'next/image'
type SectionsType = NonNullable<Page["sections"]>[number];
type ImageSection = Extract<SectionsType, { blockType: "image" }>

export default function ImageComponent({ res }: { res: ImageSection }) {
    const { heading, image } = res
    const img = (image as Media)
    return (
        <section className="w-full py-8">
            <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-8 space-y-10 lg:px-4">
                <h3 className="text-4xl font-bold text-gray-800 text-center">{heading}</h3>
                <div className="relative h-[32rem] mt-8">
                    {img && <Image
                        src={img.url!}
                        alt={img.alt}
                        width={600}
                        height={600}
                        className="rounded-lg w-full h-full object-contain"
                    />}
                </div>
            </div>
        </section>
    )
}
