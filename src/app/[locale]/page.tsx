import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Hero from '@/components/sections/Hero'
import React from 'react'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import { ProgressiveBlur } from '@/components/core/progressive-blur'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      {/* <div
        className='fixed bottom-0 z-10 h-20 w-screen backdrop-blur-[10px]'
        style={{
          WebkitMaskImage:
            'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
          maskImage:
            'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat'
        }}
      >
        .
      </div> */}
      <ProgressiveBlur
        className='pointer-events-none fixed bottom-0 left-0 z-10 h-[5%] w-full'
        blurIntensity={1}
        direction='bottom'
      />
    </>
  )
}

export default Home
