'use client'
import Reveal from './Reveal'

const EVENTS = [
  { tag: 'Age 12', icon: '🖊️', title: 'The First Bars', desc: 'Began writing rap lyrics at the age of twelve.' },
  { tag: 'Formative Years', icon: '🎖️', title: 'Between Two Worlds', desc: 'Split time between St. Louis, Missouri and Germany while his father was stationed at an Air Force military base.' },
  { tag: 'Release', icon: '🎧', title: 'Soul Searchin', desc: 'Released the single Soul Searchin.' },
  { tag: 'Radio', icon: '📻', title: 'Top 10 on Spinz 92.9', desc: 'Soul Searchin reached the Top 10 in listens on Spinz 92.9.' },
  { tag: 'Critical Praise', icon: '⭐', title: 'Excellent Review', desc: 'Soul Searchin received an excellent review from MusicReviewWorld.' },
  { tag: 'Upcoming', icon: '🚀', title: 'Note 2 Self', desc: 'Upcoming mixtape: Note 2 Self.', upcoming: true },
]

export default function TimelineSection() {
  return (
    <section id="timeline" style={{ padding: '80px 0', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <Reveal direction="up">
            <span className="section-pill" style={{ display: 'inline-flex', marginBottom: 12 }}>🗺️ The Journey</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.6rem)', lineHeight: 1.1 }}>
              Timeline
            </h2>
          </Reveal>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div className="tl-line" style={{
            position: 'absolute', top: 8, bottom: 8, width: 2,
            background: 'linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(59,130,246,0.05))',
          }} />

          {EVENTS.map((e, i) => (
            <Reveal key={e.title} direction="up" delay={i * 0.08}>
              <div className="tl-row" style={{ position: 'relative', display: 'flex', gap: 24, marginBottom: 28 }}>
                {/* Marker */}
                <div style={{ position: 'relative', flexShrink: 0, width: 56, display: 'flex', justifyContent: 'center' }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 16, fontSize: '1.4rem',
                    background: e.upcoming ? 'rgba(59,130,246,0.14)' : 'var(--bg-card)',
                    border: `1px solid ${e.upcoming ? 'rgba(59,130,246,0.5)' : 'var(--border)'}`,
                    backdropFilter: 'blur(14px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: e.upcoming ? '0 0 26px rgba(59,130,246,0.28)' : 'none',
                    zIndex: 1,
                  }}>{e.icon}</div>
                </div>

                {/* Content */}
                <div className="glass" style={{ flex: 1, borderRadius: 18, padding: '18px 22px' }}>
                  <span style={{
                    display: 'inline-block', fontSize: '0.62rem', fontWeight: 800, fontFamily: "'Syne',sans-serif",
                    textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8,
                    color: e.upcoming ? '#fff' : 'var(--accent-2)',
                    background: e.upcoming ? 'var(--accent)' : 'rgba(59,130,246,0.12)',
                    border: e.upcoming ? 'none' : '1px solid rgba(59,130,246,0.25)',
                    padding: '3px 10px', borderRadius: 999,
                  }}>{e.tag}</span>
                  <h3 className="font-syne" style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 4 }}>{e.title}</h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{e.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .tl-line { left: 27px; }
        @media(max-width:600px){
          .tl-row { gap: 16px; }
        }
      `}</style>
    </section>
  )
}
