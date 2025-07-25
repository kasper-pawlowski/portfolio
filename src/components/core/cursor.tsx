'use client'
import React, { useEffect, useState, useRef } from 'react'
import {
  motion,
  SpringOptions,
  useMotionValue,
  useSpring,
  AnimatePresence,
  Transition,
  Variant
} from 'motion/react'
import { cn } from '@/lib/utils'

export type CursorProps = {
  children: React.ReactNode
  className?: string
  springConfig?: SpringOptions
  attachToParent?: boolean
  transition?: Transition
  variants?: {
    initial: Variant
    animate: Variant
    exit: Variant
  }
  onPositionChange?: (x: number, y: number) => void
}

export function Cursor({
  children,
  className,
  springConfig,
  attachToParent,
  variants,
  transition,
  onPositionChange
}: CursorProps) {
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(!attachToParent)
  const mousePositionRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      cursorX.set(window.innerWidth / 2)
      cursorY.set(window.innerHeight / 2)
    }
  }, [])

  // Funkcja do sprawdzania czy mysz jest nad rodzicem
  const checkMouseOverParent = () => {
    if (!attachToParent || !cursorRef.current) return

    const parent = cursorRef.current.parentElement
    if (!parent) return

    const rect = parent.getBoundingClientRect()
    const { x, y } = mousePositionRef.current

    const isOver =
      x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom

    if (isOver !== isVisible) {
      setIsVisible(isOver)
      parent.style.cursor = isOver ? 'none' : 'auto'
    }
  }

  useEffect(() => {
    if (!attachToParent) {
      document.body.style.cursor = 'none'
    } else {
      document.body.style.cursor = 'auto'
    }

    const updatePosition = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY }
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      onPositionChange?.(e.clientX, e.clientY)

      // Sprawdź czy mysz jest nad rodzicem przy każdym ruchu
      if (attachToParent) {
        checkMouseOverParent()
      }
    }

    const handleScroll = () => {
      // Sprawdź pozycję myszy po scrollowaniu
      if (attachToParent) {
        checkMouseOverParent()
      }
    }

    document.addEventListener('mousemove', updatePosition)
    document.addEventListener('scroll', handleScroll, true) // true dla capture phase
    window.addEventListener('resize', checkMouseOverParent)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('scroll', handleScroll, true)
      window.removeEventListener('resize', checkMouseOverParent)
    }
  }, [cursorX, cursorY, onPositionChange, attachToParent, isVisible])

  const cursorXSpring = useSpring(cursorX, springConfig || { duration: 0 })
  const cursorYSpring = useSpring(cursorY, springConfig || { duration: 0 })

  useEffect(() => {
    if (attachToParent && cursorRef.current) {
      const parent = cursorRef.current.parentElement
      if (parent) {
        const handleMouseEnter = () => {
          setIsVisible(true)
          parent.style.cursor = 'none'
        }

        const handleMouseLeave = () => {
          setIsVisible(false)
          parent.style.cursor = 'auto'
        }

        parent.addEventListener('mouseenter', handleMouseEnter)
        parent.addEventListener('mouseleave', handleMouseLeave)

        return () => {
          parent.removeEventListener('mouseenter', handleMouseEnter)
          parent.removeEventListener('mouseleave', handleMouseLeave)
        }
      }
    }
  }, [attachToParent])

  return (
    <motion.div
      ref={cursorRef}
      className={cn('pointer-events-none fixed top-0 left-0 z-50', className)}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%'
      }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants}
            transition={transition}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
