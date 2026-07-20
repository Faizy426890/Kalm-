import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const BOOKING_TO = 'kcsallen@gmail.com'

const esc = (v: unknown) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { fullName, email, subject } = data

    if (!fullName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const rows: [string, string][] = [
      ['Full Name', data.fullName],
      ['Email', data.email],
      ['Phone', data.phone],
      ['Venue / Organization', data.org],
      ['Event Type', data.eventType],
      ['Event Date', data.eventDate],
      ['Start Time', data.startTime],
      ['End Time', data.endTime],
      ['City', data.city],
      ['State', data.state],
      ['Venue Name', data.venueName],
      ['Venue Address', data.venueAddress],
      ['Budget', data.budget],
      ['Performance Length', data.length],
    ]

    const rowsHtml = rows
      .filter(([, v]) => v)
      .map(
        ([k, v]) =>
          `<tr><td style="padding:8px 12px;color:#7A8AA3;font-size:13px;white-space:nowrap;">${esc(k)}</td><td style="padding:8px 12px;color:#fff;font-size:14px;">${esc(v)}</td></tr>`,
      )
      .join('')

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: BOOKING_TO,
      replyTo: email,
      subject: subject || `Kalm Before the Storm — Booking Request from ${fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 640px; margin: 0 auto; background: #091426; color: #fff; padding: 32px; border-radius: 16px;">
          <h2 style="color: #60A5FA; margin: 0 0 8px;">New Booking Request</h2>
          <p style="color:#BAC7D8; margin:0 0 20px; font-size:14px;">Kalm Before the Storm — kalmbeforethestorm.com</p>
          <table style="width:100%; border-collapse:collapse; background:#0E1A31; border-radius:12px; overflow:hidden;">
            ${rowsHtml}
          </table>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
