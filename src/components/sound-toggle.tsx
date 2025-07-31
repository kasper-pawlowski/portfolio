import { useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

type SoundToggleProps = {
  textColorClass?: string
}

const SoundToggle = ({ textColorClass }: SoundToggleProps) => {
  const [soundEnabled, setSoundEnabled] = useState(true)

  return (
    <button
      onClick={() => {
        setSoundEnabled(e => !e)
      }}
      className={`${textColorClass} transition-colors duration-200`}
    >
      {soundEnabled ? (
        <Volume2 className='qhd:h-8 qhd:w-8 h-6 w-6' />
      ) : (
        <VolumeX className='qhd:h-8 qhd:w-8 h-6 w-6' />
      )}
    </button>
  )
}

export default SoundToggle
