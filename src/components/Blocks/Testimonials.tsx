import { Page } from "@/payload-types";
import { Media } from '@/payload-types'
import Image from "next/image";
import { cn } from "@/lib/utils";

type SectionsType = NonNullable<Page["sections"]>[number];
type TestimonialsSection = Extract<SectionsType, { blockType: "testimonials" }>

export default async function Testimonials({
    res
}: {
    res: TestimonialsSection
}) {
    if(!res) return null

    const { heading, subheading, testimonials, headingClass, textClass, backgroundColor } = res
    
    const bgColors = {
        light: "bg-gray-50",
        dark: "bg-gray-900 text-white",
        brand: "bg-brand-50"
    }
    
    const bgColor = backgroundColor ? bgColors[backgroundColor] : bgColors.light
    
    return (
        <section className={cn("w-full py-14 md:py-20 lg:py-24", bgColor)}>
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
                    {subheading && (
                        <p className={cn(
                            "font-semibold text-lg tracking-wide uppercase mb-4",
                            backgroundColor === 'dark' ? "text-brand-400" : "text-brand-600"
                        )}>
                            {subheading}
                        </p>
                    )}
                    
                    {heading && (
                        <h2 className={cn(
                            "text-3xl lg:text-5xl font-bold leading-tight font-serif",
                            backgroundColor === 'dark' ? "text-white" : "text-gray-900",
                            headingClass
                        )}>
                            {heading}
                        </h2>
                    )}
                </div>

                {testimonials && testimonials.length > 0 && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {testimonials.map((testimonial, index) => {
                            const authorImg = testimonial.authorImage as Media;
                            return (
                                <div key={index} className={cn(
                                    "flex flex-col p-8 md:p-10 rounded-xl shadow-lg",
                                    backgroundColor === 'dark' ? "bg-gray-800" : "bg-white"
                                )}>
                                    <div className="flex-1">
                                        <p className={cn(
                                            "text-xl italic mb-8 relative",
                                            backgroundColor === 'dark' ? "text-gray-300" : "text-gray-700",
                                            textClass
                                        )}>
                                            <span className="text-4xl opacity-50 absolute -top-4 -left-2">&quot;</span>
                                            {testimonial.quote}
                                            <span className="text-4xl opacity-50 absolute -bottom-6 -right-1">&quot;</span>
                                        </p>
                                    </div>
                                    
                                    <div className="flex items-center mt-8 pt-6 border-t border-gray-200">
                                        {authorImg && (
                                            <div className="flex-shrink-0 mr-4">
                                                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                                                    <Image 
                                                        src={authorImg.url!} 
                                                        alt={testimonial.author}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                        
                                        <div>
                                            <p className={cn(
                                                "font-bold",
                                                backgroundColor === 'dark' ? "text-white" : "text-gray-900"
                                            )}>
                                                {testimonial.author}
                                            </p>
                                            {testimonial.authorTitle && (
                                                <p className={cn(
                                                    "text-sm mt-1",
                                                    backgroundColor === 'dark' ? "text-gray-400" : "text-gray-600"
                                                )}>
                                                    {testimonial.authorTitle}
                                                </p>
                                            )}
                                        </div>
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