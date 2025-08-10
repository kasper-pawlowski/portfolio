import type { MetadataRoute } from 'next'
import type { Locale } from 'next-intl'
import { getPathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import projects from '@/data/projects.json'

const host = 'https://kasperpawlowski.com'

type Href = Parameters<typeof getPathname>[0]['href']

type Project = {
  id: number
  // opcjonalnie: updatedAt?: string | Date
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const entries: MetadataRoute.Sitemap = [
    // Strona główna (bez anchorów)
    ...getEntries('/', {
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1
    }),

    // Dynamiczne strony projektów
    ...(projects as Project[]).flatMap(p =>
      getEntries(
        `/projects/${String(p.id)}`, // <- zamiana obiektu z params na string
        {
          lastModified: now, // podmień na p.updatedAt jeśli masz datę
          changeFrequency: 'monthly',
          priority: 0.7
        }
      )
    )
  ]

  return entries
}

function getEntries(
  href: Href,
  opts?: Pick<
    NonNullable<MetadataRoute.Sitemap[number]>,
    'lastModified' | 'changeFrequency' | 'priority'
  >
): MetadataRoute.Sitemap {
  return routing.locales.map(locale => ({
    url: getUrl(href, locale),
    lastModified: opts?.lastModified,
    changeFrequency: opts?.changeFrequency,
    priority: opts?.priority,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map(cur => [cur, getUrl(href, cur)])
      )
    }
  }))
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href })
  return host + pathname
}
