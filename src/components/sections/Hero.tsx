import Marquee from '../ui/Marquee'
import GridWrapper from '../ui/GridWrapper'

const Hero = () => {
  return (
    <>
      <section id='hero' className='relative flex h-svh flex-col'>
        <div className='relative flex w-full flex-1'>
          <div
            className='pointer-events-none absolute inset-0 z-2 bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
            aria-hidden='true'
          />
          <div className='pt-header container flex pb-10'>
            <div className='qhd:my-30 relative my-5 flex flex-1 items-center justify-center'>
              <div className='font-display fhd:text-8xl/tight qhd:text-9xl/tight pointer-events-none absolute z-3 flex h-full w-full flex-col items-center text-5xl font-black md:text-7xl lg:tracking-wide'>
                <h1 className='place-self-start'>
                  KASPER <br /> PAWŁOWSKI
                </h1>
                <h1 className='text-foreground-light font-700 mt-auto self-end'>
                  frontend <br /> developer
                </h1>
              </div>

              <div className='aspect-square w-full lg:aspect-auto lg:h-full'>
                <GridWrapper section='hero' />
              </div>
            </div>
          </div>
        </div>
        <div className='z-4'>
          <Marquee />
        </div>

        <div className='bg-blob-accent-1 absolute -bottom-30 -left-[5vw] z-1 h-60 w-[110vw] opacity-70 blur-3xl' />
      </section>
    </>
  )
}

export default Hero
