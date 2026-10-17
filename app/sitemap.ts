import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

// Pages à indexer par Google (les pages légales sont en noindex, donc absentes).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
