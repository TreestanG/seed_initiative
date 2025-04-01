import type { Block } from "payload"

export const DonateBlock: Block = {
    slug: 'donate',
    labels: {
        singular: 'Donation Section',
        plural: 'Donation Sections',
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
            required: true,
        },
        {
            name: 'content',
            type: 'textarea',
            required: true,
        },
        {
            name: 'arrowImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'donateButton',
            type: 'group',
            fields: [
                {
                    name: 'text',
                    type: 'text',
                    required: true,
                    defaultValue: 'Donate Now'
                },
                {
                    name: 'link',
                    type: 'text',
                    required: true,
                }
            ]
        }
    ]
}