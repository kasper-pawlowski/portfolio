'use client'

import { useEffect, useRef, useState } from 'react'
import ThemeToggle from '../theme-toggle'
import Image from 'next/image'
import SoundToggle from '../sound-toggle'
import { useTheme } from 'next-themes'
import LanguageToggle from '../language-toggle'
import { useTranslations } from 'next-intl'
import MobileMenu from './MobileMenu'
import { useMotionValueEvent, useScroll, motion } from 'motion/react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { resolvedTheme } = useTheme()
  const headerRef = useRef<HTMLDivElement>(null)
  const t = useTranslations('Navigation')

  const { scrollY } = useScroll()
  const [scrollDirection, setScrollDirection] = useState('up')

  useMotionValueEvent(scrollY, 'change', current => {
    const diff = current - (scrollY.getPrevious() ?? 0)
    setScrollDirection(diff > 0 ? 'down' : 'up')
  })

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight
      document.documentElement.style.setProperty(
        '--header-height',
        `${height}px`
      )
    }
  }, [])

  const MenuIcon = () => {
    if (!isMenuOpen) {
      return resolvedTheme === 'dark' ? (
        <Image src='/icons/menu-light.svg' width={30} height={30} alt='Menu' />
      ) : (
        <Image src='/icons/menu-dark.svg' width={30} height={30} alt='Menu' />
      )
    } else if (isMenuOpen) {
      return resolvedTheme === 'dark' ? (
        <Image
          src='/icons/close-light.svg'
          width={30}
          height={30}
          alt='Close menu'
        />
      ) : (
        <Image
          src='/icons/close-dark.svg'
          width={30}
          height={30}
          alt='Close menu'
        />
      )
    }
  }

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === 'down' ? '-100%' : '0%' }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className='fixed top-0 left-0 z-10 w-full'
    >
      <div className='text-grey container mx-auto flex w-full items-center justify-between py-8 text-2xl font-bold'>
        <div className='flex grow items-center justify-start'>
          <a href='#hero'>
            {resolvedTheme === 'dark' ? (
              <Image
                src='/icons/logo-light.svg'
                width={30}
                height={30}
                alt='Logo'
              />
            ) : (
              <Image src='/icons/logo.svg' width={30} height={30} alt='Logo' />
            )}
          </a>
        </div>
        <div className='hidden grow-2 items-center justify-center lg:flex'>
          <nav className='flex items-center justify-center gap-10'>
            <a href='#about' className='font-goia'>
              {t('about')}
            </a>
            <span className='text-2xl text-[#30303060]'>・</span>
            <a href='#projects' className='font-goia'>
              {t('projects')}
            </a>
            <span className='text-2xl text-[#30303060]'>・</span>
            <a href='#contact' className='font-goia'>
              {t('contact')}
            </a>
          </nav>
        </div>
        <div className='hidden grow items-center justify-end gap-8 lg:flex'>
          <SoundToggle />
          <ThemeToggle />
          <LanguageToggle />
        </div>
        <button
          className='lg:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label='Open menu'
        >
          <MenuIcon />
        </button>
      </div>
      <div
        className='absolute top-0 z-[-1] h-full w-full backdrop-blur-2xl'
        style={{
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
          maskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat'
        }}
      ></div>

      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </motion.header>
  )
}

export default Header
