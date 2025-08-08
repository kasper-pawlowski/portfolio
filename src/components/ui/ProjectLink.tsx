import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { MousePointer2, MousePointerClick } from 'lucide-react'
import { Cursor } from '@/components/core/cursor'
import ProjectInteractionSounds from '@/components/ProjectInteractionSounds'
import projectsData from '@/data/projects.json'

type ProjectLinkProps = {
  id: number
}

const ProjectLink = ({ id }: ProjectLinkProps) => {
  const t = useTranslations('Projects')

  return (
    <Link href={`/projects/${id}`} className='group relative z-5 h-full w-full'>
      <ProjectInteractionSounds />
      <video
        controls={false}
        autoPlay
        loop
        muted
        playsInline
        preload='none'
        className='z-5 h-full w-full object-cover duration-200 ease-in-out group-hover:scale-105'
      >
        <source src={projectsData[id - 1].videoUrl} type='video/webm' />
        {t('notsupported')}
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
            className='block h-6 w-6 group-active:hidden'
          />
          <MousePointerClick
            style={{ color: projectsData[id - 1].accent }}
            className='hidden h-6 w-6 group-active:block'
          />

          <div
            className='cursor-child absolute ml-4 rounded-lg border-1 border-neutral-200/20 px-3 py-1 text-neutral-50'
            style={{ backgroundColor: projectsData[id - 1].accent }}
          >
            <p className='font-display font-400 text-xl whitespace-nowrap'>
              {t('cursor_text')}
            </p>
          </div>
        </div>
      </Cursor>
    </Link>
  )
}

export default ProjectLink
