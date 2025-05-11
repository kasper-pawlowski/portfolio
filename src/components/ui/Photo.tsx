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
    <div className='border-foreground absolute top-[-70%] right-10 flex h-auto w-60 flex-col overflow-hidden rounded-3xl border-3 shadow-[8px_8px_0_0_var(--foreground)] duration-300 ease-in-out hover:scale-95 xl:top-[-90%] xl:w-70'>
      <div className='flex w-full items-center justify-between px-3 py-2 backdrop-blur-md'>
        <p className='text-foreground font-600 font-sans text-lg'>Photo.jpg</p>
        <div className='flex items-center justify-center gap-1'>
          <SquareMinus />
          <SquareSquare />
          <SquareX />
        </div>
      </div>
      <div className='border-foreground relative aspect-square overflow-hidden border-t-3'>
        <Image src='/photo.png' alt='Photo' fill={true} />
      </div>
    </div>
  )
}

export default Photo
