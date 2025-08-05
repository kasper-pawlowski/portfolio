'use client'

import useSound from '@/hooks/useSound'

const ProjectInteractionSounds = () => {
  const { soundHover, soundClick } = useSound()

  return (
    <div
      onClick={soundClick}
      onMouseEnter={soundHover}
      className='absolute inset-0 z-1'
    ></div>
  )
}

export default ProjectInteractionSounds
