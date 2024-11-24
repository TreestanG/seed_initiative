import type { Block, CollectionConfig } from 'payload'

const HeroBlock: Block = {
    slug: 'hero',
    labels: { singular: 'Hero Section', plural: 'Hero Sections' },
    fields: [
        { name: 'heading', type: 'text' },
        { name: 'subheading', type: 'text' },
        { name: 'background', type: 'upload', relationTo: 'media' },
        {
            name: 'cta',
            type: 'array',
            fields: [
                { name: 'label', type: 'text' },
                { name: 'link', type: 'text' },
            ],
            maxRows: 2,
        }
    ],
}

const FeaturesBlock: Block = {
    slug: 'features',
    labels: { singular: 'Features Section', plural: 'Features Sections' },
    fields: [
        { name: 'heading', type: 'text', required: true },
        { name: 'subheading', type: 'text' },
        { name: 'text', type: 'richText' },
        {
            name: 'cta',
            type: 'group',
            fields: [
                { name: 'label', type: 'text' },
                { name: 'link', type: 'text' },
                {
                    name: 'button',
                    type: 'checkbox'
                }
            ],
        },
        { name: "image", type: "upload", relationTo: "media", required: true },
    ],
}

const SponsorsBlock: Block = {
    slug: 'sponsors',
    labels: { singular: 'Sponsors Section', plural: 'Sponsors Sections' },
    fields: [
        { name: 'heading', type: 'text', required: true },
        { name: 'subheading', type: 'text' },
        {
            name: 'sponsors', type: 'array', fields: [
                { name: 'logo', type: 'upload', relationTo: 'media' },
                { name: 'link', type: 'text' },
            ]
        },
    ],
}

const BannerBlock: Block = {
    slug: 'banner',
    labels: { singular: "Banner", plural: "Banners" },
    fields: [
        { name: "heading", type: "text", required: true },
        { name: "description", type: "text", required: true },
        {
            name: 'cta', type: 'group', fields: [
                { name: "label", type: 'text' },
                { name: "link", type: "text" }
            ]
        },
        { name: "image", type: "upload", relationTo: "media", required: true },
    ]
}

const StatsBlock: Block = {
    slug: 'stats',
    labels: { singular: 'Stats Section', plural: 'Stats Sections' },
    fields: [
        {
            name: 'heading',
            type: 'text',
            required: true
        },
        {
            name: 'stats',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'icon',
                    type: 'select',
                    required: true,
                    options: [
                        { label: 'Coins', value: 'coins' },
                        { label: 'Graduation Cap', value: 'graduation' },
                        { label: 'Clock', value: 'clock' }
                    ]
                },
                {
                    name: 'value',
                    type: 'number',
                    required: true
                },
                {
                    name: 'label',
                    type: 'text',
                    required: true
                }
            ],
            minRows: 3,
            maxRows: 3,
        },
        {
            name: 'description',
            type: 'richText',
        }
    ]
}

const SummerBlock: Block = {
    slug: 'summer',
    labels: {
        singular: 'Summer Section',
        plural: 'Summer Sections',
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
            required: true,
            defaultValue: 'Summer Events:',
        },
        {
            name: 'achievements',
            type: 'array',
            minRows: 2,
            maxRows: 2,
            required: true,
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'description',
                    type: 'richText',
                    required: true,
                }
            ]
        }
    ]
}


export const Pages: CollectionConfig = {
    slug: 'pages',
    labels: {
        singular: 'Page',
        plural: 'Pages',
    },
    fields: [
        {
            name: 'title',
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
                SummerBlock
            ],
        }
    ],
}
