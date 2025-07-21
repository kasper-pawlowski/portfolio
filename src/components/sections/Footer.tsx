import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('Navigation')

  return (
    <section id='footer' className='relative'>
      <div
        className='pointer-events-none absolute inset-0 z-1 bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
        aria-hidden='true'
      />
      <svg
        className='text-foreground absolute -top-20 z-0 h-20 w-full rotate-180'
        viewBox='0 0 1200 64'
        preserveAspectRatio='none'
      >
        <path
          d='M0,0 L1200,0 L1200,64 Q600,-10 0,64 Z'
          fill='var(--svg-accent-1)'
          className='hidden lg:block'
        />
        <path
          d='M0,0 L1200,0 L1200,34 Q600,10 0,34 Z'
          fill='var(--svg-accent-1)'
          className='block lg:hidden'
        />
        <path
          d='M0,0 L1200,0 L1200,56 Q600,-20 0,56 Z'
          fill='var(--svg-accent-2)'
          className='hidden lg:block'
        />
        <path
          d='M0,0 L1200,0 L1200,26 Q600,0 0,26 Z'
          fill='var(--svg-accent-2)'
          className='block lg:hidden'
        />
        <path
          d='M0,0 L1200,0 L1200,46 Q600,-30 0,46 Z'
          fill='currentColor'
          className='hidden lg:block'
        />
        <path
          d='M0,0 L1200,0 L1200,16 Q600,-10 0,16 Z'
          fill='currentColor'
          className='block lg:hidden'
        />
      </svg>
      <div className='text-background bg-foreground flex flex-col items-center gap-15 py-10'>
        <div className='flex-3/5 items-center justify-center'>
          <nav className='flex items-center justify-center gap-3'>
            <a href='#about' className='font-goia text-background font-500'>
              {t('about')}
            </a>
            <span className='text-background text-lg'>・</span>
            <a href='#projects' className='font-goia text-background font-500'>
              {t('projects')}
            </a>
            <span className='text-background text-lg'>・</span>
            <a href='#contact' className='font-goia text-background font-500'>
              {t('contact')}
            </a>
          </nav>
        </div>
        <p className='mt-auto'>© 2025 Kasper Pawłowski</p>
      </div>
    </section>
  )
}

export default Footer
