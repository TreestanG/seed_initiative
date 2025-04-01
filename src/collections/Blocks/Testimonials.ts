import type { Block } from "payload"

export const TestimonialsBlock: Block = {
    slug: 'testimonials',
    labels: { singular: 'Testimonials Section', plural: 'Testimonials Sections' },
    fields: [
        { name: 'heading', type: 'text' },
        { name: 'subheading', type: 'text' },
        {
            name: 'testimonials',
            type: 'array',
            minRows: 1,
            labels: {
                singular: 'Testimonial',
                plural: 'Testimonials',
            },
            fields: [
                { name: 'quote', type: 'textarea', required: true },
                { name: 'author', type: 'text', required: true },
                { name: 'authorTitle', type: 'text' },
                { name: 'authorImage', type: 'upload', relationTo: 'media' }
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