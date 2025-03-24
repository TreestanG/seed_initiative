import type { Block } from "payload"

export const TeamBlock: Block = {
    slug: 'team',
    labels: {
        singular: 'Team Section',
        plural: 'Team Sections',
    },
    fields: [
        {
            name: 'founders',
            type: 'array',
            label: 'Founders',
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                },
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                    defaultValue: 'Co-Founder'
                }
            ],
            required: true
        },
        {
            name: 'officers',
            type: 'array',
            label: 'Officers',
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                },
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                }
            ],
            required: true
        }, 
        {
            name: 'teachers',
            type: 'array',
            label: 'Teachers',
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                },
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                }
            ],
            required: true
        }
    ]
}