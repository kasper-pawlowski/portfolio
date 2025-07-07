import Carousel from '@/components/ui/Carousel'
import projects from '@/data/projects.json' // Bezpośredni import pliku JSON
import { ArrowRight, ArrowUpRight, MoveLeft, MoveRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import GithubLogo from '../../../../../public/icons/github.svg'
import Image from 'next/image'

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
        className='project-padding relative container mx-auto flex h-[100svh] w-full flex-col px-8 lg:px-0'
      >
        <div className='flex flex-col gap-5'>
          <h1 className='font-900 font-display text-4xl'>{project.nameKey}</h1>
          <p className='font-400 text-sm'>{t(projectDescriptionKey)}</p>
          {/* <div className='flex gap-5 overflow-x-scroll'>
            {project.technologies.map(technology => (
              <span
                key={technology}
                className='border-foreground flex items-center justify-center rounded-full border-1 px-2 py-0'
              >
                {technology}
              </span>
            ))}
          </div> */}
          <div className='flex gap-3'>
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
        </div>
        <Carousel projectId={projectId} />

        {/* <Link
          href={`/project/${projectId + 1}`}
          className='absolute right-8 bottom-8 flex h-30 w-30 items-center justify-center'
        >
          <p className='font-display'>0{projectId}</p>
        </Link> */}
        <div className='absolute right-8 bottom-16 flex gap-1'>
          <Link
            className='border-foreground-light flex h-10 w-15 items-center justify-center rounded-l-full border-1'
            href={`/project/${projectId - 1}`}
          >
            <MoveLeft size={20} />
          </Link>
          <p className='border-foreground font-display font-600 flex h-10 w-15 items-center justify-center border-1'>
            0{projectId}
          </p>
          <Link
            className='border-foreground-light flex h-10 w-15 items-center justify-center rounded-r-full border-1'
            href={`/project/${projectId + 1}`}
          >
            <MoveRight size={20} />
          </Link>
        </div>
      </div>
      <div
        className='hero-noise pointer-events-none absolute top-0 left-0 z-[-1] h-full w-full bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
        aria-hidden='true'
      />
    </>
  )
}
