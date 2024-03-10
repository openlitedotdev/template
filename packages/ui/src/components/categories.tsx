'use client'

import Link from 'next/link'
import Image from 'next/image'
import Carousel from './carousel'
import { categories } from '@/utils/const'

export default function Categories() {
  return (
    <section className="relative bg-white max-w-7xl mx-auto">
      <Carousel className="flex gap-5 my-8 lg:justify-center snap-x" autoplay>
        {categories.map((data, index) => (
          <Link
            href="/"
            key={index}
            className="shrink-0 snap-start hover:scale-105 text-center rounded-md transition-transform ease-in-out duration-150 flex flex-col items-center justify-center"
          >
            <Image
              src={data.src}
              alt={`Imagen de ${data.title}`}
              className="size-32 object-contain"
            />
            <p className="text-sm font-bold">{data.title}</p>
          </Link>
        ))}
      </Carousel>
    </section>
  )
}
