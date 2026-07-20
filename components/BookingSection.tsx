'use client'
import { useState } from 'react'
import { Mail, Instagram, Youtube, Music, Send, CheckCircle, AlertCircle, Loader, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'

type Status = 'idle' | 'loading' | 'success' | 'error'

const EVENT_TYPES = ['Venue', 'Bar / Pub', 'Festival', 'Private Event', 'College', 'Corporate', 'Other']
const BUDGETS = ['Under $250', '$250–500', '$500–1,000', '$1,000–2,500', '$2,500–5,000', '$5,000+']
const LENGTHS = ['30 Minutes', '45 Minutes', '60 Minutes', '90+ Minutes']

const SPOTIFY = 'https://open.spotify.com/artist/7k9mgUyBa834ecy9zkKHHT'
const YOUTUBE = 'https://youtube.com/channel/UCaWb0_TsRAJIVJ7NXafWxBQ?si=QH25JMgWD6xZ0mt2'
const INSTAGRAM = 'https://instagram.com/kalmsyc1deep'

const EMPTY = {
  fullName: '', email: '', phone: '', org: '',
  eventType: '', eventDate: '', startTime: '', endTime: '',
  city: '', state: '', venueName: '', venueAddress: '',
  budget: '', length: '',
}

const REQUIRED: (keyof typeof EMPTY)[] = ['fullName', 'email', 'eventType', 'eventDate', 'city', 'state']

export default function BookingSection() {
  const [form, setForm] = useState({ ...EMPTY })
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<Status>('idle')

  const set = (k: keyof typeof EMPTY) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm(f => ({ ...f, [k]: e.target.value }))
      if (errors[k]) setErrors(er => ({ ...er, [k]: false }))
    }

  const validate = () => {
    const next: Record<string, boolean> = {}
    REQUIRED.forEach(k => { if (!form[k].trim()) next[k] = true })
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = true
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'loading') return
    if (!validate()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, subject: `Booking Request — ${form.fullName}` }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ ...EMPTY })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="booking" style={{ padding: '80px 0', background: 'linear-gradient(135deg, var(--bg-2) 0%, var(--bg-deep) 100%)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <Reveal direction="up">
            <span className="section-pill" style={{ display: 'inline-flex', marginBottom: 12 }}>📅 Booking</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="font-syne" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.6rem)', lineHeight: 1.1, marginBottom: 10 }}>
              Book a Performance
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
              Tell us about your event and Kalm Before the Storm will be in touch.
            </p>
          </Reveal>
        </div>

        <div className="booking-grid">

          {/* ── Left — contact info ── */}
          <div>
            <Reveal direction="right">
              <div className="glass" style={{ borderRadius: 22, padding: 28, marginBottom: 20 }}>
                <h3 className="font-syne" style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: 4 }}>Kalm Before the Storm</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: 20 }}>Real Name: K Carlton Allen</p>

                {[
                  { icon: <Mail size={18} />, label: 'Email', val: <a href="mailto:kcsallen@gmail.com" style={{ color: 'var(--accent-2)' }}>kcsallen@gmail.com</a> },
                  { icon: <Mail size={18} />, label: 'Email', val: <a href="mailto:kalmsyc1deep@gmail.com" style={{ color: 'var(--accent-2)' }}>kalmsyc1deep@gmail.com</a> },
                  { icon: <Instagram size={18} />, label: 'Instagram', val: <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-2)' }}>@kalmsyc1deep</a> },
                  { icon: <Music size={18} />, label: 'Spotify', val: <a href={SPOTIFY} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-2)' }}>Kalm Before the Storm</a> },
                  { icon: <Youtube size={18} />, label: 'YouTube', val: <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-2)' }}>Kalm Before the Storm</a> },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                    <div style={{ width: 42, height: 42, background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--accent-2)' }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>{item.label}</div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 500 }}>{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <div className="glass" style={{ borderRadius: 22, padding: 24, display: 'flex', gap: 14, alignItems: 'center' }}>
                <User size={22} color="var(--accent-2)" style={{ flexShrink: 0 }} />
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Venues, bars, festivals, colleges, corporate & private events welcome.
                </p>
              </div>
            </Reveal>
          </div>

          {/* ── Right — booking form ── */}
          <Reveal direction="left" delay={0.1}>
            <div className="glass" style={{ borderRadius: 24, padding: 40, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -80, right: -80, width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />

              <AnimatePresence mode="wait">
                {status === 'success' ? (
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
                      background: 'rgba(59,130,246,0.12)', border: '2px solid rgba(59,130,246,0.4)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 24px', boxShadow: '0 0 40px rgba(59,130,246,0.25)',
                    }}>
                      <CheckCircle size={32} color="var(--accent-2)" />
                    </div>
                    <h3 className="font-syne" style={{ fontWeight: 900, fontSize: '1.4rem', marginBottom: 12 }}>Request Sent</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 32 }}>
                      Thanks for reaching out.<br />Kalm Before the Storm will get back to you soon.
                    </p>
                    <button onClick={() => setStatus('idle')} className="btn-sm-purple" style={{ margin: '0 auto' }}>
                      Send Another
                    </button>
                  </motion.div>
                ) : (
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
                    <div style={{ marginBottom: 24 }}>
                      <h3 className="font-syne" style={{ fontWeight: 900, fontSize: '1.35rem', marginBottom: 6 }}>Performance Request</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>Fields marked * are required.</p>
                    </div>

                    {/* Contact */}
                    <div className="bk-2" style={{ marginBottom: 14 }}>
                      <Float label="Full Name *" value={form.fullName} onChange={set('fullName')} error={errors.fullName} />
                      <Float label="Email Address *" type="email" value={form.email} onChange={set('email')} error={errors.email} />
                    </div>
                    <div className="bk-2" style={{ marginBottom: 14 }}>
                      <Float label="Phone Number (Optional)" type="tel" value={form.phone} onChange={set('phone')} />
                      <Float label="Venue / Organization Name" value={form.org} onChange={set('org')} />
                    </div>

                    {/* Event type */}
                    <div style={{ marginBottom: 20 }}>
                      <Label text="Event Type *" />
                      <Select value={form.eventType} onChange={set('eventType')} options={EVENT_TYPES} error={errors.eventType} placeholder="Select event type" />
                    </div>

                    <SectionLabel text="Event Details" />

                    <div className="bk-3" style={{ marginBottom: 14 }}>
                      <div><Label text="Event Date *" /><input type="date" value={form.eventDate} onChange={set('eventDate')} style={inputStyle(errors.eventDate)} /></div>
                      <div><Label text="Start Time" /><input type="time" value={form.startTime} onChange={set('startTime')} style={inputStyle(false)} /></div>
                      <div><Label text="End Time" /><input type="time" value={form.endTime} onChange={set('endTime')} style={inputStyle(false)} /></div>
                    </div>

                    <div className="bk-2" style={{ marginBottom: 14 }}>
                      <Float label="City *" value={form.city} onChange={set('city')} error={errors.city} />
                      <Float label="State *" value={form.state} onChange={set('state')} error={errors.state} />
                    </div>
                    <div className="bk-2" style={{ marginBottom: 20 }}>
                      <Float label="Venue Name" value={form.venueName} onChange={set('venueName')} />
                      <Float label="Venue Address" value={form.venueAddress} onChange={set('venueAddress')} />
                    </div>

                    <div className="bk-2" style={{ marginBottom: 22 }}>
                      <div><Label text="Budget" /><Select value={form.budget} onChange={set('budget')} options={BUDGETS} placeholder="Select budget" /></div>
                      <div><Label text="Performance Length" /><Select value={form.length} onChange={set('length')} options={LENGTHS} placeholder="Select length" /></div>
                    </div>

                    <AnimatePresence>
                      {(status === 'error' || Object.keys(errors).length > 0) && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.35)',
                            borderRadius: 10, padding: '10px 14px', marginBottom: 16,
                            fontSize: '0.82rem', color: '#FBBF24',
                          }}
                        >
                          <AlertCircle size={16} style={{ flexShrink: 0 }} />
                          {status === 'error'
                            ? 'Something went wrong. Please try again or email directly.'
                            : 'Please complete the required fields marked *.'}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-green"
                      style={{ width: '100%', justifyContent: 'center', opacity: status === 'loading' ? 0.75 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
                    >
                      {status === 'loading' ? (
                        <><Loader size={16} style={{ animation: 'spin 0.8s linear infinite' }} /> Sending…</>
                      ) : (
                        <><Send size={15} /> Send Booking Request</>
                      )}
                    </button>

                    <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textAlign: 'center', marginTop: 14 }}>
                      Or email directly at{' '}
                      <a href="mailto:kcsallen@gmail.com" style={{ color: 'var(--accent-2)', textDecoration: 'none' }}>kcsallen@gmail.com</a>
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .booking-grid { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 32px; align-items: start; }
        .bk-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .bk-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
        @media(max-width:900px){ .booking-grid { grid-template-columns: 1fr; gap: 32px; } }
        @media(max-width:560px){ .bk-2, .bk-3 { grid-template-columns: 1fr; } }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  )
}

/* ── Floating-label text field ── */
function Float({ label, value, onChange, type = 'text', error }: {
  label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string; error?: boolean
}) {
  return (
    <div className={`float-field ${value ? 'filled' : ''}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{ ...inputStyle(error), paddingTop: 14, paddingBottom: 10 }}
      />
      <label>{label}</label>
    </div>
  )
}

function Label({ text }: { text: string }) {
  return <label style={{
    display: 'block', fontSize: '0.68rem', fontWeight: 700, fontFamily: "'Syne', sans-serif",
    textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-dim)', marginBottom: 6,
  }}>{text}</label>
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '4px 0 16px' }}>
      <span className="font-syne" style={{ fontWeight: 800, fontSize: '0.82rem', color: 'var(--accent-2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{text}</span>
      <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
    </div>
  )
}

function Select({ value, onChange, options, placeholder, error }: {
  value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; options: string[]; placeholder: string; error?: boolean
}) {
  return (
    <div style={{ position: 'relative' }}>
      <select value={value} onChange={onChange} style={{ ...inputStyle(error), paddingRight: 40, cursor: 'pointer', color: value ? '#fff' : 'var(--text-dim)' }}>
        <option value="" style={{ background: '#0d1830' }}>{placeholder}</option>
        {options.map(o => <option key={o} value={o} style={{ background: '#0d1830', color: '#fff' }}>{o}</option>)}
      </select>
      <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)', pointerEvents: 'none', fontSize: '0.7rem' }}>▼</span>
    </div>
  )
}

function inputStyle(error?: boolean): React.CSSProperties {
  return {
    width: '100%',
    background: 'rgba(9,20,38,0.6)',
    border: `1px solid ${error ? 'rgba(245,158,11,0.7)' : 'rgba(255,255,255,0.08)'}`,
    boxShadow: error ? '0 0 0 3px rgba(245,158,11,0.12)' : 'none',
    color: '#fff',
    borderRadius: 12,
    padding: '12px 16px',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.9rem',
    outline: 'none',
    appearance: 'none' as const,
  }
}
