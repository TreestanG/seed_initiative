import { Page } from "@/payload-types";
import Link from "next/link";
import { Media } from '@/payload-types'
import Image from "next/image";
import RichText from "../RichText";
import { cn } from "@/lib/utils";

type SectionsType = NonNullable<Page["sections"]>[number];
type PastWorkShowcaseSection = Extract<SectionsType, { blockType: "pastWorkShowcase" }>

export default async function PastWorkShowcase({
    res
}: {
    res: PastWorkShowcaseSection
}) {
    if(!res) return null

    const { heading, subheading, description, layout, projects, cta, headingClass, textClass, itemsPerRow } = res
    
    const getGridCols = () => {
        switch(itemsPerRow) {
            case '2': return 'md:grid-cols-2';
            case '4': return 'md:grid-cols-2 lg:grid-cols-4';
            case '3':
            default: return 'md:grid-cols-2 lg:grid-cols-3';
        }
    }
    
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
    
    return (
        <section className="w-full py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    {subheading && (
                        <p className="text-brand-600 font-semibold text-lg tracking-wide uppercase mb-3">
                            {subheading}
                        </p>
                    )}
                    
                    {heading && (
                        <h2 className={cn(
                            "text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 font-serif",
                            headingClass
                        )}>
                            {heading}
                        </h2>
                    )}
                    
                    {description && (
                        <div className="prose prose-lg max-w-none">
                            <RichText 
                                content={description} 
                                className={cn(
                                    "text-gray-600 leading-relaxed",
                                    textClass
                                )}
                            />
                        </div>
                    )}
                </div>

                {projects && projects.length > 0 && (
                    <>
                        {layout === 'grid' ? (
                            <div className={cn("grid gap-8", getGridCols())}>
                                {projects.map((project, index) => {
                                    const featuredImg = project.featuredImage as Media;
                                    return (
                                        <div key={index} className="flex flex-col rounded-xl overflow-hidden shadow-lg bg-white h-full">
                                            {featuredImg && (
                                                <div className="relative h-64 w-full">
                                                    <Image 
                                                        src={featuredImg.url!} 
                                                        alt={project.title} 
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-width: 768px) 100vw, 33vw"
                                                    />
                                                </div>
                                            )}
                                            
                                            <div className="p-6 flex-1 flex flex-col">
                                                <p className="text-brand-600 text-sm mb-2">
                                                    {formatDate(project.date)}
                                                </p>
                                                
                                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                                    {project.title}
                                                </h3>
                                                
                                                {project.description && (
                                                    <div className="prose prose-sm max-w-none mb-6 flex-1">
                                                        <RichText content={project.description} />
                                                    </div>
                                                )}
                                                
                                                {project.link && (
                                                    <div className="mt-auto pt-4">
                                                        <Link href={project.link}>
                                                            <span className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium underline underline-offset-4">
                                                                Learn more
                                                            </span>
                                                        </Link>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        ) : (
                            <div className="space-y-12">
                                {projects.map((project, index) => {
                                    const featuredImg = project.featuredImage as Media;
                                    return (
                                        <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                                            {featuredImg && (
                                                <div className="w-full md:w-1/3">
                                                    <div className="relative h-64 md:h-72 w-full rounded-lg overflow-hidden">
                                                        <Image 
                                                            src={featuredImg.url!} 
                                                            alt={project.title} 
                                                            fill
                                                            className="object-cover"
                                                            sizes="(max-width: 768px) 100vw, 33vw"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                            
                                            <div className={cn(
                                                "w-full",
                                                featuredImg ? "md:w-2/3" : "md:w-full"
                                            )}>
                                                <p className="text-brand-600 text-sm mb-2">
                                                    {formatDate(project.date)}
                                                </p>
                                                
                                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                                    {project.title}
                                                </h3>
                                                
                                                {project.description && (
                                                    <div className="prose prose-lg max-w-none mb-6">
                                                        <RichText content={project.description} />
                                                    </div>
                                                )}
                                                
                                                {project.link && (
                                                    <div className="mt-4">
                                                        <Link href={project.link}>
                                                            <span className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium underline underline-offset-4">
                                                                Learn more
                                                            </span>
                                                        </Link>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </>
                )}
                
                {(cta?.link && cta?.label) && (
                    <div className="mt-16 text-center">
                        <Link href={cta.link}>
                            {cta.button ? (
                                <button className={cn(
                                    "inline-flex hover:cursor-pointer items-center px-8 py-4",
                                    "text-white bg-brand-600 hover:bg-brand-700",
                                    "font-medium text-lg text-center",
                                    "transition-all duration-300",
                                    "shadow-md hover:shadow-lg"
                                )}>
                                    {cta.label}
                                </button>
                            ) : (
                                <span className={cn(
                                    "inline-flex items-center text-brand-600",
                                    "hover:text-brand-700 font-medium",
                                    "underline underline-offset-4"
                                )}>
                                    {cta.label}
                                </span>
                            )}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
} 