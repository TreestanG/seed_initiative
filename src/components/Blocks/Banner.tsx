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
        <section className="w-full bg-bpurple py-6 md:py-8 xl:py-12 grid md:grid-cols-2 gap-8 justify-center mx-auto items-center px-4">
            {img && <Image src={img.url!} width={200} height={200} alt={img.alt} className="hidden md:block justify-self-end" />}
            <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">{heading}</h2>
                <p className="text-white text-lg md:text-xl font-medium max-w-[36rem]">{description}</p>

                {
                    (cta && cta.link) && (
                        <Link href={cta.link!}>
                            <button className="py-2 px-4 md:px-6 xl:px-8 md:text-lg lg:text-xl rounded-full text-white font-semibold uppercase bg-byellow hover:brightness-90 m-4 ml-0">
                                {cta.label!}
                            </button>
                        </Link>
                    )
                }
            </div>
        </section>
    )

}