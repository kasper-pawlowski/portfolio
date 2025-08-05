import type { Metadata, Viewport } from 'next'
import { Suspense } from 'react'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { Toaster } from 'react-hot-toast'
import { ReactLenis } from 'lenis/react'

import Loading from '@/app/[locale]/Loading'
import { routing } from '@/i18n/routing'
import Providers from '@/components/providers'
import Header from '@/components/layout/Header'
import GlobalLoader from '@/components/GlobalLoader'
import { LoaderProvider } from '@/context/LoaderContext'
import { goia_display, goia } from '../fonts'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Kasper Pawłowski',
  description: 'Personal website of Kasper Pawłowski'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

const toastConfig = {
  position: 'bottom-right' as const,
  gutter: 16,
  toastOptions: {
    style: {
      border: '0px solid var(--background)',
      borderRadius: '12px',
      padding: '16px',
      color: 'var(--foreground)',
      backgroundColor: 'var(--background)',
      fontFamily: 'var(--font-goia-display)',
      boxShadow: '8px 8px 0 0 var(--foreground), 0 0 0 3px var(--foreground)',
      fontWeight: '600'
    },
    success: {
      iconTheme: {
        primary: 'var(--foreground)',
        secondary: 'var(--background)'
      }
    }
  }
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

  const bodyClassName = `${goia_display.variable} ${goia.variable} antialiased`

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={bodyClassName}>
        <Suspense fallback={<Loading />}>
          <NextIntlClientProvider>
            <Providers>
              <LoaderProvider>
                <AppLayout>
                  <GlobalLoader />
                  <ReactLenis root />
                  <Toaster {...toastConfig} />
                  <Header />
                  <main>{children}</main>
                </AppLayout>
              </LoaderProvider>
            </Providers>
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  )
}

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative min-h-full w-full overflow-clip'>{children}</div>
  )
}
