import { Page } from "@/payload-types";
import { ArrowRight, Heart, Users, MessageSquare, Hand, HeartHandshake, GraduationCap } from "lucide-react";
import Link from "next/link";

type SectionsType = NonNullable<Page["sections"]>[number];
type GetInvolvedSection = Extract<SectionsType, { blockType: "getInvolved" }>

export default function GetInvolved({ res }: { res: GetInvolvedSection }) {
    const { heading, subheading, cards } = res

    return (
        <section className="w-full bg-amber-50 py-8">
            <div className="mx-auto max-w-[--breakpoint-xl] px-4 py-8 space-y-10 lg:px-4">
                <div className="text-center mb-12">
                    <h3 className="text-4xl font-bold text-black">{heading}</h3>
                    {subheading && <p className="mt-3 text-gray-600 max-w-2xl mx-auto">{subheading}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards ? (
                        cards.map((card, index) => (
                            <div key={index} className="bg-white shadow-md overflow-hidden">
                                <div className="p-8 text-center">
                                    <div className="flex justify-center items-center mb-6">
                                        {getCardIcon(card.icon, "h-14 w-14 text-amber-500")}
                                    </div>
                                    <h4 className="text-xl font-semibold mb-4">{card.heading}</h4>
                                    <Link 
                                        href={card.link || "#"} 
                                        className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
                                    >
                                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Default cards if no cards provided
                        <>
                            <div className="bg-white shadow-md overflow-hidden">
                                <div className="p-8 text-center">
                                    <div className="flex justify-center items-center mb-6">
                                        <Heart className="h-14 w-14 text-amber-500" />
                                    </div>
                                    <h4 className="text-xl font-semibold mb-4">Volunteer</h4>
                                    <p className="text-gray-600 mb-6">Join our community of volunteers and make a difference in your local area.</p>
                                    <Link 
                                        href="/volunteer" 
                                        className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
                                    >
                                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="bg-white shadow-md overflow-hidden">
                                <div className="p-8 text-center">
                                    <div className="flex justify-center items-center mb-6">
                                        <Users className="h-14 w-14 text-amber-500" />
                                    </div>
                                    <h4 className="text-xl font-semibold mb-4">Join a Group</h4>
                                    <p className="text-gray-600 mb-6">Connect with like-minded individuals in our various community groups.</p>
                                    <Link 
                                        href="/groups" 
                                        className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
                                    >
                                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="bg-white shadow-md overflow-hidden">
                                <div className="p-8 text-center">
                                    <div className="flex justify-center items-center mb-6">
                                        <MessageSquare className="h-14 w-14 text-amber-500" />
                                    </div>
                                    <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                                    <p className="text-gray-600 mb-6">Have questions or ideas? We'd love to hear from you.</p>
                                    <Link 
                                        href="/contact" 
                                        className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
                                    >
                                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

function getCardIcon(iconName?: string | null, className: string = "h-14 w-14") {
    switch (iconName?.toLowerCase()) {
        case "volunteer":
            return <Hand className={className} />;
        case "sponsor":
            return <HeartHandshake className={className} />;
        case "student":
            return <GraduationCap className={className} />;
    }
}
