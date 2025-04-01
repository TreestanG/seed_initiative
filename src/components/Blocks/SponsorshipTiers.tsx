// src/components/Blocks/SponsorshipTiers.tsx
import { Page } from "@/payload-types";
import { Check, X } from 'lucide-react';

type SectionsType = NonNullable<Page["sections"]>[number];
type SponsorshipTiersSection = Extract<SectionsType, { blockType: "sponsorshipTiers" }>;

// Helper to get all unique perks across all tiers
const getAllUniquePerks = (tiers: SponsorshipTiersSection['tiers'] = []) => {
    const allPerks = new Set<string>();
    tiers?.forEach(tier => {
        tier.perks?.forEach(perk => {
            if (perk.perkDescription) {
                allPerks.add(perk.perkDescription);
            }
        });
    });
    return Array.from(allPerks);
};

export default function SponsorshipTiers({ res }: { res: SponsorshipTiersSection }) {
    const { heading, subheading, tiers } = res;

    if (!tiers || tiers.length === 0) {
        return null; // Don't render anything if no tiers are defined
    }

    const uniquePerks = getAllUniquePerks(tiers);

    // Create a map for quick lookup: perkDescription -> tierName -> included
    const perkTierMap = new Map<string, Map<string, boolean>>();
    uniquePerks.forEach(perkDesc => {
        perkTierMap.set(perkDesc, new Map<string, boolean>());
        tiers.forEach(tier => {
            const tierPerk = tier.perks?.find(p => p.perkDescription === perkDesc);
            perkTierMap.get(perkDesc)?.set(tier.name ?? '', tierPerk?.included ?? false);
        });
    });

    return (
        <section className="w-full bg-stone-50 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-14">
                    {heading && <h2 className="text-3xl md:text-4xl font-bold mb-3 text-brand-800">{heading}</h2>}
                    {subheading && <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">{subheading}</p>}
                </div>

                <div className="overflow-x-auto shadow-sm border border-stone-200 bg-white">
                    <table className="w-full text-sm text-left text-stone-700">
                        <thead className="text-xs text-stone-800 uppercase bg-stone-100">
                            <tr>
                                <th scope="col" className="px-6 py-5 font-semibold text-base sticky left-0 bg-stone-100 z-10 min-w-[180px] border-b border-stone-200">Partnership Benefits</th>
                                {tiers.map((tier, index) => (
                                    <th key={index} scope="col" className="px-6 py-5 text-center min-w-[160px] border-b border-stone-200">
                                        <div className="font-semibold text-lg mb-2 text-brand-700">{tier.name}</div>
                                        <div className="font-medium text-stone-600 text-base mb-3">{tier.price}</div>
                                        {tier.description && <div className="font-normal text-xs text-stone-500 mb-3 px-2">{tier.description}</div>}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {uniquePerks.map((perkDesc, perkIndex) => (
                                <tr key={perkIndex} className={`border-b border-stone-200 ${perkIndex % 2 === 0 ? 'bg-white' : 'bg-stone-50'} hover:bg-stone-100 transition duration-150`}>
                                    <td className="px-6 py-4 font-medium text-stone-800 sticky left-0 bg-inherit z-10">{perkDesc}</td>
                                    {tiers.map((tier, tierIndex) => {
                                        const isIncluded = perkTierMap.get(perkDesc)?.get(tier.name ?? '') ?? false;
                                        return (
                                            <td key={tierIndex} className="px-6 py-4 text-center">
                                                {isIncluded ? (
                                                    <div className="flex justify-center">
                                                        <span className="bg-brand-100 rounded-full p-1">
                                                            <Check className="w-5 h-5 text-brand-600" />
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div className="flex justify-center">
                                                        <span className="bg-stone-100 rounded-full p-1">
                                                            <X className="w-5 h-5 text-stone-400" />
                                                        </span>
                                                    </div>
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                <div className="mt-8 text-center text-stone-600 text-sm">
                    <p>Have any questions? Send an email to <a href="mailto:sucseedinitiative@gmail.com" className="text-brand-600 hover:text-brand-700 transition duration-200">sucseedinitiative@gmail.com</a></p>
                </div>
            </div>
        </section>
    );
}