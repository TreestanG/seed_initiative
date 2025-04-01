import type { Block } from "payload"

export const HeroBlock: Block = {
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
        },
        {
            name: 'heroType',
            type: 'select',
            options: ['main', 'sub'],
            defaultValue: 'sub',
        }
    ],
}