'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import data from '@/data/projects.json'
import Image from 'next/image'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, scale } from 'motion/react'
import { MoveDown } from 'lucide-react'

type CarouselProps = {
  projectId: number
}

const Carousel = ({ projectId }: CarouselProps) => {
  const isLgUp = useBreakpoint('lg')
  const [plugins, setPlugins] = useState<any[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const plugin = WheelGesturesPlugin({ target: document.body })
      setPlugins([plugin])
    }
  }, [])

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      axis: isLgUp ? 'y' : 'x',
      dragFree: isLgUp ? true : false,
      skipSnaps: true
    },
    plugins
  )

  useEffect(() => {
    if (!emblaApi || !isLgUp) return

    const container = emblaApi.containerNode()

    const setTransition = () => {
      container.style.transition = 'transform 0.3s ease-out'
    }

    emblaApi.on('pointerDown', setTransition)
    emblaApi.on('scroll', setTransition)
    emblaApi.on('settle', setTransition)
  }, [emblaApi])

  const project = data.find(p => p.id === projectId)

  if (!project) return null

  return (
    <>
      <div
        className='embla relative mt-5 flex h-full min-w-0 flex-2 flex-col lg:mt-0 lg:basis-2/4'
        ref={emblaRef}
      >
        <div className='embla__container lg:flex-col'>
          {project.images.map((image, index) => {
            return (
              <motion.div
                className='embla__slide relative w-full overflow-hidden rounded-2xl'
                key={index}
              >
                <Image
                  src={image}
                  alt={`Project image ${index + 1}`}
                  width={800}
                  height={600}
                  className='embla_slide_img relative rounded-2xl object-cover transition duration-200 ease-out hover:scale-105'
                />
              </motion.div>
            )
          })}
        </div>
        <div className='absolute top-20 right-[-60px] z-10 hidden w-[60px] flex-col items-center justify-center gap-3 opacity-50 lg:flex'>
          <p className='font-display text-sm'>scroll</p>
          <MoveDown className='text-foreground-light' strokeWidth={1} />
        </div>
      </div>
      <AnimatePresence mode='wait'>
        <motion.div
          key={project.images[0]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className='absolute top-0 z-[-2] aspect-video h-full w-full'
        >
          <Image
            src={project.images[0]}
            alt={`Blurred background`}
            fill
            aria-hidden='true'
            className='scale-120 object-contain opacity-30 blur-[100px]'
          />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Carousel
