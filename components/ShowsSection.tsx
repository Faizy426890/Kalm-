'use client'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import Reveal from './Reveal'

const SHOWS_HERO = 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1400&q=80'

const PLATFORMS = [
  {
    name: 'YouTube',
    handle: '@gmjamesmusic',
    desc: 'Music videos, live performances & the Till Next Time short film',
    href: 'https://www.youtube.com/@gmjamesmusic',
    color: '#FF0000',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: 'Spotify',
    handle: 'GM James',
    desc: 'Stream the full catalog including Till Next Time on Spotify',
    href: 'https://open.spotify.com/artist/1vOQzKkm4fV56IzcaMHVoo?si=GwoLW4M8SD-6Ms1IdFnsuQ',
    color: '#1DB954',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
  },
  {
    name: 'Tidal',
    handle: 'GM James',
    desc: 'High-fidelity streaming — experience every bar in full quality',
    href: 'https://tidal.com/artist/49152881/u',
    color: '#00FFFF',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996l4.004 4.004 4.004-4.004 4.004 4.004 4.004-4.004zM8.008 16.004l-4.004-4.004L0 16.004l4.004 4.004zm7.996 0l4.004-4.004L24 16.004l-4.004 4.004zM12.012 12l-4.004 4.004 4.004 4.004 4.004-4.004z"/>
      </svg>
    ),
  },
  {
    name: 'Apple Music',
    handle: 'GM James',
    desc: 'Available on Apple Music. Add to your library today',
    href: 'https://music.apple.com/us/artist/gm-james/1757844824',
    color: '#FC3C44',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a6.303 6.303 0 0 0-1.912-.77c-.535-.123-1.08-.188-1.628-.2-.06-.001-1.133-.015-1.133-.015H7.1S6.027 0 5.967.001c-.548.012-1.093.077-1.628.2a6.303 6.303 0 0 0-1.912.77C1.308 1.734.563 2.734.246 4.044A9.23 9.23 0 0 0 .006 6.234C0 6.41 0 6.59 0 6.77v10.46c0 .18 0 .36.006.54a9.23 9.23 0 0 0 .24 2.19c.317 1.31 1.062 2.31 2.18 3.043a6.303 6.303 0 0 0 1.912.77c.535.123 1.08.188 1.628.2.36.008.72.012 1.08.012h8.908c.36 0 .72-.004 1.08-.012.548-.012 1.093-.077 1.628-.2a6.303 6.303 0 0 0 1.912-.77c1.118-.733 1.863-1.733 2.18-3.043a9.23 9.23 0 0 0 .24-2.19c.006-.18.006-.36.006-.54V6.77c0-.18 0-.36-.006-.54zM16.8 7.38l-4.43 2.56V6.47l-.002-.001.002-.001V3l4.43 2.56v1.82zm-8.73 2.56L3.64 7.38V5.56L8.07 3v3.47l-.002.001.002.001v3.47z"/>
      </svg>
    ),
  },
]

export default function ShowsSection() {
  return (
    <section id="shows" style={{ padding: '80px 0', background: 'linear-gradient(180deg, var(--bg-deep) 0%, var(--purple-dark) 100%)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-end', gap:20, marginBottom:32 }}>
          <div>
            <Reveal direction="right">
              <span className="section-pill" style={{ display:'inline-flex', marginBottom:10 }}>🎵 Stream &amp; Watch</span>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <h2 className="font-syne" style={{ fontWeight:900, fontSize:'clamp(1.8rem,3vw,2.6rem)', lineHeight:1.1 }}>
                Listen on All Platforms
              </h2>
            </Reveal>
            <Reveal direction="right" delay={0.15}>
              <p style={{ color:'var(--text-muted)', fontSize:'0.9rem', marginTop:8, maxWidth:420, lineHeight:1.7 }}>
                Stream GM James everywhere music lives. Pick your platform and hit play.
              </p>
            </Reveal>
          </div>
          <Reveal direction="left">
            <a href="mailto:Jayreuschle@yahoo.com" className="btn-green">Book a Show</a>
          </Reveal>
        </div>

        {/* Hero banner */}
        <Reveal direction="up">
          <div style={{ borderRadius:24, overflow:'hidden', position:'relative', height:320, marginBottom:36 }}>
            <Image src={SHOWS_HERO} alt="GM James live" fill style={{ objectFit:'cover', objectPosition:'center', opacity:0.45 }} sizes="1280px" />
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg, rgba(5,5,5,0.82) 0%, rgba(193,18,31,0.18) 100%)' }} />
            <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'center', padding:'48px' }}>
              <h3 className="font-syne" style={{ fontWeight:900, fontSize:'clamp(1.6rem,3vw,2.5rem)', marginBottom:8 }}>
                South Florida's Finest
              </h3>
              <p style={{ color:'var(--text-muted)', fontSize:'0.9rem', marginBottom:24, maxWidth:420 }}>
                Raw energy. Real lyrics. Stream the full catalog or watch the Till Next Time short film.
              </p>
              <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                <a href="https://open.spotify.com/artist/1vOQzKkm4fV56IzcaMHVoo?si=GwoLW4M8SD-6Ms1IdFnsuQ" target="_blank" rel="noopener noreferrer" className="btn-green">Stream Now</a>
                <a href="https://www.youtube.com/@gmjamesmusic" target="_blank" rel="noopener noreferrer" className="btn-outline">Watch on YouTube</a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Platform cards */}
        <div className="shows-grid">
          {PLATFORMS.map((p, i) => (
            <Reveal key={p.name} direction="up" delay={i * 0.1}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover"
                style={{
                  display:'block', background:'var(--bg-card)', border:'1px solid var(--border)',
                  borderRadius:20, overflow:'hidden', textDecoration:'none',
                  transition:'border-color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = p.color + '66'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
              >
                {/* Top accent bar */}
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
                  <p style={{ fontSize:'0.8rem', color:'var(--text-muted)', lineHeight:1.6 }}>{p.desc}</p>
                  <div style={{
                    marginTop:20, display:'inline-flex', alignItems:'center', gap:6,
                    background: p.color + '18', border:`1px solid ${p.color}44`,
                    borderRadius:8, padding:'8px 14px', fontSize:'0.78rem', fontWeight:700, color: p.color,
                  }}>
                    Listen on {p.name}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Booking banner */}
        <Reveal direction="up" delay={0.2}>
          <div style={{ marginTop:40, background:'var(--bg-card)', border:'1px solid rgba(193,18,31,0.25)', borderRadius:20, padding:40, textAlign:'center' }}>
            <h3 className="font-syne" style={{ fontWeight:900, fontSize:'1.5rem', marginBottom:8 }}>Want GM James at Your Event?</h3>
            <p style={{ color:'var(--text-muted)', fontSize:'0.87rem', marginBottom:24 }}>Private events, venues, festivals, and more. Let's make it happen.</p>
            <div style={{ display:'flex', justifyContent:'center', flexWrap:'wrap', gap:12 }}>
              <a href="mailto:Jayreuschle@yahoo.com" className="btn-green">📧 Jayreuschle@yahoo.com</a>
              <a href="https://instagram.com/gmjames561" target="_blank" rel="noopener noreferrer" className="btn-outline">@gmjames561</a>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .shows-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; }
        @media(max-width:1100px){ .shows-grid { grid-template-columns: repeat(2,1fr); } }
        @media(max-width:600px){ .shows-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
