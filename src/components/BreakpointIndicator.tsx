'use client'

import { useEffect, useState } from 'react'

const breakpoints = {
  sm: 1024,
  md: 1024,
  lg: 1024,
  xl: 1280,
  '2xl': 1520
}

const getBreakpoint = (width: number) => {
  if (width >= breakpoints['2xl']) return '2xl'
  if (width >= breakpoints.xl) return 'xl'
  if (width >= breakpoints.lg) return 'lg'
  if (width >= breakpoints.md) return 'md'
  if (width >= breakpoints.sm) return 'sm'
  return 'xs'
}

const BreakpointIndicator = () => {
  const [breakpoint, setBreakpoint] = useState(() =>
    typeof window !== 'undefined' ? getBreakpoint(window.innerWidth) : 'unknown'
  )
  const [width, setWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 0
  )
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth))
      setWidth(window.innerWidth)
    }

    handleResize() // initial set
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className='fixed right-4 bottom-4 z-[9999] rounded bg-black/80 px-3 py-1 font-mono text-xs text-white backdrop-blur'>
      {breakpoint} ({width}px)
    </div>
  )
}

export default BreakpointIndicator
