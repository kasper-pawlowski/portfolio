'use client'

import { MoveLeft, MoveRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ProjectNavigationProps {
  currentProjectId: number
  totalProjects: number
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  currentProjectId,
  totalProjects
}) => {
  return (
    <div className='relative mt-auto flex h-35 w-35 items-center justify-center gap-3 rounded-full transition duration-300 ease-out hover:backdrop-blur-sm lg:h-60 lg:w-60 lg:gap-5'>
      <Link
        className='translate-x-2 lg:translate-x-0'
        href={`/project/${currentProjectId === 1 ? totalProjects : currentProjectId - 1}`}
      >
        <MoveLeft className='text-foreground-light' />
      </Link>

      <div className='font-display font-600 relative flex flex-col items-center justify-center gap-0 text-5xl lg:gap-3 lg:text-7xl'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className='pr-8'
        >
          {currentProjectId}
        </motion.span>

        <span className='pl-8'>{totalProjects}</span>
      </div>

      <Link
        className='-translate-x-2 lg:-translate-x-0'
        href={`/project/${currentProjectId === totalProjects ? 1 : currentProjectId + 1}`}
      >
        <MoveRight className='text-foreground-light' />
      </Link>

      <div className='bg-foreground-light pointer-events-none absolute h-[80%] w-[1px] rotate-45 opacity-30'></div>
      <div className='border-foreground-light pointer-events-none absolute inset-0 rounded-full border-1 opacity-30'></div>
    </div>
  )
}

export default ProjectNavigation
