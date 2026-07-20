import type { MetadataRoute } from 'next'

const SITE_URL = 'https://kalmbeforethestorm.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const anchors = ['', '#music', '#about', '#featured', '#themes', '#timeline', '#videos', '#booking']
  return anchors.map((a) => ({
    url: `${SITE_URL}/${a}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: a === '' ? 1 : 0.7,
  }))
}
