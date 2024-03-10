'use client'
import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import { IconArrowLeft, IconArrowRight } from './icons'
import { Button } from './ui'
import { categories } from '@/utils/const'

export default function CategoriesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi)
      emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi)
      emblaApi.scrollNext()
  }, [emblaApi])
  return (
    <>
      <h2 className=" text-center text-3xl md:text-5xl text-gray-dark m-6 font-bold">
        Newest Collection Available
      </h2>

      <article ref={emblaRef} className="overflow-hidden mt-10  relative">
        <div className="flex  lg:justify-between mb-10 mt-10 ">
          {categories.map((data, index) => (
            <Link
              href="/"
              key={index}
              className=" shrink-0 snap-start hover:scale-105 text-center bg-white p-4 rounded-md drop-shadow-lg transition-transform ease-in-out duration-500"
            >
              <Image
                src={data.src}
                alt={`Imagen de ${data.title}`}
                className="w-32 h-24 rounded-md mb-2 object-cover"
              />
              <p className="text-sm font-bold">{data.title}</p>
            </Link>
          ))}
        </div>
        <Button
          className="embla__prev absolute top-0  left-10 md:right-16 md:left-auto  lg:hidden"
          onClick={scrollPrev}
        >
          <IconArrowLeft />
        </Button>
        <Button
          className="embla__next  absolute top-0 left-20 md:right-8 md:left-auto lg:hidden"
          onClick={scrollNext}
        >
          <IconArrowRight />
        </Button>
      </article>
    </>
  )
}
