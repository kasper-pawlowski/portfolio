import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { MoveLeft } from 'lucide-react'
import ProjectNavigation from '@/components/ui/ProjectNavigation'
import projects from '@/data/projects.json'
import { AnimationProvider } from '@/context/AnimationContext'
import ProjectClient from './ProjectClient'
import { routing } from '@/i18n/routing'

type Project = {
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

type ProjectPageProps = {
  params: Promise<{
    locale: string
    id: string
  }>
}

export async function generateStaticParams() {
  return routing.locales.flatMap(locale =>
    (projects as Project[]).map(project => ({
      locale,
      id: project.id.toString()
    }))
  )
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params
  const projectId = parseInt(resolvedParams.id)
  const t = await getTranslations('Projects')
  const project = (projects as Project[]).find(p => p.id === projectId)

  if (!project) {
    notFound()
  }

  const translations = {
    description: t('description'),
    technologies: t('technologies'),
    back_button: t('back_button'),
    projectDescription: t(`${project.slug}.description`)
  }

  return (
    <AnimationProvider>
      <div
        className='hero-noise pointer-events-none absolute top-0 left-0 -z-1 h-full w-full bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
        aria-hidden='true'
      />

      <ProjectClient project={project} translations={translations} />
      <div className='project-padding absolute top-0 container flex justify-end lg:inset-x-0 lg:top-auto lg:bottom-20 lg:justify-between lg:pt-0'>
        <Link
          href='/#projects'
          className='text-foreground group qhd:text-2xl mt-auto hidden items-center justify-center gap-2 rounded-4xl border-1 border-neutral-500/50 px-5 py-2 text-base backdrop-blur-sm duration-300 ease-in-out active:translate-y-1 lg:flex'
        >
          <MoveLeft
            strokeWidth={1}
            className='duration-300 ease-in-out group-hover:-translate-x-1'
          />
          <p>{translations.back_button}</p>
        </Link>
        <ProjectNavigation currentProjectId={projectId} totalProjects={8} />
      </div>
    </AnimationProvider>
  )
}
