import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='container mx-auto flex min-h-screen items-center justify-center pt-[var(--header-height)]'>
      {/* <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold'>Witaj na moim portfolio!</h1>
      </div> */}
      <Image
        src='/hero-grid.svg'
        alt='Moon Icon'
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%', height: 'auto', zIndex: -1 }}
      />
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
