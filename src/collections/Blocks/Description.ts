import type { Block } from "payload"

export const DescriptionBlock: Block = {
    slug: 'description',
    labels: { singular: 'Description Section', plural: 'Description Sections' },
    fields: [
        { name: 'heading', type: 'text' },
        { name: 'text', type: 'richText', required: true },
    ],
}