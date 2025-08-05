import { playSound } from 'react-sounds'

const useSound = () => {
  const soundButton = () => playSound('/sounds/button.wav')
  const soundTap = () => playSound('/sounds/tap.wav')
  const soundTransitionDown = () => playSound('/sounds/transition_down.wav')
  const soundTransitionUp = () => playSound('/sounds/transition_up.wav')
  const soundHover = () => playSound('/sounds/hover.wav')
  const soundClick = () => playSound('/sounds/click.wav')
  const soundPlum = () => playSound('/sounds/plum.wav')

  return {
    soundButton,
    soundTap,
    soundTransitionDown,
    soundTransitionUp,
    soundHover,
    soundClick,
    soundPlum
  }
}

export default useSound
