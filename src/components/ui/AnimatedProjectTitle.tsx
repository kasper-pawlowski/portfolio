'use client'

import { PropsWithChildren } from 'react'
import {
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  motion
} from 'motion/react'

export const AnimatedProjectTitleMobile = ({ children }: PropsWithChildren) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: '0px 0px -20px 0px'
      }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className='font-display font-900 z-2 mt-5 mb-10 text-center text-5xl'
    >
      {children}
    </motion.h1>
  )
}

export const AnimatedProjectTitle = ({ children }: PropsWithChildren) => {
  const { scrollYProgress } = useScroll()
  const titleY = useMotionValue(-200)
  const titleScale = useMotionValue(1)
  useMotionValueEvent(scrollYProgress, 'change', latest => {
    const newY = -200 + latest * 400
    titleY.set(newY)

    const newScale = 0.7 + latest * 1.1
    titleScale.set(newScale)
  })

  return (
    <motion.h1
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{ y: titleY, scale: titleScale }}
      className='font-display absolute top-1/2 left-1/2 z-2 -translate-x-1/2 -translate-y-1/2 text-5xl font-black lg:text-7xl'
    >
      {children}
    </motion.h1>
  )
}
