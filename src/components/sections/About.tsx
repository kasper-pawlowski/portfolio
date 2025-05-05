import React from 'react'
import AboutGrid from '../ui/AboutGrid'
import Image from 'next/image'
import Photo from '../ui/Photo'

const About = () => {
  return (
    <section
      id='about'
      className='relative container mx-auto flex h-auto flex-col px-8 py-20 font-black lg:px-0 lg:py-40'
    >
      <div className='flex w-full flex-col gap-10 lg:w-[50%]'>
        <h1 className='font-display w-full text-5xl lg:text-7xl'>O mnie</h1>
        <p className='flex w-full flex-col gap-5 font-sans text-lg font-medium lg:pl-20 lg:text-xl'>
          <span>
            Cześć! Jestem Kasper i od 2019 roku tworzę strony internetowe oraz
            aplikacje webowe. Jestem samoukiem – wszystkiego nauczyłem się
            samodzielnie, korzystając z zasobów dostępnych w internecie. Moja
            pasja do programowania zaczęła się naturalnie i z czasem przerodziła
            się w chęć tworzenia coraz bardziej zaawansowanych projektów.
          </span>
          <span>
            Najlepiej czuję się w technologii react i to właśnie na nim opieram
            większość swoich aplikacji. Lubię tworzyć nowoczesne landing page,
            dynamiczne aplikacje webowe, a ostatnio zgłębiam także świat
            aplikacji mobilnych.
          </span>
          <span>
            Moim celem zawodowym jest rozpoczęcie kariery jako frontend
            developer, ale w przyszłości chciałbym rozwijać się również w
            kierunku full-stack developmentu. Stale poszerzam swoje umiejętności
            i jestem otwarty na nowe wyzwania.
          </span>
          <span>
            Jeśli szukasz kogoś, kto z pasją tworzy nowoczesne, wydajne i
            estetyczne aplikacje – zapraszam do kontaktu! 🚀
          </span>
        </p>
      </div>
      <div className='relative h-80 w-full'>
        <Photo />
        <AboutGrid />
      </div>
    </section>
  )
}

export default About
