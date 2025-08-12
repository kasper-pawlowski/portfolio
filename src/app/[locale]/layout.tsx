import type { Metadata, Viewport } from 'next'
import { Suspense } from 'react'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { ReactLenis } from 'lenis/react'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { getMessages, getTranslations } from 'next-intl/server'

import Loading from '@/app/[locale]/Loading'
import { routing } from '@/i18n/routing'
import Providers from '@/components/providers'
import Header from '@/components/layout/Header'
import GlobalLoader from '@/components/GlobalLoader'
import StyledToaster from '@/components/ui/StyledToaster'
import { LoaderProvider } from '@/context/LoaderContext'
import { goia_display, goia } from '../fonts'
import '../globals.css'

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    title: 'Kasper Pawłowski - Frontend Developer',
    description: t('description'),
    openGraph: {
      title: 'Kasper Pawłowski - Frontend Developer',
      description: t('description'),
      url: 'https://kasperpawlowski.com',
      siteName: 'Kasper Pawłowski',
      locale,
      type: 'website'
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-icon.png'
    },
    alternates: {
      canonical: `https://kasperpawlowski.com/${locale}`,
      languages: Object.fromEntries(
        routing.locales.map(cur => [cur, `https://kasperpawlowski.com/${cur}`])
      )
    }
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kasper Pawlowski',
    url: 'https://kasperpawlowski.com',
    jobTitle: 'Frontend Developer'
  }

  const messages = await getMessages({ locale })

  const bodyClassName = `${goia_display.variable} ${goia.variable} antialiased`

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={bodyClassName}>
        <Suspense fallback={<Loading />}>
          <NextIntlClientProvider messages={messages}>
            <Providers>
              <LoaderProvider>
                <AppLayout>
                  <GlobalLoader />
                  <ReactLenis root />
                  <StyledToaster />
                  <Header />
                  <main>{children}</main>
                </AppLayout>
              </LoaderProvider>
            </Providers>
          </NextIntlClientProvider>
        </Suspense>
        <Analytics />
        <SpeedInsights />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
          }}
        />
      </body>
    </html>
  )
}

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative min-h-full w-full overflow-clip'>{children}</div>
  )
}
