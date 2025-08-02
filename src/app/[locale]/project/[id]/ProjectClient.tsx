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
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { MeshGradient } from '@blur-ui/mesh-gradient'
import { useGradientColors } from '@/hooks/useGradientColors'

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
  accent: string
  color_1: string
  color_2: string
  color_3: string
  color_4: string
  color_1_dark: string
  color_2_dark: string
  color_3_dark: string
  color_4_dark: string
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
  const isLgUp = useBreakpoint('lg')
  const isQhdUp = useBreakpoint('qhd')
  const colors = useGradientColors(project)

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
        staggerChildren: 0.05, // opóźnienie między dziećmi
        when: 'beforeChildren' // kontener animuje się najpierw
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 }
  }

  const titleParts = project.nameKey.split(/ |\u200b/)

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimating ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='absolute inset-0 -z-2 h-full w-screen'
      >
        <MeshGradient
          className='h-full w-full'
          animationDuration={500}
          opacity={0.3}
          seed={0}
          darken={false}
          colors={colors}
        />
      </motion.div>
      <motion.div
        animate={{ opacity: isAnimating ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        id='project'
        className='project-padding qhd:gap-20 relative container flex h-dvh w-full flex-col pb-10 lg:flex-row lg:gap-10 lg:pb-20'
      >
        {isLgUp ? (
          <>
            <motion.div className='qhd:gap-15 flex h-full min-w-0 flex-1 basis-1/4 flex-col gap-10'>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut'
                }}
                className='font-700 font-display qhd:text-8xl text-7xl break-words'
              >
                {titleParts[0]}
                <br />
                {titleParts.slice(1).join(' ')}
              </motion.h1>

              <motion.p
                ref={descriptionRef}
                id='description'
                className='font-400 text-foreground-light qhd:text-xl text-base'
              >
                {translations.projectDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut'
                }}
                className='flex gap-3'
              >
                {project.liveLink !== '' && (
                  <Link
                    href={project.liveLink}
                    target='_blank'
                    className='text-background border-foreground bg-foreground hover:text-background group qhd:text-2xl flex items-center justify-center gap-2 rounded-2xl border-1 px-5 py-2 text-base duration-300 ease-in-out hover:rounded-3xl active:translate-y-1'
                  >
                    <span>Live</span>
                    <ArrowUpRight
                      size={isQhdUp ? 24 : 16}
                      className='duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1'
                    />
                  </Link>
                )}
                {project.githubLink !== '' && (
                  <Link
                    href={project.githubLink}
                    target='_blank'
                    className='border-foreground qhd:text-2xl flex items-center justify-center gap-2 rounded-2xl border-1 px-5 py-2 text-base backdrop-blur-sm duration-300 ease-in-out hover:rounded-3xl active:translate-y-1'
                  >
                    <span>Github</span>
                    <GithubLogo className='github-logo qhd:h-6 qhd:w-6 h-4 w-4' />
                  </Link>
                )}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut'
              }}
              className='flex basis-2/4'
            >
              <Carousel projectId={projectId} />
            </motion.div>
            <div className='flex h-full min-w-0 flex-1 basis-1/4 flex-col items-end gap-8'>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut'
                }}
                className='font-500 text-foreground qhd:text-xl text-base'
              >
                {translations.technologies}:
              </motion.p>
              <motion.div
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                className='font-400 text-foreground border-foreground-light qhd:text-xl flex w-[70%] flex-col flex-wrap justify-end gap-2 border-r-1 pr-5 text-end text-base'
              >
                {project.technologies.map(technology => (
                  <motion.span
                    key={technology}
                    variants={childVariants}
                    className='duration-200 ease-in-out active:translate-y-1'
                  >
                    {technology}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </>
        ) : (
          <>
            <div className='flex items-center gap-5'>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut'
                }}
                className='font-700 font-display text-5xl break-words'
              >
                {titleParts[0]}
                <br />
                {titleParts.slice(1).join(' ')}
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut'
              }}
              className='mt-10 flex gap-3'
            >
              {project.liveLink !== '' && (
                <Link
                  href={project.liveLink}
                  target='_blank'
                  className='text-background border-foreground bg-foreground hover:text-background group flex items-center justify-center gap-2 rounded-4xl border-1 px-4 py-2 text-base duration-300 ease-in-out hover:rounded-none active:rounded-2xl'
                >
                  <span>Live</span>
                  <ArrowUpRight
                    size={16}
                    className='duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1'
                  />
                </Link>
              )}
              {project.githubLink !== '' && (
                <Link
                  href={project.githubLink}
                  target='_blank'
                  className='border-foreground flex items-center justify-center gap-2 rounded-4xl border-1 px-4 py-2 text-base backdrop-blur-sm duration-300 ease-in-out hover:rounded-none active:rounded-2xl'
                >
                  <span>Github</span>
                  <GithubLogo className='github-logo h-4 w-4' />
                </Link>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut'
              }}
              className='mt-10 block'
            >
              <Carousel projectId={projectId} />
            </motion.div>

            <motion.p
              ref={descriptionRef}
              id='description'
              className='font-400 text-foreground mt-10 text-base leading-4.5'
            >
              {translations.projectDescription}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut'
              }}
              className='font-400 text-foreground/80 mt-10 text-base'
            >
              {translations.technologies}:
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              className='font-400 text-foreground/80 mt-2 flex flex-wrap gap-2 text-sm leading-2.5'
            >
              {project.technologies.map(technology => (
                <motion.span
                  key={technology}
                  variants={childVariants}
                  className='duration-200 ease-in-out'
                >
                  {technology}
                </motion.span>
              ))}
            </motion.div>
          </>
        )}
      </motion.div>
    </>
  )
}

{
  /* <div className='h-screen w-screen'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='mt-3 mb-5 block lg:hidden'
          >
            <Carousel projectId={projectId} />
          </motion.div>
          <div className='flex flex-4/10 flex-col gap-2 lg:hidden'>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className='font-500 font-display text-foreground-light'
            >
              {translations.technologies}
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
                  {index < project.technologies.length - 1 && <span> / </span>}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div> */
}
