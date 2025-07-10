'use client'

import { heroOverlays } from '@/data/gridOverlays'
import Grid from '../ui/Grid'

const Hero = () => {
  return (
    <section
      id='hero'
      className='pt-header relative container mx-auto flex h-svh flex-col px-8 py-40 lg:px-0'
    >
      <div className='relative h-full w-full'>
        <Grid overlays={heroOverlays} />
      </div>
    </section>
  )
}

export default Hero
