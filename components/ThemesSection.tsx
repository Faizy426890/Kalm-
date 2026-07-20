'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const THEMES = [
  { icon: '✊', name: 'Black Nationalism' },
  { icon: '🎖️', name: 'Military Life' },
  { icon: '🧠', name: 'Mental Disorders' },
  { icon: '🏙️', name: 'Street Stories' },
  { icon: '🪞', name: 'Introspection' },
  { icon: '🛡️', name: 'Resilience' },
  { icon: '⚖️', name: 'Systemic Racism' },
  { icon: '⛓️', name: 'Oppression' },
]

export default function ThemesSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="themes" style={{
      padding: '80px 0', position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(180deg, var(--bg-deep) 0%, var(--bg-2) 100%)',
    }}>
      <div style={{
        position: 'absolute', bottom: -120, left: -80, width: 500, height: 500,
        borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <Reveal direction="up">
            <span className="section-pill" style={{ display: 'inline-flex', marginBottom: 12 }}>💬 The Message</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.6rem)', lineHeight: 1.1, marginBottom: 10 }}>
              Themes in the Music
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              The subjects Kalm Before the Storm speaks on. Tap a theme to bring it into focus.
            </p>
          </Reveal>
        </div>

        <div className="themes-layout">
          {/* Focal display */}
          <Reveal direction="right">
            <div className="glass" style={{
              borderRadius: 24, padding: '40px 32px', minHeight: 300,
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: -60, right: -60, width: 220, height: 220, borderRadius: '50%',
                background: 'radial-gradient(circle, var(--glow) 0%, transparent 70%)', pointerEvents: 'none',
              }} />
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'relative', zIndex: 1 }}
              >
                <div style={{ fontSize: '3.5rem', marginBottom: 16 }}>{THEMES[active].icon}</div>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, fontFamily: "'Syne',sans-serif", color: 'var(--accent-2)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
                  Theme {String(active + 1).padStart(2, '0')} / {String(THEMES.length).padStart(2, '0')}
                </p>
                <h3 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.6rem)', lineHeight: 1.05 }}>
                  {THEMES[active].name}
                </h3>
              </motion.div>
            </div>
          </Reveal>

          {/* Theme grid */}
          <div className="themes-grid">
            {THEMES.map((t, i) => {
              const isActive = i === active
              return (
                <Reveal key={t.name} direction="up" delay={i * 0.05}>
                  <button
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className="card-hover"
                    style={{
                      width: '100%', height: '100%', textAlign: 'left', cursor: 'pointer',
                      borderRadius: 16, padding: '18px 16px',
                      background: isActive ? 'rgba(59,130,246,0.14)' : 'var(--bg-card)',
                      border: `1px solid ${isActive ? 'rgba(59,130,246,0.55)' : 'var(--border)'}`,
                      backdropFilter: 'blur(14px)',
                      boxShadow: isActive ? '0 0 30px rgba(59,130,246,0.2)' : 'none',
                      transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
                      display: 'flex', flexDirection: 'column', gap: 10,
                    }}
                  >
                    <span style={{ fontSize: '1.6rem' }}>{t.icon}</span>
                    <span className="font-syne" style={{ fontWeight: 700, fontSize: '0.9rem', color: isActive ? '#fff' : 'var(--text-muted)', lineHeight: 1.25 }}>
                      {t.name}
                    </span>
                  </button>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        .themes-layout { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 32px; align-items: stretch; }
        .themes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        @media(max-width:900px){
          .themes-layout { grid-template-columns: 1fr; gap: 24px; }
          .themes-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media(max-width:600px){
          .themes-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  )
}
