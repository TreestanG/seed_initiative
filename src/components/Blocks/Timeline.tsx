import { Page } from "@/payload-types";
import { Media } from '@/payload-types'
import Image from "next/image";
import RichText from "../RichText";
import { cn } from "@/lib/utils";
import TimelineClient from "./TimelineClient";

type SectionsType = NonNullable<Page["sections"]>[number];
type TimelineSection = Extract<SectionsType, { blockType: "timeline" }>;

export default async function Timeline({
    res
}: {
    res: TimelineSection
}) {
    if(!res) return null

    const { heading, subheading, description, events = [], headingClass, textClass, backgroundColor } = res
    
    const bgColors = {
        light: "bg-gray-50",
        dark: "bg-gray-900 text-white",
        brand: "bg-brand-50"
    }
    
    const bgColor = backgroundColor ? bgColors[backgroundColor] : bgColors.light
    
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long'
        });
    }
    
    return (
        <section className={cn("w-full py-16 md:py-24", bgColor)}>
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    {subheading && (
                        <p className={cn(
                            "font-semibold text-lg tracking-wide uppercase mb-3",
                            backgroundColor === 'dark' ? "text-brand-400" : "text-brand-600"
                        )}>
                            {subheading}
                        </p>
                    )}
                    
                    {heading && (
                        <h2 className={cn(
                            "text-3xl lg:text-5xl font-bold leading-tight mb-6 font-serif",
                            backgroundColor === 'dark' ? "text-white" : "text-gray-900",
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
                                    backgroundColor === 'dark' ? "text-gray-300" : "text-gray-600",
                                    "leading-relaxed",
                                    textClass
                                )}
                            />
                        </div>
                    )}
                </div>

                {events && events.length > 0 && (
                    <div className="relative pl-8 md:pl-0 mt-16">
                        <TimelineClient />
                        
                        {/* Center line for larger screens */}
                        <div className="hidden md:block absolute left-1/2 h-full w-1 bg-brand-200 transform -translate-x-1/2"></div>
                        
                        {/* Left line for mobile */}
                        <div className="md:hidden absolute left-0 h-full w-1 bg-brand-200"></div>
                        
                        {events.map((event, index) => {
                            const eventImg = event.image as Media;
                            const isEven = index % 2 === 0;
                            
                            return (
                                <div 
                                    key={index} 
                                    className={cn(
                                        "timeline-item relative mb-16 last:mb-0",
                                        "md:grid md:grid-cols-2 md:gap-8 items-center"
                                    )}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 w-5 h-5 rounded-full bg-brand-600 z-10 transform -translate-x-2 md:left-1/2 md:-translate-x-1/2"></div>
                                    
                                    {/* Content arrangement based on even/odd */}
                                    <div className={cn(
                                        "mb-8 md:mb-0",
                                        isEven ? "md:col-start-1" : "md:col-start-2"
                                    )}>
                                        <div className={cn(
                                            "h-full p-6 rounded-lg shadow-md",
                                            backgroundColor === 'dark' ? "bg-gray-800" : "bg-white"
                                        )}>
                                            <p className="text-brand-600 text-sm font-medium mb-1">
                                                {formatDate(event.date)}
                                            </p>
                                            
                                            <h3 className={cn(
                                                "text-xl font-bold mb-4",
                                                backgroundColor === 'dark' ? "text-white" : "text-gray-900"
                                            )}>
                                                {event.title}
                                            </h3>
                                            
                                            {event.description && (
                                                <div className="prose prose-sm max-w-none">
                                                    <RichText 
                                                        content={event.description} 
                                                        className={backgroundColor === 'dark' ? "text-gray-300" : "text-gray-600"}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* Image arrangement based on even/odd */}
                                    <div className={cn(
                                        isEven ? "md:col-start-2" : "md:col-start-1 md:row-start-1"
                                    )}>
                                        {eventImg && (
                                            <div className="relative h-64 w-full rounded-lg overflow-hidden">
                                                <Image 
                                                    src={eventImg.url!} 
                                                    alt={event.title} 
                                                    fill
                                                    quality={65}
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </section>
    )
} 