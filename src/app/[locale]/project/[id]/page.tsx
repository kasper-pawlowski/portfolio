import projects from '@/data/projects.json' // Bezpośredni import pliku JSON
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
        className='pt-header flex h-screen w-full flex-col items-center'
      >
        <h1>{project.nameKey}</h1>
        <p>{t(projectDescriptionKey)}</p>
      </div>
      <div
        className='hero-noise pointer-events-none absolute top-0 left-0 z-[1] h-full w-full bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
        aria-hidden='true'
      />
    </>
  )
}
