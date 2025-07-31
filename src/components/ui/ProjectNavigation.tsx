'use client'

import { MoveLeft, MoveRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AnimateNumber } from 'motion-plus-react'
import { useState, useEffect } from 'react'
import { useAnimation } from '@/context/AnimationContext'

interface ProjectNavigationProps {
  currentProjectId: number
  totalProjects: number
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  currentProjectId,
  totalProjects
}) => {
  const router = useRouter()
  const [current, setCurrent] = useState(currentProjectId)
  const { isAnimating, setIsAnimating } = useAnimation()

  // Synchronizuj stan ze zmianami props
  useEffect(() => {
    setCurrent(currentProjectId)
  }, [currentProjectId])

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault()
    const newValue = current === 1 ? totalProjects : current - 1
    setCurrent(newValue)
    setIsAnimating(true)

    // Opóźnij nawigację o 300ms (czas trwania animacji)
    setTimeout(() => {
      router.push(`/project/${newValue}`)
    }, 300)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault()
    const newValue = current === totalProjects ? 1 : current + 1
    setCurrent(newValue)
    setIsAnimating(true)

    setTimeout(() => {
      router.push(`/project/${newValue}`)
    }, 300)
  }

  return (
    <div className='qhd:h-80 qhd:w-80 relative flex h-60 w-60 items-center justify-center gap-5 rounded-full backdrop-blur-sm transition duration-300 ease-out'>
      <Link
        className={`group qhd:-translate-x-2 qhd:hover:-translate-x-3 relative z-1 duration-200 ease-in-out before:absolute before:-inset-2 before:content-[''] active:scale-80 ${
          isAnimating ? 'pointer-events-none' : ''
        }`}
        href={`/project/${current === 1 ? totalProjects : current - 1}`}
        onClick={handlePrev}
      >
        <MoveLeft className='text-foreground-light' size={40} strokeWidth={1} />
      </Link>

      <div className='font-display font-600 qhd:text-8xl relative flex flex-col items-center justify-center text-7xl'>
        <AnimateNumber
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='mr-15'
        >
          {current}
        </AnimateNumber>
        <span className='ml-15 py-[7px]'>{totalProjects}</span>
      </div>

      <Link
        className={`group qhd:translate-x-2 qhd:hover:translate-x-3 duration-200 ease-in-out before:absolute before:-inset-2 before:content-[''] active:scale-80 ${
          isAnimating ? 'pointer-events-none' : ''
        }`}
        href={`/project/${current === totalProjects ? 1 : current + 1}`}
        onClick={handleNext}
      >
        <MoveRight
          className='text-foreground-light'
          size={40}
          strokeWidth={1}
        />
      </Link>

      <div className='bg-foreground-light pointer-events-none absolute h-[80%] w-[1px] rotate-45 opacity-30'></div>
      <div className='border-foreground-light pointer-events-none absolute inset-0 rounded-full border-1 opacity-30'></div>
    </div>
  )
}

export default ProjectNavigation
