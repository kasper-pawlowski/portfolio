import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

type Project = {
  nameKey: string
  images: string[]
  liveLink: string
  githubLink: string
  accent: string
  id: number
}

type ProjectCardProps = {
  project: Project
}

export default async function ProjectCard({ project }: ProjectCardProps) {
  const t = await getTranslations('Projects')

  return (
    <div className='shadow-elevated hover:shadow-elevated-hover relative z-2 flex flex-col items-center overflow-hidden rounded-2xl border backdrop-blur-sm duration-200 ease-in-out hover:translate-x-1 hover:translate-y-1'>
      <Link
        href={project.liveLink}
        className='border-foreground absolute top-0 right-0 z-10 flex items-center justify-center gap-1 rounded-bl-2xl border-b-2 border-l-2 bg-neutral-50/20 p-3 backdrop-blur-xs'
      >
        <span className='font-500 text-xs'>Live</span>
        <ArrowUpRight size={14} strokeWidth={2} className='' />
      </Link>
      <div className='relative aspect-video h-auto w-full'>
        <Image
          src={project.images[0]}
          alt={project.nameKey}
          fill
          className='object-contain'
        />
      </div>

      <div className='border-foreground flex w-full items-center justify-between gap-3 border-t-4 px-3 py-3'>
        <p className='font-display font-800 overflow-hidden text-3xl overflow-ellipsis whitespace-nowrap'>
          {project.nameKey}
        </p>
        <Link
          href={`/project/${project.id}`}
          className='border-foreground flex items-center justify-center rounded-full border-2 px-3 py-1'
        >
          <span className='font-500'>{t('see_more')}</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
