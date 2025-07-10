'use client'

import { useEffect, useState, useCallback } from 'react'
import ThemeToggle from '../theme-toggle'
import SoundToggle from '../sound-toggle'
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
import Logo from '../../../public/icons/logo.svg'
import { useBreakpoint } from '@/hooks/useBreakpoint'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkSection, setIsDarkSection] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('up')
  const [mounted, setMounted] = useState(false)

  const t = useTranslations('Navigation')
  const isLgUp = useBreakpoint('lg')
  const { scrollY } = useScroll()

  // Memoizowana funkcja sprawdzająca pozycję nagłówka
  const checkHeaderPosition = useCallback(() => {
    const headerHeight = 80
    const darkSections = ['experience']

    const isOverAnyDarkSection = darkSections.some(sectionId => {
      const section = document.getElementById(sectionId)
      if (section) {
        const rect = section.getBoundingClientRect()
        return rect.top <= headerHeight && rect.bottom >= 0
      }
      return false
    })

    setIsDarkSection(isOverAnyDarkSection)
  }, [])

  // Obsługa scroll direction
  useMotionValueEvent(scrollY, 'change', current => {
    if (!isLgUp) {
      const previous = scrollY.getPrevious() ?? 0
      const diff = current - previous
      setScrollDirection(diff > 0 ? 'down' : 'up')
    }
  })

  // Obsługa body overflow przy otwartym menu
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    // Cleanup przy unmount
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isMenuOpen])

  // Mounting state
  useEffect(() => {
    setMounted(true)
  }, [])

  // Sprawdzanie pozycji nagłówka względem sekcji
  useEffect(() => {
    if (!mounted) return

    checkHeaderPosition()

    // Throttled scroll handler dla lepszej wydajności
    let ticking = false
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkHeaderPosition()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', scrollHandler, { passive: true })
    window.addEventListener('resize', checkHeaderPosition)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
      window.removeEventListener('resize', checkHeaderPosition)
    }
  }, [mounted, checkHeaderPosition])

  // Obsługa zamykania menu przy kliknięciu Logo
  const handleLogoClick = useCallback(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [isMenuOpen])

  // Obsługa toggle menu
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  if (!mounted) {
    return null
  }

  const textColorClass =
    isDarkSection && !isMenuOpen ? 'text-background' : 'text-foreground'
  const separatorColorClass = isDarkSection
    ? 'text-background-light'
    : 'text-foreground-light'
  const headerY = !isLgUp && scrollDirection === 'down' ? '-100%' : '0%'

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: headerY }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className='fixed top-0 left-0 z-20 w-full px-8 lg:px-0'
    >
      <div className='font-700 container mx-auto flex w-full content-center justify-between py-4 text-2xl lg:py-8'>
        <div className='flex flex-1/5 items-center justify-start'>
          <Link
            href='/#hero'
            aria-label='Logo'
            onClick={handleLogoClick}
            className={`transition-colors duration-300 ${textColorClass}`}
          >
            <Logo className='h-[30px] w-[30px]' />
          </Link>
        </div>

        <div className='hidden flex-3/5 items-center justify-center lg:flex'>
          <nav className='flex items-center justify-center gap-10'>
            <Link
              href='/#about'
              className={`transition-colors duration-300 ${textColorClass}`}
            >
              {t('about')}
            </Link>
            <span
              className={`text-2xl transition-colors duration-300 ${separatorColorClass}`}
            >
              ・
            </span>
            <Link
              href='/#projects'
              className={`transition-colors duration-300 ${textColorClass}`}
            >
              {t('projects')}
            </Link>
            <span
              className={`text-2xl transition-colors duration-300 ${separatorColorClass}`}
            >
              ・
            </span>
            <Link
              href='/#contact'
              className={`transition-colors duration-300 ${textColorClass}`}
            >
              {t('contact')}
            </Link>
          </nav>
        </div>

        <div className='hidden flex-1/5 items-center justify-end gap-8 lg:flex'>
          <SoundToggle textColorClass={textColorClass} />
          <ThemeToggle textColorClass={textColorClass} />
          <LanguageSelect textColorClass={textColorClass} />
        </div>

        <button
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          className={`${textColorClass} transition-colors duration-300 lg:hidden`}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <ProgressiveBlur
        className='absolute top-0 left-0 z-[-2] h-[100%] w-full'
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
              key='mobile-menu'
              onClose={() => setIsMenuOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
