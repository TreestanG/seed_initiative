import { Page } from "@/payload-types";
import Link from "next/link";
import { Media } from '@/payload-types'
// import { ChevronRight } from "lucide-react";

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
                
                <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-24 relative z-10">
                    <div className="p-8 md:p-10 max-w-2xl mx-auto">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center leading-tight">
                            {heading}
                        </h1>
                        {subheading && (
                            <p className="mt-8 text-base md:text-lg text-white max-w-3xl text-center leading-relaxed">
                                {subheading}
                            </p>
                        )}
                        {cta && cta.length > 0 && (
                            <div className="mt-10 flex flex-wrap gap-4 justify-center">
                                {cta.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link ?? '#'}
                                        className={`${colors[index]} border-2 px-6 py-3 font-medium text-white 
                                        transition-all duration-300 shadow-sm hover:shadow-md`}
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
            className={`relative w-full min-h-[50vh] flex items-center pb-28 ${!url ? 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700' : 'bg-cover bg-center bg-no-repeat'}`}
            style={url ? { backgroundImage: `url(${url})` } : undefined}
        >
            {/* Overlay gradient */}
            {url && <div className="absolute inset-0 bg-black/35" />}

            <div className="md:container relative">
                <div className={`
                    bg-white md:rounded-lg shadow-md p-8 md:p-10 max-w-2xl translate-y-60 z-10
                    w-full
                `}>
                    {/* <Link href="/" className="px-4 py-2 border-2 border-brand-600 group transition-all duration-300 hover:bg-brand-50 hover:text-brand-600 rounded-lg flex items-center gap-2 mb-8">
                        <p className="text-brand-600 font-bold text-sm uppercase">new</p>
                        <p className="font-medium">Our 2025 Program is here! Click to learn more </p>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300 text-black" />
                    </Link> */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center md:text-left leading-tight">
                        {heading}
                    </h1>
                    {subheading && (
                        <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-700 text-center md:text-left leading-relaxed">
                            {subheading}
                        </p>
                    )}
                    {cta && cta.length > 0 && (
                        <div className="mt-8 md:mt-10 grid grid-cols-2 gap-4">
                            {cta.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link ?? '#'}
                                    className={`${colors[index]} px-6 py-3 md:py-4 font-medium text-white
                                    transition-all duration-300 text-sm uppercase 
                                    shadow-sm hover:shadow-md text-center`}
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