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
        { name: 'text', type: 'richText', required: true },
        {
            name: 'cta',
            type: 'group',
            fields: [
                { name: 'label', type: 'text' },
                { name: 'link', type: 'text' },
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
        { name: 'sponsors', type: 'array', fields: [
            { name: 'logo', type: 'upload', relationTo: 'media' },
            { name: 'link', type: 'text' },
        ] },
    ],
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
                SponsorsBlock
            ],
        }
    ],
}
