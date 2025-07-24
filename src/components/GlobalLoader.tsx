'use client'

import { useEffect, useState } from 'react'
import Loading from '@/app/[locale]/Loading'
import { AnimatePresence } from 'framer-motion'

const GlobalLoader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Ustawiamy overflow na hidden gdy komponent się montuje
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden'
    }

    const timer = setTimeout(() => {
      setIsLoading(false)
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'unset'
      }
    }, 2000)

    return () => {
      clearTimeout(timer)
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'unset'
      }
    }
  }, [])

  return (
    <AnimatePresence mode='wait'>
      {isLoading && <Loading key='loader' />}
    </AnimatePresence>
  )
}

export default GlobalLoader
