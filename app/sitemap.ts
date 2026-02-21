import { MetadataRoute } from 'next'
import { portfolioData } from '@/data/portfolio'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ajith-portfolio.vercel.app'

    const projects = portfolioData.projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...projects,
    ]
}
