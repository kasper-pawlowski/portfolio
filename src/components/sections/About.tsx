import React from 'react'
import Photo from '../ui/Photo'
import GridWrapper from '../ui/GridWrapper'
import { useTranslations } from 'next-intl'

const About = () => {
  const t = useTranslations('About')

  return (
    <section id='about' className='relative'>
      <div
        className='pointer-events-none absolute inset-0 z-1 bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
        aria-hidden='true'
      />
      <div className='container mx-auto flex flex-col gap-20 py-20 font-black lg:flex-row lg:py-40'>
        <div className='flex flex-3/5 flex-col gap-10'>
          <h1 className='font-display z-2 text-5xl lg:text-7xl'>
            {t('title')}
          </h1>
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
      </div>
    </section>
  )
}

export default About
