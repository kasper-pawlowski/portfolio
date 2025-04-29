import { useEffect, useRef } from 'react'

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
import Marquee from './Marquee'
import MarqueeMobile from './MarqueeMobile'

const ParallaxMarquee = () => {
  const baseVelocity = 3
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

  const x = useTransform(baseX, v => `${wrap(0, -20, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = 1 // -1 is left, 1 is right
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <motion.div
      style={{ x }}
      className='relative container w-full place-self-end justify-self-end'
    >
      <div className='hidden lg:flex'>
        <Marquee id={1} />
        <Marquee id={2} />
      </div>

      <div className='lg:hidden'>
        <MarqueeMobile id={1} />
        <MarqueeMobile id={2} />
      </div>
    </motion.div>
  )
}

export default ParallaxMarquee
