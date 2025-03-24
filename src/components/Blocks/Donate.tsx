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
        <section className="mx-auto max-w-(--breakpoint-xl) px-4 lg:px-6 my-24 py-8 bg-indigo-700 rounded-none md:rounded-xl grid lg:grid-cols-2 gap-8">
            <div className="flex flex-col justify-between">
                <div>
                        <h2 className="text-4xl font-bold text-white">{heading}</h2>
                        <p className="text-lg leading-8 text-white max-w-[40rem] pt-8">
                            {content}
                        </p>
                    </div>
                    <div className="relative h-full mt-8">
                        {img && <Image
                            src={img.url!}
                            alt="donate"
                            className="object-contain"
                            width={600}
                            height={600}
                        />}
                    </div>
                </div>

                {isMobile ? (
                    <Link href={`mailto:${donateButton.email}`} className="self-stretch hover:cursor-pointer">
                        <button className="px-8 py-4 bg-byellow text-white rounded-xl hover:bg-white hover:text-indigo-700 mt-8">
                            {donateButton.text}
                        </button>
                    </Link>
                ) : (
                    <iframe
                        src='https://hcb.hackclub.com/donations/start/seed-science-engagement-and-educational-development-initiative'
                        className="border-none rounded-xl justify-self-stretch h-[40rem]"
                        name="donateFrame"
                        scrolling="yes"
                    />
                )}
        </section>
    )
} 