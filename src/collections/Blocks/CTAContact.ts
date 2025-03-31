import { Block } from 'payload'

export const CTAContactBlock: Block = {
    slug: 'ctaContact',
    labels: {
        singular: 'Contact CTA Section',
        plural: 'Contact CTA Sections',
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
            required: true,
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
        },
        {
            name: 'buttonText',
            type: 'text',
            required: true,
            defaultValue: 'Contact Us'
        },
        {
            name: 'link',
            type: 'text',
            required: true,
            defaultValue: 'mailto:sucseedinitiative@gmail.com'
        }
    ]
}