import { Page } from "@/payload-types";
import RichText from "../RichText";

type SectionsType = NonNullable<Page["sections"]>[number];
type DescriptionSection = Extract<SectionsType, { blockType: "description" }>

export default function Description({ res }: { res: DescriptionSection }) {
    const { heading, text } = res

    return (
        <section className="w-full py-8 md:py-12">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-bold text-center">{heading}</h2>
                <RichText content={text} className="max-w-[40rem] pt-8 leading-8 text-center text-slate-700" />
            </div>
        </section>
    )
}