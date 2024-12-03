import type { CollectionConfig } from 'payload'
import { FeaturesBlock } from './Blocks/Features'
import { HeroBlock } from './Blocks/Hero'
import { SponsorsBlock } from './Blocks/Sponsors'
import { BannerBlock } from './Blocks/Banner'
import { StatsBlock } from './Blocks/Stats'
import { SummerBlock } from './Blocks/Summer'
import { DescriptionBlock } from './Blocks/Description'
import { TeamBlock } from './Blocks/Team'
import { CTAContactBlock } from './Blocks/CTAContact'
import { DonateBlock } from './Blocks/Donate'
import { revalidatePage } from './hooks/revalidatePage'

export const Pages: CollectionConfig = {
    slug: 'pages',
    labels: {
        singular: 'Page',
        plural: 'Pages',
    },
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'status', 'updatedAt', 'sections'],
    },
    versions: {
        drafts: {
            autosave: true,
            validate: true
        }
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
        },
        {
            name: 'sections',
            type: 'blocks',
            blocks: [
                HeroBlock,
                FeaturesBlock,
                SponsorsBlock,
                BannerBlock,
                StatsBlock,
                SummerBlock,
                DescriptionBlock,
                TeamBlock,
                CTAContactBlock,
                DonateBlock
            ],
        }
    ],
    hooks: {
        afterChange: [revalidatePage],
    }
}
