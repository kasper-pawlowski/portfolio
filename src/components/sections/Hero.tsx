import Image from 'next/image'
import React from 'react'
import HeroGrid from '../ui/HeroGrid'

const Hero = () => {
  return (
    <section className='container mx-auto flex min-h-screen flex-col items-center justify-center pt-[var(--header-height)]'>
      <HeroGrid />
      {/* <div className='h-auto w-full'>
        <Image
          src='/hero-grid.svg'
          alt='Moon Icon'
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto', zIndex: -1 }}
        />
      </div> */}

      {/* <div className='mt-auto h-[5rem] w-screen bg-[url("/divider.svg")] bg-repeat-y object-cover'></div> */}
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
