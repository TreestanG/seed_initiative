import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const url = process.env.URL!
    
    // Initialize with static routes
    const staticRoutes = [
        {
            url: url,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: url + '/about',
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
        {
            url: url + '/team',
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ]
    
    try {
        // Get all pages from the CMS
        const payload = await getPayload({ config })
        const pagesResult = await payload.find({
            collection: 'pages',
            limit: 100,
        })
        
        // Map pages to sitemap entries
        const dynamicRoutes = pagesResult.docs.map(page => ({
            url: `${url}/${page.slug === 'home' ? '' : page.slug}`,
            lastModified: new Date(page.updatedAt || page.createdAt),
            changeFrequency: 'weekly' as const,
            priority: page.slug === 'home' ? 1 : 0.8,
        }))
        
        // Combine static and dynamic routes, removing duplicates
        const allRoutes = [...staticRoutes]
        
        // Add dynamic routes that don't already exist in static routes
        dynamicRoutes.forEach(route => {
            if (!allRoutes.some(r => r.url === route.url)) {
                allRoutes.push(route)
            }
        })
        
        return allRoutes
    } catch (error) {
        console.error('Error generating sitemap:', error)
        return staticRoutes
    }
}