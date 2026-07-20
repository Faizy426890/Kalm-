'use client'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import Reveal from './Reveal'
import { IMG } from './media'

const BANNER = IMG.d

const SPOTIFY = 'https://open.spotify.com/artist/7k9mgUyBa834ecy9zkKHHT'
const YOUTUBE = 'https://youtube.com/channel/UCaWb0_TsRAJIVJ7NXafWxBQ?si=QH25JMgWD6xZ0mt2'
const INSTAGRAM = 'https://instagram.com/kalmsyc1deep'

const PLATFORMS = [
  {
    name: 'Spotify',
    handle: 'Kalm Before the Storm',
    desc: 'Stream the full catalog, including Soul Searchin, on Spotify.',
    href: SPOTIFY,
    color: '#1DB954',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: 'Kalm Before the Storm',
    desc: 'Watch every music video and visual from the catalog.',
    href: YOUTUBE,
    color: '#3B82F6',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '@kalmsyc1deep',
    desc: 'Follow for updates, releases, and behind the scenes.',
    href: INSTAGRAM,
    color: '#818CF8',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
]

export default function SocialSection() {
  return (
    <section id="social" style={{ padding: '80px 0', background: 'var(--bg-deep)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-end', gap:20, marginBottom:32 }}>
          <div>
            <Reveal direction="right">
              <span className="section-pill" style={{ display:'inline-flex', marginBottom:10 }}>🔗 Stream &amp; Follow</span>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <h2 className="font-syne" style={{ fontWeight:900, fontSize:'clamp(1.8rem,3vw,2.6rem)', lineHeight:1.1 }}>
                Find the Music Everywhere
              </h2>
            </Reveal>
            <Reveal direction="right" delay={0.15}>
              <p style={{ color:'var(--text-muted)', fontSize:'0.9rem', marginTop:8, maxWidth:420, lineHeight:1.7 }}>
                Pick your platform and hit play, or follow along for what's next.
              </p>
            </Reveal>
          </div>
          <Reveal direction="left">
            <button onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior:'smooth' })} className="btn-green">Book a Performance</button>
          </Reveal>
        </div>

        {/* Hero banner */}
        <Reveal direction="up">
          <div style={{ borderRadius:24, overflow:'hidden', position:'relative', height:320, marginBottom:36 }}>
            <Image src={BANNER} alt="Kalm Before the Storm" fill style={{ objectFit:'cover', objectPosition:'center' }} sizes="1280px" />
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg, rgba(5,11,24,0.9) 0%, rgba(59,130,246,0.25) 100%)' }} />
            <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'center', padding:'48px' }}>
              <h3 className="font-syne" style={{ fontWeight:900, fontSize:'clamp(1.6rem,3vw,2.5rem)', marginBottom:8 }}>
                Conscious Hip-Hop, Unfiltered
              </h3>
              <p style={{ color:'var(--text-muted)', fontSize:'0.9rem', marginBottom:24, maxWidth:440 }}>
                Real stories and sharp lyricism from St. Louis. Stream the catalog or watch the visuals.
              </p>
              <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                <a href={SPOTIFY} target="_blank" rel="noopener noreferrer" className="btn-green">Listen Now</a>
                <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" className="btn-outline">Watch on YouTube</a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Platform cards */}
        <div className="social-grid">
          {PLATFORMS.map((p, i) => (
            <Reveal key={p.name} direction="up" delay={i * 0.1}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover glass"
                style={{ display:'block', borderRadius:20, overflow:'hidden', textDecoration:'none', transition:'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = p.color + '66'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
              >
                <div style={{ height:4, background: p.color, width:'100%' }} />
                <div style={{ padding:24 }}>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16 }}>
                    <div style={{
                      width:52, height:52, borderRadius:14,
                      background: p.color + '18',
                      border: `1px solid ${p.color}44`,
                      display:'flex', alignItems:'center', justifyContent:'center',
                      color: p.color,
                    }}>
                      {p.icon}
                    </div>
                    <ExternalLink size={16} color="var(--text-dim)" />
                  </div>
                  <h3 className="font-syne" style={{ fontWeight:800, fontSize:'1.15rem', marginBottom:4, color:'#fff' }}>{p.name}</h3>
                  <p style={{ fontSize:'0.72rem', color: p.color, fontWeight:600, marginBottom:10, letterSpacing:'0.03em' }}>{p.handle}</p>
                  <p style={{ fontSize:'0.82rem', color:'var(--text-muted)', lineHeight:1.6 }}>{p.desc}</p>
                  <div style={{
                    marginTop:20, display:'inline-flex', alignItems:'center', gap:6,
                    background: p.color + '18', border:`1px solid ${p.color}44`,
                    borderRadius:8, padding:'8px 14px', fontSize:'0.78rem', fontWeight:700, color: p.color,
                  }}>
                    Open {p.name}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Booking banner */}
        <Reveal direction="up" delay={0.2}>
          <div className="glass" style={{ marginTop:40, border:'1px solid rgba(59,130,246,0.25)', borderRadius:20, padding:40, textAlign:'center' }}>
            <h3 className="font-syne" style={{ fontWeight:900, fontSize:'1.5rem', marginBottom:8 }}>Want Kalm Before the Storm at Your Event?</h3>
            <p style={{ color:'var(--text-muted)', fontSize:'0.87rem', marginBottom:24 }}>Venues, bars, festivals, colleges, corporate, and private events. Let's make it happen.</p>
            <div style={{ display:'flex', justifyContent:'center', flexWrap:'wrap', gap:12 }}>
              <button onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior:'smooth' })} className="btn-green">📅 Book a Performance</button>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn-outline">@kalmsyc1deep</a>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .social-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        @media(max-width:900px){ .social-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
