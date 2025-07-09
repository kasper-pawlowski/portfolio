import { useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

const SoundToggle = () => {
  const [soundEnabled, setSoundEnabled] = useState(true)

  return (
    <button
      onClick={() => {
        setSoundEnabled(e => !e)
      }}
    >
      {soundEnabled ? <Volume2 size={30} /> : <VolumeX size={30} />}
    </button>
  )
}

export default SoundToggle
