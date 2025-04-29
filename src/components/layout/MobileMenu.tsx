import Image from 'next/image'
import LanguageToggle from '../language-toggle'
import SoundToggle from '../sound-toggle'
import ThemeToggle from '../theme-toggle'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const t = useTranslations('Navigation')
  const { resolvedTheme } = useTheme()

  return (
    <div className='bg-beige text-foreground fixed top-0 z-[-1] flex h-screen w-screen flex-col items-center justify-center gap-10'>
      {/* <button onClick={onClose} className='absolute top-6 right-6'>
        {resolvedTheme === 'dark' ? (
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
        )}
      </button>
      <a onClick={onClose} href='#about' className='text-2xl'>
        {t('about')}
      </a>
      <a onClick={onClose} href='#projects' className='text-2xl'>
        {t('projects')}
      </a>
      <a onClick={onClose} href='#contact' className='text-2xl'>
        {t('contact')}
      </a>
      <div className='flex gap-6'>
        <SoundToggle />
        <ThemeToggle />
        <LanguageToggle />
      </div> */}
    </div>
  )
}

export default MobileMenu
