import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/qui-suis-je`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/services`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/realisations`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
            lastModified: new Date().toISOString(),
        },
    ]
}