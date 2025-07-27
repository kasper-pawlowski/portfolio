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
      <div className='absolute inset-x-0 bottom-5 container flex justify-between lg:bottom-10'>
        <Link
          href='/#projects'
          className='font-display group text-foreground mt-auto flex w-min items-center justify-center gap-2 rounded-full py-2 text-xl duration-200 ease-in-out active:-translate-x-1'
        >
          <MoveLeft strokeWidth={1} />
          <p>{translations.back_button}</p>
        </Link>
        <ProjectNavigation currentProjectId={projectId} totalProjects={8} />
      </div>
    </AnimationProvider>
  )
}
