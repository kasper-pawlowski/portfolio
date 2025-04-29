'use client'

import Image from 'next/image'
import React from 'react'
import HeroGrid from '../ui/HeroGrid'
import ParallaxMarquee from '../ui/ParallaxMarquee'
import AnimatedHeroGrid from '../ui/AnimatedHeroGrid'

const Hero = () => {
  return (
    <section
      id='hero'
      className='relative mx-auto flex h-screen flex-col items-center pt-[var(--header-height)]'
    >
      <div className='relative container mb-[var(--parallaxMarquee-height)] flex h-full w-full'>
        {/* <h1 className='font-display pt-[8%] text-[clamp(1rem,5.5cqw,10rem)] font-black'>
          KASPER <br /> PAWŁOWSKI
        </h1> */}
        <HeroGrid />
      </div>
      <div
        className='pointer-events-none absolute top-0 left-0 z-0 h-[calc(100%-var(--parallaxMarquee-height))] w-full bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
        aria-hidden='true'
      />
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
          zIndex: -3,
          position: 'absolute',
          top: '65vh'
        }}
      />
    </section>
  )
}

export default Hero
