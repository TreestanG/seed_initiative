import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
    slug: 'pages',
    labels: {
        singular: 'Page',
        plural: 'Pages',
    },
    fields: [
        {
            name: "title",
            type: 'text',
            required: true
        },
        {
            name: "metaDescription",
            type: "text",
        },
        {
            name: "sections",
            type: "array",
            fields: [
                {
                    name: "section",
                    type: "relationship",
                    relationTo: ["sections"],
                    required: true,
                },
            ],
        },
    ]
}
