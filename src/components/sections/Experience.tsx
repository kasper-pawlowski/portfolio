import React from 'react'

const Experience = () => {
  return (
    <section id='experience' className='text-background relative'>
      <div className='container mx-auto flex h-auto flex-col gap-10 px-8 py-20 lg:px-0 lg:py-40'>
        <h1 className='font-display w-full text-5xl font-black lg:text-7xl'>
          Doświadcznie
        </h1>
        <p className='flex w-full flex-col gap-5 font-sans text-lg font-medium lg:px-20 lg:text-xl'>
          <span>
            W ramach mojej drogi jako frontend developer miałem okazję zdobyć
            praktyczne doświadczenie zarówno w pracy z klientami, jak i w
            środowisku firmowym.
          </span>
          <span>
            Zdobyłem doświadczenie komercyjne, realizując projekty stron
            internetowych dla klientów na Fiverr. Każde zlecenie było dla mnie
            okazją do wykorzystania zdobytej wiedzy w praktyce, a także do
            rozwijania nie tylko umiejętności technicznych, ale również
            skutecznej komunikacji z klientami oraz rozwiązywania problemów w
            trakcie realizacji projektów.
          </span>
          <span>
            Dodatkowo w ramach praktyk szkolnych odbyłem praktyki w firmie
            Prezent Marzeń na stanowisku informatyka. Podczas praktyk miałem
            okazję wspierać zespół w codziennych zadaniach związanych z
            utrzymaniem i rozwijaniem systemów wewnętrznych oraz zdobywać
            doświadczenie w pracy zespołowej w środowisku IT.
          </span>
        </p>
      </div>
      <div className='bg-foreground absolute inset-0 z-[-2] h-full w-full'></div>
    </section>
  )
}

export default Experience
