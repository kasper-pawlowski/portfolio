// app/fonts.ts
import localFont from 'next/font/local'

// Definicja fontu Goia Display ze wszystkimi wagami
export const goia_display = localFont({
  src: [
    {
      path: './fonts/goia-display/GoiaDisplay-Thin.otf',
      weight: '100',
      style: 'normal'
    },
    {
      path: './fonts/goia-display/GoiaDisplay-ExtraLight.otf',
      weight: '200',
      style: 'normal'
    },
    {
      path: './fonts/goia-display/GoiaDisplay-Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/goia-display/GoiaDisplay-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/goia-display/GoiaDisplay-Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/goia-display/GoiaDisplay-SemiBold.otf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/goia-display/GoiaDisplay-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/goia-display/GoiaDisplay-ExtraBold.otf',
      weight: '800',
      style: 'normal'
    },
    {
      path: './fonts/goia-display/GoiaDisplay-Black.otf',
      weight: '900',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-goia-display'
})

// Definicja fontu Goia (standardowego) ze wszystkimi wagami
export const goia = localFont({
  src: [
    {
      path: './fonts/goia/Goia-Thin.otf',
      weight: '100',
      style: 'normal'
    },
    {
      path: './fonts/goia/Goia-ExtraLight.otf',
      weight: '200',
      style: 'normal'
    },
    {
      path: './fonts/goia/Goia-Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/goia/Goia-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/goia/Goia-Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/goia/Goia-SemiBold.otf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/goia/Goia-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/goia/Goia-ExtraBold.otf',
      weight: '800',
      style: 'normal'
    },
    {
      path: './fonts/goia/Goia-Black.otf',
      weight: '900',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-goia'
})
