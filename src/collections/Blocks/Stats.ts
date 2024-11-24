import type { Block } from "payload"

export const StatsBlock: Block = {
    slug: 'stats',
    labels: { singular: 'Stats Section', plural: 'Stats Sections' },
    fields: [
        {
            name: 'heading',
            type: 'text',
            required: true
        },
        {
            name: 'stats',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'icon',
                    type: 'select',
                    required: true,
                    options: [
                        { label: 'Coins', value: 'coins' },
                        { label: 'Graduation Cap', value: 'graduation' },
                        { label: 'Clock', value: 'clock' }
                    ]
                },
                {
                    name: 'value',
                    type: 'number',
                    required: true
                },
                {
                    name: 'label',
                    type: 'text',
                    required: true
                }
            ],
            minRows: 3,
            maxRows: 3,
        },
        {
            name: 'description',
            type: 'richText',
        }
    ]
}