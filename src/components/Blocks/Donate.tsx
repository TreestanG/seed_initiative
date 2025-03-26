'use client'

// src/components/Blocks/Donate.tsx
import Image from 'next/image'
import Link from 'next/link'
import { useIsMobile } from "@/hooks/use-mobile";
import { Media, Page } from "@/payload-types";
import { ArrowRight } from "lucide-react";

type SectionsType = NonNullable<Page["sections"]>[number];
type DonateSection = Extract<SectionsType, { blockType: "donate" }>

export default function Donate({ res }: {
    res: DonateSection
}) {
    const { heading, content, arrowImage, donateButton } = res

    const isMobile = useIsMobile()
    const img = (arrowImage as Media)

    return (
        <section className="w-full py-16 md:py-24">
            <div className="md:container mx-auto px-4 lg:px-6 relative">
                <div className="bg-white overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                    <div className="bg-brand-700 p-8 md:p-12">
                        <div className="flex flex-col h-full justify-center text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">{heading}</h2>
                            <p className="text-lg leading-relaxed text-brand-100 max-w-[40rem] pt-6 mx-auto lg:mx-0">
                                {content}
                            </p>

                            {isMobile && (
                                <div className="flex justify-center lg:justify-start mt-8">
                                    <Link href={donateButton.link} className="inline-flex items-center">
                                        <button className="px-8 py-4 bg-white text-brand-700 font-semibold shadow-sm hover:bg-brand-50 hover:shadow-md transition-all duration-300 rounded-md flex items-center space-x-2">
                                            <span>{donateButton.text}</span>
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {!isMobile && (
                        <div className="h-full w-full">
                            <iframe
                                src='https://hcb.hackclub.com/donations/start/seed-science-engagement-and-educational-development-initiative'
                                className="border-none w-full h-[600px]"
                                name="donateFrame"
                                style={{
                                    height: 'calc(100% - 2px)',
                                    maxHeight: '600px'
                                }}
                            />
                        </div>
                    )}
                </div>

                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block">
                    <div className="bg-brand-800 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md text-center">
                        Your donation makes a difference
                    </div>
                </div>
            </div>
        </section>
    )
} 