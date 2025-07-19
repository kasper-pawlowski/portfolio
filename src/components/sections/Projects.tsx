import styles from '../../styles/Projects.module.css'
import projectsData from '../../data/projects.json'
import Link from 'next/link'
import ProjectLink from '../ui/ProjectLink'

const Projects = () => (
  <>
    <section
      id='projects-mobile'
      className='bg-projects-grid-background relative flex flex-col gap-[2px] lg:hidden'
    >
      <div className={`${styles.gridContainerMobile} relative`}>
        <div className={`${styles.mobile_div1} ${styles.mobile_div}`}>
          <Link href={`/project/1`} className='z-5 h-full w-full'>
            <video
              controls={false} // Opcjonalnie: ukrywa kontrolki odtwarzania
              autoPlay // Włącza automatyczne odtwarzanie
              loop // Odtwarza wideo w pętli
              muted // Wycisza dźwięk
              playsInline // Ważne dla autoodtwarzania na urządzeniach mobilnych
              preload='none'
              className='z-5 h-full w-full object-cover'
            >
              <source src={projectsData[0].videoUrl} type='video/mp4' />
              Twój browser nie obsługuje tagu wideo.
            </video>
          </Link>
        </div>
        <div className={`${styles.mobile_div2} ${styles.mobile_div}`}>
          <Link href={`/project/2`} className='z-5 h-full w-full'>
            <video
              controls={false} // Opcjonalnie: ukrywa kontrolki odtwarzania
              autoPlay // Włącza automatyczne odtwarzanie
              loop // Odtwarza wideo w pętli
              muted // Wycisza dźwięk
              playsInline // Ważne dla autoodtwarzania na urządzeniach mobilnych
              preload='none'
              className='z-5 h-full w-full object-cover'
            >
              <source src={projectsData[3].videoUrl} type='video/mp4' />
              Twój browser nie obsługuje tagu wideo.
            </video>
          </Link>
        </div>
        <div className={`${styles.mobile_div3} ${styles.mobile_div}`}>3</div>
        <div className={`${styles.mobile_div4} ${styles.mobile_div}`}>4</div>
        <div className={`${styles.mobile_div5} ${styles.mobile_div}`}>5</div>
        <div className={`${styles.mobile_div6} ${styles.mobile_div}`}>6</div>
        <div className={`${styles.mobile_div7} ${styles.mobile_div}`}>7</div>
        <div className={`${styles.mobile_div8} ${styles.mobile_div}`}>8</div>
      </div>
    </section>

    <section
      id='projects'
      className='bg-projects-grid-background relative hidden flex-col gap-[2px] pb-[1px] lg:flex'
    >
      <div className={`${styles.gridGradient} relative`}>
        <div className={`${styles.div28} ${styles.blank}`}></div>
        <div className={`${styles.div29} ${styles.blank} rounded-br-xl`}></div>
        <div className={`${styles.div30} ${styles.blank} rounded-b-xl`}></div>
        <div className={`${styles.div31} ${styles.blank} rounded-bl-xl`}></div>
        <div className={`${styles.div32} ${styles.blank}`}></div>
        <div className={`${styles.div33} ${styles.blank} `}></div>
        <div
          className={`${styles.div34} ${styles.blank} rounded-tr-xl rounded-br-xl`}
        ></div>
        <div
          className={`${styles.div35} ${styles.blank} rounded-t-xl rounded-bl-xl`}
        ></div>
        <div
          className={`${styles.div36} ${styles.blank} rounded-tl-xl rounded-br-xl`}
        ></div>
        <div className={`${styles.div37} ${styles.blank} rounded-bl-xl`}></div>
        <div className='to-background pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-transparent'></div>
        <h1 className='font-display absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-black lg:text-7xl'>
          Projekty
        </h1>
      </div>

      <div className={styles.gridContainer}>
        <div
          className={`${styles.div1} ${styles.item} overflow-hidden rounded-r-xl`}
        >
          <ProjectLink id={1} />
        </div>
        <div
          className={`${styles.div2} ${styles.item} overflow-hidden rounded-l-xl`}
        >
          <ProjectLink id={2} />
        </div>
        <div
          className={`${styles.div3} ${styles.item} overflow-hidden rounded-xl`}
        >
          <ProjectLink id={3} />
        </div>
        <div
          className={`${styles.div4} ${styles.item} overflow-hidden rounded-r-xl`}
        >
          <ProjectLink id={4} />
        </div>
        <div
          className={`${styles.div5} ${styles.item} overflow-hidden rounded-xl`}
        >
          <ProjectLink id={5} />
        </div>
        <div
          className={`${styles.div6} ${styles.item} overflow-hidden rounded-tr-xl`}
        >
          <ProjectLink id={6} />
        </div>
        <div
          className={`${styles.div7} ${styles.item} overflow-hidden rounded-t-xl`}
        >
          <ProjectLink id={7} />
        </div>
        <div
          className={`${styles.div8} ${styles.item} overflow-hidden rounded-tl-xl`}
        >
          <ProjectLink id={8} />
        </div>
        <div
          className={`${styles.div9} ${styles.blank} rounded-tl-xl rounded-br-xl`}
        ></div>
        <div
          className={`${styles.div10} ${styles.blank} rounded-r-xl rounded-bl-xl`}
        ></div>
        <div
          className={`${styles.div11} ${styles.blank} rounded-r-xl rounded-bl-xl`}
        ></div>
        <div className={`${styles.div12} ${styles.blank} rounded-l-xl`}></div>
        <div className={`${styles.div13} ${styles.blank} rounded-br-xl`}></div>
        <div
          className={`${styles.div14} ${styles.blank} rounded-tr-xl rounded-b-xl`}
        ></div>
        <div
          className={`${styles.div15} ${styles.blank} rounded-l-xl rounded-tr-xl`}
        ></div>
        <div
          className={`${styles.div16} ${styles.blank} rounded-tl-xl rounded-r-xl`}
        ></div>
        <div className={`${styles.div17} ${styles.blank} rounded-l-xl`}></div>
        <div className={`${styles.div18} ${styles.blank} rounded-t-xl`}></div>
        <div className={`${styles.div19} ${styles.blank} rounded-tl-xl`}></div>
        <div className={`${styles.div20} ${styles.blank} rounded-b-xl`}></div>
        <div className={`${styles.div21} ${styles.blank} rounded-bl-xl`}></div>
        <div className={`${styles.div22} ${styles.blank} rounded-r-xl`}></div>
        <div className={`${styles.div23} ${styles.blank} rounded-xl`}></div>
        <div
          className={`${styles.div24} ${styles.blank} rounded-l-xl rounded-br-xl`}
        ></div>
        <div
          className={`${styles.div25} ${styles.blank} rounded-tr-xl rounded-bl-xl`}
        ></div>
        <div className={`${styles.div26} ${styles.blank} rounded-t-xl`}></div>
        <div className={`${styles.div27} ${styles.blank} rounded-tl-xl`}></div>
      </div>
      <div
        className='hero-noise pointer-events-none absolute top-0 left-0 z-[1] h-full w-full bg-[url("/grain.png")] bg-repeat opacity-100 mix-blend-overlay'
        aria-hidden='true'
      />
    </section>
  </>
)

export default Projects
