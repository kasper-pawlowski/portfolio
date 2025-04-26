'use client'

import Image from 'next/image'
import React from 'react'
import HeroGrid from '../ui/HeroGrid'
import ParallaxMarquee from '../ui/ParallaxMarquee'

const Hero = () => {
  return (
    <section className='mx-auto flex h-screen flex-col items-center pt-[var(--header-height)]'>
      <div className='container h-full w-full justify-center'>
        <HeroGrid />
      </div>
      <ParallaxMarquee />
      <Image
        src='/hero-blob.png'
        alt='blob'
        width={0}
        height={0}
        sizes='100vw'
        style={{
          width: '100%',
          height: 'auto',
          zIndex: -1,
          position: 'absolute',
          top: '65vh'
        }}
      />
    </section>
  )
}

export default Hero
