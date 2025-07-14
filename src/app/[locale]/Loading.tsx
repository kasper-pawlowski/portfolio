'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Loading = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1 // symulacja ładowania (co 16ms -> 100% w ~1.6 sekundy)
      })
    }, 16)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='fixed z-20 mx-auto flex h-screen w-screen flex-col bg-[#303030]'></div>
  )
}

export default Loading
