import ProjectNavigation from '@/components/ui/ProjectNavigation'
import ProjectClient from './ProjectClient'
import projects from '@/data/projects.json'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { MoveLeft } from 'lucide-react'
import { AnimationProvider } from '@/context/AnimationContext'

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
}

type ProjectPageProps = {
  params: Promise<{
    locale: string
    id: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project: Project) => ({
    id: project.id.toString()
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params
  const projectId = parseInt(resolvedParams.id)
  const t = await getTranslations('Projects')
  const project = (projects as Project[]).find(p => p.id === projectId)

  if (!project) {
    return <div>{t('notfound')}</div>
  }

  // Pobierz wszystkie potrzebne tłumaczenia jako stringi
  const translations = {
    description: t('description'),
    technologies: t('technologies'),
    back_button: t('back_button'),
    notfound: t('notfound'),
    projectDescription: t(`${project.slug}.description`)
  }

  return (
    <AnimationProvider>
      <div
        className='hero-noise pointer-events-none absolute top-0 left-0 -z-1 h-full w-full bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
        aria-hidden='true'
      />

      <ProjectClient project={project} translations={translations} />
      <div className='absolute inset-x-0 bottom-20 container flex justify-between'>
        <Link
          href='/#projects'
          className='text-foreground group qhd:text-2xl mt-auto flex items-center justify-center gap-2 rounded-4xl border-1 border-neutral-500/50 px-5 py-2 text-base backdrop-blur-sm duration-300 ease-in-out active:translate-y-1'
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
