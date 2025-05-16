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
    <div className='border-foreground absolute top-[15%] right-8 flex h-auto w-40 flex-col overflow-hidden rounded-3xl border-3 shadow-[8px_8px_0_0_var(--foreground)] duration-300 ease-in-out lg:top-[-70%] lg:right-10 lg:w-60 xl:top-[-90%] xl:w-70'>
      <div className='flex w-full items-center justify-between px-3 py-2 backdrop-blur-md'>
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
