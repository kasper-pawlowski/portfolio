'use client'

import Carousel from '@/components/ui/Carousel'
import { ArrowUpRight, MoveLeft } from 'lucide-react'
import Link from 'next/link'
import GithubLogo from '../../../../../public/icons/github.svg'
import ProjectNavigation from '@/components/ui/ProjectNavigation'
import { ProgressiveBlur } from '@/components/core/progressive-blur'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, type ReactNode } from 'react'
import VerticalCutReveal from '@/components/core/vertical-cut-reveal'

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

  return (
    <>
      <div
        id='project'
        className='project-padding relative container flex h-svh w-full flex-col pb-10 lg:flex-row lg:gap-5 lg:pb-20'
      >
        <div className='flex h-full min-w-0 flex-1 flex-col lg:basis-1/4 lg:gap-5'>
          <h1 className='font-900 font-display text-4xl break-words lg:text-6xl'>
            {project.nameKey}
          </h1>
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
              <p className='font-500 font-display text-foreground-light lg:mt-5 lg:text-lg'>
                / {translations.description}
              </p>
              <p className='font-400 text-foreground text-sm lg:text-base'>
                {translations.projectDescription}
              </p>
            </div>
            <div className='flex flex-4/10 flex-col gap-2 lg:hidden'>
              <p className='font-500 font-display text-foreground-light'>
                / {translations.technologies}
              </p>
              <div className='text-foreground font-400 flex flex-wrap items-center gap-x-2 text-sm'>
                {project.technologies.map((technology, index) => (
                  <div key={technology}>
                    <span>{technology}</span>
                    {index < project.technologies.length - 1 && (
                      <span> / </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.2 }}
            className='mt-5 flex gap-3'
          >
            {project.liveLink !== '' && (
              <Link
                href={project.liveLink}
                className='border-foreground flex items-center justify-center gap-2 rounded-full border-1 px-3 py-1'
              >
                <span>Live</span>
                <ArrowUpRight size={16} />
              </Link>
            )}
            {project.githubLink !== '' && (
              <Link
                href={project.githubLink}
                className='border-foreground flex items-center justify-center gap-2 rounded-full border-1 px-3 py-1'
              >
                <span>Github</span>
                <GithubLogo className='github-logo h-4 w-4' />
              </Link>
            )}
          </motion.div>
          <Link
            href='/#projects'
            className='font-display text-foreground mt-auto hidden w-min items-center justify-center gap-2 rounded-full px-6 py-2 text-xl lg:flex'
          >
            <MoveLeft strokeWidth={1} />
            <p>{translations.back_button}</p>
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='hidden lg:block'
        >
          <Carousel projectId={projectId} />
        </motion.div>
        <div className='hidden h-full min-w-0 flex-1 flex-col items-end gap-2 lg:flex lg:basis-1/4'>
          <p className='font-500 font-display text-foreground-light lg:text-lg'>
            / {translations.technologies}
          </p>
          <div className='text-foreground font-400 flex w-[50%] flex-wrap justify-end gap-x-2 text-end text-sm lg:text-base'>
            {project.technologies.map((technology, index) => (
              <div key={technology}>
                <span>{technology}</span>
                {index < project.technologies.length - 1 && <span> / </span>}
              </div>
            ))}
          </div>
          <ProjectNavigation currentProjectId={projectId} totalProjects={8} />
        </div>
        <div className='absolute bottom-6 z-1 container flex justify-between lg:hidden'>
          <Link
            href='/#projects'
            className='font-display text-foreground mt-auto flex w-min items-center justify-center gap-2 rounded-full px-6 py-2 text-xl'
          >
            <MoveLeft strokeWidth={1} />
            <p>{translations.back_button}</p>
          </Link>
          <div className='flex items-end justify-end'>
            <ProjectNavigation currentProjectId={projectId} totalProjects={8} />
          </div>
        </div>
        <ProgressiveBlur
          className='pointer-events-none fixed bottom-0 left-0 z-0 h-[200px] w-screen'
          direction='bottom'
        />
        {/* <div
          className='hero-noise pointer-events-none absolute top-0 left-0 -z-1 h-full w-full bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
          aria-hidden='true'
        /> */}
      </div>
    </>
  )
}
