import { Clock, CoinsIcon, GraduationCap, Heart, LandPlot } from "lucide-react";
import NumberTicker from '@/components/ui/number-ticker'
import RichText from "../RichText";
import { Page } from "@/payload-types";

type SectionsType = NonNullable<Page["sections"]>[number];
type StatsSection = Extract<SectionsType, { blockType: "stats" }>

export default function Stats({ res }: { res: StatsSection }) {
    const { heading, stats, description } = res;

    return (
        <section className="w-full py-8 md:py-12 ">
            <div className="container mx-auto px-4 py-6 space-y-8 lg:space-y-12">
                <h2 className="text-3xl md:text-4xl font-bold text-left md:text-center w-full ">
                    {heading}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center p-6 rounded-lg bg-white shadow-sm border border-slate-100 transition-transform hover:transform hover:-translate-y-1">
                            <div className="p-4 mb-4 rounded-full bg-brand-50">
                                {stat.icon === 'coins' && (
                                    <CoinsIcon size={48} strokeWidth={1.5} className="text-brand-600" />
                                )}
                                {stat.icon === 'graduation' && (
                                    <GraduationCap size={48} strokeWidth={1.5} className="text-brand-600" />
                                )}
                                {stat.icon === 'clock' && (
                                    <Clock size={48} strokeWidth={1.5} className="text-brand-600" />
                                )}
                                {stat.icon === 'land-plot' && (
                                    <LandPlot size={48} strokeWidth={1.5} className="text-brand-600" />
                                )}
                                {!['coins', 'graduation', 'clock', 'land-plot'].includes(stat.icon) && (
                                    <Heart size={48} strokeWidth={1.5} className="text-brand-600" />
                                )}
                            </div>
                            <span className="text-3xl md:text-4xl font-bold text-slate-800 flex items-center font-serif">
                                {stat.icon === 'coins' && <span className="mr-1">$</span>}
                                <NumberTicker value={stat.value} className="" />
                                <span className="ml-1">+</span>
                            </span>
                            <p className="text-lg font-medium mt-2 text-slate-600 text-center">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {description && (
                    <div className="w-full flex flex-col items-center mt-8">
                        <div className="max-w-3xl">
                            <RichText content={description} className="text-center text-slate-700" />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}