'use client'

import Carousel from '@/components/ui/Carousel'
import { ArrowUpRight, MoveLeft } from 'lucide-react'
import Link from 'next/link'
import GithubLogo from '../../../../../public/icons/github.svg'
import ProjectNavigation from '@/components/ui/ProjectNavigation'
import { ProgressiveBlur } from '@/components/core/progressive-blur'
import { animate, AnimatePresence, delay, motion, stagger } from 'framer-motion'
import { useEffect, useRef, type ReactNode } from 'react'
import { splitText } from 'motion-plus'
import { useAnimation } from '@/context/AnimationContext'

// Typy zgodne z page.tsx
interface Project {
  id: number
  nameKey: string
  descriptionKey: string
  videoUrl: string
  images: string[]
  githubLink: string
  liveLink: string
  technologies: string[]
  slug: string
}

interface ProjectClientProps {
  project: Project
  translations: {
    description: string
    technologies: string
    back_button: string
    notfound: string
    projectDescription: string
  }
}

export default function ProjectClient({
  project,
  translations
}: ProjectClientProps) {
  const projectId = project.id
  const descriptionRef = useRef<HTMLDivElement>(null)
  const { isAnimating } = useAnimation()

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!descriptionRef.current) return

      descriptionRef.current.style.visibility = 'visible'

      const { lines } = splitText('#description')

      animate(
        lines,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: 'spring',
          duration: 0.5,
          bounce: 0,
          delay: stagger(0.05)
        }
      )
    })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04, // opóźnienie między dziećmi
        when: 'beforeChildren' // kontener animuje się najpierw
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      <motion.div
        animate={{ opacity: isAnimating ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        id='project'
        className='project-padding relative container flex h-svh w-full flex-col pb-10 lg:flex-row lg:gap-5 lg:pb-20'
      >
        <motion.div className='flex h-full min-w-0 flex-1 flex-col lg:basis-1/4 lg:gap-5'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='font-900 font-display text-4xl break-words lg:text-6xl'
          >
            {project.nameKey}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='mt-3 mb-5 block lg:hidden'
          >
            <Carousel projectId={projectId} />
          </motion.div>
          <div className='flex w-full flex-col gap-6'>
            <div className='flex flex-6/10 flex-col gap-2'>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='font-500 font-display text-foreground-light lg:mt-5 lg:text-lg'
              >
                / {translations.description}
              </motion.p>
              <motion.p
                ref={descriptionRef}
                id='description'
                className='font-400 text-foreground text-sm lg:text-base'
              >
                {translations.projectDescription}
              </motion.p>
            </div>
            <div className='flex flex-4/10 flex-col gap-2 lg:hidden'>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='font-500 font-display text-foreground-light'
              >
                / {translations.technologies}
              </motion.p>
              <motion.div
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                className='text-foreground font-400 flex flex-wrap items-center gap-x-2 text-sm'
              >
                {project.technologies.map((technology, index) => (
                  <motion.div key={technology} variants={childVariants}>
                    <span>{technology}</span>
                    {index < project.technologies.length - 1 && (
                      <span> / </span>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='mt-5 flex gap-3'
          >
            {project.liveLink !== '' && (
              <Link
                href={project.liveLink}
                className='border-foreground hover:bg-foreground hover:text-background flex items-center justify-center gap-2 rounded-full border-1 px-3 py-1 duration-200 ease-in-out active:translate-y-1'
              >
                <span>Live</span>

                <ArrowUpRight size={16} />
              </Link>
            )}
            {project.githubLink !== '' && (
              <Link
                href={project.githubLink}
                className='border-foreground hover:bg-foreground hover:text-background flex items-center justify-center gap-2 rounded-full border-1 px-3 py-1 duration-200 ease-in-out active:translate-y-1'
              >
                <span>Github</span>
                <GithubLogo className='github-logo h-4 w-4' />
              </Link>
            )}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='hidden lg:block'
        >
          <Carousel projectId={projectId} />
        </motion.div>
        <div className='hidden h-full min-w-0 flex-1 flex-col items-end gap-2 lg:flex lg:basis-1/4'>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='font-500 font-display text-foreground-light lg:text-lg'
          >
            / {translations.technologies}
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='text-foreground font-400 flex w-[50%] flex-wrap justify-end gap-x-2 text-end text-sm lg:text-base'
          >
            {project.technologies.map((technology, index) => (
              <motion.div key={technology} variants={childVariants}>
                <span>{technology}</span>
                {index < project.technologies.length - 1 && <span> / </span>}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <ProgressiveBlur
          className='pointer-events-none fixed bottom-0 left-0 z-0 h-[200px] w-screen'
          direction='bottom'
        />
      </motion.div>
    </>
  )
}
