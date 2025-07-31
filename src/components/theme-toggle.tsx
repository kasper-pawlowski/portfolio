import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

type ThemeToggleProps = {
  textColorClass?: string
}

const ThemeToggle = ({ textColorClass }: ThemeToggleProps) => {
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
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
      className={`${textColorClass} transition-colors duration-200`}
    >
      {resolvedTheme === 'dark' ? (
        <Moon className='qhd:h-8 qhd:w-8 h-6 w-6' />
      ) : (
        <Sun className='qhd:h-8 qhd:w-8 h-6 w-6' />
      )}
    </button>
  )
}
export default ThemeToggle
