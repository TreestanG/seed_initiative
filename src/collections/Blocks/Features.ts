import type { Block } from "payload"

export const FeaturesBlock: Block = {
    slug: 'features',
    labels: { singular: 'Features Section', plural: 'Features Sections' },
    fields: [
        { name: 'heading', type: 'text', },
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
        {
            label: 'advanced', type: 'collapsible', fields: [
                { name: "headingClass", type: "text" },
                { name: "textClass", type: "text" },
                { name: "buttonClass", type: "text" }
            ]
        }
    ],
}