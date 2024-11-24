import type { Block } from "payload"

export const SponsorsBlock: Block = {
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