import { getPayload } from "payload";
import config from '@payload-config'
import Hero from "@/components/Blocks/Hero";
import Features from "@/components/Blocks/Feature";
import Sponsors from "@/components/Blocks/Sponsors";
import Banner from '@/components/Blocks/Banner'
import Stats from '@/components/Blocks/Stats'
import Summer from '@/components/Blocks/Summer'
import Description from "@/components/Blocks/Description";
import Team from "@/components/Blocks/Team";
import CTAContact from "@/components/Blocks/CTAContact";
import Donate from "@/components/Blocks/Donate";
import { notFound } from "next/navigation";

interface PageProps {
    params: {
        slug: string;
    };
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;

    const payload = await getPayload({ config })
    const res = await payload.find({
        collection: 'pages',
        depth: 2,
        where: {
            slug: {
                equals: slug || 'home'
            }
        }
    })

    const page = res.docs[0]

    if (!page) {
        notFound()
    }

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
                    case "description":
                        return <Description key={index} res={block} />
                    case 'team':
                        return <Team key={index} res={block} />
                    case 'ctaContact':
                        return <CTAContact key={index} res={block} />
                    case 'donate':
                        return <Donate key={index} res={block} />
                    default:
                        return null
                }
            })}
        </div>
    )
}

// Generate static paths at build time
export async function generateStaticParams() {
    const payload = await getPayload({ config })
    const pages = await payload.find({
        collection: 'pages',
        depth: 1,
    })

    return pages.docs.map((page) => ({
        slug: page.slug,
    }))
}