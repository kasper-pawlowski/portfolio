import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

const DURATION = 0.25
const STAGGER = 0.025

interface FlipTextProps {
  children: string
}

const FlipText: React.FC<FlipTextProps> = ({ children }) => {
  return (
    <motion.p
      initial='initial'
      whileHover='hovered'
      className='relative block overflow-hidden'
      style={{
        lineHeight: 1
      }}
    >
      <div>
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0
              },
              hovered: {
                y: '-100%'
              }
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i
            }}
            className='inline-block'
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className='absolute inset-0'>
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: '100%'
              },
              hovered: {
                y: 0
              }
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i
            }}
            className='inline-block'
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.p>
  )
}

export default FlipText
