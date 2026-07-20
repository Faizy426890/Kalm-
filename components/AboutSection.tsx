'use client'
import Image from 'next/image'
import Reveal from './Reveal'
import { IMG } from './media'

const PROFILE = IMG.a

const SPOTIFY = 'https://open.spotify.com/artist/7k9mgUyBa834ecy9zkKHHT'
const YOUTUBE = 'https://youtube.com/channel/UCaWb0_TsRAJIVJ7NXafWxBQ?si=QH25JMgWD6xZ0mt2'
const INSTAGRAM = 'https://instagram.com/kalmsyc1deep'

const STATS = [
  { icon: '🖊️', num: '12', label: 'Age He Started Writing' },
  { icon: '📻', num: 'Top 10', label: 'Listens · Spinz 92.9' },
  { icon: '⭐', num: 'Excellent', label: 'MusicReviewWorld Review' },
  { icon: '📍', num: 'STL', label: 'St. Louis, Missouri' },
  { icon: '🎖️', num: 'USAF', label: 'Germany Base Roots' },
  { icon: '🎤', num: '5', label: 'Legendary Influences' },
]

const PLATFORMS = [
  { name: 'Spotify', href: SPOTIFY },
  { name: 'YouTube', href: YOUTUBE },
  { name: 'Instagram', href: INSTAGRAM },
]

const CARDS = [
  { icon: '🎧', title: 'The Sound', desc: 'Rooted in the lyricism of Nas, Guru of Gang Starr, Ice Cube, Lupe Fiasco, and Common — conscious hip-hop built on real storytelling.' },
  { icon: '📝', title: 'The Themes', desc: 'His music explores Black nationalism, military life, mental disorders, and street stories — lived experience turned into bars.' },
  { icon: '🎯', title: 'The Mission', desc: 'To make a significant impact within the underground hip-hop scene, one record at a time.' },
]

export default function AboutSection() {
  return (
    <section id="about" style={{
      padding: '80px 0', position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(135deg, var(--bg-2) 0%, var(--bg-deep) 60%)',
    }}>
      {/* BG glow */}
      <div style={{
        position: 'absolute', top: -100, right: -100, width: 600, height: 600,
        borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Main grid */}
        <div className="about-grid">
          {/* Left — text */}
          <div>
            <Reveal direction="right">
              <span className="section-pill" style={{ display: 'inline-flex', marginBottom: 16 }}>🎤 About the Artist</span>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <h2 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.8rem)', lineHeight: 1.1, marginBottom: 24 }}>
                From St. Louis<br /><span className="gradient-text">To The Underground</span>
              </h2>
            </Reveal>

            <div style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
              {[
                { d: 0.2, text: <>Born <strong style={{color:'#fff'}}>K Carlton Allen</strong>, <strong style={{color:'#fff'}}>Kalm Before the Storm</strong> is a rap artist from <strong style={{color:'#fff'}}>St. Louis, Missouri</strong>.</> },
                { d: 0.25, text: <>He began writing rap lyrics at the age of <strong style={{color:'#fff'}}>twelve</strong>, splitting time between his hometown and the military base in <strong style={{color:'#fff'}}>Germany</strong> where his Air Force veteran father was stationed.</> },
                { d: 0.3, text: <>His musical influences include <em style={{color:'#fff'}}>Nas, Guru (Gang Starr), Ice Cube, Lupe Fiasco,</em> and <em style={{color:'#fff'}}>Common</em>.</> },
                { d: 0.35, text: <>His music focuses on themes including <strong style={{color:'var(--accent-2)'}}>Black nationalism, military life, mental disorders,</strong> and <strong style={{color:'var(--accent-2)'}}>street stories</strong>.</> },
                { d: 0.4, text: <em style={{color:'var(--accent-2)'}}>His goal is to make a significant impact within the underground hip-hop scene.</em> },
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
                <Image src={PROFILE} alt="Kalm Before the Storm in the studio" fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="600px" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(5,11,24,0.82) 0%, rgba(9,20,38,0.5) 45%, rgba(37,99,235,0.35) 100%)' }} />
                <span className="badge badge-south" style={{ position: 'absolute', top: 12, left: 12 }}>St. Louis Artist</span>
                <div style={{
                  position: 'absolute', bottom: 12, right: 12,
                  background: 'rgba(5,11,24,0.85)', backdropFilter: 'blur(12px)',
                  border: '1px solid var(--border)', borderRadius: 12, padding: '10px 16px', textAlign: 'center',
                }}>
                  <p className="font-syne" style={{ fontWeight: 900, fontSize: '1rem', color: 'var(--accent-2)' }}>Kalm Before the Storm</p>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Real Name: K Carlton Allen</p>
                </div>
              </div>
            </Reveal>

            {/* Stats grid */}
            <div className="stats-grid">
              {STATS.map((s, i) => (
                <Reveal key={s.label} direction="up" delay={i * 0.08}>
                  <div className="glass" style={{
                    borderRadius: 16, padding: '16px 12px', textAlign: 'center',
                    transition: 'border-color 0.2s', cursor: 'default',
                  }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
                  >
                    <div style={{ fontSize: '1.4rem', marginBottom: 6 }}>{s.icon}</div>
                    <div className="font-syne" style={{ fontWeight: 900, fontSize: '1.1rem', color: 'var(--accent-2)', marginBottom: 2 }}>{s.num}</div>
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
              <div className="glass" style={{
                borderRadius: 20, padding: 24, height: '100%', transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
              >
                <div style={{ fontSize: '1.75rem', marginBottom: 12 }}>{card.icon}</div>
                <h3 className="font-syne" style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{card.desc}</p>
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
