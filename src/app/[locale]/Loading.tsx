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
    <motion.div className='bg-background fixed z-50 flex h-screen w-screen items-center justify-center'>
      {/* Grain overlay */}
      <div
        className='pointer-events-none absolute inset-0 bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
        aria-hidden='true'
      />

      {/* Main loader content */}
      <motion.div
        className='relative flex flex-col items-center gap-8'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {/* Animated dots */}
        <div className='flex gap-3'>
          {[0, 1, 2].map(index => (
            <motion.div
              key={index}
              className='h-4 w-4 rounded-full'
              style={{
                backgroundColor:
                  index === 0
                    ? 'var(--svg-accent-1)'
                    : index === 1
                      ? 'var(--svg-accent-2)'
                      : 'var(--foreground)'
              }}
              variants={dotVariants}
              animate='animate'
            >
              <motion.div
                className='h-full w-full rounded-full'
                variants={pulseVariants}
                style={{
                  backgroundColor:
                    index === 0
                      ? 'var(--svg-accent-1)'
                      : index === 1
                        ? 'var(--svg-accent-2)'
                        : 'var(--foreground)'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Loading text */}
        <motion.div
          className='font-goia text-foreground text-lg font-medium'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Ładowanie...
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className='bg-background-light relative h-1 w-48 overflow-hidden rounded-full'
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            className='absolute top-0 left-0 h-full rounded-full'
            style={{
              background:
                'linear-gradient(90deg, var(--svg-accent-1), var(--svg-accent-2))'
            }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 2,
              ease: 'easeInOut' as const,
              delay: 1.2
            }}
          />
        </motion.div>
      </motion.div>

      {/* Background accent blob */}
      <motion.div
        className='absolute -bottom-20 -left-20 h-40 w-40 rounded-full blur-3xl'
        style={{ backgroundColor: 'var(--blob-accent-1)' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
    </motion.div>
  )
}

export default Loading
