'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import data from '@/data/projects.json'
import Image from 'next/image'
import { useBreakpoint } from '@/hooks/useBreakpoint'

type CarouselProps = {
  projectId: number
}

const Carousel = ({ projectId }: CarouselProps) => {
  const isLgUp = useBreakpoint('lg')
  const [emblaRef] = useEmblaCarousel(
    { loop: false, axis: isLgUp ? 'y' : 'x' },
    [WheelGesturesPlugin()]
  )

  const project = data.find(p => p.id === projectId)

  if (!project) return null

  return (
    <div className='embla pt-5' ref={emblaRef}>
      <div className='embla__container lg:flex-col'>
        {project.images.map((image, index) => {
          return (
            <div className='embla__slide w-full overflow-hidden' key={index}>
              <Image
                src={image}
                alt={`Project image ${index + 1}`}
                width={800}
                height={600}
                className='embla_slide_img rounded-2xl object-cover'
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
