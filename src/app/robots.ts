import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin', '/api', '/_next', '/_error', '/404', '/500'],
        },
        sitemap: process.env.URL + '/sitemap.xml',
    }
}