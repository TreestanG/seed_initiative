import { Page } from "@/payload-types";
import Link from "next/link";
import { Media } from '@/payload-types'
import Image from "next/image";
import RichText from "../RichText";
import { cn } from "@/lib/utils";

type SectionsType = NonNullable<Page["sections"]>[number];
type FeaturesSection = Extract<SectionsType, { blockType: "features" }>

export default async function Features({
    res
}: {
    res: FeaturesSection
}) {

    if(!res) return null
    const { heading, subheading, image, text, cta, headingClass, textClass } = res

    const img = (image as Media)

    return (
        <section className="w-full py-8 lg:py-24">
            <div className="mx-auto max-w-screen-xl px-4 py-8 space-y-12 lg:space-y-20 lg:px-4">
                <div className="lg:grid lg:grid-cols-2 xl:gap-16 ">
                    {img && <Image src={img.url!} alt={img.alt!} width={600} height={200} className="hidden md:block" />}
                    <div className=" place-content-center">
                        <h3 className={cn(headingClass, "text-4xl font-bold pb-2")}>{heading}</h3>
                        <p className="text-byellow font-bold text-2xl pb-4">{subheading}</p>
                        
                        {
                            text && (
                                <RichText content={text} className={textClass!}/>
                            )
                        }
                        {
                            (cta!.link && cta) && (
                                <Link href={cta.link!}>
                                    {cta.button ? (
                                        <button className="mt-8 bg-byellow px-8 rounded-full py-2 text-lg text-neutral-800 ">{cta.label}</button>

                                    ) : (
                                        <span className="underline mt-4 inline-block hover:text-blue-600">
                                            {cta.label}
                                        </span>
                                    )}
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
    
}