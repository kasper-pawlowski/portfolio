import {
  Maximize,
  Minus,
  Square,
  SquareMinus,
  SquareSquare,
  SquareX,
  X
} from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Photo = () => {
  return (
    <div className='border-foreground shadow-elevated hover:shadow-elevated-hover absolute top-1/2 left-1/2 z-1 flex h-auto w-40 -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-3xl duration-200 ease-in-out hover:-translate-x-[calc(50%-4px)] hover:-translate-y-[calc(50%-4px)] lg:w-60 xl:w-70'>
      <div className='flex w-full items-center justify-between px-3 py-2 backdrop-blur-sm'>
        <p className='text-foreground font-600 font-sans text-sm lg:text-lg'>
          Photo.jpg
        </p>
        <div className='hidden items-center justify-center gap-1 lg:flex'>
          <SquareMinus />
          <SquareSquare />
          <SquareX />
        </div>
        <div className='flex items-center justify-center gap-1 lg:hidden'>
          <SquareMinus size={15} />
          <SquareSquare size={15} />
          <SquareX size={15} />
        </div>
      </div>
      <div className='border-foreground relative aspect-square overflow-hidden border-t-3'>
        <Image src='/photo.png' alt='Photo' fill={true} />
      </div>
    </div>
  )
}

export default Photo
