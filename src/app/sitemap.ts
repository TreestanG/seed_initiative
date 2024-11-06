import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {

    const url = process.env.URL!

    return [
        {
            url: url,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: url + '/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: url + '/team',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]
}