import Link from 'next/link'
import React from 'react'
import projectsData from '@/data/projects.json'
import { Cursor } from '../core/cursor'
import { MousePointer2 } from 'lucide-react'

type ProjectLinkProps = {
  id: number
}

const ProjectLink = ({ id }: ProjectLinkProps) => {
  return (
    <Link href={`/project/${id}`} className='relative z-5 h-full w-full'>
      <video
        controls={false}
        autoPlay
        loop
        muted
        playsInline
        preload='none'
        className='z-5 h-full w-full object-cover'
      >
        <source src={projectsData[id - 1].videoUrl} type='video/webm' />
        Twój browser nie obsługuje tagu wideo.
      </video>
      <Cursor
        attachToParent
        variants={{
          initial: { scale: 0.3, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.3, opacity: 0 }
        }}
        transition={{
          ease: 'easeInOut',
          duration: 0.15
        }}
        className='top-2 left-2'
      >
        <div className='cursor-parent relative'>
          <MousePointer2
            style={{ color: projectsData[id - 1].accent }}
            className='h-6 w-6'
          />
          <div
            className='cursor-child absolute ml-4 rounded-lg px-2 text-neutral-50'
            style={{ backgroundColor: projectsData[id - 1].accent }}
          >
            <span className='font-display font-500 text-2xl whitespace-nowrap'>
              {projectsData[id - 1].nameKey}
            </span>
          </div>
        </div>
      </Cursor>
    </Link>
  )
}

export default ProjectLink
