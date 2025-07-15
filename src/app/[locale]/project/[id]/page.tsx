import Carousel from '@/components/ui/Carousel'
import projects from '@/data/projects.json' // Bezpośredni import pliku JSON
import { ArrowRight, ArrowUpRight, MoveLeft, MoveRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import GithubLogo from '../../../../../public/icons/github.svg'
import Image from 'next/image'
import ProjectNavigation from '@/components/ui/ProjectNavigation'
import { ProgressiveBlur } from '@/components/core/progressive-blur'

type Project = {
  id: number
  nameKey: string
  descriptionKey: string
  videoUrl: string
  images: string[]
  githubLink: string
  liveLink: string
  technologies: string[]
}

type ProjectPageProps = {
  params: {
    locale: string
    id: string
  }
}

// Funkcja generująca statyczne ścieżki (dla static site generation - SSG)
// Jest to nadal potrzebne, aby Next.js wiedział, które strony wygenerować.
export async function generateStaticParams() {
  // `projects` jest już zaimportowane, więc nie musimy go pobierać asynchronicznie.
  return projects.map((project: Project) => ({
    id: project.id.toString() // ID musi być stringiem w parametrach
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const projectId = parseInt(params.id) // Parsujemy ID na liczbę
  const t = await getTranslations('Projects')

  // Znajdujemy projekt bezpośrednio z zaimportowanej tablicy
  const project = (projects as Project[]).find(p => p.id === projectId)

  if (!project) {
    return <div>Projekt nie znaleziony.</div>
  }

  const projectDescriptionKey = `project${project.id}.description`

  return (
    <>
      <div
        id='project'
        className='project-padding relative container flex h-svh w-full flex-col pb-10 lg:flex-row lg:gap-5 lg:pb-20'
      >
        <div className='flex h-full min-w-0 flex-1 flex-col gap-5 lg:basis-1/4'>
          <h1 className='font-900 font-display text-4xl break-words lg:text-6xl'>
            {project.nameKey}
          </h1>
          <div className='flex w-full gap-6'>
            <div className='flex flex-6/10 flex-col gap-2'>
              <p className='font-500 font-display text-foreground-light lg:mt-5 lg:text-lg'>
                / Description
              </p>
              <p className='font-400 text-foreground text-sm lg:text-base'>
                {t(projectDescriptionKey)}
              </p>
            </div>
            <div className='flex flex-4/10 flex-col gap-2 lg:hidden'>
              <p className='font-500 font-display text-foreground-light'>
                / Technologies
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
          <div className='mt-5 flex gap-3'>
            <Link
              href={project.liveLink}
              className='border-foreground flex items-center justify-center gap-2 rounded-full border-1 px-3 py-1'
            >
              <span>Live</span>
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href={project.githubLink}
              className='border-foreground flex items-center justify-center gap-2 rounded-full border-1 px-3 py-1'
            >
              <span>Github</span>
              <GithubLogo className='github-logo h-4 w-4' />
            </Link>
          </div>
          <Link
            href='/#projects'
            className='font-display text-foreground mt-auto hidden w-min items-center justify-center gap-2 rounded-full px-6 py-2 text-xl lg:flex'
          >
            <MoveLeft strokeWidth={1} />
            <p>powrót</p>
          </Link>
        </div>
        <Carousel projectId={projectId} />
        <div className='hidden h-full min-w-0 flex-1 flex-col items-end gap-2 lg:flex lg:basis-1/4'>
          <p className='font-500 font-display text-foreground-light lg:text-lg'>
            / Technologies
          </p>
          <div className='text-foreground font-400 flex w-[50%] flex-wrap justify-end gap-x-2 text-end text-sm lg:text-base'>
            {project.technologies.map((technology, index) => (
              <div key={technology}>
                <span>{technology}</span>
                {index < project.technologies.length - 1 && <span> / </span>}
              </div>
            ))}
          </div>
          <ProjectNavigation
            currentProjectId={projectId}
            totalProjects={projects.length}
          />
        </div>
        <div className='mt-auto flex justify-between lg:hidden'>
          <Link
            href='/#projects'
            className='font-display text-foreground mt-auto flex w-min items-center justify-center gap-2 rounded-full px-6 py-2 text-xl'
          >
            <MoveLeft strokeWidth={1} />
            <p>powrót</p>
          </Link>
          <div className='flex items-end justify-end'>
            <ProjectNavigation
              currentProjectId={projectId}
              totalProjects={projects.length}
            />
          </div>
        </div>
      </div>
      <ProgressiveBlur
        className='pointer-events-none fixed bottom-0 left-0 z-0 h-[200px] w-screen'
        direction='bottom'
      />
      <div
        className='hero-noise pointer-events-none absolute top-0 left-0 -z-1 h-full w-full bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
        aria-hidden='true'
      />
    </>
  )
}
