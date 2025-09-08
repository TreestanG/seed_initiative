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
        }
    ]
}