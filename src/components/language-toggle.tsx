import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { useTheme } from 'next-themes'

const LanguageToggle = () => {
  const t = useTranslations()
  const locale = useLocale()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { resolvedTheme } = useTheme()

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev)
  }

  return (
    <div className='relative'>
      <button className='flex' onClick={toggleDropdown}>
        <span className='font-display'>{t('Language')}</span>
        {resolvedTheme === 'dark' ? (
          <motion.div
            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src='/icons/arrow-down-light.svg'
              width={30}
              height={30}
              alt='arrow icon'
            />
          </motion.div>
        ) : (
          <motion.div
            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src='/icons/arrow-down-dark.svg'
              width={30}
              height={30}
              alt='arrow icon'
            />
          </motion.div>
        )}
      </button>
      <AnimatePresence initial={false}>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.1,
              scale: { type: 'spring', visualDuration: 0.1, bounce: 0.3 }
            }}
            className='absolute top-16 right-0 z-10 flex w-max flex-col justify-start rounded-lg bg-[#FFFFFF20] shadow-lg backdrop-blur-xl'
          >
            <Link
              locale='pl'
              href='/'
              className={`flex items-center rounded-lg py-5 backdrop-blur-xl hover:bg-[#FFFFFF20] ${
                locale === 'pl' ? 'bg-[#FFFFFF30]' : ''
              }`}
            >
              <Image
                src='/icons/polish.png'
                width={32}
                height={32}
                alt='Polish flag'
                className='mr-5 ml-7'
              />
              <span className='mr-7'>Polski</span>
            </Link>
            <Link
              href='/'
              locale='en'
              className={`flex items-center rounded-lg py-5 backdrop-blur-xl hover:bg-[#FFFFFF20] ${
                locale === 'en' ? 'bg-[#FFFFFF30]' : ''
              }`}
            >
              <Image
                src='/icons/english.png'
                width={32}
                height={32}
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

export default LanguageToggle
