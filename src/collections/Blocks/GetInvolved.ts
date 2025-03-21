import type { Block } from "payload";

export const GetInvolvedBlock: Block = {

    slug: 'getInvolved',
    labels: { singular: 'Get Involved Section', plural: 'Get Involved Sections' },
    fields: [
        { name: 'heading', type: 'text', },
        { name: 'subheading', type: 'text' },
        {
            name: 'cards',
            type: 'array',
            fields: [
                { name: 'heading', type: 'text' },
                { name: 'link', type: 'text' },
                { name: 'icon', type: 'select', options: ['student', 'volunteer', 'sponsor'] }
            ]
        },
        { name: "image", type: "upload", relationTo: "media", required: true },
    ],
}
