import React from 'react'
import SimpleMarquee from '../core/simple-marquee'
import Divider from '../../../public/divider.svg'

const Marquee = () => {
  return (
    <div className='h-marquee w-full'>
      <SimpleMarquee
        className='relative flex h-full w-full'
        baseVelocity={5}
        repeat={10}
        scrollAwareDirection={false}
        scrollSpringConfig={{ damping: 50, stiffness: 400 }}
        useScrollVelocity={true}
        direction='right'
      >
        <Divider className='text-grid-color h-full' />
      </SimpleMarquee>
    </div>
  )
}

export default Marquee
