'use client'

import { motion } from 'framer-motion'

const Loading = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const dotVariants = {
    hidden: {
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: [0, 1.2, 1],
      opacity: [0, 1, 1],
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const
      }
    }
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut' as const
      }
    }
  }

  return (
    <motion.div className='bg-background/50 fixed z-50 flex h-screen w-screen items-center justify-center backdrop-blur-2xl'>
      {/* Grain overlay */}
      <div
        className='pointer-events-none absolute inset-0 bg-[url("/grain.png")] bg-repeat opacity-50 mix-blend-overlay'
        aria-hidden='true'
      />
    </motion.div>
  )
}

export default Loading
