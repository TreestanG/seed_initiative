import { Page } from "@/payload-types";
import Link from "next/link"
import RichText from "../RichText";
import { Mail } from "lucide-react";

type SectionsType = NonNullable<Page["sections"]>[number];
type CTAContactSection = Extract<SectionsType, { blockType: "ctaContact" }>

export default function CTAContact({ res }: { res: CTAContactSection }) {
    const { heading, content, buttonText, email } = res

    return (
        <section className="w-full py-16 md:py-20 to-white">
            <div className="container mx-auto px-4">
                <div className="w-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="mb-8 md:mb-0 md:max-w-2xl text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-700 mb-4">{heading}</h2>
                            <div className="prose prose-brand max-w-none">
                                <RichText content={content} className="text-gray-600 leading-relaxed" />
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-end md:ml-8">
                            <Link href={`mailto:${email}`} className="inline-flex">
                                <button className="inline-flex items-center px-6 py-4 bg-brand-600 text-white font-medium shadow-sm hover:bg-brand-700 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1">
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