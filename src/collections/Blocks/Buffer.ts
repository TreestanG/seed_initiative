import type { Block } from "payload"

export const BufferBlock: Block = {
    slug: 'buffer',
    labels: { singular: "Buffer", plural: "Buffers" },
    fields: [
        { name: "height", type: "number", required: true, defaultValue: 8 },
    ]
}