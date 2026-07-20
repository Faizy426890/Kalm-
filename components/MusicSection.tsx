'use client'
import Image from 'next/image'
import { Play, ExternalLink } from 'lucide-react'
import Reveal from './Reveal'
import { IMG } from './media'

const SPOTIFY_ARTIST = 'https://open.spotify.com/artist/7k9mgUyBa834ecy9zkKHHT'

const TRACKS = [
  {
    badge: 'Featured', badgeClass: 'badge-new',
    tag: 'Single · Kalm Before the Storm', title: 'Soul Searchin',
    img: IMG.c,
    youtube: 'https://youtu.be/4iVqop0z8Cs?si=JDJmsiYmiF7Fcr1m',
    spotify: 'https://open.spotify.com/track/4R1QF0oTRNa0TKHzjDtiys?si=c67515d720f646ea',
  },
  {
    badge: 'Single', badgeClass: 'badge-feat',
    tag: 'Single · Kalm Before the Storm', title: 'The World Is A Contradiction',
    img: IMG.a,
    youtube: 'https://youtu.be/Wxpu3kWqyyU?si=Gr6Wlov5Vmqi62Oh',
    spotify: '',
  },
  {
    badge: 'Single', badgeClass: 'badge-live',
    tag: 'Single · Kalm Before the Storm', title: 'Damage Control',
    img: IMG.b,
    youtube: 'https://youtu.be/n7dgOQrqNW4?si=CS_fJUYmwkAziWkI',
    spotify: 'https://open.spotify.com/track/20AEeNCjxYwdY1OIRfZRl2?si=e9c13e71ed8941f6',
  },
  {
    badge: 'Single', badgeClass: 'badge-pink',
    tag: 'Single · Kalm Before the Storm', title: 'Synthetic Society',
    img: IMG.d,
    youtube: 'https://youtu.be/JOeJOiAhBGw?si=b3noJraN5pqYvwSI',
    spotify: '',
  },
  {
    badge: 'Spotify', badgeClass: 'badge-gold',
    tag: 'Single · Kalm Before the Storm', title: 'No Cuffing SZN',
    img: IMG.b,
    youtube: '',
    spotify: 'https://open.spotify.com/track/5veEMajF2PGcBdvXS0tWRC?si=ef7bd6f668474eea',
  },
  {
    badge: 'Spotify', badgeClass: 'badge-gold',
    tag: 'Single · Kalm Before the Storm', title: 'American Bully',
    img: IMG.a,
    youtube: '',
    spotify: 'https://open.spotify.com/track/1tH9Doy7SDbrOBzTZNRZnE?si=c04faa59f7bf41c2',
  },
]

export default function MusicSection() {
  return (
    <section id="music" style={{ padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, marginBottom: 40 }}>
          <div>
            <Reveal direction="right">
              <span className="section-pill" style={{ display: 'inline-flex', marginBottom: 10 }}>🎧 Now Streaming</span>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <h2 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.6rem)', lineHeight: 1.1 }}>
                The Music
              </h2>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <p style={{ marginTop: 8, fontSize: '0.87rem', color: 'var(--text-muted)', maxWidth: 440, lineHeight: 1.7 }}>
                Conscious lyrics and street stories from Kalm Before the Storm. Play a track on YouTube or Spotify.
              </p>
            </Reveal>
          </div>
          <Reveal direction="left">
            <a href={SPOTIFY_ARTIST} target="_blank" rel="noopener noreferrer"
               className="btn-sm-purple">All Music <ExternalLink size={12} /></a>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="tracks-grid">
          {TRACKS.map((track, i) => {
            const primary = track.youtube || track.spotify
            return (
              <Reveal key={track.title} direction={i % 2 === 0 ? 'right' : 'left'} delay={i * 0.07}>
                <div className="card-hover glass" style={{ borderRadius: 20, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  {/* Thumbnail (primary link) */}
                  <a href={primary} target="_blank" rel="noopener noreferrer"
                     style={{ display: 'block', position: 'relative', aspectRatio: '16/10' }}>
                    <Image src={track.img} alt={track.title} fill
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      sizes="(max-width:600px) 100vw, (max-width:900px) 50vw, 33vw"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,11,24,0.85) 0%, rgba(5,11,24,0.1) 55%, transparent 100%)' }} />
                    <span className={`badge ${track.badgeClass}`} style={{ position: 'absolute', top: 12, left: 12 }}>{track.badge}</span>
                    <div style={{
                      position: 'absolute', bottom: 12, right: 12,
                      width: 40, height: 40, borderRadius: '50%', background: 'var(--accent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                      boxShadow: '0 6px 20px rgba(59,130,246,0.5)',
                    }}>
                      <Play size={13} style={{ marginLeft: 2 }} />
                    </div>
                  </a>
                  {/* Body */}
                  <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <p style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--accent-2)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 4 }}>{track.tag}</p>
                    <h3 className="font-syne" style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 12, lineHeight: 1.3 }}>{track.title}</h3>
                    <div style={{ display: 'flex', gap: 8, marginTop: 'auto', flexWrap: 'wrap' }}>
                      {track.youtube && (
                        <a href={track.youtube} target="_blank" rel="noopener noreferrer" className="platform-pill">🎬 YouTube</a>
                      )}
                      {track.spotify && (
                        <a href={track.spotify} target="_blank" rel="noopener noreferrer" className="platform-pill">🎧 Spotify</a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal direction="up" delay={0.2}>
          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <div className="divider" style={{ marginBottom: 28 }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 16 }}>Stream Kalm Before the Storm on all platforms</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
              {[
                { name: 'Spotify', href: SPOTIFY_ARTIST, icon: '🎧' },
                { name: 'YouTube', href: 'https://youtube.com/channel/UCaWb0_TsRAJIVJ7NXafWxBQ?si=QH25JMgWD6xZ0mt2', icon: '🎬' },
                { name: 'Instagram', href: 'https://instagram.com/kalmsyc1deep', icon: '📸' },
              ].map(p => (
                <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="platform-pill">
                  {p.icon} {p.name}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .tracks-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        @media(max-width:900px){ .tracks-grid { grid-template-columns: 1fr 1fr; } }
        @media(max-width:600px){ .tracks-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
