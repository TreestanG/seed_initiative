import { Page } from "@/payload-types";
import Link from "next/link";
import { Media } from '@/payload-types'
import Image from "next/image";
import RichText from "../RichText";

type SectionsType = NonNullable<Page["sections"]>[number];
type FeaturesSection = Extract<SectionsType, { blockType: "features" }>

export default async function Features({
    res
}: {
    res: FeaturesSection
}) {

    if(!res) return null
    const { heading, subheading, image, text, cta } = res

    const url = (image as Media).url

    return (
        <section className="w-full py-8 lg:py-24">
            <div className="mx-auto max-w-screen-xl px-4 py-8 space-y-12 lg:space-y-20 lg:px-4">
                <div className="lg:grid lg:grid-cols-2 xl:gap-16 ">
                    <Image src={url!} alt="team" width={600} height={200} className="hidden md:block" />
                    <div className=" place-content-center">
                        <h3 className="text-4xl font-bold pb-4 ">{heading}</h3>
                        <p className="text-byellow font-bold text-2xl pb-4">{subheading}</p>
                        <RichText content={text} />
                        {
                            cta?.link && (
                                <Link href={cta.link!}>
                                    <button className=" underline mt-4">{cta.label}</button>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
    
}