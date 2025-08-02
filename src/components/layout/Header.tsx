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
import { Menu, MoveLeft, X } from 'lucide-react'
import { ProgressiveBlur } from '../core/progressive-blur'
import Logo from '../../../public/icons/logo.svg'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { useLenis } from 'lenis/react'
import { usePathname } from '@/i18n/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkSection, setIsDarkSection] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('up')
  const [mounted, setMounted] = useState(false)

  const t = useTranslations('Navigation')
  const tProjects = useTranslations('Projects')
  const lenis = useLenis()
  const isLgUp = useBreakpoint('lg')
  const { scrollY } = useScroll()
  const pathname = usePathname()

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
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden'
      }
    } else {
      document.body.classList.remove('overflow-hidden')
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'unset'
      }
    }

    // Cleanup przy unmount
    return () => {
      document.body.classList.remove('overflow-hidden')
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'unset'
      }
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

  const handleScrollTo = (target: string) => {
    if (lenis) {
      lenis.scrollTo(target)
    }
  }

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
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: headerY, opacity: 1 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className='fixed top-0 left-0 z-20 w-full'
    >
      <div className='font-700 qhd:text-2xl qhd:py-8 container mx-auto flex w-full content-center justify-between py-4 text-xl lg:py-5'>
        <div className='flex flex-1/5 items-center justify-start'>
          {!isLgUp && pathname != '/' ? (
            <Link
              href='/#projects'
              aria-label='back to projects'
              className={`font-400 group flex items-center justify-center gap-3 text-base transition-colors duration-200 ${textColorClass}`}
            >
              <MoveLeft
                strokeWidth={1}
                className='duration-300 ease-in-out group-active:-translate-x-1'
              />
              {tProjects('back_button')}
            </Link>
          ) : (
            <Link
              href='/#hero'
              aria-label='Logo'
              onClick={() => {
                handleLogoClick()
                handleScrollTo('#hero')
              }}
              className={`transition-colors duration-200 ${textColorClass}`}
            >
              <Logo className='qhd:h-8 qhd:w-8 h-6 w-6' />
            </Link>
          )}
        </div>

        <div className='hidden flex-3/5 items-center justify-center lg:flex'>
          <nav className='flex items-center justify-center gap-10'>
            <Link
              href='/#about'
              className={`duration-200 ease-in-out ${textColorClass}`}
              onClick={() => handleScrollTo('#about')}
            >
              {t('about')}
            </Link>
            <span
              className={`cursor-default text-2xl transition-colors duration-200 ${separatorColorClass}`}
            >
              ・
            </span>
            <Link
              href='/#projects'
              className={`duration-200 ease-in-out ${textColorClass}`}
              onClick={() => handleScrollTo('#projects')}
            >
              {t('projects')}
            </Link>
            <span
              className={`cursor-default text-2xl transition-colors duration-200 ${separatorColorClass}`}
            >
              ・
            </span>
            <Link
              href='/#contact'
              className={`duration-200 ease-in-out ${textColorClass}`}
              onClick={() => handleScrollTo('#contact')}
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
          className={`${textColorClass} transition-colors duration-200 lg:hidden`}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <ProgressiveBlur
        className='absolute top-0 left-0 z-[-2] h-[100%] w-full'
        direction='top'
        enableOpacityTransition={false}
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
