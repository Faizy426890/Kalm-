import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GM James — Till Next Time',
  description: 'Independent Hip-Hop Artist from South Florida. 800+ songs. 98 weekly drops. One debut album born from grief, love, and legacy.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
