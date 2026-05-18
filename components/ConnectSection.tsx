'use client'
import { useState } from 'react'
import { Mail, Instagram, Youtube, Music, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'

type Status = 'idle' | 'loading' | 'success' | 'error'

const SUBJECTS = [
  'Booking Inquiry',
  'Press / Media',
  'Collaboration',
  'Fan Message',
  'Other',
]

export default function ConnectSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: SUBJECTS[0], message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [focused, setFocused] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', subject: SUBJECTS[0], message: '' })
    } catch {
      setStatus('error')
    }
  }

  const fieldStyle = (name: string): React.CSSProperties => ({
    width: '100%',
    background: focused === name ? '#171717' : '#111111',
    border: `1px solid ${focused === name ? 'rgba(193,18,31,0.6)' : 'rgba(255,255,255,0.08)'}`,
    boxShadow: focused === name ? '0 0 0 3px rgba(193,18,31,0.10)' : 'none',
    color: '#fff',
    borderRadius: 10,
    padding: '13px 16px',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
    appearance: 'none' as const,
  })

  return (
    <section id="connect" style={{ padding: '80px 0', background: 'linear-gradient(135deg, var(--purple-dark) 0%, var(--bg-deep) 100%)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        <div className="connect-grid">

          {/* ── Left — info ── */}
          <div>
            <Reveal direction="right">
              <span className="section-pill" style={{ display: 'inline-flex', marginBottom: 16 }}>📬 Connect</span>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <h2 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.6rem)', lineHeight: 1.1, marginBottom: 12 }}>
                Let's Make It Happen
              </h2>
            </Reveal>
            <Reveal direction="right" delay={0.15}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: 28 }}>
                Booking inquiries, press features, collaborations, or just want to show love. Reach out directly.
              </p>
            </Reveal>

            {[
              { icon: <Mail size={18} />, label: 'Email', val: <a href="mailto:Jayreuschle@yahoo.com" style={{ color: 'var(--purple-light)', transition: 'color 0.2s' }}>Jayreuschle@yahoo.com</a> },
              { icon: <Instagram size={18} />, label: 'Instagram', val: <a href="https://instagram.com/gmjames561" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>@gmjames561</a> },
              { icon: <Youtube size={18} />, label: 'YouTube', val: <a href="https://youtube.com/@gmjamesmusic" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>@gmjamesmusic</a> },
              { icon: <Music size={18} />, label: 'Spotify', val: <a href="https://open.spotify.com/artist/1vOQzKkm4fV56IzcaMHVoo" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple-light)' }}>GM James on Spotify</a> },
            ].map((item, i) => (
              <Reveal key={item.label} direction="right" delay={0.2 + i * 0.07}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                  <div style={{ width: 42, height: 42, background: 'rgba(193,18,31,0.12)', border: '1px solid rgba(193,18,31,0.25)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--purple-light)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>{item.val}</div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal direction="right" delay={0.5}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 8 }}>
                <a href="https://open.spotify.com/artist/1vOQzKkm4fV56IzcaMHVoo" target="_blank" rel="noopener noreferrer" className="btn-green">Stream Music</a>
                <a href="mailto:Jayreuschle@yahoo.com" className="btn-outline">Book Now</a>
              </div>
            </Reveal>
          </div>

          {/* ── Right — contact form ── */}
          <Reveal direction="left" delay={0.1}>
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid rgba(193,18,31,0.25)',
              borderRadius: 24,
              padding: 40,
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* ambient glow */}
              <div style={{ position: 'absolute', top: -80, right: -80, width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(193,18,31,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: -60, left: -60, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(193,18,31,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  /* ── Success state ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ textAlign: 'center', padding: '32px 0', position: 'relative', zIndex: 1 }}
                  >
                    <div style={{
                      width: 72, height: 72, borderRadius: '50%',
                      background: 'rgba(193,18,31,0.12)', border: '2px solid rgba(193,18,31,0.4)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 24px', boxShadow: '0 0 40px rgba(193,18,31,0.2)',
                    }}>
                      <CheckCircle size={32} color="var(--purple-light)" />
                    </div>
                    <h3 className="font-syne" style={{ fontWeight: 900, fontSize: '1.4rem', marginBottom: 12 }}>Message Sent</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 32 }}>
                      GM James will get back to you soon.<br />Till Next Time.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-sm-purple"
                      style={{ margin: '0 auto' }}
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  /* ── Form state ── */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ position: 'relative', zIndex: 1 }}
                    noValidate
                  >
                    <div style={{ marginBottom: 28 }}>
                      <h3 className="font-syne" style={{ fontWeight: 900, fontSize: '1.35rem', marginBottom: 6 }}>
                        Send a Message
                      </h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.6 }}>
                        Fill out the form and it lands directly in GM James's inbox.
                      </p>
                    </div>

                    {/* Name + Email row */}
                    <div className="form-row" style={{ marginBottom: 16 }}>
                      <div>
                        <label style={labelStyle}>Your Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="James Reuschle"
                          value={form.name}
                          onChange={handleChange}
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused(null)}
                          required
                          style={fieldStyle('name')}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={handleChange}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          required
                          style={fieldStyle('email')}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div style={{ marginBottom: 16 }}>
                      <label style={labelStyle}>Subject</label>
                      <div style={{ position: 'relative' }}>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          onFocus={() => setFocused('subject')}
                          onBlur={() => setFocused(null)}
                          style={{ ...fieldStyle('subject'), paddingRight: 40, cursor: 'pointer' }}
                        >
                          {SUBJECTS.map(s => <option key={s} value={s} style={{ background: '#111' }}>{s}</option>)}
                        </select>
                        <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)', pointerEvents: 'none', fontSize: '0.7rem' }}>▼</span>
                      </div>
                    </div>

                    {/* Message */}
                    <div style={{ marginBottom: 20 }}>
                      <label style={labelStyle}>Message</label>
                      <textarea
                        name="message"
                        placeholder="Tell GM James what's on your mind..."
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        required
                        rows={5}
                        style={{ ...fieldStyle('message'), resize: 'vertical', minHeight: 120 }}
                      />
                    </div>

                    {/* Error banner */}
                    <AnimatePresence>
                      {status === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            background: 'rgba(193,18,31,0.12)', border: '1px solid rgba(193,18,31,0.35)',
                            borderRadius: 10, padding: '10px 14px', marginBottom: 16,
                            fontSize: '0.82rem', color: 'var(--purple-light)',
                          }}
                        >
                          <AlertCircle size={16} style={{ flexShrink: 0 }} />
                          Something went wrong. Please try again or email directly.
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-green"
                      style={{
                        width: '100%', justifyContent: 'center',
                        opacity: status === 'loading' ? 0.75 : 1,
                        cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      }}
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader size={16} style={{ animation: 'spin 0.8s linear infinite' }} />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Message
                        </>
                      )}
                    </button>

                    <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textAlign: 'center', marginTop: 14 }}>
                      Or email directly at{' '}
                      <a href="mailto:Jayreuschle@yahoo.com" style={{ color: 'var(--purple-light)', textDecoration: 'none' }}>
                        Jayreuschle@yahoo.com
                      </a>
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .connect-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
        @media(max-width:900px){ .connect-grid { grid-template-columns: 1fr; gap: 40px; } }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media(max-width:560px){ .form-row { grid-template-columns: 1fr; } }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.7rem',
  fontWeight: 700,
  fontFamily: "'Syne', sans-serif",
  textTransform: 'uppercase',
  letterSpacing: '0.07em',
  color: 'var(--text-dim)',
  marginBottom: 6,
}
