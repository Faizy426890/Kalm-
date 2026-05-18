'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, ChevronDown } from 'lucide-react'

const PROFILE = 'https://res.cloudinary.com/daxjhteb5/image/upload/v1777752217/WhatsApp_Image_2026-05-03_at_00.47.51_wkkium.jpg'

const HERO_IMG = 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80'

export default function Hero() {
  const scrollDown = () =>
    document.querySelector('#ticker-section')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        paddingTop: 68, position: 'relative', overflow: 'hidden',
        background: 'var(--bg-deep)',
      }}
    >
      {/* BG glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 60% at 65% 55%, rgba(193,18,31,0.16) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 5% 20%, rgba(193,18,31,0.05) 0%, transparent 60%)',
      }} />

      {/* Faded full-bleed background image */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '65%', height: '100%', overflow: 'hidden', pointerEvents: 'none' }}>
        <Image src={HERO_IMG} alt="bg" fill priority
          className="hero-bg-fade"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }}
          sizes="55vw"
        />
      </div>

      <div style={{
        maxWidth: 1280, margin: '0 auto', width: '100%', padding: '60px 24px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center',
        position: 'relative', zIndex: 2,
      }} className="hero-grid">

        {/* ── Left ── */}
        <div>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16,1,0.3,1] }}>
            <span className="section-pill" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--neon-green)' }} />
              Independent Artist · South Florida
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16,1,0.3,1] }}
            style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 900,
              lineHeight: 1.02, letterSpacing: '-0.02em',
              fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)',
              marginBottom: 24, marginTop: 16,
            }}
          >
            Real Rhymes.<br />
            Real <span className="gradient-text">Stories.</span><br />
            <span style={{ color: 'var(--neon-green)' }}>Till Next Time.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16,1,0.3,1] }}
            style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.75, marginBottom: 32, maxWidth: 520 }}
          >
            Born James Reuschle in South Florida. 98 records in a single year. 800+
            songs in the vault. A debut solo album born from grief, love, and legacy.
            GM James signs off the same way every time.{' '}
            <em style={{ color: '#fff' }}>Till Next Time.</em>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16,1,0.3,1] }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}
          >
            <a href="https://open.spotify.com/artist/1vOQzKkm4fV56IzcaMHVoo?si=GwoLW4M8SD-6Ms1IdFnsuQ"
               target="_blank" rel="noopener noreferrer" className="btn-green glow-pulse">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Stream on Spotify
            </a>
            <a href="https://youtube.com/@gmjamesmusic?si=D4vxCE5NhQKl6JPt"
               target="_blank" rel="noopener noreferrer" className="btn-outline">
              <Play size={14} /> Watch on YouTube
            </a>
            <a href="mailto:Jayreuschle@yahoo.com" className="btn-sm-purple"
               style={{ padding: '11px 18px' }}>Book Now</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16,1,0.3,1] }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}
          >
            {[
              { name: 'Apple Music', href: 'https://music.apple.com/us/artist/gm-james/1757844824', icon: '🍎' },
              { name: 'Tidal', href: 'https://tidal.com/artist/49152881/u', icon: '🌊' },
              { name: 'YouTube Music', href: 'https://youtube.com/@gmjamesmusic', icon: '🎬' },
            ].map(p => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="platform-pill">
                {p.icon} {p.name}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── Right — Photo card ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16,1,0.3,1] }}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <div style={{ position: 'relative', width: 360, maxWidth: '100%' }}>
            {/* Photo */}
            <div className="float-anim" style={{
              position: 'relative', borderRadius: 20, overflow: 'hidden', aspectRatio: '3/4',
              border: '2px solid rgba(193,18,31,0.35)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.75), 0 0 80px rgba(193,18,31,0.18)',
            }}>
              <Image src={PROFILE} alt="GM James" fill priority
                style={{ objectFit: 'cover', objectPosition: 'top' }} sizes="400px" />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
                background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 100%)',
              }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px' }}>
                <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: '1.2rem' }}>GM James</p>
                <p style={{ color: 'var(--neon-green)', fontSize: '0.9rem' }}>James Reuschle</p>
              </div>
            </div>

            {/* Badge — bottom left */}
            <div style={{
              position: 'absolute', bottom: -20, left: -20,
              background: 'var(--bg-card2)', border: '1px solid var(--border)',
              backdropFilter: 'blur(10px)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              borderRadius: 16, padding: '12px 16px',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 24 }}>
                {[8,16,24,16,10].map((h, i) => (
                  <span key={i} className="wave-bar"
                    style={{ height: h, animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
              <div>
                <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: '1.1rem', color: 'var(--neon-green)' }}>800+</p>
                <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Songs in the Vault</p>
              </div>
            </div>

            {/* Badge — top right */}
            <div style={{
              position: 'absolute', top: -12, right: -12,
              background: 'var(--purple-accent)', borderRadius: 10, padding: '8px 13px',
              fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.75rem',
              boxShadow: '0 8px 30px rgba(193,18,31,0.55)',
            }}>
              🔥 New Album Out
            </div>

            {/* Badge — mid right (desktop only) */}
            <div className="badge-mid" style={{
              position: 'absolute', top: '50%', right: -52, transform: 'translateY(-50%)',
              background: 'var(--bg-card2)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '10px 12px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, minWidth: 48,
            }}>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: '1.1rem', color: 'var(--neon-green)' }}>98</span>
              <span style={{ fontSize: '0.58rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.3 }}>Weekly<br />Drops</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={scrollDown}
        style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-dim)',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--purple-light)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
      >
        <span style={{ fontSize: '0.62rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Scroll</span>
        <span className="bounce-y"><ChevronDown size={18} /></span>
      </button>

      <style>{`
        @media(max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .badge-mid { display: none !important; }
        }
      `}</style>
    </section>
  )
}
