'use client'
import { ThemeProvider, useTheme } from 'next-themes'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      enableSystem
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

export default Providers
