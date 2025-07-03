import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('Navigation')

  return (
    <section
      id='footer'
      className='text-background relative flex h-80 flex-col items-center py-20'
    >
      <div className='hidden flex-3/5 items-center justify-center lg:flex'>
        <nav className='flex items-center justify-center gap-10'>
          <a href='#about' className='font-goia text-background font-500'>
            {t('about')}
          </a>
          <span className='text-background text-2xl'>・</span>
          <a href='#projects' className='font-goia text-background font-500'>
            {t('projects')}
          </a>
          <span className='text-background text-2xl'>・</span>
          <a href='#contact' className='font-goia text-background font-500'>
            {t('contact')}
          </a>
        </nav>
      </div>
      <p className='mt-auto'>© 2025 Kasper Pawłowski</p>
      <div className='bg-foreground absolute inset-0 z-[-2]'></div>
    </section>
  )
}

export default Footer
