'use client'

import {
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  motion
} from 'motion/react'
import { useTranslations } from 'next-intl'
import React from 'react'

const Experience = () => {
  const t = useTranslations('Experience')

  const { scrollYProgress } = useScroll()
  const containerY = useMotionValue(100)
  useMotionValueEvent(scrollYProgress, 'change', latest => {
    const newY = 100 - latest * 300
    containerY.set(newY)
  })

  return (
    <section id='experience' className='text-background bg-foreground relative'>
      <div
        className='pointer-events-none absolute inset-0 bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
        aria-hidden='true'
      />
      <motion.div
        style={{ y: containerY }}
        className='container mx-auto flex h-auto flex-col gap-10 py-20 lg:py-40'
      >
        <h1 className='font-display z-2 w-full text-5xl font-black lg:text-7xl'>
          {t('title')}
        </h1>
        <p className='z-2 flex w-full flex-col gap-5 font-sans text-lg font-medium lg:px-20 lg:text-xl'>
          <span>{t('content.paragraph1')}</span>
          <span>{t('content.paragraph2')}</span>
          <span>{t('content.paragraph3')}</span>
        </p>
      </motion.div>

      <svg
        className='text-foreground absolute z-1 h-20 w-full'
        viewBox='0 0 1200 64'
        preserveAspectRatio='none'
      >
        <path
          d='M0,0 L1200,0 L1200,34 Q600,0 0,34 Z'
          fill='currentColor'
          className='block lg:hidden'
        />
        <path
          d='M0,0 L1200,0 L1200,64 Q600,0 0,64 Z'
          fill='currentColor'
          className='hidden lg:block'
        />
      </svg>
    </section>
  )
}

export default Experience
