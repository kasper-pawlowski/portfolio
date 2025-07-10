'use client'
import { cn } from '@/lib/utils'
import { HTMLMotionProps, motion } from 'motion/react'

export const GRADIENT_ANGLES = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270
}

export type ProgressiveBlurProps = {
  direction?: keyof typeof GRADIENT_ANGLES
  blurLayers?: number
  className?: string
  blurIntensity?: number
} & HTMLMotionProps<'div'>

export function ProgressiveBlur({
  direction = 'bottom',
  blurLayers = 8,
  className,
  blurIntensity = 0.5,
  ...props
}: ProgressiveBlurProps) {
  const layers = Math.max(blurLayers, 2)

  // Hardcoded patterns z twojego custom blur dla płynności
  const blurPatterns: Array<{
    start: number
    fadeIn: number
    fadeOut: number | null
    end: number | null
    blur: number
  }> = [
    { start: 0, fadeIn: 12.5, fadeOut: 25, end: 37.5, blur: 0.5 },
    { start: 12.5, fadeIn: 25, fadeOut: 37.5, end: 50, blur: 0.5625 },
    { start: 25, fadeIn: 37.5, fadeOut: 50, end: 62.5, blur: 1.125 },
    { start: 37.5, fadeIn: 50, fadeOut: 62.5, end: 75, blur: 2.25 },
    { start: 50, fadeIn: 62.5, fadeOut: 75, end: 87.5, blur: 4.5 },
    { start: 62.5, fadeIn: 75, fadeOut: 87.5, end: 100, blur: 9 },
    { start: 75, fadeIn: 87.5, fadeOut: 100, end: null, blur: 18 },
    { start: 87.5, fadeIn: 100, fadeOut: null, end: null, blur: 36 }
  ]

  return (
    <div className={cn('relative', className)}>
      {Array.from({ length: Math.min(layers, 8) }).map((_, index) => {
        const angle = GRADIENT_ANGLES[direction]
        const pattern = blurPatterns[index]

        if (!pattern) return null

        // Budowanie gradientu na podstawie wzorca z twojego custom blur
        let gradientStops: string[] = []

        if (pattern.end === null) {
          // Ostatnie warstwy - tylko fade in
          gradientStops = [
            `rgba(0, 0, 0, 0) ${pattern.start}%`,
            `rgb(0, 0, 0) ${pattern.fadeIn}%`
          ]
        } else if (pattern.fadeOut === null) {
          // Przedostatnia warstwa
          gradientStops = [
            `rgba(0, 0, 0, 0) ${pattern.start}%`,
            `rgb(0, 0, 0) ${pattern.fadeIn}%`,
            `rgb(0, 0, 0) ${pattern.fadeOut}%`
          ]
        } else {
          // Standardowe warstwy
          gradientStops = [
            `rgba(0, 0, 0, 0) ${pattern.start}%`,
            `rgb(0, 0, 0) ${pattern.fadeIn}%`,
            `rgb(0, 0, 0) ${pattern.fadeOut}%`,
            `rgba(0, 0, 0, 0) ${pattern.end}%`
          ]
        }

        const gradient = `linear-gradient(${angle}deg, ${gradientStops.join(', ')})`

        // Używamy dokładnych wartości blur z twojego custom blur
        const blurValue = pattern.blur * (blurIntensity / 0.5) // Skalujemy względem domyślnej wartości

        return (
          <motion.div
            key={index}
            className='pointer-events-none absolute inset-0'
            style={{
              maskImage: gradient,
              WebkitMaskImage: gradient,
              backdropFilter: `blur(${blurValue}px)`,
              WebkitBackdropFilter: `blur(${blurValue}px)`,
              zIndex: index + 1
            }}
            {...props}
          />
        )
      })}
    </div>
  )
}
