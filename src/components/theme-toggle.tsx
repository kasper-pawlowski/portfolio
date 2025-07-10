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
      className={`${textColorClass} transition-colors duration-300`}
    >
      {resolvedTheme === 'dark' ? <Moon size={30} /> : <Sun size={30} />}
    </button>
  )
}
export default ThemeToggle
