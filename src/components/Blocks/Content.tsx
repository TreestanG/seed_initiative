import { Page } from "@/payload-types";
import RichText from "../RichText";

type SectionsType = NonNullable<Page["sections"]>[number];
type Content = Extract<SectionsType, { blockType: "content" }>

export default function Content({
    res
}: {
    res: Content
}) {
    if (!res) return null
    const { content } = res

    return (
        <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="prose mx-auto max-w-4xl">
                    <RichText content={content} />
                </div>
            </div>
        </section>
    )
}
