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
import { RefreshRouteOnSave } from "@/components/RefreshRouteOnSave"
import { Fragment } from "react";
import { Metadata } from "next";
import { WebPageStructuredData, BreadcrumbStructuredData } from "@/components/StructuredData";
import type { Page } from "@/payload-types";
import ImageComponent from "@/components/Blocks/Image";
import GetInvolved from "@/components/Blocks/GetInvolved";
import Buffer from "@/components/Blocks/Buffer";
import Timeline from "@/components/Blocks/Timeline";
import Testimonials from "@/components/Blocks/Testimonials";
import PastWorkShowcase from "@/components/Blocks/PastWorkShowcase";
import ProgramDetails from "@/components/Blocks/ProgramDetails";
import SponsorshipTiers from "@/components/Blocks/SponsorshipTiers";
// Type definition specific to this page (not using PageParams from slug)
interface PageWithMeta extends Page {
    name?: string;
    meta?: {
        title?: string;
        description?: string;
        image?: {
            url: string;
            alt?: string;
        };
    };
}

// Generate metadata specifically for the home page
export async function generateMetadata(): Promise<Metadata> {
    try {
        const payload = await getPayload({ config });
        const res = await payload.find({
            collection: 'pages',
            depth: 1,
            where: {
                slug: {
                    equals: 'home' // Always fetch 'home'
                }
            }
        });

        const page = res.docs[0] as PageWithMeta;

        if (!page) {
            return {
                title: 'Seed Initiative',
                description: 'Seed Initiative is a 501(c)(3) nonprofit organization created by passionate high schoolers dedicated to providing resources for students to compete in academic competitions.'
            };
        }

        // Get the base URL from environment variables
        const baseUrl = process.env.NODE_ENV === 'production'
            ? process.env.URL!
            : 'http://localhost:3000';

        const pageTitle = page.meta?.title || page.title || page.name || 'Home';
        const formattedTitle = `${pageTitle} | Seed Initiative`;

        return {
            title: formattedTitle,
            description: page.meta?.description || "Seed Initiative is a 501(c)(3) nonprofit organization created by passionate high schoolers dedicated to providing the resources for students to compete in academic competitions.",
            openGraph: {
                title: formattedTitle,
                description: page.meta?.description || "Seed Initiative is a 501(c)(3) nonprofit organization created by passionate high schoolers dedicated to providing the resources for students to compete in academic competitions.",
                url: baseUrl, // Root URL
                siteName: "Seed Initiative",
                images: page.meta?.image ? [
                    {
                        url: page.meta.image.url || '/ogbanner.png',
                        width: 1200,
                        height: 630,
                        alt: page.meta.image.alt || `${pageTitle} - Seed Initiative`,
                    }
                ] : [
                    {
                        url: '/ogbanner.png',
                        width: 1200,
                        height: 630,
                        alt: "Seed Initiative Banner",
                    }
                ],
                type: "website",
            },
            twitter: {
                card: "summary_large_image",
                title: formattedTitle,
                description: page.meta?.description || "Seed Initiative is a 501(c)(3) nonprofit organization created by passionate high schoolers dedicated to providing the resources for students to compete in academic competitions.",
                images: page.meta?.image ? [page.meta.image.url] : ['/ogbanner.png'],
            },
            alternates: {
                canonical: baseUrl, // Root URL
            }
        };
    } catch (error) {
        console.error('Error generating metadata for home page:', error);
        return {
            title: 'Seed Initiative',
            description: "Seed Initiative is a 501(c)(3) nonprofit organization created by passionate high schoolers dedicated to providing the resources for students to compete in academic competitions.",
        };
    }
}

// The Home Page component
export default async function HomePage() {
    const payload = await getPayload({ config })
    const res = await payload.find({
        collection: 'pages',
        depth: 2,
        where: {
            slug: {
                equals: 'home' // Always fetch 'home'
            }
        },
        draft: true // Consider setting to false for production builds if needed
    })

    const page = res.docs[0] as PageWithMeta;

    if (!page) {
        notFound()
    }

    const blocks = page?.sections || []

    // Get the base URL from environment variables
    const baseUrl = process.env.NODE_ENV === 'production'
        ? process.env.URL!
        : 'http://localhost:3000';

    // Create page title to avoid repetition
    const pageTitle = page.meta?.title || page.title || page.name || 'Home';

    // Create breadcrumb items specifically for home
    const breadcrumbItems = [
        {
            name: 'Home',
            item: baseUrl,
        }
    ];

    return (
        <Fragment>
            <RefreshRouteOnSave />

            {/* Add structured data */}
            <WebPageStructuredData
                name={pageTitle}
                description={page.meta?.description || "Seed Initiative is a 501(c)(3) nonprofit organization created by passionate high schoolers dedicated to providing the resources for students to compete in academic competitions."}
                url={baseUrl} // Root URL
                image={page.meta?.image?.url || `${baseUrl}/ogbanner.png`}
                datePublished={page.createdAt}
                dateModified={page.updatedAt || page.createdAt}
            />

            <BreadcrumbStructuredData items={breadcrumbItems} />

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
                    case 'image':
                        return <ImageComponent key={index} res={block} />
                    case 'getInvolved':
                        return <GetInvolved key={index} res={block} />
                    case 'buffer':
                        return <Buffer key={index} res={block} />
                    case 'pastWorkShowcase':
                        return <PastWorkShowcase key={index} res={block} />
                    case 'timeline':
                        return <Timeline key={index} res={block} />
                    case 'testimonials':
                        return <Testimonials key={index} res={block} />
                    case 'programDetails':
                        return <ProgramDetails key={index} res={block} />
                    case 'sponsorshipTiers':
                        return <SponsorshipTiers key={index} res={block} />
                    default:
                        return null
                }
            })}
        </Fragment>
    )
} 