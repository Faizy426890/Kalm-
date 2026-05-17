'use client'
import Image from 'next/image'
import Reveal from './Reveal'

const PROFILE = 'https://res.cloudinary.com/daxjhteb5/image/upload/v1777752217/WhatsApp_Image_2026-05-03_at_00.47.51_wkkium.jpg'

const GALLERY = [
  { img: PROFILE, alt: 'GM James performing', wide: false, tall: true },
  { img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80', alt: 'Studio session', wide: false, tall: false },
  { img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80', alt: 'Live show', wide: false, tall: false },
  { img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80', alt: 'In the booth', wide: true, tall: false },
  { img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80', alt: 'Album recording', wide: false, tall: false },
  { img: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&q=80', alt: 'On stage', wide: false, tall: true },
  { img: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80', alt: 'Behind the scenes', wide: false, tall: false },
  { img: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&q=80', alt: 'Crowd energy', wide: false, tall: false },
]

export default function GallerySection() {
  return (
    <section id="gallery" style={{ padding: '80px 0', background: 'var(--bg-deep)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-end', gap:20, marginBottom:40 }}>
          <div>
            <Reveal direction="right">
              <span className="section-pill" style={{ display:'inline-flex', marginBottom:10 }}>📸 Gallery</span>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <h2 className="font-syne" style={{ fontWeight:900, fontSize:'clamp(1.8rem,3vw,2.6rem)', lineHeight:1.1 }}>
                Behind the Music
              </h2>
            </Reveal>
          </div>
          <Reveal direction="left">
            <a href="https://youtube.com/@gmjamesmusic" target="_blank" rel="noopener noreferrer" className="btn-sm-purple">Watch Videos</a>
          </Reveal>
        </div>

        <div className="gallery-grid">
          {GALLERY.map((item, i) => (
            <Reveal key={i} direction="up" delay={i * 0.05}>
              <div
                className={`gallery-cell${item.tall ? ' tall' : ''}${item.wide ? ' wide' : ''}`}
                style={{ borderRadius:16, overflow:'hidden', position:'relative', cursor:'pointer' }}
              >
                <Image src={item.img} alt={item.alt} fill
                  style={{ objectFit:'cover', objectPosition:'center', transition:'transform 0.4s' }}
                  sizes="(max-width:600px) 100vw, (max-width:900px) 50vw, 25vw"
                  className="gallery-img"
                />
                <div className="gallery-overlay" style={{
                  position:'absolute', inset:0,
                  background:'linear-gradient(to top, rgba(5,5,5,0.75) 0%, transparent 60%)',
                  opacity:0, transition:'opacity 0.3s',
                }} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={0.2}>
          <div style={{ textAlign:'center', marginTop:40 }}>
            <p style={{ color:'var(--text-muted)', fontSize:'0.85rem', marginBottom:16 }}>Follow GM James for more behind-the-scenes content</p>
            <div style={{ display:'flex', justifyContent:'center', gap:12, flexWrap:'wrap' }}>
              <a href="https://youtube.com/@gmjamesmusic" target="_blank" rel="noopener noreferrer" className="btn-outline">
                🎬 YouTube
              </a>
              <a href="https://instagram.com/gmjames561" target="_blank" rel="noopener noreferrer" className="btn-sm-purple">
                📸 Instagram
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 220px;
          gap: 14px;
        }
        .gallery-cell { position: relative; }
        .gallery-cell.tall { grid-row: span 2; }
        .gallery-cell.wide { grid-column: span 2; }
        .gallery-cell:hover .gallery-img { transform: scale(1.06); }
        .gallery-cell:hover .gallery-overlay { opacity: 1 !important; }
        @media(max-width:900px){
          .gallery-grid { grid-template-columns: repeat(2,1fr); grid-auto-rows: 200px; }
          .gallery-cell.wide { grid-column: span 1; }
        }
        @media(max-width:600px){
          .gallery-grid { grid-template-columns: 1fr; grid-auto-rows: 200px; }
          .gallery-cell.tall { grid-row: span 1; }
        }
      `}</style>
    </section>
  )
}
