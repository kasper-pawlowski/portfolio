'use client'

import { heroOverlays } from '@/data/gridOverlays'
import Grid from '../ui/Grid'
import Marquee from '../ui/Marquee'
import { useBreakpoint } from '@/hooks/useBreakpoint'
const Hero = () => {
  const isLgUp = useBreakpoint('lg')

  return (
    <>
      <section id='hero' className='relative flex h-svh flex-col'>
        <div className='relative flex w-full flex-1'>
          <div
            className='pointer-events-none absolute inset-0 z-1 bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
            aria-hidden='true'
          />
          <div className='hero-padding container mx-auto flex px-8 lg:px-0'>
            <div className='relative my-30 flex flex-1 items-center justify-center'>
              <div className='font-display pointer-events-none absolute z-6 flex h-full w-full flex-col items-center text-5xl font-black xl:text-7xl 2xl:text-8xl'>
                <h1 className='relative -translate-y-16 place-self-start lg:-translate-y-0'>
                  KASPER <br /> PAWŁOWSKI
                </h1>
                <h1 className='text-foreground-light mt-auto translate-y-16 self-end lg:translate-y-0'>
                  frontend <br /> developer
                </h1>
              </div>

              <div className='aspect-square w-full lg:aspect-auto lg:h-full'>
                <Grid overlays={heroOverlays} baseSize={isLgUp ? 45 : 40} />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full' style={{ height: isLgUp ? '90px' : '80px' }}>
          <Marquee />
        </div>
      </section>
    </>
  )
}

export default Hero
