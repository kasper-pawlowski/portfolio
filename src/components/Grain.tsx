import React from 'react'

const Grain = () => (
  <div
    className='grain-overlay pointer-events-none'
    style={{
      zIndex: 0,
      opacity: 1,
      mixBlendMode: 'overlay',
      // backgroundImage: 'url("/grain.png")',
      backgroundRepeat: 'repeat',
      // backgroundSize: 'auto',
      width: '100%'
      // height: '100%'
    }}
    aria-hidden='true'
  />
)

export default Grain
