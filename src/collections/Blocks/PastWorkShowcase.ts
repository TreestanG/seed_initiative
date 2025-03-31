import type { Block } from "payload"

export const PastWorkShowcaseBlock: Block = {
    slug: 'pastWorkShowcase',
    labels: { singular: 'Past Work Showcase', plural: 'Past Work Showcases' },
    fields: [
        { name: 'heading', type: 'text' },
        { name: 'subheading', type: 'text' },
        { name: 'description', type: 'richText' },
        {
            name: 'layout',
            type: 'select',
            options: ['grid', 'list'],
            defaultValue: 'grid'
        },
        {
            name: 'projects',
            type: 'array',
            minRows: 1,
            labels: {
                singular: 'Project/Event',
                plural: 'Projects/Events',
            },
            fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'date', type: 'date', required: true },
                { name: 'description', type: 'richText' },
                { name: 'featuredImage', type: 'upload', relationTo: 'media' },
                { 
                    name: 'gallery', 
                    type: 'array', 
                    fields: [
                        { name: 'image', type: 'upload', relationTo: 'media', required: true }
                    ]
                },
                { name: 'link', type: 'text' }
            ]
        },
        {
            name: 'cta',
            type: 'group',
            fields: [
                { name: 'label', type: 'text' },
                { name: 'link', type: 'text' },
                { name: 'button', type: 'checkbox' }
            ],
        },
        {
            label: 'advanced',
            type: 'collapsible',
            fields: [
                { name: 'headingClass', type: 'text' },
                { name: 'textClass', type: 'text' },
                { name: 'itemsPerRow', type: 'select', options: ['2', '3', '4'], defaultValue: '3' }
            ]
        }
    ],
} 