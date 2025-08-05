'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { MoveDown } from 'lucide-react'
import data from '@/data/projects.json'
import { useBreakpoint } from '@/hooks/useBreakpoint'

type CarouselProps = {
  projectId: number
}

const Carousel = ({ projectId }: CarouselProps) => {
  const isLgUp = useBreakpoint('lg')

  const plugins =
    typeof window !== 'undefined'
      ? [WheelGesturesPlugin({ target: document.body })]
      : []

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
    if (!emblaApi || !isLgUp) {
      return
    }

    const container = emblaApi.containerNode()

    const setTransition = () => {
      if (container.style.transition !== 'transform 0.3s ease-out') {
        container.style.transition = 'transform 0.3s ease-out'
      }
    }

    emblaApi.on('pointerDown', setTransition)
    emblaApi.on('scroll', setTransition)
    emblaApi.on('settle', setTransition)

    return () => {
      emblaApi.off('pointerDown', setTransition)
      emblaApi.off('scroll', setTransition)
      emblaApi.off('settle', setTransition)
    }
  }, [emblaApi, isLgUp])

  const project = data.find(p => p.id === projectId)

  if (!project) return null

  return (
    <>
      <div
        className='embla relative flex h-full min-w-0 flex-2 flex-col lg:mt-0'
        ref={emblaRef}
      >
        <div className='embla__container flex gap-4 lg:h-full lg:flex-col lg:gap-12'>
          {project.images.map((image, index) => {
            return (
              <div
                className='embla__slide relative aspect-video min-h-0 w-[80%] min-w-0 flex-none overflow-hidden rounded-2xl lg:w-full lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto'
                key={index}
              >
                <Image
                  src={image}
                  alt={`Project image ${index + 1}`}
                  fill
                  quality={100}
                  sizes='(max-width: 1024px) 80vw, 50vw'
                  loading='eager'
                  className='embla_slide_img relative h-full w-full rounded-2xl transition duration-200 ease-out lg:rounded-4xl'
                />
              </div>
            )
          })}
        </div>
        <div className='absolute top-20 right-[-60px] z-10 hidden w-[60px] flex-col items-center justify-center gap-3 opacity-50 lg:flex'>
          <p className='font-display text-sm'>scroll</p>
          <MoveDown className='text-foreground-light' strokeWidth={1} />
        </div>
      </div>
    </>
  )
}

export default Carousel
