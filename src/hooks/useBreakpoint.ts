import { useEffect, useState } from 'react'

// Breakpointy zgodne z Tailwindem (globals.css)
const breakpoints: Record<'sm' | 'md' | 'lg' | 'xl' | '2xl', string> = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)'
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
