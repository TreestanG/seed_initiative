import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    modifyResponseHeaders({ headers }) {
      if (headers.get('content-type') === 'application/xml') {
        headers.set('content-type', 'image/svg+xml; charset=utf-8')
      }
      return headers
    },
  },
}
