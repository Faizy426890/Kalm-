'use client'
import Image from 'next/image'
import { Play, ExternalLink } from 'lucide-react'
import Reveal from './Reveal'

const PROFILE = 'https://res.cloudinary.com/daxjhteb5/image/upload/v1777752217/WhatsApp_Image_2026-05-03_at_00.47.51_wkkium.jpg'

const TRACKS = [
  {
    badge: 'New', badgeClass: 'badge-new',
    tag: 'Album · 2025', title: 'Till Next Time',
    meta: '10 Songs · 36 min · Short Film',
    href: 'https://open.spotify.com/artist/1vOQzKkm4fV56IzcaMHVoo',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80',
  },
  {
    badge: 'Featured', badgeClass: 'badge-feat',
    tag: 'Collab · 2020', title: 'Dear Bad Cops ft. Boom Marley',
    meta: 'Social Justice · Debut Collab',
    href: 'https://open.spotify.com/artist/1vOQzKkm4fV56IzcaMHVoo',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
  },
  {
    badge: 'Catalog', badgeClass: 'badge-live',
    tag: 'Weekly Drops · 2024', title: '98-Record Streak',
    meta: 'A song every week · 1 year',
    href: 'https://youtube.com/@gmjamesmusic',
    img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80',
  },
  {
    badge: 'Film', badgeClass: 'badge-gold',
    tag: 'Short Film · 2025', title: 'Till Next Time — Documentary',
    meta: 'Album creation · Behind the scenes',
    href: 'https://youtube.com/@gmjamesmusic',
    img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80',
  },
  {
    badge: 'Single', badgeClass: 'badge-pink',
    tag: 'Single · 2024', title: 'Vault Picks',
    meta: 'Best of 800+ vault tracks',
    href: 'https://open.spotify.com/artist/1vOQzKkm4fV56IzcaMHVoo',
    img: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&q=80',
  },
  {
    badge: 'Live', badgeClass: 'badge-feat',
    tag: 'Performance', title: 'Live in South Florida',
    meta: 'Raw energy · Crowd moments',
    href: 'https://youtube.com/@gmjamesmusic',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80',
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
                This Week's Featured Tracks
              </h2>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <p style={{ marginTop: 8, fontSize: '0.87rem', color: 'var(--text-muted)', maxWidth: 420, lineHeight: 1.7 }}>
                From the vault of GM James — 98 releases and counting. Real stories, raw rhymes, and an unmatched work ethic.
              </p>
            </Reveal>
          </div>
          <Reveal direction="left">
            <a href="https://open.spotify.com/artist/1vOQzKkm4fV56IzcaMHVoo" target="_blank" rel="noopener noreferrer"
               className="btn-sm-purple">All Music <ExternalLink size={12} /></a>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="tracks-grid">
          {TRACKS.map((track, i) => (
            <Reveal key={track.title} direction={i % 2 === 0 ? 'right' : 'left'} delay={i * 0.07}>
              <a href={track.href} target="_blank" rel="noopener noreferrer"
                 className="card-hover"
                 style={{
                   display: 'block', borderRadius: 20, overflow: 'hidden',
                   background: 'var(--bg-card)', border: '1px solid var(--border)',
                   textDecoration: 'none',
                 }}
              >
                {/* Thumbnail */}
                <div style={{ position: 'relative', aspectRatio: '16/10' }}>
                  <Image src={track.img} alt={track.title} fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(max-width:600px) 100vw, (max-width:900px) 50vw, 33vw"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,5,0.75) 0%, transparent 60%)' }} />
                  <span className={`badge ${track.badgeClass}`} style={{ position: 'absolute', top: 12, left: 12 }}>{track.badge}</span>
                  <div style={{
                    position: 'absolute', bottom: 12, right: 12,
                    width: 40, height: 40, borderRadius: '50%', background: 'var(--neon-green)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                  }}>
                    <Play size={13} style={{ marginLeft: 2 }} />
                  </div>
                </div>
                {/* Body */}
                <div style={{ padding: '16px' }}>
                  <p style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--purple-light)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 4 }}>{track.tag}</p>
                  <h3 className="font-syne" style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 4, lineHeight: 1.3 }}>{track.title}</h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{track.meta}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal direction="up" delay={0.2}>
          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <div className="divider" style={{ marginBottom: 28 }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 16 }}>Stream GM James on all major platforms</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
              {[
                { name: 'Spotify', href: 'https://open.spotify.com/artist/1vOQzKkm4fV56IzcaMHVoo?si=GwoLW4M8SD-6Ms1IdFnsuQ', icon: '🎵' },
                { name: 'Apple Music', href: 'https://music.apple.com/us/artist/gm-james/1757844824', icon: '🍎' },
                { name: 'Tidal', href: 'https://tidal.com/artist/49152881/u', icon: '🌊' },
                { name: 'YouTube', href: 'https://youtube.com/@gmjamesmusic', icon: '🎬' },
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
