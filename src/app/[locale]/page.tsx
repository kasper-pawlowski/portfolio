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

      <ProgressiveBlur
        className='pointer-events-none fixed bottom-0 left-0 z-6 h-[200px] w-screen'
        direction='bottom'
      />
    </>
  )
}

export default Home
