'use client'
import Image from 'next/image'
import { MapPin, Calendar } from 'lucide-react'
import Reveal from './Reveal'

const SHOWS_HERO = 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1400&q=80'

const SHOWS = [
  {
    date: 'Jun 14, 2026', venue: 'Revolution Live', location: 'Fort Lauderdale, FL',
    status: 'On Sale', statusClass: 'badge-new',
    img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80',
    href: 'mailto:Jayreuschle@yahoo.com',
  },
  {
    date: 'Jul 4, 2026', venue: 'Grand Central', location: 'Miami, FL',
    status: 'Limited', statusClass: 'badge-live',
    img: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&q=80',
    href: 'mailto:Jayreuschle@yahoo.com',
  },
  {
    date: 'Aug 22, 2026', venue: 'The Social', location: 'Orlando, FL',
    status: 'Upcoming', statusClass: 'badge-feat',
    img: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=600&q=80',
    href: 'mailto:Jayreuschle@yahoo.com',
  },
]

export default function ShowsSection() {
  return (
    <section id="shows" style={{ padding: '80px 0', background: 'linear-gradient(180deg, var(--bg-deep) 0%, var(--purple-dark) 100%)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-end', gap:20, marginBottom:32 }}>
          <div>
            <Reveal direction="right">
              <span className="section-pill" style={{ display:'inline-flex', marginBottom:10 }}>🎤 Live Shows</span>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <h2 className="font-syne" style={{ fontWeight:900, fontSize:'clamp(1.8rem,3vw,2.6rem)', lineHeight:1.1 }}>
                Catch GM James Live
              </h2>
            </Reveal>
          </div>
          <Reveal direction="left">
            <a href="mailto:Jayreuschle@yahoo.com" className="btn-green">Book a Show</a>
          </Reveal>
        </div>

        {/* Hero banner */}
        <Reveal direction="up">
          <div style={{ borderRadius:24, overflow:'hidden', position:'relative', height:320, marginBottom:36 }}>
            <Image src={SHOWS_HERO} alt="GM James live" fill style={{ objectFit:'cover', objectPosition:'center', opacity:0.45 }} sizes="1280px" />
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg, rgba(5,5,5,0.82) 0%, rgba(193,18,31,0.18) 100%)' }} />
            <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'center', padding:'48px' }}>
              <h3 className="font-syne" style={{ fontWeight:900, fontSize:'clamp(1.6rem,3vw,2.5rem)', marginBottom:8 }}>
                South Florida's Finest
              </h3>
              <p style={{ color:'var(--text-muted)', fontSize:'0.9rem', marginBottom:24, maxWidth:420 }}>
                Raw energy. Real lyrics. Unforgettable nights. Experience GM James live.
              </p>
              <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                <a href="mailto:Jayreuschle@yahoo.com" className="btn-green">Book for Events</a>
                <a href="https://youtube.com/@gmjamesmusic" target="_blank" rel="noopener noreferrer" className="btn-outline">Watch Performances</a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Show cards */}
        <div className="shows-grid">
          {SHOWS.map((show, i) => (
            <Reveal key={show.venue} direction={i % 2 === 0 ? 'up' : 'up'} delay={i * 0.1}>
              <div className="card-hover" style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:20, overflow:'hidden' }}>
                <div style={{ position:'relative', height:180 }}>
                  <Image src={show.img} alt={show.venue} fill style={{ objectFit:'cover', objectPosition:'center' }} sizes="400px" />
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(11,11,11,1) 0%, transparent 70%)' }} />
                  <span className={`badge ${show.statusClass}`} style={{ position:'absolute', top:12, right:12 }}>{show.status}</span>
                </div>
                <div style={{ padding:20 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:4 }}>
                    <Calendar size={13} color="var(--neon-green)" />
                    <span className="font-syne" style={{ fontWeight:700, fontSize:'0.72rem', color:'var(--neon-green)', textTransform:'uppercase', letterSpacing:'0.07em' }}>{show.date}</span>
                  </div>
                  <h3 className="font-syne" style={{ fontWeight:700, fontSize:'1.05rem', marginBottom:4 }}>{show.venue}</h3>
                  <div style={{ display:'flex', alignItems:'center', gap:5, marginBottom:16 }}>
                    <MapPin size={12} color="var(--text-muted)" />
                    <span style={{ fontSize:'0.8rem', color:'var(--text-muted)' }}>{show.location}</span>
                  </div>
                  <a href={show.href} className="btn-sm-purple" style={{ width:'100%', justifyContent:'center' }}>Get Tickets</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Booking banner */}
        <Reveal direction="up" delay={0.2}>
          <div style={{ marginTop:40, background:'var(--bg-card)', border:'1px solid rgba(193,18,31,0.25)', borderRadius:20, padding:40, textAlign:'center' }}>
            <h3 className="font-syne" style={{ fontWeight:900, fontSize:'1.5rem', marginBottom:8 }}>Want GM James at Your Event?</h3>
            <p style={{ color:'var(--text-muted)', fontSize:'0.87rem', marginBottom:24 }}>Private events, venues, festivals, and more. Let's make it happen.</p>
            <div style={{ display:'flex', justifyContent:'center', flexWrap:'wrap', gap:12 }}>
              <a href="mailto:Jayreuschle@yahoo.com" className="btn-green">📧 Jayreuschle@yahoo.com</a>
              <a href="https://instagram.com/gmjames561" target="_blank" rel="noopener noreferrer" className="btn-outline">@gmjames561</a>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .shows-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        @media(max-width:900px){ .shows-grid { grid-template-columns: 1fr 1fr; } }
        @media(max-width:600px){ .shows-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
