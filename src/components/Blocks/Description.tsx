import { Page } from "@/payload-types";
import RichText from "../RichText";

type SectionsType = NonNullable<Page["sections"]>[number];
type DescriptionSection = Extract<SectionsType, { blockType: "description" }>

export default function Description({ res }: { res: DescriptionSection }) {
    const { heading, text } = res

    return (
        <section className="py-24 flex items-center flex-col">
            <h2 className="text-4xl font-bold text-center">{heading}</h2>
            <RichText content={text} className="max-w-[40rem] pt-8 leading-8 text-center" />
        </section>
    )
}