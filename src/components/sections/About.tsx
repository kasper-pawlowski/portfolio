'use client'

import React from 'react'
import Image from 'next/image'
import Photo from '../ui/Photo'
import Grid from '../ui/Grid'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { heroOverlayXl } from '@/data/gridOverlays'

const About = () => {
  const isLgUp = useBreakpoint('lg')

  return (
    <section id='about' className='relative'>
      <div
        className='pointer-events-none absolute inset-0 z-1 bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
        aria-hidden='true'
      />
      <div className='container mx-auto flex flex-col gap-20 px-8 py-20 font-black lg:flex-row lg:px-0 lg:py-40'>
        <div className='flex flex-3/5 flex-col gap-10'>
          <h1 className='font-display z-2 text-5xl lg:text-7xl'>O mnie</h1>
          <p className='font-500 z-2 flex flex-col gap-5 font-sans text-lg lg:pl-20 lg:text-xl'>
            <span>
              Cześć! Jestem Kasper i od 2019 roku tworzę strony internetowe oraz
              aplikacje webowe. Jestem samoukiem – wszystkiego nauczyłem się
              samodzielnie, korzystając z zasobów dostępnych w internecie. Moja
              pasja do programowania zaczęła się naturalnie i z czasem
              przerodziła się w chęć tworzenia coraz bardziej zaawansowanych
              projektów.
            </span>
            <span>
              Najlepiej czuję się w technologii react i to właśnie na nim
              opieram większość swoich aplikacji. Lubię tworzyć nowoczesne
              landing page, dynamiczne aplikacje webowe, a ostatnio zgłębiam
              także świat aplikacji mobilnych.
            </span>
            <span>
              Moim celem zawodowym jest rozpoczęcie kariery jako frontend
              developer, ale w przyszłości chciałbym rozwijać się również w
              kierunku full-stack developmentu. Stale poszerzam swoje
              umiejętności i jestem otwarty na nowe wyzwania.
            </span>
            <span>
              Jeśli szukasz kogoś, kto z pasją tworzy nowoczesne, wydajne i
              estetyczne aplikacje – zapraszam do kontaktu! 🚀
            </span>
          </p>
        </div>
        <div className='relative flex h-auto flex-2/5 flex-col pt-40'>
          <Photo />
          <Grid
            overlays={isLgUp ? heroOverlayXl : heroOverlayXl}
            baseSize={isLgUp ? 45 : 40}
          />
        </div>
        {/* <div className='relative h-90 w-full lg:h-80'>
          <Photo />
          <AboutGrid />
        </div> */}
      </div>
    </section>
  )
}

export default About
