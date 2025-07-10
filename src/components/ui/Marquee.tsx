import React from 'react'
import SimpleMarquee from '../core/simple-marquee'
import Divider from '../../../public/divider.svg'

const Marquee = () => {
  return (
    <div className='flex h-25 w-full'>
      <SimpleMarquee
        className='relative flex w-full'
        baseVelocity={5}
        repeat={10}
        scrollAwareDirection={false}
        scrollSpringConfig={{ damping: 100, stiffness: 400 }}
        useScrollVelocity={true}
        direction='right'
      >
        <Divider className='h-full' />
      </SimpleMarquee>
    </div>
  )
}

export default Marquee
