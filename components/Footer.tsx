'use client'
import { Music } from 'lucide-react'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer style={{ background: 'var(--bg-deep)', borderTop: '1px solid var(--border)', padding: '48px 24px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:12 }}>
              <span style={{ width:32, height:32, background:'var(--neon-green)', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Music size={16} color="#fff" />
              </span>
              <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:900, fontSize:'1.15rem' }}>
                GM<span style={{ color:'var(--neon-green)' }}>James</span>
              </span>
            </div>
            <p style={{ color:'var(--text-muted)', fontSize:'0.82rem', lineHeight:1.7, maxWidth:260 }}>
              Independent Hip-Hop Artist from South Florida. 800+ songs. Real rhymes. Real stories.
            </p>
          </div>

          {/* Links */}
          <div>
            <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:16, color:'var(--text-dim)' }}>Navigation</p>
            {['#music','#about','#album','#shows','#gallery','#connect'].map(href => (
              <button key={href} onClick={() => document.querySelector(href)?.scrollIntoView({ behavior:'smooth' })}
                style={{ display:'block', background:'none', border:'none', color:'var(--text-muted)', fontSize:'0.85rem', padding:'4px 0', cursor:'pointer', textAlign:'left', textTransform:'capitalize', transition:'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color='#fff')}
                onMouseLeave={e => (e.currentTarget.style.color='var(--text-muted)')}
              >
                {href.replace('#','')}
              </button>
            ))}
          </div>

          {/* Stream */}
          <div>
            <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:16, color:'var(--text-dim)' }}>Stream</p>
            {[
              { name:'Spotify', href:'https://open.spotify.com/artist/1vOQzKkm4fV56IzcaMHVoo' },
              { name:'Apple Music', href:'https://music.apple.com/us/artist/gm-james/1757844824' },
              { name:'Tidal', href:'https://tidal.com/artist/49152881/u' },
              { name:'YouTube Music', href:'https://youtube.com/@gmjamesmusic' },
            ].map(p => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                 style={{ display:'block', color:'var(--text-muted)', fontSize:'0.85rem', padding:'4px 0', textDecoration:'none', transition:'color 0.2s' }}
                 onMouseEnter={e => (e.currentTarget.style.color='#fff')}
                 onMouseLeave={e => (e.currentTarget.style.color='var(--text-muted)')}
              >{p.name}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:16, color:'var(--text-dim)' }}>Contact</p>
            <a href="mailto:Jayreuschle@yahoo.com" style={{ display:'block', color:'var(--purple-light)', fontSize:'0.85rem', marginBottom:8, textDecoration:'none' }}>Jayreuschle@yahoo.com</a>
            <a href="https://instagram.com/gmjames561" target="_blank" rel="noopener noreferrer" style={{ display:'block', color:'var(--text-muted)', fontSize:'0.85rem', marginBottom:8, textDecoration:'none' }}>@gmjames561</a>
            <a href="https://youtube.com/@gmjamesmusic" target="_blank" rel="noopener noreferrer" style={{ display:'block', color:'var(--text-muted)', fontSize:'0.85rem', textDecoration:'none' }}>@gmjamesmusic</a>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', marginTop:40, paddingTop:24, display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'center', gap:12 }}>
          <p style={{ color:'var(--text-dim)', fontSize:'0.75rem' }}>
            © 2026 GM James · James Reuschle · All rights reserved
          </p>
          <button onClick={scrollTop}
            style={{ background:'rgba(193,18,31,0.12)', border:'1px solid rgba(193,18,31,0.25)', color:'var(--purple-light)', padding:'8px 16px', borderRadius:8, cursor:'pointer', fontSize:'0.75rem', fontFamily:"'Syne',sans-serif", fontWeight:600, transition:'all 0.25s cubic-bezier(0.16,1,0.3,1)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='var(--purple-accent)'; (e.currentTarget as HTMLElement).style.color='#fff'; (e.currentTarget as HTMLElement).style.boxShadow='0 4px 20px rgba(193,18,31,0.35)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background='rgba(193,18,31,0.12)'; (e.currentTarget as HTMLElement).style.color='var(--purple-light)'; (e.currentTarget as HTMLElement).style.boxShadow='none'; }}
          >
            Till Next Time ↑
          </button>
        </div>
      </div>

      <style>{`
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; }
        @media(max-width:900px){ .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; } }
        @media(max-width:500px){ .footer-grid { grid-template-columns: 1fr; } }
      `}</style>
    </footer>
  )
}
