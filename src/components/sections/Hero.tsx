'use client'

import Image from 'next/image'
import React from 'react'
import HeroGrid from '../ui/HeroGrid'
import ParallaxMarquee from '../ui/ParallaxMarquee'
import HeroGridMobile from '../ui/HeroGridMobile'

const Hero = () => {
  return (
    <section
      id='hero'
      className='relative mx-auto flex h-[100svh] flex-col items-center px-8 pt-[var(--header-height)] lg:px-0'
    >
      <div className='w-ful relative container mb-[var(--parallaxMarquee-height)] hidden h-full lg:flex'>
        {/* <h1 className='font-display pt-[8%] text-[clamp(1rem,5.5cqw,10rem)] font-black'>
          KASPER <br /> PAWŁOWSKI
        </h1> */}
        <div className='font-display absolute flex h-full w-full flex-col items-center justify-center gap-[18svh] text-6xl font-black xl:text-7xl 2xl:text-8xl'>
          <h1 className='relative place-self-start'>
            KASPER <br /> PAWŁOWSKI
            <div className='absolute top-10 left-8 z-[-3] h-60 w-60 rounded-full bg-[#ff9500a7] blur-[5rem]' />
          </h1>
          <h1 className='text-foreground-light place-self-end'>
            frontend <br /> developer
          </h1>
        </div>
        <HeroGrid />
      </div>
      <div className='relative container mb-[var(--parallaxMarqueeMobile-height)] flex h-[100dvh] w-full lg:hidden'>
        {/* <h1 className='font-display pt-[8%] text-[clamp(1rem,5.5cqw,10rem)] font-black'>
          KASPER <br /> PAWŁOWSKI
        </h1> */}
        <div className='font-display absolute flex h-full w-full flex-col items-center justify-center gap-[38svh] text-5xl font-black'>
          <h1 className='relative place-self-start'>
            KASPER <br /> PAWŁOWSKI
          </h1>
          <h1 className='text-foreground-light place-self-end'>
            frontend <br /> developer
          </h1>
        </div>
        <HeroGridMobile />
      </div>
      <div
        className='hero-noise pointer-events-none absolute top-0 left-0 z-[-1] h-[calc(100svh-var(--parallaxMarqueeMobile-height))] w-full bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay lg:h-[calc(100svh-var(--parallaxMarquee-height))]'
        aria-hidden='true'
      />
      <ParallaxMarquee />
      <Image
        src='/hero-blob.png'
        alt='blob'
        width={0}
        height={0}
        sizes='100vw'
        className='absolute top-[80vh] left-0 z-[-3] h-auto w-full object-cover object-top lg:top-[60vh]'
      />
    </section>
  )
}

export default Hero
