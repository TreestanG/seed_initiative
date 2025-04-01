import type { Block } from "payload"

export const SponsorshipTiersBlock: Block = {
    slug: 'sponsorshipTiers',
    labels: {
        singular: 'Sponsorship Tiers',
        plural: 'Sponsorship Tiers Blocks',
    },
    fields: [
        {
            name: 'heading',
            label: 'Heading',
            type: 'text',
            required: true,
        },
        {
            name: 'subheading',
            label: 'Subheading',
            type: 'textarea',
        },
        {
            name: 'tiers',
            label: 'Sponsorship Tiers',
            type: 'array',
            minRows: 1,
            required: true,
            fields: [
                {
                    name: 'name',
                    label: 'Tier Name',
                    type: 'text',
                    required: true,
                    admin: {
                        description: 'e.g., Bronze, Silver, Gold'
                    }
                },
                {
                    name: 'price',
                    label: 'Price',
                    type: 'text',
                    required: true,
                    admin: {
                        description: 'e.g., $500, $1000/year, Contact Us'
                    }
                },
                {
                    name: 'description',
                    label: 'Tier Description',
                    type: 'textarea',
                },
                {
                    name: 'perks',
                    label: 'Perks',
                    type: 'array',
                    minRows: 1,
                    fields: [
                        {
                            name: 'perkDescription',
                            label: 'Perk Description',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'tooltip',
                            label: 'Tooltip (Optional)',
                            type: 'text',
                            admin: {
                                description: 'Provide additional context that appears on hover.'
                            }
                        },
                        {
                            name: 'included',
                            label: 'Included in this tier?',
                            type: 'checkbox',
                            defaultValue: true, // Assuming most perks listed are included
                        }
                    ]
                },
            ]
        }
    ]
}