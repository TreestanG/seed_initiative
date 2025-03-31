import { Page } from "@/payload-types";
import Link from "next/link";
import { Media } from '@/payload-types'
import Image from "next/image";
import RichText from "../RichText";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar, Users } from "lucide-react";

type SectionsType = NonNullable<Page["sections"]>[number];
type ProgramDetailsSection = Extract<SectionsType, { blockType: "programDetails" }>

export default async function ProgramDetails({
    res
}: {
    res: ProgramDetailsSection
}) {
    if(!res) return null

    const { heading, subheading, overview, programs, cta, headingClass, textClass } = res
    
    return (
        <section className="w-full py-14 md:py-20 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-14 md:mb-16">
                    {subheading && (
                        <p className="text-brand-600 font-semibold text-lg tracking-wide uppercase mb-4">
                            {subheading}
                        </p>
                    )}
                    
                    {heading && (
                        <h2 className={cn(
                            "text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8",
                            headingClass
                        )}>
                            {heading}
                        </h2>
                    )}
                    
                    {overview && (
                        <div className="prose prose-lg max-w-none">
                            <RichText 
                                content={overview} 
                                className={cn(
                                    "text-gray-600 leading-relaxed",
                                    textClass
                                )}
                            />
                        </div>
                    )}
                </div>

                {programs && programs.length > 0 && (
                    <div className="mt-16 grid gap-14 md:gap-20">
                        {programs.map((program, index) => {
                            const img = program.image as Media;
                            return (
                                <div 
                                    key={index} 
                                    className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                                >
                                    {img && (
                                        <div className="w-full lg:w-2/5">
                                            <div className="relative h-[300px] lg:h-[400px] w-full">
                                                <Image 
                                                    src={img.url!} 
                                                    alt={program.programTitle} 
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, 40vw"
                                                />
                                            </div>
                                        </div>
                                    )}
                                    
                                    <div className={cn(
                                        "w-full p-8 md:p-10",
                                        img ? "lg:w-3/5" : "lg:w-full"
                                    )}>
                                        <div className="border-l-4 border-brand-600 pl-4 mb-6">
                                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                                {program.programTitle}
                                            </h3>
                                        </div>
                                        
                                        {program.description && (
                                            <div className="prose prose-lg max-w-none mb-10">
                                                <RichText content={program.description} />
                                            </div>
                                        )}
                                        
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            {program.schedule && (
                                                <div className="bg-gray-50 p-6 rounded-lg">
                                                    <div className="flex items-center mb-4">
                                                        <Calendar className="w-5 h-5 text-brand-600 mr-2" />
                                                        <h4 className="text-xl font-semibold">Schedule</h4>
                                                    </div>
                                                    <div className="prose prose-md max-w-none">
                                                        <RichText content={program.schedule} />
                                                    </div>
                                                </div>
                                            )}
                                            
                                            {program.eligibility && (
                                                <div className="bg-gray-50 p-6 rounded-lg">
                                                    <div className="flex items-center mb-4">
                                                        <Users className="w-5 h-5 text-brand-600 mr-2" />
                                                        <h4 className="text-xl font-semibold">Eligibility</h4>
                                                    </div>
                                                    <div className="prose prose-md max-w-none">
                                                        <RichText content={program.eligibility} />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        
                                        {program.signupLink && (
                                            <div className="">
                                                <Link href={program.signupLink}>
                                                    <button className={cn(
                                                        "inline-flex items-center px-8 py-3",
                                                        "text-white bg-brand-600 hover:bg-brand-700",
                                                        "font-medium text-lg",
                                                        "transition-all duration-300",
                                                        "shadow-md hover:shadow-lg group hover:cursor-pointer"
                                                    )}>
                                                        Register Now
                                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                                    </button>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
                
                {(cta?.link && cta?.label) && (
                    <div className="mt-24 text-center">
                        <Link href={cta.link}>
                            {cta.button ? (
                                <button className={cn(
                                    "inline-flex items-center px-10 py-4",
                                    "text-white bg-brand-600 hover:bg-brand-700",
                                    "font-medium text-lg text-center hover:cursor-pointer",
                                    "transition-all duration-300",
                                    "shadow-md hover:shadow-lg group"
                                )}>
                                    {cta.label}
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            ) : (
                                <span className={cn(
                                    "inline-flex items-center text-brand-600",
                                    "hover:text-brand-700",
                                    "underline underline-offset-4 group"
                                )}>
                                    {cta.label}
                                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            )}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
} 