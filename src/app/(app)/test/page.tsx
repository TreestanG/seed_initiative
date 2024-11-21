import { getPayload } from "payload";
import config from '@payload-config'
import Hero from "@/components/Blocks/Hero";
import Features from "@/components/Blocks/Feature";

export default async function Page() {
    const payload = await getPayload({config})
    const res = await payload.find({
        collection: 'pages',
        depth: 2,
        where: {
            title: {
                equals: "test"
            }
        }
    })

    const heroContent = res.docs[0].sections!.find((section) => section.blockType === 'hero')!
    const featureContent = res.docs[0].sections!.find((section) => section.blockType === 'features')!

    return (
        <div>
            <Hero res={heroContent} />
            <Features res={featureContent} />
        </div>
    )
}