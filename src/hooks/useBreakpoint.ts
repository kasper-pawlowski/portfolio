import { useEffect, useState } from 'react'

const breakpoints: Record<
  'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'fhd' | 'qhd',
  string
> = {
  sm: '(min-width: 0rem)',
  md: '(min-width: 48rem)',
  lg: '(min-width: 64rem)',
  xl: '(min-width: 80rem)',
  '2xl': '(min-width: 96rem)',
  fhd: '(min-width: 120rem)',
  qhd: '(min-width: 160rem)'
}

export function useBreakpoint(bp: keyof typeof breakpoints) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const query = breakpoints[bp]
    if (!query) return
    const media = window.matchMedia(query)
    const handler = () => setMatches(media.matches)
    handler()
    media.addEventListener('change', handler)
    return () => media.removeEventListener('change', handler)
  }, [bp])

  return matches
}
