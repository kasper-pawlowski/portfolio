import Image from 'next/image'
import LanguageToggle from '../language-select'
import SoundToggle from '../sound-toggle'
import ThemeToggle from '../theme-toggle'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const t = useTranslations('Navigation')
  const { resolvedTheme } = useTheme()

  return (
    <motion.div className='bg-background text-foreground relative flex h-svh w-screen flex-col items-center justify-center gap-10'>
      <div
        className='pointer-events-none absolute inset-0 z-0 h-full w-full bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
        aria-hidden='true'
      />
      <div className='flex grow-2 items-center justify-center'>
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
      <div className='flex grow items-center justify-end gap-8'>
        <SoundToggle />
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </motion.div>
  )
}

export default MobileMenu
