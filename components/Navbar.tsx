'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Music, ExternalLink } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Music',   href: '#music' },
  { label: 'About',   href: '#about' },
  { label: 'Album',   href: '#album' },
  { label: 'Shows',   href: '#shows' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Connect', href: '#connect' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          height: 68,
          background: scrolled ? 'rgba(5,5,5,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(193,18,31,0.18)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.6)' : 'none',
          transition: 'all 0.3s',
          display: 'flex', alignItems: 'center',
        }}
      >
        <div style={{
          maxWidth: 1280, margin: '0 auto', width: '100%',
          padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: '1.15rem',
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'none', border: 'none', cursor: 'pointer', color: '#fff',
            }}
          >
            <span style={{
              width: 32, height: 32, background: 'var(--neon-green)',
              borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Music size={16} color="#fff" />
            </span>
            <span>GM</span>
            <span style={{ color: 'var(--neon-green)' }}>James</span>
          </button>

          {/* Desktop links */}
          <ul style={{ display: 'flex', gap: 28, listStyle: 'none', margin: 0, padding: 0 }}
              className="hidden-mobile">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500,
                    fontFamily: "'DM Sans', sans-serif", transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }} className="hidden-mobile">
            <a
              href="https://open.spotify.com/artist/1vOQzKkm4fV56IzcaMHVoo?si=GwoLW4M8SD-6Ms1IdFnsuQ"
              target="_blank" rel="noopener noreferrer" className="btn-sm-purple"
            >
              Stream Now <ExternalLink size={12} />
            </a>
            <a href="mailto:Jayreuschle@yahoo.com" className="btn-green glow-pulse"
               style={{ fontSize: '0.78rem', padding: '9px 18px' }}>
              Book Now
            </a>
          </div>

          {/* Burger */}
          <button
            className="show-mobile"
            onClick={() => setMobileOpen(v => !v)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', padding: 4 }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            style={{
              position: 'fixed', top: 68, left: 0, right: 0, zIndex: 99,
              background: 'rgba(5,5,5,0.98)', backdropFilter: 'blur(24px)',
              borderBottom: '1px solid var(--border)', padding: '24px',
              display: 'flex', flexDirection: 'column', gap: 20,
            }}
          >
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.1rem',
                  color: '#fff', background: 'none', border: 'none', cursor: 'pointer',
                  textAlign: 'left', padding: '4px 0',
                }}
              >
                {link.label}
              </button>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
              <a href="https://open.spotify.com/artist/1vOQzKkm4fV56IzcaMHVoo"
                 target="_blank" rel="noopener noreferrer" className="btn-purple"
                 style={{ justifyContent: 'center' }}>Stream on Spotify</a>
              <a href="mailto:Jayreuschle@yahoo.com" className="btn-green"
                 style={{ justifyContent: 'center' }}>Book GM James</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media(min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  )
}
