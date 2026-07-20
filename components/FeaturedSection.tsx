'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Play, Radio, Star, ExternalLink } from 'lucide-react'
import Reveal from './Reveal'
import { IMG } from './media'

const YT_ID = '4iVqop0z8Cs'
const YT_LINK = 'https://youtu.be/4iVqop0z8Cs?si=JDJmsiYmiF7Fcr1m'
const SPOTIFY_TRACK = 'https://open.spotify.com/track/4R1QF0oTRNa0TKHzjDtiys?si=c67515d720f646ea'
const POSTER = IMG.c

const ACHIEVEMENTS = [
  { icon: <Radio size={16} />, title: 'Top 10 in Listens', desc: 'On Spinz 92.9' },
  { icon: <Star size={16} />, title: 'Excellent Review', desc: 'From MusicReviewWorld' },
]

export default function FeaturedSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section id="featured" style={{ padding: '80px 0', background: 'var(--bg-deep)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, marginBottom: 40 }}>
          <div style={{ minWidth: 0 }}>
            <Reveal direction="right">
              <span className="section-pill" style={{ display: 'inline-flex', marginBottom: 10 }}>🏆 Featured Achievement</span>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <h2 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.6rem)', lineHeight: 1.1 }}>
                Soul Searchin
              </h2>
            </Reveal>
          </div>
          <Reveal direction="left">
            <a href={SPOTIFY_TRACK} target="_blank" rel="noopener noreferrer" className="btn-sm-purple">
              Listen on Spotify <ExternalLink size={12} />
            </a>
          </Reveal>
        </div>

        {/* Featured card */}
        <Reveal direction="up" delay={0.1}>
          <div style={{
            borderRadius: 28, overflow: 'hidden', position: 'relative',
            background: 'linear-gradient(135deg, #0a1728, var(--bg-deep))',
            border: '1px solid rgba(59,130,246,0.35)',
          }}>
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'radial-gradient(ellipse 60% 80% at 22% 50%, rgba(59,130,246,0.15), transparent)',
            }} />
            <div className="featured-inner">
              {/* Poster / player */}
              <div className="featured-media">
                {playing ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${YT_ID}?autoplay=1`}
                    title="Soul Searchin — Kalm Before the Storm"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                  />
                ) : (
                  <button
                    onClick={() => setPlaying(true)}
                    aria-label="Play Soul Searchin"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', padding: 0, border: 'none', cursor: 'pointer', background: 'transparent' }}
                  >
                    <Image src={POSTER} alt="Soul Searchin" fill style={{ objectFit: 'cover' }} sizes="(max-width:900px) 100vw, 55vw" />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(5,11,24,0.55) 0%, rgba(5,11,24,0.15) 60%, rgba(9,20,38,0.4) 100%)' }} />
                    <span style={{
                      position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                      width: 68, height: 68, borderRadius: '50%', background: 'var(--accent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 10px 40px rgba(59,130,246,0.6)',
                    }}>
                      <Play size={26} color="#fff" style={{ marginLeft: 4 }} />
                    </span>
                  </button>
                )}
              </div>

              {/* Info */}
              <div className="featured-info">
                <p style={{ fontSize: '0.68rem', fontWeight: 800, fontFamily: "'Syne',sans-serif", color: 'var(--accent-2)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
                  🎧 Featured Single
                </p>
                <h3 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.9rem,3vw,2.8rem)', lineHeight: 1.04, marginBottom: 16, overflowWrap: 'break-word' }}>
                  Soul <em style={{ fontStyle: 'normal', color: 'var(--accent-2)' }}>Searchin</em>
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 24 }}>
                  The standout record from Kalm Before the Storm — recognized on the airwaves and by the critics.
                </p>

                {/* Achievements */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
                  {ACHIEVEMENTS.map(a => (
                    <div key={a.title} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{
                        width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                        background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-2)',
                      }}>{a.icon}</span>
                      <div style={{ minWidth: 0 }}>
                        <p className="font-syne" style={{ fontWeight: 700, fontSize: '0.95rem' }}>{a.title}</p>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{a.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  <a href={SPOTIFY_TRACK} target="_blank" rel="noopener noreferrer" className="btn-green">
                    <Play size={14} /> Play on Spotify
                  </a>
                  <a href={YT_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline">Watch on YouTube</a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .featured-inner { display: grid; grid-template-columns: 1.1fr 1fr; align-items: stretch; }
        .featured-media, .featured-info { min-width: 0; }
        .featured-media { position: relative; aspect-ratio: 16 / 9; background: #0a1728; min-height: 260px; }
        .featured-info { padding: 40px; display: flex; flex-direction: column; justify-content: center; position: relative; z-index: 2; }
        @media(max-width:900px){
          .featured-inner { grid-template-columns: 1fr; }
          .featured-info { padding: 28px; }
        }
      `}</style>
    </section>
  )
}
