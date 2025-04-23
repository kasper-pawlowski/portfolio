'use client'

import { useEffect, useRef } from 'react'
import ThemeToggle from '../theme-toggle'
import Image from 'next/image'
import SoundToggle from '../sound-toggle'
import { useTheme } from 'next-themes'

const Header = () => {
  const { resolvedTheme } = useTheme()
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight
      document.documentElement.style.setProperty(
        '--header-height',
        `${height}px`
      )
    }
  }, [])

  return (
    <header ref={headerRef} className='fixed top-0 left-0 w-screen'>
      <div className='text-grey container mx-auto flex w-full items-center justify-between py-8 text-2xl font-bold'>
        <div className='flex grow items-center justify-start'>
          <a href='/'>
            {resolvedTheme === 'dark' ? (
              <Image
                src='/icons/logo-light.svg'
                width={30}
                height={30}
                alt='Logo'
              />
            ) : (
              <Image src='/icons/logo.svg' width={30} height={30} alt='Logo' />
            )}
          </a>
        </div>
        <div className='flex grow-2 items-center justify-center'>
          <nav className='flex items-center justify-center gap-10'>
            <a href='#about' className='font-goia'>
              O mnie
            </a>
            <span className='text-2xl text-[#30303060]'>・</span>
            <a href='#projects' className='font-goia'>
              Projekty
            </a>
            <span className='text-2xl text-[#30303060]'>・</span>
            <a href='#contact' className='font-goia'>
              Kontakt
            </a>
          </nav>
        </div>
        <div className='flex grow items-center justify-end gap-8'>
          <SoundToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
