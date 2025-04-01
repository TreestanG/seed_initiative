import type { Block } from "payload"

export const TimelineBlock: Block = {
    slug: 'timeline',
    labels: { singular: 'Timeline Section', plural: 'Timeline Sections' },
    fields: [
        { name: 'heading', type: 'text' },
        { name: 'subheading', type: 'text' },
        { name: 'description', type: 'richText' },
        {
            name: 'events',
            type: 'array',
            minRows: 1,
            labels: {
                singular: 'Event',
                plural: 'Events',
            },
            fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'date', type: 'date', required: true },
                { name: 'description', type: 'richText' },
                { name: 'image', type: 'upload', relationTo: 'media' }
            ]
        },
        {
            label: 'advanced',
            type: 'collapsible',
            fields: [
                { name: 'headingClass', type: 'text' },
                { name: 'textClass', type: 'text' },
                { name: 'backgroundColor', type: 'select', options: ['light', 'dark', 'brand'], defaultValue: 'light' }
            ]
        }
    ],
} 