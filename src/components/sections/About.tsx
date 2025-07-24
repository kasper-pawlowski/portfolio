'use client'

import React, { useEffect, useRef, useState } from 'react'
import Photo from '../ui/Photo'
import GridWrapper from '../ui/GridWrapper'
import { useTranslations } from 'next-intl'
import {
  animate,
  motion,
  stagger,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform
} from 'motion/react'
import { splitText } from 'motion-plus'
import { AnimateNumber } from 'motion-plus-react'

const About = () => {
  const t = useTranslations('About')

  const { scrollYProgress } = useScroll()
  const containerY = useMotionValue(100)
  useMotionValueEvent(scrollYProgress, 'change', latest => {
    const newY = 100 - latest * 300
    containerY.set(newY)
  })

  return (
    <section id='about' className='relative'>
      <div
        className='pointer-events-none absolute inset-0 z-1 bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
        aria-hidden='true'
      />
      <motion.div
        style={{ y: containerY }}
        className='container mx-auto flex flex-col gap-20 py-20 font-black lg:flex-row lg:py-40'
      >
        <div className='flex flex-3/5 flex-col gap-10'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: false,
              margin: '0px 0px -20px 0px'
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='font-display z-2 text-5xl lg:text-7xl'
          >
            {t('title')}
          </motion.h1>
          <p className='font-500 z-2 flex flex-col gap-5 font-sans text-lg lg:pl-20 lg:text-xl'>
            <span>{t('content.paragraph1')}</span>
            <span>{t('content.paragraph2')}</span>
            <span>{t('content.paragraph3')}</span>
            <span>{t('content.paragraph4')}</span>
          </p>
        </div>
        <div className='relative flex h-auto flex-2/5 flex-col pt-40'>
          <Photo />
          <GridWrapper section='about' />
        </div>
      </motion.div>
    </section>
  )
}

export default About
