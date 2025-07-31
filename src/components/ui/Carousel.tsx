'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import data from '@/data/projects.json'
import Image from 'next/image'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { useEffect } from 'react' // No need for useState for plugins
// import { AnimatePresence, motion } from 'motion/react' // Uncomment if you use these
import { MoveDown } from 'lucide-react'

type CarouselProps = {
  projectId: number
}

const Carousel = ({ projectId }: CarouselProps) => {
  const isLgUp = useBreakpoint('lg')

  // Directly initialize plugins within the useEmblaCarousel call
  // We only create the plugin instance if window is defined (client-side)
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
    plugins // Pass the directly created plugins
  )

  useEffect(() => {
    // Ensure emblaApi is available and we're on a large screen
    if (!emblaApi || !isLgUp) {
      // console.log('Embla API not ready or not large screen, skipping transition setup.'); // For debugging
      return
    }

    const container = emblaApi.containerNode()

    // Function to set the transition style
    const setTransition = () => {
      // console.log('Setting transition on container.'); // For debugging
      // Only apply if it's not already set to avoid unnecessary DOM writes
      if (container.style.transition !== 'transform 0.3s ease-out') {
        container.style.transition = 'transform 0.3s ease-out'
      }
    }

    // Attach event listeners for pointerDown, scroll, and settle
    emblaApi.on('pointerDown', setTransition)
    emblaApi.on('scroll', setTransition)
    emblaApi.on('settle', setTransition)

    // IMPORTANT: Return a cleanup function to remove listeners
    // This prevents memory leaks and ensures correct behavior if the component unmounts
    // or if emblaApi somehow changes (though less common for Embla).
    return () => {
      // console.log('Cleaning up Embla API transition listeners.'); // For debugging
      emblaApi.off('pointerDown', setTransition)
      emblaApi.off('scroll', setTransition)
      emblaApi.off('settle', setTransition)
    }
  }, [emblaApi, isLgUp]) // Dependencies: Re-run if emblaApi or isLgUp changes

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
              <div // Changed from motion.div for simplicity, use motion.div if 'motion/react' is fully integrated
                className='embla__slide relative aspect-video min-h-0 w-[80%] min-w-0 flex-none overflow-hidden rounded-2xl lg:w-full lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto'
                key={index}
              >
                <Image
                  src={image}
                  alt={`Project image ${index + 1}`}
                  fill
                  sizes='(max-width: 768px) 100vw, (min-width: 769px) 50vw'
                  className='embla_slide_img relative h-full w-full rounded-2xl transition duration-200 ease-out'
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
      {/* <AnimatePresence mode='wait'>
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
      </AnimatePresence> */}
    </>
  )
}

export default Carousel
