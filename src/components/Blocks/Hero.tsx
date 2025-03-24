import { Page } from "@/payload-types";
import Link from "next/link";
import { Media } from '@/payload-types'

type SectionsType = NonNullable<Page["sections"]>[number];
type HeroSection = Extract<SectionsType, { blockType: "hero" }>;

const colors = [
    'bg-amber-700',
    'bg-amber-300'
];

export default function Hero({
    res
}: {
    res: HeroSection
}) {
    if (!res) return null;
    const { heading, subheading, cta, background, heroType } = res;
    const url = (background as Media)?.url;

    // If no background image is provided
    if (heroType === 'sub') {
        return (
            <section className="relative w-full min-h-[80vh] flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
                <div className="container mx-auto px-4 py-20 relative z-10">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl p-8 md:p-12 max-w-2xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            {heading}
                        </h1>
                        {subheading && (
                            <p className="mt-6 text-lg text-gray-700 max-w-3xl">
                                {subheading}
                            </p>
                        )}
                        {cta && cta.length > 0 && (
                            <div className="mt-10 flex flex-wrap gap-4">
                                {cta.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link ?? '#'}
                                        className={`${colors[index]} px-8 py-3 text-lg font-medium text-white rounded-full 
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

    // With background image
    
    return (
        <section 
            className="relative w-full min-h-[50vh] flex items-center bg-cover bg-center bg-no-repeat pb-24"
            style={{ backgroundImage: `url(${url})` }}
        >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-black/35"></div>

            <div className="container mx-auto md:px-4 py-20 relative">
                <div className="bg-white md:rounded-lg shadow-2xl p-8 md:p-12 max-w-2xl translate-y-60 z-20">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        {heading}
                    </h1>
                    {subheading && (
                        <p className="mt-6 text-xl text-gray-700">
                            {subheading}
                        </p>
                    )}
                    {cta && cta.length > 0 && (
                        <div className="mt-10 flex flex-wrap gap-4">
                            {cta.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link ?? '#'}
                                    className={`${colors[index]} px-8 py-3 font-bold text-white rounded-none
                                    transition-all hover:bg-black    text-sm uppercase 
                                    shadow-lg hover:shadow-xl`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    )}
                    <Link href="/programs/2025" className="underline underline-offset-6 decoration-4 decoration-amber-600">
                        <p className="text-gray-700 pt-12 text-center font-medium hover:text-amber-600 transition-all duration-200 ">Our 2025 Program is here! Click to learn more!</p>
                    </Link>
                </div>
            </div>
        </section>
    );
}