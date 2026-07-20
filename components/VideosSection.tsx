'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import Reveal from './Reveal'
import { IMG } from './media'

const YOUTUBE = 'https://youtube.com/channel/UCaWb0_TsRAJIVJ7NXafWxBQ?si=QH25JMgWD6xZ0mt2'

const VIDEOS = [
  { id: '4iVqop0z8Cs', title: 'Soul Searchin', tag: 'Featured Single', poster: IMG.c },
  { id: 'Wxpu3kWqyyU', title: 'The World Is A Contradiction', tag: 'Music Video', poster: IMG.a },
  { id: 'n7dgOQrqNW4', title: 'Damage Control', tag: 'Music Video', poster: IMG.b },
  { id: 'JOeJOiAhBGw', title: 'Synthetic Society', tag: 'Music Video', poster: IMG.d },
]

export default function VideosSection() {
  const [playing, setPlaying] = useState<Record<string, boolean>>({})

  return (
    <section id="videos" style={{ padding: '80px 0', background: 'linear-gradient(180deg, var(--bg-2) 0%, var(--bg-deep) 100%)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, marginBottom: 40 }}>
          <div>
            <Reveal direction="right">
              <span className="section-pill" style={{ display: 'inline-flex', marginBottom: 10 }}>🎬 Watch</span>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <h2 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.6rem)', lineHeight: 1.1 }}>
                Videos
              </h2>
            </Reveal>
            <Reveal direction="right" delay={0.15}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: 8, maxWidth: 440, lineHeight: 1.7 }}>
                Press play to watch. Every visual is a story straight from Kalm Before the Storm.
              </p>
            </Reveal>
          </div>
          <Reveal direction="left">
            <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" className="btn-sm-purple">All Videos</a>
          </Reveal>
        </div>

        {/* Video grid */}
        <div className="videos-grid">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.id} direction="up" delay={i * 0.08}>
              <div className="glass" style={{ borderRadius: 22, overflow: 'hidden' }}>
                <div style={{ position: 'relative', aspectRatio: '16/9', background: '#0a1728' }}>
                  {playing[v.id] ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1`}
                      title={v.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                    />
                  ) : (
                    <button
                      onClick={() => setPlaying(p => ({ ...p, [v.id]: true }))}
                      aria-label={`Play ${v.title}`}
                      className="video-facade"
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', padding: 0, border: 'none', cursor: 'pointer', background: 'transparent' }}
                    >
                      <Image src={v.poster} alt={v.title} fill
                        style={{ objectFit: 'cover' }} sizes="(max-width:900px) 100vw, 50vw" />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,11,24,0.85) 0%, rgba(5,11,24,0.15) 55%, transparent 100%)' }} />
                      <span style={{
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                        width: 64, height: 64, borderRadius: '50%', background: 'var(--accent)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 10px 40px rgba(59,130,246,0.6)',
                      }}>
                        <Play size={24} color="#fff" style={{ marginLeft: 4 }} />
                      </span>
                    </button>
                  )}
                </div>
                <div style={{ padding: '16px 20px' }}>
                  <p style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--accent-2)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 4 }}>{v.tag}</p>
                  <h3 className="font-syne" style={{ fontWeight: 700, fontSize: '1.05rem' }}>{v.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .videos-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        @media(max-width:900px){ .videos-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
