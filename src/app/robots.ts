import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const url = process.env.URL || 'https://seedinitiative.net'
    
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/admin',
                    '/api',
                    '/_next',
                    '/_error',
                    '/404',
                    '/500',
                    '/admin/*',
                    '/api/*',
                    '/_next/*',
                    '/_error/*',
                ],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: [
                    '/admin',
                    '/api',
                    '/_next',
                    '/_error',
                    '/404',
                    '/500',
                ],
            },
        ],
        sitemap: `${url}/sitemap.xml`,
        host: url,
    }
}