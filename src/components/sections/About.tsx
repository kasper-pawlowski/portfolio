'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'motion/react'
import GridWrapper from '@/components/ui/GridWrapper'
import Photo from '@/components/ui/Photo'

const About = () => {
  const t = useTranslations('About')

  return (
    <section id='about' className='relative'>
      <div
        className='pointer-events-none absolute inset-0 z-1 bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
        aria-hidden='true'
      />
      <div className='relative z-1 container mx-auto flex flex-col gap-10 py-20 font-black lg:flex-row lg:gap-20 lg:py-40'>
        <div className='flex flex-3/5 flex-col gap-10'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              margin: '0px 0px -20px 0px'
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='font-display z-2 text-5xl lg:text-7xl'
          >
            {t('title')}
          </motion.h1>
          <p className='font-500 z-2 flex flex-col gap-5 font-sans text-lg lg:pl-20 lg:text-xl'>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: '0px 0px -50px 0px'
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {t('content.paragraph1')}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: '0px 0px -50px 0px'
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {t('content.paragraph2')}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: '0px 0px -50px 0px'
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {t('content.paragraph3')}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: '0px 0px -50px 0px'
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {t('content.paragraph4')}
            </motion.span>
          </p>
        </div>
        <div className='relative z-2 flex h-60 flex-col lg:h-auto lg:flex-2/5 lg:pt-40'>
          <div className='bg-background relative h-full w-full'>
            <GridWrapper section='about' />
            <div
              className='pointer-events-none absolute inset-0 z-1 bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
              aria-hidden='true'
            />
          </div>
          <Photo />
        </div>
      </div>
    </section>
  )
}

export default About
