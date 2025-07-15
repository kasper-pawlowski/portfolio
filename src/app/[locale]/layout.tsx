import type { Metadata } from 'next'
import '../globals.css'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { Toaster } from 'react-hot-toast'
import { unstable_ViewTransition as ViewTransition } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import { goia_display, goia } from '../fonts'
import Image from 'next/image'
import Providers from '@/components/providers'
import Header from '@/components/layout/Header'
import { Suspense } from 'react'
import NextTopLoader from 'nextjs-toploader'

import Grain from '@/components/Grain'
import Loading from './Loading'
import BreakpointIndicator from '@/components/BreakpointIndicator'
import GlobalLoader from '@/components/GlobalLoader'

export const metadata: Metadata = {
  title: 'Kasper Pawłowski',
  description: 'Personal website of Kasper Pawłowski'
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
    // <ViewTransition>
    <html lang={locale} suppressHydrationWarning>
      <body className={`${goia_display.variable} ${goia.variable} antialiased`}>
        <Suspense fallback={<Loading />}>
          {/* <NextTopLoader
          height={10}
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
          <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          /> */}
          <NextIntlClientProvider>
            <Providers>
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
                <BreakpointIndicator />
                {/* <Grain /> */}
                <Header />
                <main>{children}</main>
              </div>
            </Providers>
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
    // </ViewTransition>
  )
}
