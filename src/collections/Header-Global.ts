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
                    required: true,
                },
                {
                    name: "type",
                    type: "radio",
                    options: [
                        {
                            label: "Regular Link",
                            value: "link"
                        },
                        {
                            label: "Dropdown Menu",
                            value: "dropdown"
                        }
                    ],
                    defaultValue: "link",
                    admin: {
                        layout: "horizontal"
                    }
                },
                {
                    name: "link",
                    type: "text",
                },
                {
                    name: "dropdownItems",
                    type: "array",
                    label: "Dropdown Menu Items",
                    admin: {
                        condition: (data, siblingData) => siblingData?.type === 'dropdown'
                    },
                    fields: [
                        {
                            name: "label",
                            type: "text",
                            required: true
                        },
                        {
                            name: "link",
                            type: "text",
                            required: true
                        }
                    ]
                }
            ]
        }
    ],
    admin: {
        group: "Global Settings"
    }
}
