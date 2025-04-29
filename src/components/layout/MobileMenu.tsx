import Image from 'next/image'
import LanguageToggle from '../language-toggle'
import SoundToggle from '../sound-toggle'
import ThemeToggle from '../theme-toggle'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const t = useTranslations('Navigation')
  const { resolvedTheme } = useTheme()

  return (
    <motion.div className='bg-beige text-foreground relative flex h-screen w-screen flex-col items-center justify-center gap-10'>
      <button onClick={onClose}>close</button>
      <div
        className='pointer-events-none absolute inset-0 z-0 h-full w-full bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
        aria-hidden='true'
      />
    </motion.div>
  )
}

export default MobileMenu
