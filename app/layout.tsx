import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://kalmbeforethestorm.com'
const DESCRIPTION =
  'Kalm Before the Storm — conscious hip-hop artist, storyteller, and lyricist from St. Louis, Missouri. Stream Soul Searchin and explore the catalog.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Kalm Before the Storm — Conscious Hip-Hop Artist',
  description: DESCRIPTION,
  keywords: [
    'Kalm Before the Storm',
    'K Carlton Allen',
    'conscious hip-hop',
    'St. Louis rapper',
    'underground hip-hop',
    'Soul Searchin',
    'lyricist',
    'storyteller',
  ],
  authors: [{ name: 'Kalm Before the Storm' }],
  creator: 'Kalm Before the Storm',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Kalm Before the Storm — Conscious Hip-Hop Artist',
    description: DESCRIPTION,
    siteName: 'Kalm Before the Storm',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalm Before the Storm — Conscious Hip-Hop Artist',
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
}

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'Kalm Before the Storm',
  alternateName: 'K Carlton Allen',
  genre: ['Conscious Hip-Hop', 'Underground Hip-Hop'],
  foundingLocation: { '@type': 'Place', name: 'St. Louis, Missouri, USA' },
  url: SITE_URL,
  email: 'kcsallen@gmail.com',
  sameAs: [
    'https://open.spotify.com/artist/7k9mgUyBa834ecy9zkKHHT',
    'https://youtube.com/channel/UCaWb0_TsRAJIVJ7NXafWxBQ',
    'https://instagram.com/kalmsyc1deep',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
