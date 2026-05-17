import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, subject } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'Jayreuschle@yahoo.com',
      replyTo: email,
      subject: subject || `GM James Website — Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #111; color: #fff; padding: 32px; border-radius: 12px;">
          <h2 style="color: #C1121F; margin: 0 0 24px;">New Message — GM James Website</h2>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 0 0 8px;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 0 0 16px;"><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #1a1a1a; padding: 16px; border-radius: 8px; border-left: 3px solid #C1121F;">${message}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
