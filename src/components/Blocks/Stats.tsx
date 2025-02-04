import { Clock, CoinsIcon, GraduationCap } from "lucide-react";
import NumberTicker from '@/components/ui/number-ticker'
import RichText from "../RichText";
import { Page } from "@/payload-types";
import FadeInOnScroll from "../FadeInOnScroll";

type SectionsType = NonNullable<Page["sections"]>[number];
type StatsSection = Extract<SectionsType, { blockType: "stats" }>

export default function Stats({ res }: { res: StatsSection }) {
    const { heading, stats, description } = res;

    return (
        <FadeInOnScroll>
            <section className="w-full py-8 md:py-24">
                <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-6 space-y-6 lg:space-y-12 lg:px-4">
                    <h2 className="text-4xl font-bold md:text-center w-full text-bcyan">
                        {heading}
                    </h2>

                    <div className="lg:grid lg:grid-cols-3 xl:gap-16 space-y-4 items-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="lg:flex lg:items-center lg:flex-col">
                                {stat.icon === 'coins' && (
                                    <CoinsIcon size={96} strokeWidth={2} className="text-bpurple hidden md:block" />
                                )}
                                {stat.icon === 'graduation' && (
                                    <GraduationCap size={96} strokeWidth={2} className="text-bpurple hidden md:block" />
                                )}
                                {stat.icon === 'clock' && (
                                    <Clock size={96} strokeWidth={2} className="text-bpurple hidden md:block" />
                                )}
                                <span className="text-3xl md:text-4xl lg:text-5xl font-bold pt-6">
                                    {stat.icon === 'coins' && '$'}
                                    <NumberTicker value={stat.value} className="" />+
                                </span>
                                <p className="text-lg font-medium md:pt-4">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {description && (
                        <div className="w-full flex flex-col md:items-center">
                            <RichText content={description} className="max-w-[50rem] md:text-center" />
                        </div>
                    )}
                </div>
            </section>
        </FadeInOnScroll>
    );
}