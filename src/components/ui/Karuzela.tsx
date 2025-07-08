import data from '@/data/projects.json'
import Image from 'next/image'

type CarouselProps = {
  projectId: number
}

const Karuzela = ({ projectId }: CarouselProps) => {
  const project = data.find(p => p.id === projectId)

  if (!project) return null

  return (
    <div className='flex flex-4/8 flex-col overflow-visible'>
      <div className='flex flex-col gap-4 overflow-y-auto'>
        {project.images.map((image, index) => {
          return (
            <div key={index} className=''>
              <Image
                src={image}
                alt={`Project image ${index + 1}`}
                width={800}
                height={600}
                className='rounded-2xl object-cover'
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Karuzela
