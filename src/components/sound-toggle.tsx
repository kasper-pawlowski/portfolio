'use client'

import { useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const SoundToggle = () => {
  const { resolvedTheme } = useTheme()
  const [soundEnabled, setSoundEnabled] = useState(true)

  return (
    <button
      className='flex'
      onClick={() => {
        setSoundEnabled(e => !e)
      }}
    >
      {soundEnabled ? (
        resolvedTheme === 'dark' ? (
          <Image src='/icons/sound-light.svg' width={30} height={30} alt='' />
        ) : (
          <Image src='/icons/sound-dark.svg' width={30} height={30} alt='' />
        )
      ) : resolvedTheme === 'dark' ? (
        <Image src='/icons/sound-off-light.svg' width={30} height={30} alt='' />
      ) : (
        <Image src='/icons/sound-off-dark.svg' width={30} height={30} alt='' />
      )}

      <span className='sr-only'>Toggle theme</span>
    </button>
  )
}

export default SoundToggle
