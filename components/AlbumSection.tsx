'use client'
import Image from 'next/image'
import { Play, Music, Clock, Film, ExternalLink } from 'lucide-react'
import Reveal from './Reveal'

const ALBUM_IMG = 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80'

const TRACKLIST = [
  { num: '01', title: 'Till Next Time (Intro)', time: '3:42' },
  { num: '02', title: 'No Goodbyes', time: '3:58' },
  { num: '03', title: 'Vault Memories', time: '4:12' },
  { num: '04', title: 'South Florida State of Mind', time: '3:35' },
  { num: '05', title: 'Dear Mama (Legacy)', time: '4:48' },
  { num: '06', title: '98 Weeks', time: '3:22' },
  { num: '07', title: 'Continuation', time: '3:55' },
  { num: '08', title: 'GM James (Identity)', time: '4:01' },
  { num: '09', title: '800 Strong', time: '3:38' },
  { num: '10', title: 'Till Next Time (Outro)', time: '4:29' },
]

export default function AlbumSection() {
  return (
    <section id="album" style={{ padding: '80px 0', background: 'var(--bg-deep)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, marginBottom: 40 }}>
          <div>
            <Reveal direction="right">
              <span className="section-pill" style={{ display: 'inline-flex', marginBottom: 10 }}>🎤 Featured Release</span>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <h2 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.6rem)', lineHeight: 1.1 }}>
                The Album You Can't Miss
              </h2>
            </Reveal>
          </div>
          <Reveal direction="left">
            <a href="https://open.spotify.com/artist/1vOQzKkm4fV56IzcaMHVoo" target="_blank" rel="noopener noreferrer"
               className="btn-sm-purple">Listen Now <ExternalLink size={12} /></a>
          </Reveal>
        </div>

        {/* Featured card */}
        <Reveal direction="up" delay={0.1}>
          <div style={{
            borderRadius: 28, overflow: 'hidden', position: 'relative', marginBottom: 40,
            background: 'linear-gradient(135deg,#0f0808,#050505)',
            border: '1px solid rgba(193,18,31,0.35)', minHeight: 420,
          }}>
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(193,18,31,0.15), transparent)',
            }} />
            <div className="album-feature-inner">
              {/* Info */}
              <div style={{ padding: '40px', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontSize: '0.68rem', fontWeight: 800, fontFamily: "'Syne',sans-serif", color: 'var(--neon-green)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
                  🎵 Latest Album · 2025
                </p>
                <h3 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(2.5rem,4vw,4rem)', lineHeight: 1.02, marginBottom: 16 }}>
                  Till <em style={{ fontStyle: 'normal', color: 'var(--neon-green)' }}>Next</em><br />Time.
                </h3>
                <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 24, maxWidth: 380 }}>
                  A 10-song, 36-minute short film and album. Born from grief, love, and the relentless pursuit of legacy. Every track is a chapter; every bar is lived experience.
                </p>

                {/* Meta */}
                <div style={{ display: 'flex', gap: 24, marginBottom: 28, flexWrap: 'wrap' }}>
                  {[
                    { icon: <Music size={13} />, label: 'Tracks', val: '10 Songs' },
                    { icon: <Clock size={13} />, label: 'Runtime', val: '36 Minutes' },
                    { icon: <Film size={13} />, label: 'Format', val: 'Album + Film' },
                  ].map(m => (
                    <div key={m.label}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2, color: 'var(--text-dim)', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                        {m.icon} {m.label}
                      </div>
                      <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{m.val}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  <a href="https://open.spotify.com/artist/1vOQzKkm4fV56IzcaMHVoo?si=GwoLW4M8SD-6Ms1IdFnsuQ" target="_blank" rel="noopener noreferrer" className="btn-green">
                    <Play size={14} /> Stream on Spotify
                  </a>
                  <a href="https://music.apple.com/us/artist/gm-james/1757844824" target="_blank" rel="noopener noreferrer" className="btn-outline">Apple Music</a>
                  <a href="https://tidal.com/artist/49152881/u" target="_blank" rel="noopener noreferrer" className="btn-outline">Tidal</a>
                </div>
              </div>

              {/* Image */}
              <div style={{ position: 'relative', minHeight: 300 }}>
                <Image src={ALBUM_IMG} alt="Till Next Time Album" fill
                  style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.7 }} sizes="600px" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0f0808 0%, rgba(15,8,8,0.35) 50%, transparent 100%)' }} />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Tracklist + About */}
        <div className="album-bottom">
          {/* Tracklist */}
          <div>
            <Reveal direction="right">
              <h3 className="font-syne" style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 32, height: 32, background: 'var(--purple-accent)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Music size={14} />
                </span>
                Tracklist
              </h3>
            </Reveal>
            <div>
              {TRACKLIST.map((t, i) => (
                <Reveal key={t.num} direction="right" delay={i * 0.04}>
                  <a href="https://open.spotify.com/artist/1vOQzKkm4fV56IzcaMHVoo" target="_blank" rel="noopener noreferrer"
                     className="track-row-link"
                     style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px 12px', borderRadius: 12, transition: 'all 0.2s', textDecoration: 'none', border: '1px solid transparent' }}
                     onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background='var(--bg-card)'; el.style.borderColor='var(--border)'; (el.querySelector('.t-play') as HTMLElement).style.opacity='1'; }}
                     onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background='transparent'; el.style.borderColor='transparent'; (el.querySelector('.t-play') as HTMLElement).style.opacity='0'; }}
                  >
                    <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'0.78rem', color:'var(--text-dim)', width:28, textAlign:'right', flexShrink:0 }}>{t.num}</span>
                    <span className="t-play" style={{ width:30, height:30, borderRadius:8, background:'var(--neon-green)', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', flexShrink:0, opacity:0, transition:'opacity 0.2s' }}>
                      <Play size={10} style={{ marginLeft:1 }} />
                    </span>
                    <span style={{ flex:1, fontSize:'0.87rem', fontWeight:500, color:'#fff' }}>{t.title}</span>
                    <span style={{ fontSize:'0.72rem', color:'var(--text-dim)' }}>{t.time}</span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* About + Stream */}
          <div>
            <Reveal direction="left" delay={0.1}>
              <div style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:20, padding:28, marginBottom:20 }}>
                <h3 className="font-syne" style={{ fontWeight:700, fontSize:'1rem', marginBottom:12 }}>About the Album</h3>
                <p style={{ fontSize:'0.83rem', color:'var(--text-muted)', lineHeight:1.75, marginBottom:10 }}>
                  <em>Till Next Time</em> began as GM James's first solo project since 2018. Paired with a short film documenting the album's creation, it reflects both loss and legacy — a phrase that doubles as a mindset.
                </p>
                <p style={{ fontSize:'0.83rem', color:'var(--text-muted)', lineHeight:1.75, marginBottom:10 }}>
                  Following the passing of his mother, GM James went all in. The album is his answer to grief — not silence, but creation. Not goodbye, but continuation.
                </p>
                <p style={{ fontSize:'0.83rem', fontStyle:'italic', color:'var(--purple-light)' }}>
                  "Whether for the music still waiting in the vault, the loved ones gone too soon, or the family that fuels him forward — Till Next Time."
                </p>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <div style={{ background:'linear-gradient(135deg,var(--purple-dark),var(--bg-card))', border:'1px solid rgba(193,18,31,0.25)', borderRadius:20, padding:28 }}>
                <h3 className="font-syne" style={{ fontWeight:700, fontSize:'1rem', marginBottom:16 }}>Stream Everywhere</h3>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
                  {[
                    { name: 'Spotify', href: 'https://open.spotify.com/artist/1vOQzKkm4fV56IzcaMHVoo?si=GwoLW4M8SD-6Ms1IdFnsuQ' },
                    { name: 'Apple Music', href: 'https://music.apple.com/us/artist/gm-james/1757844824' },
                    { name: 'Tidal', href: 'https://tidal.com/artist/49152881/u' },
                    { name: 'YouTube Music', href: 'https://youtube.com/@gmjamesmusic' },
                  ].map(p => (
                    <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                       className="btn-sm-purple" style={{ justifyContent:'center', textAlign:'center' }}>{p.name}</a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        .album-feature-inner { display: grid; grid-template-columns: 1fr 1fr; min-height: 420px; }
        .album-bottom { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
        @media(max-width:900px){
          .album-feature-inner { grid-template-columns: 1fr; }
          .album-bottom { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
