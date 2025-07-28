import { useEffect, useState } from 'react'

// Breakpointy zgodne z Tailwindem i globals.css (rem)
const breakpoints: Record<
  'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'fhd' | 'qhd',
  string
> = {
  sm: '(min-width: 0rem)',
  md: '(min-width: 48rem)', // 768px
  lg: '(min-width: 64rem)', // 1024px
  xl: '(min-width: 80rem)', // 1280px
  '2xl': '(min-width: 96rem)', // 1536px
  fhd: '(min-width: 120rem)', // 1920px
  qhd: '(min-width: 160rem)' // 2560px
}

// Zwraca true jeśli dany breakpoint jest aktywny
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
