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
            <section className="w-full justify-center flex flex-col items-center py-8 md:pt-24 p-4">
                <h1 className="font-bold text-4xl">{heading}</h1>
                <p className="pt-4 text-lg text-neutral-700">{subheading}</p>
                <div className="flex justify-center items-center flex-wrap">
                    {
                        sponsors.map((sponsor, index) => {
                            const image = (sponsor.logo as Media)
                            const href = sponsor.link || '#'
                            return (
                                (href && image) && <Link key={index} href={href}>
                                    <Image src={image.url!} alt={image.alt} width={200} height={200} />
                                </Link>
                            )
                        })
                    }
                </div>
            </section>
    )

}