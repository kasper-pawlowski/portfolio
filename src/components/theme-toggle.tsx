'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
// import SunIcon from '../../public/icons/moon.svg'
import SunIcon from '../../public/icons/sun.svg'

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className='ce flex'
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
    >
      {resolvedTheme === 'dark' ? (
        <Image src='/icons/moon.svg' width={30} height={30} alt='Moon Icon' />
      ) : (
        <Image src='/icons/sun.svg' width={30} height={30} alt='Sun Icon' />
        // <SunIcon width={30} height={46} alt='Sun Icon' />
      )}

      <span className='sr-only'>Toggle theme</span>
    </button>
  )
}
export default ThemeToggle
