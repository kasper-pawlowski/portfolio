import { useTheme } from 'next-themes'
import { useMemo } from 'react'

type GradientPalette = {
  color1: string
  color2: string
  color3: string
  color4: string
}

export function useGradientColors(project: any): GradientPalette {
  const { theme } = useTheme()

  return useMemo(() => {
    const isDark = theme === 'dark'

    return {
      color1: isDark ? project.color_1_dark : project.color_1,
      color2: isDark ? project.color_2_dark : project.color_2,
      color3: isDark ? project.color_3_dark : project.color_3,
      color4: isDark ? project.color_4_dark : project.color_4
    }
  }, [project, theme])
}
