'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import HeroGrid from '../ui/HeroGrid'
import Marquee from '../ui/Marquee'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion'
import { wrap } from '@motionone/utils'

interface ParallaxProps {
  children: string
  baseVelocity: number
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, v => `${wrap(0, -20, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    // <div className='parallax'>
    //   <motion.div className='scroller' style={{ x }}>
    //     <span>{children} </span>
    //     <span>{children} </span>
    //     <span>{children} </span>
    //     <span>{children} </span>
    //   </motion.div>
    // </div>

    <motion.div
      style={{ x }}
      className='divider-wrapper relative container w-full justify-self-end'
    >
      <Marquee id={1} />
      <Marquee id={2} />
    </motion.div>
  )
}

const Hero = () => {
  const ref = useRef(null)

  return (
    <section className='mx-auto flex h-screen flex-col items-center pt-[var(--header-height)]'>
      <div className='container h-full w-full justify-center'>
        <HeroGrid />
      </div>
      <ParallaxText baseVelocity={2}>Framer Motion</ParallaxText>
      {/* <motion.div
        ref={ref}
        initial={{ x: '0%' }}
        animate={{
          x: ['0%', '20%']
        }}
        transition={{
          duration: 4,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop'
        }}
        className='divider-wrapper relative container w-full justify-self-end'
      >
        <Marquee id={1} />
        <Marquee id={2} />
      </motion.div> */}

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
