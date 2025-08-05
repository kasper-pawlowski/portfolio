import { useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { setSoundEnabled, isSoundEnabled } from 'react-sounds'

type SoundToggleProps = {
  textColorClass?: string
}

const SoundToggle = ({ textColorClass }: SoundToggleProps) => {
  const [enabled, setEnabled] = useState(isSoundEnabled())

  const handleSoundToggle = () => {
    setEnabled(prevEnabled => {
      const newEnabled = !prevEnabled
      setSoundEnabled(newEnabled)
      return newEnabled
    })
  }

  return (
    <button
      onClick={handleSoundToggle}
      className={`${textColorClass} transition-colors duration-200`}
    >
      {enabled ? (
        <Volume2 className='qhd:h-8 qhd:w-8 h-6 w-6' />
      ) : (
        <VolumeX className='qhd:h-8 qhd:w-8 h-6 w-6' />
      )}
    </button>
  )
}

export default SoundToggle
