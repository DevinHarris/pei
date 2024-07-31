import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://proficientengineering.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },

        {
            url: 'https://proficientengineering.com/what-we-do',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7
        },

        {
            url: 'https://proficientengineering.com/portfolio',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9
        },
        {
            url: 'https://proficientengineering.com/bim',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5
        },

        {
            url: 'https://proficientengineering.com/our-team',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8
        },

        {
            url: 'https://proficientengineering.com/lunch-learn',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6
        },

        {
            url: 'https://proficientengineering.com/careers',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5
        },

        {
            url: 'https://proficientengineering.com/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7
        }
    ]
}