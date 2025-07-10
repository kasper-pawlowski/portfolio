'use client'

import Grid from '../ui/Grid'

const Hero = () => {
  return (
    <section
      id='hero'
      className='pt-header relative container mx-auto flex h-svh flex-col px-8 py-40 lg:px-0'
    >
      <div className='relative h-full w-full'>
        <Grid
          overlays={[
            {
              widthSquares: 1,
              heightSquares: 2,
              anchor: 'top-left',
              className: 'bg-background z-10'
            }
          ]}
        />
      </div>
    </section>
  )
}

export default Hero
