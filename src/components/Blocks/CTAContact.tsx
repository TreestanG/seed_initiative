import { Page } from "@/payload-types";
import Link from "next/link"
import RichText from "../RichText";

type SectionsType = NonNullable<Page["sections"]>[number];
type CTAContactSection = Extract<SectionsType, { blockType: "ctaContact" }>

export default function CTAContact({ res }: { res: CTAContactSection }) {

    const { heading, content, buttonText, email } = res

    return (
        <section className="w-full py-8 md:py-12">
                <div className="container mx-auto px-4 lg:grid lg:grid-cols-2">
                    <div className="mb-6">
                        <h2 className="text-2xl uppercase font-bold text-amber-700">{heading}</h2>
                        <RichText content={content} className="max-w-[40rem] pt-4 leading-7" />
                    </div>
                    <Link href={`mailto:${email}`} className="justify-self-end self-center">
                        <button className="px-8 py-4 hover:cursor-pointer border-amber-700 border-2 rounded-md hover:bg-amber-50 hover:border-transparent transition-all duration-300 hover:scale-105">
                            {buttonText}
                        </button>
                    </Link>
                </div>
        </section>
    )
}