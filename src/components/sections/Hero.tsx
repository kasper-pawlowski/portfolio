'use client'

import { heroOverlay2Xl, heroOverlayXl } from '@/data/gridOverlays'
import Grid from '../ui/Grid'
import Marquee from '../ui/Marquee'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import Image from 'next/image'
const Hero = () => {
  const isLgUp = useBreakpoint('lg')

  return (
    <>
      <section id='hero' className='relative flex h-svh flex-col'>
        <div className='relative flex w-full flex-1'>
          <div
            className='pointer-events-none absolute inset-0 z-2 bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
            aria-hidden='true'
          />
          <div className='hero-padding container mx-auto flex px-8 lg:px-0'>
            <div className='relative my-30 flex flex-1 items-center justify-center'>
              <div className='font-display pointer-events-none absolute z-3 flex h-full w-full flex-col items-center text-5xl font-black lg:text-6xl xl:text-7xl 2xl:text-8xl'>
                <h1 className='relative -translate-y-16 place-self-start lg:-translate-y-0'>
                  KASPER <br /> PAWŁOWSKI
                </h1>
                <h1 className='text-foreground-light mt-auto translate-y-16 self-end lg:translate-y-0'>
                  frontend <br /> developer
                </h1>
              </div>

              <div className='aspect-square w-full lg:aspect-auto lg:h-full'>
                <Grid
                  overlays={isLgUp ? heroOverlay2Xl : heroOverlayXl}
                  baseSize={isLgUp ? 45 : 40}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='z-4'>
          <Marquee />
        </div>

        <div className='absolute -bottom-30 -left-[5vw] z-1 h-60 w-[110vw] bg-orange-500 blur-3xl' />
      </section>
    </>
  )
}

export default Hero
