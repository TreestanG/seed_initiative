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

    const { heading, subheading, image, text, cta, headingClass, textClass, style } = res
    const img = (image as Media)
    
    const isContentRight = style === 'right'

    return (
        <section className="w-full py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className={cn(
                    "grid gap-8 lg:gap-16 items-center",
                    "grid-cols-1 lg:grid-cols-2"
                )}>
                    {/* Image Container */}
                    <div className={cn(
                        "relative h-[400px] lg:h-[600px]",
                        isContentRight ? "lg:order-1" : "lg:order-2"
                    )}>
                        {img && (
                            <Image 
                                src={img.url!} 
                                alt={img.alt!} 
                                fill
                                className="object-contain rounded-lg"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        )}
                    </div>

                    {/* Content Container */}
                    <div className={cn(
                        "flex flex-col",
                        isContentRight ? "lg:order-2" : "lg:order-1"
                    )}>
                        {subheading && (
                            <p className="text-amber-600 font-semibold text-lg tracking-wide uppercase ">
                                {subheading}
                            </p>
                        )}

                        <h3 className={cn(
                            "text-3xl lg:text-4xl font-bold text-gray-900 leading-tight pb-6",
                            headingClass
                        )}>
                            {heading}
                        </h3>

                        {/* Rich Text Content */}
                        {text && (
                            <div className="prose prose-lg max-w-none">
                                <RichText 
                                    content={text} 
                                    className={cn(
                                        "text-gray-600 leading-relaxed",
                                        textClass
                                    )}
                                />
                            </div>
                        )}

                        {/* CTA Button/Link */}
                        {(cta?.link && cta) && (
                            <div className="pt-4">
                                <Link href={cta.link}>
                                    {cta.button ? (
                                        <button className={cn(
                                            "inline-flex items-center px-6 py-3",
                                            "text-white bg-amber-600 hover:bg-amber-700",
                                            "font-medium text-lg hover:cursor-pointer",
                                            "transition-all duration-300 ",
                                            "shadow-md hover:shadow-lg"
                                        )}>
                                            {cta.label}
                                        </button>
                                    ) : (
                                        <span className={cn(
                                            "inline-flex items-center text-amber-600",
                                            "hover:text-amber-700 font-medium",
                                            "underline underline-offset-4"
                                        )}>
                                            {cta.label}
                                        </span>
                                    )}
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}