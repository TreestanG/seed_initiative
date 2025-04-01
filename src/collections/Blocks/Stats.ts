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
                    type: 'text',
                    required: true,
                    admin: {
                        description: 'Enter a Lucide icon name (see https://lucide.dev/icons/ for all available icons)',
                    },
                    defaultValue: 'coins',
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