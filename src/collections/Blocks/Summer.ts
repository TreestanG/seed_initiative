import type { Block } from "payload"

export const SummerBlock: Block = {
    slug: 'summer',
    labels: {
        singular: 'Summer Section',
        plural: 'Summer Sections',
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
            required: true,
            defaultValue: 'Summer Events:',
        },
        {
            name: 'achievements',
            type: 'array',
            minRows: 2,
            maxRows: 2,
            required: true,
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'description',
                    type: 'richText',
                    required: true,
                },
                {
                    name: 'date',
                    type: 'date',
                    required: true,
                    defaultValue: new Date(),
                },
                {
                    name: "endDate",
                    type: "date",
                    required: false,
                    defaultValue: new Date(),
                }
            ]
        }
    ]
}
