'use client'
import Image from 'next/image'
import Reveal from './Reveal'

const PROFILE = 'https://res.cloudinary.com/daxjhteb5/image/upload/v1779122804/WhatsApp_Image_2026-05-03_at_00.47.51_1_pypvhx.jpg'

const STATS = [
  { icon: '🎵', num: '800+', label: 'Songs in the Vault' },
  { icon: '📅', num: '98', label: 'Weekly Drops (2024)' },
  { icon: '🎬', num: '36min', label: 'Short Film Album' },
  { icon: '🔥', num: '2020', label: 'GM James Era Began' },
  { icon: '🏆', num: '#1', label: 'Work Ethic in FL' },
  { icon: '💿', num: '10', label: 'Tracks on Debut LP' },
]

const PLATFORMS = [
  { name: 'Spotify', href: 'https://open.spotify.com/artist/1vOQzKkm4fV56IzcaMHVoo?si=GwoLW4M8SD-6Ms1IdFnsuQ', color: '#1DB954' },
  { name: 'YouTube', href: 'https://youtube.com/@gmjamesmusic?si=D4vxCE5NhQKl6JPt', color: '#FF0000' },
  { name: 'Apple Music', href: 'https://music.apple.com/us/artist/gm-james/1757844824', color: '#FA243C' },
  { name: 'Tidal', href: 'https://tidal.com/artist/49152881/u', color: '#00FFFF' },
]

const CARDS = [
  { icon: '🎭', title: 'The Sound', desc: 'GM James describes his style as "an artist who rhymes words." Raw, direct, and emotionally charged — every bar means something.' },
  { icon: '🧠', title: 'The Process', desc: 'Consistency over hype. 800+ songs in the vault prove that the best artists never stop creating. They grind in silence.' },
  { icon: '💡', title: 'What Fans Can Expect', desc: 'More music. More stories. More truth. GM James is different because every record is lived experience, not imagination.' },
]

export default function AboutSection() {
  return (
    <section id="about" style={{
      padding: '80px 0', position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(135deg, var(--purple-dark) 0%, var(--bg-deep) 60%)',
    }}>
      {/* BG glow */}
      <div style={{
        position: 'absolute', top: -100, right: -100, width: 600, height: 600,
        borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(193,18,31,0.10) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Main grid */}
        <div className="about-grid">
          {/* Left — text */}
          <div>
            <Reveal direction="right">
              <span className="section-pill" style={{ display: 'inline-flex', marginBottom: 16 }}>🎤 About GM James</span>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <h2 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.8rem)', lineHeight: 1.1, marginBottom: 24 }}>
                Where Audio Lovers<br /><span className="gradient-text">Find Their Home</span>
              </h2>
            </Reveal>

            <div style={{ fontSize: '0.88rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
              {[
                { d: 0.2, text: <>Born <strong style={{color:'#fff'}}>James Reuschle</strong> in South Florida, music was the foundation from middle school. As professional life grew, writing and recording moved quietly behind the scenes — but the craft never stopped.</> },
                { d: 0.25, text: <>In 2020, James officially stepped into the name <strong style={{color:'#fff'}}>GM James</strong>, releasing <em style={{color:'#fff'}}>Dear Bad Cops</em> with Boom Marley — a record that spoke directly to the social injustices of the moment.</> },
                { d: 0.3, text: <>Everything shifted in 2024 following the passing of his mother. Confronted with the reality that time isn't promised, GM James went all in — committing to releasing <strong style={{color:'#fff'}}>a song a week for over a year</strong>, dropping 98 records and building a catalog of over 800 songs.</> },
                { d: 0.35, text: <>On January 5th 2026, GM James released <strong style={{color:'var(--neon-green)'}}>Till Next Time</strong> — a 10-song, 36-minute short film and album documenting both the creation process and the raw emotion behind it.</> },
                { d: 0.4, text: <em style={{color:'var(--purple-light)'}}>"There are no goodbyes, only continuations. GM James signs off the same way every time — Till Next Time."</em> },
              ].map((item, i) => (
                <Reveal key={i} direction="right" delay={item.d}>
                  <p style={{ marginBottom: 14 }}>{item.text}</p>
                </Reveal>
              ))}
            </div>

            <Reveal direction="right" delay={0.45}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 20 }}>
                {PLATFORMS.map(p => (
                  <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="platform-pill">{p.name}</a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — photo + stats */}
          <div>
            <Reveal direction="left" delay={0.1}>
              <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', aspectRatio: '4/3', border: '2px solid var(--border)', marginBottom: 20 }}>
                <Image src={PROFILE} alt="GM James in the studio" fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }} sizes="600px" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(5,5,5,0.5) 0%, transparent 50%, rgba(193,18,31,0.08) 100%)' }} />
                <span className="badge badge-south" style={{ position: 'absolute', top: 12, left: 12 }}>South Florida Artist</span>
                <div style={{
                  position: 'absolute', bottom: 12, right: 12,
                  background: 'rgba(5,5,5,0.88)', backdropFilter: 'blur(12px)',
                  border: '1px solid var(--border)', borderRadius: 12, padding: '10px 16px', textAlign: 'center',
                }}>
                  <p className="font-syne" style={{ fontWeight: 900, fontSize: '1rem', color: 'var(--neon-green)' }}>GM James</p>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Real Name: James Reuschle</p>
                </div>
              </div>
            </Reveal>

            {/* Stats grid */}
            <div className="stats-grid">
              {STATS.map((s, i) => (
                <Reveal key={s.label} direction="up" delay={i * 0.08}>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
                    borderRadius: 16, padding: '16px 12px', textAlign: 'center',
                    transition: 'border-color 0.2s', cursor: 'default',
                  }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--purple-accent)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
                  >
                    <div style={{ fontSize: '1.4rem', marginBottom: 6 }}>{s.icon}</div>
                    <div className="font-syne" style={{ fontWeight: 900, fontSize: '1.2rem', color: 'var(--neon-green)', marginBottom: 2 }}>{s.num}</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom cards */}
        <div className="divider" style={{ margin: '48px 0' }} />
        <div className="about-cards">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} direction={i % 2 === 0 ? 'right' : 'left'} delay={i * 0.1}>
              <div style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 20, padding: 24, height: '100%', transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--purple-accent)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
              >
                <div style={{ fontSize: '1.75rem', marginBottom: 12 }}>{card.icon}</div>
                <h3 className="font-syne" style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{card.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; margin-bottom: 0; }
        .stats-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; }
        .about-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        @media(max-width:900px){
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-cards { grid-template-columns: 1fr 1fr; }
        }
        @media(max-width:600px){
          .about-cards { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: repeat(2,1fr); }
        }
      `}</style>
    </section>
  )
}
