import type { Metadata } from 'next'
import '../globals.css'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

import { goia_display, goia } from '../fonts'
import Image from 'next/image'
import Providers from '@/components/providers'
import Header from '@/components/layout/Header'
import { Suspense } from 'react'
import NextTopLoader from 'nextjs-toploader'

import Grain from '@/components/Grain'
import Loading from './Loading'

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
    <html lang={locale} suppressHydrationWarning>
      <body className={`${goia_display.variable} ${goia.variable} antialiased`}>
        {/* <Suspense fallback={<Loading />}> */}
        {/* <NextTopLoader
          height={10}
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        /> */}
        <NextIntlClientProvider>
          <Providers>
            {/* <Loading /> */}
            <Grain />
            <Header />
            <main className=''>{children}</main>
          </Providers>
        </NextIntlClientProvider>
        {/* </Suspense> */}
      </body>
    </html>
  )
}
