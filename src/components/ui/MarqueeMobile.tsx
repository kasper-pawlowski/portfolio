import React, { useEffect, useRef } from 'react'

type MarqueeMobileProps = {
  tileSize?: number
  stroke?: string
  fill?: string
  className?: string
  width?: string
  height?: string
  id?: number
}

const MarqueeMobile = ({
  tileSize = 39,
  stroke = '#8A8A8A',
  fill = 'none',
  width = '100%',
  height = 'auto',
  className = '',
  id
}: MarqueeMobileProps) => {
  const computedClassName = `${className} absolute bottom-0 z-1 w-full h-auto ${
    id === 1 ? 'left-[-50%]' : id === 2 ? 'left-[50%]' : 'left-[0%]'
  }`

  const parallaxMarqueeMobileRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (parallaxMarqueeMobileRef.current) {
      const height =
        parallaxMarqueeMobileRef.current.getBoundingClientRect().height
      document.documentElement.style.setProperty(
        '--parallaxMarqueeMobile-height',
        `${height}px`
      )
    }
  }, [])

  return (
    <svg
      ref={parallaxMarqueeMobileRef}
      width={width}
      height={height}
      viewBox='0 0 391 79'
      fill='none'
      className={computedClassName}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='divider'>
        <g id='row1'>
          <rect
            id='sq01-r1'
            x='0.5'
            y='0.5'
            width='39'
            height='39'
            stroke='#8A8A8A'
          />
          <rect
            id='sq02-r1'
            x='39.5'
            y='0.5'
            width='39'
            height='39'
            stroke='#8A8A8A'
          />
          <rect
            id='sq03-r1'
            x='78.5'
            y='0.5'
            width='39'
            height='39'
            stroke='#8A8A8A'
          />
          <rect
            id='sq04-r1'
            x='117.5'
            y='0.5'
            width='39'
            height='39'
            stroke='#8A8A8A'
          />
          <rect
            id='sq05-r1'
            x='156.5'
            y='0.5'
            width='39'
            height='39'
            stroke='#8A8A8A'
          />
          <rect
            id='sq06-r1'
            x='195.5'
            y='0.5'
            width='39'
            height='39'
            stroke='#8A8A8A'
          />
          <rect
            id='sq07-r1'
            x='234.5'
            y='0.5'
            width='39'
            height='39'
            stroke='#8A8A8A'
          />
          <rect
            id='sq08-r1'
            x='273.5'
            y='0.5'
            width='39'
            height='39'
            stroke='#8A8A8A'
          />
          <rect
            id='sq09-r1'
            x='312.5'
            y='0.5'
            width='39'
            height='39'
            stroke='#8A8A8A'
          />
          <g id='sq10-r1'>
            <mask id='path-10-inside-1_562_524' fill='white'>
              <path d='M351 0H391V40H351V0Z' />
            </mask>
            <path
              d='M351 0V-1H350V0H351ZM351 40H350V41H351V40ZM351 0V1H391V0V-1H351V0ZM391 40V39H351V40V41H391V40ZM351 40H352V0H351H350V40H351Z'
              fill='#8A8A8A'
              mask='url(#path-10-inside-1_562_524)'
            />
          </g>
        </g>
        <g id='row2'>
          <rect
            id='sq01-r2'
            x='0.5'
            y='39.5'
            width='39'
            height='39'
            stroke='#8A8A8A'
          />
          <rect
            id='sq02-r2'
            x='39.5'
            y='39.5'
            width='39'
            height='39'
            stroke='#8A8A8A'
          />
          <rect
            id='sq03-r2'
            x='78.5'
            y='39.5'
            width='39'
            height='39'
            stroke='#8A8A8A'
          />
          <rect
            id='sq04-r2'
            x='117.5'
            y='39.5'
            width='39'
            height='39'
            stroke='#8A8A8A'
          />
          <rect
            id='sq05-r2'
            x='156.5'
            y='39.5'
            width='39'
            height='39'
            stroke='#8A8A8A'
          />
          <rect
            id='sq06-r2'
            x='234.5'
            y='39.5'
            width='39'
            height='39'
            stroke='#8A8A8A'
          />
          <rect
            id='sq07-r2'
            x='273.5'
            y='39.5'
            width='39'
            height='39'
            stroke='#8A8A8A'
          />
          <rect
            id='sq08-r2'
            x='312.5'
            y='39.5'
            width='39'
            height='39'
            stroke='#8A8A8A'
          />
          <g id='sq09-r2'>
            <mask id='path-20-inside-2_562_524' fill='white'>
              <path d='M351 39H391V79H351V39Z' />
            </mask>
            <path
              d='M351 39V38H350V39H351ZM351 79H350V80H351V79ZM351 39V40H391V39V38H351V39ZM391 79V78H351V79V80H391V79ZM351 79H352V39H351H350V79H351Z'
              fill='#8A8A8A'
              mask='url(#path-20-inside-2_562_524)'
            />
          </g>
          <rect
            id='sq30-r2'
            x='195.5'
            y='39.5'
            width='39'
            height='39'
            stroke='#8A8A8A'
          />
        </g>
        <g id='elements'>
          <path
            id='portal01'
            d='M117.508 23.5381C119.279 31.4656 125.515 37.703 133.435 39.4619C125.49 41.2264 119.239 47.4978 117.491 55.4609C115.72 47.5336 109.484 41.2956 101.564 39.5371C109.51 37.7728 115.76 31.5018 117.508 23.5381Z'
            fill='#A3A3A3'
            stroke='#8A8A8A'
          />
          <path
            id='portal02'
            d='M312.508 23.5381C314.279 31.4656 320.515 37.703 328.435 39.4619C320.49 41.2264 314.239 47.4978 312.491 55.4609C310.72 47.5336 304.484 41.2956 296.564 39.5371C304.51 37.7728 310.76 31.5018 312.508 23.5381Z'
            fill='#A3A3A3'
            stroke='#8A8A8A'
          />
        </g>
      </g>
    </svg>
  )
}

export default MarqueeMobile
