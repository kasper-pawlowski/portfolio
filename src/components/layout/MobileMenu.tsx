import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useLenis } from 'lenis/react'
import LanguageToggle from '@/components/language-select'
import ThemeToggle from '@/components/theme-toggle'
import SoundToggle from '@/components/sound-toggle'

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const t = useTranslations('Navigation')
  const lenis = useLenis()

  const handleScrollTo = (target: string) => {
    if (lenis) {
      lenis.scrollTo(target)
    }
  }

  return (
    <motion.div className='bg-background/70 text-foreground fixed container mx-auto flex h-screen w-screen flex-col px-8 backdrop-blur-lg'>
      <nav className='font-700 flex w-full flex-4/6 flex-col justify-center gap-15 text-4xl'>
        <Link
          href='/#about'
          className='flex gap-5'
          onClick={() => {
            onClose()
            handleScrollTo('#about')
          }}
        >
          <span>⑊</span>
          <p>{t('about')}</p>
        </Link>
        <Link
          href='/#projects'
          className='flex gap-5'
          onClick={() => {
            onClose()
            handleScrollTo('#projects')
          }}
        >
          <span>⑊</span>
          {t('projects')}
        </Link>
        <Link
          href='/#contact'
          className='flex gap-5'
          onClick={() => {
            onClose()
            handleScrollTo('#contact')
          }}
        >
          <span>⑊</span>
          {t('contact')}
        </Link>
      </nav>

      <div className='flex w-full flex-2/6 items-center justify-center gap-8 pb-30'>
        <div className='flex flex-1/3 justify-end'>
          <SoundToggle />
        </div>
        <div className='flex flex-1/3 justify-center'>
          <ThemeToggle />
        </div>
        <div className='flex flex-1/3 justify-start'>
          <LanguageToggle />
        </div>
      </div>
    </motion.div>
  )
}

export default MobileMenu
