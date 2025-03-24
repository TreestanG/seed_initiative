
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
            <section style={{ height: `${height}rem` }}></section>
    )

}