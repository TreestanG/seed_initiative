import { Page } from "@/payload-types";
import Link from "next/link";
import { Media } from '@/payload-types'

type SectionsType = NonNullable<Page["sections"]>[number];
type HeroSection = Extract<SectionsType, { blockType: "hero" }>

const colors = [
    'bg-byellow',
    'bg-bcyan'
]

export default function Hero({
    res
}: {
    res: HeroSection
}) {

    if (!res) return null
    const { heading, subheading, cta, background } = res

    if (!background) {
        return (
            <section className="relative w-screen py-28 flex justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed ">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-700"></div>
                <div className="z-20 flex justify-center flex-col items-center">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold leading-snug">{heading}</h1>
                    <p className="text-yellow-400 font-bold uppercase text-2xl pt-8 text-center">{subheading}</p>
                </div>
            </section>
        )
    }

    const url = (background as Media).url

        return (
        <section className={`relative w-screen py-28 flex justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed`} style={{ backgroundImage: `url(${url})` }}>
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 via-transparent to-zinc-800"></div>
            <div className="flex flex-wrap md:flex-nowrap gap-4 relative z-10">
                <div className="relative px-4 pb-16 pt-8 mt-8 md:mt-0 md:w-7/12 md:px-6 ">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
                        {heading}
                    </h1>
                    <p className="text-white text-lg md:text-xl pt-4">
                        {subheading}
                    </p>
                    {
                        cta!.length ? (
                            <div className="flex gap-4 mt-6">
                                {
                                    cta!.map((item, index) => (
                                        <Link key={index} href={item.link!} className={`py-2 px-4 md:px-8 md:text-lg lg:text-xl rounded-full text-white font-semibold uppercase hover:brightness-90 ${colors[index]}`}>
                                            {item.label}
                                        </Link>
                                    ))
                                }
                            </div>
                        ) : null
                    }

                </div>
            </div>
        </section>
        )
}