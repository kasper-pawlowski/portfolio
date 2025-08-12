'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { MoveLeft, MoveRight } from 'lucide-react'
import { AnimateNumber } from 'motion-plus-react'
import { useAnimation } from '@/context/AnimationContext'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import useSound from '@/hooks/useSound'
import { Link } from '@/i18n/navigation'

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
  const isLgUp = useBreakpoint('lg')
  const { soundHover, soundClick } = useSound()

  useEffect(() => {
    setCurrent(currentProjectId)
  }, [currentProjectId])

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault()
    const newValue = current === 1 ? totalProjects : current - 1
    setCurrent(newValue)
    setIsAnimating(true)
    soundClick()

    setTimeout(() => {
      router.push(`/projects/${newValue}`)
    }, 300)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault()
    const newValue = current === totalProjects ? 1 : current + 1
    setCurrent(newValue)
    setIsAnimating(true)
    soundClick()

    setTimeout(() => {
      router.push(`/projects/${newValue}`)
    }, 300)
  }

  return (
    <>
      {isLgUp ? (
        <div className='qhd:h-80 qhd:w-80 relative flex h-60 w-60 items-center justify-center gap-5 rounded-full backdrop-blur-sm transition duration-300 ease-out'>
          <Link
            className={`group qhd:-translate-x-2 qhd:hover:-translate-x-3 relative z-1 translate-x-1 duration-200 ease-in-out before:absolute before:-inset-2 before:content-[''] hover:-translate-x-0 active:scale-80 ${
              isAnimating ? 'pointer-events-none' : ''
            }`}
            href={`/projects/${current === 1 ? totalProjects : current - 1}`}
            onClick={handlePrev}
            onMouseEnter={soundHover}
          >
            <MoveLeft
              className='text-foreground-light'
              size={40}
              strokeWidth={1}
            />
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
            className={`group qhd:translate-x-2 qhd:hover:translate-x-3 -translate-x-1 duration-200 ease-in-out before:absolute before:-inset-2 before:content-[''] hover:translate-x-0 active:scale-80 ${
              isAnimating ? 'pointer-events-none' : ''
            }`}
            href={`/projects/${current === totalProjects ? 1 : current + 1}`}
            onClick={handleNext}
            onMouseEnter={soundHover}
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
      ) : (
        <>
          <div className='flex h-7 w-26 items-center justify-center gap-1'>
            <Link
              className={`border-foreground-light flex h-full w-full items-center justify-center border-1 ${
                isAnimating ? 'pointer-events-none' : ''
              }`}
              href={`/projects/${current === 1 ? totalProjects : current - 1}`}
              onClick={handlePrev}
            >
              <MoveLeft
                className='text-foreground-light transition duration-300 ease-out active:-translate-x-1'
                size={14}
                strokeWidth={1}
              />
            </Link>
            <div className='border-foreground-light flex h-full w-full items-center justify-center border-1'>
              <AnimateNumber
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className=''
              >
                {current}
              </AnimateNumber>
            </div>
            <Link
              className={`border-foreground-light flex h-full w-full items-center justify-center border-1 ${
                isAnimating ? 'pointer-events-none' : ''
              }`}
              href={`/projects/${current === totalProjects ? 1 : current + 1}`}
              onClick={handleNext}
            >
              <MoveRight
                className='text-foreground-light transition duration-300 ease-out active:translate-x-1'
                size={14}
                strokeWidth={1}
              />
            </Link>
          </div>
        </>
      )}
    </>
  )
}

export default ProjectNavigation
