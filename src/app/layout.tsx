import type { Metadata } from 'next'
import './globals.css'
import { goia_display, goia } from './fonts'
import Image from 'next/image'
import Providers from '@/components/providers'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Kasper Pawłowski',
  description: 'Personal website of Kasper Pawłowski'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${goia_display.variable} ${goia.variable} antialiased`}>
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
