import React from 'react'

const Grain = () => (
  <div
    className='grain-overlay pointer-events-none absolute z-[-1] mt-[100svh] min-h-full w-full bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
    aria-hidden='true'
  />
)

export default Grain
