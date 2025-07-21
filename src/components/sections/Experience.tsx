import React from 'react'

const Experience = () => {
  return (
    <section id='experience' className='text-background bg-foreground relative'>
      <div
        className='pointer-events-none absolute inset-0 bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
        aria-hidden='true'
      />
      <div className='container mx-auto flex h-auto flex-col gap-10 py-20 lg:py-40'>
        <h1 className='font-display z-2 w-full text-5xl font-black lg:text-7xl'>
          Doświadcznie
        </h1>
        <p className='z-2 flex w-full flex-col gap-5 font-sans text-lg font-medium lg:px-20 lg:text-xl'>
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

      <svg
        className='text-foreground absolute z-1 h-20 w-full'
        viewBox='0 0 1200 64'
        preserveAspectRatio='none'
      >
        <path
          d='M0,0 L1200,0 L1200,34 Q600,0 0,34 Z'
          fill='currentColor'
          className='block lg:hidden'
        />
        <path
          d='M0,0 L1200,0 L1200,64 Q600,0 0,64 Z'
          fill='currentColor'
          className='hidden lg:block'
        />
      </svg>
    </section>
  )
}

export default Experience
