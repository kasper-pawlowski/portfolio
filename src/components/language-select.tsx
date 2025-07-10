import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'

type LanguageSelectProps = {
  textColorClass?: string
}

const LanguageSelect = ({ textColorClass }: LanguageSelectProps) => {
  const t = useTranslations()
  const locale = useLocale()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [alignRight, setAlignRight] = useState(false)

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev)
  const closeDropdown = () => setIsDropdownOpen(false)

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeDropdown()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDropdown()
      }
    }

    const handleScrollOrResize = () => {
      closeDropdown()
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleMouseDown)
      document.addEventListener('keydown', handleKeyDown)
      window.addEventListener('scroll', handleScrollOrResize, { passive: true })
      window.addEventListener('resize', handleScrollOrResize)
    }

    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', handleScrollOrResize)
      window.removeEventListener('resize', handleScrollOrResize)
    }
  }, [isDropdownOpen])

  useEffect(() => {
    if (isDropdownOpen && dropdownRef.current && buttonRef.current) {
      const dropdown = dropdownRef.current as HTMLElement
      const button = buttonRef.current as HTMLElement

      const dropdownWidth = dropdown.offsetWidth
      const buttonRect = button.getBoundingClientRect()

      const spaceRight = window.innerWidth - buttonRect.left
      const shouldAlignRight =
        dropdownWidth / 2 > spaceRight - buttonRect.width / 2

      setAlignRight(shouldAlignRight)
    }
  }, [isDropdownOpen])

  return (
    <div className='relative'>
      <motion.button
        ref={buttonRef}
        className={`bg-foreground/5 hover:bg-foreground/10 flex place-items-center rounded-xl px-4 py-2 backdrop-blur-xl transition-colors duration-300 ${textColorClass}`}
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
        aria-haspopup='true'
        aria-label='Select language dropdown'
      >
        <span className='font-display font-700'>{t('Language')}</span>
        <motion.div
          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
          transition={{ duration: 0.1 }}
        >
          <ChevronDown size={30} />
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isDropdownOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.1,
              scale: { type: 'spring', visualDuration: 0.1, bounce: 0.3 }
            }}
            className={clsx(
              'font-700 absolute bottom-16 z-10 flex w-max flex-col justify-start rounded-lg bg-[#FFFFFF20] shadow-lg backdrop-blur-xl lg:top-16',
              alignRight ? 'right-0' : 'left-1/2 -translate-x-1/2'
            )}
            role='menu'
            tabIndex={-1}
          >
            <Link
              locale='pl'
              href='/'
              onClick={closeDropdown}
              className={clsx(
                'flex items-center rounded-lg py-5 backdrop-blur-xl transition-colors duration-300 hover:bg-[#FFFFFF20]',
                locale === 'pl' && 'bg-[#FFFFFF30]',
                textColorClass
              )}
              role='menuitem'
              tabIndex={0}
            >
              <Image
                src='/icons/polish.png'
                width={32}
                height={32}
                alt='Polish flag'
                loading='lazy'
                className='mr-5 ml-7'
              />
              <span className='mr-7'>Polski</span>
            </Link>
            <Link
              href='/'
              locale='en'
              onClick={closeDropdown}
              className={clsx(
                'flex items-center rounded-lg py-5 backdrop-blur-xl transition-colors duration-300 hover:bg-[#FFFFFF20]',
                locale === 'en' && 'bg-[#FFFFFF30]',
                textColorClass
              )}
              role='menuitem'
              tabIndex={0}
            >
              <Image
                src='/icons/english.png'
                width={32}
                height={32}
                loading='lazy'
                alt='English flag'
                className='mr-5 ml-7'
              />
              <span className='mr-7'>English</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanguageSelect
