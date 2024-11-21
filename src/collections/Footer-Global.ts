import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
    slug: 'footer',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "instagram",
            type: "text",
        },
        {
            name: "contactInfo",
            type: "group",
            fields: [
                {
                    name: "email",
                    type: "text",
                }
            ]
        }
    ] 
    

}
