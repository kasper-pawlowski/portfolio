'use client'

import { useEffect, useState } from 'react'
import Loading from '@/app/[locale]/Loading'

const GlobalLoader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Symulacja czasu ładowania strony
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000) // 3 sekundy

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return <Loading />
}

export default GlobalLoader
