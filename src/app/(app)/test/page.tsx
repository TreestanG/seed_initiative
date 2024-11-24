import { getPayload } from "payload";
import config from '@payload-config'
import Hero from "@/components/Blocks/Hero";
import Features from "@/components/Blocks/Feature";
import Sponsors from "@/components/Blocks/Sponsors";
import Banner from '@/components/Blocks/Banner'
import Stats from '@/components/Blocks/Stats'
import Summer from '@/components/Blocks/Summer'

export default async function Page() {
    const payload = await getPayload({ config })
    const res = await payload.find({
        collection: 'pages',
        depth: 2,
        where: {
            title: {
                equals: "test"
            }
        }
    })

    const page = res.docs[0]
    const blocks = page?.sections || []

    return (
        <div>
            {blocks.map((block, index) => {
                switch (block.blockType) {
                    case 'hero':
                        return <Hero key={index} res={block} />
                    case 'features':
                        return <Features key={index} res={block} />
                    case 'sponsors':
                        return <Sponsors key={index} res={block} />
                    case 'banner':
                        return <Banner key={index} res={block} />
                    case 'stats':
                        return <Stats key={index} res={block} />
                    case "summer":
                        return <Summer key={index} res={block} />
                    default:
                        return null
                }
            })}
        </div>
    )

}