import type { Block } from "payload"

export const ProgramDetailsBlock: Block = {
    slug: 'programDetails',
    labels: { singular: 'Program Details Section', plural: 'Program Details Sections' },
    fields: [
        { name: 'heading', type: 'text' },
        { name: 'subheading', type: 'text' },
        { name: 'overview', type: 'richText' },
        { 
            name: 'programs', 
            type: 'array',
            minRows: 1,
            labels: {
                singular: 'Program',
                plural: 'Programs',
            }, 
            fields: [
                { name: 'programTitle', type: 'text', required: true },
                { name: 'description', type: 'richText' },
                { name: 'schedule', type: 'richText' },
                { name: 'eligibility', type: 'richText' },
                { name: 'signupLink', type: 'text' },
                { name: 'image', type: 'upload', relationTo: 'media' }
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
                { name: 'buttonClass', type: 'text' }
            ]
        }
    ],
} 