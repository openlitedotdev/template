'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui'
import Carousel from './carousel'
import { Watch } from '@/utils/const'

export default function WathcCarousel() {
  return (
    <section className="max-w-7xl mx-auto mt-10 py-10">
      <Carousel className="flex md:gap-4 lg:justify-center" buttons>
        {Watch.map((data, index) => (
          <Link
            href="/"
            key={index}
            className=" shrink-0 snap-start hover:scale-105 text-center bg-white p-4 rounded-md  transition-transform ease-in-out duration-500"
          >
            <figure>
              {' '}
              <Image
                src={data.src}
                alt={`Imagen de ${data.name}`}
                className="size-44 object-contain"
                height={200}
              />
            </figure>
            <span className="text-[#BF4800] text-xs font-bold">New</span>
            <h3 className="text-sm font-bold">{data.name}</h3>
            <p className="text-xs font-semibold">{data.price}</p>
            <Button className="px-8 py-1 mt-2 hover:px-12 transition-all duration-700 ease-in-out bg-[#1c4060] text-white font-bold rounded  hover:bg-[#2a4054] shadow-xl">
              Buy
            </Button>
          </Link>
        ))}
      </Carousel>
    </section>
  )
}
