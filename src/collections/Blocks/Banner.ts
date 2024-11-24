import type { Block } from "payload"

export const BannerBlock: Block = {
    slug: 'banner',
    labels: { singular: "Banner", plural: "Banners" },
    fields: [
        { name: "heading", type: "text", required: true },
        { name: "description", type: "text", required: true },
        {
            name: 'cta', type: 'group', fields: [
                { name: "label", type: 'text' },
                { name: "link", type: "text" }
            ]
        },
        { name: "image", type: "upload", relationTo: "media", required: true },
    ]
}