'use client'

import React from 'react'
import { SoundProvider } from 'react-sounds'

// Pamiętaj o zaimportowaniu ścieżek do swoich dźwięków
// import customButtonSound from '../public/sounds/button.wav';
// ...

interface SoundProviderWrapperProps {
  children: React.ReactNode
}

const SoundProviderWrapper: React.FC<SoundProviderWrapperProps> = ({
  children
}) => {
  return (
    <SoundProvider
      preload={[
        '/sounds/button.wav',
        '/sounds/tap.wav',
        '/sounds/transition_down.wav',
        '/sounds/transition_up.wav',
        '/sounds/hover.wav',
        '/sounds/click.wav',
        '/sounds/plum.wav'
      ]}
      initialEnabled={true}
    >
      {children}
    </SoundProvider>
  )
}

export default SoundProviderWrapper
