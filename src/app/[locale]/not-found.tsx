import { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

export const metadata: Metadata = {
  title: 'Strona nie znaleziona | 404',
  description: 'Strona, której szukasz, nie istnieje.'
}

export default async function NotFound() {
  const t = await getTranslations('NotFound')

  return (
    <div className='flex h-dvh w-screen flex-col items-center justify-center gap-20'>
      <p className='font-display font-800 fhd:text-[12rem] text-9xl'>404</p>
      <Link
        href='/'
        className='font-500 cta-button flex items-center justify-center gap-3 rounded-3xl px-5 py-3 backdrop-blur-sm duration-200 ease-in-out hover:translate-x-1 hover:translate-y-1'
      >
        <ArrowLeft size={20} />
        <span>{t('cta')}</span>
      </Link>
    </div>
  )
}
