import { HelpCircle } from "lucide-react";
import * as LucideIcons from "lucide-react";
import NumberTicker from '@/components/ui/number-ticker'
import RichText from "../RichText";
import { Page } from "@/payload-types";

type SectionsType = NonNullable<Page["sections"]>[number];
type StatsSection = Extract<SectionsType, { blockType: "stats" }>

export default function Stats({ res }: { res: StatsSection }) {
    const { heading, stats, description } = res;

    const getIcon = (iconName: string, size = 48, strokeWidth = 1.5, className = "text-brand-600") => {
        try {
            let formattedName: string;

            if (iconName.includes('-')) {
                formattedName = iconName
                    .split('-')
                    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
                    .join('');
            } else {
                formattedName = iconName.charAt(0).toUpperCase() + iconName.slice(1).toLowerCase();
            }

            const specialCases: Record<string, string> = {
                'Coins': 'CoinsIcon',
                'Graduation': 'GraduationCap',
                'Briefcase': 'BriefcaseBusiness',
                'Shield': 'ShieldCheck',
                'Money': 'Banknote',
                'Dollar': 'DollarSign'
            };

            if (specialCases[formattedName]) {
                formattedName = specialCases[formattedName];
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const lucideIconsObj: any = LucideIcons;
            const IconComponent = formattedName in lucideIconsObj
                ? lucideIconsObj[formattedName]
                : HelpCircle;
            
            return <IconComponent size={size} strokeWidth={strokeWidth} className={className} />;
        } catch {
            return <HelpCircle size={size} strokeWidth={strokeWidth} className={className} />;
        }
    };

    return (
        <section className="w-full py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6 space-y-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center w-full leading-tight">
                    {heading}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center p-6 md:p-8 bg-white shadow-md border border-slate-100">
                            <div className="p-4 mb-5 rounded-full bg-brand-50">
                                {getIcon(stat.icon)}
                            </div>
                            <span className="text-3xl md:text-4xl font-bold text-slate-800 flex items-center">
                                {stat.icon.toLowerCase() === 'coins' && <span className="mr-1">$</span>}
                                <NumberTicker value={stat.value} className="" />
                                <span className="ml-1">+</span>
                            </span>
                            <p className="text-base md:text-lg font-medium mt-3 text-slate-600 text-center leading-relaxed">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {description && (
                    <div className="w-full flex flex-col items-center mt-10">
                        <div className="max-w-3xl">
                            <RichText content={description} className="text-center text-slate-700 text-base md:text-lg leading-relaxed" />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}