import React from 'react'
import TechnologiesGrid from '../ui/TechnologiesGrid'
import Image from 'next/image'

const Technologies = () => {
  return (
    <section id='technologies' className='bg-red relative'>
      <Image
        src='/conclave.svg'
        alt='blob'
        width={0}
        height={0}
        // sizes='100vw'
        className='absolute top-[0] left-0 z-[-2] h-auto w-full'
      />
      <div className='relative container mx-auto flex h-auto flex-col gap-10 px-8 py-20 lg:px-0 lg:py-40'>
        <TechnologiesGrid />
        <h1 className='font-display mt-20 w-full text-center text-5xl font-black lg:text-6xl'>
          Technologie <br /> z których korzystam
        </h1>
        <span className='font-display text-foreground-light font-600 mt-20 w-full text-center text-2xl lg:text-3xl'>
          oraz <br /> wybrane projekty
        </span>
      </div>

      <div className='gravity-wrapper h-[500px] w-full bg-amber-500'></div>

      {/* <Image
        src='/hero-blob.png'
        alt='blob'
        width={0}
        height={0}
        sizes='100vw'
        className='absolute top-[-35rem] left-0 z-[-4] h-auto w-full object-cover object-top'
      /> */}
    </section>
  )
}

export default Technologies
