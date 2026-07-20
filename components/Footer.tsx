'use client'
import { useState } from 'react'
import { CloudLightning, Send, Check } from 'lucide-react'

const SPOTIFY = 'https://open.spotify.com/artist/7k9mgUyBa834ecy9zkKHHT'
const YOUTUBE = 'https://youtube.com/channel/UCaWb0_TsRAJIVJ7NXafWxBQ?si=QH25JMgWD6xZ0mt2'
const INSTAGRAM = 'https://instagram.com/kalmsyc1deep'

const NAV = [
  { label: 'Music', href: '#music' },
  { label: 'About', href: '#about' },
  { label: 'Featured', href: '#featured' },
  { label: 'Themes', href: '#themes' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Videos', href: '#videos' },
  { label: 'Booking', href: '#booking' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer style={{ background: 'var(--bg-deep)', borderTop: '1px solid var(--border)', padding: '48px 24px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="footer-grid">
          {/* Brand + newsletter */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:12 }}>
              <span style={{ width:32, height:32, background:'var(--accent)', borderRadius:9, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <CloudLightning size={16} color="#fff" />
              </span>
              <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:900, fontSize:'1.05rem' }}>
                Kalm <span style={{ color:'var(--accent-2)' }}>Before the Storm</span>
              </span>
            </div>
            <p style={{ color:'var(--text-muted)', fontSize:'0.82rem', lineHeight:1.7, maxWidth:280, marginBottom:18 }}>
              Conscious hip-hop artist, storyteller, and lyricist from St. Louis, Missouri.
            </p>

            {/* Newsletter */}
            <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'0.72rem', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:10, color:'var(--text-dim)' }}>Newsletter</p>
            {subscribed ? (
              <div style={{ display:'flex', alignItems:'center', gap:8, color:'var(--accent-2)', fontSize:'0.85rem', fontWeight:600 }}>
                <Check size={16} /> You're on the list. Thank you.
              </div>
            ) : (
              <form onSubmit={subscribe} style={{ display:'flex', gap:8, maxWidth:300 }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email"
                  aria-label="Email for newsletter"
                  style={{ flex:1, padding:'10px 14px', fontSize:'0.82rem' }}
                />
                <button type="submit" className="btn-green" aria-label="Subscribe" style={{ padding:'10px 14px' }}>
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:16, color:'var(--text-dim)' }}>Navigation</p>
            {NAV.map(link => (
              <button key={link.href} onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior:'smooth' })}
                style={{ display:'block', background:'none', border:'none', color:'var(--text-muted)', fontSize:'0.85rem', padding:'4px 0', cursor:'pointer', textAlign:'left', transition:'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color='#fff')}
                onMouseLeave={e => (e.currentTarget.style.color='var(--text-muted)')}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Stream */}
          <div>
            <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'0.8rem', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:16, color:'var(--text-dim)' }}>Stream &amp; Follow</p>
            {[
              { name:'Spotify', href:SPOTIFY },
              { name:'YouTube', href:YOUTUBE },
              { name:'Instagram', href:INSTAGRAM },
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
            <a href="mailto:kcsallen@gmail.com" style={{ display:'block', color:'var(--accent-2)', fontSize:'0.85rem', marginBottom:8, textDecoration:'none' }}>kcsallen@gmail.com</a>
            <a href="mailto:kalmsyc1deep@gmail.com" style={{ display:'block', color:'var(--accent-2)', fontSize:'0.85rem', marginBottom:8, textDecoration:'none' }}>kalmsyc1deep@gmail.com</a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" style={{ display:'block', color:'var(--text-muted)', fontSize:'0.85rem', textDecoration:'none' }}>@kalmsyc1deep</a>
          </div>
        </div>

        <div style={{ borderTop:'1px solid var(--border)', marginTop:40, paddingTop:24, display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'center', gap:12 }}>
          <p style={{ color:'var(--text-dim)', fontSize:'0.75rem' }}>
            © 2026 Kalm Before the Storm · K Carlton Allen · All rights reserved
          </p>
          <button onClick={scrollTop}
            style={{ background:'rgba(59,130,246,0.12)', border:'1px solid rgba(59,130,246,0.25)', color:'var(--accent-2)', padding:'8px 16px', borderRadius:8, cursor:'pointer', fontSize:'0.75rem', fontFamily:"'Syne',sans-serif", fontWeight:600, transition:'all 0.25s cubic-bezier(0.16,1,0.3,1)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='var(--accent)'; (e.currentTarget as HTMLElement).style.color='#fff'; (e.currentTarget as HTMLElement).style.boxShadow='0 4px 20px rgba(59,130,246,0.35)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background='rgba(59,130,246,0.12)'; (e.currentTarget as HTMLElement).style.color='var(--accent-2)'; (e.currentTarget as HTMLElement).style.boxShadow='none'; }}
          >
            Back to Top ↑
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
