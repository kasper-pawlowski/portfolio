import type { Metadata, Viewport } from 'next'
import '../globals.css'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { Toaster } from 'react-hot-toast'
import { ReactLenis } from 'lenis/react'
import { goia_display, goia } from '../fonts'
import Providers from '@/components/providers'
import Header from '@/components/layout/Header'
import { Suspense } from 'react'
import Loading from './Loading'
import GlobalLoader from '@/components/GlobalLoader'
import { LoaderProvider } from '@/context/LoaderContext'

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

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${goia_display.variable} ${goia.variable} antialiased`}>
        <Suspense fallback={<Loading />}>
          <NextIntlClientProvider>
            <Providers>
              <LoaderProvider>
                <div className='relative min-h-full w-full overflow-clip'>
                  <GlobalLoader />
                  <ReactLenis root />
                  <Toaster
                    position='bottom-right'
                    gutter={16}
                    toastOptions={{
                      style: {
                        border: '0px solid var(--background)',
                        borderRadius: '12px',
                        padding: '16px',
                        color: 'var(--foreground)',
                        backgroundColor: 'var(--background)',
                        fontFamily: 'var(--font-goia-display)',
                        boxShadow:
                          '8px 8px 0 0 var(--foreground), 0 0 0 3px var(--foreground)',
                        fontWeight: '600'
                      },
                      success: {
                        iconTheme: {
                          primary: 'var(--foreground)',
                          secondary: 'var(--background)'
                        }
                      }
                    }}
                  />
                  <Header />
                  <main>{children}</main>
                </div>
              </LoaderProvider>
            </Providers>
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  )
}
