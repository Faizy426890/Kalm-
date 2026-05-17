'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface RevealProps {
  children: React.ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
  className?: string
  once?: boolean
}

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  once = true,
}: RevealProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-60px' })

  const offsets = {
    left:  { x: 60, y: 0 },
    right: { x: -60, y: 0 },
    up:    { x: 0, y: 48 },
    down:  { x: 0, y: -48 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offsets[direction] }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
