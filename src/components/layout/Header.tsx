'use client'

import { useEffect, useState } from 'react'
import ThemeToggle from '../theme-toggle'
import Image from 'next/image'
import SoundToggle from '../sound-toggle'
import { useTheme } from 'next-themes'
import { useTranslations } from 'next-intl'
import MobileMenu from './MobileMenu'
import {
  useMotionValueEvent,
  useScroll,
  motion,
  AnimatePresence
} from 'motion/react'
import LanguageSelect from '../language-select'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { ProgressiveBlur } from '../core/progressive-blur'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const [scrollDirection, setScrollDirection] = useState('up')
  const { resolvedTheme } = useTheme()
  const t = useTranslations('Navigation')
  // const { scrollY } = useScroll()

  // useMotionValueEvent(scrollY, 'change', current => {
  //   const diff = current - (scrollY.getPrevious() ?? 0)
  //   setScrollDirection(diff > 0 ? 'down' : 'up')
  // })

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isMenuOpen])

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.header
      initial={{ y: 0 }}
      // animate={{ y: scrollDirection === 'down' ? '-100%' : '0%' }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className='fixed top-0 left-0 z-10 w-full px-8 lg:px-0'
    >
      <div className='text-grey font-700 container mx-auto flex w-full content-center justify-between py-4 text-2xl lg:py-8'>
        <div className='flex flex-1/5 items-center justify-start'>
          <Link
            href='/'
            aria-label='Logo'
            onClick={isMenuOpen ? () => setIsMenuOpen(false) : undefined}
          >
            <Image
              src={
                resolvedTheme === 'dark'
                  ? '/icons/logo-light.svg'
                  : '/icons/logo.svg'
              }
              width={30}
              height={30}
              alt='Logo'
            />
          </Link>
        </div>
        <div className='hidden flex-3/5 items-center justify-center lg:flex'>
          <nav className='flex items-center justify-center gap-10'>
            <Link href='/#about' className='font-goia'>
              {t('about')}
            </Link>
            <span className='text-foreground-light text-2xl'>・</span>
            <Link href='/#projects' className='font-goia'>
              {t('projects')}
            </Link>
            <span className='text-foreground-light text-2xl'>・</span>
            <Link href='/#contact' className='font-goia'>
              {t('contact')}
            </Link>
          </nav>
        </div>
        <div className='hidden flex-1/5 items-center justify-end gap-8 lg:flex'>
          <SoundToggle />
          <ThemeToggle />
          <LanguageSelect />
        </div>
        <button
          className='lg:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label='Open menu'
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <ProgressiveBlur
        className='pointer-events-none absolute top-0 left-0 z-[-2] h-[90%] w-full'
        blurIntensity={1}
        direction='top'
      />

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className='fixed inset-0 z-[-1]'
            initial={{ opacity: 0, y: '-100vh' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            exit={{ opacity: 0, y: '-100vh' }}
          >
            <MobileMenu
              key={'mobile-menu'}
              onClose={() => setIsMenuOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
