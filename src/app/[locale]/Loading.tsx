'use client'

import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

const Loading = () => {
  const count = useMotionValue(0)

  const rounded = useTransform(() => Math.round(count.get()))

  useEffect(() => {
    const controls = animate(count, 100, { duration: 2 })
    return () => controls.stop()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
      }}
      className='fixed z-50 flex h-svh w-screen flex-col justify-end'
    >
      <div className='bg-background bottom-marquee absolute flex h-full w-full items-center justify-center'>
        <motion.pre className='font-display font-900 text-7xl'>
          {rounded}
        </motion.pre>
        <span className='font-display font-900 text-7xl'>%</span>
      </div>
      <motion.div
        id='1'
        initial={{ x: '-100%' }}
        animate={{
          x: ['-100%', '0%', '100%']
        }}
        transition={{
          duration: 2,
          times: [0, 0.9, 1],
          ease: 'linear',
          bounce: 0
        }}
        className='h-marquee bg-foreground absolute bottom-0 z-2 flex w-full shrink-0'
      />
      <motion.div
        id='2'
        initial={{ x: '0%' }}
        animate={{
          x: ['0%', '0%', '100%']
        }}
        transition={{
          duration: 2,
          times: [0, 0.9, 1],
          ease: 'linear',
          bounce: 0
        }}
        className='h-marquee bg-background absolute bottom-0 z-1 flex w-full shrink-0'
      />
    </motion.div>
  )
}

export default Loading
