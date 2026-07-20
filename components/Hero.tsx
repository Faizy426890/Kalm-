'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, ChevronDown } from 'lucide-react'
import { useRef } from 'react'
import { IMG } from './media'

const PORTRAIT = IMG.hero
const HERO_IMG = IMG.b

const SPOTIFY = 'https://open.spotify.com/artist/7k9mgUyBa834ecy9zkKHHT'
const YOUTUBE = 'https://youtube.com/channel/UCaWb0_TsRAJIVJ7NXafWxBQ?si=QH25JMgWD6xZ0mt2'
const INSTAGRAM = 'https://instagram.com/kalmsyc1deep'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.15])

  const scrollTo = (sel: string) =>
    document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      ref={ref}
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        paddingTop: 68, position: 'relative', overflow: 'hidden',
        background: 'var(--bg-deep)',
      }}
    >
      {/* BG glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 60% at 65% 55%, rgba(59,130,246,0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 5% 20%, rgba(96,165,250,0.06) 0%, transparent 60%)',
      }} />

      {/* Faded full-bleed background image w/ parallax */}
      <motion.div style={{ position: 'absolute', top: 0, right: 0, width: '65%', height: '100%', overflow: 'hidden', pointerEvents: 'none', y: bgY, opacity: bgOpacity }}>
        <Image src={HERO_IMG} alt="" fill priority
          className="hero-bg-fade"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="65vw"
        />
        {/* Dark blue overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, var(--bg-deep) 0%, rgba(5,11,24,0.4) 55%, rgba(9,20,38,0.55) 100%)' }} />
      </motion.div>

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
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }} />
              Conscious Hip-Hop · St. Louis, Missouri
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16,1,0.3,1] }}
            style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 900,
              lineHeight: 1.02, letterSpacing: '-0.02em',
              fontSize: 'clamp(2.7rem, 5.2vw, 5.2rem)',
              marginBottom: 20, marginTop: 16, textTransform: 'uppercase',
            }}
          >
            Kalm<br />
            Before the<br />
            <span className="gradient-text">Storm.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.16,1,0.3,1] }}
            style={{ color: 'var(--accent-2)', fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.04em', marginBottom: 18 }}
          >
            Conscious Hip-Hop Artist • Storyteller • Lyricist
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16,1,0.3,1] }}
            style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.75, marginBottom: 30, maxWidth: 520 }}
          >
            A rap artist from St. Louis, Missouri — writing since the age of twelve,
            shaped between his hometown and a military base in Germany. Raw stories,
            sharp lyricism, and a mission to make his mark on underground hip-hop.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16,1,0.3,1] }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}
          >
            <a href={SPOTIFY} target="_blank" rel="noopener noreferrer" className="btn-green glow-pulse">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Listen Now
            </a>
            <button onClick={() => scrollTo('#videos')} className="btn-outline">
              <Play size={14} /> Watch Videos
            </button>
            <button onClick={() => scrollTo('#booking')} className="btn-sm-purple" style={{ padding: '11px 18px' }}>
              Book Performance
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16,1,0.3,1] }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}
          >
            {[
              { name: 'Spotify', href: SPOTIFY, icon: '🎧' },
              { name: 'YouTube', href: YOUTUBE, icon: '🎬' },
              { name: 'Instagram', href: INSTAGRAM, icon: '📸' },
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
              position: 'relative', borderRadius: 22, overflow: 'hidden', aspectRatio: '3/4',
              border: '2px solid rgba(59,130,246,0.35)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.75), 0 0 80px rgba(59,130,246,0.2)',
            }}>
              <Image src={PORTRAIT} alt="Kalm Before the Storm" fill priority
                style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="400px" />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(5,11,24,0.92) 0%, rgba(5,11,24,0.15) 45%, rgba(9,20,38,0.35) 100%)',
              }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px' }}>
                <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: '1.2rem' }}>Kalm Before the Storm</p>
                <p style={{ color: 'var(--accent-2)', fontSize: '0.9rem' }}>K Carlton Allen</p>
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
                <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: '1.1rem', color: 'var(--accent-2)' }}>Top 10</p>
                <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Listens · Spinz 92.9</p>
              </div>
            </div>

            {/* Badge — top right */}
            <div style={{
              position: 'absolute', top: -12, right: -12,
              background: 'var(--accent)', borderRadius: 10, padding: '8px 13px',
              fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.75rem',
              boxShadow: '0 8px 30px rgba(59,130,246,0.55)',
            }}>
              🎧 Soul Searchin
            </div>

            {/* Badge — mid right (desktop only) */}
            <div className="badge-mid" style={{
              position: 'absolute', top: '50%', right: -20, transform: 'translateY(-50%)',
              background: 'var(--bg-card2)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '10px 12px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, minWidth: 48,
            }}>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: '1.1rem', color: 'var(--accent-2)' }}>STL</span>
              <span style={{ fontSize: '0.58rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.3 }}>St.<br />Louis</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={() => scrollTo('#ticker-section')}
        style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-dim)',
          transition: 'color 0.2s', zIndex: 3,
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-2)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dim)')}
      >
        <span style={{ fontSize: '0.62rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Scroll</span>
        <span className="bounce-y"><ChevronDown size={18} /></span>
      </button>

      <style>{`
        @media(max-width: 1120px) {
          .badge-mid { display: none !important; }
        }
        @media(max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
