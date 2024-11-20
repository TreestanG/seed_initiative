import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
    slug: 'header',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "logo",
            type: "upload",
            relationTo: "media",
        },
        {
            name: "navLinks",
            type: "array",
            fields: [
                {
                    name: "label",
                    type: "text",
                },
                {
                    name: "link",
                    type: "text",
                }
            ]
        }
    ]

}
