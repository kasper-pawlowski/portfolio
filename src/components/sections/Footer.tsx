'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useLenis } from 'lenis/react'
import useSound from '@/hooks/useSound'

const Footer = () => {
  const t = useTranslations('Navigation')
  const lenis = useLenis()
  const { soundHover, soundClick } = useSound()

  const handleScrollTo = (target: string) => {
    if (lenis) {
      lenis.scrollTo(target)
    }
  }

  return (
    <section id='footer' className='relative'>
      <div
        className='pointer-events-none absolute inset-0 bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
        aria-hidden='true'
      />
      <svg
        className='text-foreground absolute -top-20 -z-1 h-20 w-full rotate-180'
        viewBox='0 0 1200 64'
        preserveAspectRatio='none'
      >
        <path
          d='M0,0 L1200,0 L1200,64 Q600,-10 0,64 Z'
          fill='var(--svg-accent-1)'
          className='hidden lg:block'
        />
        <path
          d='M0,0 L1200,0 L1200,34 Q600,10 0,34 Z'
          fill='var(--svg-accent-1)'
          className='block lg:hidden'
        />
        <path
          d='M0,0 L1200,0 L1200,56 Q600,-20 0,56 Z'
          fill='var(--svg-accent-2)'
          className='hidden lg:block'
        />
        <path
          d='M0,0 L1200,0 L1200,26 Q600,0 0,26 Z'
          fill='var(--svg-accent-2)'
          className='block lg:hidden'
        />
        <path
          d='M0,0 L1200,0 L1200,46 Q600,-30 0,46 Z'
          fill='currentColor'
          className='hidden lg:block'
        />
        <path
          d='M0,0 L1200,0 L1200,16 Q600,-10 0,16 Z'
          fill='currentColor'
          className='block lg:hidden'
        />
      </svg>
      <div className='text-background bg-foreground z-1 flex flex-col items-center gap-15 py-10'>
        <div className='flex-3/5 items-center justify-center'>
          <nav className='flex items-center justify-center gap-3'>
            <Link
              href='#about'
              className='font-goia text-background font-500 underline-effect z-1'
              onClick={() => {
                handleScrollTo('#about'), soundClick()
              }}
              onMouseEnter={soundHover}
            >
              {t('about')}
            </Link>
            <span className='text-background z-1 cursor-default text-lg'>
              ・
            </span>
            <Link
              href='#projects'
              className='font-goia text-background font-500 underline-effect z-1'
              onClick={() => {
                handleScrollTo('#projects'), soundClick()
              }}
              onMouseEnter={soundHover}
            >
              {t('projects')}
            </Link>
            <span className='text-background z-1 cursor-default text-lg'>
              ・
            </span>
            <Link
              href='#contact'
              className='font-goia text-background font-500 underline-effect z-1'
              onClick={() => {
                handleScrollTo('#contact'), soundClick()
              }}
              onMouseEnter={soundHover}
            >
              {t('contact')}
            </Link>
          </nav>
        </div>
        <p className='z-1 mt-auto'>© 2025 Kasper Pawłowski</p>
      </div>
    </section>
  )
}

export default Footer
