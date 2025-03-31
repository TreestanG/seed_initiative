import { cn } from "@/lib/utils";
import { Page } from "@/payload-types";
import { ArrowRight, Hand, HeartHandshake, GraduationCap } from "lucide-react";
import Link from "next/link";

type SectionsType = NonNullable<Page["sections"]>[number];
type GetInvolvedSection = Extract<SectionsType, { blockType: "getInvolved" }>

export default function GetInvolved({ res }: { res: GetInvolvedSection }) {
    const { heading, subheading, cards } = res

    return (
        <section className="w-full py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h3 className="text-4xl font-bold text-black">{heading}</h3>
                    {subheading && <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{subheading}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {cards && (
                        cards.map((card, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "shadow-md h-[30rem] p-8 md:p-10 text-center flex flex-col items-center justify-center",
                                )}
                                style={card.cardBackground ? { backgroundColor: card.cardBackground } : undefined}
                            >
                                <div className="flex justify-center items-center mb-8">
                                    {getCardIcon(card.icon, "h-16 w-16 text-white")}
                                </div>
                                <h4 className="text-2xl font-semibold text-white mb-6">{card.heading}</h4>
                                <Link
                                    href={card.link || "#"}
                                    className="inline-flex items-center text-white font-medium px-6 py-3 border-white border-2 transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
                                >
                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}

function getCardIcon(iconName?: string | null, className: string = "h-14 w-14") {
    switch (iconName?.toLowerCase()) {
        case "volunteer":
            return <Hand className={className} strokeWidth={1.5} />;
        case "sponsor":
            return <HeartHandshake className={className} strokeWidth={1.5} />;
        case "student":
            return <GraduationCap className={className} strokeWidth={1.5} />;
    }
}
