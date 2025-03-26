'use client'

// src/components/Blocks/Donate.tsx
import Image from 'next/image'
import Link from 'next/link'
import { useIsMobile } from "@/hooks/use-mobile";
import { Media, Page } from "@/payload-types";

type SectionsType = NonNullable<Page["sections"]>[number];
type DonateSection = Extract<SectionsType, { blockType: "donate" }>

export default function Donate({ res }: {
    res: DonateSection
}) {
    const { heading, content, arrowImage, donateButton } = res

    const isMobile = useIsMobile()
    const img = (arrowImage as Media)

    return (
        <section className="w-full py-8 md:py-12">
            <div className="container mx-auto px-4 lg:px-6 bg-amber-800 rounded-none md:rounded-xl grid lg:grid-cols-2 gap-4 md:gap-8 p-8 md:p-12">
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">{heading}</h2>
                        <p className="text-lg leading-8 text-white max-w-[40rem] pt-8">
                            {content}
                        </p>
                    </div>

                </div>

                {isMobile ? (
                    <Link href={donateButton.link} className="self-stretch hover:cursor-pointer">
                        <button className="px-8 py-4 bg-white text-amber-800 font-semibold shadow-sm hover:bg-amber-50 hover:shadow-md transition-all duration-300 mt-8">
                            {donateButton.text}
                        </button>
                    </Link>
                ) : (
                    <>
                        <div className="relative h-full mt-8">
                            {img && <Image
                                src={img.url!}
                                alt="donate"
                                className="object-contain"
                                width={600}
                                height={600}
                            />}
                        </div>
                        <iframe
                            src='https://hcb.hackclub.com/donations/start/seed-science-engagement-and-educational-development-initiative'
                            className="border-none rounded-lg justify-self-stretch h-[40rem] shadow-md"
                            name="donateFrame"
                            scrolling="yes"
                        />
                    </>
                )}
            </div>
        </section>
    )
} 