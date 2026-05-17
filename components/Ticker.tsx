'use client'

const ITEMS = [
  'GM James · Till Next Time · Out Now',
  '98 Records Dropped In A Single Year',
  '800+ Songs Strong In The Vault',
  'Stream On Spotify · Apple Music · Tidal · YouTube',
  'Booking: Jayreuschle@yahoo.com',
  "South Florida's Hardest Working Rapper",
  'New Album: Till Next Time · 10 Songs · 36 Minutes',
  'Follow @gmjames561 On Instagram & TikTok',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
