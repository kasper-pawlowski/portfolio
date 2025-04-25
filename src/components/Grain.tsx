import React from 'react'

const Grain = () => (
  <div
    className='grain-overlay pointer-events-none absolute z-0 h-[300vh] w-full bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
    aria-hidden='true'
  />
)

export default Grain
