'use client'

const ITEMS = [
  'Kalm Before the Storm · Conscious Hip-Hop',
  'Soul Searchin · Out Now',
  'Top 10 In Listens On Spinz 92.9',
  'Excellent Review From MusicReviewWorld',
  'St. Louis, Missouri · Storyteller · Lyricist',
  'Stream On Spotify · YouTube',
  'Upcoming Mixtape: Note 2 Self',
  'Follow @kalmsyc1deep On Instagram',
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
