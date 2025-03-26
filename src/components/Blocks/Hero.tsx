import { Page } from "@/payload-types";
import Link from "next/link";
import { Media } from '@/payload-types'
import { ChevronRight } from "lucide-react";

type SectionsType = NonNullable<Page["sections"]>[number];
type HeroSection = Extract<SectionsType, { blockType: "hero" }>;

const colors = [
    'bg-brand-700 border-brand-700',
    'bg-brand-300 border-brand-300'
];

export default function Hero({
    res
}: {
    res: HeroSection
}) {
    if (!res) return null;
    const { heading, subheading, cta, background, heroType } = res;
    const url = (background as Media)?.url;

    // For sub hero type
    if (heroType === 'sub') {
        return (
            <section 
                className={`relative w-full min-h-[80vh] flex items-center ${!url ? 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700' : 'bg-cover bg-center bg-no-repeat'}`}
                style={url ? { backgroundImage: `url(${url})` } : undefined}
            >
                {url && <div className="absolute inset-0 bg-black/35" />}
                
                <div className="container mx-auto px-4 py-20 relative z-10">
                    <div className="p-8 md:p-12 max-w-2xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight">
                            {heading}
                        </h1>
                        {subheading && (
                            <p className="mt-6 text-lg text-white max-w-3xl text-center">
                                {subheading}
                            </p>
                        )}
                        {cta && cta.length > 0 && (
                            <div className="mt-10 flex flex-wrap gap-4 justify-center">
                                {cta.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link ?? '#'}
                                        className={`${colors[index]} border-2 hover:border-0 px-8 py-3 text-lg font-medium text-white 
                                        transition-all duration-200 hover:opacity-90 hover:transform hover:scale-105`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    }

    // With background image for main hero type
    return (
        <section
            className={`relative w-full min-h-[50vh] flex items-center pb-24 ${!url ? 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700' : 'bg-cover bg-center bg-no-repeat'}`}
            style={url ? { backgroundImage: `url(${url})` } : undefined}
        >
            {/* Overlay gradient */}
            {url && <div className="absolute inset-0 bg-black/35" />}

            <div className="md:container mx-auto md:px-4 py-20 relative w-full">
                <div className={`
                    bg-white md:rounded-lg shadow-2xl p-4 py-8 md:p-12 max-w-2xl translate-y-60 z-20
                    w-full
                `}>
                    <Link href="/programs/2025" className="px-4 py-2 border-2 border-brand-600 group transition-all duration-300 hover:bg-brand-50 hover:text-brand-600 rounded-lg flex items-center gap-2 mb-6">
                        <p className="text-brand-600 font-bold text-sm uppercase">new</p>
                        <p className="font-medium">Our 2025 Program is here! Click to learn more </p>
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-all duration-200 text-black" />
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        {heading}
                    </h1>
                    {subheading && (
                        <p className="mt-6 text-base md:text-xl text-gray-700">
                            {subheading}
                        </p>
                    )}
                    {cta && cta.length > 0 && (
                        <div className="mt-10 flex flex-wrap gap-4">
                            {cta.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link ?? '#'}
                                    className={`${colors[index]} px-8 py-3 font-bold text-white
                                    transition-all hover:bg-black duration-300 text-sm uppercase 
                                    shadow-lg hover:shadow-xl`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}