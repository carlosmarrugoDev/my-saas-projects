'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE } from '@/lib/motion'

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'span'
}) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  )
}

export function Stagger({
  children,
  className,
  amount = 0.15,
}: {
  children: ReactNode
  className?: string
  amount?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: amount } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={variants} transition={{ duration: 0.5, ease: EASE }}>
      {children}
    </motion.div>
  )
}
