import { Page } from "@/payload-types";

type SectionsType = NonNullable<Page["sections"]>[number];
type Buffer = Extract<SectionsType, { blockType: "buffer" }>

export default async function Buffer({
    res
}: {
    res: Buffer
}) {

    if (!res) return null
    const { height } = res

    return (
        <section>
            <div className="container mx-auto px-4 md:px-6" style={{ height: `${height}rem` }}></div>
        </section>
    )

}