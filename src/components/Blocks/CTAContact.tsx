import { Page } from "@/payload-types";
import Link from "next/link"
import RichText from "../RichText";

type SectionsType = NonNullable<Page["sections"]>[number];
type CTAContactSection = Extract<SectionsType, { blockType: "ctaContact" }>

export default function CTAContact({ res }: { res: CTAContactSection }) {

    const { heading, content, buttonText, email } = res

    return (
        <section className="w-full py-8 md:py-24">
                <div className="mx-auto max-w-(--breakpoint-xl) px-4 lg:grid lg:grid-cols-2">
                    <div className="mb-6">
                        <h2 className="text-2xl uppercase font-bold text-bcyan">{heading}</h2>
                        <RichText content={content} className="max-w-[40rem] pt-4 leading-7" />
                    </div>
                    <Link href={`mailto:${email}`} className="justify-self-end self-center">
                        <button className="px-8 py-4 hover:cursor-pointer border-bcyan border-2 hover:bg-cyan-100 hover:border-transparent transition-all duration-300 hover:scale-105">
                            {buttonText}
                        </button>
                    </Link>
                </div>
        </section>
    )
}