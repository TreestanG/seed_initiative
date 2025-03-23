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
    const { heading, subheading, cta, background } = res;

    // If no background image is provided
    if (!background) {
        return (
            <section className="relative w-full min-h-[80vh] flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        {heading}
                    </h1>
                    {subheading && (
                        <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                            {subheading}
                        </p>
                    )}
                    {cta && cta.length > 0 && (
                        <div className="mt-10 flex flex-wrap gap-4 justify-center">
                            {cta.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link ?? '#'}
                                    className={`${colors[index]} px-8 py-3 text-lg font-medium text-white transition-all duration-200 hover:opacity-90 hover:transform hover:scale-105`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        );
    }

    // With background image
    const url = (background as Media).url;
    
    return (
        <section 
            className="relative w-full min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${url})` }}
        >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className={`max-w-3xl ${subheading ? 'text-left' : 'text-center mx-auto'}`}>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        {heading}
                    </h1>
                    {subheading && (
                        <p className="mt-6 text-xl md:text-2xl text-gray-200">
                            {subheading}
                        </p>
                    )}
                    {cta && cta.length > 0 && (
                        <div className={`mt-10 flex flex-wrap gap-4 ${subheading ? 'justify-start' : 'justify-center'}`}>
                            {cta.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link ?? '#'}
                                    className={`${colors[index]} px-8 py-3 text-lg font-medium text-white  
                                    transition-all duration-200 hover:opacity-90 hover:transform hover:scale-105 
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