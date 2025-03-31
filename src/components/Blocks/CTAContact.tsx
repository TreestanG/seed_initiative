import { Page } from "@/payload-types";
import Link from "next/link"
import RichText from "../RichText";
import { Mail } from "lucide-react";

type SectionsType = NonNullable<Page["sections"]>[number];
type CTAContactSection = Extract<SectionsType, { blockType: "ctaContact" }>

export default function CTAContact({ res }: { res: CTAContactSection }) {
    const { heading, content, buttonText, link } = res

    return (
        <section className="w-full py-14 md:py-18 lg:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="p-8 md:p-10 lg:p-12">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-10">
                        <div className="mb-8 md:mb-0 md:max-w-2xl text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-700 mb-5 leading-tight">{heading}</h2>
                            <div className="prose max-w-none">
                                <RichText content={content} className="text-gray-600 leading-relaxed text-base md:text-lg" />
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Link href={`${link}`} className="inline-flex">
                                <button className="inline-flex items-center px-6 py-4 bg-brand-600 hover:cursor-pointer text-white font-medium shadow-sm hover:shadow-md transition-all duration-300">
                                    <Mail className="w-5 h-5 mr-2" />
                                    <span>{buttonText}</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}