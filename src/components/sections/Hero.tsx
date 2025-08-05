'use client'

import {
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  motion
} from 'motion/react'

import Marquee from '../ui/Marquee'
import GridWrapper from '../ui/GridWrapper'
import { useLoader } from '@/context/LoaderContext'
import Link from 'next/link'
import { useLenis } from 'lenis/react'
import { ArrowDownRight } from 'lucide-react'
import useSound from '@/hooks/useSound'

const Hero = () => {
  const { hasInitialLoadFinished } = useLoader()
  const { scrollYProgress } = useScroll()
  const firstY = useMotionValue(0)
  const secondY = useMotionValue(0)
  const lenis = useLenis()
  const { soundHover, soundClick } = useSound()

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    const newFirstY = 0 - latest * 300
    firstY.set(newFirstY)

    const newSecondY = 0 + latest * 300
    secondY.set(newSecondY)
  })

  const baseDelay = hasInitialLoadFinished ? 0 : 2

  const handleScrollTo = (target: string) => {
    if (lenis) {
      lenis.scrollTo(target)
    }
  }

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
                <motion.h1
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    delay: baseDelay
                  }}
                  style={{ y: firstY }}
                  className='place-self-start'
                >
                  KASPER <br /> PAWŁOWSKI
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    delay: baseDelay + 0.3
                  }}
                  style={{ y: secondY }}
                  className='text-foreground-light font-700 mt-auto self-end'
                >
                  frontend <br /> developer
                </motion.h1>
              </div>

              <motion.button
                onMouseEnter={soundHover}
                onMouseLeave={soundHover}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  ease: 'linear',
                  delay: baseDelay + 0.6
                }}
                className='font-500 buttton group font-display qhd:left-[30%] qhd:px-6 qhd:py-4 absolute top-[80%] left-[25%] z-5 hidden items-center justify-center gap-3 rounded-3xl px-5 py-3 text-[20px] backdrop-blur-sm duration-200 ease-in-out hover:translate-x-1 hover:translate-y-1 lg:flex'
                onClick={() => {
                  handleScrollTo('#projects'), soundClick()
                }}
              >
                <span className=''>przejdź do projektów</span>
                <ArrowDownRight
                  className='duration-300 ease-in-out group-hover:translate-x-1 group-hover:translate-y-1'
                  size={20}
                />
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                  delay: baseDelay + 0.5
                }}
                className='aspect-square max-h-180 w-full lg:aspect-auto lg:h-full'
              >
                <GridWrapper section='hero' />
              </motion.div>
            </div>
          </div>
        </div>
        <div className='z-4'>
          <Marquee />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: baseDelay }}
          className='from-blob-accent-1 to-blob-accent-2 qhd:h-60 qhd:-bottom-20 absolute -bottom-5 -left-[15vw] z-1 h-30 w-[130vw] bg-linear-to-b blur-3xl lg:-bottom-10 lg:h-40'
        />

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: baseDelay }}
          className='bg-blob-accent-2 absolute -bottom-20 -left-[5vw] z-1 h-30 w-[110vw] opacity-70 blur-3xl'
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: baseDelay }}
          className='bg-blob-accent-1 absolute -bottom-20 -left-[5vw] z-1 h-60 w-[110vw] opacity-70 blur-3xl'
        /> */}
      </section>
    </>
  )
}

export default Hero
