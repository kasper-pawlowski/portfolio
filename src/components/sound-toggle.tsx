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
      {soundEnabled ? <Volume2 size={30} /> : <VolumeX size={30} />}
    </button>
  )
}

export default SoundToggle
