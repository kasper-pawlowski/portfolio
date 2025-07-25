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
    <div className='relative flex h-35 w-35 items-center justify-center gap-3 rounded-full transition duration-300 ease-out hover:backdrop-blur-sm lg:h-60 lg:w-60 lg:gap-5'>
      <Link
        className={`translate-x-2 lg:translate-x-0 ${
          isAnimating ? 'pointer-events-none' : ''
        }`}
        href={`/project/${current === 1 ? totalProjects : current - 1}`}
        onClick={handlePrev}
      >
        <MoveLeft className='text-foreground-light' />
      </Link>

      <div className='font-display font-600 relative flex flex-col items-center justify-center gap-0 text-5xl lg:gap-3 lg:text-7xl'>
        <AnimateNumber className='pr-8'>{current}</AnimateNumber>
        <span className='pl-8'>{totalProjects}</span>
      </div>

      <Link
        className={`-translate-x-2 lg:-translate-x-0 ${
          isAnimating ? 'pointer-events-none' : ''
        }`}
        href={`/project/${current === totalProjects ? 1 : current + 1}`}
        onClick={handleNext}
      >
        <MoveRight className='text-foreground-light' />
      </Link>

      <div className='bg-foreground-light pointer-events-none absolute h-[80%] w-[1px] rotate-45 opacity-30'></div>
      <div className='border-foreground-light pointer-events-none absolute inset-0 rounded-full border-1 opacity-30'></div>
    </div>
  )
}

export default ProjectNavigation
