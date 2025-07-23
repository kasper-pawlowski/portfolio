import ProjectClient from './ProjectClient'
import projects from '@/data/projects.json'
import { getTranslations } from 'next-intl/server'

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

  return <ProjectClient project={project} translations={translations} />
}
