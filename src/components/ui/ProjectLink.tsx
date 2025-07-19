import Link from 'next/link'
import React from 'react'
import projectsData from '@/data/projects.json'
import { ArrowUpRight } from 'lucide-react'
import GithubLogo from '../../../public/icons/github.svg'

type ProjectLinkProps = {
  id: number
}

const ProjectLink = ({ id }: ProjectLinkProps) => {
  return (
    <Link href={`/project/${id}`} className='z-5 h-full w-full'>
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
    </Link>
  )
}

export default ProjectLink
