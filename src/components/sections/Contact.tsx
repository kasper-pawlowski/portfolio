'use client'

import { Copy, Github, Linkedin, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import GithubLogo from '../../../public/icons/github.svg'
import LinkedinLogo from '../../../public/icons/linkedin.svg'
import WhatsappLogo from '../../../public/icons/whatsapp.svg'
import toast from 'react-hot-toast'
import { useTranslations } from 'next-intl'
import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'

const Contact = () => {
  const t = useTranslations('Contact')

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('kasper.pawlowski04@gmail.com')
      toast.success(t('toast_success'))
    } catch (err) {
      toast.error(t('toast_error'))
    }
  }

  return (
    <section id='contact' className='relative'>
      <div
        className='pointer-events-none absolute inset-0 bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
        aria-hidden='true'
      />
      <div className='container mx-auto flex h-auto flex-col items-center py-20 lg:py-40'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: '0px 0px -20px 0px'
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='font-display relative text-center text-5xl font-black lg:text-7xl'
        >
          {t('title')}
          <div className='bg-contact-background absolute top-1/2 left-1/2 -z-1 h-[120%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-4xl blur-2xl'></div>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
            margin: '0px 0px -20px 0px'
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='font-600 text-foreground-light z-1 mt-5 text-xl'
        >
          {t('sub_title')}
        </motion.p>
        <a
          href='mailto:kasper.pawlowski04@gmail.com'
          className='font-600 shadow-elevated hover:shadow-elevated-hover bg-email-background z-1 mt-25 w-full rounded-2xl py-4 text-center text-xl duration-200 ease-in-out hover:translate-x-1 hover:translate-y-1 active:translate-y-[6px] lg:max-w-max lg:px-16'
          aria-label='Wyślij wiadomość email do kasper.pawlowski04@gmail.com'
          role='button'
        >
          kasper.pawlowski04@gmail.com
        </a>
        <button
          onClick={handleCopyEmail}
          className='font-500 z-1 mt-10 flex items-center justify-center gap-3 duration-200 ease-in-out active:translate-y-1'
        >
          <Copy size={20} /> <span>{t('copy_mail')}</span>
        </button>
        <div className='z-1 mx-auto mt-25 flex flex-col gap-20 lg:flex-row'>
          <Link
            href='https://github.com/kasper-pawlowski'
            className='github-link flex items-center gap-5'
            target='_blank'
          >
            <GithubLogo className='github-logo h-10 w-10 duration-300' />
            <div className='flex flex-col gap-1'>
              <span className='font-700 text-xl'>GitHub</span>
              <p className='text-lg'>@kasper-pawlowski</p>
            </div>
          </Link>
          <Link
            href='https://linkedin.com/in/kasper-pawlowski'
            className='linkedin-link flex items-center gap-5'
            target='_blank'
          >
            <LinkedinLogo className='linkedin-logo h-10 w-10 duration-300' />
            <div className='flex flex-col gap-1'>
              <span className='font-700 text-xl'>LinkedIn</span>
              <p className='text-lg'>@kasper-pawlowski</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Contact
